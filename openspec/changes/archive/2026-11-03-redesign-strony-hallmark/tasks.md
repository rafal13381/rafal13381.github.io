## 1. Przygotowanie

- [x] 1.1 Właściciel commituje lub stashuje obecne zmiany (18 plików + Autostrada); utworzyć gałąź `redesign-hallmark`
- [x] 1.2 Rozstrzygnąć Open Questions z design.md (kontakt e-mail/LinkedIn, kategoria Google Fonts w polityce, zdjęcie, folder `old/`)
- [x] 1.3 Zainstalować `puppeteer-core` i Chrome dla renderu `sloplint`; ponownie zapisać stan przed: `sloplint.mjs index.html kliker.html autostrada.html style.html prywatnosc.html --genre editorial --render --before`
- [x] 1.4 Zrobić zrzuty referencyjne podglądów 20 stylów bazowych (`style/podglad.html?s=<id>`) do porównania izolacji
- [x] 1.5 Spisać selektory, klasy i `id` używane przez skrypty (`before.json` + grep `querySelector`/`getElementById` w `js/`) jako listę „nie ruszać”

## 2. System wizualny

- [x] 2.1 `theme.mjs scaffold almanac --redesign full --dealt "2/3, seed portfolio-odego-programisty-full-2e74·af81bb37·2026-11-02·r0"` → `css/tokens.css`, `css/base.css`
- [x] 2.2 Dopisać do `tokens.css` tryb ciemny (`[data-theme="dark"]` + `prefers-color-scheme`) według `references/dark-mode.md`; sprawdzić kontrast AA obu trybów
- [x] 2.3 Dodać tokeny stanów gry (`--color-ok`, `--color-warn`, `--color-bad`) i tokeny dla ramy podglądu
- [x] 2.4 Pobrać Hanken Grotesk (500, 600), Newsreader (400, 500, italic 400) i IBM Plex Mono (400, 500) jako `woff2` do `fonts/` z licencjami OFL; `@font-face` z `font-display: swap`
- [x] 2.5 Wpiąć `@import` tokenów i bazy na górze `css/style.css`; wstawić pieczęć Hallmark i linię krytyki w pierwszych liniach
- [x] 2.6 Usunąć warstwę Deep Glass ze `style.css`: `--bg-art`, `backdrop-filter`, `.materialize` i keyframes, cienie, promienie 28px, przejście tła `body`
- [x] 2.7 Przepisać kontrolki (przyciski, linki, pola, przełącznik, segment, chip→tekst) w ośmiu stanach; disabled przez wypełnienie, tusz i kursor
- [x] 2.8 Zamienić wszystkie 32 literały kolorów na tokeny i odstępy na skalę 4px; uruchomić `sloplint` na samym CSS do zera FAIL 48/7a/34/39a

## 3. Rama strony

- [x] 3.1 Nowa nawigacja (znak słowny, linki, kontakt, `#themeToggle` bez kolorowego kółka) w `index.html` i podmiana na wszystkich stronach
- [x] 3.2 Nowa stopka w kolumnach indeksu z przyciskiem `[data-consent-open]`; w `index.html` przenieść `#czas` i `#data` do stopki
- [x] 3.3 Zastąpić link Google Fonts (Inter) na wszystkich stronach według decyzji 1.2 (fonty lokalne; mechanizm zgody bez zmian)
- [x] 3.4 Ostylować baner zgody z `consent.js` tokenami Almanac bez zmiany tekstu i logiki
- [x] 3.5 Jedna szerokość kontenera dla wszystkich stron (usunąć 1080/1320); wyjątki oznaczyć w pieczęci

## 4. Strona CV: hero

- [x] 4.1 Hero Banner: „Programista full stack”, jedno zdanie (≤12 wyrazów), przycisk GitHub i link tekstowy „Prace”
- [x] 4.2 `sloplint.mjs index.html --render --stage hero`; naprawić FAIL
- [x] 4.3 Przegląd hero w świeżym kontekście (`gates.md` § 6) i wprowadzenie poprawek

## 5. Strona CV: sekcje

- [x] 5.1 Arkusz kompetencji: tabela technologie × (Staż KNF, Aplikacje mobilne, Ta strona) na `--color-sheet`, zbudowana tylko z faktów CV, z przewijaniem tabeli na telefonie
- [x] 5.2 Doświadczenie jako rejestr: staż w UKNF z pełnym opisem (w tym przeniesiony tekst z dawnego hero) i aplikacje mobilne
- [x] 5.3 Zrzuty `capture.mjs` dla Style, Autostrady i Klikera do `img/prace/`; sekcja Prace z Style otwartym jako case i linkami (katalog, generator, wizytówki, kod)
- [x] 5.4 Edukacja, osiągnięcia, certyfikaty i kompetencje jako tabela z datami w mono; „2022–2027” bez półpauzy ze spacjami
- [x] 5.5 Sekcja kontaktu i profili przed stopką (GitHub + dane z 1.2)
- [x] 5.6 Sprawdzić budżet słów i liczbę sekcji (6–9); zapisać raport zmienionych linii przed/po

## 6. Strony podrzędne

- [x] 6.1 Kliker: rama, przycisk kliknięcia, sklep i liczniki w tokenach i Plex Mono; gra działa bez zmian w `script2.js`
- [x] 6.2 Autostrada: HUD jako pasmo tuszu, paski przez tokeny stanów, `.hud-msg` widoczny bez JS (ukrycie pod `.js`), sklep i garaż w kontrolkach systemu; przetestować tankowanie, zlecenie i zakup auta
- [x] 6.3 `style.html`: filtry, wyszukiwarka, generator i widok wizytówek w tokenach Almanac; sprawdzić `#katalog`, `#generator`, `#wizytowki`
- [x] 6.4 `style/podglad.html` i `style/wizytowka.html` + `css/wizytowki-ramka.css`: tylko rama; porównać podglądy ze zrzutami z 1.4
- [x] 6.5 Sprawdzić, że eksport .css i .md z generatora daje identyczne pliki jak przed zmianą
- [x] 6.6 `prywatnosc.html` jako długi dokument (miara 60–75 znaków), tekst bez zmian (diff tekstu bez znaczników)

## 7. Sweep i oddanie

- [x] 7.1 `sloplint.mjs <wszystkie strony> --genre editorial --render --kept` do 0 FAIL i 0 `FAIL kept`; każdy REFLEX naprawiony albo uchylony w pieczęci z powodem
- [x] 7.2 Bramki J i R/J z `gates.md` § 5 na zrzutach; potwierdzić lub odrzucić każdy WARN
- [x] 7.3 Przegląd końcowy w świeżym kontekście z zrzutami before; wykonać jego werdykt (`recapture`, `rebuild`, `fix`, `ship`)
- [x] 7.4 Ręczny test: klawiatura (Tab przez każdą stronę), tryb jasny i ciemny, `prefers-reduced-motion`, 375px, 1280×800, 1920px, wyłączony JS
- [x] 7.5 Podbić `?v=` przy linkach CSS/JS; zaktualizować README (struktura `css/`, `fonts/`, `img/prace/`, opis wyglądu)
- [x] 7.6 Wpis do `.hallmark/log.json` (`mode: redesign`, `depth: full`, `scope: site`, pola draw) i raport oddania (Before/After/Kept/Changed/Yours, `.hallmark/compare.html`)
