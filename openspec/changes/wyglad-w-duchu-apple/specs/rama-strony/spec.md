## MODIFIED Requirements

### Requirement: Wspólna nawigacja
Każda strona serwisu (katalog główny i `style/podglad.html`) SHALL mieć tę samą nawigację: cienki, przyklejony pasek o wysokości 48px ze znakiem słownym `rafal13381` prowadzącym do `index.html`, linkami Start, Kliker, Autostrada, Style, akcją kontaktową i przełącznikiem motywu. Pasek MUST być półprzezroczysty z rozmyciem treści pod spodem, z pełnym tłem przy `prefers-reduced-transparency: reduce` i `prefers-contrast: more`. Aktywna strona MUST być oznaczona `aria-current="page"` i wyróżniona kolorem tuszu i wagą, a nie pigułką.

#### Scenario: Oznaczenie bieżącej strony
- **WHEN** odwiedzający jest na `kliker.html`
- **THEN** link Kliker ma `aria-current="page"` i jest w pełnym tuszu, a pozostałe linki w kolorze drugorzędnym

#### Scenario: Treść pod paskiem
- **WHEN** odwiedzający przewinie stronę
- **THEN** pasek zostaje u góry, a treść przewija się pod nim, rozmyta

#### Scenario: Ograniczona przezroczystość
- **WHEN** system ma włączone `prefers-reduced-transparency: reduce`
- **THEN** pasek ma pełne tło papieru i nie używa `backdrop-filter`

#### Scenario: Wąski ekran
- **WHEN** szerokość okna wynosi 375px
- **THEN** nawigacja mieści się bez poziomego przewijania strony, a wszystkie linki pozostają osiągalne

### Requirement: Stopka w kolumnach indeksu
Stopka SHALL zawierać kolumny: strony serwisu, profile (GitHub i kod strony), prywatność (link do `prywatnosc.html` i przycisk `[data-consent-open]`) oraz na `index.html` lokalny czas w Białymstoku z cyframi tabelarycznymi, wyświetlany przez istniejące elementy `#czas` i `#data` z `js/script.js`. Stopka MUST być złożona drobnym krojem (co najmniej 13px) w kolorze drugorzędnym na jasnym pasie i MUST NOT łączyć elementów kropką środkową.

#### Scenario: Zegar w stopce
- **WHEN** `js/script.js` zaktualizuje `#czas`
- **THEN** godzina pojawia się w stopce `index.html`, a bez JS w miejscu godziny nie ma pustego ani mylącego tekstu

#### Scenario: Ustawienia prywatności
- **WHEN** użytkownik kliknie „Ustawienia prywatności” w stopce
- **THEN** otwiera się baner zgody tak jak przed redesignem

### Requirement: Baner zgody w nowym systemie
Baner tworzony przez `js/consent.js` SHALL korzystać z tokenów nowego systemu (kafel z promieniem, pigułki: główna w tuszu, druga konturowa) bez zmiany treści i logiki zgody.

#### Scenario: Pierwsza wizyta
- **WHEN** odwiedzający otwiera stronę po raz pierwszy
- **THEN** baner ma ten sam tekst i te same wybory co przed redesignem, w kolorach i kroju nowego systemu

### Requirement: Jedna szerokość kontenera
Wszystkie strony SHALL używać jednej maksymalnej szerokości kontenera treści (1080px), wyśrodkowanego, z rosnącymi marginesami przy szerokich ekranach, a pasy tła MAY sięgać pełnej szerokości okna. Wyjątkiem MOGĄ być płótno gry i podgląd stylu na pełny ekran, oznaczone w pieczęci.

#### Scenario: Ekran 1920px
- **WHEN** okno ma 1920px szerokości
- **THEN** treść nie rozciąga się ponad 1080px, pasy tła sięgają krawędzi okna, a linter nie zgłasza F15 dla szerokości kontenera
