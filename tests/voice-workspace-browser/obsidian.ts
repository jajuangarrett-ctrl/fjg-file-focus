export * from '../mobile-browser/obsidian';
export const Platform = { isMobile: false, isDesktopApp: true };

type ElOptions = {cls?: string; text?: string; attr?: Record<string, string>; href?: string};
function create(this: HTMLElement, kind: string, options: ElOptions = {}) {
  const node = document.createElement(kind);
  if (options.cls) node.className = options.cls;
  if (options.text) node.textContent = options.text;
  if (options.href) node.setAttribute('href', options.href);
  for (const [name, value] of Object.entries(options.attr ?? {})) node.setAttribute(name, value);
  this.append(node);
  return node;
}
Object.assign(HTMLElement.prototype, {
  createEl: create,
  createDiv(this: HTMLElement, options?: ElOptions) { return create.call(this, 'div', options); },
  createSpan(this: HTMLElement, options?: ElOptions) { return create.call(this, 'span', options); },
  empty(this: HTMLElement) { this.replaceChildren(); },
  addClass(this: HTMLElement, name: string) { this.classList.add(name); },
  removeClass(this: HTMLElement, name: string) { this.classList.remove(name); },
  setText(this: HTMLElement, text: string) { this.textContent = text; },
  appendText(this: HTMLElement, text: string) { this.append(text); },
});
export class ItemView {
  app: any;
  contentEl: HTMLElement;
  constructor(public leaf: any) {
    this.app = leaf.app;
    this.contentEl = leaf.body;
  }
}
export class Plugin {
  constructor(public app: any) {}
}
