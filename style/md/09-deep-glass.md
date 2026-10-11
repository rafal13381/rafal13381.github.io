# 09 · Deep Glass

> Dojrzałe szkło: neutralne przyciski, głęboka przestrzeń, materiał zamiast koloru.

Podgląd na żywo: `stylownik-pro.html#deep-light` oraz `stylownik-pro.html#deep-dark`.

## Charakter

Dojrzała wersja szklanego interfejsu w duchu interfejsów przestrzennych: materiał jest głównym bohaterem, a kolor schodzi na drugi plan. Przyciski główne są neutralne — grafitowe w jasnym trybie, białe w ciemnym — a niebieski zostaje tylko dla linków i zaznaczeń. Tło to głęboka, przestrzenna mgła barw, nad którą unoszą się mocno rozmyte panele z jasną krawędzią.

## Kiedy używać

Aplikacje premium, media i odtwarzacze, smart home, aplikacje AI/asystenci, interfejsy przestrzenne, ekrany „hero” produktów.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#E9EDF3` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `rgba(255,255,255,0.55)` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `rgba(120,120,128,0.12)` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#111114` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#5C5C66` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#1C1C1E` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#3A3A3C` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#0A6CFF` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `rgba(255,255,255,0.65)` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#248A3D` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#B25000` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#D70015` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#0B0D12` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `rgba(42,44,54,0.5)` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `rgba(255,255,255,0.08)` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#FFFFFF` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#A5A8B3` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#FFFFFF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#E8E8ED` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#000000` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#64A8FF` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `rgba(255,255,255,0.12)` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#30D158` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FFB340` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF6961` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `radial-gradient(60% 60% at 15% 10%, #CFE0F7 0%, transparent 60%), radial-gradient(55% 55% at 90% 15%, #F1DDEB 0%, transparent 60%), radial-gradient(60% 55% at 60% 100%, #D9EEE6 0%, transparent 60%), #E9EDF3` | `radial-gradient(70% 60% at 15% 0%, #23314F 0%, transparent 60%), radial-gradient(60% 55% at 100% 100%, #3B2442 0%, transparent 60%), radial-gradient(40% 40% at 70% 30%, #13303A 0%, transparent 70%), #0B0D12` |
| Cień karty | `--shadow-card` | `0 24px 60px -24px rgba(20,30,60,0.28), 0 2px 6px rgba(20,30,60,0.05)` | `0 30px 70px -24px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.3)` |
| Cień przycisku | `--shadow-btn` | `0 4px 14px -4px rgba(0,0,0,0.3)` | `0 4px 18px -4px rgba(255,255,255,0.25)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |
| Krawędź światła | `--edge` | `rgba(255,255,255,0.9)` | `rgba(255,255,255,0.16)` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 16.04:1 · AAA ✅ | 19.43:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.62:1 · AA ✅ | 8.19:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 17.01:1 · AAA ✅ | 21.00:1 · AAA ✅ |
| Akcent na tle (link) | 14.48:1 · AAA ✅ | 19.43:1 · AAA ✅ |
| Błąd na tle | 4.58:1 · AA ✅ | 6.89:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Font systemowy. Nagłówki 700 z −0.03em, tekst 15–17px. Na szkle podnieś wagę o stopień (500 zamiast 400) i używaj `muted` tylko dla treści drugorzędnej z kontrastem ≥ 4.5:1.

| Rola | Krój |
|---|---|
| Nagłówki | `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif` — waga 700, tracking -0.03em |
| Tekst | `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif` |
| Mono / dane | `"SF Mono", "JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking -0.01em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Bardzo duże promienie (28px panele), kontrolki i pola w kształcie pigułki. Panel = `backdrop-filter: blur(40px) saturate(180%)` + półprzezroczyste tło + wewnętrzna jasna krawędź u góry (`inset 0 1px 0`). Długi, miękki cień rzucany.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 28px |
| Promień pól `--radius-sm` | 14px |
| Promień przycisków `--radius-btn` | 999px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 24px 60px -24px rgba(20,30,60,0.28), 0 2px 6px rgba(20,30,60,0.05)` |
| Cień karty (ciemny) | `0 30px 70px -24px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.3)` |

## Jak wykonać komponenty

### Przycisk
Primary: neutralny — grafit #1C1C1E z białym tekstem (jasny) / biały z czarnym (ciemny), pigułka, cień rzucany. Secondary: szkło `surface2` bez ramki. Wciśnięcie: `scale(.97)` + lekkie rozjaśnienie.

### Pole tekstowe
Pigułka, tło `surface2` (szarość z alfą), bez ramki. Fokus: pierścień 3px z `accent2` (niebieski) w 35%.

### Widget / karta
Panel szklany, treść o wysokim kontraście. Aktywne elementy (zakładka, chip) jako jaśniejsze szkło, nie kolor. Wykres w `accent2`.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.panel {
  background: var(--surface);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow-card), inset 0 1px 0 var(--edge);
}
@media (prefers-reduced-transparency: reduce) {
  .panel { background: var(--bg); backdrop-filter: none; }
}
```

## Ruch i interakcja

Panele „materializują się”: animuj razem blur, skalę (0.96 → 1) i krycie. Sprężyny krytycznie tłumione, ~0.4s.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif;
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif;
  --font-mono: "SF Mono", "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 28px;
  --radius-sm: 14px;
  --radius-btn: 999px;
  --border-w: 1px;
  --heading-weight: 700;
  --heading-tracking: -0.03em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: -0.01em;
  /* kolory — tryb jasny */
  --bg: #E9EDF3;
  --surface: rgba(255,255,255,0.55);
  --surface-2: rgba(120,120,128,0.12);
  --text: #111114;
  --muted: #5C5C66;
  --accent: #1C1C1E;
  --accent-hover: #3A3A3C;
  --on-accent: #FFFFFF;
  --accent-2: #0A6CFF;
  --border: rgba(255,255,255,0.65);
  --success: #248A3D;
  --warning: #B25000;
  --danger: #D70015;
  --bg-art: radial-gradient(60% 60% at 15% 10%, #CFE0F7 0%, transparent 60%), radial-gradient(55% 55% at 90% 15%, #F1DDEB 0%, transparent 60%), radial-gradient(60% 55% at 60% 100%, #D9EEE6 0%, transparent 60%), #E9EDF3;
  --shadow-card: 0 24px 60px -24px rgba(20,30,60,0.28), 0 2px 6px rgba(20,30,60,0.05);
  --shadow-btn: 0 4px 14px -4px rgba(0,0,0,0.3);
  --shadow-inset: none;
  --edge: rgba(255,255,255,0.9);
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0B0D12;
    --surface: rgba(42,44,54,0.5);
    --surface-2: rgba(255,255,255,0.08);
    --text: #FFFFFF;
    --muted: #A5A8B3;
    --accent: #FFFFFF;
    --accent-hover: #E8E8ED;
    --on-accent: #000000;
    --accent-2: #64A8FF;
    --border: rgba(255,255,255,0.12);
    --success: #30D158;
    --warning: #FFB340;
    --danger: #FF6961;
    --bg-art: radial-gradient(70% 60% at 15% 0%, #23314F 0%, transparent 60%), radial-gradient(60% 55% at 100% 100%, #3B2442 0%, transparent 60%), radial-gradient(40% 40% at 70% 30%, #13303A 0%, transparent 70%), #0B0D12;
    --shadow-card: 0 30px 70px -24px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.3);
    --shadow-btn: 0 4px 18px -4px rgba(255,255,255,0.25);
    --shadow-inset: none;
    --edge: rgba(255,255,255,0.16);
  }
}
:root[data-theme="dark"] {
  --bg: #0B0D12;
  --surface: rgba(42,44,54,0.5);
  --surface-2: rgba(255,255,255,0.08);
  --text: #FFFFFF;
  --muted: #A5A8B3;
  --accent: #FFFFFF;
  --accent-hover: #E8E8ED;
  --on-accent: #000000;
  --accent-2: #64A8FF;
  --border: rgba(255,255,255,0.12);
  --success: #30D158;
  --warning: #FFB340;
  --danger: #FF6961;
  --bg-art: radial-gradient(70% 60% at 15% 0%, #23314F 0%, transparent 60%), radial-gradient(60% 55% at 100% 100%, #3B2442 0%, transparent 60%), radial-gradient(40% 40% at 70% 30%, #13303A 0%, transparent 70%), #0B0D12;
  --shadow-card: 0 30px 70px -24px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.3);
  --shadow-btn: 0 4px 18px -4px rgba(255,255,255,0.25);
  --shadow-inset: none;
  --edge: rgba(255,255,255,0.16);
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

- Neutralne przyciski główne
- Bogate tło pod szkłem
- Jasna krawędź u góry paneli

## Nie rób ❌

- Szkło na szkle bez zmiany grubości materiału
- Nasycone kolorowe przyciski
- Cienki szary tekst na rozmyciu
