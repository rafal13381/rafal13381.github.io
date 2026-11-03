## 1. Przygotowanie

- [x] 1.1 Potwierdzić punkt powrotu `1b0c617` na gałęzi `redesign-hallmark` i czyste drzewo; zapisać stan przed: `sloplint.mjs index.html kliker.html autostrada.html style.html prywatnosc.html --genre editorial --render --before`
- [x] 1.2 Zrobić zrzuty referencyjne 20 podglądów stylów (`#pProbka`, równa szerokość 1152px) do porównania izolacji
- [x] 1.3 Rozstrzygnąć Open Questions z design.md (kontakt, podpisy kadrów galerii); brak odpowiedzi = wartości domyślne z design.md

## 2. System wizualny

- [x] 2.1 `theme.mjs scaffold --custom --redesign full` do katalogu roboczego; przenieść skalę do `css/tokens.css`, wypełnić `--color-*` i `--font-*` wartościami z design.md (Look, D3, D8)
- [x] 2.2 Tryb ciemny i tokeny pasów (`--color-band`, `--color-night`, `--color-night-2`, `--color-night-ink`, `--color-night-muted`); sprawdzić kontrast AA w obu trybach
- [x] 2.3 Zaktualizować aliasy dawnych nazw (`--bg`, `--surface`, `--text`, `--accent`, `--radius*` …) i tokeny gry (`--color-ok`, `--color-warn`, `--color-bad`, HUD) pod nową paletę
- [x] 2.4 Fonty: dodać Albert Sans (variable, latin + latin-ext, OFL) do `fonts/`, przepisać `css/fonts.css`, usunąć pliki i licencje Hanken Grotesk, Newsreader, IBM Plex Mono
- [x] 2.5 Skala typografii z D5 jako tokeny (`--text-hero`, `--text-band`, `--text-tile`, `--text-lead`, tracking per rozmiar)
- [x] 2.6 Pieczęć w `css/style.css`: `theme: custom`, idea, vibe, `waive 1` (krój systemowy na prośbę), potwierdzenie WARN 29 (szkło na ramie); przenieść aktualne `reworded/dropped`
- [x] 2.7 Przepisać warstwę komponentów: `.panel` → kafel r=24, `.btn` → pigułki (główna tusz, druga kontur, ghost), `.seg`, `.search`, `.chip`, `.row`, `.icon-btn`; osiem stanów, `:active` scale .97; bez linii 2px i kwadratowych narożników
- [x] 2.8 `sloplint` na samym CSS do zera FAIL w `style.css`

## 3. Rama strony

- [x] 3.1 Pasek nawigacji 48px, przyklejony, półprzezroczysty (`backdrop-filter`), hairline pod spodem tylko z treścią pod paskiem (`is-scrolled` + `IntersectionObserver`), fallbacki reduced-transparency i contrast-more
- [x] 3.2 Stopka: drobny krój na jasnym pasie, kolumny indeksu, zegar z cyframi tabelarycznymi
- [x] 3.3 Baner zgody w nowych tokenach (kafel, pigułki), bez zmiany tekstu i logiki
- [x] 3.4 Jedna szerokość treści 1080px, pasy na pełną szerokość okna (struktura `section.band > .wrap`)

## 4. CV: hero

- [x] 4.1 Hero premiery: wyśrodkowany nagłówek „Programista full stack.”, zdanie, pigułka GitHub, link „Zobacz prace”, zrzut Style wyłaniający się od dołu
- [x] 4.2 Jedyny reveal: zrzut hero (translate 24px + opacity) pod `.js` i bez reduced-motion
- [x] 4.3 `sloplint.mjs index.html --render --stage hero`; naprawić FAIL; przegląd hero według `review-hero.md`

## 5. CV: sekcje i galeria

- [x] 5.1 Pasek trzech faktów (staż w UKNF, Technikum Infotech od 2022 do 2027, finał OIT)
- [x] 5.2 Nowe zrzuty Style: katalog, generator, wizytówki, podgląd stylu (`img/prace/style-*.jpg`, jasny motyw, bez banera)
- [x] 5.3 Pas premiery Style (nocny): nagłówek, zdanie, galeria z podpisami, cztery fakty (120, WCAG 2.2, 21, 16), linki
- [x] 5.4 `js/galeria.js`: Pointer Events + capture, przesuw 1:1 z offsetem chwytu, historia prędkości, rzut pędu (0.998), sprężyna krytycznie tłumiona (response 0.4) z prędkością startową, rubber-band, przerwanie od bieżącej pozycji, próg kierunku 10px i `touch-action: pan-y`, klawiatura i przyciski; bez JS `scroll-snap`, przy reduced-motion skok natychmiastowy
- [x] 5.5 Kafle Autostrada i Kliker (jasnoszare, r=24, zrzut, nazwa, zdanie, link)
- [x] 5.6 Dane techniczne: tabela kompetencji (przypięta pierwsza kolumna na telefonie) i wiersze specyfikacji (doświadczenie, aplikacje mobilne, edukacja, osiągnięcia, certyfikaty, języki, kompetencje, zainteresowania)
- [x] 5.7 Kontakt; sprawdzić budżet słów i liczbę sekcji; zapisać `reworded/dropped` w pieczęci

## 6. Podstrony

- [x] 6.1 Kliker: kafle, pigułki, licznik z cyframi tabelarycznymi; test gry
- [x] 6.2 Autostrada: kafle, HUD jako ciemny materiał z fallbackami, sklep i garaż; test jazdy, zlecenia i garażu
- [x] 6.3 `style.html`: filtry, wyszukiwarka-pigułka, segmenty, generator i wizytówki; sprawdzić trzy widoki
- [x] 6.4 `style/podglad.html` i `css/wizytowki-ramka.css`: rama i dock w nowym systemie; porównanie 20 podglądów ze zrzutami z 1.2
- [x] 6.5 `prywatnosc.html`: długi dokument, miara 66ch; diff tekstu bez znaczników

## 7. Sweep i oddanie

- [x] 7.1 `sloplint.mjs <wszystkie strony> --genre editorial --render --kept` do 0 FAIL w `style.css` i na stronach; REFLEX naprawione lub uchylone
- [x] 7.2 Sprawdzić F15 (wyśrodkowane i lewe grupy nagłówków), 29 (szkło), 44b (hero przy 1280×800) na zrzutach
- [x] 7.3 Test w headless Chrome: zegar, motyw, galeria (przeciągnięcie, rzut, klawiatura), gry, katalog, podgląd, wizytówka, brak błędów konsoli
- [x] 7.4 Ręcznie: tryb ciemny, `prefers-reduced-motion`, `prefers-reduced-transparency`, 375 / 1280×800 / 1920, wyłączony JS
- [x] 7.5 Podbić `?v=`; zaktualizować README (fonty, `js/galeria.js`, opis wyglądu); wpis do `.hallmark/log.json`; raport oddania
