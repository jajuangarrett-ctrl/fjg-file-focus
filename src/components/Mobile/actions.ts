import React from 'react';
export interface MobileAction { id: string; title: string; run: (event?: any) => unknown; visible?: boolean; }
export type MobileActionsRef = React.MutableRefObject<MobileAction[]>;
export const FOLDER_SELECTED = 'ffm-folder-selected';
export const FOCUS_SEARCH = 'ffm-focus-search';
