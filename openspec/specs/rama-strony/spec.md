# rama-strony Specification

## Purpose
TBD - created by archiving change redesign-strony-hallmark. Update Purpose after archive.
## Requirements
### Requirement: Wspólna nawigacja
Każda strona serwisu (katalog główny i `style/podglad.html`, `style/wizytowka.html`) SHALL mieć tę samą nawigację: znak słowny `rafal13381` prowadzący do `index.html`, linki Start, Kliker, Autostrada, Style, akcję kontaktową i przełącznik motywu. Aktywna strona MUST być oznaczona `aria-current="page"` i wyróżniona linią, nie pigułką.

#### Scenario: Oznaczenie bieżącej strony
- **WHEN** odwiedzający jest na `kliker.html`
- **THEN** link Kliker ma `aria-current="page"` i podkreślenie 2px w kolorze tuszu

#### Scenario: Wąski ekran
- **WHEN** szerokość okna wynosi 375px
- **THEN** nawigacja mieści się bez poziomego przewijania strony, a wszystkie linki pozostają osiągalne

### Requirement: Przełącznik motywu bez zmian okablowania
Przycisk `#themeToggle` SHALL zachować `id`, typ i działanie `js/theme.js` (cykl system, jasny, ciemny). Ikona MUST mieć rozmiar tekstu w `currentColor`, bez kolorowego kółka.

#### Scenario: Zmiana motywu
- **WHEN** użytkownik kliknie przełącznik
- **THEN** `data-theme` na `<html>` zmienia się tak jak przed redesignem, a strona przełącza tokeny bez przeładowania

### Requirement: Stopka w kolumnach indeksu
Stopka SHALL zawierać kolumny: strony serwisu, profile (GitHub), prywatność (link do `prywatnosc.html` i przycisk `[data-consent-open]`) oraz lokalny czas w Białymstoku w IBM Plex Mono, wyświetlany przez istniejące elementy `#czas` i `#data` z `js/script.js`. Stopka MUST NOT łączyć elementów kropką środkową.

#### Scenario: Zegar przeniesiony
- **WHEN** `js/script.js` zaktualizuje `#czas`
- **THEN** godzina pojawia się w stopce `index.html`, a bez JS w miejscu godziny nie ma pustego ani mylącego tekstu

#### Scenario: Ustawienia prywatności
- **WHEN** użytkownik kliknie „Ustawienia prywatności” w stopce
- **THEN** otwiera się baner zgody tak jak przed redesignem

### Requirement: Baner zgody w nowym systemie
Baner tworzony przez `js/consent.js` SHALL korzystać z tokenów Almanac (arkusz, linia 2px, przyciski systemu) bez zmiany treści i logiki zgody.

#### Scenario: Pierwsza wizyta
- **WHEN** odwiedzający otwiera stronę po raz pierwszy
- **THEN** baner ma ten sam tekst i te same wybory co przed redesignem, w kolorach i krojach nowego systemu

### Requirement: Jedna szerokość kontenera
Wszystkie strony SHALL używać jednej maksymalnej szerokości kontenera, wyśrodkowanego, z rosnącymi marginesami przy szerokich ekranach. Wyjątkiem MOGĄ być płótno gry i podgląd stylu na pełny ekran, oznaczone w pieczęci.

#### Scenario: Ekran 1920px
- **WHEN** okno ma 1920px szerokości
- **THEN** treść nie rozciąga się ponad zadeklarowaną szerokość, a linter nie zgłasza F15

