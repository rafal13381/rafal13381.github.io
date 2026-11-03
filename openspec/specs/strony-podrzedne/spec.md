# strony-podrzedne Specification

## Purpose
TBD - created by archiving change redesign-strony-hallmark. Update Purpose after archive.
## Requirements
### Requirement: Gry w nowym systemie bez zmiany logiki
`kliker.html` i `autostrada.html` SHALL używać tokenów Almanac dla ramy, przycisków, sklepu i HUD. HUD MUST być pasmem tuszu (`--color-ink`) z liczbami w IBM Plex Mono tabular. Pliki `js/script2.js`, `js/autostrada.js` i `js/scena3d.js` MUST NOT zmieniać logiki. Klasy i `id`, których szukają skrypty, MUST zostać zachowane.

#### Scenario: Gra działa po redesignie
- **WHEN** gracz uruchomi Autostradę, przejedzie do stacji, zatankuje i kupi auto w garażu
- **THEN** wszystko działa jak przed redesignem, a `sloplint --kept` nie zgłasza brakujących selektorów

#### Scenario: Komunikat HUD bez JS
- **WHEN** strona gry jest wczytana bez wykonania skryptów
- **THEN** żaden element treści nie jest ukryty przez `opacity: 0` czekające na skrypt

#### Scenario: Paski stanu przez tokeny
- **WHEN** paliwo spada poniżej progu
- **THEN** pasek zmienia kolor na `--color-warn` zadeklarowany w `tokens.css`, a nie na literał koloru

### Requirement: Rama katalogu stylów w nowym systemie
`style.html` (widoki `#katalog`, `#generator`, `#wizytowki`) SHALL używać tokenów Almanac dla nawigacji, filtrów, wyszukiwarki, przełączników, pól i przycisków narzędzi. Adresy z hashem i parametry `?s=`, `?g=`, `?t=` MUST działać bez zmian.

#### Scenario: Przełączanie widoków
- **WHEN** użytkownik przejdzie na `style.html#generator`
- **THEN** pokazuje się generator, a jego panel sterowania używa tokenów Almanac

### Requirement: Izolacja podglądów stylów
Próbki `.pk`, wizytówki `.wz`, `style/stylownik.html` i `style/stylownik-pro.html` SHALL wyglądać identycznie jak przed redesignem dla każdego stylu, bo pokazują style z katalogu, a nie wygląd strony. Tokeny Almanac MUST NOT przeciekać do wnętrza podglądu.

#### Scenario: Porównanie podglądu
- **WHEN** porównane zostaną zrzuty `style/podglad.html?s=<id>` przed i po redesignie dla 20 stylów bazowych
- **THEN** obszar podglądu jest wizualnie taki sam, a różni się tylko rama wokół niego

#### Scenario: Eksport stylu
- **WHEN** użytkownik wyeksportuje styl z generatora do .css i .md
- **THEN** pliki mają tę samą zawartość co przed redesignem

### Requirement: Polityka prywatności jako długi dokument
`prywatnosc.html` SHALL być złożona jako długi dokument w Newsreader z nagłówkami Hanken Grotesk i miarą tekstu 60–75 znaków. Tekst polityki MUST NOT być zmieniony.

#### Scenario: Treść bez zmian
- **WHEN** porównany zostanie tekst `prywatnosc.html` przed i po redesignie (bez znaczników)
- **THEN** treść jest identyczna

