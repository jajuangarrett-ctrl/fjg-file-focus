import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { Menu, Notice, TFolder } from 'obsidian';
import { useRecoilState } from 'recoil';
import * as state from 'recoil/pluginState';
import FileTreeAlternativePlugin from 'main';
import { MainFolder } from 'components/Mobile/MobileFolder';
import { FileComponent } from 'components/Mobile/MobileFiles';
import { FocusPanel } from 'components/Mobile/FocusPanel';
import * as Icons from 'utils/icons';
import useLongPress from 'components/Mobile/useLongPress';
import { MobileAction, FOLDER_SELECTED, FOCUS_SEARCH } from './actions';


export function MobileNavigator({plugin}: {plugin: FileTreeAlternativePlugin}) {
    const [view, setView] = useRecoilState(state.view);
    const [path, setPath] = useRecoilState(state.activeFolderPath);
    const [folder, setFolder] = useRecoilState(state.focusedFolder);
    const [files] = useRecoilState(state.ozFileList);
    const host = useRef<HTMLDivElement>(null), pane = useRef<HTMLDivElement>(null), fileStart = useRef<HTMLDivElement>(null);
    const folderActions = useRef<MobileAction[]>([]), fileActions = useRef<MobileAction[]>([]);
    const [width, setWidth] = useState(0);
    const pendingJump = useRef(false);
    const [jump, setJump] = useState(0);
    const [ratio, setRatio] = useState(() => {
        const value = Number(localStorage.getItem('fjgFileFocus-mobile-column-ratio'));
        return value >= .25 && value <= .55 ? value : .35;
    });
    const wide = width >= 560;
    const focusMode = view === 'recent' || view === 'bookmarks';
    const atRoot = !path || path === '/';
    const [rootFilesVisible, setRootFilesVisible] = useState(false);
    const showFiles = !atRoot || rootFilesVisible;
    useEffect(() => { setRootFilesVisible(false); }, [path]);
    useEffect(() => {
        const show = () => setRootFilesVisible(true);
        window.addEventListener('ffm-show-root-files',show);
        return () => window.removeEventListener('ffm-show-root-files',show);
    }, []);
    const scrollToFiles = () => {
        if (!wide && showFiles && fileStart.current && pane.current && files.length) {
            pane.current.scrollTop = fileStart.current.offsetTop - pane.current.offsetTop - (plugin.settings.fixedHeaderInFileList ? 44 : 0);
        }
    };
    useLayoutEffect(() => {
        const observer = new ResizeObserver(() => setWidth(host.current?.getBoundingClientRect().width || 0));
        if (host.current) observer.observe(host.current);
        return () => observer.disconnect();
    }, []);
    useLayoutEffect(() => { pendingJump.current = Boolean(path) && !focusMode; }, [path, wide, focusMode, jump]);
    useLayoutEffect(() => {
        if (!path || focusMode || !pendingJump.current || !files.length) return;
        if (!wide) { const selected=plugin.app.vault.getAbstractFileByPath(path); if(selected instanceof TFolder && selected !== folder) setFolder(selected); }
        let second = 0;
        const frame = requestAnimationFrame(() => { second = requestAnimationFrame(() => { scrollToFiles(); pendingJump.current=false; }); });
        return () => { cancelAnimationFrame(frame); cancelAnimationFrame(second); };
    }, [path, wide, files, focusMode, jump]);
    useEffect(() => {
        const choose = (event: Event) => {
            const selected = (event as CustomEvent<TFolder>).detail;
            if (!(selected instanceof TFolder)) return;
            if (!wide) setFolder(selected);
            setPath(selected.path); setView('file'); setJump(value => value + 1);
            requestAnimationFrame(scrollToFiles);
        };
        window.addEventListener(FOLDER_SELECTED, choose);
        return () => window.removeEventListener(FOLDER_SELECTED, choose);
    }, [wide, files]);
    const navigate = (target: TFolder) => {
        setRootFilesVisible(false);
        setFolder(target); setPath(target.path); setView('file'); setJump(value => value + 1);
        requestAnimationFrame(scrollToFiles);
    };
    const goBack = () => {
        if (focusMode) { setView('file'); return; }
        const current = plugin.app.vault.getAbstractFileByPath(path);
        if (current instanceof TFolder && current.parent) navigate(current.parent);
        else { setRootFilesVisible(false); if (pane.current) pane.current.scrollTop = 0; }
    };
    const backPress = useLongPress(() => navigate(plugin.app.vault.getRoot()), 500);
    const run = (action: MobileAction, event?: any) => {
        try { Promise.resolve(action.run(event)).catch(error => new Notice(`${action.title}: ${error?.message || error}`)); }
        catch (error) { new Notice(`${action.title}: ${error instanceof Error ? error.message : String(error)}`); }
    };
    const fileAction = (id: string, event?: any) => {
        const action = fileActions.current.find(item => item.id === id);
        if (action) run(action, event); else new Notice('The navigator is still loading. Try again shortly.');
    };
    const overflow = (event: React.MouseEvent) => {
        const menu = new Menu();
        const add = (title: string, action: () => unknown) => menu.addItem(item => item.setTitle(title).onClick(() => run({id:title,title,run:action},event)));
        add('Browse subfolders', () => { setView('file'); if (pane.current) pane.current.scrollTop = 0; });
        if (atRoot) add(rootFilesVisible ? 'Hide vault-root files' : 'Show vault-root files', () => setRootFilesVisible(value => !value));
        add('Recent Notes', () => setView('recent'));
        add('Jump to vault root', () => navigate(plugin.app.vault.getRoot()));
        const sections: [string, MobileAction[]][] = [['Folders', folderActions.current], ['Notes', fileActions.current.filter(a => !['search','new-note'].includes(a.id))]];
        for (const [label, actions] of sections) {
            menu.addSeparator(); menu.addItem(item => item.setTitle(label).setDisabled(true));
            for (const action of actions.filter(a => a.visible !== false)) menu.addItem(item => item.setTitle(action.title).onClick(e => run(action, e)));
        }
        menu.showAtPosition({x:event.clientX,y:event.clientY});
    };
    const toolbar = <div className={`ffm-toolbar${plugin.settings.fixedHeaderInFileList ? ' ffm-toolbar-fixed' : ''}`} role="toolbar" aria-label="File Focus">
        <button className="ffm-back" aria-label={`Back from ${path || 'vault root'}. Hold to jump to root.`} title={path || 'Vault root'} onClick={goBack} onContextMenu={e => {e.preventDefault();navigate(plugin.app.vault.getRoot());}} {...backPress}><Icons.FaArrowCircleLeft/><span>{focusMode ? view : (path?.split('/').pop() || plugin.app.vault.getName())}</span></button>
        <button aria-label="Search" title="Search" onClick={e => { if(focusMode) window.dispatchEvent(new Event(FOCUS_SEARCH)); else { if(atRoot) setRootFilesVisible(true); fileAction('search',e); } }}><Icons.IoIosSearch/></button>
        <button aria-label="New note" title="New note" onClick={e => fileAction('new-note',e)}><Icons.IoIosAddCircle/></button>
        {plugin.settings.mobileToolbarShortcut === 'folder-navigator' ? <button aria-label="Open Folder Navigator" title="Open Folder Navigator" onClick={e => { const action=folderActions.current.find(item=>item.id==='folder-navigator'); if(action) run(action,e); }}><Icons.FaFolderOpen/></button> : <button aria-label="Recent" title="Recent" aria-pressed={view==='recent'} onClick={() => setView('recent')}><Icons.FaHistory/></button>}
        <button aria-label="Bookmarks" title="Bookmarks" aria-pressed={view==='bookmarks'} onClick={() => setView('bookmarks')}><Icons.FaRegBookmark/></button>
        <button aria-label="More actions" title="More actions" onClick={overflow}>⋯</button>
    </div>;
    const resize = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!host.current) return;
        const rect = host.current.getBoundingClientRect();
        const next = Math.max(.25, Math.min(.55, (e.clientX - rect.left) / rect.width));
        setRatio(next); localStorage.setItem('fjgFileFocus-mobile-column-ratio', String(next));
    };
    return <div ref={host} className={`ffm-navigator ${wide ? 'ffm-wide' : 'ffm-compact'} ${plugin.settings.fixedHeaderInFileList ? '' : 'ffm-unpinned'} ${showFiles ? '' : 'ffm-root-folders-only'}`} data-layout={wide ? 'columns':'drilldown'} style={{'--ffm-folder-ratio': `${ratio*100}%`} as React.CSSProperties}>
        <div ref={pane} className="ffm-pane ffm-main-scroll">
            {toolbar}
            <div className="ffm-columns" hidden={focusMode}>
                <div className="ffm-folder-column" aria-label="Folders"><MainFolder plugin={plugin} adaptive actionsRef={folderActions}/></div>
                {wide && showFiles && <div className="ffm-divider" role="separator" aria-label="Resize folder column" aria-orientation="vertical" aria-valuemin={25} aria-valuemax={55} aria-valuenow={Math.round(ratio*100)} tabIndex={0} onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);resize(e);}} onPointerMove={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))resize(e);}} onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault(); const n=Math.max(.25,Math.min(.55,ratio+(e.key==='ArrowLeft'?-.025:.025)));setRatio(n);localStorage.setItem('fjgFileFocus-mobile-column-ratio',String(n));}}}/>}
                <div ref={fileStart} hidden={!showFiles} className={`ffm-file-column${wide ? ' ffm-pane':''}`} aria-label="Folder files"><FileComponent plugin={plugin} wide={wide} adaptive actionsRef={fileActions}/></div>
            </div>
            {focusMode && <FocusPanel plugin={plugin} mode={view as 'recent'|'bookmarks'} adaptive/>}
        </div>
    </div>;
}
