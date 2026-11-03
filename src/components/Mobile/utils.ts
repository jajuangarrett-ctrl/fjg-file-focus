import React from 'react';
import { TFile, TFolder } from 'obsidian';
import * as original from 'utils/Utils';
import FileTreeAlternativePlugin from 'main';
import { VaultChangeModal } from './modals';
export * from 'utils/Utils';
/** Mobile mode preserves existing filters and keeps root browsing local. */
export const shouldExcludeFile: typeof original.shouldExcludeFile = (params) => {
    const normalized = {...params, excludedExtensions:(params.excludedExtensions || []).map(value=>value.trim().replace(/^\./,'').toLowerCase())};
    return ['py','pyc'].includes(params.file.extension.toLowerCase()) || original.shouldExcludeFile(normalized);
};
export const getFilesUnderPath: typeof original.getFilesUnderPath = (params) => {
    const root = params.path === '' || params.path === '/';
    if(root && !params.getAllFiles){
        return params.plugin.app.vault.getRoot().children.filter((file):file is TFile=>file instanceof TFile)
            .filter(file=>!shouldExcludeFile({...params,file})).map(original.TFile2OZFile);
    }
    return original.getFilesUnderPath({...params, excludedExtensions:[...params.excludedExtensions.map(value=>value.trim().replace(/^\./,'').toLowerCase()),'py','pyc']});
};
export const createNewFile = async (_event:React.MouseEvent|null, folderPath:string, plugin:FileTreeAlternativePlugin) => {
    const folder = plugin.app.vault.getAbstractFileByPath(folderPath || '/');
    if(folder instanceof TFolder) new VaultChangeModal(plugin,folder,'create note').open();
};
