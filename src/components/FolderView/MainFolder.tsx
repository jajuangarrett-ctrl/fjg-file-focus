import React from 'react';
import Tree from 'components/FolderView/treeComponent/TreeComponent';
import FileTreeAlternativePlugin from 'main';
import ConditionalRootFolderWrapper from 'components/FolderView/ConditionalWrapper';
import { useRecoilState } from 'recoil';
import * as recoilState from 'recoil/pluginState';
import { NestedFolders } from 'components/FolderView/NestedFolders';
import { TFile, TFolder, Menu, Notice } from 'obsidian';
import { VaultChangeModal } from 'modals';
import * as Icons from 'utils/icons';
import { FolderSortType } from 'settings';
import useForceUpdate from 'hooks/ForceUpdate';
import { FolderTree } from 'utils/types';

interface FolderProps {
    plugin: FileTreeAlternativePlugin;
}

const OMNISEARCH_COMMAND_ID = 'omnisearch:show-modal';
const VAULT_CONTROL_CENTER_PATH = 'Artifacts/Vault Control Center/vault-control-center.html';

export function MainFolder(props: FolderProps) {
    const treeStyles = { color: 'var(--text-muted)', fill: '#c16ff7', width: '100%' };
    const plugin = props.plugin;
    const app = plugin.app;
    const rootFolder = app.vault.getRoot();

    // Global States
    const [activeFolderPath, setActiveFolderPath] = useRecoilState(recoilState.activeFolderPath);
    const [view, setView] = useRecoilState(recoilState.view);
    const [folderTree] = useRecoilState(recoilState.folderTree);
    const [focusedFolder, setFocusedFolder] = useRecoilState(recoilState.focusedFolder);
    const [_openFolders, setOpenFolders] = useRecoilState(recoilState.openFolders);
    const [activeOzFile] = useRecoilState(recoilState.activeOZFile);

    // Force Update
    const forceUpdate = useForceUpdate();

    const focusOnFolder = (folder: TFolder) => {
        setFocusedFolder(folder);
        setActiveFolderPath(folder.path);
    };

    const openFocusPanel = (panel: 'recent' | 'bookmarks') => {
        setView(panel);
    };

    const createFolder = (underFolder: TFolder) => {
        let vaultChangeModal = new VaultChangeModal(plugin, underFolder, 'create folder');
        vaultChangeModal.open();
    };

    const createFolderInCurrentFolder = () => {
        const activeFolder = activeFolderPath ? app.vault.getAbstractFileByPath(activeFolderPath) : null;
        if (activeFolder instanceof TFolder) {
            createFolder(activeFolder);
            return;
        }

        createFolder(focusedFolder instanceof TFolder ? focusedFolder : rootFolder);
    };

    const openVaultControlCenter = async () => {
        const file = app.vault.getAbstractFileByPath(VAULT_CONTROL_CENTER_PATH);

        if (!(file instanceof TFile)) {
            new Notice(`Vault Control Center not found: ${VAULT_CONTROL_CENTER_PATH}`);
            return;
        }

        const htmlViewerPlugin = (app as any).plugins?.getPlugin?.('html-viewer');

        if (htmlViewerPlugin?.openHtmlFile) {
            await htmlViewerPlugin.openHtmlFile(file);
            return;
        }

        await app.workspace.getLeaf(false).openFile(file);
    };

    const handleRootFolderContextMenu = (event: MouseEvent, folder: TFolder) => {
        // Event Undefined Correction
        let e = event;
        if (event === undefined) e = window.event as MouseEvent;

        // Menu Items
        const folderMenu = new Menu();

        folderMenu.addItem((menuItem) => {
            menuItem
                .setTitle('New Folder')
                .setIcon('folder')
                .onClick((ev: MouseEvent) => createFolder(folder));
        });

        if (!folder.isRoot()) {
            folderMenu.addItem((menuItem) => {
                menuItem
                    .setTitle('Focus Back to Root')
                    .setIcon('zoomOutDoubleIcon')
                    .onClick(() => focusOnFolder(rootFolder));
            });
        }

        if (folder.parent && !folder.parent.isRoot() && folder.parent !== focusedFolder) {
            folderMenu.addItem((menuItem) => {
                menuItem
                    .setTitle('Focus to Parent Folder')
                    .setIcon('zoomOutIcon')
                    .onClick(() => focusOnFolder(folder.parent));
            });
        }

        // Trigger
        app.workspace.trigger('root-folder-menu', folderMenu, folder);
        folderMenu.showAtPosition({ x: e.pageX, y: e.pageY });
        return false;
    };

    // --> Collapse, Expland Button Functions
    const collapseAllFolders = () => setOpenFolders([]);

    const explandAllFolders = () => {
        let newOpenFolders: string[] = [];

        newOpenFolders.push(folderTree.folder.path);

        const recursiveFx = (folderTreeChildren: FolderTree[]) => {
            for (let folderTreeChild of folderTreeChildren) {
                newOpenFolders.push(folderTreeChild.folder.path);
                if (folderTreeChild.children.length > 0) {
                    recursiveFx(folderTreeChild.children);
                }
            }
        };

        recursiveFx(folderTree.children);
        setOpenFolders(newOpenFolders);
    };

    const triggerFolderSortOptions = (e: React.MouseEvent) => {
        const sortMenu = new Menu();

        const changeSortSettingTo = (newValue: FolderSortType) => {
            plugin.settings.sortFoldersBy = newValue;
            plugin.saveSettings();
            forceUpdate();
        };

        sortMenu.addItem((menuItem) => {
            menuItem.setTitle('Folder Name (A to Z)');
            menuItem.onClick((ev: MouseEvent) => {
                changeSortSettingTo('name');
            });
        });

        if (plugin.settings.folderCount) {
            sortMenu.addItem((menuItem) => {
                menuItem.setTitle('Item Numbers (Bigger to Smaller)');
                menuItem.onClick((ev: MouseEvent) => {
                    changeSortSettingTo('item-number');
                });
            });
        }

        // Trigger
        plugin.app.workspace.trigger('sort-menu', sortMenu);
        sortMenu.showAtPosition({ x: e.pageX, y: e.pageY });
        return false;
    };

    const openOmnisearch = () => {
        const commands = (plugin.app as any).commands;

        if (!commands?.commands?.[OMNISEARCH_COMMAND_ID] || !commands?.executeCommandById) {
            new Notice('Omnisearch command is not available.');
            return;
        }

        commands.executeCommandById(OMNISEARCH_COMMAND_ID);
    };

    const copySelectedVaultFolderPath = async () => {
        const activeFile = plugin.app.workspace.getActiveFile();
        const folderPath = activeOzFile?.parent?.path || activeFile?.parent?.path || activeFolderPath;

        if (!folderPath) {
            new Notice('Select a note first.');
            return;
        }

        const copyPath = folderPath === '/' ? '/' : folderPath;
        try {
            await navigator.clipboard.writeText(copyPath);
            new Notice(`Copied folder path: ${copyPath}`);
        } catch (error) {
            new Notice(`Could not copy folder path: ${error instanceof Error ? error.message : String(error)}`);
        }
    };

    const handleFolderNameDoubleClick = (folder: TFolder) => {
        if (!folder.isRoot()) focusOnFolder(folder.parent);
    };

    let folderActionItemSize = 22;

    return (
        <div className="oz-folders-tree-wrapper">
            <div className="oz-folders-action-items file-tree-header-fixed">
                <Icons.FaHome
                    className="oz-nav-action-button"
                    size={folderActionItemSize - 2}
                    onClick={() => void openVaultControlCenter()}
                    aria-label="Open Vault Control Center"
                />
                <Icons.MdOutlineCreateNewFolder
                    className="oz-nav-action-button"
                    size={folderActionItemSize}
                    onClick={() => createFolderInCurrentFolder()}
                    aria-label="Create Folder in Current Folder"
                />
                <Icons.IoIosSearch
                    className="oz-nav-action-button"
                    size={folderActionItemSize}
                    onClick={openOmnisearch}
                    aria-label="Open Omnisearch"
                />
                <Icons.CgSortAz
                    className="oz-nav-action-button"
                    size={folderActionItemSize}
                    onClick={triggerFolderSortOptions}
                    aria-label="Sorting Options"
                />
                <Icons.FaHistory
                    className={`oz-nav-action-button${view === 'recent' ? ' is-active' : ''}`}
                    size={folderActionItemSize - 2}
                    onClick={() => openFocusPanel('recent')}
                    aria-label="Recent Notes"
                />
                <Icons.FaRegBookmark
                    className={`oz-nav-action-button${view === 'bookmarks' ? ' is-active' : ''}`}
                    size={folderActionItemSize - 2}
                    onClick={() => openFocusPanel('bookmarks')}
                    aria-label="Bookmarks"
                />
                <Icons.BiCopy
                    className="oz-nav-action-button"
                    size={folderActionItemSize - 2}
                    onClick={() => void copySelectedVaultFolderPath()}
                    aria-label="Copy Selected Note Folder Path"
                />
                <Icons.CgChevronDoubleUp
                    className="oz-nav-action-button"
                    size={folderActionItemSize}
                    onClick={collapseAllFolders}
                    aria-label="Collapse Folders"
                />
                <Icons.CgChevronDoubleDown
                    className="oz-nav-action-button"
                    size={folderActionItemSize}
                    onClick={explandAllFolders}
                    aria-label="Expand Folders"
                />
            </div>
            <ConditionalRootFolderWrapper
                condition={(focusedFolder && !focusedFolder.isRoot()) || (focusedFolder && focusedFolder.isRoot && plugin.settings.showRootFolder)}
                wrapper={(children) => {
                    return (
                        <Tree
                            plugin={plugin}
                            content={focusedFolder.isRoot() ? plugin.app.vault.getName() : focusedFolder.name}
                            open
                            isRootFolder={focusedFolder.isRoot()}
                            style={treeStyles}
                            onClick={() => setActiveFolderPath(focusedFolder.path)}
                            onDoubleClick={() => handleFolderNameDoubleClick(focusedFolder)}
                            folder={focusedFolder}
                            onContextMenu={(e: MouseEvent) => handleRootFolderContextMenu(e, focusedFolder)}>
                            {children}
                        </Tree>
                    );
                }}>
                {folderTree && <NestedFolders plugin={plugin} folderTree={folderTree} />}
            </ConditionalRootFolderWrapper>
        </div>
    );
}
