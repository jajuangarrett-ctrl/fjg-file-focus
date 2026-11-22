const { chromium } = require('playwright-core');
const { buildSync } = require('esbuild');
const { pathToFileURL } = require('url');
const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('assert/strict');

const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'file-focus-voice-browser-'));
async function main() {
  const chrome = process.env.FJG_BROWSER_BIN || '/Volumes/Extreme SSD/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  buildSync({
    entryPoints: ['tests/voice-workspace-browser/fixture.ts'], bundle: true, outfile: path.join(scratch, 'app.js'),
    platform: 'browser', format: 'iife', define: { 'process.env.NODE_ENV': '"production"' },
    alias: { obsidian: path.resolve('tests/voice-workspace-browser/obsidian.ts') },
    tsconfig: 'tsconfig.json',
  });
  fs.copyFileSync('styles.css', path.join(scratch, 'styles.css'));
  fs.writeFileSync(path.join(scratch, 'index.html'), `<!DOCTYPE html><meta charset=utf-8>
    <style>body{font:16px system-ui} #workspace{display:flex; height:650px} section{border:1px solid #ccc;flex:1;min-width:0;overflow:auto}.sidebar{flex:0 0 120px} .fjg-vault-live-pane{min-height:0}</style>
    <link rel="stylesheet" href="styles.css">
    <button id="sidebar-launch">Sidebar talk button</button><button id="command-launch">Command palette</button>
    <div id="workspace"></div><script src="app.js"></script>`);
  const browser = await chromium.launch({ executablePath: chrome, headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 760 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pathToFileURL(path.join(scratch, 'index.html')).href);
    const state = () => page.evaluate(() => window.voiceFixture.state());
    await page.getByRole('button', { name: 'Sidebar talk button' }).click();
    const pane = page.locator('.fjg-vault-live-pane');
    await pane.waitFor();
    const original = page.getByText('Native note: Original.md', { exact: true });
    assert.ok((await pane.boundingBox()).x < (await original.boundingBox()).x);
    await page.evaluate(() => window.voiceFixture.showResults());
    await page.getByRole('button', { name: 'Command palette' }).click();
    assert.equal(await pane.count(), 1); assert.equal((await state()).launches, 1);
    assert.equal((await state()).popups, 0);
    await page.getByRole('link', { name: 'Open A.md', exact: true }).click();
    await page.getByText('Native note: A.md', { exact: true }).waitFor();
    const a = (await state()).rightTabs.find(tab => tab.path === 'A.md');
    await page.getByRole('link', { name: 'Open B.md', exact: true }).click();
    await page.getByText('Native note: B.md', { exact: true }).waitFor();
    assert.equal((await state()).rightTabs.find(tab => tab.path === 'B.md').id, a.id);
    assert.equal(await pane.locator('[aria-current="true"]').getAttribute('data-href'), 'B.md');

    await page.evaluate(() => window.voiceFixture.hold('A.md'));
    await page.getByRole('link', { name: 'Open A.md', exact: true }).click();
    await page.getByRole('status').filter({ hasText: 'Opening A.md' }).waitFor();
    await page.getByRole('link', { name: 'Open B.md', exact: true }).click();
    await page.getByRole('link', { name: 'Open A.md', exact: true }).click();
    await page.evaluate(() => window.voiceFixture.release());
    await page.getByText('Opened A.md in the note pane.', { exact: true }).waitFor();
    const raced = await state();
    assert.equal(raced.right, 'A.md');
    assert.deepEqual(raced.selectedPaths, ['A.md', 'B.md', 'A.md']);
    assert.deepEqual(raced.requests, ['A.md', 'B.md', 'A.md', 'A.md']);
    await page.getByRole('link', { name: 'Open Unsupported.bin', exact: true }).click();
    await page.getByText('There is no Obsidian view for this file type in the note pane.').waitFor();
    assert.equal((await state()).right, 'A.md');

    await page.getByRole('button', { name: 'Close chat' }).click();
    await pane.waitFor({ state: 'detached' });
    const closed = await state();
    assert.equal(closed.ends, 1);
    assert.deepEqual(closed.rightTabs.map(tab => tab.path), ['Original.md', 'Pinned.md', 'A.md']);
    assert.equal(closed.rightTabs.find(tab => tab.path === 'Pinned.md').pinned, true);
    await page.getByRole('button', { name: 'Command palette' }).click();
    await pane.waitFor();
    await page.evaluate(() => window.voiceFixture.showResults());
    await page.evaluate(() => window.voiceFixture.unplug());
    await pane.waitFor({ state: 'detached' });
    assert.equal((await state()).ends, 2);
    assert.equal((await state()).disposes, 1);
    assert.deepEqual(errors, []);
    console.log('PASS: same-workspace desktop launch from sidebar/command, inline results, A→B same native tab, rapid A→B→A, unsupported file, close/unload, and preservation of original/pinned tabs.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => fs.rmSync(scratch, { recursive: true, force: true }));
