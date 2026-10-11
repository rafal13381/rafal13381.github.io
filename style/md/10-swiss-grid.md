# 10 · Swiss Grid

> Styl międzynarodowy: siatka, czerń, biel i czerwień.

Podgląd na żywo: `stylownik.html#swiss-light` oraz `stylownik.html#swiss-dark`.

## Charakter

Międzynarodowy Styl Typograficzny (Szwajcaria, lata 50.): obiektywny, racjonalny, oparty o modularną siatkę. Czerń i biel plus jedna czerwień. Ogromne, ciasno złożone nagłówki, asymetryczne wyrównanie do lewej, brak dekoracji. Forma wynika z funkcji.

## Kiedy używać

Portfolio projektantów, galerie, architektura, raporty, marki odważne i intelektualne, plakaty/eventy. Unikaj w produktach „ciepłych” i przyjaznych dla dzieci.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#FFFFFF` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F0F0F0` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#000000` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#555555` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#E30613` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#C00010` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#000000` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#000000` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#00843D` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#B37800` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#E30613` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#0A0A0A` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#0A0A0A` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#1C1C1C` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#FFFFFF` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#A8A8A8` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#FF2D2D` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#FF5555` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#000000` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#FFFFFF` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#FFFFFF` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#2BD47A` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FFC233` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF2D2D` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `linear-gradient(90deg, #0000000d 1px, transparent 1px) 0 0 / calc(100% / 12) 100%, #FFFFFF` | `linear-gradient(90deg, #ffffff12 1px, transparent 1px) 0 0 / calc(100% / 12) 100%, #0A0A0A` |
| Cień karty | `--shadow-card` | `none` | `none` |
| Cień przycisku | `--shadow-btn` | `none` | `none` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 21.00:1 · AAA ✅ | 19.80:1 · AAA ✅ |
| Tekst drugorzędny na tle | 7.46:1 · AAA ✅ | 8.33:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 4.88:1 · AA ✅ | 5.67:1 · AA ✅ |
| Akcent na tle (link) | 4.88:1 · AA ✅ | 5.34:1 · AA ✅ |
| Błąd na tle | 4.88:1 · AA ✅ | 5.34:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Nagłówki: Inter Tight 900 z bardzo ciasnym trackingiem (−0.045em) i interlinią 0.95. Tekst: Inter 400/1.5. Etykiety i przyciski WERSALIKAMI z +0.06em. Hierarchia przez ekstremalny kontrast rozmiarów.

| Rola | Krój |
|---|---|
| Nagłówki | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` — waga 900, tracking -0.045em |
| Tekst | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| Mono / dane | `"IBM Plex Mono", ui-monospace, monospace` |
| Przyciski | tracking 0.06em, uppercase |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@700;800;900&display=swap">
```

## Kształt, obramowanie, głębia

Zero zaokrągleń, zero cieni, ramki 2px w kolorze tekstu. Tło z subtelną 12-kolumnową siatką. Czerwony kwadrat jako element graficzny (marker sekcji).

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 0px |
| Promień pól `--radius-sm` | 0px |
| Promień przycisków `--radius-btn` | 0px |
| Grubość ramki `--border-w` | 2px |
| Cień karty (jasny) | `none` |
| Cień karty (ciemny) | `none` |

## Jak wykonać komponenty

### Przycisk
Primary: czerwony prostokąt, biały tekst wersalikami (w ciemnym: czarny tekst — lepszy kontrast). Secondary: ramka 2px, przezroczyste. Hover: pełna inwersja na czarno/biało.

### Pole tekstowe
Ramka 2px w kolorze tekstu, prostokąt, wysokość 48px. Fokus: ramka zmienia kolor na czerwony + 2px przesunięty outline.

### Widget / karta
Karta z ramką 2px, wielka liczba (Inter Tight 900, 48px+), etykieta wersalikami nad nią, wykres słupkowy czarny z jednym czerwonym wyróżnieniem.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
h1 {
  font: 900 clamp(2.5rem, 7vw, 5rem)/0.95 "Inter Tight", sans-serif;
  letter-spacing: -0.045em;
}
.marker::before {
  content: ""; display: inline-block; width: .7em; height: .7em;
  background: var(--accent); margin-right: .5em;
}
```

## Ruch i interakcja

Ruch liniowy lub brak. Przesunięcia po siatce, bez odbić i rozmyć.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-display: "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 0px;
  --radius-sm: 0px;
  --radius-btn: 0px;
  --border-w: 2px;
  --heading-weight: 900;
  --heading-tracking: -0.045em;
  --heading-transform: none;
  --btn-transform: uppercase;
  --btn-tracking: 0.06em;
  /* kolory — tryb jasny */
  --bg: #FFFFFF;
  --surface: #FFFFFF;
  --surface-2: #F0F0F0;
  --text: #000000;
  --muted: #555555;
  --accent: #E30613;
  --accent-hover: #C00010;
  --on-accent: #FFFFFF;
  --accent-2: #000000;
  --border: #000000;
  --success: #00843D;
  --warning: #B37800;
  --danger: #E30613;
  --bg-art: linear-gradient(90deg, #0000000d 1px, transparent 1px) 0 0 / calc(100% / 12) 100%, #FFFFFF;
  --shadow-card: none;
  --shadow-btn: none;
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0A0A0A;
    --surface: #0A0A0A;
    --surface-2: #1C1C1C;
    --text: #FFFFFF;
    --muted: #A8A8A8;
    --accent: #FF2D2D;
    --accent-hover: #FF5555;
    --on-accent: #000000;
    --accent-2: #FFFFFF;
    --border: #FFFFFF;
    --success: #2BD47A;
    --warning: #FFC233;
    --danger: #FF2D2D;
    --bg-art: linear-gradient(90deg, #ffffff12 1px, transparent 1px) 0 0 / calc(100% / 12) 100%, #0A0A0A;
    --shadow-card: none;
    --shadow-btn: none;
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #0A0A0A;
  --surface: #0A0A0A;
  --surface-2: #1C1C1C;
  --text: #FFFFFF;
  --muted: #A8A8A8;
  --accent: #FF2D2D;
  --accent-hover: #FF5555;
  --on-accent: #000000;
  --accent-2: #FFFFFF;
  --border: #FFFFFF;
  --success: #2BD47A;
  --warning: #FFC233;
  --danger: #FF2D2D;
  --bg-art: linear-gradient(90deg, #ffffff12 1px, transparent 1px) 0 0 / calc(100% / 12) 100%, #0A0A0A;
  --shadow-card: none;
  --shadow-btn: none;
  --shadow-inset: none;
}
```

### Komponenty bazowe korzystające ze zmiennych

```css
/* komponenty bazowe — działają z każdym stylem z tego zestawu */
body { background: var(--bg-art); color: var(--text); font-family: var(--font-body); }
h1, h2, h3 { font-family: var(--font-display); font-weight: var(--heading-weight);
  letter-spacing: var(--heading-tracking); text-transform: var(--heading-transform); }

.card { background: var(--surface); border: var(--border-w) solid var(--border);
  border-radius: var(--radius); box-shadow: var(--shadow-card); padding: 22px; }

.btn { font: 600 15px/1.2 var(--font-body); padding: 11px 18px; border-radius: var(--radius-btn);
  border: var(--border-w) solid transparent; box-shadow: var(--shadow-btn);
  text-transform: var(--btn-transform); letter-spacing: var(--btn-tracking);
  transition: transform .12s ease-out, background-color .2s; }
.btn:active { transform: scale(.97); }            /* reakcja na wciśnięcie, nie na puszczenie */
.btn-primary   { background: var(--accent); color: var(--on-accent); }
.btn-primary:hover { background: var(--accent-hover); }
.btn-secondary { background: var(--surface-2); color: var(--text); border-color: var(--border); }
.btn-ghost     { background: transparent; color: var(--accent); box-shadow: none; }

.input { background: var(--surface-2); color: var(--text); caret-color: var(--accent);
  border: var(--border-w) solid var(--border); border-radius: var(--radius-sm);
  box-shadow: var(--shadow-inset); padding: 11px 14px; min-height: 44px; }
.input::placeholder { color: var(--muted); }
.input:focus { outline: none; border-color: var(--accent);
  box-shadow: var(--shadow-inset), 0 0 0 4px color-mix(in srgb, var(--accent) 30%, transparent); }
```

## Rób ✅

- Wyrównanie do lewej, asymetria
- Ekstremalny kontrast rozmiarów typografii
- Jeden kolor akcentu

## Nie rób ❌

- Wyśrodkowane bloki tekstu
- Ozdobniki, cienie, gradienty
- Więcej niż 2 kroje
