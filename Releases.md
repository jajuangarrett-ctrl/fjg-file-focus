# Releases

## 0.1.13

- Strengthened the AI Quick Format prompt for pasted bullet symbols, hanging wrapped lines, and partially formatted notes.
- Replaced the misleading "already looks formatted" notice with a neutral no-change notice when the AI returns unchanged text.

## 0.1.12

- Added a note properties button that refreshes `title`, `location`, and `tags` properties for the active note.
- Automatically adds managed properties to new Markdown notes and refreshes `location` after Markdown files move or rename.
- Refreshes managed properties after the FJG Auto Title toolbar action runs.

## 0.1.11

- Changed Quick Format to use AI Grammar Corrector's configured AI provider, API key, and model for deeper Markdown formatting.
- Preserves frontmatter locally, formats the note body with AI, removes duplicate bullet artifacts, and avoids overwriting if the note changes while formatting runs.

## 0.1.10

- Added a Quick Format current note button between Delete current file and Move current file.
- The formatter preserves note content while adding Markdown headings and bullet points to plain text.

## 0.1.9

- Moved the Delete current file button to the left side of the lower toolbar next to the close/back control.

## 0.1.8

- Added lower toolbar buttons for Obsidian's native Move current file and Delete current file commands.

## 0.1.7

- Published the restored FJG File Focus toolbar build as the latest GitHub version.
- Added Omnisearch and Auto Title toolbar command buttons.
- Added Semantic Graph Builder and copy-path toolbar buttons for selected notes.
- Added the colorful folders setting with parent color carry-through to subfolders and files.
- Changed the new-folder toolbar action to create folders inside the current folder.
- Kept bookmarked folders drilling down inside FJG File Focus instead of opening the stock file explorer.

## 0.1.6

- Matched the approved compact preview for Recent Notes and Bookmarks rows with smaller fixed row text, smaller icons, and shorter row spacing.

## 0.1.5

- Reduced Recent Notes and Bookmarks row text by applying the file tree font-size settings directly to row titles and subtitles.

## 0.1.4

- Added `jpg`, `jpeg`, and `png` to the supported file type filter.

## 0.1.3

- Added a File Pane setting to only show supported document file types.
- Supported extensions are `pdf`, `doc`, `docx`, `rtf`, `txt`, `odt`, `ott`, `pages`, `xls`, `xlsx`, `xlsm`, `xlt`, `xltx`, `csv`, `tsv`, `html`, `htm`, `xhtml`, `mht`, `mhtml`, `md`, `epub`, and `excalidraw`.
- Applied the supported-type filter to file lists, search results, tag searches, and folder counts.

## 0.1.2

- Removed custom `file-open` Recent Notes tracking from the normal note-click path.
- Recent Notes now reads Obsidian's workspace recent-file history on demand, matching the original file tree's no-write behavior during file clicks.

## 0.1.1

- Fixed sidebar refresh churn when opening notes by ignoring `.obsidian` config/plugin writes in the file tree vault watcher.
- Debounced Recent Notes persistence and skipped no-op recent writes when reopening the current top recent file.
- Removed a save side effect from the Recent Notes render path.

## 0.1.0

- Created the standalone `FJG File Focus` plugin from `ozntel/file-tree-alternative`.
- Renamed plugin metadata, view type, local storage keys, and settings labels for the FJG File Focus repo.
- Added Recent Notes and Bookmarks toolbar buttons to the folder toolbar.
- Added sidebar-rendered Recent Notes and Bookmarks panels in place of the popup launcher pattern.
- Added recent-note tracking for Markdown and Canvas files.
