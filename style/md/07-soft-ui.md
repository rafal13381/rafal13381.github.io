# 07 · Soft UI

> Neumorfizm: elementy wytłoczone z jednego materiału.

Podgląd na żywo: `stylownik.html#soft-light` oraz `stylownik.html#soft-dark`.

## Charakter

Wszystko jest z jednego materiału — jak wytłoczenia w miękkim plastiku. Elementy wypukłe dostają dwa cienie: ciemny z prawego-dolnego i jasny z lewego-górnego rogu (światło pada z lewej-góry). Elementy wklęsłe (pola, wciśnięte przyciski) — te same cienie, ale `inset`. Kolor akcentu pojawia się rzadko, tylko tam, gdzie trzeba wskazać akcję.

## Kiedy używać

Pojedyncze widgety, smart-home, aplikacje muzyczne, kalkulatory, koncepty. Unikaj w złożonych formularzach — niski kontrast granic jest problemem dostępności.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#E6E9EF` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#E6E9EF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#E6E9EF` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#2E3440` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#5A6272` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#3D5BD9` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#3450C7` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#E5739A` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `transparent` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#25A06F` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#C77A1E` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#D9474A` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#262A33` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#262A33` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#262A33` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#E4E8F0` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#9AA3B5` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#7C95FF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#94A8FF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#10131A` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#F5A3BE` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `transparent` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#5AD3A2` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#F3B868` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#F5807D` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#E6E9EF` | `#262A33` |
| Cień karty | `--shadow-card` | `10px 10px 24px #C3C8D2, -10px -10px 24px #FFFFFF` | `10px 10px 24px #1A1D23, -10px -10px 24px #323743` |
| Cień przycisku | `--shadow-btn` | `6px 6px 14px #C3C8D2, -6px -6px 14px #FFFFFF` | `6px 6px 14px #1A1D23, -6px -6px 14px #323743` |
| Cień wklęsły (pola) | `--shadow-inset` | `inset 4px 4px 10px #C3C8D2, inset -4px -4px 10px #FFFFFF` | `inset 4px 4px 10px #1A1D23, inset -4px -4px 10px #323743` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 10.27:1 · AAA ✅ | 11.70:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.04:1 · AA ✅ | 5.67:1 · AA ✅ |
| Tekst na akcencie (przycisk) | 5.68:1 · AA ✅ | 6.73:1 · AA ✅ |
| Akcent na tle (link) | 4.67:1 · AA ✅ | 5.20:1 · AA ✅ |
| Błąd na tle | 3.49:1 · AA tylko duży tekst ⚠️ | 5.66:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Plus Jakarta Sans — miękki, nowoczesny. Nagłówki 800, tekst 500 (cieńsze kroje giną na niskokontrastowym tle). `muted` dobrany tak, by mieć min. 4.5:1 do tła.

| Rola | Krój |
|---|---|
| Nagłówki | `"Plus Jakarta Sans", system-ui, sans-serif` — waga 800, tracking -0.02em |
| Tekst | `"Plus Jakarta Sans", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking 0 |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">
```

## Kształt, obramowanie, głębia

Duże promienie (24px karty, 14px kontrolki), brak ramek (`border: 0`). Głębia wyłącznie z pary cieni. Tło karty = tło strony — inaczej efekt się rozpada.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 24px |
| Promień pól `--radius-sm` | 14px |
| Promień przycisków `--radius-btn` | 14px |
| Grubość ramki `--border-w` | 0px |
| Cień karty (jasny) | `10px 10px 24px #C3C8D2, -10px -10px 24px #FFFFFF` |
| Cień karty (ciemny) | `10px 10px 24px #1A1D23, -10px -10px 24px #323743` |

## Jak wykonać komponenty

### Przycisk
Secondary (domyślny w tym stylu): kolor tła + cień wypukły. Na `:active` zmienia się na cień `inset` — przycisk się „wciska”. Primary: wypełniony akcentem, zachowuje wypukły cień, żeby był jedynym kolorowym elementem.

### Pole tekstowe
Wklęsłe: `box-shadow: var(--shadow-inset)`, brak ramki, promień 14px. Fokus: dodatkowy pierścień 2px w akcencie (konieczny dla dostępności!).

### Widget / karta
Wypukła karta; wewnątrz wklęsły tor suwaka i wypukła gałka. Pierścień postępu na wklęsłym tle z akcentowym łukiem.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.raised  { background: var(--bg); box-shadow: 10px 10px 24px var(--sh-dark), -10px -10px 24px var(--sh-light); }
.pressed { background: var(--bg); box-shadow: inset 4px 4px 10px var(--sh-dark), inset -4px -4px 10px var(--sh-light); }
/* jasny: --sh-dark #C3C8D2, --sh-light #FFFFFF */
/* ciemny: --sh-dark #1A1D23, --sh-light #323743 */
```

## Ruch i interakcja

Przejście cienia wypukły → wklęsły w 150ms na `pointerdown`. Gałki przełączników na sprężynie bez odbicia.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-display: "Plus Jakarta Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 24px;
  --radius-sm: 14px;
  --radius-btn: 14px;
  --border-w: 0px;
  --heading-weight: 800;
  --heading-tracking: -0.02em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: 0;
  /* kolory — tryb jasny */
  --bg: #E6E9EF;
  --surface: #E6E9EF;
  --surface-2: #E6E9EF;
  --text: #2E3440;
  --muted: #5A6272;
  --accent: #3D5BD9;
  --accent-hover: #3450C7;
  --on-accent: #FFFFFF;
  --accent-2: #E5739A;
  --border: transparent;
  --success: #25A06F;
  --warning: #C77A1E;
  --danger: #D9474A;
  --bg-art: #E6E9EF;
  --shadow-card: 10px 10px 24px #C3C8D2, -10px -10px 24px #FFFFFF;
  --shadow-btn: 6px 6px 14px #C3C8D2, -6px -6px 14px #FFFFFF;
  --shadow-inset: inset 4px 4px 10px #C3C8D2, inset -4px -4px 10px #FFFFFF;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #262A33;
    --surface: #262A33;
    --surface-2: #262A33;
    --text: #E4E8F0;
    --muted: #9AA3B5;
    --accent: #7C95FF;
    --accent-hover: #94A8FF;
    --on-accent: #10131A;
    --accent-2: #F5A3BE;
    --border: transparent;
    --success: #5AD3A2;
    --warning: #F3B868;
    --danger: #F5807D;
    --bg-art: #262A33;
    --shadow-card: 10px 10px 24px #1A1D23, -10px -10px 24px #323743;
    --shadow-btn: 6px 6px 14px #1A1D23, -6px -6px 14px #323743;
    --shadow-inset: inset 4px 4px 10px #1A1D23, inset -4px -4px 10px #323743;
  }
}
:root[data-theme="dark"] {
  --bg: #262A33;
  --surface: #262A33;
  --surface-2: #262A33;
  --text: #E4E8F0;
  --muted: #9AA3B5;
  --accent: #7C95FF;
  --accent-hover: #94A8FF;
  --on-accent: #10131A;
  --accent-2: #F5A3BE;
  --border: transparent;
  --success: #5AD3A2;
  --warning: #F3B868;
  --danger: #F5807D;
  --bg-art: #262A33;
  --shadow-card: 10px 10px 24px #1A1D23, -10px -10px 24px #323743;
  --shadow-btn: 6px 6px 14px #1A1D23, -6px -6px 14px #323743;
  --shadow-inset: inset 4px 4px 10px #1A1D23, inset -4px -4px 10px #323743;
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

- Tło karty identyczne z tłem strony
- Wyraźny pierścień fokusu
- Akcent tylko dla głównej akcji

## Nie rób ❌

- Neumorfizm na kolorowym/gradientowym tle
- Ramki — niszczą iluzję
- Cały formularz w tym stylu bez dodatkowych wskazówek kontrastu
