# 01 · Graphite

> Natywna aplikacja desktopowa: systemowa szarość, jeden niebieski, zero hałasu.

Podgląd na żywo: `stylownik-pro.html#graphite-light` oraz `stylownik-pro.html#graphite-dark`.

## Charakter

Styl natywnej aplikacji desktopowej w duchu natywnych systemów desktopowych. Cała hierarchia opiera się na kilku stopniach neutralnej szarości (tło okna → powierzchnia → kontrolka) i jednym niebieskim akcencie dla akcji i zaznaczenia. Brak dekoracji — wrażenie jakości daje precyzja: równe odstępy, półpikselowe obramowania, systemowa typografia.

## Kiedy używać

Aplikacje produktywności, edytory, narzędzia desktopowe (Electron/Tauri), panele ustawień, klienci poczty i notatek. Bezpieczny „domyślny” styl dla każdego produktu, który ma wyglądać dojrzale.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F5F5F7` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F2F2F4` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#1D1D1F` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#6E6E73` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#0066CC` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#0058B0` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#8944AB` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#E3E3E8` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#248A3D` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#B25000` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#D70015` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#1C1C1E` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#2C2C2E` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#3A3A3C` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#F5F5F7` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#98989D` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#0A6CFF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#3D8BFF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#BF5AF2` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#38383A` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#30D158` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FF9F0A` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF453A` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#F5F5F7` | `#1C1C1E` |
| Cień karty | `--shadow-card` | `0 0 0 0.5px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.05), 0 8px 24px -10px rgba(0,0,0,0.10)` | `0 0 0 0.5px rgba(255,255,255,0.06), 0 10px 30px -10px rgba(0,0,0,0.6)` |
| Cień przycisku | `--shadow-btn` | `0 0.5px 1px rgba(0,0,0,0.12)` | `0 0.5px 1px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(255,255,255,0.08)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 15.46:1 · AAA ✅ | 15.63:1 · AAA ✅ |
| Tekst drugorzędny na tle | 4.66:1 · AA ✅ | 5.93:1 · AA ✅ |
| Tekst na akcencie (przycisk) | 5.57:1 · AA ✅ | 4.56:1 · AA ✅ |
| Akcent na tle (link) | 5.11:1 · AA ✅ | 3.73:1 · AA tylko duży tekst ⚠️ |
| Błąd na tle | 4.94:1 · AA ✅ | 4.99:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Font systemowy (Inter jako zamiennik). Nagłówki 600 z trackingiem −0.022em; tekst 400, 15px/1.5. Etykiety kontrolek 500. Nie mieszaj więcej niż 3 rozmiarów na jednym ekranie.

| Rola | Krój |
|---|---|
| Nagłówki | `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif` — waga 600, tracking -0.022em |
| Tekst | `-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif` |
| Mono / dane | `"SF Mono", "JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking -0.005em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Karty 12px, kontrolki 8px. Obramowanie 1px w bardzo jasnej szarości plus delikatny cień 0.5px — razem dają „ostrą” krawędź jak w natywnych oknach. W trybie ciemnym powierzchnie jaśnieją wraz z elewacją (#1C1C1E → #2C2C2E → #3A3A3C), zamiast rzucać cień.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 12px |
| Promień pól `--radius-sm` | 8px |
| Promień przycisków `--radius-btn` | 8px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 0 0 0.5px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.05), 0 8px 24px -10px rgba(0,0,0,0.10)` |
| Cień karty (ciemny) | `0 0 0 0.5px rgba(255,255,255,0.06), 0 10px 30px -10px rgba(0,0,0,0.6)` |

## Jak wykonać komponenty

### Przycisk
Primary: `accent`, biały tekst, promień 8px, wysokość 32–36px. Secondary: białe tło `surface` + ramka `border` + cień 0.5px (wygląda jak natywny „push button”). Wciśnięcie: przyciemnienie tła na `pointerdown`, bez skalowania powyżej 0.98.

### Pole tekstowe
Tło `surface`, ramka 1px `border`, promień 8px. Fokus: pierścień 3–4px z akcentu w 30% krycia — to sygnatura natywnych aplikacji desktopowych. Placeholder w `muted`.

### Widget / karta
Biała karta z cieniem warstwowym. Nagłówek widgetu 13px/600, wartość kluczowa duża (36px/600) z cyframi tabelarycznymi. Wykresy w akcencie, druga seria w `accent2` przerywaną linią.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
/* Fokus jak w natywnej aplikacji */
.input:focus, .btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 30%, transparent);
  border-color: var(--accent);
}
/* Elewacja w trybie ciemnym = jaśniejsza powierzchnia, nie cień */
[data-theme="dark"] .card { background: #2C2C2E; }
[data-theme="dark"] .card .control { background: #3A3A3C; }
```

## Ruch i interakcja

Sprężyny krytycznie tłumione (bez odbicia), response ~0.3s. Arkusze i popovery wychodzą z elementu, który je wywołał (`transform-origin`).

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif;
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif;
  --font-mono: "SF Mono", "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 12px;
  --radius-sm: 8px;
  --radius-btn: 8px;
  --border-w: 1px;
  --heading-weight: 600;
  --heading-tracking: -0.022em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: -0.005em;
  /* kolory — tryb jasny */
  --bg: #F5F5F7;
  --surface: #FFFFFF;
  --surface-2: #F2F2F4;
  --text: #1D1D1F;
  --muted: #6E6E73;
  --accent: #0066CC;
  --accent-hover: #0058B0;
  --on-accent: #FFFFFF;
  --accent-2: #8944AB;
  --border: #E3E3E8;
  --success: #248A3D;
  --warning: #B25000;
  --danger: #D70015;
  --bg-art: #F5F5F7;
  --shadow-card: 0 0 0 0.5px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.05), 0 8px 24px -10px rgba(0,0,0,0.10);
  --shadow-btn: 0 0.5px 1px rgba(0,0,0,0.12);
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #1C1C1E;
    --surface: #2C2C2E;
    --surface-2: #3A3A3C;
    --text: #F5F5F7;
    --muted: #98989D;
    --accent: #0A6CFF;
    --accent-hover: #3D8BFF;
    --on-accent: #FFFFFF;
    --accent-2: #BF5AF2;
    --border: #38383A;
    --success: #30D158;
    --warning: #FF9F0A;
    --danger: #FF453A;
    --bg-art: #1C1C1E;
    --shadow-card: 0 0 0 0.5px rgba(255,255,255,0.06), 0 10px 30px -10px rgba(0,0,0,0.6);
    --shadow-btn: 0 0.5px 1px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(255,255,255,0.08);
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #1C1C1E;
  --surface: #2C2C2E;
  --surface-2: #3A3A3C;
  --text: #F5F5F7;
  --muted: #98989D;
  --accent: #0A6CFF;
  --accent-hover: #3D8BFF;
  --on-accent: #FFFFFF;
  --accent-2: #BF5AF2;
  --border: #38383A;
  --success: #30D158;
  --warning: #FF9F0A;
  --danger: #FF453A;
  --bg-art: #1C1C1E;
  --shadow-card: 0 0 0 0.5px rgba(255,255,255,0.06), 0 10px 30px -10px rgba(0,0,0,0.6);
  --shadow-btn: 0 0.5px 1px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(255,255,255,0.08);
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

- Jeden akcent dla akcji i zaznaczenia
- Elewacja w ciemnym trybie przez jaśniejsze powierzchnie
- Cyfry tabelaryczne w liczbach

## Nie rób ❌

- Kolorowe tła sekcji
- Grube ramki i ciężkie cienie
- Wiele odcieni niebieskiego naraz
