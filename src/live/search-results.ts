import { Modal, Notice, type App } from 'obsidian';
import { SupersededVoiceNavigation, UnsupportedVoiceNote } from './desktop-workspace';
import type { VaultSearchRequest, VaultSearchResult } from './vault-tools';

type Choose = (path: string) => Promise<void>;
type More = (request: VaultSearchRequest) => Promise<void>;

/** Local results are rendered as text using the same list in both presentations. */
export class VaultSearchResultsList {
  private entries = new Map<string, VaultSearchResult['matches'][number]>();
  private opening = false;
  private requestID = 0;
  private activePath = '';
  private status?: HTMLElement;
  private statusText = '';

  constructor(private root: HTMLElement, private result: VaultSearchResult, private request: VaultSearchRequest,
    private choose: Choose, private more: More, private inline: boolean) {
    this.update(result, request);
  }

  update(result: VaultSearchResult, request: VaultSearchRequest): void {
    if (request.query !== this.request.query || request.folder !== this.request.folder || request.mode !== this.request.mode || request.offset === 0) this.entries.clear();
    this.request = request; this.result = result;
    result.matches.forEach((entry) => this.entries.set(entry.path, entry)); this.render();
  }

  private selectionStatus(text: string): void {
    this.statusText = text;
    this.status?.setText(text);
  }

  private render(): void {
    this.root.empty();
    if (this.inline) this.root.createEl('h3', { text: 'Search results' });
    this.root.createEl('p', { text: this.request.query ? `Matches for “${this.request.query}”` : 'Notes and files in your vault' });
    this.root.createEl('p', { cls: 'fjg-vault-live-caption', text: `${this.entries.size} of ${this.result.total_matches} matches shown. ${this.result.coverage}` });
    if (this.inline) this.status = this.root.createEl('p', { cls: 'fjg-vault-search-selection', text: this.statusText, attr: { role: 'status', 'aria-live': 'polite' } });
    const list = this.root.createEl('ul', { cls: 'fjg-vault-search-list' });
    for (const entry of this.entries.values()) {
      const item = list.createEl('li');
      const title = entry.path.split('/').pop() || entry.path;
      const link = item.createEl('a', { text: title, href: '#', cls: 'internal-link', attr: { 'data-href': entry.path, 'aria-label': `Open ${entry.path}` } });
      if (entry.path === this.activePath) link.setAttribute('aria-current', 'true');
      link.addEventListener('click', async (event) => {
        event.preventDefault(); event.stopPropagation();
        if (!this.inline && this.opening) return;
        this.opening = true;
        const id = ++this.requestID;
        if (this.inline) this.selectionStatus(`Opening ${title}…`);
        try {
          await this.choose(entry.path);
          if (id !== this.requestID) return;
          this.activePath = entry.path;
          if (this.inline) {
            this.root.querySelector('[aria-current]')?.removeAttribute('aria-current');
            Array.from(this.root.querySelectorAll('a[data-href]'))
              .find(candidate => candidate.getAttribute('data-href') === entry.path)?.setAttribute('aria-current', 'true');
            this.selectionStatus(`Opened ${title} in the note pane.`);
          }
        } catch (error) {
          if (id !== this.requestID || error instanceof SupersededVoiceNavigation) return;
          const message = error instanceof UnsupportedVoiceNote ? error.message : 'That result could not be opened. Search again if the note moved.';
          if (this.inline) this.selectionStatus(message);
          else new Notice(message);
        } finally { if (id === this.requestID) this.opening = false; }
      });
      item.createEl('div', { text: entry.path, cls: 'fjg-vault-search-path' });
      if (entry.excerpt) item.createEl('p', { text: entry.excerpt, cls: 'fjg-vault-search-excerpt' });
    }
    if (!this.entries.size) this.root.createEl('p', { text: 'No matches on this page.' });
    if (this.result.next_offset !== null) {
      const nextOffset = this.result.next_offset;
      const button = this.root.createEl('button', { text: 'Show more matches' });
      button.addEventListener('click', async () => {
        button.disabled = true;
        try { await this.more({ ...this.request, offset: nextOffset }); }
        catch {
          button.disabled = false;
          const message = 'Could not fetch more results. The voice session may have ended.';
          if (this.inline) this.selectionStatus(message);
          else new Notice(message);
        }
      });
    }
  }
}

export class VaultSearchResultsModal extends Modal {
  private list?: VaultSearchResultsList;
  constructor(app: App, private result: VaultSearchResult, private request: VaultSearchRequest, private choose: Choose,
    private more: More, private release: () => void) { super(app); }
  onOpen(): void {
    this.modalEl.addClass('fjg-vault-search-modal');
    this.titleEl.setText('Choose a search result');
    this.list = new VaultSearchResultsList(this.contentEl, this.result, this.request, async (path) => {
      await this.choose(path);
      this.close();
    }, this.more, false);
  }
  onClose(): void { this.release(); }
  update(result: VaultSearchResult, request: VaultSearchRequest): void {
    this.result = result; this.request = request; this.list?.update(result, request);
  }
}
