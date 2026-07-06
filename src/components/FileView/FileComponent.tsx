import React, { useState, useEffect, useMemo } from 'react';
import { Notice, TFile } from 'obsidian';
import Dropzone from 'react-dropzone';
import * as Icons from 'utils/icons';
import FileTreeAlternativePlugin from 'main';
import { OZFile } from 'utils/types';
import * as Util from 'utils/Utils';
import * as recoilState from 'recoil/pluginState';
import { useRecoilState } from 'recoil';
import useForceUpdate from 'hooks/ForceUpdate';
import useLongPress from 'hooks/useLongPress';
import * as FileViewHandlers from 'components/FileView/handlers';
import LazyLoad from 'react-lazy-load';

interface FilesProps {
    plugin: FileTreeAlternativePlugin;
}

const SEMANTIC_LINK_SUGGESTIONS_COMMAND_ID = 'semantic-graph-builder:open-link-suggestions';
const AUTO_TITLE_COMMAND_ID = 'auto-title:generate-title';
const DELETE_CURRENT_FILE_COMMAND_ID = 'app:delete-file';
const MOVE_CURRENT_FILE_COMMAND_ID = 'file-explorer:move-file';
const FENCED_CODE_BLOCK_PATTERN = /^(```|~~~)/;
const MARKDOWN_STRUCTURE_PATTERN = /^(\s{0,3}(#{1,6}\s+|[-*+]\s+|\d+[.)]\s+|>\s?|!\[[^\]]*\]\(|\[[^\]]+\]\([^)]+\)|\|.*\||-{3,}\s*$|\*{3,}\s*$|_{3,}\s*$|<[^>]+>))/;

const getFrontmatterEndIndex = (lines: string[]) => {
    if (lines[0]?.trim() !== '---') return -1;

    for (let index = 1; index < lines.length; index++) {
        if (lines[index].trim() === '---') return index;
    }

    return -1;
};

const hasMarkdownHeading = (lines: string[], frontmatterEndIndex: number) => {
    let inCodeBlock = false;

    for (let index = frontmatterEndIndex + 1; index < lines.length; index++) {
        const trimmed = lines[index].trim();

        if (FENCED_CODE_BLOCK_PATTERN.test(trimmed)) {
            inCodeBlock = !inCodeBlock;
            continue;
        }

        if (!inCodeBlock && /^#{1,6}\s+\S/.test(trimmed)) return true;
    }

    return false;
};

const isStructuredMarkdownLine = (line: string) => MARKDOWN_STRUCTURE_PATTERN.test(line) || /^\s{4,}\S/.test(line);

const looksLikeSectionHeading = (line: string) => line.endsWith(':') && line.length <= 80;

const formatNoteContentWithMarkdown = (content: string) => {
    const lineEnding = content.includes('\r\n') ? '\r\n' : '\n';
    const lines = content.replace(/\r\n/g, '\n').split('\n');
    const frontmatterEndIndex = getFrontmatterEndIndex(lines);
    let noteHasHeading = hasMarkdownHeading(lines, frontmatterEndIndex);
    let inCodeBlock = false;

    const formattedLines = lines.map((line, index) => {
        if (index <= frontmatterEndIndex) return line;

        const trimmed = line.trim();

        if (FENCED_CODE_BLOCK_PATTERN.test(trimmed)) {
            inCodeBlock = !inCodeBlock;
            return line;
        }

        if (inCodeBlock || trimmed.length === 0 || isStructuredMarkdownLine(line)) return line;

        if (looksLikeSectionHeading(trimmed)) return `## ${trimmed}`;

        if (!noteHasHeading) {
            noteHasHeading = true;
            return `# ${trimmed}`;
        }

        return `- ${trimmed}`;
    });

    return formattedLines.join(lineEnding);
};

export function FileComponent(props: FilesProps) {
    let searchInput = React.useRef<HTMLInputElement>(null);
    const plugin = props.plugin;

    // States Coming From Main Component
    const [_view, setView] = useRecoilState(recoilState.view);
    const [ozFileList, setOzFileList] = useRecoilState(recoilState.ozFileList);
    const [ozPinnedFiles] = useRecoilState(recoilState.ozPinnedFileList);
    const [activeFolderPath, setActiveFolderPath] = useRecoilState(recoilState.activeFolderPath);
    const [excludedExtensions] = useRecoilState(recoilState.excludedExtensions);
    const [excludedFolders] = useRecoilState(recoilState.excludedFolders);
    const [showSubFolders, setShowSubFolders] = useRecoilState(recoilState.showSubFolders);
    const [focusedFolder, _setFocusedFolder] = useRecoilState(recoilState.focusedFolder);
    const [activeOzFile] = useRecoilState(recoilState.activeOZFile);

    // Local States
    const [highlight, setHighlight] = useState<boolean>(false);
    const [searchPhrase, setSearchPhrase] = useState<string>('');
    const [searchBoxVisible, setSearchBoxVisible] = useState<boolean>(false);
    const [treeHeader, setTreeHeader] = useState<string>(Util.getFolderName(activeFolderPath, plugin.app));
    const colorfulHeaderClassName = Util.getColorfulHeaderClassName(activeFolderPath, plugin);

    // Force Update
    const forceUpdate = useForceUpdate();

    // Folder Name Update once Active Folder Path Change
    useEffect(() => setTreeHeader(Util.getFolderName(activeFolderPath, plugin.app)), [activeFolderPath]);

    // File List Update once file visibility settings change
    useEffect(() => {
        setOzFileList(
            Util.getFilesUnderPath({
                path: activeFolderPath,
                plugin: plugin,
                excludedExtensions: excludedExtensions,
                excludedFolders: excludedFolders,
            })
        );
    }, [showSubFolders, excludedExtensions, excludedFolders, plugin.settings.showOnlySupportedFileTypes]);

    // To focus on Search box if visible set
    useEffect(() => {
        if (searchBoxVisible) searchInput.current.focus();
    }, [searchBoxVisible]);

    const filesToList: OZFile[] = useMemo(
        () =>
            FileViewHandlers.sortedFiles({
                fileList: ozFileList,
                plugin: plugin,
                ozPinnedFiles: ozPinnedFiles,
            }),
        [excludedFolders, excludedExtensions, ozPinnedFiles, ozFileList, plugin.settings.sortFilesBy, plugin.settings.sortReverse]
    );

    // Go Back Button - Sets Main Component View to Folder
    const handleGoBack = (e: React.MouseEvent) => {
        setView('folder');
        setActiveFolderPath('');
    };

    // Toggle Search Box Visibility State
    const toggleSearchBox = () => {
        setSearchPhrase('');
        setSearchBoxVisible(!searchBoxVisible);
        setOzFileList(
            Util.getFilesUnderPath({
                path: activeFolderPath,
                plugin: plugin,
                excludedExtensions: excludedExtensions,
                excludedFolders: excludedFolders,
            })
        );
    };

    const toggleShowSubFolders = async () => {
        plugin.settings.showFilesFromSubFolders = !showSubFolders;
        await plugin.saveSettings();
        setShowSubFolders(!showSubFolders);
    };

    const copySelectedVaultFilePath = async () => {
        const activeFile = plugin.app.workspace.getActiveFile();
        const filePath = activeOzFile?.path || activeFile?.path;

        if (!filePath) {
            new Notice('Select a note first.');
            return;
        }

        try {
            await navigator.clipboard.writeText(filePath);
            new Notice(`Copied file path: ${filePath}`);
        } catch (error) {
            new Notice(`Could not copy file path: ${error instanceof Error ? error.message : String(error)}`);
        }
    };

    const executeCommandById = (commandId: string, unavailableNotice: string) => {
        const commands = (plugin.app as any).commands;

        if (!commands?.commands?.[commandId] || !commands?.executeCommandById) {
            new Notice(unavailableNotice);
            return;
        }

        commands.executeCommandById(commandId);
    };

    const openSemanticLinkSuggestions = () =>
        executeCommandById(SEMANTIC_LINK_SUGGESTIONS_COMMAND_ID, 'Semantic Graph Builder command is not available.');

    const generateAutoTitle = () => executeCommandById(AUTO_TITLE_COMMAND_ID, 'Auto Title command is not available.');
    const moveCurrentFile = () => executeCommandById(MOVE_CURRENT_FILE_COMMAND_ID, 'Move current file command is not available.');
    const deleteCurrentFile = () => executeCommandById(DELETE_CURRENT_FILE_COMMAND_ID, 'Delete current file command is not available.');

    const quickFormatCurrentNote = async () => {
        const activeFile = plugin.app.workspace.getActiveFile();
        const selectedPath = activeOzFile?.path || activeFile?.path;
        const file = selectedPath ? plugin.app.vault.getAbstractFileByPath(selectedPath) : activeFile;

        if (!(file instanceof TFile)) {
            new Notice('Select a note first.');
            return;
        }

        if (file.extension.toLowerCase() !== 'md') {
            new Notice('Quick format only works on Markdown notes.');
            return;
        }

        const originalContent = await plugin.app.vault.read(file);
        const formattedContent = formatNoteContentWithMarkdown(originalContent);

        if (formattedContent === originalContent) {
            new Notice('Current note already looks formatted.');
            return;
        }

        await plugin.app.vault.modify(file, formattedContent);
        new Notice('Formatted current note with Markdown.');
    };

    const topIconSize = 19;

    return (
        <React.Fragment>
            <Dropzone
                onDrop={(files) =>
                    FileViewHandlers.handleOnDropFiles({
                        files,
                        activeFolderPath,
                        plugin,
                    })
                }
                noClick={true}
                onDragEnter={() => setHighlight(true)}
                onDragLeave={() => setHighlight(false)}
                onDropAccepted={() => setHighlight(false)}
                onDropRejected={() => setHighlight(false)}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className={highlight ? 'drag-entered' : ''} style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <input {...getInputProps()} />

                        <div className="oz-explorer-container">
                            {/* Header */}
                            <div className={`oz-file-tree-header-wrapper${plugin.settings.fixedHeaderInFileList ? ' file-tree-header-fixed' : ''}`}>
                                <div className="oz-flex-container">
                                    <div className="oz-nav-action-button" style={{ marginLeft: '0px' }}>
                                        {['Horizontal', 'Vertical'].includes(plugin.settings.evernoteView) ? (
                                            <Icons.IoIosCloseCircleOutline
                                                onClick={(e) => handleGoBack(e)}
                                                size={topIconSize}
                                                aria-label="Close File Pane"
                                            />
                                        ) : (
                                            <Icons.IoIosArrowBack
                                                onClick={(e) => handleGoBack(e)}
                                                size={topIconSize}
                                                aria-label="Go Back to Folder View"
                                            />
                                        )}
                                    </div>
                                    <div className="oz-nav-action-button">
                                        <Icons.FaTrash onClick={deleteCurrentFile} size={topIconSize - 2} aria-label="Delete Current File" />
                                    </div>
                                    <div className="oz-nav-action-button">
                                        <Icons.MdFormatListBulleted
                                            onClick={() => void quickFormatCurrentNote()}
                                            size={topIconSize + 1}
                                            aria-label="Quick Format Current Note"
                                        />
                                    </div>
                                    <div className="oz-nav-buttons-right-block">
                                        {plugin.settings.revealActiveFileButton && (
                                            <div className="oz-nav-action-button">
                                                <Icons.BiCurrentLocation
                                                    onClick={() => FileViewHandlers.handleRevealActiveFileButton({ plugin })}
                                                    size={topIconSize}
                                                    aria-label="Reveal Active File"
                                                />
                                            </div>
                                        )}
                                        <div className="oz-nav-action-button">
                                            <Icons.FaFolderOpen onClick={moveCurrentFile} size={topIconSize - 1} aria-label="Move Current File" />
                                        </div>
                                        <div className="oz-nav-action-button">
                                            <Icons.MdTitle onClick={generateAutoTitle} size={topIconSize} aria-label="Generate Auto Title" />
                                        </div>
                                        <div className="oz-nav-action-button">
                                            <Icons.FaProjectDiagram
                                                onClick={openSemanticLinkSuggestions}
                                                size={topIconSize - 1}
                                                aria-label="Open Semantic Link Suggestions"
                                            />
                                        </div>
                                        <div className="oz-nav-action-button">
                                            <Icons.BiCopy
                                                onClick={() => void copySelectedVaultFilePath()}
                                                size={topIconSize}
                                                aria-label="Copy Selected Note File Path"
                                            />
                                        </div>
                                        {plugin.settings.showFilesFromSubFoldersButton && (
                                            <div className="oz-nav-action-button">
                                                {showSubFolders ? (
                                                    <Icons.IoIosEyeOff
                                                        onClick={toggleShowSubFolders}
                                                        size={topIconSize}
                                                        aria-label="Hide Files from Sub-Folders"
                                                    />
                                                ) : (
                                                    <Icons.IoIosEye
                                                        onClick={toggleShowSubFolders}
                                                        size={topIconSize}
                                                        aria-label="Show Files from Sub-Folders"
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {plugin.settings.searchFunction && (
                                            <div className="oz-nav-action-button">
                                                <Icons.IoIosSearch onClick={toggleSearchBox} size={topIconSize} aria-label="Search File by Name or Tag" />
                                            </div>
                                        )}
                                        <div className="oz-nav-action-button">
                                            <Icons.CgSortAz
                                                size={topIconSize + 2}
                                                onClick={(e) => {
                                                    FileViewHandlers.sortFileListClickHandle({ e, plugin, forceUpdate });
                                                }}
                                                aria-label="Sorting Options"
                                            />
                                        </div>
                                        <div className="oz-nav-action-button">
                                            <Icons.IoIosAddCircle
                                                onClick={(e) => Util.createNewFile(e, activeFolderPath, plugin)}
                                                size={topIconSize}
                                                aria-label="Create a Note"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {searchBoxVisible && (
                                    <div className="oz-input-container">
                                        <input
                                            type="search"
                                            placeholder="Search..."
                                            ref={searchInput}
                                            value={searchPhrase}
                                            onChange={(e) => {
                                                FileViewHandlers.handleSearch({
                                                    e,
                                                    plugin,
                                                    activeFolderPath,
                                                    setSearchPhrase,
                                                    setTreeHeader,
                                                    setOzFileList,
                                                    excludedExtensions,
                                                    excludedFolders,
                                                    focusedFolder,
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Escape') {
                                                    e.preventDefault();
                                                    toggleSearchBox();
                                                }
                                            }}
                                        />
                                    </div>
                                )}

                                <div className={'oz-file-tree-header' + colorfulHeaderClassName}>{treeHeader}</div>
                            </div>
                            {/* End: Header */}

                            {/* File List */}
                            <div
                                className={`oz-file-tree-files${
                                    plugin.settings.fixedHeaderInFileList
                                        ? searchBoxVisible
                                            ? ' file-tree-files-fixed-with-search'
                                            : ' file-tree-files-fixed'
                                        : ''
                                }`}>
                                {filesToList.map((file, index) => {
                                    return (
                                        <LazyLoad height={22} key={index}>
                                            <NavFile file={file} plugin={plugin} />
                                        </LazyLoad>
                                    );
                                })}
                            </div>
                            {/* End: File List */}
                        </div>
                    </div>
                )}
            </Dropzone>
        </React.Fragment>
    );
}

/* ----------- SINGLE NAVFILE ELEMENT ----------- */

const NavFile = (props: { file: OZFile; plugin: FileTreeAlternativePlugin }) => {
    const { file, plugin } = props;

    const [ozPinnedFiles, setOzPinnedFiles] = useRecoilState(recoilState.ozPinnedFileList);
    const [activeOzFile, setActiveOzFile] = useRecoilState(recoilState.activeOZFile);

    const [hoverActive, setHoverActive] = useState<boolean>(false);

    const longPressEvents = useLongPress((e: React.TouchEvent) => {
        FileViewHandlers.triggerContextMenu({
            file,
            e,
            plugin,
            ozPinnedFiles,
            setOzPinnedFiles,
        });
    }, 500);

    useEffect(() => {
        const handleKeyDownEvent = (e: KeyboardEvent) => {
            if (e.key === 'Control' || e.key === 'Meta') {
                let el = document.querySelector(`.oz-nav-file-title[data-path="${file.path}"]`);
                if (el) plugin.app.workspace.trigger('link-hover', {}, el, file.path, file.path);
            }
        };

        if (hoverActive && plugin.settings.filePreviewOnHover) {
            document.addEventListener('keydown', handleKeyDownEvent);
            return () => {
                document.removeEventListener('keydown', handleKeyDownEvent);
            };
        }
    }, [hoverActive]);

    const FileIcon = useMemo(
        () =>
            FileViewHandlers.getFileIcon({
                file,
            }),
        [plugin.settings.iconBeforeFileName, file]
    );

    const fileDisplayName = useMemo(() => {
        return plugin.settings.showFileNameAsFullPath ? Util.getFileNameAndExtension(file.path).fileName : file.basename;
    }, [plugin.settings.showFileNameAsFullPath, file.path]);
    const colorfulFileClassName = Util.getColorfulFileClassName(file, plugin);

    return (
        <div
            className={'oz-nav-file' + colorfulFileClassName + (activeOzFile && activeOzFile.path === file.path ? ' is-active' : '')}
            key={file.path}
            draggable
            onDragStart={(e) =>
                FileViewHandlers.dragStarted({
                    e,
                    file,
                    plugin,
                })
            }
            onClick={(e) =>
                FileViewHandlers.openFile({
                    e,
                    file,
                    plugin,
                    setActiveOzFile,
                })
            }
            onAuxClick={(e) => FileViewHandlers.onAuxClick({ e, plugin, file })}
            onContextMenu={(e) =>
                FileViewHandlers.triggerContextMenu({
                    e,
                    file,
                    plugin,
                    ozPinnedFiles,
                    setOzPinnedFiles,
                })
            }
            onMouseEnter={(e) =>
                FileViewHandlers.mouseEnteredOnFile({
                    e,
                    file,
                    plugin,
                    setHoverActive,
                })
            }
            onMouseLeave={(e) => FileViewHandlers.mouseLeftFile({ e, file, setHoverActive })}
            {...longPressEvents}>
            <div className="oz-nav-file-title" data-path={file.path}>
                <div className="oz-nav-file-title-content">
                    {plugin.settings.iconBeforeFileName && <FileIcon className="oz-nav-file-icon" size={15} />}
                    {fileDisplayName}
                </div>
                {ozPinnedFiles.some((f) => f.path === file.path) && <Icons.FaThumbtack className="oz-nav-file-tag" size={14} />}
                {file.extension !== 'md' && <span className="oz-nav-file-tag">{file.extension}</span>}
            </div>
        </div>
    );
};
