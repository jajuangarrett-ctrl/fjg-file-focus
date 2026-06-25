# Releases

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
