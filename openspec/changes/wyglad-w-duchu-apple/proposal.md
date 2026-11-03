## Why

Właściciel chce, żeby strona wyglądała jak strona Apple: spokojna, pewna siebie, z pracami pokazanymi jak produkty. Obecny system Almanac (łupkowy papier, linie, cyfry w mono, magenta) jest poprawny, ale ma charakter rocznika, nie premiery. Nowy kierunek ma oddać ducha Apple.com bez cech, które linter Hallmark i oko rozpoznają jako wygenerowane: bez szkła na treści, gradientowych plam, eyebrow i linków „Więcej >”.

## What Changes

- **Nowy system wizualny „w duchu Apple”** w miejsce Almanac (ścieżka Hallmark *custom*, nie temat z katalogu):
  - prawie biały papier, jasnoszare kafle i pasy, prawie czarne pasy premier;
  - akcent neutralny (tusz na jasnym, papier na ciemnym), więc kolor wnoszą zrzuty prac;
  - krój systemowy (SF Pro na urządzeniach Apple), a poza nimi hostowany lokalnie Albert Sans;
  - typografia z trackingiem zależnym od rozmiaru;
  - przyciski-pigułki, zaokrąglone kafle bez ramek i cieni.
  
  **BREAKING** dla wyglądu: znikają linie 1/2px, kwadratowe narożniki, Newsreader, Hanken Grotesk, IBM Plex Mono i magenta.
- **Nowa kompozycja CV** (`index.html`): prace pokazane jak premiery produktów, CV jak „dane techniczne”.
  - Hero: wyśrodkowany nagłówek, jedno zdanie, akcje, a pod nimi wyłaniający się zrzut katalogu Style.
  - Pasek trzech najważniejszych faktów.
  - Ciemny pas premiery Style z galerią zrzutów przeciąganą gestem.
  - Dwa kafle: Autostrada i Kliker.
  - Sekcja „Dane techniczne”: tabela kompetencji, doświadczenie, edukacja, certyfikaty, języki i kompetencje.
  - Kontakt i stopka.
- **Ruch w duchu Apple:**
  - reakcja na wciśnięcie (pointer-down);
  - galeria przeciągana 1:1 z rzutem pędu, krytycznie tłumioną sprężyną i miękkim oporem na krańcach;
  - półprzezroczysty pasek nawigacji nad przewijaną treścią;
  - pełne zachowanie przy `prefers-reduced-motion`, `prefers-reduced-transparency` i `prefers-contrast`.
- **Rama i podstrony** (gry, katalog, polityka) przechodzą na nowe tokeny. Podglądy stylów `.pk` i `.wz` pozostają izolowane i niezmienione.
- Nowe zrzuty prac (w tym dodatkowe kadry Style: generator, wizytówki, podgląd stylu) w `img/prace/`.

Nie zmienia się: fakty CV, linki, `id` i selektory używane przez skrypty, logika gier i silnika stylów, tekst polityki prywatności, mechanizm zgody, aliasy tokenów czytane przez komponenty katalogu.

## Capabilities

### New Capabilities
<!-- brak: wszystkie obszary istnieją w openspec/specs -->

### Modified Capabilities
- `system-wizualny`: materiał Almanac zastąpiony materiałem w duchu Apple, nowe kroje, wymagania ruchu i materiałów (przezroczystość tylko na ramie), pieczęć dla ścieżki custom.
- `strona-cv`: hero premiery w miejsce hero Banner, prace jako pasy premier z galerią gestów, CV jako dane techniczne, pasek faktów.
- `rama-strony`: półprzezroczysta nawigacja, stopka w nowym systemie, baner zgody w nowych tokenach.
- `strony-podrzedne`: gry, katalog i polityka prywatności w nowym systemie zamiast Almanac.

## Impact

- **CSS:** `css/tokens.css` przepisany, `css/fonts.css` z Albert Sans, `css/style.css` (warstwa komponentów i CV), `css/wizytowki-ramka.css` (rama). `css/base.css` bez zmian zakresu (wykluczenia `.pk`, `.wz` zostają).
- **Fonty:** z `fonts/` usunięte Hanken Grotesk, Newsreader i IBM Plex Mono, dodany Albert Sans (OFL). Przez krój systemowy na urządzeniach Apple renderuje się SF Pro bez osadzania pliku.
- **HTML:** `index.html` przebudowany. Pozostałe strony bez zmian struktury, z wyjątkiem klas nawigacji i stopki, jeśli wymaga tego nowy pasek.
- **JS:** nowy mały moduł `js/galeria.js` (gest, sprężyna, rzut pędu), bez zależności i bez wpływu na inne skrypty. Pozostałe skrypty bez zmian logiki.
- **Specyfikacje:** delty do czterech istniejących specyfikacji.
- **Repozytorium:** stan Almanac jest zapisany w commicie `1b0c617` na gałęzi `redesign-hallmark` jako punkt powrotu.
