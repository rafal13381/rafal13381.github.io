# 02 · Tonal Seed

> Kolor tonalny z jednego ziarna, przyjazne kształty, wyraźne stany.

Podgląd na żywo: `stylownik.html#tonal-light` oraz `stylownik.html#tonal-dark`.

## Charakter

Styl oparty o system tonalny: cała paleta wynika z jednego koloru-ziarna (tu fiolet #6750A4), z którego generuje się tony 0–100. Powierzchnie różnią się delikatnym zabarwieniem („surface container”), a nie cieniem. Komponenty są duże, zaokrąglone i mają czytelne warstwy stanów (hover/pressed = nakładka koloru z alfą).

## Kiedy używać

Aplikacje mobilne i webowe dla szerokiego grona odbiorców, panele administracyjne, produkty z personalizacją koloru. Unikaj, gdy marka wymaga ostrego, „luksusowego” charakteru.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#FEF7FF` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#F3EDF7` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#E8DEF8` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#1D1B20` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#49454F` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#6750A4` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#7965AF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#7D5260` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#CAC4D0` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#386A20` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#7D5700` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#B3261E` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#141218` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#211F26` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#4A4458` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#E6E0E9` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#CAC4D0` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#D0BCFF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#E0D2FF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#381E72` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#EFB8C8` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#49454F` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#9CD67D` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#F8BD47` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#F2B8B5` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#FEF7FF` | `#141218` |
| Cień karty | `--shadow-card` | `none` | `none` |
| Cień przycisku | `--shadow-btn` | `none` | `none` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |
| Kontur pól | `--outline` | `#79747E` | `#938F99` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 16.23:1 · AAA ✅ | 14.35:1 · AAA ✅ |
| Tekst drugorzędny na tle | 8.88:1 · AAA ✅ | 10.91:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 6.44:1 · AA ✅ | 7.71:1 · AAA ✅ |
| Akcent na tle (link) | 6.12:1 · AA ✅ | 10.91:1 · AAA ✅ |
| Błąd na tle | 6.21:1 · AA ✅ | 10.89:1 · AAA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Roboto Flex (oś optyczna `opsz` dopasowuje kształt do rozmiaru). Nagłówki 400–500 (styl nie krzyczy wagą), tracking lekko ujemny w dużych rozmiarach, etykiety przycisków 500 z +0.01em.

| Rola | Krój |
|---|---|
| Nagłówki | `"Roboto Flex", "Roboto", system-ui, sans-serif` — waga 500, tracking -0.01em |
| Tekst | `"Roboto Flex", "Roboto", system-ui, sans-serif` |
| Mono / dane | `"Roboto Mono", ui-monospace, monospace` |
| Przyciski | tracking 0.01em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,500;8..144,600&display=swap">
```

## Kształt, obramowanie, głębia

Karty 28px (extra-large), przyciski pełna pigułka, pola tekstowe 4px (outlined). Głębia przez tonalny kolor powierzchni, nie przez cień. Ramka tylko w polach i kartach typu outlined.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 28px |
| Promień pól `--radius-sm` | 4px |
| Promień przycisków `--radius-btn` | 999px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `none` |
| Cień karty (ciemny) | `none` |

## Jak wykonać komponenty

### Przycisk
Filled: `accent` + `onAccent`. Tonal (secondary): `surface2` (secondary container) + `text`. Text button: przezroczysty, kolor `accent`. Hover = nakładka 8% koloru tekstu, pressed = 12%.

### Pole tekstowe
Outlined: tło przezroczyste, ramka 1px `outline`, promień 4px. Fokus: ramka 2px w `accent`, etykieta w kolorze akcentu. Tekst pomocniczy pod spodem w `muted`.

### Widget / karta
Karta „filled”: tło `surface`, promień 28px, bez cienia i ramki. Elementy wewnątrz (chipy, tracki) na `surface2`. Akcent tylko dla wartości kluczowej.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.btn { position: relative; overflow: hidden; }
.btn::after { /* warstwa stanu */
  content: ""; position: absolute; inset: 0;
  background: currentColor; opacity: 0;
  transition: opacity 150ms;
}
.btn:hover::after  { opacity: .08; }
.btn:active::after { opacity: .12; }
```

## Ruch i interakcja

Emphasized easing `cubic-bezier(0.2, 0, 0, 1)` ~300–500ms dla przejść kontenerów; wejścia z miejsca wyzwolenia (transform-origin na przycisku).

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Roboto Flex", "Roboto", system-ui, sans-serif;
  --font-display: "Roboto Flex", "Roboto", system-ui, sans-serif;
  --font-mono: "Roboto Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 28px;
  --radius-sm: 4px;
  --radius-btn: 999px;
  --border-w: 1px;
  --heading-weight: 500;
  --heading-tracking: -0.01em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: 0.01em;
  /* kolory — tryb jasny */
  --bg: #FEF7FF;
  --surface: #F3EDF7;
  --surface-2: #E8DEF8;
  --text: #1D1B20;
  --muted: #49454F;
  --accent: #6750A4;
  --accent-hover: #7965AF;
  --on-accent: #FFFFFF;
  --accent-2: #7D5260;
  --border: #CAC4D0;
  --success: #386A20;
  --warning: #7D5700;
  --danger: #B3261E;
  --bg-art: #FEF7FF;
  --shadow-card: none;
  --shadow-btn: none;
  --shadow-inset: none;
  --outline: #79747E;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #141218;
    --surface: #211F26;
    --surface-2: #4A4458;
    --text: #E6E0E9;
    --muted: #CAC4D0;
    --accent: #D0BCFF;
    --accent-hover: #E0D2FF;
    --on-accent: #381E72;
    --accent-2: #EFB8C8;
    --border: #49454F;
    --success: #9CD67D;
    --warning: #F8BD47;
    --danger: #F2B8B5;
    --bg-art: #141218;
    --shadow-card: none;
    --shadow-btn: none;
    --shadow-inset: none;
    --outline: #938F99;
  }
}
:root[data-theme="dark"] {
  --bg: #141218;
  --surface: #211F26;
  --surface-2: #4A4458;
  --text: #E6E0E9;
  --muted: #CAC4D0;
  --accent: #D0BCFF;
  --accent-hover: #E0D2FF;
  --on-accent: #381E72;
  --accent-2: #EFB8C8;
  --border: #49454F;
  --success: #9CD67D;
  --warning: #F8BD47;
  --danger: #F2B8B5;
  --bg-art: #141218;
  --shadow-card: none;
  --shadow-btn: none;
  --shadow-inset: none;
  --outline: #938F99;
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

- Generuj paletę z jednego ziarna (generatorem palet tonalnych)
- Różnicuj powierzchnie tonem, nie cieniem
- Stosuj warstwy stanu zamiast zmiany koloru tła

## Nie rób ❌

- Czysta biel #FFF jako tło — używaj zabarwionej
- Mieszanie wielu nasyconych akcentów
- Ostre narożniki na przyciskach
