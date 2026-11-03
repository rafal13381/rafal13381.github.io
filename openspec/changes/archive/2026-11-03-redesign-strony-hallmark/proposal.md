## Why

Strona wygląda na wygenerowaną: szklane panele z rozmyciem na gradientowej mgle, siatka jednakowych kart, pigułki zamiast etykiet, systemowy krój jako display, animacja „materializacji” każdego panelu, 39-wyrazowy akapit w hero i dwa wypełnione przyciski obok siebie. Linter Hallmark na `index.html` + `css/style.css` zgłasza 43 FAIL, 145 REFLEX i 12 WARN (`.hallmark/before.txt`). Dla CV, które ma przekonać rekrutera, to sygnał „szablon”, a nie „zrobione przez programistę”.

## What Changes

- **Nowy system wizualny** w miejsce Deep Glass / Vision Glass: temat Hallmark **Almanac** (chłodny łupkowy papier, granatowo-czarny tusz, nagłówki Hanken Grotesk, tekst Newsreader, liczby w IBM Plex Mono, dwie grubości linii, ostre narożniki, jeden głęboki magentowy akcent poniżej 5% ekranu). Bez szkła, cieni, gradientów i pigułek. **BREAKING** dla wyglądu: znikają `backdrop-filter`, `--bg-art`, `.materialize`, promienie 28px.
- **Pełny redesign strony CV** (`index.html`): nowa kompozycja (hero typu Banner, kształt Index-First zamiast siatki kart), skrócony hero (nagłówek, jedno zdanie, jedna akcja), doświadczenie, edukacja i technologie jako tabele w stylu rejestru, gry i katalog stylów pokazane zrzutami ekranu prawdziwych stron.
- **Wspólna nawigacja i stopka** na wszystkich stronach w nowym systemie; przełącznik motywu (system/jasny/ciemny) i ustawienia prywatności zostają z tym samym okablowaniem.
- **Strony podrzędne** (`kliker.html`, `autostrada.html`, `style.html`, `prywatnosc.html`, `style/podglad.html`, `style/wizytowka.html`) przechodzą na nowy system w swojej „ramie” (chrome, nagłówki, przyciski, HUD gier). Podglądy stylów z katalogu (`.pk`, `.wz`, stylowniki) **nie** są restylowane: pokazują cudze style i muszą wyglądać jak te style.
- **Higiena Floor** w całym CSS: wszystkie kolory i kroje przez tokeny, `overflow-x: clip` na `html` i `body`, `:focus-visible` na każdej kontrolce, fallback `prefers-reduced-motion`, treść widoczna bez JS, brak myślników, kapitalików, kropek statusu i stanu disabled tylko przez opacity.
- Pieczęć Hallmark w pierwszych liniach CSS i wpis w `.hallmark/log.json`.

Nie zmienia się: treść CV (fakty, nazwy, daty, certyfikaty), wszystkie linki, `id`, skrypty i selektory, z których korzystają skrypty, logika gier, silnik stylów (`tokens.js`, `styles.js`), tekst polityki prywatności.

## Capabilities

### New Capabilities
- `system-wizualny`: tokeny Almanac (jasny i ciemny), kroje, skala, linie, kontrolki w ośmiu stanach, reguły Floor obowiązujące w każdym arkuszu strony.
- `strona-cv`: kompozycja i treść `index.html` (hero, sekcje, signature, zrzuty prac, kontakt) oraz zachowanie całej treści i okablowania.
- `rama-strony`: wspólna nawigacja, stopka, przełącznik motywu, baner zgody i ładowanie fontów na wszystkich stronach.
- `strony-podrzedne`: przejście gier, katalogu stylów i polityki prywatności na nowy system z izolacją podglądów stylów.

### Modified Capabilities
<!-- brak: openspec/specs/ jest pusty -->

## Impact

- **CSS:** `css/style.css` (przepisanie warstwy systemu, czyszczenie literałów), nowe `css/tokens.css` i `css/base.css` (scaffold Hallmark); `css/wizytowki-ramka.css` (ramka podglądu). `css/probka.css` i `css/wizytowki.css` tylko w zakresie, w jakim dziedziczą tokeny strony, bez zmiany wyglądu podglądów.
- **HTML:** wszystkie strony w katalogu głównym i `style/podglad.html`, `style/wizytowka.html` (nawigacja, stopka, link do fontów); `index.html` przebudowany.
- **JS:** bez zmian logiki. `js/script.js` (zegar) i `js/theme.js` zachowują swoje `id`; ewentualnie dochodzi tylko klasa `.js` na `<html>` dla stanów ukrytych do czasu uruchomienia skryptu.
- **Fonty:** Inter zastępują Hanken Grotesk, Newsreader i IBM Plex Mono (OFL). Sposób ładowania jest rozstrzygnięty w design.md (self-hosting a zgoda na Google Fonts).
- **Nowe pliki graficzne:** zrzuty ekranu Kliker, Autostrada i katalogu stylów w `img/`.
- **Narzędzia:** `node .claude/skills/hallmark/scripts/sloplint.mjs` jako bramka jakości; render wymaga `puppeteer-core` (obecnie brak).
