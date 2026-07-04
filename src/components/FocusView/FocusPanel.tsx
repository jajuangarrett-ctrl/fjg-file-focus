import React, { useMemo, useState } from 'react';
import { Notice, TFile, TFolder } from 'obsidian';
import FileTreeAlternativePlugin from 'main';
import * as Icons from 'utils/icons';
import * as FileTreeUtils from 'utils/Utils';
import * as recoilState from 'recoil/pluginState';
import { useRecoilState } from 'recoil';
import {
    AppWithInternalPlugins,
    CoreBookmarksPluginInstance,
    CoreGlobalSearchPluginInstance,
    CoreWebViewerPluginInstance,
    FocusBookmarkItem,
    FocusPanelMode,
    FocusRecentFileEntry,
    eventTypes,
} from 'utils/types';

type BookmarkLevel = {
    title: string;
    items: FocusBookmarkItem[];
};

interface FocusPanelProps {
    plugin: FileTreeAlternativePlugin;
    mode: FocusPanelMode;
}

interface FocusRowConfig {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    title: string;
    subtitle?: string;
    onClick: () => void;
}

const PANEL_LABELS: Record<FocusPanelMode, string> = {
    recent: 'Recent Notes',
    bookmarks: 'Bookmarks',
};

export function FocusPanel(props: FocusPanelProps) {
    const { plugin, mode } = props;
    const [query, setQuery] = useState<string>('');
    const [bookmarkStack, setBookmarkStack] = useState<BookmarkLevel[]>([]);
    const [_view, setView] = useRecoilState(recoilState.view);
    const [_activeFolderPath, setActiveFolderPath] = useRecoilState(recoilState.activeFolderPath);
    const [_activeOZFile, setActiveOzFile] = useRecoilState(recoilState.activeOZFile);

    const switchMode = (nextMode: FocusPanelMode) => {
        setQuery('');
        setBookmarkStack([]);
        setView(nextMode);
    };

    const closePanel = () => {
        setView('folder');
        setActiveFolderPath('');
    };

    const openFilePath = async (path: string, subpath?: string) => {
        const file = plugin.app.vault.getAbstractFileByPath(path);
        if (!(file instanceof TFile)) {
            new Notice('File not found.');
            return;
        }

        const leaf = plugin.app.workspace.getLeaf(plugin.settings.focusOpenInNewTab);
        await leaf.openFile(file, { eState: { subpath } as { subpath?: string } });
        setActiveOzFile(FileTreeUtils.TFile2OZFile(file));
    };

    const revealFolder = (folder: TFolder) => {
        setActiveFolderPath(folder.path);
        setView('file');
        window.dispatchEvent(new CustomEvent(eventTypes.revealFolder, { detail: { folder } }));
    };

    const openBookmark = async (bookmark: FocusBookmarkItem, bookmarksPlugin: CoreBookmarksPluginInstance) => {
        try {
            switch (bookmark.type) {
                case 'file':
                    await openFilePath(bookmark.path || '', bookmark.subpath);
                    break;
                case 'folder':
                    openFolderBookmark(bookmark);
                    break;
                case 'search':
                    await openSearchBookmark(bookmark, bookmarksPlugin);
                    break;
                case 'url':
                    openUrlBookmark(bookmark);
                    break;
                case 'graph':
                    await bookmarksPlugin.openBookmark(bookmark, plugin.settings.focusOpenInNewTab ? 'tab' : false, { focus: true });
                    break;
                case 'group':
                    return;
            }
        } catch (error) {
            new Notice(`Could not open bookmark: ${error instanceof Error ? error.message : String(error)}`);
        }
    };

    const openFolderBookmark = (bookmark: FocusBookmarkItem) => {
        const folder = plugin.app.vault.getAbstractFileByPath(bookmark.path || '');

        if (folder instanceof TFolder) {
            revealFolder(folder);
            return;
        }

        new Notice(`Folder not found: ${bookmark.path || 'Untitled'}`);
    };

    const openSearchBookmark = async (bookmark: FocusBookmarkItem, bookmarksPlugin: CoreBookmarksPluginInstance) => {
        const globalSearchPlugin = getEnabledPlugin<CoreGlobalSearchPluginInstance>(plugin, 'global-search');

        if (globalSearchPlugin) {
            globalSearchPlugin.openGlobalSearch(bookmark.query || '');
            return;
        }

        await bookmarksPlugin.openBookmark(bookmark, plugin.settings.focusOpenInNewTab ? 'tab' : false, { focus: true });
    };

    const openUrlBookmark = (bookmark: FocusBookmarkItem) => {
        if (!bookmark.url) {
            new Notice('Bookmarked URL is empty.');
            return;
        }

        const webViewerPlugin = getEnabledPlugin<CoreWebViewerPluginInstance>(plugin, 'webviewer');
        if (webViewerPlugin?.options?.openExternalURLs) {
            webViewerPlugin.openUrl(bookmark.url, plugin.settings.focusOpenInNewTab);
            return;
        }

        window.open(bookmark.url, '_blank');
    };

    return (
        <div className="fjg-focus-panel">
            <div className="fjg-focus-panel__header file-tree-header-fixed">
                <div className="oz-flex-container">
                    <div className="oz-nav-action-button" style={{ marginLeft: '0px' }}>
                        <Icons.IoIosCloseCircleOutline onClick={closePanel} size={19} aria-label="Close Focus Panel" />
                    </div>
                    <div className="fjg-focus-panel__tabs" role="tablist" aria-label="FJG File Focus panels">
                        <button
                            type="button"
                            className={`fjg-focus-panel__tab${mode === 'recent' ? ' is-active' : ''}`}
                            onClick={() => switchMode('recent')}>
                            <Icons.FaHistory size={13} />
                            <span>Recent</span>
                        </button>
                        <button
                            type="button"
                            className={`fjg-focus-panel__tab${mode === 'bookmarks' ? ' is-active' : ''}`}
                            onClick={() => switchMode('bookmarks')}>
                            <Icons.FaRegBookmark size={13} />
                            <span>Bookmarks</span>
                        </button>
                    </div>
                </div>
                <div className="oz-input-container">
                    <input
                        type="search"
                        placeholder={mode === 'bookmarks' ? 'Search bookmarks...' : 'Search recent notes...'}
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </div>
                <div className="oz-file-tree-header">{PANEL_LABELS[mode]}</div>
            </div>

            <div className="fjg-focus-panel__body">
                {mode === 'bookmarks' ? (
                    <BookmarkPanel
                        plugin={plugin}
                        query={query}
                        bookmarkStack={bookmarkStack}
                        setBookmarkStack={setBookmarkStack}
                        openBookmark={openBookmark}
                    />
                ) : (
                    <RecentPanel plugin={plugin} query={query} openFilePath={openFilePath} />
                )}
            </div>
        </div>
    );
}

function RecentPanel(props: { plugin: FileTreeAlternativePlugin; query: string; openFilePath: (path: string) => Promise<void> }) {
    const { plugin, query, openFilePath } = props;
    const recentFiles = useMemo(() => getWorkspaceRecentFiles(plugin), [plugin, plugin.settings.excludedFolders, plugin.settings.focusMaxRecentFiles]);
    const visibleFiles = useMemo(() => filterRecentFiles(recentFiles, query), [recentFiles, query]);

    if (visibleFiles.length === 0) {
        return <EmptyState title="No recent notes yet" body="Open a few notes or canvases and they will appear here." />;
    }

    return (
        <div className="fjg-focus-panel__list">
            {visibleFiles.map((entry) => (
                <FocusRow
                    key={entry.path}
                    icon={entry.extension === 'canvas' ? Icons.FaProjectDiagram : Icons.BiFile}
                    title={entry.basename}
                    subtitle={plugin.settings.focusShowPaths ? entry.path : ''}
                    onClick={() => {
                        void openFilePath(entry.path);
                    }}
                />
            ))}
        </div>
    );
}

function BookmarkPanel(props: {
    plugin: FileTreeAlternativePlugin;
    query: string;
    bookmarkStack: BookmarkLevel[];
    setBookmarkStack: React.Dispatch<React.SetStateAction<BookmarkLevel[]>>;
    openBookmark: (bookmark: FocusBookmarkItem, bookmarksPlugin: CoreBookmarksPluginInstance) => Promise<void>;
}) {
    const { plugin, query, bookmarkStack, setBookmarkStack, openBookmark } = props;
    const bookmarksPlugin = getEnabledPlugin<CoreBookmarksPluginInstance>(plugin, 'bookmarks');

    if (!bookmarksPlugin) {
        return <EmptyState title="Bookmarks are unavailable" body="Enable Obsidian's core Bookmarks plugin to use this panel." />;
    }

    const level = bookmarkStack[bookmarkStack.length - 1];
    const items = level?.items || bookmarksPlugin.items || [];
    const visibleItems = items.filter((item) => bookmarkMatchesQuery(item, query));

    return (
        <div className="fjg-focus-panel__list">
            {level && (
                <button
                    type="button"
                    className="fjg-focus-panel__context-row"
                    onClick={() => {
                        setBookmarkStack(bookmarkStack.slice(0, -1));
                    }}>
                    <Icons.FaArrowCircleLeft size={14} />
                    <span>{level.title}</span>
                </button>
            )}
            {visibleItems.length === 0 ? (
                <EmptyState title="No bookmarks found" body="Try a different search." />
            ) : (
                visibleItems.map((item, index) => (
                    <FocusRow
                        key={`${getBookmarkDisplayName(plugin, item)}-${index}`}
                        icon={getBookmarkIcon(item)}
                        title={getBookmarkDisplayName(plugin, item)}
                        subtitle={getBookmarkSubtitle(plugin, item)}
                        onClick={() => {
                            if (item.type === 'group') {
                                setBookmarkStack([...bookmarkStack, { title: getBookmarkDisplayName(plugin, item), items: item.items || [] }]);
                                return;
                            }
                            void openBookmark(item, bookmarksPlugin);
                        }}
                    />
                ))
            )}
        </div>
    );
}

function FocusRow(config: FocusRowConfig) {
    const Icon = config.icon;

    return (
        <button type="button" className="fjg-focus-panel__row" onClick={config.onClick}>
            <span className="fjg-focus-panel__row-icon">
                <Icon size={13} />
            </span>
            <span className="fjg-focus-panel__row-text">
                <span className="fjg-focus-panel__row-title">{config.title || 'Untitled'}</span>
                {config.subtitle && <span className="fjg-focus-panel__row-subtitle">{config.subtitle}</span>}
            </span>
        </button>
    );
}

function EmptyState(props: { title: string; body: string }) {
    return (
        <div className="fjg-focus-panel__empty">
            <div className="fjg-focus-panel__empty-title">{props.title}</div>
            <div className="fjg-focus-panel__empty-body">{props.body}</div>
        </div>
    );
}

function getWorkspaceRecentFiles(plugin: FileTreeAlternativePlugin): FocusRecentFileEntry[] {
    const recentPaths = typeof plugin.app.workspace.getLastOpenFiles === 'function' ? plugin.app.workspace.getLastOpenFiles() : [];
    const excludedFolders = FileTreeUtils.settingListToArray(plugin.settings.excludedFolders);

    return recentPaths
        .map((path) => plugin.app.vault.getAbstractFileByPath(path))
        .filter((file): file is TFile => file instanceof TFile && ['md', 'canvas'].includes(file.extension.toLowerCase()))
        .filter((file) => !FileTreeUtils.isPathInExcludedFolder(file.path, excludedFolders))
        .map((file) => ({
            path: file.path,
            basename: file.basename,
            extension: file.extension.toLowerCase(),
            timestamp: file.stat.mtime,
        }))
        .slice(0, plugin.settings.focusMaxRecentFiles);
}

function filterRecentFiles(recentFiles: FocusRecentFileEntry[], query: string): FocusRecentFileEntry[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return recentFiles;
    return recentFiles.filter((entry) => `${entry.basename} ${entry.path}`.toLowerCase().includes(normalized));
}

function bookmarkMatchesQuery(item: FocusBookmarkItem, query: string): boolean {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return true;
    return `${item.title || ''} ${item.path || ''} ${item.url || ''} ${item.query || ''}`.toLowerCase().includes(normalized);
}

function getBookmarkDisplayName(plugin: FileTreeAlternativePlugin, item: FocusBookmarkItem): string {
    if (item.title) return item.title;
    if (item.type === 'file' && item.path) {
        const file = plugin.app.vault.getAbstractFileByPath(item.path);
        return file instanceof TFile ? file.basename : item.path;
    }
    if (item.type === 'folder' && item.path) {
        return item.path.split('/').pop() || item.path;
    }
    if (item.type === 'search') return item.query || 'Search';
    if (item.type === 'url') return item.url || 'URL';
    if (item.type === 'graph') return 'Graph';
    return 'Group';
}

function getBookmarkSubtitle(plugin: FileTreeAlternativePlugin, item: FocusBookmarkItem): string {
    if (!plugin.settings.focusShowPaths) return '';
    if (item.type === 'file' || item.type === 'folder') return item.path || '';
    if (item.type === 'url') return item.url || '';
    if (item.type === 'search') return item.query || '';
    if (item.type === 'group') return `${item.items?.length || 0} items`;
    return '';
}

function getBookmarkIcon(item: FocusBookmarkItem): React.ComponentType<{ className?: string; size?: number }> {
    if (item.type === 'group' || item.type === 'folder') return Icons.BiFolder;
    if (item.type === 'search') return Icons.IoIosSearch;
    if (item.type === 'graph') return Icons.FaProjectDiagram;
    if (item.type === 'url') return Icons.FaGlobe;
    return Icons.BiFile;
}

function getEnabledPlugin<T>(plugin: FileTreeAlternativePlugin, pluginId: string): T | null {
    const internalPlugins = (plugin.app as AppWithInternalPlugins).internalPlugins;
    const enabledPlugin = internalPlugins?.getEnabledPluginById?.(pluginId);
    if (enabledPlugin) return enabledPlugin as T;

    const pluginRecord = internalPlugins?.plugins?.[pluginId];
    if (pluginRecord?._loaded && pluginRecord.instance) return pluginRecord.instance as T;

    return null;
}
