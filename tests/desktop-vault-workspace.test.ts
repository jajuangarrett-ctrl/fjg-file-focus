import assert from 'node:assert/strict';
import test from 'node:test';
import {
  DesktopVoiceNotePane, desktopVoiceAnchor, hasDesktopVoiceFileView, SupersededVoiceNavigation,
  VAULT_VOICE_VIEW_TYPE,
} from '../src/live/desktop-workspace.ts';

function fixture() {
  const root = {}, sidebar = {}, floating = {}, group = {}, chatGroup = {};
  const leaves: Leaf[] = [], opens: Array<[string, string]> = [];
  let collect = (path: string) => Promise.resolve();
  let wrong: Leaf | undefined;
  let active: Leaf | null = null;
  class Leaf {
    view = { type: 'empty', state: { file: '' }, pinned: false };
    name: string; parent: object; container: object;
    constructor(name: string, parent: object, container: object) {
      this.name = name; this.parent = parent; this.container = container; leaves.push(this);
    }
    getRoot() { return this.container; }
    getViewState() { return this.view; }
    detach() { leaves.splice(leaves.indexOf(this), 1); }
    async openFile(file: { path: string }) {
      opens.push([this.name, file.path]); await collect(file.path);
      this.view = { type: 'markdown', state: { file: file.path }, pinned: false };
    }
  }
  const original = new Leaf('original', group, root);
  original.view.type = 'markdown'; original.view.state.file = 'Original.md';
  const chat = new Leaf('chat', chatGroup, root);
  chat.view.type = VAULT_VOICE_VIEW_TYPE;
  const side = new Leaf('sidebar', sidebar, sidebar);
  const popout = new Leaf('popout', floating, floating);
  const reveals: Leaf[] = [];
  let serial = 0;
  const workspace = {
    rootSplit: root,
    get activeLeaf() { return active; },
    getMostRecentLeaf: (container?: object) => container === root ? original : popout,
    iterateRootLeaves(callback: (leaf: Leaf) => void) { leaves.filter(leaf => leaf.container === root).forEach(callback); },
    iterateAllLeaves(callback: (leaf: Leaf) => void) { leaves.forEach(callback); },
    setActiveLeaf(leaf: Leaf) { active = leaf; },
    getLeaf() { return wrong ?? (active?.view.type === 'empty' ? active : new Leaf(`result-${++serial}`, active?.parent ?? group, root)); },
    createLeafBySplit() { return new Leaf(`result-${++serial}`, {}, root); },
    async revealLeaf(leaf: Leaf) { reveals.push(leaf); active = leaf; },
  };
  active = side;
  return {
    workspace, original, chat, side, popout, leaves, opens, reveals,
    controller: new DesktopVoiceNotePane(workspace as any, chat as any, original as any),
    file: (path: string) => ({ path, extension: path.split('.').at(-1) }) as any,
    wait: (callback: typeof collect) => { collect = callback; },
    wrongLeaf: (leaf?: Leaf) => { wrong = leaf; },
  };
}

test('desktop voice anchors to the central root when a sidebar or popout has focus', () => {
  const f = fixture();
  assert.equal(desktopVoiceAnchor(f.workspace as any), f.original);
  f.workspace.setActiveLeaf(f.popout);
  assert.equal(desktopVoiceAnchor(f.workspace as any), f.original);
  f.workspace.setActiveLeaf(f.chat);
  assert.equal(desktopVoiceAnchor(f.workspace as any, f.chat as any), f.original);
});

test('choosing a second result replaces the same native tab and does not edit or remove the prior note', async () => {
  const f = fixture();
  await f.controller.open(f.file('A.md'));
  await f.controller.open(f.file('B.md'));
  assert.deepEqual(f.opens, [['result-1', 'A.md'], ['result-1', 'B.md']]);
  assert.equal(f.reveals[0], f.reveals[1]);
  assert.equal(f.reveals[1].view.state.file, 'B.md');
  f.controller.close();
  assert.ok(f.leaves.includes(f.reveals[1]));
  assert.equal(f.original.view.state.file, 'Original.md');
});

test('a slow A cannot reveal itself over the last A in a rapid A→B→A choice', async () => {
  const f = fixture();
  let release!: () => void;
  f.wait(() => new Promise<void>((resolve) => { release = resolve; }));
  const first = f.controller.open(f.file('A.md'));
  await Promise.resolve();
  assert.equal(f.opens[0][1], 'A.md');
  const second = f.controller.open(f.file('B.md'));
  const last = f.controller.open(f.file('A.md'));
  f.wait(async () => {});
  release();
  await assert.rejects(first, SupersededVoiceNavigation);
  await assert.rejects(second, SupersededVoiceNavigation);
  await last;
  assert.deepEqual(f.opens, [['result-1', 'A.md'], ['result-1', 'A.md']]);
  assert.equal(f.reveals.length, 1);
  assert.equal(f.reveals[0].view.state.file, 'A.md');
});

test('never detaches an existing empty tab and rejects a popped-out result allocation', async () => {
  const f = fixture();
  f.wrongLeaf(f.popout);
  await assert.rejects(f.controller.open(f.file('Not there.md')), /result tab/);
  assert.ok(f.leaves.includes(f.popout));
  f.wrongLeaf();
  f.original.view = { type: 'empty', state: { file: '' }, pinned: false };
  let release!: () => void;
  f.wait(() => new Promise<void>(resolve => { release = resolve; }));
  const opening = f.controller.open(f.file('A.md'));
  await Promise.resolve();
  f.controller.close(); assert.ok(f.leaves.includes(f.original));
  release();
  await assert.rejects(opening, SupersededVoiceNavigation);
  assert.equal(f.reveals.length, 0);
});

test('a repurposed native tab is never overwritten and unsupported files do not launch externally', async () => {
  const f = fixture();
  await f.controller.open(f.file('A.md'));
  f.reveals[0].view.state.file = 'User choice.md';
  await f.controller.open(f.file('B.md'));
  assert.equal(f.reveals[0].view.state.file, 'User choice.md');
  assert.equal(f.reveals[1].view.state.file, 'B.md');
  assert.equal(hasDesktopVoiceFileView({ viewRegistry: { getTypeByExtension: (ext: string) => ext === 'md' ? 'markdown' : undefined } } as any, f.file('Data.bin')), false);
  assert.equal(hasDesktopVoiceFileView({} as any, f.file('Note.md')), true);
});

test('does not open a queued TFile that was renamed before its turn', async () => {
  const f = fixture();
  let release!: () => void;
  f.wait(() => new Promise<void>(resolve => { release = resolve; }));
  const first = f.controller.open(f.file('A.md'));
  await Promise.resolve();
  const queued = f.file('Before rename.md');
  const latest = f.controller.open(queued);
  queued.path = 'After rename.md';
  release();
  await assert.rejects(first, SupersededVoiceNavigation);
  await assert.rejects(latest, /moved/);
  assert.deepEqual(f.opens, [['result-1', 'A.md']]);
  assert.equal(f.reveals.length, 0);
});
