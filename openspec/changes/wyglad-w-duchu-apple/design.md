## Context

- Strona po redesignie Almanac (commit `1b0c617`, gałąź `redesign-hallmark`) ma już dobrą infrastrukturę: tokeny w `css/tokens.css` z aliasami dawnych nazw, `css/base.css` z regułami Floor wyłączonymi z podglądów `.pk`/`.wz`, fonty hostowane lokalnie, CV zbudowane wyłącznie z faktów, zrzuty prac, linter Hallmark z renderem (`~/.hallmark-tools`). Stan lintera: 0 FAIL i 0 REFLEX na stronach. Pozostałe FAIL-e są w CSS podglądów (izolacja D5) plus jeden zamierzony `FAIL kept` dla usuniętego linku do Google Fonts.
- Właściciel chce wyglądu „jak Apple”. Wybrał „duch Apple, bez slopu” dla całej strony.
- Wcześniejszy Vision Glass (szkło, mgła gradientów) też był stylizacją na Apple. Porzucono go, bo wyglądał na wygenerowany. Ta zmiana bierze z Apple.com strukturę, typografię, rytm pasów i zachowanie, a nie szkło.
- Ograniczenia Hallmark: Floor bez wyjątków, a REFLEX naprawiony albo uchylony z powodem. Prośba o konkretny wygląd prowadzi ścieżką *custom* (`direction.md`), a nie losowaniem tematu.
- Strona należy do właściciela, a nie do Apple. Nie używamy logo, nazw produktów ani wartości kolorów „marki Apple”. Paleta jest nasza, w OKLCH, neutralna. Protokół brand-truth nie dotyczy, bo nie budujemy strony dla marki.

## Goals / Non-Goals

**Goals:**
- Pierwsze wrażenie premiery: ogromna, ciasno złożona typografia, dużo powietrza, prace na wielkich zrzutach i rytm jasnych i ciemnych pasów.
- Interakcje, które „czuć”: natychmiastowa reakcja na wciśnięcie i galeria prowadzona palcem z pędem i sprężyną.
- Floor Hallmark: 0 FAIL na stronach i w `style.css`, każdy REFLEX naprawiony lub uchylony z powodem.
- Pełna treść i okablowanie zachowane (`sloplint --kept`).

**Non-Goals:**
- Kopiowanie Apple.com 1:1, logo, ikon SF Symbols czy osadzanie plików SF Pro (licencja nie pozwala).
- Szkło na kafelkach treści, gradientowe plamy, linki ze strzałką „>”, etykiety „Nowość” nad nagłówkami.
- Zmiany treści CV, logiki gier, silnika stylów i tekstu polityki prywatności.
- Biblioteki animacji i bundler: galeria ma własną, małą sprężynę w czystym JS.

## Decisions

### Picks (Hallmark v2.0.0, ścieżka custom)

- **Redesign** · full · 7 stron (/, kliker, autostrada, style, prywatnosc, style/podglad, style/wizytowka)
- **Idea** · Prace pokazane jak premiery produktów, a CV jak ich dane techniczne.
- **Look** · papier prawie biały `oklch(99.4% 0.001 270)`, kafle i pasy `oklch(96.8% 0.002 270)`, pasy premier `oklch(13% 0.002 270)`, tusz `oklch(21% 0.004 270)`, akcent neutralny (tusz na jasnym, papier na ciemnym). Kolor wnoszą zrzuty. Krój systemowy na prośbę (SF Pro na Apple), fallback Albert Sans (lokalnie, OFL).
- **Chrome** · nav: cienki pasek 48px, półprzezroczysty nad przewijaną treścią, znak słowny, linki, GitHub, motyw · footer: drobne, szare kolumny indeksu z czasem lokalnym
- **Hero** · premiera: wyśrodkowany nagłówek „Programista full stack.”, jedno zdanie, pigułka GitHub i link „Zobacz prace”. Od dołu ekranu wyłania się zrzut katalogu Style, widoczny przy 1280×800.
- **Signature** · galeria Style w ciemnym pasie: zrzuty katalogu, generatora, wizytówek i podglądu, przeciągane palcem lub myszą 1:1, rzucane pędem i dociągane sprężyną do najbliższego kadru.
- **Sections** · Hero (zrzut Style) · Fakty (trzy duże fakty: staż w UKNF, Technikum Infotech od 2022 do 2027, finał OIT) · Premiera Style (ciemny pas: nagłówek, galeria, cztery liczby z treści: 120 stylów, WCAG 2.2, 21 widżetów, 16 branż, linki) · Kafle Autostrada i Kliker (jasnoszare, zrzut i jedna linia) · Dane techniczne (tabela kompetencji i wiersze specyfikacji: doświadczenie, aplikacje mobilne, edukacja, osiągnięcia, certyfikaty, języki, kompetencje, zainteresowania) · Kontakt · Footer
- **Material** · real: wszystkie fakty CV, 120/21/16, WCAG 2.2, pięć map, Białystok · pictures: zrzuty prawdziwych stron (`capture`/puppeteer), bez zdjęć z biblioteki · absent: zdjęcie autora, e-mail, LinkedIn, opinie, metryki
- **Sweep** · po budowie

### D1. Ścieżka custom zamiast losowania tematu
Właściciel nazwał kierunek wprost. Losowanie tematu z katalogu zignorowałoby jego słowa, a według Hallmark słowa użytkownika wygrywają z tematem. Pieczęć: `theme: custom · idea: "Prace jak premiery produktów, CV jak dane techniczne" · vibe: "spokojna pewność, dużo powietrza, wielka typografia"`.

### D2. Krój: systemowy na prośbę, Albert Sans jako fallback
`--font-display` i `--font-body`: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Albert Sans", sans-serif`. Na macOS i iOS strona renderuje się w SF Pro bez osadzania pliku, co jest zgodne z licencją. Na Windows i Androidzie dostaje Albert Sans z `fonts/` zamiast Segoe czy Roboto, więc wygląd jest spójny. `system-ui` jest na liście banned Hallmark „chyba że użytkownik prosi”. Tu prosi, więc pieczęć zapisuje to jako `waive 1` z powodem. Albert Sans przechodzi `theme.mjs check --face` bez kolizji z katalogiem. Jedna rodzina na całą stronę, liczby przez `font-variant-numeric: tabular-nums`, bez kroju mono. *Alternatywa:* Inter (odrzucony: banned i najczęstszy wybór modeli).

### D3. Paleta neutralna, kolor ze zrzutów
Apple.com pozwala, żeby kolor niosły produkty. Tu produktami są zrzuty prac: magenta katalogu, zieleń i asfalt Autostrady. Akcent jest neutralny. Przycisk główny to pigułka w kolorze tuszu z papierowym tekstem (na ciemnym pasie odwrotnie). Linki są w tuszu z podkreśleniem 1px, pogrubianym na hover. Pierścień focusu w tuszu z odstępem 2px, na ciemnych pasach w papierze. *Alternatywa:* niebieski akcent linków jak na Apple.com (odrzucony: Hallmark nazywa „niebieski dla software” zużytym wyborem, a niebieski byłby jedynym kolorem strony).

### D4. Pasy, kafle i promienie
- Sekcje to pełnoszerokie pasy: papier, jasnoszary (`--color-band`) lub nocny (`--color-night`). Treść w jednym kontenerze 1080px (rytm Apple), a w nim siatka 12 kolumn z `minmax(0, 1fr)`.
- Kafle (`.tile`, dawne `.panel`): `--color-band` na papierze lub `--color-night-2` na nocy, promień 24px, bez ramki i bez cienia, wewnętrzne wiersze płaskie (zakaz karty w karcie).
- Promień 980px tylko dla kontrolek (przyciski, segmenty, wyszukiwarka). Hallmark F7: pigułki tylko na kontrolkach.

### D5. Typografia z trackingiem zależnym od rozmiaru
| Rola | Rozmiar | Interlinia | Tracking | Waga |
|---|---|---|---|---|
| Hero | clamp(3rem, 7vw, 6rem) | 1.03 | -0.035em | 700 |
| Nagłówek pasa | clamp(2.5rem, 5vw, 4.5rem) | 1.05 | -0.03em | 700 |
| Tytuł kafla | clamp(1.75rem, 2.5vw, 2.5rem) | 1.1 | -0.02em | 600 |
| Lead | clamp(1.25rem, 1.6vw, 1.75rem) | 1.3 | -0.01em | 500 |
| Body | 1.0625rem | 1.5 | 0 | 400 |
| Mały (etykiety, stopka) | 0.875rem / 0.8125rem | 1.45 | 0 / +0.005em | 400 |

Nagłówki mają jedną wagę i kolor na poziom. Hierarchia wynika z rozmiaru, wagi i interlinii razem.

### D6. Ruch: odpowiedź, sprężyna, pęd
- **Odpowiedź:** `.btn`, `.tile-link`, kontrolki: `:active { transform: scale(.97) }` w 100ms ease-out. Stan wciśnięcia działa na pointer-down, bez czekania na click.
- **Galeria (`js/galeria.js`)**:
  - Pointer Events z `setPointerCapture`, przesuw 1:1 z zachowaniem miejsca chwytu, historia ostatnich `pointermove` do liczenia prędkości.
  - Puszczenie: punkt docelowy `x + (v/1000)·0.998/(1−0.998)`, przyciąganie do najbliższego kadru, sprężyna krytycznie tłumiona (response 0.4 s) z prędkością startową z gestu.
  - Na krańcach opór `rubberband(overshoot, width, 0.55)`. Przerwanie animacji chwyceniem startuje od bieżącej pozycji.
  - Klawiatura: strzałki i przyciski „poprzedni” i „następny” obok galerii.
- **Bez JS i przy `prefers-reduced-motion`:** galeria to natywny `overflow-x: auto` z `scroll-snap-type: x mandatory`. Przy reduced-motion przejście do kadru jest natychmiastowe i nie ma sprężyny.
- **Jeden reveal:** zrzut w hero unosi się o 24px i przechodzi z opacity .0 do 1 tylko pod `.js` i bez reduced-motion, a domyślnie jest widoczny (Floor 7).
- Tylko `transform` i `opacity`. Nigdy `transition: all`.

### D7. Materiał tylko na ramie
Pasek nawigacji jest półprzezroczysty, `color-mix(papier 72%)` z `backdrop-filter: blur(20px) saturate(180%)`, a treść przewija się pod nim. To jedyne szkło na stronie i pełni funkcję (rama nad treścią), a nie dekoracji. Zamiast twardej linii pod paskiem jest hairline tylko wtedy, gdy pod paskiem jest treść (klasa `is-scrolled` z `IntersectionObserver` na znaczniku u góry; bez JS hairline jest zawsze). Fallbacki:
- `prefers-reduced-transparency: reduce`: pełne tło papieru, bez blur;
- `prefers-contrast: more`: pełne tło i linia w tuszu.

Gate 29 (WARN glass) jest potwierdzony z tym uzasadnieniem w pieczęci.

### D8. Ciemny tryb
Pasy papieru i jasnoszare przechodzą na `oklch(17% 0.003 270)` i `oklch(21% 0.003 270)`, pasy nocne zostają najciemniejsze (`oklch(10% 0.002 270)`), tusz `oklch(96% 0.002 270)`. Kontrast AA sprawdzony w obu trybach. Zmiana motywu przechodzi przez `color` i `background-color` w 200ms, bez skoku jasności.

### D9. Treść
- Hero: „Programista full stack.” (dotychczasowy nagłówek z kropką jako zdaniem) i istniejące zdanie: „Aplikacje webowe w Angularze i .NET, mobilne w React Native i Swift.”
- Fakty, liczby i opisy wyłącznie z obecnej strony. Pas Style używa liczb już podanych w CV: 120, 21, 16 i WCAG 2.2. Bez nowych twierdzeń.
- Nagłówki sekcji: „Style.”, „Autostrada.”, „Kliker.”, „Dane techniczne.”, „Kontakt.”. Kropka w nagłówku to zabieg typograficzny, a nie nowa treść.
- Każda zmieniona linia trafia do pieczęci jako `reworded` / `dropped` (wymóg `--kept`).

### D10. Podstrony
- `.panel` staje się kaflem (jasnoszarym, r=24).
- Przyciski i segmenty to pigułki.
- HUD Autostrady to ciemny materiał nad sceną 3D. Treść porusza się pod nim, więc blur ma tu sens; fallbacki jak w D7.
- Polityka prywatności to długi dokument w kroju systemowym, z miarą 66ch.
- Podglądy `.pk`, `.wz` i stylowniki są nietknięte. Porównanie pikseli jak poprzednio, przy równej szerokości.

## Risks / Trade-offs

- [Wyśrodkowane grupy nagłówków (hero, pasy) to wzorzec, który Hallmark liczy (F15: więcej wyśrodkowanych niż wyrównanych do lewej)] → wyśrodkowane są tylko hero i nagłówek pasa Style. Kafle, dane techniczne i kontakt są wyrównane do lewej. Sprawdzenie w sweepie.
- [Na Windows i Androidzie strona nie będzie „Apple”, bo nie ma SF] → Albert Sans ma zbliżone proporcje grotesku. Wygląd zależy bardziej od skali, rytmu i ruchu niż od samego kroju.
- [Galeria z własną fizyką może konfliktować z przewijaniem strony na dotyku] → `touch-action: pan-y` na torze, rozpoznanie kierunku po progu 10px, przy pionowym ruchu gest oddaje stronie.
- [Szkło na pasku i HUD to WARN 29] → uzasadnienie w pieczęci i fallbacki dostępności.
- [Zmiana tokenów może przeciec do podglądów] → wykluczenia w `base.css` zostają, a aliasy dalej żyją na `:root`. Porównanie 20 podglądów przed oddaniem.
- [Duże zrzuty ważą] → JPEG q≈80, `loading="lazy"` poza hero, wymiary w atrybutach (brak skoku układu).

## Migration Plan

1. Gałąź `redesign-hallmark`, punkt powrotu `1b0c617` (Almanac).
2. Tokeny i fonty → rama (nav, stopka, baner) → CV: hero (lint `--stage hero`) → pasy i galeria → dane techniczne → podstrony → sweep `--kept` → porównanie podglądów.
3. Podbicie `?v=` arkuszy i skryptów.
4. Rollback: `git checkout 1b0c617 -- .` albo revert commita tej zmiany.

## Open Questions

- Kontakt: nadal tylko GitHub. Czy jest e-mail lub LinkedIn do dodania?
- Czy galeria Style ma też mieć podpisy pod kadrami (np. „Katalog”, „Generator”), czy tylko zrzuty z `alt`? Domyślnie: krótkie podpisy pod kadrami.
- Baner zgody i polityka nadal wspominają Google Fonts (decyzja właściciela z poprzedniej zmiany). Bez zmian, chyba że właściciel zdecyduje inaczej.
