export class TAbstractFile { path=''; name=''; parent:any=null; }
export class TFolder extends TAbstractFile { children:any[]=[]; isRoot(){return !this.parent;} }
export class TFile extends TAbstractFile { basename=''; extension='md'; stat={ctime:1,mtime:1,size:10}; }
export const Platform={isMobile:true,isTablet:true,isPhone:false,isIosApp:true};
export class Notice { constructor(message:any){(window as any).notices.push(String(message));} }
export class Component {load(){} unload(){}}
export class Modal {app:any;contentEl=document.createElement('div');titleEl:any=document.createElement('div');constructor(app:any){this.app=app;}open(){(window as any).modals.push(this.constructor.name);}close(){}}
export class FuzzySuggestModal extends Modal {}
export class PluginSettingTab {}
export class Setting {}
export class Plugin {}
export class ItemView {}
export class Menu {
 items:any[]=[];
 addItem(fn:any){const item:any={setTitle(t:any){this.title=t;return this;},setIcon(){return this;},setDisabled(d:any){this.disabled=d;return this;},setChecked(){return this;},onClick(fn:any){this.run=fn;return this;}};fn(item);this.items.push(item);return this;}
 addSeparator(){return this;}
 showAtPosition(position:any){(window as any).lastMenu=this.items;(window as any).menuPosition=position;}
}
export const Keymap={isModEvent:(event:any)=>event?.ctrlKey||event?.metaKey};
export const MarkdownRenderer={render:async()=>{}};
export const requestUrl=async()=>{throw new Error('Network disabled in fixture');};
export const addIcon=()=>{};
export const normalizePath=(path:string)=>path.replace(/\/+/g,'/').replace(/^\//,'');
