# 04 · Nordic Calm

> Ciepłe neutralne, leśna zieleń, dużo powietrza.

Podgląd na żywo: `stylownik.html#nordic-light` oraz `stylownik.html#nordic-dark`.

## Charakter

Skandynawski minimalizm, ale ciepły: zamiast czystej bieli — owsiany beż, zamiast czerni — grafit z nutą brązu. Jedyny wyraźny kolor to stonowana leśna zieleń, wspierana glinianym pomarańczem. Spokój buduje się przestrzenią i proporcją, nie dekoracją.

## Kiedy używać

Aplikacje wellbeing, produktywność, e-commerce wnętrzarski/lifestyle, blogi, SaaS o „spokojnym” charakterze. Unikaj, gdy potrzebujesz wysokiej energii i pilności.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F7F5F0` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#EFEBE3` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#2B2A27` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#736F66` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#3F5A4E` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#344A40` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#F7F5F0` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#C08457` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#E4DFD4` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#4F7A5A` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A9772A` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#B4533F` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#1B1C1A` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#242522` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#2F302C` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#ECE8DF` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#A39E93` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#8FB3A0` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#A6C6B4` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#14201A` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#D9A27A` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#383A35` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#8DBB95` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#D9AE63` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#E08A76` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#F7F5F0` | `#1B1C1A` |
| Cień karty | `--shadow-card` | `0 1px 2px rgba(43,42,39,0.04), 0 8px 24px -12px rgba(43,42,39,0.12)` | `0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -12px rgba(0,0,0,0.5)` |
| Cień przycisku | `--shadow-btn` | `none` | `none` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 13.17:1 · AAA ✅ | 13.99:1 · AAA ✅ |
| Tekst drugorzędny na tle | 4.59:1 · AA ✅ | 6.41:1 · AA ✅ |
| Tekst na akcencie (przycisk) | 6.92:1 · AA ✅ | 7.29:1 · AAA ✅ |
| Akcent na tle (link) | 6.92:1 · AA ✅ | 7.43:1 · AAA ✅ |
| Błąd na tle | 4.54:1 · AA ✅ | 6.57:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Manrope — geometryczny, ale ciepły. Nagłówki 700 z mocnym ujemnym trackingiem (−0.03em) dla eleganckiej zwartości, tekst 400 z interlinią 1.6. Dużo światła między sekcjami.

| Rola | Krój |
|---|---|
| Nagłówki | `"Manrope", system-ui, sans-serif` — waga 700, tracking -0.03em |
| Tekst | `"Manrope", system-ui, sans-serif` |
| Mono / dane | `"IBM Plex Mono", ui-monospace, monospace` |
| Przyciski | tracking 0 |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap">
```

## Kształt, obramowanie, głębia

Średnie promienie (14px karty, 10px kontrolki). Ramki 1px w bardzo jasnym beżu, cienie ledwo zauważalne. Hierarchię daje odstęp (24–32px), nie linie.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 14px |
| Promień pól `--radius-sm` | 10px |
| Promień przycisków `--radius-btn` | 10px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 1px 2px rgba(43,42,39,0.04), 0 8px 24px -12px rgba(43,42,39,0.12)` |
| Cień karty (ciemny) | `0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -12px rgba(0,0,0,0.5)` |

## Jak wykonać komponenty

### Przycisk
Primary: zieleń `accent` z kremowym tekstem `onAccent`. Secondary: `surface2` bez ramki. Ghost: tekst `text` z podkreśleniem przy hover. Wciśnięcie: delikatne `scale(0.98)`.

### Pole tekstowe
Tło `surface`, ramka 1px `border`, promień 10px, wysokość 44px. Fokus: ramka w `accent` + pierścień 3px z akcentu w 18%.

### Widget / karta
Biała karta na owsianym tle, cień niemal niewidoczny. Wykresy w zieleni, wartości wyróżnione glinianym `accent2`. Duże liczby w wadze 800 z ciasnym trackingiem.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
:root {
  --bg: #F7F5F0;   /* owies, nie biel */
  --text: #2B2A27; /* grafit z ciepłem, nie czerń */
}
.section + .section { margin-top: 32px; } /* przestrzeń zamiast separatorów */
```

## Ruch i interakcja

Łagodne, bez odbić: 200–280ms `cubic-bezier(0.32, 0.72, 0, 1)`. Nic nie skacze.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Manrope", system-ui, sans-serif;
  --font-display: "Manrope", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 14px;
  --radius-sm: 10px;
  --radius-btn: 10px;
  --border-w: 1px;
  --heading-weight: 700;
  --heading-tracking: -0.03em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: 0;
  /* kolory — tryb jasny */
  --bg: #F7F5F0;
  --surface: #FFFFFF;
  --surface-2: #EFEBE3;
  --text: #2B2A27;
  --muted: #736F66;
  --accent: #3F5A4E;
  --accent-hover: #344A40;
  --on-accent: #F7F5F0;
  --accent-2: #C08457;
  --border: #E4DFD4;
  --success: #4F7A5A;
  --warning: #A9772A;
  --danger: #B4533F;
  --bg-art: #F7F5F0;
  --shadow-card: 0 1px 2px rgba(43,42,39,0.04), 0 8px 24px -12px rgba(43,42,39,0.12);
  --shadow-btn: none;
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #1B1C1A;
    --surface: #242522;
    --surface-2: #2F302C;
    --text: #ECE8DF;
    --muted: #A39E93;
    --accent: #8FB3A0;
    --accent-hover: #A6C6B4;
    --on-accent: #14201A;
    --accent-2: #D9A27A;
    --border: #383A35;
    --success: #8DBB95;
    --warning: #D9AE63;
    --danger: #E08A76;
    --bg-art: #1B1C1A;
    --shadow-card: 0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -12px rgba(0,0,0,0.5);
    --shadow-btn: none;
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #1B1C1A;
  --surface: #242522;
  --surface-2: #2F302C;
  --text: #ECE8DF;
  --muted: #A39E93;
  --accent: #8FB3A0;
  --accent-hover: #A6C6B4;
  --on-accent: #14201A;
  --accent-2: #D9A27A;
  --border: #383A35;
  --success: #8DBB95;
  --warning: #D9AE63;
  --danger: #E08A76;
  --bg-art: #1B1C1A;
  --shadow-card: 0 1px 2px rgba(0,0,0,0.3), 0 8px 24px -12px rgba(0,0,0,0.5);
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

- Ciepłe neutralne zamiast czystej bieli i czerni
- Hojne odstępy
- Jeden spokojny akcent

## Nie rób ❌

- Neonowe kolory
- Twarde, ciemne cienie
- Gęste, upchane layouty
