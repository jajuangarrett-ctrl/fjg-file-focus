# FJG File Focus

FJG File Focus is an Obsidian sidebar plugin for Franklin Garrett's vault workflow. It is based on `ozntel/file-tree-alternative` and keeps the split folder/file navigation while adding a sidebar-first Recent Notes and Bookmarks workflow inspired by the Mobile Bookmark Launcher plugin.

## What It Adds

- A renamed standalone Obsidian plugin: `fjg-file-focus`.
- A left-sidebar file tree view named `FJG File Focus`.
- A dedicated folder-tree ribbon icon that opens and reveals the File Focus sidebar.
- A checklist button between Home and New Folder that opens the native FJG Task Manager dashboard.
- Automatic desktop active-note following that opens the note's parent folder, selects the note, and expands its folder path.
- **Open on Start** opens and shows the File Focus sidebar on desktop and mobile; mobile still does not follow file-open events automatically.
- An optional **Mobile performance mode** keeps the React view and its listeners unmounted until the File Focus sidebar is visible, builds deeper folder branches only as they are expanded, and groups repeated live refreshes.
- Toolbar buttons for Recent Notes and Bookmarks in the folder toolbar.
- Mobile-toolbar command and file-pane button for copying page text—without YAML properties—to the clipboard.
- A separate file-pane button continues to copy the selected note's vault-relative file path.
- Recent notes and bookmarks render inside the sidebar file-list area instead of opening a popup modal.
- Recent tracking for Markdown and Canvas files.
- Core Obsidian Bookmarks support, including bookmark groups, files, folders, searches, graph bookmarks, and URLs.

## Build

```bash
npm install
npm test
npm run build
```

The production bundle is generated at `dist/main.js`.

## Mobile Performance Mode

In **Settings → FJG File Focus**, turn on **Mobile performance mode** to reduce startup and hidden sidebar work on phones and tablets. The setting is off by default, applies only on mobile, and does not change desktop behavior.

Changing the toggle takes effect immediately. On mobile, File Focus keeps a lightweight deferred sidebar tab when **Open on Start** is off and automatically loads its folder tree when that tab becomes visible. If **Open on Start** is enabled, the reduced folder tree mounts immediately and the sidebar is revealed after every mobile restart, so launch does not depend on a later visibility callback. A **Load folders** button remains available as a fallback for deferred tabs. Deeper branches start collapsed so a previously expanded desktop-sized tree cannot overwhelm the phone. No Obsidian restart is required. Turning the toggle off restores the standard eager mobile path while preserving the same startup-reveal setting.

During workspace restoration, File Focus explicitly loads its saved deferred sidebar view through Obsidian's supported view API. When **Open on Start** is enabled, it retries that recovery across the longer cold-launch window needed by large mobile vaults so the selected File Focus tab does not remain blank.

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

## Live vault conversation

Use the microphone beside the checklist in the folder toolbar, or run **Talk to Your Vault** from the command palette. Start a conversation to search across your vault, read relevant notes, create Markdown notes in existing folders, and save clear requested body edits immediately. The plugin reuses the saved FJG Objective Manager OpenAI key, or accepts a separate key in File Focus settings. Audio and relevant excerpts are sent to OpenAI while connected.

A clearly identified note can open automatically and reveal its folder. Multiple search results appear in a popup with clickable note titles, full paths, and excerpts when content search is used. Select a result to open it and set the current note for follow-up voice requests. The conversation minimizes so the note stays visible. Use **Expand conversation** to see the transcript again.

Search supports pagination and reports incomplete results. Binary attachments can be located and opened, but their contents are not interpreted. Edits preserve frontmatter and reject stale or ambiguous replacements. Configuration and credential files are excluded; protected agent-governance files cannot be edited. End conversation releases the microphone and prevents further voice edits.

Desktop and mobile layouts are supported. Update through BRAT on devices that do not sync plugin files, and configure an API key on each device if plugin settings are not synced.
