# 03 · Sapphire

> Królewski błękit na chłodnym granacie. Powaga banku, lekkość nowoczesnej aplikacji.

Podgląd na żywo: `stylownik-pro.html#sapphire-light` oraz `stylownik-pro.html#sapphire-dark`.

## Charakter

Styl dla aplikacji, którym powierza się pieniądze i dane: granatowy tekst zamiast czerni, chłodne, lekko niebieskie neutralne i jeden zdecydowany królewski błękit. Nie ma tu gradientów ani ozdobników — powagę budują czyste karty, równy rytm odstępów i wyraźna hierarchia liczb.

## Kiedy używać

Bankowość i fintech (panel klienta, nie marketing), księgowość, ubezpieczenia, CRM, panele B2B, systemy rezerwacyjne dla firm.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F5F7FB` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F1F4F9` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#0B1B33` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#55637A` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#1D4ED8` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#1A43BD` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#0E7490` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#DFE5EE` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#15803D` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A16207` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#C62828` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#0A1220` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#101A2C` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#172338` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#E8EEF8` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#93A2BA` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#5B8CFF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#7AA2FF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#06112A` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#38BDF8` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#22304A` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#4ADE80` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FBBF24` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#F87171` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#F5F7FB` | `#0A1220` |
| Cień karty | `--shadow-card` | `0 0 0 1px rgba(11,27,51,0.02), 0 1px 2px rgba(11,27,51,0.05), 0 10px 28px -14px rgba(11,27,51,0.16)` | `0 0 0 1px rgba(255,255,255,0.02), 0 14px 36px -16px rgba(0,0,0,0.75)` |
| Cień przycisku | `--shadow-btn` | `0 1px 2px rgba(11,27,51,0.18), inset 0 1px 0 rgba(255,255,255,0.12)` | `inset 0 1px 0 rgba(255,255,255,0.22), 0 1px 2px rgba(0,0,0,0.4)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 16.06:1 · AAA ✅ | 16.08:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.67:1 · AA ✅ | 7.25:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 6.70:1 · AA ✅ | 5.92:1 · AA ✅ |
| Akcent na tle (link) | 6.25:1 · AA ✅ | 5.93:1 · AA ✅ |
| Błąd na tle | 5.24:1 · AA ✅ | 6.78:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Inter. Nagłówki 600 z −0.028em, tekst 15px/1.5. Nagłówki kolumn tabel i etykiety KPI: 12px, 600, WERSALIKI z +0.04em w `muted`. Kwoty zawsze `tabular-nums`.

| Rola | Krój |
|---|---|
| Nagłówki | `"Inter", system-ui, sans-serif` — waga 600, tracking -0.028em |
| Tekst | `"Inter", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking -0.005em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Karty 12px, kontrolki 8px. Ramka 1px w chłodnej szarości + warstwowy cień zabarwiony granatem. W ciemnym trybie elewacja przez jaśniejsze, granatowe powierzchnie (#0A1220 → #101A2C → #172338).

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 12px |
| Promień pól `--radius-sm` | 8px |
| Promień przycisków `--radius-btn` | 8px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 0 0 1px rgba(11,27,51,0.02), 0 1px 2px rgba(11,27,51,0.05), 0 10px 28px -14px rgba(11,27,51,0.16)` |
| Cień karty (ciemny) | `0 0 0 1px rgba(255,255,255,0.02), 0 14px 36px -16px rgba(0,0,0,0.75)` |

## Jak wykonać komponenty

### Przycisk
Primary: #1D4ED8, biały tekst, 8px, wewnętrzny jasny brzeg + mały cień. Secondary: `surface` + ramka `border`. Ghost: tekst w akcencie. W ciemnym trybie akcent jaśnieje (#5B8CFF), a tekst na nim robi się granatowy.

### Pole tekstowe
Tło `surface`, ramka 1px `border`, promień 8px, wysokość 40px. Fokus: ramka w akcencie + pierścień 3px w 25%. Pola kwot wyrównane do prawej z walutą jako sufiksem.

### Widget / karta
Biała karta, etykieta KPI wersalikami, kwota 36px/600, zmiana procentowa w pigułce. Wykres: akcent dla bieżącego okresu, `accent2` (morski) dla porównania.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.kpi-label, .table th {
  font-size: 12px; font-weight: 600;
  letter-spacing: .04em; text-transform: uppercase; color: var(--muted);
}
.card {
  border: 1px solid var(--border); border-radius: 12px;
  box-shadow: 0 1px 2px rgba(11,27,51,.05), 0 10px 28px -14px rgba(11,27,51,.16);
}
```

## Ruch i interakcja

Krytycznie tłumione sprężyny ~0.3s, bez odbić. Zmiany wartości (saldo, kwoty) bez animacji liczników — dane finansowe mają być natychmiast czytelne.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Inter", system-ui, sans-serif;
  --font-display: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 12px;
  --radius-sm: 8px;
  --radius-btn: 8px;
  --border-w: 1px;
  --heading-weight: 600;
  --heading-tracking: -0.028em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: -0.005em;
  /* kolory — tryb jasny */
  --bg: #F5F7FB;
  --surface: #FFFFFF;
  --surface-2: #F1F4F9;
  --text: #0B1B33;
  --muted: #55637A;
  --accent: #1D4ED8;
  --accent-hover: #1A43BD;
  --on-accent: #FFFFFF;
  --accent-2: #0E7490;
  --border: #DFE5EE;
  --success: #15803D;
  --warning: #A16207;
  --danger: #C62828;
  --bg-art: #F5F7FB;
  --shadow-card: 0 0 0 1px rgba(11,27,51,0.02), 0 1px 2px rgba(11,27,51,0.05), 0 10px 28px -14px rgba(11,27,51,0.16);
  --shadow-btn: 0 1px 2px rgba(11,27,51,0.18), inset 0 1px 0 rgba(255,255,255,0.12);
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0A1220;
    --surface: #101A2C;
    --surface-2: #172338;
    --text: #E8EEF8;
    --muted: #93A2BA;
    --accent: #5B8CFF;
    --accent-hover: #7AA2FF;
    --on-accent: #06112A;
    --accent-2: #38BDF8;
    --border: #22304A;
    --success: #4ADE80;
    --warning: #FBBF24;
    --danger: #F87171;
    --bg-art: #0A1220;
    --shadow-card: 0 0 0 1px rgba(255,255,255,0.02), 0 14px 36px -16px rgba(0,0,0,0.75);
    --shadow-btn: inset 0 1px 0 rgba(255,255,255,0.22), 0 1px 2px rgba(0,0,0,0.4);
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #0A1220;
  --surface: #101A2C;
  --surface-2: #172338;
  --text: #E8EEF8;
  --muted: #93A2BA;
  --accent: #5B8CFF;
  --accent-hover: #7AA2FF;
  --on-accent: #06112A;
  --accent-2: #38BDF8;
  --border: #22304A;
  --success: #4ADE80;
  --warning: #FBBF24;
  --danger: #F87171;
  --bg-art: #0A1220;
  --shadow-card: 0 0 0 1px rgba(255,255,255,0.02), 0 14px 36px -16px rgba(0,0,0,0.75);
  --shadow-btn: inset 0 1px 0 rgba(255,255,255,0.22), 0 1px 2px rgba(0,0,0,0.4);
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

- Granatowy tekst zamiast czarnego
- Etykiety danych wersalikami
- Cyfry tabelaryczne w kwotach

## Nie rób ❌

- Gradienty i błyszczące efekty
- Więcej niż jeden odcień niebieskiego w akcjach
- Animowane liczniki kwot
