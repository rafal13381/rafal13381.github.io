# 01 · Frosted Glass

> Półprzezroczyste warstwy, miękkie światło, systemowa precyzja.

Podgląd na żywo: `stylownik.html#frosted-light` oraz `stylownik.html#frosted-dark`.

## Charakter

Styl inspirowany materiałami nowoczesnych systemów operacyjnych: interfejs to unosząca się, półprzezroczysta warstwa funkcjonalna nad treścią. Hierarchię buduje się grubością materiału (rozmycie + cień), a nie liniami i ramkami. Kolor jest oszczędny — jeden niebieski akcent dla akcji, reszta to neutralne szarości systemowe.

## Kiedy używać

Aplikacje produktowe, dashboardy premium, narzędzia „spokojne”, landing pages produktów sprzętowych. Unikaj przy bardzo gęstych tabelach danych — półprzezroczystość obniża czytelność przy dużej ilości tekstu.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F2F2F7` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `rgba(255,255,255,0.62)` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `rgba(118,118,128,0.12)` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#1D1D1F` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#6E6E73` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#0066CC` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#0058B0` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#AF52DE` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `rgba(255,255,255,0.75)` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#34C759` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FF9F0A` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF3B30` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#000000` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `rgba(44,44,46,0.55)` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `rgba(118,118,128,0.24)` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#F5F5F7` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#98989D` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#0A6CFF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#3D8BFF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#BF5AF2` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `rgba(255,255,255,0.12)` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#30D158` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FF9F0A` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF453A` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `radial-gradient(60% 50% at 15% 10%, #A9CBFF 0%, transparent 60%), radial-gradient(50% 45% at 90% 5%, #FFC9E3 0%, transparent 60%), radial-gradient(55% 50% at 75% 95%, #BDF2DA 0%, transparent 60%), #F2F2F7` | `radial-gradient(60% 50% at 15% 10%, #0B2E6B 0%, transparent 60%), radial-gradient(50% 45% at 90% 5%, #4A1340 0%, transparent 60%), radial-gradient(55% 50% at 75% 95%, #0C3B2B 0%, transparent 60%), #000000` |
| Cień karty | `--shadow-card` | `0 1px 1px rgba(0,0,0,0.04), 0 12px 40px -8px rgba(30,40,80,0.18)` | `0 1px 1px rgba(0,0,0,0.3), 0 16px 48px -8px rgba(0,0,0,0.6)` |
| Cień przycisku | `--shadow-btn` | `0 1px 2px rgba(0,0,0,0.08)` | `0 1px 2px rgba(0,0,0,0.4)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |
| Krawędź światła | `--edge` | `rgba(255,255,255,0.9)` | `rgba(255,255,255,0.18)` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 15.08:1 · AAA ✅ | 19.29:1 · AAA ✅ |
| Tekst drugorzędny na tle | 4.54:1 · AA ✅ | 7.31:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 5.57:1 · AA ✅ | 4.56:1 · AA ✅ |
| Akcent na tle (link) | 4.99:1 · AA ✅ | 4.60:1 · AA ✅ |
| Błąd na tle | 3.18:1 · AA tylko duży tekst ⚠️ | 6.16:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Font systemowy (Inter jako zamiennik). Nagłówki 700 z ujemnym trackingiem (−0.025em), tekst główny 400/1.5 z trackingiem 0. Hierarchię buduj wagą + rozmiarem + interlinią jednocześnie. Na szkle podnieś wagę tekstu o jeden stopień (np. 500 zamiast 400), żeby zachować kontrast przez rozmycie.

| Rola | Krój |
|---|---|
| Nagłówki | `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif` — waga 700, tracking -0.025em |
| Tekst | `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif` |
| Mono / dane | `"SF Mono", "JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking -0.01em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Duże promienie (22px karty, 12px pola), przyciski w kształcie pigułki. Ramka 1px w kolorze jasnej krawędzi — imituje światło łapane przez górną krawędź szkła. Cień miękki, szeroki i nisko nasycony.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 22px |
| Promień pól `--radius-sm` | 12px |
| Promień przycisków `--radius-btn` | 999px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 1px 1px rgba(0,0,0,0.04), 0 12px 40px -8px rgba(30,40,80,0.18)` |
| Cień karty (ciemny) | `0 1px 1px rgba(0,0,0,0.3), 0 16px 48px -8px rgba(0,0,0,0.6)` |

## Jak wykonać komponenty

### Przycisk
Primary: pełny kolor `accent`, tekst biały, pigułka, reakcja na wciśnięcie `scale(0.97)` w 100ms na `pointerdown`. Secondary: tło `surface2` (szarość systemowa z alfą), tekst `text`. Ghost: tylko tekst w kolorze `accent`.

### Pole tekstowe
Tło `surface2`, brak widocznej ramki w spoczynku, promień 12px. Fokus: pierścień 3–4px z akcentu w 30% krycia. Placeholder w `muted`.

### Widget / karta
Karta = materiał: `background: surface` + `backdrop-filter: blur(28px) saturate(180%)` + ramka `edge` 1px u góry. Treść przewija się pod spodem. Nie kładź jasnego szkła na jasnym szkle.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.card {
  background: var(--surface);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card), inset 0 1px 0 var(--edge);
}
@media (prefers-reduced-transparency: reduce) {
  .card { background: var(--bg); backdrop-filter: none; }
}
```

## Ruch i interakcja

Sprężyny krytycznie tłumione (damping 1.0, response ~0.35s) dla przejść; lekki bounce tylko po geście z pędem (rzut arkusza). Pojawianie się materiału: animuj razem blur i skalę, nie samą przezroczystość.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif;
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif;
  --font-mono: "SF Mono", "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 22px;
  --radius-sm: 12px;
  --radius-btn: 999px;
  --border-w: 1px;
  --heading-weight: 700;
  --heading-tracking: -0.025em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: -0.01em;
  /* kolory — tryb jasny */
  --bg: #F2F2F7;
  --surface: rgba(255,255,255,0.62);
  --surface-2: rgba(118,118,128,0.12);
  --text: #1D1D1F;
  --muted: #6E6E73;
  --accent: #0066CC;
  --accent-hover: #0058B0;
  --on-accent: #FFFFFF;
  --accent-2: #AF52DE;
  --border: rgba(255,255,255,0.75);
  --success: #34C759;
  --warning: #FF9F0A;
  --danger: #FF3B30;
  --bg-art: radial-gradient(60% 50% at 15% 10%, #A9CBFF 0%, transparent 60%), radial-gradient(50% 45% at 90% 5%, #FFC9E3 0%, transparent 60%), radial-gradient(55% 50% at 75% 95%, #BDF2DA 0%, transparent 60%), #F2F2F7;
  --shadow-card: 0 1px 1px rgba(0,0,0,0.04), 0 12px 40px -8px rgba(30,40,80,0.18);
  --shadow-btn: 0 1px 2px rgba(0,0,0,0.08);
  --shadow-inset: none;
  --edge: rgba(255,255,255,0.9);
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #000000;
    --surface: rgba(44,44,46,0.55);
    --surface-2: rgba(118,118,128,0.24);
    --text: #F5F5F7;
    --muted: #98989D;
    --accent: #0A6CFF;
    --accent-hover: #3D8BFF;
    --on-accent: #FFFFFF;
    --accent-2: #BF5AF2;
    --border: rgba(255,255,255,0.12);
    --success: #30D158;
    --warning: #FF9F0A;
    --danger: #FF453A;
    --bg-art: radial-gradient(60% 50% at 15% 10%, #0B2E6B 0%, transparent 60%), radial-gradient(50% 45% at 90% 5%, #4A1340 0%, transparent 60%), radial-gradient(55% 50% at 75% 95%, #0C3B2B 0%, transparent 60%), #000000;
    --shadow-card: 0 1px 1px rgba(0,0,0,0.3), 0 16px 48px -8px rgba(0,0,0,0.6);
    --shadow-btn: 0 1px 2px rgba(0,0,0,0.4);
    --shadow-inset: none;
    --edge: rgba(255,255,255,0.18);
  }
}
:root[data-theme="dark"] {
  --bg: #000000;
  --surface: rgba(44,44,46,0.55);
  --surface-2: rgba(118,118,128,0.24);
  --text: #F5F5F7;
  --muted: #98989D;
  --accent: #0A6CFF;
  --accent-hover: #3D8BFF;
  --on-accent: #FFFFFF;
  --accent-2: #BF5AF2;
  --border: rgba(255,255,255,0.12);
  --success: #30D158;
  --warning: #FF9F0A;
  --danger: #FF453A;
  --bg-art: radial-gradient(60% 50% at 15% 10%, #0B2E6B 0%, transparent 60%), radial-gradient(50% 45% at 90% 5%, #4A1340 0%, transparent 60%), radial-gradient(55% 50% at 75% 95%, #0C3B2B 0%, transparent 60%), #000000;
  --shadow-card: 0 1px 1px rgba(0,0,0,0.3), 0 16px 48px -8px rgba(0,0,0,0.6);
  --shadow-btn: 0 1px 2px rgba(0,0,0,0.4);
  --shadow-inset: none;
  --edge: rgba(255,255,255,0.18);
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

- Jeden akcent na ekran — niebieski = akcja
- Kolorowe tło pod szkłem, żeby materiał miał co rozmywać
- Respektuj `prefers-reduced-transparency`

## Nie rób ❌

- Szare 1px separatory zamiast przestrzeni
- Szkło na szkle (spada czytelność)
- Cienki szary tekst na rozmyciu
