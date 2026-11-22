import { ItemView, Modal, TFile, type App, type WorkspaceLeaf } from 'obsidian';
import type FileTreeAlternativePlugin from '../main';
import { VaultLiveSession, type LiveState } from './session';
import { VaultLiveTools, type VaultPort, type VaultSearchRequest, type VaultSearchResult } from './vault-tools';
import { VaultSearchResultsList, VaultSearchResultsModal } from './search-results';
import { DesktopVoiceNotePane, hasDesktopVoiceFileView, SupersededVoiceNavigation, UnsupportedVoiceNote, VAULT_VOICE_VIEW_TYPE } from './desktop-workspace';

class VaultVoicePanel {
  private session?: VaultLiveSession;
  private closed = false;
  private muted = false;
  private status!: HTMLElement;
  private coverage!: HTMLElement;
  private transcript!: HTMLElement;
  private saved!: HTMLElement;
  private sources!: HTMLElement;
  private audio!: HTMLAudioElement;
  private startButton!: HTMLButtonElement;
  private muteButton!: HTMLButtonElement;
  private endButton!: HTMLButtonElement;
  private expandButton!: HTMLButtonElement;
  private sourcePaths = new Set<string>();
  private resultsModal?: VaultSearchResultsModal;
  private inlineResults?: VaultSearchResultsList;
  private resultsHost?: HTMLElement;
  private lastSpeaker = '';
  private lastText?: HTMLElement;
  constructor(private app: App, private plugin: FileTreeAlternativePlugin,
    private voiceSelection: { folder: string; note: string },
    private openNote: (file: TFile) => Promise<void>,
    private collapse?: (compact: boolean) => void) {}

  mount(root: HTMLElement): void {
    root.createEl('p', { cls: 'fjg-vault-live-intro', text: 'Ask about your notes, capture a thought, or say what to update. Clear edits save immediately.' });
    root.createEl('p', { cls: 'fjg-vault-live-caption', text: 'Microphone audio and relevant note excerpts go to OpenAI while connected. Uses your saved API key.' });
    this.status = root.createEl('p', { cls: 'fjg-vault-live-status', text: 'Microphone off — press Start conversation', attr: { role: 'status', 'aria-live': 'polite' } });
    this.coverage = root.createEl('p', { cls: 'fjg-vault-live-coverage', attr: { role: 'status' } });
    const controls = root.createDiv({ cls: 'fjg-vault-live-controls' });
    this.startButton = controls.createEl('button', { text: 'Start conversation', cls: 'mod-cta' });
    this.startButton.addEventListener('click', () => void this.start());
    this.muteButton = controls.createEl('button', { text: 'Mute microphone', attr: { 'aria-pressed': 'false' } });
    this.muteButton.disabled = true;
    this.muteButton.addEventListener('click', () => {
      this.muted = !this.muted; this.session?.mute(this.muted);
      this.muteButton.setText(this.muted ? 'Unmute microphone' : 'Mute microphone');
      this.muteButton.setAttribute('aria-pressed', String(this.muted));
      this.status.setText(this.muted ? 'Microphone muted' : 'Ready — start speaking');
    });
    this.endButton = controls.createEl('button', { text: 'End conversation' });
    this.endButton.disabled = true; this.endButton.addEventListener('click', () => this.session?.end());
    if (this.collapse) {
      this.expandButton = controls.createEl('button', { text: 'Expand conversation', cls: 'fjg-vault-live-expand' });
      this.expandButton.addEventListener('click', () => this.collapse?.(false));
    }
    this.audio = root.createEl('audio', { attr: { controls: '', autoplay: '', 'aria-label': 'Assistant voice playback' } });
    this.transcript = root.createDiv({ cls: 'fjg-vault-live-transcript', attr: { role: 'log', 'aria-label': 'Conversation', 'aria-live': 'polite' } });
    this.transcript.createEl('p', { cls: 'fjg-vault-live-caption', text: 'Try: “Find my notes about summer planning” or “Add this thought to my meeting note.”' });
    if (!this.collapse) this.resultsHost = root.createDiv({ cls: 'fjg-vault-live-inline-results' });
    this.sources = root.createDiv({ cls: 'fjg-vault-live-sources', attr: { 'aria-label': 'Source notes' } });
    this.saved = root.createDiv({ cls: 'fjg-vault-live-saved', attr: { role: 'log', 'aria-label': 'Saved changes', 'aria-live': 'polite' } });
  }
  private file(path: string): TFile {
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof TFile)) throw new Error('The note no longer exists.');
    return file;
  }
  async start(): Promise<void> {
    if (this.closed || this.startButton.disabled) return;
    this.startButton.disabled = true; this.session?.dispose(); this.muted = false;
    this.inlineResults = undefined; this.resultsHost?.empty();
    this.muteButton.setText('Mute microphone'); this.muteButton.setAttribute('aria-pressed', 'false');
    this.lastSpeaker = ''; this.lastText = undefined;
    const port: VaultPort = {
      files: () => this.app.vault.getFiles().map((file) => ({ path: file.path, size: file.stat.size })),
      read: (path) => this.app.vault.read(this.file(path)),
      process: async (path, change) => {
        if (typeof this.app.vault.process !== 'function') throw new Error('Update Obsidian to use atomic note edits.');
        await this.app.vault.process(this.file(path), change);
      },
      create: async (path, content) => { await this.app.vault.create(path, content); },
      exists: (path) => !!this.app.vault.getAbstractFileByPath(path),
      open: (path) => this.showNote(path)
    };
    let session: VaultLiveSession;
    const tools = new VaultLiveTools(port, () => !this.closed && session.active, (path, message) => {
      if (!this.closed) this.saved.createEl('p', { text: `${message}: ${path}` });
    }, (path) => this.addSource(path), (result, request) => {
      if (this.closed) return;
      this.coverage.setText(result.coverage);
      this.showResults(result, request, session, tools);

    });
    session = new VaultLiveSession(this.audio, {
      state: (state, message) => this.setState(state, message),
      transcript: (speaker, delta) => this.addTranscript(speaker, delta),
      execute: (name, args) => tools.execute(name, args)
    });
    this.session = session; this.setState('connecting', 'Connecting… Please wait before speaking.');
    try {
      const key = await this.plugin.resolveVoiceApiKey();
      if (this.closed || this.session !== session) return;
      const context = JSON.stringify({ vault: this.app.vault.getName(), local_date: new Date().toLocaleDateString('en-CA'),
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone, selected_folder: this.voiceSelection.folder,
        selected_note: this.voiceSelection.note || this.app.workspace.getActiveFile()?.path || '', search_scope: 'Entire vault unless the user requests a folder' });
      await session.start(key, this.plugin.settings.liveBackendModel, context);
    } catch { session.dispose(); this.setState('error', 'Could not load the saved OpenAI key. Check File Focus voice settings.'); }
  }
  private showResults(result: VaultSearchResult, request: VaultSearchRequest, session: VaultLiveSession, tools: VaultLiveTools): void {
    if (this.closed || this.session !== session) return;
    const choose = async (path: string) => {
      await this.showNote(path);
      if (!this.closed && this.session === session) { this.addSource(path); session.selectedNote(path); }
    };
    const more = async (next: VaultSearchRequest) => { await tools.execute('search_vault', JSON.stringify(next)); };
    if (this.resultsHost) {
      if (this.inlineResults) this.inlineResults.update(result, request);
      else this.inlineResults = new VaultSearchResultsList(this.resultsHost, result, request, choose, more, true);
      return;
    }
    if (this.resultsModal) { this.resultsModal.update(result, request); return; }
    if (result.matches.length < 2) return;
    this.resultsModal = new VaultSearchResultsModal(this.app, result, request, choose, more, () => { this.resultsModal = undefined; });
    this.resultsModal.open();
  }

  close(dispose = false): void {
    if (this.closed) return;
    this.closed = true; this.resultsModal?.close(); this.session?.end();
    if (dispose) this.session?.dispose();
  }
  private setState(state: LiveState, message: string): void {
    if (this.closed) return;
    this.status.setText(message); this.status.dataset.state = state;
    this.startButton.setText(state === "connecting" ? "Connecting…" : state === "connected" ? "Conversation active" : "Start conversation");
    this.status.setAttribute("aria-busy", String(state === "connecting"));
    this.startButton.disabled = ['connecting', 'connected', 'ending'].includes(state);
    this.muteButton.disabled = state !== 'connected'; this.endButton.disabled = !['connecting', 'connected'].includes(state);
  }
  private addSource(path: string): void {
    if (this.closed || this.sourcePaths.has(path)) return;
    this.sourcePaths.add(path);
    const button = this.sources.createEl('button', { text: path.split('/').pop() || path, attr: { title: path, 'aria-label': `Open source ${path}` } });
    button.addEventListener('click', () => void this.showNote(path)
      .then(() => { if (!this.closed) this.session?.selectedNote(path); })
      .catch((error) => { if (!this.closed && !(error instanceof SupersededVoiceNavigation)) this.status.setText('The source note could not be opened.'); }));
  }
  private async showNote(path: string): Promise<void> {
    if (this.closed) throw new SupersededVoiceNavigation();
    await this.openNote(this.file(path));
    if (this.closed) throw new SupersededVoiceNavigation();
    this.voiceSelection.note = path;
  }
  private addTranscript(speaker: string, delta: string): void {
    if (this.closed) return;
    if (!this.lastText || speaker !== this.lastSpeaker) {
      const line = this.transcript.createEl('p'); line.createEl('strong', { text: `${speaker}: ` });
      this.lastText = line.createSpan(); this.lastSpeaker = speaker;
    }
    this.lastText.appendText(delta);
    while (this.transcript.children.length > 80) this.transcript.firstElementChild?.remove();
    this.transcript.scrollTop = this.transcript.scrollHeight;
  }
}

/** Mobile retains its existing modal handoff and search chooser. */
export class VaultVoiceModal extends Modal {
  private panel?: VaultVoicePanel;
  constructor(app: App, private plugin: FileTreeAlternativePlugin, private selection: { folder: string; note: string }, private release: () => void) {
    super(app);
  }

  onOpen(): void {
    this.titleEl.setText('Talk to your vault');
    this.modalEl.addClass('fjg-vault-live-modal');
    this.panel = new VaultVoicePanel(this.app, this.plugin, this.selection, async (file) => {
      const workspace = this.app.workspace;
      const existing = workspace.getLeavesOfType('markdown').find(leaf => leaf.getViewState().state?.file === file.path);
      const leaf = existing || workspace.getLeaf('tab');
      await leaf.openFile(file);
      if (file.parent) await this.plugin.revealFolderPath(file.parent.path);
      await workspace.revealLeaf(leaf);
      this.setCompact(true);
    }, (compact) => this.setCompact(compact));
    this.panel.mount(this.contentEl);
  }

  onClose(): void { this.panel?.close(); this.release(); }
  shutdown(): void { this.panel?.close(true); this.close(); }
  private setCompact(compact: boolean): void {
    this.modalEl.classList.toggle('is-compact', compact);
    this.modalEl.closest('.modal-container')?.classList.toggle('fjg-vault-live-compact-host', compact);
  }
}

/** Desktop is a native root ItemView, independent of the real note container. */
export class VaultVoiceView extends ItemView {
  private panel?: VaultVoicePanel;
  private notePane?: DesktopVoiceNotePane;
  constructor(leaf: WorkspaceLeaf, private plugin: FileTreeAlternativePlugin, private release: (leaf: WorkspaceLeaf) => void) { super(leaf); }

  getViewType(): string { return VAULT_VOICE_VIEW_TYPE; }
  getDisplayText(): string { return 'Talk to your vault'; }
  getIcon(): string { return 'mic'; }

  attachConversation(anchor: WorkspaceLeaf, selection: { folder: string; note: string }): void {
    if (this.panel) return;
    this.contentEl.empty();
    this.contentEl.addClass('fjg-vault-live-pane');
    const title = this.contentEl.createDiv({ cls: 'fjg-vault-live-pane-title' });
    title.createEl('h2', { text: 'Talk to your vault' });
    title.createEl('button', { text: 'Close chat' }).addEventListener('click', () => this.leaf.detach());
    const notePane = this.notePane = new DesktopVoiceNotePane(this.app.workspace, this.leaf, anchor);
    this.panel = new VaultVoicePanel(this.app, this.plugin, selection, (file) => {
      if (!hasDesktopVoiceFileView(this.app, file)) return Promise.reject(new UnsupportedVoiceNote());
      return notePane.open(file, path => this.app.vault.getAbstractFileByPath(path) === file);
    });
    this.panel.mount(this.contentEl);
  }

  async onOpen(): Promise<void> {
    // A restored workspace never restarts a conversation or its microphone.
    this.contentEl.createEl('p', { text: 'Run Talk to Your Vault to start a new conversation.' });
  }

  async onClose(): Promise<void> {
    this.endConversation();
    this.release(this.leaf);
  }

  shutdown(): void { this.endConversation(true); this.leaf.detach(); }

  private endConversation(dispose = false): void {
    this.notePane?.close(); this.notePane = undefined;
    this.panel?.close(dispose); this.panel = undefined;
    this.contentEl.empty();
    this.contentEl.removeClass('fjg-vault-live-pane');
  }
}
