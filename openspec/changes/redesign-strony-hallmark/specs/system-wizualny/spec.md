## ADDED Requirements

### Requirement: Tokeny jako jedyne źródło kolorów i krojów
Każdy kolor i każda rodzina krojów używane na stronie SHALL być zadeklarowane jako token w `css/tokens.css` (blok `:root` lub blok motywu). Arkusze `css/style.css`, `css/base.css` i `css/wizytowki-ramka.css` MUST NOT zawierać literałów kolorów ani `font-family` poza blokiem tokenów.

#### Scenario: Linter nie znajduje literałów
- **WHEN** uruchomiony zostanie `sloplint.mjs` na dowolnej stronie
- **THEN** raport nie zawiera żadnego wyniku gate 48 ani 7a

#### Scenario: Zmiana akcentu w jednym miejscu
- **WHEN** wartość `--color-accent` zostanie zmieniona w `tokens.css`
- **THEN** zmienia się kolor przycisku głównego, podkreśleń linków i zaznaczeń na wszystkich stronach bez edycji innych plików

### Requirement: Materiał Almanac
System SHALL używać tematu Almanac: papier `oklch(84% 0.012 245)`, tusz `oklch(16% 0.020 245)`, jeden akcent magenta `oklch(45% 0.180 350)` zajmujący poniżej 5% ekranu, nagłówki Hanken Grotesk 600, tekst Newsreader, liczby w IBM Plex Mono z `tabular-nums`. Powierzchnie MUST być wyznaczane liniami w dwóch grubościach (1px i 2px) i krokiem papieru, bez cieni, bez `backdrop-filter`, bez gradientów, z narożnikami 0 (do 2px na kontrolkach).

#### Scenario: Brak szkła i cieni
- **WHEN** przeszukane zostaną arkusze strony (bez podglądów stylów)
- **THEN** nie występują `backdrop-filter`, `radial-gradient`, `linear-gradient` w tle ani `box-shadow` inny niż pierścień focusu

#### Scenario: Liczby wyrównane
- **WHEN** na stronie pojawia się kolumna liczb lub dat
- **THEN** jest złożona w IBM Plex Mono z `font-variant-numeric: tabular-nums` i wyrównana do prawej

### Requirement: Tryb jasny i ciemny
System SHALL dostarczać jasny i ciemny zestaw tokenów, przełączany przez `prefers-color-scheme` oraz atrybut `data-theme` na `<html>`. Tekst i kontrolki w obu trybach MUST spełniać WCAG 2.2 AA (4.5:1 dla tekstu, 3:1 dla elementów interfejsu).

#### Scenario: Wymuszony tryb ciemny
- **WHEN** użytkownik wybierze tryb ciemny przełącznikiem
- **THEN** `<html>` ma `data-theme="dark"`, papier jest ciemny, a kontrast tekstu do tła wynosi co najmniej 4.5:1

### Requirement: Fonty dostępne bez zewnętrznych zapytań
Kroje SHALL być ładowane z plików `woff2` w repozytorium przez `@font-face` z `font-display: swap`, z fallbackami w tokenach.

#### Scenario: Pierwsza wizyta bez zgody
- **WHEN** odwiedzający otwiera stronę i nie udzielił zgody na usługi zewnętrzne
- **THEN** nagłówki renderują się w Hanken Grotesk, a przeglądarka nie wysyła żądań do `fonts.googleapis.com`

### Requirement: Reguły Floor w bazie
`css/base.css` SHALL ustawiać `overflow-x: clip` na `html` i `body`, widoczny natychmiast `:focus-visible` na każdym elemencie interaktywnym oraz blok `prefers-reduced-motion: reduce` wyłączający przejścia. Arkusze MUST NOT używać `transition: all` ani animować `width`, `height`, `top` lub `left`.

#### Scenario: Nawigacja klawiaturą
- **WHEN** użytkownik przechodzi klawiszem Tab przez link, przycisk lub pole
- **THEN** element natychmiast pokazuje pierścień focusu w kolorze `--color-focus`

#### Scenario: Ograniczony ruch
- **WHEN** system ma włączone `prefers-reduced-motion: reduce`
- **THEN** żadne przejście ani animacja na stronie nie trwa dłużej niż 0 s

### Requirement: Kontrolki w ośmiu stanach
Każdy przycisk, link-przycisk, przełącznik i pole SHALL mieć zdefiniowane stany: spoczynek, hover, focus-visible, active, disabled, loading (jeśli dotyczy), zaznaczony (jeśli dotyczy) i błąd (pola). Stan disabled MUST zmieniać wypełnienie, kolor tekstu i kursor oraz korzystać z atrybutu `disabled`, nie tylko z `opacity`.

#### Scenario: Wyłączony przycisk w sklepie gry
- **WHEN** ulepszenie w sklepie jest niedostępne
- **THEN** przycisk ma atrybut `disabled`, inne tło, inny kolor tekstu i `cursor: not-allowed`

### Requirement: Etykiety bez kapitalików i ozdobników
Etykiety, podpisy, nagłówki tabel, tagi i linki nawigacji SHALL być w kroju body, o stopień mniejsze, zdaniową wielkością liter, bez rozstrzelenia. Strona MUST NOT zawierać eyebrow nad nagłówkami, kropek statusu, ciągów meta łączonych kropką środkową ani strzałek przyklejonych do tekstu linków.

#### Scenario: Linter etykiet
- **WHEN** uruchomiony zostanie `sloplint.mjs`
- **THEN** raport nie zawiera wyników gate 9, 54, 63, 64 ani 67

### Requirement: Pieczęć Hallmark
Pierwsza niepusta linia `css/style.css` SHALL być pieczęcią Hallmark z wypełnionymi polami, po niej linia krytyki i ewentualne `waive` z uzasadnieniem, w pierwszych 40 liniach pliku.

#### Scenario: Pieczęć obecna
- **WHEN** otwarty zostanie `css/style.css`
- **THEN** linia 1 zaczyna się od `/* Hallmark` i podaje temat `almanac`, `redesign: full` oraz draw `c72b0b`
