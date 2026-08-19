import { Plugin, addIcon, TAbstractFile, TFile, TFolder, Notice } from 'obsidian';
import { FileTreeView } from './FileTreeView';
import { ZoomInIcon, ZoomOutIcon, ZoomOutDoubleIcon, LocationIcon, SpaceIcon } from './utils/icons';
import { FileTreeAlternativePluginSettings, FileTreeAlternativePluginSettingsTab, DEFAULT_SETTINGS } from './settings';
import { FileTreeViewMode, VaultChange, eventTypes } from 'utils/types';
import { getBookmarkTitle } from 'utils/Utils';
import { ensureNoteProperties, ensureNotePropertiesWithNotice, isMarkdownFile } from 'utils/noteProperties';

const FileFocusIcon = `
    <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 29c0-7 5-12 12-12h17l10 10h29c7 0 12 5 12 12v17H12Z" />
        <path d="M29 56v12h42" />
        <path d="M46 68v10" />
        <path d="M71 68v10" />
        <rect x="35" y="78" width="22" height="15" rx="4" />
        <rect x="60" y="78" width="22" height="15" rx="4" />
    </g>
`;

const INBOX_MORNING_BRIEF_PATH = 'Artifacts/Inbox Morning Brief/Inbox Morning Brief.html';

export default class FileTreeAlternativePlugin extends Plugin {
    settings: FileTreeAlternativePluginSettings;
    ribbonIconEl: HTMLElement | undefined = undefined;
    inboxMorningBriefRibbonIconEl: HTMLElement | undefined = undefined;
    ribbonMutationObserver: MutationObserver | undefined = undefined;
    folderRevealListeners = new Set<(folder: TFolder) => void>();

    keys = {
        activeFolderPathKey: 'fjgFileFocus-ActiveFolderPath',
        pinnedFilesKey: 'fjgFileFocus-PinnedFiles',
        openFoldersKey: 'fjgFileFocus-OpenFolders',
        customHeightKey: 'fjgFileFocus-CustomHeight',
        customWidthKey: 'fjgFileFocus-CustomWidth',
        focusedFolder: 'fjgFileFocus-FocusedFolder',
    };

    // File Tree View Variables
    VIEW_TYPE = 'fjg-file-focus-view';
    VIEW_DISPLAY_TEXT = 'FJG File Focus';
    ICON = 'fjg-file-focus';

    async onload() {
        console.log('Loading FJG File Focus Plugin');

        addIcon(this.ICON, FileFocusIcon);
        addIcon('zoomInIcon', ZoomInIcon);
        addIcon('zoomOutIcon', ZoomOutIcon);
        addIcon('zoomOutDoubleIcon', ZoomOutDoubleIcon);
        addIcon('locationIcon', LocationIcon);
        addIcon('spaceIcon', SpaceIcon);

        // Load Settings
        this.addSettingTab(new FileTreeAlternativePluginSettingsTab(this.app, this));
        await this.loadSettings();

        // Register File Tree View
        this.registerView(this.VIEW_TYPE, (leaf) => {
            return new FileTreeView(leaf, this);
        });

        // Event Listeners
        this.app.workspace.onLayoutReady(async () => {
            if (this.settings.openViewOnStart) {
                await this.openFileTreeLeaf(true);
            }
        });

        // Add Command to Open File Tree Leaf
        this.addCommand({
            id: 'open-fjg-file-focus-view',
            name: 'Open FJG File Focus view',
            callback: async () => await this.openFileTreeLeaf(true),
        });

        this.addCommand({
            id: 'open-recent-notes-panel',
            name: 'Open Recent Notes in FJG File Focus',
            callback: async () => await this.openFocusPanel('recent'),
        });

        this.addCommand({
            id: 'open-bookmarks-panel',
            name: 'Open Bookmarks in FJG File Focus',
            callback: async () => await this.openFocusPanel('bookmarks'),
        });

        this.addCommand({
            id: 'open-inbox-morning-brief',
            name: 'Open Inbox Morning Brief',
            callback: async () => await this.openInboxMorningBrief(),
        });

        this.addCommand({
            id: 'refresh-note-properties',
            name: 'Refresh note properties',
            callback: async () => await ensureNotePropertiesWithNotice(this, this.app.workspace.getActiveFile()),
        });

        this.app.workspace.onLayoutReady(() => {
            if (this.settings.bookmarksEvents) {
                this.bookmarksAddEventListener();
            }
        });

        this.registerEvent(this.app.workspace.on('file-open', this.onFileOpen));

        // Add Command to Reveal Active File
        this.addCommand({
            id: 'reveal-active-file',
            name: 'Reveal Active File',
            callback: () => {
                // Activate file tree pane
                let leafs = this.app.workspace.getLeavesOfType(this.VIEW_TYPE);
                if (leafs.length === 0) this.openFileTreeLeaf(true);
                for (let leaf of leafs) {
                    this.app.workspace.revealLeaf(leaf);
                }
                // Run custom event
                let event = new CustomEvent(eventTypes.revealFile, {
                    detail: {
                        file: this.app.workspace.getActiveFile(),
                    },
                });
                window.dispatchEvent(event);
            },
        });

        // Add Command to create a new file under active folder path
        this.addCommand({
            id: ' create-new-note',
            name: 'Create a New Note',
            callback: () => {
                let event = new CustomEvent(eventTypes.createNewNote, {
                    detail: {},
                });
                window.dispatchEvent(event);
            },
        });

        // Add event listener for vault changes
        this.app.vault.on('create', this.onCreate);
        this.app.vault.on('delete', this.onDelete);
        this.app.vault.on('modify', this.onModify);
        this.app.vault.on('rename', this.onRename);

        // Ribbon Icon For Opening
        this.refreshIconRibbon();
    }

    onunload() {
        console.log('Unloading FJG File Focus Plugin');
        this.detachFileTreeLeafs();
        // Remove event listeners
        this.app.vault.off('create', this.onCreate);
        this.app.vault.off('delete', this.onDelete);
        this.app.vault.off('modify', this.onModify);
        this.app.vault.off('rename', this.onRename);
        this.bookmarksRemoveEventListener();
    }

    async loadSettings() {
        const data = await this.loadData();
        this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
        this.settings.focusMaxRecentFiles = Number.isFinite(this.settings.focusMaxRecentFiles)
            ? Math.max(1, this.settings.focusMaxRecentFiles)
            : DEFAULT_SETTINGS.focusMaxRecentFiles;
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    openFocusPanel = async (view: FileTreeViewMode) => {
        await this.openFileTreeLeaf(true);
        window.dispatchEvent(new CustomEvent(eventTypes.openFocusPanel, { detail: { view } }));
    };

    revealFolderPath = async (folderPath: string) => {
        const folder = this.app.vault.getAbstractFileByPath(folderPath);
        if (!(folder instanceof TFolder)) {
            throw new Error(`Folder not found: ${folderPath}`);
        }

        await this.openFileTreeLeaf(true);
        for (let attempt = 0; attempt < 12 && this.folderRevealListeners.size === 0; attempt += 1) {
            await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
        }
        if (this.folderRevealListeners.size === 0) {
            throw new Error('FJG File Focus view is not ready.');
        }
        this.folderRevealListeners.forEach((listener) => listener(folder));
    };

    registerFolderRevealListener = (listener: (folder: TFolder) => void) => {
        this.folderRevealListeners.add(listener);
        return () => this.folderRevealListeners.delete(listener);
    };

    bookmarksEventHandler = (event: Event) => {
        // Find the tree-item that includes the bookmarks plugin title
        let treeItem: Element = (event.target as any).closest('.tree-item');
        if (!treeItem) return;
        // If it exists, get the title of the bookmark
        let dataPath: string = treeItem.getAttribute('data-path');
        if (!dataPath || dataPath === '') return;
        // Find the bookmark from the items
        let bookmarkItem = getBookmarkTitle(dataPath);
        // Create Custom Menu only if Shift is Used
        if ((event as any).shiftKey) {
            if (!bookmarkItem) return;
            event.stopImmediatePropagation();
            if (bookmarkItem.type === 'file') {
                // Dispatch Reveal File Event
                let customEvent = new CustomEvent(eventTypes.revealFile, {
                    detail: {
                        file: this.app.vault.getAbstractFileByPath(bookmarkItem.path),
                    },
                });
                window.dispatchEvent(customEvent);
            } else if (bookmarkItem.type === 'folder') {
                event.stopImmediatePropagation();
                // Dispatch Reveal Folder Event
                let customEvent = new CustomEvent(eventTypes.revealFolder, {
                    detail: {
                        folder: this.app.vault.getAbstractFileByPath(bookmarkItem.path),
                    },
                });
                window.dispatchEvent(customEvent);
            } else {
                new Notice('Not a file or folder');
            }
        }
    };

    getBookmarksLeafElement = (): Element => {
        return document.querySelector('.workspace-leaf-content[data-type="bookmarks"]');
    };

    bookmarksAddEventListener = () => {
        let bookmarkLeafElement = this.getBookmarksLeafElement();
        if (bookmarkLeafElement) {
            bookmarkLeafElement.addEventListener('click', this.bookmarksEventHandler, true);
        }
    };

    bookmarksRemoveEventListener = () => {
        let bookmarkLeafElement = this.getBookmarksLeafElement();
        if (bookmarkLeafElement) {
            bookmarkLeafElement.removeEventListener('click', this.bookmarksEventHandler, true);
        }
    };

    triggerVaultChangeEvent = (file: TAbstractFile, changeType: VaultChange, oldPath?: string) => {
        if (this.isConfigFile(file)) return;
        let event = new CustomEvent(eventTypes.vaultChange, {
            detail: {
                file: file,
                changeType: changeType,
                oldPath: oldPath ? oldPath : '',
            },
        });
        window.dispatchEvent(event);
    };

    isConfigFile(file: TAbstractFile) {
        const configDir = this.app.vault.configDir;
        return file.path === configDir || file.path.startsWith(`${configDir}/`);
    }

    onCreate = (file: TAbstractFile) => {
        this.triggerVaultChangeEvent(file, 'create', '');
        if (isMarkdownFile(file)) {
            window.setTimeout(() => {
                this.ensureManagedNoteProperties(file);
            }, 500);
        }
    };
    onDelete = (file: TAbstractFile) => this.triggerVaultChangeEvent(file, 'delete', '');
    onModify = (file: TAbstractFile) => this.triggerVaultChangeEvent(file, 'modify', '');
    onRename = (file: TAbstractFile, oldPath: string) => {
        this.triggerVaultChangeEvent(file, 'rename', oldPath);
        if (isMarkdownFile(file)) {
            this.ensureManagedNoteProperties(file);
        }
    };

    onFileOpen = (file: TFile | null) => {
        if (this.settings.followActiveFile) this.dispatchActiveFileChange(file);
    };

    dispatchActiveFileChange = (file: TFile | null) => {
        if (!file) return;
        window.dispatchEvent(new CustomEvent(eventTypes.activeFileChange, { detail: { filePath: file.path } }));
    };

    ensureManagedNoteProperties = async (file: TAbstractFile) => {
        if (!isMarkdownFile(file) || this.isConfigFile(file)) return;

        try {
            await ensureNoteProperties(this, file);
        } catch (error) {
            console.error('FJG File Focus note property update failed:', error);
        }
    };

    refreshIconRibbon = () => {
        this.ribbonMutationObserver?.disconnect();
        this.ribbonIconEl?.remove();
        this.inboxMorningBriefRibbonIconEl?.remove();
        if (this.settings.ribbonIcon) {
            this.ribbonIconEl = this.addRibbonIcon(this.ICON, 'FJG File Focus', async () => {
                await this.openFileTreeLeaf(true);
            });
            this.inboxMorningBriefRibbonIconEl = this.addRibbonIcon('sunrise', 'Open Inbox Morning Brief', async () => {
                await this.openInboxMorningBrief();
            });
            this.placeInboxMorningBriefRibbonIcon();
            const ribbon = this.inboxMorningBriefRibbonIconEl.parentElement;
            if (ribbon) {
                this.ribbonMutationObserver = new MutationObserver(() => this.placeInboxMorningBriefRibbonIcon());
                this.ribbonMutationObserver.observe(ribbon, { childList: true });
                this.register(() => this.ribbonMutationObserver?.disconnect());
            }
        }
    };

    placeInboxMorningBriefRibbonIcon = () => {
        const ribbonIcon = this.inboxMorningBriefRibbonIconEl;
        const ribbon = ribbonIcon?.parentElement;
        if (!ribbonIcon || !ribbon) return;

        const isVisibleRibbonItem = (child: Element): child is HTMLElement => {
            if (!(child instanceof HTMLElement) || !child.classList.contains('side-dock-ribbon-action')) return false;
            const style = window.getComputedStyle(child);
            return style.display !== 'none' && style.visibility !== 'hidden' && child.getAttribute('aria-hidden') !== 'true';
        };
        const visibleRibbonItems = Array.from(ribbon.children).filter(isVisibleRibbonItem);
        const visibleRibbonItemsWithoutBrief = visibleRibbonItems.filter((item) => item !== ribbonIcon);
        if (visibleRibbonItems[2] !== ribbonIcon) {
            visibleRibbonItemsWithoutBrief[1]?.insertAdjacentElement('afterend', ribbonIcon);
        }
    };

    openInboxMorningBrief = async () => {
        const file = this.app.vault.getAbstractFileByPath(INBOX_MORNING_BRIEF_PATH);
        if (!(file instanceof TFile)) {
            new Notice(`Inbox Morning Brief not found: ${INBOX_MORNING_BRIEF_PATH}`);
            return;
        }

        await this.app.workspace.getLeaf(false).openFile(file);
    };

    openFileTreeLeaf = async (showAfterAttach: boolean) => {
        let leafs = this.app.workspace.getLeavesOfType(this.VIEW_TYPE);
        if (leafs.length == 0) {
            // Needs to be mounted
            let leaf = this.app.workspace.getLeftLeaf(false);
            await leaf.setViewState({ type: this.VIEW_TYPE });
            if (showAfterAttach) this.app.workspace.revealLeaf(leaf);
        } else {
            // Already mounted - show if only selected showAfterAttach
            if (showAfterAttach) {
                leafs.forEach((leaf) => this.app.workspace.revealLeaf(leaf));
            }
        }
    };

    detachFileTreeLeafs = () => {
        let leafs = this.app.workspace.getLeavesOfType(this.VIEW_TYPE);
        for (let leaf of leafs) {
            (leaf.view as FileTreeView).destroy();
            leaf.detach();
        }
    };

    refreshTreeLeafs = () => {
        this.detachFileTreeLeafs();
        this.openFileTreeLeaf(true);
    };
}
