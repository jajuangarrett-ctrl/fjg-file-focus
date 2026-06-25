import { TFolder, TFile } from 'obsidian';

export type FileTreeViewMode = 'folder' | 'file' | 'recent' | 'bookmarks';
export type FocusPanelMode = 'recent' | 'bookmarks';

export interface FocusRecentFileEntry {
    path: string;
    basename: string;
    extension: string;
    timestamp: number;
}

export type BookmarkType = 'group' | 'folder' | 'file' | 'graph' | 'search' | 'url';

export interface FocusBookmarkItem {
    ctime?: number;
    type: BookmarkType;
    title?: string;
    items?: FocusBookmarkItem[];
    path?: string;
    subpath?: string;
    query?: string;
    url?: string;
}

export interface CoreBookmarksPluginInstance {
    items: FocusBookmarkItem[];
    openBookmark: (bookmark: FocusBookmarkItem, type: 'tab' | boolean, eState?: { focus: boolean }) => Promise<void>;
}

export interface CoreFileExplorerPluginInstance {
    revealInFolder: (path: TFolder | TFile) => void;
}

export interface CoreGlobalSearchPluginInstance {
    openGlobalSearch: (query: string) => void;
}

export interface CoreWebViewerPluginInstance {
    openUrl: (url: string, newLeaf: boolean) => void;
    options?: {
        openExternalURLs?: boolean;
    };
}

export interface AppWithInternalPlugins {
    internalPlugins?: {
        getEnabledPluginById: (pluginId: string) => unknown;
        plugins?: Record<string, { instance?: unknown; _loaded?: boolean }>;
    };
}

export interface OZFile {
    path: string;
    basename: string;
    extension: string;
    stat: {
        mtime: number;
        ctime: number;
        size: number;
    };
    parent: {
        path: string;
    };
    isFolderNote: boolean;
}

export interface FolderFileCountMap {
    [key: string]: {
        open: number;
        closed: number;
    };
}

export interface FolderTree {
    folder: TFolder;
    children: FolderTree[];
}

// --> app.vault.config
export interface ObsidianVaultConfig {
    newLinkFormat: 'shortest' | 'relative' | 'absolute';
    useMarkdownLinks: boolean;
}

export type VaultChange = 'create' | 'delete' | 'rename' | 'modify';

export class CustomVaultChangeEvent extends Event {
    detail: {
        file: TFile;
        changeType: VaultChange;
        oldPath: string;
    };
}

export const eventTypes = {
    activeFileChange: 'fta-active-file-change',
    refreshView: 'fta-refresh-view',
    revealFile: 'fta-reveal-file',
    revealFolder: 'fta-reveal-folder',
    vaultChange: 'fta-vault-change',
    createNewNote: 'fta-create-new-note',
    openFocusPanel: 'fjg-file-focus-open-panel',
};

export interface BookmarksPluginItem {
    type: 'file' | 'group' | 'search' | 'folder';
    ctime: number;
    path: string;
    title: string; // data-path from the element
    items: BookmarksPluginItem[];
}
