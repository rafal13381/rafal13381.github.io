# 04 · Mono

> Czerń, biel i 1px. Infrastruktura dla deweloperów, bez kompromisów.

Podgląd na żywo: `stylownik-pro.html#mono-light` oraz `stylownik-pro.html#mono-dark`.

## Charakter

Monochromatyczny styl platform deweloperskich: akcentem jest sam kontrast — czarny przycisk na białym, biały na czarnym. Kolor (niebieski) pojawia się wyłącznie przy linkach, fokusie i danych. Struktura to precyzyjne ramki 1px, a tło ma subtelną siatkę kropek.

## Kiedy używać

Hosting, CI/CD, API, dokumentacja techniczna, dashboardy infrastruktury, narzędzia CLI z panelem web. Dobry wybór dla marek, które chcą wyglądać „inżyniersko”.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#FAFAFA` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F2F2F2` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#0A0A0A` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#666666` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#0A0A0A` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#2B2B2B` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#0068D6` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#EAEAEA` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#107A3E` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A35200` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#D93036` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#000000` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#0A0A0A` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#1A1A1A` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#EDEDED` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#A1A1A1` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#EDEDED` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#FFFFFF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#0A0A0A` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#3291FF` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#2E2E2E` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#62C073` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#F1A10D` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF6166` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `radial-gradient(#0000000f 1px, transparent 1px) 0 0 / 24px 24px, #FAFAFA` | `radial-gradient(#ffffff14 1px, transparent 1px) 0 0 / 24px 24px, #000000` |
| Cień karty | `--shadow-card` | `0 2px 2px rgba(0,0,0,0.03)` | `none` |
| Cień przycisku | `--shadow-btn` | `none` | `none` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 18.97:1 · AAA ✅ | 17.94:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.50:1 · AA ✅ | 8.13:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 19.80:1 · AAA ✅ | 16.91:1 · AAA ✅ |
| Akcent na tle (link) | 18.97:1 · AAA ✅ | 17.94:1 · AAA ✅ |
| Błąd na tle | 4.55:1 · AA ✅ | 7.15:1 · AAA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Geist + Geist Mono. Nagłówki 600 z bardzo ciasnym trackingiem (−0.045em) — duże, zwarte. Tekst 14–15px. Wartości techniczne (ID, hash, czas wdrożenia) zawsze mono.

| Rola | Krój |
|---|---|
| Nagłówki | `"Geist", "Inter", system-ui, sans-serif` — waga 600, tracking -0.045em |
| Tekst | `"Geist", "Inter", system-ui, sans-serif` |
| Mono / dane | `"Geist Mono", ui-monospace, monospace` |
| Przyciski | tracking -0.01em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap">
```

## Kształt, obramowanie, głębia

Karty 12px, kontrolki 6px. Ramka 1px #EAEAEA (jasny) / #2E2E2E (ciemny). W ciemnym trybie brak cieni — tylko ramki. Statusy jako małe kropki.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 12px |
| Promień pól `--radius-sm` | 6px |
| Promień przycisków `--radius-btn` | 6px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 2px 2px rgba(0,0,0,0.03)` |
| Cień karty (ciemny) | `none` |

## Jak wykonać komponenty

### Przycisk
Primary: czarny (jasny tryb) / biały (ciemny tryb), wysokość 36–40px. Secondary: tło `surface` + ramka 1px. Hover secondary: tło `surface2`. Bez gradientów i bez cieni.

### Pole tekstowe
Tło `surface`, ramka 1px, promień 6px. Fokus: `0 0 0 1px var(--text), 0 0 0 4px rgba(0,0,0,.08)` — podwójna obwódka w kolorze tekstu zamiast koloru.

### Widget / karta
Karta z ramką, nagłówek 14px/500, wartość w Geist 600, dane czasu i identyfikatory w mono. Wykres czarno-biały z niebieską serią porównawczą.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
body { background: radial-gradient(#0000000f 1px, transparent 1px) 0 0/24px 24px, #FAFAFA; }
.input:focus {
  outline: none;
  box-shadow: 0 0 0 1px var(--text), 0 0 0 4px color-mix(in srgb, var(--text) 10%, transparent);
}
.id { font-family: "Geist Mono", monospace; font-size: 13px; color: var(--muted); }
```

## Ruch i interakcja

Minimalny: 150ms ease-out na kolorach, zero przesunięć. Ładowanie jako skeleton z delikatnym shimmerem (wyłączanym przy reduced-motion).

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Geist", "Inter", system-ui, sans-serif;
  --font-display: "Geist", "Inter", system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 12px;
  --radius-sm: 6px;
  --radius-btn: 6px;
  --border-w: 1px;
  --heading-weight: 600;
  --heading-tracking: -0.045em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: -0.01em;
  /* kolory — tryb jasny */
  --bg: #FAFAFA;
  --surface: #FFFFFF;
  --surface-2: #F2F2F2;
  --text: #0A0A0A;
  --muted: #666666;
  --accent: #0A0A0A;
  --accent-hover: #2B2B2B;
  --on-accent: #FFFFFF;
  --accent-2: #0068D6;
  --border: #EAEAEA;
  --success: #107A3E;
  --warning: #A35200;
  --danger: #D93036;
  --bg-art: radial-gradient(#0000000f 1px, transparent 1px) 0 0 / 24px 24px, #FAFAFA;
  --shadow-card: 0 2px 2px rgba(0,0,0,0.03);
  --shadow-btn: none;
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #000000;
    --surface: #0A0A0A;
    --surface-2: #1A1A1A;
    --text: #EDEDED;
    --muted: #A1A1A1;
    --accent: #EDEDED;
    --accent-hover: #FFFFFF;
    --on-accent: #0A0A0A;
    --accent-2: #3291FF;
    --border: #2E2E2E;
    --success: #62C073;
    --warning: #F1A10D;
    --danger: #FF6166;
    --bg-art: radial-gradient(#ffffff14 1px, transparent 1px) 0 0 / 24px 24px, #000000;
    --shadow-card: none;
    --shadow-btn: none;
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #000000;
  --surface: #0A0A0A;
  --surface-2: #1A1A1A;
  --text: #EDEDED;
  --muted: #A1A1A1;
  --accent: #EDEDED;
  --accent-hover: #FFFFFF;
  --on-accent: #0A0A0A;
  --accent-2: #3291FF;
  --border: #2E2E2E;
  --success: #62C073;
  --warning: #F1A10D;
  --danger: #FF6166;
  --bg-art: radial-gradient(#ffffff14 1px, transparent 1px) 0 0 / 24px 24px, #000000;
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

- Kontrast jako akcent
- Mono dla danych technicznych
- Ramki 1px zamiast cieni w trybie ciemnym

## Nie rób ❌

- Kolorowe przyciski główne
- Zaokrąglenia powyżej 12px
- Więcej niż jeden kolor informacyjny
