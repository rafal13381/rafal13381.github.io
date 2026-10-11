# 05 · Neon Grid

> Cyber-HUD: siatka, poświata, cyjan i magenta.

Podgląd na żywo: `stylownik.html#neon-light` oraz `stylownik.html#neon-dark`.

## Charakter

Estetyka HUD-a z gier i filmów sci-fi: ciemna próżnia, siatka współrzędnych w tle, cienkie linie i narożniki-celowniki zamiast pełnych ramek. Cyjan to „energia systemu”, magenta to „sygnał”. Tryb ciemny jest naturalnym domem stylu; tryb jasny to „laboratorium” z elektrycznym fioletem.

## Kiedy używać

Gaming, Web3/crypto, narzędzia dla devów, eventy technologiczne, dashboardy monitoringu. Unikaj w treściach długich do czytania i w produktach dla mniej technicznych odbiorców.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F1EFFF` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#E8E4FF` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#120F2B` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#5B5685` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#6A00FF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#7F2BFF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#D1008F` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#CFC8F5` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#00915A` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A07800` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#D6004A` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#07060F` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#100E21` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#1A1733` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#E9E6FF` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#8F89BC` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#00F0FF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#6BF7FF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#04121A` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#FF2BD6` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#2C2754` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#39FF88` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FFE14D` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF3B6B` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `linear-gradient(#6A00FF12 1px, transparent 1px) 0 0 / 28px 28px, linear-gradient(90deg, #6A00FF12 1px, transparent 1px) 0 0 / 28px 28px, radial-gradient(60% 50% at 85% 0%, #FFB8F01f, transparent 70%), #F1EFFF` | `linear-gradient(#00F0FF0f 1px, transparent 1px) 0 0 / 28px 28px, linear-gradient(90deg, #00F0FF0f 1px, transparent 1px) 0 0 / 28px 28px, radial-gradient(60% 50% at 85% 0%, #FF2BD626, transparent 70%), radial-gradient(50% 40% at 0% 100%, #00F0FF1a, transparent 70%), #07060F` |
| Cień karty | `--shadow-card` | `0 10px 30px -12px rgba(106,0,255,0.25)` | `0 0 0 1px #00F0FF14, 0 20px 50px -20px rgba(0,240,255,0.25)` |
| Cień przycisku | `--shadow-btn` | `0 0 0 1px #6A00FF, 0 6px 18px -6px rgba(106,0,255,0.55)` | `0 0 18px rgba(0,240,255,0.55), 0 0 2px #00F0FF` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |
| Poświata | `--glow` | `none` | `0 0 18px rgba(0,240,255,0.55)` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 16.41:1 · AAA ✅ | 16.53:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.95:1 · AA ✅ | 6.21:1 · AA ✅ |
| Tekst na akcencie (przycisk) | 6.87:1 · AA ✅ | 13.47:1 · AAA ✅ |
| Akcent na tle (link) | 6.06:1 · AA ✅ | 14.31:1 · AAA ✅ |
| Błąd na tle | 4.68:1 · AA ✅ | 5.84:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Chakra Petch — kanciasty, techniczny krój. Nagłówki i przyciski WERSALIKAMI z szerokim trackingiem (+0.12em na przyciskach). Liczby i kody w JetBrains Mono.

| Rola | Krój |
|---|---|
| Nagłówki | `"Chakra Petch", system-ui, sans-serif` — waga 700, tracking 0.02em, uppercase |
| Tekst | `"Chakra Petch", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking 0.12em, uppercase |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Promień 2px (prawie ostro). Karty z ramką 1px i jasnymi narożnikami w kolorze akcentu (pseudo-elementy). Poświata (`box-shadow` z rozmyciem i kolorem akcentu) zamiast cienia.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 2px |
| Promień pól `--radius-sm` | 2px |
| Promień przycisków `--radius-btn` | 2px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 10px 30px -12px rgba(106,0,255,0.25)` |
| Cień karty (ciemny) | `0 0 0 1px #00F0FF14, 0 20px 50px -20px rgba(0,240,255,0.25)` |

## Jak wykonać komponenty

### Przycisk
Primary w trybie ciemnym: wypełnienie cyjan, ciemny tekst, poświata `0 0 18px` cyjanu. Secondary: przezroczyste z ramką 1px akcentu i tekstem w akcencie. Hover: poświata się wzmacnia.

### Pole tekstowe
Tło `surface2`, ramka 1px `border`, promień 2px. Fokus: ramka w `accent` + poświata. Caret w kolorze akcentu.

### Widget / karta
Karta z narożnikami HUD (lewy-górny, prawy-dolny), etykiety w mono wersalikami, wykres liniowy cyjanowy z gradientowym wypełnieniem do przezroczystości.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.card { position: relative; border: 1px solid var(--border); }
.card::before, .card::after {
  content: ""; position: absolute; width: 14px; height: 14px;
  border: 2px solid var(--accent);
}
.card::before { top: -1px; left: -1px; border-right: 0; border-bottom: 0; }
.card::after  { bottom: -1px; right: -1px; border-left: 0; border-top: 0; }
h1 { text-shadow: 0 0 24px color-mix(in srgb, var(--accent) 60%, transparent); }
```

## Ruch i interakcja

Szybkie wejścia (150ms) z lekkim „glitch” przesunięciem opcjonalnie; poświata pulsuje tylko na stanie aktywnym. Bez wolnych pętli (ryzyko dla osób wrażliwych na ruch).

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Chakra Petch", system-ui, sans-serif;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 2px;
  --radius-sm: 2px;
  --radius-btn: 2px;
  --border-w: 1px;
  --heading-weight: 700;
  --heading-tracking: 0.02em;
  --heading-transform: uppercase;
  --btn-transform: uppercase;
  --btn-tracking: 0.12em;
  /* kolory — tryb jasny */
  --bg: #F1EFFF;
  --surface: #FFFFFF;
  --surface-2: #E8E4FF;
  --text: #120F2B;
  --muted: #5B5685;
  --accent: #6A00FF;
  --accent-hover: #7F2BFF;
  --on-accent: #FFFFFF;
  --accent-2: #D1008F;
  --border: #CFC8F5;
  --success: #00915A;
  --warning: #A07800;
  --danger: #D6004A;
  --bg-art: linear-gradient(#6A00FF12 1px, transparent 1px) 0 0 / 28px 28px, linear-gradient(90deg, #6A00FF12 1px, transparent 1px) 0 0 / 28px 28px, radial-gradient(60% 50% at 85% 0%, #FFB8F01f, transparent 70%), #F1EFFF;
  --shadow-card: 0 10px 30px -12px rgba(106,0,255,0.25);
  --shadow-btn: 0 0 0 1px #6A00FF, 0 6px 18px -6px rgba(106,0,255,0.55);
  --shadow-inset: none;
  --glow: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #07060F;
    --surface: #100E21;
    --surface-2: #1A1733;
    --text: #E9E6FF;
    --muted: #8F89BC;
    --accent: #00F0FF;
    --accent-hover: #6BF7FF;
    --on-accent: #04121A;
    --accent-2: #FF2BD6;
    --border: #2C2754;
    --success: #39FF88;
    --warning: #FFE14D;
    --danger: #FF3B6B;
    --bg-art: linear-gradient(#00F0FF0f 1px, transparent 1px) 0 0 / 28px 28px, linear-gradient(90deg, #00F0FF0f 1px, transparent 1px) 0 0 / 28px 28px, radial-gradient(60% 50% at 85% 0%, #FF2BD626, transparent 70%), radial-gradient(50% 40% at 0% 100%, #00F0FF1a, transparent 70%), #07060F;
    --shadow-card: 0 0 0 1px #00F0FF14, 0 20px 50px -20px rgba(0,240,255,0.25);
    --shadow-btn: 0 0 18px rgba(0,240,255,0.55), 0 0 2px #00F0FF;
    --shadow-inset: none;
    --glow: 0 0 18px rgba(0,240,255,0.55);
  }
}
:root[data-theme="dark"] {
  --bg: #07060F;
  --surface: #100E21;
  --surface-2: #1A1733;
  --text: #E9E6FF;
  --muted: #8F89BC;
  --accent: #00F0FF;
  --accent-hover: #6BF7FF;
  --on-accent: #04121A;
  --accent-2: #FF2BD6;
  --border: #2C2754;
  --success: #39FF88;
  --warning: #FFE14D;
  --danger: #FF3B6B;
  --bg-art: linear-gradient(#00F0FF0f 1px, transparent 1px) 0 0 / 28px 28px, linear-gradient(90deg, #00F0FF0f 1px, transparent 1px) 0 0 / 28px 28px, radial-gradient(60% 50% at 85% 0%, #FF2BD626, transparent 70%), radial-gradient(50% 40% at 0% 100%, #00F0FF1a, transparent 70%), #07060F;
  --shadow-card: 0 0 0 1px #00F0FF14, 0 20px 50px -20px rgba(0,240,255,0.25);
  --shadow-btn: 0 0 18px rgba(0,240,255,0.55), 0 0 2px #00F0FF;
  --shadow-inset: none;
  --glow: 0 0 18px rgba(0,240,255,0.55);
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

- Ciemne tło + 1–2 neonowe akcenty
- Narożniki i cienkie linie zamiast pełnych ramek
- Mono dla danych liczbowych

## Nie rób ❌

- Neon na neonie (cyjan tekst na magencie)
- Poświata na każdym elemencie
- Pulsujące animacje w pętli
