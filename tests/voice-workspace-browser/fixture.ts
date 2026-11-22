import { TFile } from 'obsidian';
import FileFocusPlugin from '../../src/main';
import { VaultVoiceView } from '../../src/live/modal';
import { VAULT_VOICE_VIEW_TYPE } from '../../src/live/desktop-workspace';

const w = window as any;
w.notices = []; w.modals = [];
const stage = document.getElementById('workspace')!;
type Group = { node: HTMLElement; leaves: Leaf[]; shown?: Leaf };
const group = (): Group => ({ node: document.createElement('section'), leaves: [] });
const right = group(), sidebar = group();
stage.append(sidebar.node, right.node); sidebar.node.className = 'sidebar';
const app = {} as any;
const root = {}, side = {};
let active: Leaf, recent: Leaf;
let id = 0, inFlight = '', hold: string | undefined, release: (() => void) | undefined;
const files = new Map<string, TFile>();
const notes = ['Original.md', 'Pinned.md', 'A.md', 'B.md', 'Unsupported.bin'];
for (const path of notes) {
  const f = new TFile();
  f.name = path; f.path = path; f.extension = path.split('.').pop()!;
  files.set(path, f);
}
const requests: string[] = [], selectedPaths: string[] = [];
let ends = 0, disposes = 0, launches = 0;
class Leaf {
  id = ++id;
  body = document.createElement('article');
  view: any = {};
  type = 'empty';
  path = '';
  pinned = false;
  app = app;
  constructor(public parent: Group, public main: boolean) {
    parent.leaves.push(this);
    this.body.dataset.leaf = String(this.id);
    parent.node.append(this.body);
    this.render();
  }
  getRoot() { return this.main ? root : side; }
  getViewState() { return { type: this.type, state: { file: this.path }, pinned: this.pinned }; }
  async setViewState(state: any) {
    this.type = state.type;
    if (this.type === VAULT_VOICE_VIEW_TYPE) {
      this.view = new VaultVoiceView(this as any, plugin, (closed: any) => {
        if ((plugin as any).desktopVoiceLeaf === closed) (plugin as any).desktopVoiceLeaf = null;
      });
      await this.view.onOpen();
      launches++;
    }
  }
  async openFile(file: TFile) {
    inFlight = file.path; requests.push(file.path);
    if (hold === file.path) {
      hold = undefined;
      await new Promise<void>(resolve => { release = resolve; });
    }
    inFlight = '';
    this.path = file.path; this.type = 'markdown'; this.render();
  }
  detach() {
    this.view.onClose?.();
    this.parent.leaves = this.parent.leaves.filter(leaf => leaf !== this);
    this.body.remove();
    if (!this.parent.leaves.length) this.parent.node.remove();
    else if (this.parent.shown === this) show(this.parent.leaves[0]);
    if (active === this) active = recent = right.shown!;
  }
  render() { this.body.textContent = this.path ? 'Native note: ' + this.path : ''; }
}
function all() {
  return [...stage.querySelectorAll('section')].flatMap(node => (node as any).group?.leaves ?? []) as Leaf[];
}
function show(leaf: Leaf) {
  leaf.parent.shown = leaf;
  for (const item of leaf.parent.leaves) item.body.hidden = item !== leaf;
}
(right.node as any).group = right; (sidebar.node as any).group = sidebar;
const sidebarLeaf = new Leaf(sidebar, false); sidebarLeaf.type = 'fjg-file-focus-view';
sidebarLeaf.body.textContent = 'File Focus sidebar';
const origin = new Leaf(right, true); origin.type = 'markdown'; origin.path = 'Original.md'; origin.render();
const pinned = new Leaf(right, true); pinned.type = 'markdown'; pinned.path = 'Pinned.md'; pinned.pinned = true; pinned.render();
recent = origin; active = sidebarLeaf; show(origin); show(sidebarLeaf);
app.workspace = {
  rootSplit: root,
  get activeLeaf() { return active; },
  getMostRecentLeaf() { return recent; },
  iterateRootLeaves(handler: (leaf: Leaf) => void) { all().filter(leaf => leaf.main).forEach(handler); },
  iterateAllLeaves(handler: (leaf: Leaf) => void) { all().forEach(handler); },
  detachLeavesOfType(type: string) { all().filter(leaf => leaf.type === type).forEach(leaf => leaf.detach()); },
  createLeafBySplit(anchor: Leaf, direction: string, before: boolean) {
    if (!anchor.main || direction !== 'vertical') throw new Error('The split must be in the central workspace.');
    const lane = group();
    (lane.node as any).group = lane;
    if (before) anchor.parent.node.before(lane.node); else anchor.parent.node.after(lane.node);
    const leaf = new Leaf(lane, true); active = leaf; show(leaf); return leaf;
  },
  getLeaf() {
    if (active.type === 'empty') return active;
    const leaf = new Leaf(active.parent, active.main);
    return leaf;
  },
  setActiveLeaf(leaf: Leaf) { active = leaf; if (leaf.main) recent = leaf; },
  async revealLeaf(leaf: Leaf) { show(leaf); },
};
app.vault = { getAbstractFileByPath: (path: string) => files.get(path) };
app.viewRegistry = { getTypeByExtension: (ext: string) => ext === 'md' ? 'markdown' : undefined };
const plugin = new FileFocusPlugin(app, {} as any);
const launch = () => plugin.openVaultVoice();
document.getElementById('sidebar-launch')!.addEventListener('click', () => { active = sidebarLeaf; launch(); });
document.getElementById('command-launch')!.addEventListener('click', launch);

let session: any;
w.voiceFixture = {
  showResults() {
    const view = (plugin as any).desktopVoiceLeaf.view as any;
    if (!session || view.panel.session !== session) {
      session = { selectedNote: (path: string) => selectedPaths.push(path), end: () => ends++, dispose: () => disposes++ };
      view.panel.session = session;
    }
    view.panel.showResults({
      matches: ['A.md', 'B.md', 'Unsupported.bin'].map(path => ({ path, excerpt: 'Synthetic result', size: 24 })),
      next_offset: null, total_matches: 3, coverage: 'Synthetic local search results.',
    }, { query: 'demo', folder: '', mode: 'filenames', offset: 0 }, session, {});
  },
  hold: (path: string) => { hold = path; },
  release: () => release?.(),
  unplug: () => (plugin as any).desktopVoiceLeaf.view.shutdown(), // production unload's exact chat shutdown
  state: () => ({
    launches, right: right.shown?.path, rightTabs: right.leaves.map(l => ({ id: l.id, path: l.path, pinned: l.pinned })),
    requests, selectedPaths, inFlight, ends, disposes, popups: w.modals.length, notices: w.notices,
  }),
};
