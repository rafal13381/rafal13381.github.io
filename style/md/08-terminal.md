# 08 · Terminal

> Fosfor, monospace i nawiasy — interfejs jak konsola.

Podgląd na żywo: `stylownik.html#terminal-light` oraz `stylownik.html#terminal-dark`.

## Charakter

Interfejs udaje terminal: wszystko w kroju monospace, przyciski w nawiasach `[ OK ]`, nagłówki poprzedzone znakiem zachęty `>`, migający kursor. W trybie ciemnym — zielony fosfor monitora CRT z delikatną poświatą i liniami skanowania. W jasnym — wydruk na papierze z perforacją (pasy jak na papierze komputerowym).

## Kiedy używać

Narzędzia deweloperskie, CLI-docs, strony hackathonów, portfolio programistów, retro-gry. Unikaj dla nietechnicznych odbiorców i długiego tekstu literackiego.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F4F1E6` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FBF9F1` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#ECE7D6` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#1C2A1C` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#5A6653` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#1A7F1A` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#146614` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#F4F1E6` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#A35F00` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#B9B39D` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#1A7F1A` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A35F00` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#B42318` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#0A0F0A` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#0E160E` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#132013` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#A6F5A0` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#5FA05B` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#39FF14` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#7CFF5E` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#0A0F0A` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#FFB000` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#1F4D1F` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#39FF14` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FFB000` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF5F56` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `repeating-linear-gradient(#F4F1E6 0 26px, #EDF2E1 26px 52px)` | `radial-gradient(80% 70% at 50% 40%, #0F1F0F, #050805)` |
| Cień karty | `--shadow-card` | `none` | `none` |
| Cień przycisku | `--shadow-btn` | `none` | `0 0 14px rgba(57,255,20,0.35)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |
| Poświata | `--glow` | `none` | `0 0 8px rgba(57,255,20,0.45)` |
| Linie skanowania | `--scan` | `transparent` | `rgba(0,0,0,0.22)` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 13.29:1 · AAA ✅ | 14.91:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.37:1 · AA ✅ | 6.14:1 · AA ✅ |
| Tekst na akcencie (przycisk) | 4.54:1 · AA ✅ | 14.27:1 · AAA ✅ |
| Akcent na tle (link) | 4.54:1 · AA ✅ | 14.27:1 · AAA ✅ |
| Błąd na tle | 5.81:1 · AA ✅ | 6.47:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

JetBrains Mono wszędzie. Nagłówki 800 WERSALIKAMI, tekst 400, interlinia 1.6. W trybie ciemnym `text-shadow` z zieloną poświatą imituje świecący fosfor.

| Rola | Krój |
|---|---|
| Nagłówki | `"JetBrains Mono", ui-monospace, monospace` — waga 800, tracking -0.02em, uppercase |
| Tekst | `"JetBrains Mono", ui-monospace, monospace` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking 0.04em, uppercase |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap">
```

## Kształt, obramowanie, głębia

Zero zaokrągleń, ramki 1px (w ciemnym: ciemna zieleń), brak cieni. Struktura jak okna TUI: ramka + tytuł w nagłówku.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 0px |
| Promień pól `--radius-sm` | 0px |
| Promień przycisków `--radius-btn` | 0px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `none` |
| Cień karty (ciemny) | `none` |

## Jak wykonać komponenty

### Przycisk
Primary: odwrócone kolory (zielone tło, czarny tekst) + `[ ]` dodane przez `::before/::after`. Secondary: ramka 1px, tekst zielony. Hover: inwersja kolorów — jak zaznaczenie w terminalu.

### Pole tekstowe
Tło `surface2`, ramka 1px, prefiks `$` przed polem, caret blokowy w kolorze akcentu (`caret-color`). Fokus: ramka w `accent`.

### Widget / karta
Okno z paskiem tytułu `┌─ STATUS ─┐`, wykres jako ASCII-like słupki (bloki), postęp jako `[██████░░░░] 62%`.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.btn::before { content: "[ "; }
.btn::after  { content: " ]"; }
.cursor::after {
  content: "█"; animation: blink 1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0; } }
.screen::after { /* linie skanowania */
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: repeating-linear-gradient(transparent 0 2px, var(--scan) 2px 3px);
}
```

## Ruch i interakcja

Natychmiastowe zmiany (steps), żadnych easingów. Migający kursor wyłącz przy `prefers-reduced-motion`.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "JetBrains Mono", ui-monospace, monospace;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 0px;
  --radius-sm: 0px;
  --radius-btn: 0px;
  --border-w: 1px;
  --heading-weight: 800;
  --heading-tracking: -0.02em;
  --heading-transform: uppercase;
  --btn-transform: uppercase;
  --btn-tracking: 0.04em;
  /* kolory — tryb jasny */
  --bg: #F4F1E6;
  --surface: #FBF9F1;
  --surface-2: #ECE7D6;
  --text: #1C2A1C;
  --muted: #5A6653;
  --accent: #1A7F1A;
  --accent-hover: #146614;
  --on-accent: #F4F1E6;
  --accent-2: #A35F00;
  --border: #B9B39D;
  --success: #1A7F1A;
  --warning: #A35F00;
  --danger: #B42318;
  --bg-art: repeating-linear-gradient(#F4F1E6 0 26px, #EDF2E1 26px 52px);
  --shadow-card: none;
  --shadow-btn: none;
  --shadow-inset: none;
  --glow: none;
  --scan: transparent;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0A0F0A;
    --surface: #0E160E;
    --surface-2: #132013;
    --text: #A6F5A0;
    --muted: #5FA05B;
    --accent: #39FF14;
    --accent-hover: #7CFF5E;
    --on-accent: #0A0F0A;
    --accent-2: #FFB000;
    --border: #1F4D1F;
    --success: #39FF14;
    --warning: #FFB000;
    --danger: #FF5F56;
    --bg-art: radial-gradient(80% 70% at 50% 40%, #0F1F0F, #050805);
    --shadow-card: none;
    --shadow-btn: 0 0 14px rgba(57,255,20,0.35);
    --shadow-inset: none;
    --glow: 0 0 8px rgba(57,255,20,0.45);
    --scan: rgba(0,0,0,0.22);
  }
}
:root[data-theme="dark"] {
  --bg: #0A0F0A;
  --surface: #0E160E;
  --surface-2: #132013;
  --text: #A6F5A0;
  --muted: #5FA05B;
  --accent: #39FF14;
  --accent-hover: #7CFF5E;
  --on-accent: #0A0F0A;
  --accent-2: #FFB000;
  --border: #1F4D1F;
  --success: #39FF14;
  --warning: #FFB000;
  --danger: #FF5F56;
  --bg-art: radial-gradient(80% 70% at 50% 40%, #0F1F0F, #050805);
  --shadow-card: none;
  --shadow-btn: 0 0 14px rgba(57,255,20,0.35);
  --shadow-inset: none;
  --glow: 0 0 8px rgba(57,255,20,0.45);
  --scan: rgba(0,0,0,0.22);
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

- Monospace wszędzie
- Inwersja kolorów jako stan zaznaczenia
- Znaki ASCII jako ikonografia

## Nie rób ❌

- Zaokrąglenia i miękkie cienie
- Proporcjonalne fonty
- Zbyt intensywna poświata (zmęczenie oczu)
