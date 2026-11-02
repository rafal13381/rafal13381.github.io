# rafal13381.github.io

Strona-portfolio programisty full stack: CV, dwie gry przeglądarkowe oraz katalog i generator stylów interfejsu.

**Na żywo:** [rafal13381.github.io](https://rafal13381.github.io)

Czysty HTML, CSS i JavaScript — bez frameworków, bundlera i kroku budowania. Strona jest hostowana na GitHub Pages.

## Strony

| Adres | Zawartość |
|---|---|
| `index.html` | CV: o mnie, doświadczenie, edukacja, technologie, aktualny projekt |
| `kliker.html` | Kliker — gra przeglądarkowa w JavaScript |
| `autostrada.html` | Autostrada — otwarty świat 3D (three.js): 5 map, paliwo i stacje, monety, zlecenia, garaż z 5 autami, zapis postępu |
| `style.html` | Style — trzy widoki przełączane adresem: `#katalog`, `#generator`, `#wizytowki` |
| `prywatnosc.html` | Polityka prywatności i ustawienia zgody |
| `style/podglad.html` | Pełny podgląd jednego stylu (`?s=<id>` lub `?g=<kod z generatora>`) |
| `style/wizytowka.html` | Wizytówka na pełnym ekranie (`?t=<branża>&s=<styl>`) |
| `style/stylownik.html`, `style/stylownik-pro.html` | Interaktywne stylowniki podstawowych stylów |

## Struktura

```
├── index.html, kliker.html, autostrada.html, style.html, prywatnosc.html
├── css/
│   ├── style.css              # wygląd całej strony (tokeny, panele, nawigacja, stopka)
│   ├── probka.css             # przykładowy interfejs z 21 widżetami (.pk)
│   ├── wizytowki.css          # komponenty stron-wizytówek (.wz) — trafiają też do eksportu
│   └── wizytowki-ramka.css    # ramka podglądu i pasek sterowania wizytówki
├── js/
│   ├── consent.js             # baner prywatności, zgoda na Google Fonts
│   ├── theme.js               # przełącznik motywu: system / jasny / ciemny
│   ├── script.js              # zegar na stronie głównej
│   ├── script2.js             # logika gry Kliker
│   ├── autostrada.js          # gra Autostrada: świat, fizyka auta, ruch uliczny, sklep, zapis
│   ├── vendor/three.min.js    # three.js r160 (MIT) jako zwykły skrypt (window.THREE), bez CDN
│   ├── script3.js             # strona Style: widoki, katalog, filtry, wyszukiwarka
│   ├── tokens.js              # silnik stylów: kolory, kontrast WCAG, eksport CSS i .md
│   ├── styles.js              # 20 stylów bazowych (generowany — nie edytuj ręcznie)
│   ├── kolekcja.js            # 100 stylów rozszerzonych + 10 stylów 3D jako „ziarna”
│   ├── probka.js              # renderowanie przykładowego interfejsu i widżetów
│   ├── generator.js           # generator stylów (także 3D) i tryb deweloperski
│   ├── scena3d.js             # obiekt 3D (three.js) w banerze i eksport sceny scena-3d.js
│   ├── ui.js                  # wspólne pomocniki: schowek, komunikaty, paleta
│   ├── podglad.js             # strona pełnego podglądu stylu
│   ├── wizytowki.js           # 16 szablonów wizytówek, renderowanie i eksport plików
│   ├── wizytowki-widok.js     # zakładka Wizytówki: wybór branży, stylu, ekranu
│   └── wizytowka.js           # wizytówka na pełnym ekranie
└── style/
    ├── *.html                 # podstrony katalogu stylów
    ├── md/                    # specyfikacje 20 stylów bazowych w Markdown
    └── generuj.py             # buduje js/styles.js z plików style/md/*.md
```

## Jak to działa

- **Tokeny stylu.** Każdy styl to zestaw zmiennych CSS (`--bg`, `--surface`, `--text`, `--accent`, `--radius`, `--font-display` …) dla trybu jasnego i ciemnego. Komponenty używają wyłącznie tokenów, więc ten sam podgląd lub wizytówka wygląda inaczej w każdym stylu.
- **Ziarna.** Style rozszerzone (`kolekcja.js`) i z generatora zapisane są jako kilka kolorów i cech (materiał, kształt, krój, tło). `tokens.js` rozwija je w pełny zestaw tokenów i automatycznie koryguje kolory do progów kontrastu WCAG 2.2.
- **Style 3D.** Materiały *Glina 3D*, *Bryła 3D* i *Faza 3D*, tła *Kule 3D* i *Sześciany 3D* oraz tokeny głębi `--tilt` / `--lift` (karty przechylają się za kursorem). Styl może mieć obiekt three.js w banerze — generator pozwala go wybrać lub wylosować („Losuj 3D”) i pobrać jako `scena-3d.js`.
- **Wizytówki 3D (tryb immersyjny).** Jedna scena three.js za całą stroną (płynna bryła, fale cząsteczek, bryły we mgle, galaktyka): kamera płynie z przewijaniem, kursor daje paralaksę, sekcje nie mają własnych teł, karty są szkłem nad sceną, a treść wyłania się z głębi. Działa też w pobranym pliku `.html`.
- **Przedmiot 3D zamiast tła.** Opcja „Tło 3D → Przedmiot 3D”: 16 przedmiotów modelowanych w three.js (filiżanka, waga, aparat, błyskawica, ząb, cyrkiel, laptop, kwiat, nożyczki, klucz, sztućce, łapa, dymki, łóżko, kalkulator, młotek), każdy z własną animacją. „Przedmiot branży” dobiera go do ikony wizytówki. W nagłówku przedmiot można złapać i zakręcić — obrót 1:1 z ręką, bezwładność po puszczeniu, sprężyste przechylenie z gumką na granicy.
- **Tryb deweloperski.** Na stronie podglądu stylu, w generatorze i w zakładce Wizytówki można pobrać pliki: arkusz `.css`, opis `.md` dla asystenta AI, a dla wizytówki także gotową stronę `.html` w jednym pliku.
- **Stan w adresie.** Wybrany styl, branża i tryb zapisują się w adresie strony, więc linkiem można się podzielić.

## Uruchomienie lokalne

Strona nie wymaga instalacji. Do pełnej funkcjonalności (eksport wizytówek, który czyta arkusz CSS) uruchom prosty serwer w katalogu głównym:

```sh
python3 -m http.server 8000
# http://localhost:8000
```

Po zmianie specyfikacji w `style/md/` przebuduj style bazowe:

```sh
python3 style/generuj.py
```

Po zmianie pliku `.css` lub `.js` podbij parametr wersji w odwołaniu (`?v=…`) na stronach, które go używają — inaczej przeglądarki mogą pokazać starą wersję z pamięci podręcznej.

## Prywatność

Strona nie używa ciasteczek, analityki ani reklam. W `localStorage` zapisuje tylko ustawienia (motyw, zgodę, wybór w generatorze) i postęp w grze Autostrada. Czcionki Google Fonts wczytują się dopiero po zgodzie w banerze — szczegóły w [`prywatnosc.html`](https://rafal13381.github.io/prywatnosc.html).
