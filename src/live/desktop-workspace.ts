import type { App, TFile, Workspace, WorkspaceLeaf } from 'obsidian';

export const VAULT_VOICE_VIEW_TYPE = 'fjg-file-focus-vault-voice';

export class SupersededVoiceNavigation extends Error {
  constructor() { super('A newer choice replaced this request.'); }
}

export class UnsupportedVoiceNote extends Error {
  constructor() { super('There is no Obsidian view for this file type in the note pane.'); }
}

/** Never let openFile fall through to the OS's default app. Older desktop
 * versions without exposed registry access are safely limited to Markdown. */
export function hasDesktopVoiceFileView(app: App, file: TFile): boolean {
  const registry = (app as App & { viewRegistry?: { getTypeByExtension?: (extension: string) => string | undefined } }).viewRegistry;
  return typeof registry?.getTypeByExtension === 'function'
    ? !!registry.getTypeByExtension(file.extension)
    : file.extension === 'md';
}

/** Command and sidebar launches both split the main workspace, not the sidebar. */
export function desktopVoiceAnchor(workspace: Workspace, chat?: WorkspaceLeaf): WorkspaceLeaf | null {
  const isNoteLane = (leaf: WorkspaceLeaf | null): leaf is WorkspaceLeaf =>
    !!leaf && leaf !== chat && leaf.getRoot() === workspace.rootSplit &&
    (!chat || !chat.parent || leaf.parent !== chat.parent) &&
    leaf.getViewState().type !== VAULT_VOICE_VIEW_TYPE;
  if (isNoteLane(workspace.activeLeaf)) return workspace.activeLeaf;
  const recent = workspace.getMostRecentLeaf(workspace.rootSplit);
  if (isNoteLane(recent)) return recent;
  let fallback: WorkspaceLeaf | null = null;
  workspace.iterateRootLeaves(leaf => { if (!fallback && isNoteLane(leaf)) fallback = leaf; });
  return fallback;
}

/** One native result tab in the original note group. Never replace an existing user tab. */
export class DesktopVoiceNotePane {
  private target?: WorkspaceLeaf;
  private targetPath?: string;
  private createdTarget = false;
  private rightGroup?: WorkspaceLeaf['parent'];
  private requested = 0;
  private closed = false;
  private queue: Promise<void> = Promise.resolve();

  private workspace: Workspace;
  private chat: WorkspaceLeaf;
  private anchor: WorkspaceLeaf;
  constructor(workspace: Workspace, chat: WorkspaceLeaf, anchor: WorkspaceLeaf) {
    this.workspace = workspace; this.chat = chat; this.anchor = anchor;
    this.rightGroup = anchor.parent;
  }

  open(file: TFile, isCurrent = (_path: string) => true): Promise<void> {
    const request = ++this.requested, path = file.path;
    const verifyFile = () => {
      if (file.path !== path || !isCurrent(path)) throw new Error('The result moved. Search again before opening it.');
    };
    const run = this.queue.then(async () => {
      this.check(request);
      verifyFile();
      const leaf = this.resultLeaf();
      await leaf.openFile(file, { active: false });
      // Record even a superseded native open, so the latest queued choice
      // can reuse the same leaf rather than leaving intermediate tabs.
      if (this.target === leaf && leaf.getViewState().state?.file === path) this.targetPath = path;
      this.check(request);
      verifyFile();
      this.requireResult(leaf, path);
      await this.workspace.revealLeaf(leaf);
      this.check(request);
      verifyFile();
      this.requireResult(leaf, path);
    });
    this.queue = run.catch(() => {});
    return run;
  }

  close(): void {
    this.closed = true;
    ++this.requested;
    // A successfully opened note is an ordinary native tab. Remove only an empty
    // tab we created ourselves; never touch the original note or its tab group.
    const target = this.target, state = target?.getViewState();
    if (target && this.createdTarget && !this.targetPath && state?.type === 'empty' && !state.pinned &&
      (!this.rightGroup || target.parent === this.rightGroup) && this.isNoteLeaf(target)) target.detach();
    this.target = undefined; this.targetPath = undefined; this.createdTarget = false;
  }

  private check(request: number): void {
    if (this.closed || this.requested !== request) throw new SupersededVoiceNavigation();
  }

  private isNoteLeaf(leaf: WorkspaceLeaf): boolean {
    // Iterate to reject a detached leaf even if an older Obsidian build still
    // returns its previous parent/root from getRoot().
    let attached = false;
    this.workspace.iterateRootLeaves(candidate => { if (candidate === leaf) attached = true; });
    return attached && leaf !== this.chat && leaf.getRoot() === this.workspace.rootSplit &&
      (!this.chat.parent || leaf.parent !== this.chat.parent);
  }

  private requireResult(leaf: WorkspaceLeaf, path: string): void {
    if (!this.isNoteLeaf(leaf) || (this.rightGroup && leaf.parent !== this.rightGroup) || leaf.getViewState().state?.file !== path) {
      throw new Error('Obsidian could not display that result in the note pane.');
    }
  }

  private resultLeaf(): WorkspaceLeaf {
    if (this.target && this.isNoteLeaf(this.target) && (!this.rightGroup || this.target.parent === this.rightGroup)) {
      const state = this.target.getViewState();
      if (this.targetPath ? state.state?.file === this.targetPath && !state.pinned : state.type === 'empty' && !state.pinned) {
        return this.target;
      }
      // If the user repurposed/pinned the result tab, leave it alone.
    }
    const prior = new Set<WorkspaceLeaf>();
    let inPreviousGroup: WorkspaceLeaf | undefined;
    this.workspace.iterateAllLeaves(leaf => {
      prior.add(leaf);
      if (!inPreviousGroup && this.rightGroup && leaf.parent === this.rightGroup &&
        leaf !== this.chat && leaf.getRoot() === this.workspace.rootSplit) inPreviousGroup = leaf;
    });
    const anchor = this.isNoteLeaf(this.anchor) && (!this.rightGroup || this.anchor.parent === this.rightGroup)
      ? this.anchor : inPreviousGroup ?? desktopVoiceAnchor(this.workspace, this.chat);
    // Prefer an existing right-side note group. If the user closed it entirely,
    // recreate it with a single native split to the right of the chat.
    if (anchor) this.workspace.setActiveLeaf(anchor, { focus: false });
    const leaf = anchor ? this.workspace.getLeaf('tab') : this.workspace.createLeafBySplit(this.chat, 'vertical', false);
    const created = !prior.has(leaf);
    if (!this.isNoteLeaf(leaf) || (anchor?.parent && leaf.parent !== anchor.parent) ||
      (!created && leaf.getViewState().type !== 'empty') || leaf.getViewState().pinned) {
      if (created) leaf.detach();
      throw new Error('Obsidian could not make a result tab in the note pane.');
    }
    this.target = leaf; this.targetPath = undefined; this.createdTarget = created; this.rightGroup = leaf.parent;
    return leaf;
  }
}
