# 06 · Violet Studio

> Kompaktowy, szary interfejs narzędzia twórczego. Fiolet tylko tam, gdzie zaczyna się akcja.

Podgląd na żywo: `stylownik-pro.html#violet-light` oraz `stylownik-pro.html#violet-dark`.

## Charakter

Chrome narzędzia twórczego (edytory graficzne, buildery, edytory wideo): neutralne szare panele, które nie konkurują z pracą użytkownika, mała, gęsta typografia i fiolet zarezerwowany dla zaznaczenia i głównej akcji. Interfejs ma być niewidzialną ramą wokół płótna.

## Kiedy używać

Edytory graficzne i wideo, kreatory stron, narzędzia no-code, aplikacje do prototypowania, panele właściwości, IDE wizualne.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F5F5F5` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F0F0F0` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#1E1E1E` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#666666` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#6D4DF2` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#5E3FE0` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#0B7AD1` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#E6E6E6` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#0F7A43` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A15C00` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#C9311A` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#1E1E1E` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#2C2C2C` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#383838` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#F5F5F5` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#ABABAB` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#9580FF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#A897FF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#14093A` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#4DB3FF` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#3D3D3D` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#3CCB7F` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#F5B544` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF7262` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#F5F5F5` | `#1E1E1E` |
| Cień karty | `--shadow-card` | `0 0 0 1px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.05)` | `0 0 0 1px rgba(255,255,255,0.03), 0 4px 14px rgba(0,0,0,0.35)` |
| Cień przycisku | `--shadow-btn` | `none` | `none` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 15.29:1 · AAA ✅ | 15.29:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.27:1 · AA ✅ | 7.26:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 5.26:1 · AA ✅ | 6.03:1 · AA ✅ |
| Akcent na tle (link) | 4.82:1 · AA ✅ | 5.41:1 · AA ✅ |
| Błąd na tle | 4.89:1 · AA ✅ | 6.22:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Inter w małych rozmiarach: 12–13px w panelach, 14px w treści. Nagłówki 600. Etykiety pól 11–12px w `muted`. Wartości liczbowe (X, Y, W, H) tabelaryczne.

| Rola | Krój |
|---|---|
| Nagłówki | `"Inter", system-ui, sans-serif` — waga 600, tracking -0.025em |
| Tekst | `"Inter", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking 0 |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Karty/panele 10px, kontrolki 6px, wysokość pól 28–32px. Pola bez widocznej ramki w spoczynku (tło `surface2`), ramka pojawia się na hover i fokus. Cienie minimalne.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 10px |
| Promień pól `--radius-sm` | 6px |
| Promień przycisków `--radius-btn` | 6px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 0 0 1px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.05)` |
| Cień karty (ciemny) | `0 0 0 1px rgba(255,255,255,0.03), 0 4px 14px rgba(0,0,0,0.35)` |

## Jak wykonać komponenty

### Przycisk
Primary: fiolet #6D4DF2, biały tekst, 6px, wysokość 32px. Secondary: `surface2` bez ramki. Ghost: tekst `text`, hover `surface2`. Ikony 16px, przyciski-ikony kwadratowe 28px.

### Pole tekstowe
Tło `surface2`, ramka przezroczysta → `border` na hover → akcent na fokus (1px + pierścień 2px). Kompaktowe: 32px wysokości, 13px tekst.

### Widget / karta
Panel z gęstymi wierszami właściwości, przełączniki segmentowe, zaznaczenie elementu jako fioletowa obwódka 1px + uchwyty. Wykresy w akcencie i `accent2`.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.input { background: var(--surface-2); border: 1px solid transparent; height: 32px; font-size: 13px; }
.input:hover { border-color: var(--border); }
.input:focus { border-color: var(--accent); box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 25%, transparent); }
.selected { outline: 1px solid var(--accent); outline-offset: 0; }
```

## Ruch i interakcja

Natychmiastowe reakcje paneli (≤120ms). Przeciąganie 1:1 z kursorem, przyciąganie do siatki na sprężynie krytycznie tłumionej.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Inter", system-ui, sans-serif;
  --font-display: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 10px;
  --radius-sm: 6px;
  --radius-btn: 6px;
  --border-w: 1px;
  --heading-weight: 600;
  --heading-tracking: -0.025em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: 0;
  /* kolory — tryb jasny */
  --bg: #F5F5F5;
  --surface: #FFFFFF;
  --surface-2: #F0F0F0;
  --text: #1E1E1E;
  --muted: #666666;
  --accent: #6D4DF2;
  --accent-hover: #5E3FE0;
  --on-accent: #FFFFFF;
  --accent-2: #0B7AD1;
  --border: #E6E6E6;
  --success: #0F7A43;
  --warning: #A15C00;
  --danger: #C9311A;
  --bg-art: #F5F5F5;
  --shadow-card: 0 0 0 1px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.05);
  --shadow-btn: none;
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #1E1E1E;
    --surface: #2C2C2C;
    --surface-2: #383838;
    --text: #F5F5F5;
    --muted: #ABABAB;
    --accent: #9580FF;
    --accent-hover: #A897FF;
    --on-accent: #14093A;
    --accent-2: #4DB3FF;
    --border: #3D3D3D;
    --success: #3CCB7F;
    --warning: #F5B544;
    --danger: #FF7262;
    --bg-art: #1E1E1E;
    --shadow-card: 0 0 0 1px rgba(255,255,255,0.03), 0 4px 14px rgba(0,0,0,0.35);
    --shadow-btn: none;
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #1E1E1E;
  --surface: #2C2C2C;
  --surface-2: #383838;
  --text: #F5F5F5;
  --muted: #ABABAB;
  --accent: #9580FF;
  --accent-hover: #A897FF;
  --on-accent: #14093A;
  --accent-2: #4DB3FF;
  --border: #3D3D3D;
  --success: #3CCB7F;
  --warning: #F5B544;
  --danger: #FF7262;
  --bg-art: #1E1E1E;
  --shadow-card: 0 0 0 1px rgba(255,255,255,0.03), 0 4px 14px rgba(0,0,0,0.35);
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

- Neutralne panele wokół treści użytkownika
- Fiolet tylko dla zaznaczenia i akcji
- Gęste, małe kontrolki

## Nie rób ❌

- Kolorowe tła paneli
- Duże zaokrąglenia
- Fiolet jako dekoracja
