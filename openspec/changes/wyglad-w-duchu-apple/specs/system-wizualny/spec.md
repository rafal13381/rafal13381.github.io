## ADDED Requirements

### Requirement: Materiał w duchu Apple
System SHALL używać palety neutralnej w OKLCH: papier `oklch(99.4% 0.001 270)`, pas i kafel jasny `oklch(96.8% 0.002 270)`, pas nocny `oklch(13% 0.002 270)`, tusz `oklch(21% 0.004 270)`. Akcent MUST być neutralny (tusz na jasnych powierzchniach, papier na ciemnych), bez chromatycznego koloru akcentu w tokenach strony. Powierzchnie MUST być wyznaczane krokiem tła (papier, pas jasny, pas nocny), kafle MUST mieć promień 24px bez ramki i bez cienia, a promień pigułki (980px) MUST być używany wyłącznie na kontrolkach. Strona MUST NOT zawierać gradientów tła, kart w kartach ani `backdrop-filter` poza paskiem nawigacji i HUD gry.

#### Scenario: Szkło tylko na ramie
- **WHEN** przeszukane zostaną arkusze strony (bez podglądów stylów)
- **THEN** `backdrop-filter` występuje wyłącznie w regułach paska nawigacji i HUD gry, a `radial-gradient` i `linear-gradient` nie występują w tle sekcji

#### Scenario: Pigułki tylko na kontrolkach
- **WHEN** linter sprawdzi promienie
- **THEN** nie zgłasza F7 (promień pigułki na elementach niebędących kontrolkami)

### Requirement: Typografia z trackingiem zależnym od rozmiaru
Nagłówki SHALL mieć ujemny tracking rosnący z rozmiarem (od -0.035em w hero do -0.01em w leadzie), interlinię malejącą z rozmiarem (1.03 w hero, 1.5 w body), a tekst body tracking 0. Strona MUST używać jednej rodziny krojów, liczby przez `font-variant-numeric: tabular-nums`.

#### Scenario: Hero na laptopie
- **WHEN** strona zostanie otwarta w oknie 1280×800
- **THEN** nagłówek hero ma `letter-spacing` ujemny i `line-height` poniżej 1.1, a akapity body mają `letter-spacing: normal` lub 0

### Requirement: Ruch z natychmiastową odpowiedzią
Każda kontrolka SHALL reagować na wciśnięcie stanem `:active` (skala 0.97 w czasie do 100ms) bez czekania na zwolnienie. Animacje MUST używać wyłącznie `transform` i `opacity`, a pod `prefers-reduced-motion: reduce` ruch MUST zostać zastąpiony natychmiastową zmianą lub przenikaniem.

#### Scenario: Wciśnięcie przycisku
- **WHEN** użytkownik wciśnie przycisk i jeszcze go nie puści
- **THEN** przycisk jest już w stanie wciśniętym

#### Scenario: Ograniczony ruch
- **WHEN** system ma włączone `prefers-reduced-motion: reduce`
- **THEN** żadna animacja ani przejście nie przesuwa elementów, a galeria przechodzi do kadru natychmiast

## MODIFIED Requirements

### Requirement: Tryb jasny i ciemny
System SHALL dostarczać jasny i ciemny zestaw tokenów, przełączany przez `prefers-color-scheme` oraz atrybut `data-theme` na `<html>`. W trybie ciemnym pasy papieru i jasne MUST przejść na ciemne odcienie, a pasy nocne MUST pozostać najciemniejszą powierzchnią. Tekst i kontrolki w obu trybach MUST spełniać WCAG 2.2 AA (4.5:1 dla tekstu, 3:1 dla elementów interfejsu).

#### Scenario: Wymuszony tryb ciemny
- **WHEN** użytkownik wybierze tryb ciemny przełącznikiem
- **THEN** `<html>` ma `data-theme="dark"`, papier jest ciemny, a kontrast tekstu do tła wynosi co najmniej 4.5:1

#### Scenario: Rytm pasów w ciemnym trybie
- **WHEN** strona jest w trybie ciemnym
- **THEN** pas premiery Style nadal odróżnia się od sąsiednich pasów krokiem jasności

### Requirement: Fonty dostępne bez zewnętrznych zapytań
Krój SHALL być określony stosem `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Albert Sans", sans-serif` w tokenach. Albert Sans MUST być ładowany z pliku `woff2` w repozytorium przez `@font-face` z `font-display: swap`. Pliki SF Pro MUST NOT być osadzane. Pliki Hanken Grotesk, Newsreader i IBM Plex Mono MUST zostać usunięte z `fonts/`.

#### Scenario: Urządzenie Apple
- **WHEN** strona zostanie otwarta w Safari na macOS
- **THEN** tekst renderuje się krojem systemowym (SF Pro), a przeglądarka nie pobiera pliku Albert Sans

#### Scenario: Urządzenie bez SF
- **WHEN** strona zostanie otwarta w Chrome na Windows
- **THEN** tekst renderuje się w Albert Sans z `fonts/`, a przeglądarka nie wysyła żądań do `fonts.googleapis.com`

### Requirement: Pieczęć Hallmark
Pierwsza niepusta linia `css/style.css` SHALL być pieczęcią Hallmark z wypełnionymi polami, po niej linia krytyki i ewentualne `waive` z uzasadnieniem, w pierwszych 40 liniach pliku.

#### Scenario: Pieczęć obecna
- **WHEN** otwarty zostanie `css/style.css`
- **THEN** linia 1 zaczyna się od `/* Hallmark` i podaje `theme: custom`, ideę „Prace jak premiery produktów, CV jak dane techniczne” oraz `redesign: full`

## REMOVED Requirements

### Requirement: Materiał Almanac
**Reason**: Właściciel wybrał wygląd w duchu Apple. Materiał Almanac (łupkowy papier, linie 1/2px, magenta, Plex Mono) zastępuje wymaganie „Materiał w duchu Apple”.
**Migration**: Tokeny `--color-*` zachowują nazwy tam, gdzie mają odpowiednik. Aliasy dawnych nazw (`--bg`, `--surface`, `--text` …) dalej działają na `:root`, a komponenty czytają nowe wartości bez zmian selektorów.
