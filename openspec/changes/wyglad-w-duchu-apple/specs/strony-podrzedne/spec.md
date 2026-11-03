## MODIFIED Requirements

### Requirement: Gry w nowym systemie bez zmiany logiki
`kliker.html` i `autostrada.html` SHALL używać tokenów nowego systemu dla ramy, kafli, przycisków-pigułek i sklepu. HUD Autostrady MUST być ciemnym materiałem nad sceną 3D (półprzezroczyste tło z rozmyciem, pełne tło przy `prefers-reduced-transparency`) z liczbami w cyfrach tabelarycznych. Pliki `js/script2.js`, `js/autostrada.js` i `js/scena3d.js` MUST NOT zmieniać logiki. Klasy i `id`, których szukają skrypty, MUST zostać zachowane.

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
`style.html` (widoki `#katalog`, `#generator`, `#wizytowki`) SHALL używać tokenów nowego systemu dla nawigacji, filtrów, wyszukiwarki-pigułki, przełączników segmentowych, pól i przycisków narzędzi. Adresy z hashem i parametry `?s=`, `?g=`, `?t=` MUST działać bez zmian.

#### Scenario: Przełączanie widoków
- **WHEN** użytkownik przejdzie na `style.html#generator`
- **THEN** pokazuje się generator, a jego panel sterowania jest jasnoszarym kaflem nowego systemu

### Requirement: Izolacja podglądów stylów
Próbki `.pk`, wizytówki `.wz`, `style/stylownik.html` i `style/stylownik-pro.html` SHALL wyglądać identycznie jak przed redesignem dla każdego stylu, bo pokazują style z katalogu, a nie wygląd strony. Tokeny nowego systemu MUST NOT przeciekać do wnętrza podglądu.

#### Scenario: Porównanie podglądu
- **WHEN** porównane zostaną zrzuty `style/podglad.html?s=<id>` przed i po redesignie dla 20 stylów bazowych przy tej samej szerokości podglądu
- **THEN** układ i kroje elementów podglądu są identyczne, a różni się tylko rama wokół niego

#### Scenario: Eksport stylu
- **WHEN** użytkownik wyeksportuje styl z generatora do .css i .md
- **THEN** pliki mają tę samą zawartość co przed redesignem

### Requirement: Polityka prywatności jako długi dokument
`prywatnosc.html` SHALL być złożona jako długi dokument w kroju systemowym nowego systemu, z miarą tekstu 60–75 znaków i nagłówkami z trackingiem zależnym od rozmiaru. Tekst polityki MUST NOT być zmieniony.

#### Scenario: Treść bez zmian
- **WHEN** porównany zostanie tekst `prywatnosc.html` przed i po redesignie (bez znaczników)
- **THEN** treść jest identyczna
