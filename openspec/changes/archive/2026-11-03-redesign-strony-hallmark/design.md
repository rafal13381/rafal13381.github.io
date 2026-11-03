## Context

- Statyczna strona na GitHub Pages: czysty HTML, CSS i JS bez bundlera. Jeden wspólny arkusz `css/style.css` (1363 linii) obsługuje CV, obie gry, katalog stylów i politykę prywatności.
- Obecny wygląd to „Deep Glass” (Vision Glass z `zamysl.md`): półprzezroczyste panele z `backdrop-filter: blur(40px)`, trzy radialne gradienty w tle, promień 28px, pigułki, systemowy krój SF/Inter, animacja `.materialize` na każdym panelu.
- Stan przed zmianą (linter Hallmark, `.hallmark/before.txt`): 43 FAIL (32 literały kolorów poza tokenami, brak `overflow-x: clip`, myślnik w treści, kapitaliki w etykietach, disabled tylko przez opacity, ukryty HUD bez JS), 145 REFLEX (systemowy krój jako display, czysta biel, odstępy spoza skali 4px), 12 WARN (szkło, 39 wyrazów w hero, dwa wypełnione przyciski, pigułki na nie-kontrolkach, dwie szerokości kontenera).
- Zapis okablowania: `.hallmark/before.json` (12 linków, 5 hooków skryptów). Render nie został wykonany, bo brakuje `puppeteer-core`.
- Fonty Google ładują się dopiero po zgodzie (`js/consent.js`, `data-consent="fonts"`), więc bez zgody strona i tak spada do krojów systemowych.
- Katalog stylów (`style.html`, `style/*`) renderuje 120 **cudzych** stylów na próbkach `.pk` i wizytówkach `.wz`. Te podglądy są treścią, nie wyglądem strony.

## Goals / Non-Goals

**Goals:**
- Strona, która nie wygląda na szablon: jeden spójny materiał (rejestr i tabela), typografia z charakterem, zero szkła, gradientów i zbędnego ruchu.
- Floor Hallmark spełniony na każdej stronie: 0 FAIL w `sloplint`, każdy REFLEX naprawiony albo uchylony z powodem w pieczęci.
- CV czytelne dla rekrutera w 10 sekund: kto, co umie, gdzie pracował, jak się skontaktować.
- Pełne zachowanie treści i okablowania (`sloplint --kept` bez `FAIL kept`).

**Non-Goals:**
- Zmiana treści CV, dopisywanie liczb, opinii, logotypów czy osiągnięć, których nie ma.
- Zmiana logiki gier, silnika stylów (`tokens.js`, `styles.js`, `generator.js`) i treści polityki prywatności.
- Restyling podglądów stylów (`.pk`, `.wz`, `style/stylownik*.html`): muszą dalej wyglądać jak styl, który pokazują.
- Przejście na framework lub bundler.

## Decisions

### Picks (Hallmark v2.0.0)

- **Redesign** · full · 7 stron (/, kliker, autostrada, style, prywatnosc, style/podglad, style/wizytowka)
- **Before** · Floor 43 FAIL · Reflex 145 · szklane karty na gradientowej mgle w siatce bento; treść CV jest rzetelna i zostaje
- **Keeps** · każdy link, `id`, hook skryptu, przełącznik motywu, baner zgody · cała treść CV · podglądy stylów w katalogu
- **Files** · edit: wszystkie `*.html` w katalogu głównym, `style/podglad.html`, `style/wizytowka.html`, `css/style.css`, `css/wizytowki-ramka.css` · create: `css/tokens.css`, `css/base.css`, `fonts/*`, `img/prace/*` · delete: none
- **Theme** · Almanac, rozdanie 2/3, seed `portfolio-odego-programisty-full-2e74·af81bb37·2026-11-02·r0` (łupkowy papier, granatowa czerń, Hanken Grotesk nad Newsreader, cyfry w Plex Mono, jedna magenta). Odrzucone: Brutal (krzykliwe kapitaliki i żółć kłócą się z „dorosłym, biznesowym” tonem z `zmiana_opisu.md`), Specimen (Bodoni na kremowym papierze to strona kroju, nie CV programisty)
- **Shape** · Index-First, zamiana z losowania `c72b0b` (Map / Diagram): treść to rejestr wpisów (staż, szkoła, certyfikaty, projekty), nie przestrzenny system. Z losowania zostają: hero Banner, nawigacja „banner nad chowającym się paskiem”, stopka w kolumnach indeksu, kontakt w nawigacji i na końcu
- **Chrome** · nav: znak słowny `rafal13381`, linki stron, kontakt (GitHub) i przełącznik motywu, cienka linia 2px pod spodem · footer: kolumny indeksu (Strony, Profile, Prywatność), pod nimi lokalny czas Białegostoku w mono (dawny panel „Czas”)
- **Hero** · Banner: nagłówek „Programista full stack” na pełną szerokość kontenera, jedno zdanie, jedna wypełniona akcja (GitHub) i link tekstowy do prac
- **Signature** · „Arkusz kompetencji”: tabela na arkuszu `--color-sheet`, w wierszach technologie, w kolumnach miejsca, gdzie były używane (Staż KNF, Aplikacje mobilne, Ta strona), z zaznaczeniem w komórce. Zbudowana wyłącznie z faktów już obecnych na stronie, bez lat doświadczenia i poziomów
- **Sections** · Hero · Arkusz kompetencji · Doświadczenie (rejestr wpisów z datami) · Prace (Style, Autostrada, Kliker: zrzuty + jeden otwarty jako case: Style) · Edukacja, osiągnięcia i certyfikaty (tabela) · Kontakt i profile · Footer
- **Material** · real: staż w UKNF, Angular/.NET/C#/Python/TS/JS, React Native i Swift, Technikum Infotech 2022–2027, finał OIT, INF.03/PECP/SOFTECH, szkolenie CSIRT KNF, 120 stylów, 21 widżetów, 16 branż, 5 map · pictures: zrzuty prawdziwych stron Kliker, Autostrada, Style robione `capture.mjs` · absent: zdjęcie autora, e-mail, LinkedIn, opinie, liczby klientów

### D1. Temat Almanac zamiast zachowania Vision Glass
Szkło z rozmyciem i radialne plamy koloru to jeden z najczęstszych znaków wyglądu generowanego przez AI (gate 29, 81). Almanac opiera autorytet na liniach i liczbach, co pasuje do CV jako dokumentu faktów oraz do stażu w instytucji finansowej. *Alternatywa:* zachować paletę Vision Glass jako markę i tylko stonować szkło (odrzucona przez użytkownika: „porzuć, nowy kierunek”).

### D2. Warstwy CSS: `tokens.css` → `base.css` → `style.css`
`theme.mjs scaffold almanac --redesign full --dealt "2/3, seed …"` tworzy `css/tokens.css` (tokeny tematu + wspólna skala) i `css/base.css` (to, co Floor już rozstrzyga: `overflow-x: clip`, focus, reduced-motion). `style.css` importuje je na samej górze i zawiera tylko komponenty. Każdy kolor i krój w `style.css` idzie przez `var(--…)`. *Alternatywa:* jeden plik (odrzucona: trudniej utrzymać zakaz literałów i dzielić tokeny z `probka.css`).

### D3. Tryb ciemny jako odwrócony rejestr
Przełącznik system/jasny/ciemny zostaje (okablowanie `theme.js`, `data-theme`). Ciemny wariant Almanac: papier `oklch(18% 0.02 245)`, tusz w kolorze arkusza, magenta podniesiona do L≈68% dla kontrastu, te same dwie grubości linii. Wartości dobrane według `references/dark-mode.md` i sprawdzone na kontrast WCAG AA. Tokeny jasne i ciemne w jednym bloku `:root` i `[data-theme="dark"]` + `prefers-color-scheme`.

### D4. Fonty hostowane lokalnie
Hanken Grotesk, Newsreader i IBM Plex Mono (licencja OFL) jako pliki `woff2` w `fonts/` z `@font-face` i `font-display: swap`. Wtedy każdy odwiedzający widzi właściwą typografię bez zgody i bez zapytania do Google. Kategoria „fonts” w `consent.js` przestaje być potrzebna, ale **mechanizm zgody zostaje nietknięty**, dopóki właściciel nie zdecyduje o tekście polityki (Open Questions). *Alternatywa:* zostawić Google Fonts za zgodą (odrzucona jako domyślna: bez zgody strona wraca do krojów systemowych, czyli do REFLEX 1).

### D5. Izolacja podglądów stylów
Komponenty ramy (nav, stopka, przyciski strony, panele narzędzi katalogu) używają tokenów `--color-*` Almanac. Podglądy `.pk` i `.wz` dostają tokeny wyłącznie od silnika stylów (`tokens.js`), w kontenerze, który resetuje dziedziczenie (`all: initial` nie, tylko jawne zmienne na elemencie podglądu, jak dziś). Sprawdzenie: podgląd każdego z 20 stylów bazowych wygląda tak samo przed i po zmianie (porównanie zrzutów).

### D6. Gry: HUD jako pasmo tuszu
HUD Autostrady i kontrolki Klikera przechodzą na tokeny: tło `--color-ink` z tekstem `--color-sheet`, liczby (prędkość, paliwo, monety, punkty) w Plex Mono tabular. Paski paliwa i uszkodzeń dostają tokeny `--color-ok`, `--color-warn`, `--color-bad`. Komunikat `.hud-msg` jest widoczny domyślnie, a stan ukryty działa tylko pod klasą `.js` (FAIL 62). Logika `autostrada.js` i `scena3d.js` bez zmian.

### D7. Ruch
Usunięte: `.materialize`, przejścia tła body, sprężyny. Zostają tylko zmiany stanu: podświetlenie wiersza-linku, pogrubienie podkreślenia linku, stany przycisków, wszystko przez `opacity`, `color`, `background-color` lub `transform`, nigdy `transition: all`. Pod `prefers-reduced-motion: reduce` przejścia trwają 0 s.

### D8. Treść: tylko zmiany wymuszone przez gate
Hero skrócony do jednego zdania (gate 58): „Aplikacje webowe w Angularze i .NET, mobilne w React Native i Swift.” Pełny opis przechodzi do sekcji Doświadczenie bez zmiany słów. Myślnik w „2022 – 2027” zamieniony na „2022–2027” w mono jako zakres liczb lub „od 2022 do 2027” (gate 19). „SOFTECH” i „HTML / CSS” zostają jako nazwy własne, ale nie w etykiecie 13px (gate 67): przechodzą do komórek tabeli w kroju body. Każda zmieniona linia trafia do raportu przed/po.

## Risks / Trade-offs

- [Wspólny `style.css` dla wszystkich stron: zmiana tokenów może zepsuć katalog stylów] → najpierw mapa selektorów, które czytają skrypty (`before.json`), potem zmiany strona po stronie, każda ze `sloplint --kept` i porównaniem zrzutów podglądów.
- [Brak `puppeteer-core`, więc linter nie renderuje] → zainstalować globalnie (`npm i -g puppeteer-core` + Chrome) przed sweepem albo uruchomić render na `--url` lokalnego serwera; bez renderu bramki J/R/J ocenia się ze zrzutów `capture.mjs`.
- [Mid-tone papier Almanac na słabych monitorach może wyglądać szaro] → kontrast tekstu sprawdzony narzędziem z `tokens.js` (WCAG 2.2), papier zostaje w granicach tematu (L 84%).
- [Zrzuty prac starzeją się przy zmianach gier] → pliki w `img/prace/` z datą w nazwie, slot opisany w README.
- [Brudne drzewo robocze (18 zmodyfikowanych plików, nieśledzona Autostrada)] → przed startem commit lub stash zrobiony przez właściciela, żeby redesign był jednym czytelnym diffem.

## Migration Plan

1. Właściciel commituje obecny stan (w tym Autostradę). Redesign idzie na gałęzi `redesign-hallmark`.
2. Scaffold, tokeny, fonty → rama (nav, stopka) → `index.html` (hero, przegląd hero) → pozostałe sekcje CV → gry → katalog stylów → prywatność.
3. Po każdej stronie: `sloplint --render --kept` i podgląd lokalny (`python3 -m http.server`).
4. Bump `?v=` w linkach CSS/JS, żeby GitHub Pages nie podawał starego arkusza z cache.
5. Merge do `main` = wdrożenie. Rollback: `git revert` commita merge.

## Open Questions

- **Kontakt:** strona nie podaje e-maila ani LinkedIn. Zadanie „hire” wymaga kontaktu w nawigacji i na końcu. Do tego czasu kontaktem jest GitHub. Podać adres?
- **Polityka prywatności przy fontach lokalnych:** czy usunąć z banera i z `prywatnosc.html` kategorię „Google Fonts”? Tekst polityki jest właściciela, więc redesign go nie zmienia bez decyzji.
- **Zdjęcie autora:** opcjonalny slot w hero. Bez zdjęcia hero jest czysto typograficzny i to też jest dobra wersja.
- **`old/`, `zamysl.md`, `zmiana_opisu.md`:** zostają w repo jako notatki, czy przenieść poza publikowaną stronę?
