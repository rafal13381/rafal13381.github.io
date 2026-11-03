# Selektory czytane przez skrypty: nie zmieniać nazw ani nie usuwać

Źródło: grep `getElementById` / `querySelector` / `classList` / `className` w `js/` (2026-11-03) + `.hallmark/before.json`.

## Wszystkie strony
- `#themeToggle` (theme.js), `[data-consent-open]`, `link[data-consent="fonts"]`, `.cc`, `.cc-row`, `.cc-yes`, `.cc-no`, `cc-style` (consent.js), `.toast` + `show` (ui.js)

## index.html
- `#czas`, `#data` (script.js)

## kliker.html (script2.js)
- `#score #multiplier #autoStat #autoState #taxAmount #taxCountdown #taxBar #clickButton #startButton #resetButton #multiplierUpgrade #multiplierCost #autoClickerUpgrade #autoClickerCost #toast`
- klasy stanu: `on`, `pressed`, `danger`, `show`

## autostrada.html (autostrada.js, scena3d.js)
- `#roadWrap #road #hCoins #hSpeed #hFuelBar #hDmgBar #hTask #mini #prompt #msg #overlay #ovTitle #ovText #startBtn #pauseBtn #sCoins #sFuel #sDmg #sKm #sJobs #jobLabel #jobText #jobBtn #garage #maps #resetBtn`
- `[data-ctrl]`, klasy: `is-down`, `is-low`, `hud-msg`, `show`, `upgrade`, `swatch-car`, `price`, `row-ico`, `row-text`, `row-title`, `row-sub`, `btn`, `btn-sm`

## style.html (script3.js, generator.js, wizytowki-widok.js)
- `#q #styles #count #totalCount #activeCount #empty #facets #filtersBox #clearFilters [data-clear]`
- `#tabKatalog #tabGenerator #tabWizytowki #viewKatalog #viewGenerator #viewWizytowki`, `is-empty`
- `[data-download]`, `.field`, `is-on`, `is-swapping`

## style/podglad.html (podglad.js)
- `#back #backLabel #pName #pTagline #pMeta #pMode #pPrev #pNext #pPos #pPager #pPalette #pProbka #pStylownik #pWz #pCss #pCssName #pMdName #pCode #pCodePanel #pCodeTab #pCopy #pCopyCode #pDev #pDevBox #pDevDesc #pDevPanel #pDevState #pDownloadAll #pLink #pMissing`
- `.preview-top`, `.preview-details`, `[data-download]`, `is-on`

## style/wizytowka.html (wizytowka.js)
- `#dBack #dMode #dName #dNext #dPrev #dTemplate #site`

## Podglądy (izolowane, nie restylować)
- wszystko z prefiksem `.pk*` (probka.js, probka.css) i `.wz*` / `#wz-*` (wizytowki.js, wizytowki.css), `is-3d`, `has-bg3d`, `has-item3d`, `has-scene`, `is-grabbing` (scena3d.js)
