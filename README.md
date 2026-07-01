# FJG File Focus

FJG File Focus is an Obsidian sidebar plugin for Franklin Garrett's vault workflow. It is based on `ozntel/file-tree-alternative` and keeps the split folder/file navigation while adding a sidebar-first Recent Notes and Bookmarks workflow inspired by the Mobile Bookmark Launcher plugin.

## What It Adds

- A renamed standalone Obsidian plugin: `fjg-file-focus`.
- A left-sidebar file tree view named `FJG File Focus`.
- Toolbar buttons for Recent Notes and Bookmarks in the folder toolbar.
- Recent notes and bookmarks render inside the sidebar file-list area instead of opening a popup modal.
- Recent tracking for Markdown and Canvas files.
- Core Obsidian Bookmarks support, including bookmark groups, files, folders, searches, graph bookmarks, and URLs.
- Recent and Bookmarks panel rows use fixed compact text sizing aligned with the folder tree.

## Build

```bash
npm install
npm run build
```

The production bundle is generated at `dist/main.js`.

## Local Install

```bash
mkdir -p "/Users/franklingarrett/FJG Vault/.obsidian/plugins/fjg-file-focus"
cp manifest.json styles.css "/Users/franklingarrett/FJG Vault/.obsidian/plugins/fjg-file-focus/"
cp dist/main.js "/Users/franklingarrett/FJG Vault/.obsidian/plugins/fjg-file-focus/main.js"
```

Reload Obsidian after copying the files.

## Release Assets

For a GitHub release or BRAT install, attach:

- `manifest.json`
- `styles.css`
- `dist/main.js` as `main.js`

## Upstream

Forked from [`ozntel/file-tree-alternative`](https://github.com/ozntel/file-tree-alternative).
