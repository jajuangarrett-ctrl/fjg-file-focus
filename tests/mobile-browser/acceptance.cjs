const {chromium}=require('playwright-core');
const fs=require('fs');const assert=require('assert/strict');
(async()=>{
const browser=await chromium.launch({executablePath:process.env.DUO_BROWSER_BIN || '/Volumes/Extreme SSD/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const context=await browser.newContext({viewport:{width:1100,height:850},hasTouch:true});
const page=await context.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));
// Desktop is invariant under the new flag; mobile opt-out retains the original view.
await page.goto('http://127.0.0.1:8848/tests/mobile-browser/index.html?platform=desktop&optimized=off');await page.waitForTimeout(250);
const desktopBefore=await page.locator('#mount').innerHTML();
await page.evaluate(()=>window.fixture.setSetting('mobileOptimizedLayout',true));await page.waitForTimeout(150);
assert.equal(await page.locator('#mount').innerHTML(),desktopBefore);assert.equal(await page.locator('.ffm-navigator').count(),0);
assert.equal(await page.locator('#panel').evaluate(el=>getComputedStyle(el).paddingLeft),'12px');
await page.goto('http://127.0.0.1:8848/tests/mobile-browser/index.html?optimized=off');await page.waitForTimeout(150);
assert.equal(await page.locator('.ffm-navigator').count(),0);assert.ok(await page.getByRole('button',{name:'Open Folder Navigator',exact:true}).isVisible());
const results=[];
async function size(w,h,top){await page.evaluate(({w,h,top})=>{const p=document.getElementById('panel');p.style.width=w+'px';p.style.height=h+'px';p.style.paddingTop=top+'px';},{w,h,top});await page.waitForTimeout(150);}
async function action(title){await page.getByRole('button',{name:'More actions',exact:true}).click();await page.evaluate(title=>{const item=window.lastMenu.find(item=>item.title===title);if(!item)throw Error('Missing action: '+title);return item.run(new MouseEvent('click',{clientX:230,clientY:25}));},title);await page.waitForTimeout(150);}
for(const [name,w,h,top,expected,minRows] of [['outer-drawer',264,403,4,'drilldown',5],['inner-drawer',390,448,4,'drilldown',8],['outer-tab',382,567,12,'drilldown',5],['inner-tab',867,558,12,'columns',8]]){
await page.goto('http://127.0.0.1:8848/tests/mobile-browser/index.html');await size(w,h,top);
await page.locator('.oz-folder-block').filter({hasText:'Projects'}).click();await page.waitForTimeout(200);
const result=await page.evaluate(()=>{
const nav=document.querySelector('.ffm-navigator'),pane=document.querySelector('.ffm-file-column.ffm-pane')||document.querySelector('.ffm-main-scroll'),toolbar=document.querySelector('.ffm-toolbar');const pr=pane.getBoundingClientRect(),tr=toolbar.getBoundingClientRect();
const visible=[...document.querySelectorAll('.oz-nav-file')].filter(row=>{const r=row.getBoundingClientRect();return r.top>=Math.max(pr.top,tr.bottom)-.5&&r.bottom<=pr.bottom+.5;});
return {layout:nav.dataset.layout,visibleRows:visible.length,renderedRows:document.querySelectorAll('.oz-nav-file').length,pane:{width:pr.width,height:pr.height},toolbarHeight:tr.height,buttons:[...toolbar.querySelectorAll('button')].map(button=>{const r=button.getBoundingClientRect();return {label:button.getAttribute('aria-label'),width:r.width,height:r.height,top:r.top,right:r.right};}),horizontalOverflow:nav.scrollWidth>nav.clientWidth};
});
console.log(name,JSON.stringify(result));assert.equal(result.layout,expected);assert.ok(result.visibleRows>=minRows,`${name}: ${result.visibleRows} < ${minRows}`);assert.equal(result.toolbarHeight,44);assert.equal(result.buttons.length,6);assert.ok(result.buttons.every(b=>b.width>=44&&b.height>=44&&b.top===result.buttons[0].top));assert.ok(result.renderedRows<35);assert.equal(result.horizontalOverflow,false);
await page.locator('#panel').screenshot({path:`tests/mobile-browser/${name}.png`});results.push({name,width:w,height:h,...result});
}
// Root stays folders-only; explicit root-files action excludes descendants.
await action('Jump to vault root');
assert.equal(await page.locator('.ffm-file-column').isVisible(),false);
await action('Show vault-root files');
assert.ok(await page.getByRole('button',{name:'Open Root note',exact:true}).isVisible());
assert.equal(await page.getByRole('button',{name:'Open Note 0000',exact:true}).count(),0);
await action('Hide vault-root files');assert.equal(await page.locator('.ffm-file-column').isVisible(),false);
await page.locator('.oz-folder-block').filter({hasText:'Projects'}).click();await page.waitForTimeout(200);
assert.equal(await page.getByRole('button',{name:'Open __init__',exact:true}).count(),0);
assert.equal(await page.getByRole('button',{name:'Open __init__.cpython-314',exact:true}).count(),0);
assert.ok(await page.getByRole('button',{name:'Open Child note',exact:true}).isVisible());
// Same mounted navigator survives switching between layouts with a live search.
await page.getByRole('button',{name:'Search',exact:true}).click();await page.getByRole('searchbox',{name:'Search files by name or tag'}).fill('Note 002');await page.waitForTimeout(100);
for(const width of [559,560,561,264,867]){await size(width,558,12);assert.equal(await page.locator('.ffm-navigator').getAttribute('data-layout'),width>=560?'columns':'drilldown');assert.equal(await page.getByRole('searchbox',{name:'Search files by name or tag'}).inputValue(),'Note 002');}
await page.getByRole('button',{name:'Search',exact:true}).click();
// Expand/collapse retained, even in narrow mode. Reveal item follows setting.
await size(390,448,4);await action('Browse subfolders');await action('Expand all folders');await action('Collapse all folders');
await page.getByRole('button',{name:'More actions',exact:true}).click();let menu=await page.evaluate(()=>window.lastMenu.map(item=>item.title));assert.ok(!menu.includes('Reveal Active File'));assert.ok(menu.includes('Open Folder Navigator'));assert.ok(menu.includes('New Folder'));
await page.evaluate(()=>window.fixture.setSetting('revealActiveFileButton',true));await page.waitForTimeout(60);await page.getByRole('button',{name:'More actions',exact:true}).click();assert.ok(await page.evaluate(()=>window.lastMenu.some(item=>item.title==='Reveal Active File')));
// Missing companion reports a notice rather than silently doing nothing.
await action('Open Omnisearch');assert.ok((await page.evaluate(()=>window.notices)).some(n=>n.includes('not available')));
// Fixed header setting actually changes scroll behavior.
await action('Jump to vault root');await page.evaluate(()=>window.fixture.setSetting('fixedHeaderInFileList',false));await page.waitForTimeout(100);await page.locator('.oz-folder-block').filter({hasText:'Projects'}).click();await page.waitForTimeout(150);assert.ok((await page.locator('.ffm-toolbar').boundingBox()).y<0);
await page.evaluate(()=>window.fixture.setSetting('fixedHeaderInFileList',true));await page.waitForTimeout(100);assert.ok((await page.locator('.ffm-toolbar').boundingBox()).y>=0);
// Touch long press gives a menu, cancels the subsequent opening click, and preserves pin/preview/move.
const row=page.locator('.oz-nav-file').first();await row.evaluate(el=>{const r=el.getBoundingClientRect();const touch=new Touch({identifier:1,target:el,clientX:r.x+30,clientY:r.y+20});el.dispatchEvent(new TouchEvent('touchstart',{bubbles:true,touches:[touch]}));});await page.waitForTimeout(550);
menu=await page.evaluate(()=>window.lastMenu.map(item=>item.title));for(const label of ['Preview','Pin to Top','Rename','Delete','Open in a new tab','Open to right','Make a copy','Move file to...'])assert.ok(menu.includes(label),label);
await row.evaluate(el=>{el.dispatchEvent(new TouchEvent('touchend',{bubbles:true,touches:[]}));el.dispatchEvent(new MouseEvent('click',{bubbles:true}));});assert.equal(await page.evaluate(()=>window.opened.length),0);
// Bookmarks and recent modes use primary controls and Back returns to the folder.
await page.getByRole('button',{name:'Recent',exact:true}).click();assert.equal(await page.locator('.fjg-focus-panel__row').count(),1);await page.getByRole('button',{name:'Bookmarks',exact:true}).click();await page.getByRole('button',{name:'Group',exact:false}).click();assert.ok((await page.locator('.fjg-focus-panel').innerText()).includes('Note 0000'));await page.locator('.ffm-back').click();assert.equal(await page.locator('.fjg-focus-panel').count(),0);
// Pointer capture divider and keyboard clamp.
await size(867,558,12);const divider=page.getByRole('separator');const box=await divider.boundingBox();assert.ok(box.width>=44);await page.mouse.move(box.x+22,box.y+40);await page.mouse.down();await page.mouse.move(500,box.y+40);await page.mouse.up();assert.equal(Number(await divider.getAttribute('aria-valuenow')),55);await divider.focus();await page.keyboard.press('ArrowLeft');
// The user's familiar Folder Navigator can occupy the primary shortcut slot.
await page.evaluate(()=>window.fixture.setSetting('mobileToolbarShortcut','folder-navigator'));await page.waitForTimeout(100);
assert.ok(await page.locator('.ffm-toolbar').getByRole('button',{name:'Open Folder Navigator',exact:true}).isVisible());
await page.locator('.ffm-toolbar').getByRole('button',{name:'Open Folder Navigator',exact:true}).click();
assert.ok((await page.evaluate(()=>window.notices)).some(n=>n.includes('Note Navigator Toolbar')));
await action('Recent Notes');assert.equal(await page.locator('.fjg-focus-panel').count(),1);await page.locator('.ffm-back').click();
// Reveal locates an off-screen virtual row, and a fold preserves that selected file.
await page.evaluate(()=>window.fixture.reveal('Projects/Note 2999.md'));await page.waitForTimeout(350);
console.log('reveal-debug',errors,await page.evaluate(()=>({scroll:document.querySelector('.ffm-file-column')?.scrollTop,rows:[...document.querySelectorAll('.oz-nav-file')].map(e=>e.textContent),notices:window.notices})));assert.ok(await page.getByRole('button',{name:'Open Note 2999',exact:true}).isVisible());
const revealed=await page.getByRole('button',{name:'Open Note 2999',exact:true}).boundingBox();assert.ok(revealed.y>=12&&revealed.y<524);
// Explicit Reveal still exposes a root note through the root-files fallback.
await page.evaluate(()=>window.fixture.reveal('Root note.md'));await page.waitForTimeout(350);
assert.ok(await page.getByRole('button',{name:'Open Root note',exact:true}).isVisible());
// The toolbar remains reachable below its six-target minimum width through horizontal scrolling.
await size(250,403,4);await page.locator('.ffm-toolbar').evaluate(el=>el.scrollLeft=el.scrollWidth);await page.getByRole('button',{name:'More actions',exact:true}).click();
assert.ok(await page.evaluate(()=>window.lastMenu.some(item=>item.title==='Expand all folders')));
assert.deepEqual(errors,[]);
const report={generatedAt:new Date().toISOString(),fixture:'Actual React components, synthetic 3001-note folder, Chromium. Not physical Obsidian acceptance.',measurements:results,checks:['four panel dimensions','six 44px toolbar targets on one row','minimum file rows','bounded rendering','559/560/561 switch','query survives folds','expand/collapse','reveal setting','approved removal','missing companion notice','fixed header on/off','touch long press / ghost-click suppression','file menu retention','recent/bookmarks/back','pointer and keyboard divider','reveal off-screen virtual file','250px toolbar fallback','root folders only and direct-root files fallback','case/dot normalized type exclusions','original Folder Navigator shortcut retained','desktop exact DOM equality with toggle on/off','mobile opt-out','customizable mobile quick shortcut'],errors};fs.writeFileSync('tests/mobile-browser/results.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});
