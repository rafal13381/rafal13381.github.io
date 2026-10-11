# 03 · Neo-Brutalizm

> Grube kontury, twarde cienie, kolor bez kompromisów.

Podgląd na żywo: `stylownik.html#brutal-light` oraz `stylownik.html#brutal-dark`.

## Charakter

Szczery, głośny i celowo „surowy”. Każdy element ma gruby czarny kontur i twardy cień bez rozmycia przesunięty o kilka pikseli — jakby wycięty z papieru i przyklejony. Kolory są płaskie, nasycone, bez gradientów. Wciśnięcie przycisku dosłownie „wbija” go w cień.

## Kiedy używać

Marki kreatywne, startupy chcące się wyróżnić, portfolio, narzędzia dla twórców, kampanie. Unikaj w bankowości, medycynie i wszędzie, gdzie potrzebny spokój i zaufanie.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#FFF4E0` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#FFE8A3` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#111111` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#3D3D3D` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#FFD23F` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#FFC300` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#111111` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#4D96FF` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#111111` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#00C281` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FF9F1C` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF4D4D` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#141414` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#1F1F1F` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#2B2B2B` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#F5F5F0` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#C2C2B8` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#FFD23F` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#FFDF6E` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#111111` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#7AB8FF` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#F5F5F0` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#2EE6A6` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FFB54D` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF6B6B` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `radial-gradient(#11111122 1.5px, transparent 1.6px) 0 0 / 22px 22px, #FFF4E0` | `radial-gradient(#F5F5F01f 1.5px, transparent 1.6px) 0 0 / 22px 22px, #141414` |
| Cień karty | `--shadow-card` | `6px 6px 0 #111111` | `6px 6px 0 #FFD23F` |
| Cień przycisku | `--shadow-btn` | `4px 4px 0 #111111` | `4px 4px 0 #F5F5F0` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |
| Kolor twardego cienia | `--hard` | `#111111` | `#F5F5F0` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 17.33:1 · AAA ✅ | 16.84:1 · AAA ✅ |
| Tekst drugorzędny na tle | 9.97:1 · AAA ✅ | 10.27:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 13.08:1 · AAA ✅ | 13.08:1 · AAA ✅ |
| Akcent na tle (link) | 1.32:1 · za niski ❌ | 12.76:1 · AAA ✅ |
| Błąd na tle | 3.00:1 · AA tylko duży tekst ⚠️ | 6.64:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Nagłówki: Archivo Black, WERSALIKI, ciasny tracking. Tekst: Space Grotesk 400/500 — techniczny, lekko „dziwny” grotesk. Etykiety przycisków wersalikami z +0.03em.

| Rola | Krój |
|---|---|
| Nagłówki | `"Archivo Black", "Space Grotesk", sans-serif` — waga 400, tracking -0.01em, uppercase |
| Tekst | `"Space Grotesk", system-ui, sans-serif` |
| Mono / dane | `"Space Mono", ui-monospace, monospace` |
| Przyciski | tracking 0.03em, uppercase |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Archivo+Black&display=swap">
```

## Kształt, obramowanie, głębia

Ramka 3px w kolorze `border` (czarna w jasnym, kremowa w ciemnym). Promień mały (6px) albo 0. Cień: `6px 6px 0` bez rozmycia — w trybie ciemnym cień kart zmienia się na żółty akcent, bo czarny zniknąłby na tle.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 6px |
| Promień pól `--radius-sm` | 6px |
| Promień przycisków `--radius-btn` | 6px |
| Grubość ramki `--border-w` | 3px |
| Cień karty (jasny) | `6px 6px 0 #111111` |
| Cień karty (ciemny) | `6px 6px 0 #FFD23F` |

## Jak wykonać komponenty

### Przycisk
Primary: żółty `accent`, czarny tekst, ramka 3px, cień `4px 4px 0`. Na `:active` przesuń o `translate(4px, 4px)` i usuń cień — przycisk „wpada” w miejsce cienia. Secondary: białe tło z ramką. Ghost: podkreślenie 3px.

### Pole tekstowe
Białe tło (`surface`), ramka 3px, promień 6px, bez cienia w spoczynku. Fokus: pojawia się twardy cień `4px 4px 0` w kolorze `accent2` (niebieski).

### Widget / karta
Karta z ramką 3px i cieniem 6px. Nagłówek widgetu na pasku w kolorze akcentu z dolną ramką 3px. Wykresy: słupki z czarnym konturem, płaskie wypełnienia.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.btn {
  border: 3px solid var(--border);
  box-shadow: 4px 4px 0 var(--hard);
  transition: transform 80ms, box-shadow 80ms;
}
.btn:active {
  transform: translate(4px, 4px);
  box-shadow: 0 0 0 var(--hard);
}
```

## Ruch i interakcja

Krótko i mechanicznie: 60–100ms, bez sprężyn i bez easingu „premium”. Ruch ma być jak klik przełącznika.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-display: "Archivo Black", "Space Grotesk", sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 6px;
  --radius-sm: 6px;
  --radius-btn: 6px;
  --border-w: 3px;
  --heading-weight: 400;
  --heading-tracking: -0.01em;
  --heading-transform: uppercase;
  --btn-transform: uppercase;
  --btn-tracking: 0.03em;
  /* kolory — tryb jasny */
  --bg: #FFF4E0;
  --surface: #FFFFFF;
  --surface-2: #FFE8A3;
  --text: #111111;
  --muted: #3D3D3D;
  --accent: #FFD23F;
  --accent-hover: #FFC300;
  --on-accent: #111111;
  --accent-2: #4D96FF;
  --border: #111111;
  --success: #00C281;
  --warning: #FF9F1C;
  --danger: #FF4D4D;
  --bg-art: radial-gradient(#11111122 1.5px, transparent 1.6px) 0 0 / 22px 22px, #FFF4E0;
  --shadow-card: 6px 6px 0 #111111;
  --shadow-btn: 4px 4px 0 #111111;
  --shadow-inset: none;
  --hard: #111111;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #141414;
    --surface: #1F1F1F;
    --surface-2: #2B2B2B;
    --text: #F5F5F0;
    --muted: #C2C2B8;
    --accent: #FFD23F;
    --accent-hover: #FFDF6E;
    --on-accent: #111111;
    --accent-2: #7AB8FF;
    --border: #F5F5F0;
    --success: #2EE6A6;
    --warning: #FFB54D;
    --danger: #FF6B6B;
    --bg-art: radial-gradient(#F5F5F01f 1.5px, transparent 1.6px) 0 0 / 22px 22px, #141414;
    --shadow-card: 6px 6px 0 #FFD23F;
    --shadow-btn: 4px 4px 0 #F5F5F0;
    --shadow-inset: none;
    --hard: #F5F5F0;
  }
}
:root[data-theme="dark"] {
  --bg: #141414;
  --surface: #1F1F1F;
  --surface-2: #2B2B2B;
  --text: #F5F5F0;
  --muted: #C2C2B8;
  --accent: #FFD23F;
  --accent-hover: #FFDF6E;
  --on-accent: #111111;
  --accent-2: #7AB8FF;
  --border: #F5F5F0;
  --success: #2EE6A6;
  --warning: #FFB54D;
  --danger: #FF6B6B;
  --bg-art: radial-gradient(#F5F5F01f 1.5px, transparent 1.6px) 0 0 / 22px 22px, #141414;
  --shadow-card: 6px 6px 0 #FFD23F;
  --shadow-btn: 4px 4px 0 #F5F5F0;
  --shadow-inset: none;
  --hard: #F5F5F0;
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

- Twarde cienie bez rozmycia
- Płaskie, nasycone kolory
- Wersaliki w nagłówkach

## Nie rób ❌

- Żółty akcent jako kolor tekstu — ma kontrast ~1.3:1, służy tylko jako wypełnienie
- Gradienty i rozmyte cienie
- Cienkie, szare ramki
- Zbyt wiele kolorów na raz — max 2 akcenty
