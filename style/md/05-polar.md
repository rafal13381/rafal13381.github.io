# 05 · Polar

> Chłodny grafit i lodowy cyjan. Dane, infrastruktura i monitoring.

Podgląd na żywo: `stylownik-pro.html#polar-light` oraz `stylownik-pro.html#polar-dark`.

## Charakter

Ciemny, chłodny styl narzędzi do danych i infrastruktury: grafit o niebieskawym odcieniu, a jedyny jasny punkt to lodowy cyjan — kolor „systemu działa”. Interfejs jest gęsty, dane liczbowe i identyfikatory w kroju mono, statusy jako kropki. Spokojny mimo dużej ilości informacji.

## Kiedy używać

Monitoring i observability, panele chmury, bazy danych, narzędzia analityczne, CI/CD, konsole administracyjne, aplikacje IoT.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F6F8FA` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F0F3F6` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#0D1520` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#5A6676` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#0369A1` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#035A8A` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#7C3AED` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#E1E6EC` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#15803D` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A16207` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#C62828` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#0A0D12` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#10151C` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#171E27` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#E6EDF5` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#8B97A7` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#22D3EE` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#4FDDF2` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#04161B` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#A78BFA` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#222B36` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#34D399` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FBBF24` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#F87171` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `radial-gradient(70% 45% at 50% -8%, rgba(3,105,161,0.08), transparent 70%), #F6F8FA` | `radial-gradient(70% 45% at 50% -8%, rgba(34,211,238,0.10), transparent 70%), #0A0D12` |
| Cień karty | `--shadow-card` | `0 0 0 1px rgba(0,0,0,0.01), 0 1px 2px rgba(13,21,32,0.05), 0 4px 16px -6px rgba(13,21,32,0.07)` | `0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px -12px rgba(0,0,0,0.7)` |
| Cień przycisku | `--shadow-btn` | `inset 0 1px 0 rgba(255,255,255,0.16), 0 1px 2px rgba(13,21,32,0.16)` | `inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 17.22:1 · AAA ✅ | 16.49:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.48:1 · AA ✅ | 6.56:1 · AA ✅ |
| Tekst na akcencie (przycisk) | 5.93:1 · AA ✅ | 10.23:1 · AAA ✅ |
| Akcent na tle (link) | 5.57:1 · AA ✅ | 10.77:1 · AAA ✅ |
| Błąd na tle | 5.28:1 · AA ✅ | 7.03:1 · AAA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Inter + JetBrains Mono. Nagłówki 600 (−0.03em), tekst interfejsu 14px. Wszystko, co jest wartością techniczną (ID, czas, metryka, adres) — mono 13px.

| Rola | Krój |
|---|---|
| Nagłówki | `"Inter", system-ui, sans-serif` — waga 600, tracking -0.03em |
| Tekst | `"Inter", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking -0.005em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
```

## Kształt, obramowanie, głębia

Karty 10px, kontrolki 6px, ramki 1px ledwo widoczne. Subtelna cyjanowa poświata u góry tła daje głębię bez dekoracji. Przycisk primary z jasnym wewnętrznym brzegiem.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 10px |
| Promień pól `--radius-sm` | 6px |
| Promień przycisków `--radius-btn` | 6px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 0 0 1px rgba(0,0,0,0.01), 0 1px 2px rgba(13,21,32,0.05), 0 4px 16px -6px rgba(13,21,32,0.07)` |
| Cień karty (ciemny) | `0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px -12px rgba(0,0,0,0.7)` |

## Jak wykonać komponenty

### Przycisk
Primary: cyjan #22D3EE z bardzo ciemnym tekstem (ciemny tryb) / #0369A1 z białym (jasny). Secondary: `surface2` + ramka. Ghost: tekst `muted`, hover `surface2`. Kompaktowe: 32–36px.

### Pole tekstowe
Tło `surface2`, ramka 1px, promień 6px, wysokość 36px. Fokus: ramka w akcencie + pierścień 3px w 25%. Pola zapytań/filtrów w kroju mono.

### Widget / karta
Karta metryki: etykieta, wartość mono lub Inter 600, mini-wykres cyjanowy z gradientem do przezroczystości. Statusy jako kropka + słowo (bez wypełnionych pigułek).

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
body { background: radial-gradient(70% 45% at 50% -8%, rgba(34,211,238,.10), transparent 70%), #0A0D12; }
.metric, .id, .timestamp { font-family: "JetBrains Mono", monospace; font-size: 13px; }
.status::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%;
  background: currentColor; display: inline-block; margin-right: 6px;
  box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 20%, transparent);
}
```

## Ruch i interakcja

Szybko (120–180ms), bez odbić. Dane odświeżają się bez przesuwania layoutu; nowe wiersze sygnalizuje krótkie podświetlenie tła.

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
  --heading-tracking: -0.03em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: -0.005em;
  /* kolory — tryb jasny */
  --bg: #F6F8FA;
  --surface: #FFFFFF;
  --surface-2: #F0F3F6;
  --text: #0D1520;
  --muted: #5A6676;
  --accent: #0369A1;
  --accent-hover: #035A8A;
  --on-accent: #FFFFFF;
  --accent-2: #7C3AED;
  --border: #E1E6EC;
  --success: #15803D;
  --warning: #A16207;
  --danger: #C62828;
  --bg-art: radial-gradient(70% 45% at 50% -8%, rgba(3,105,161,0.08), transparent 70%), #F6F8FA;
  --shadow-card: 0 0 0 1px rgba(0,0,0,0.01), 0 1px 2px rgba(13,21,32,0.05), 0 4px 16px -6px rgba(13,21,32,0.07);
  --shadow-btn: inset 0 1px 0 rgba(255,255,255,0.16), 0 1px 2px rgba(13,21,32,0.16);
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0A0D12;
    --surface: #10151C;
    --surface-2: #171E27;
    --text: #E6EDF5;
    --muted: #8B97A7;
    --accent: #22D3EE;
    --accent-hover: #4FDDF2;
    --on-accent: #04161B;
    --accent-2: #A78BFA;
    --border: #222B36;
    --success: #34D399;
    --warning: #FBBF24;
    --danger: #F87171;
    --bg-art: radial-gradient(70% 45% at 50% -8%, rgba(34,211,238,0.10), transparent 70%), #0A0D12;
    --shadow-card: 0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px -12px rgba(0,0,0,0.7);
    --shadow-btn: inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5);
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #0A0D12;
  --surface: #10151C;
  --surface-2: #171E27;
  --text: #E6EDF5;
  --muted: #8B97A7;
  --accent: #22D3EE;
  --accent-hover: #4FDDF2;
  --on-accent: #04161B;
  --accent-2: #A78BFA;
  --border: #222B36;
  --success: #34D399;
  --warning: #FBBF24;
  --danger: #F87171;
  --bg-art: radial-gradient(70% 45% at 50% -8%, rgba(34,211,238,0.10), transparent 70%), #0A0D12;
  --shadow-card: 0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px -12px rgba(0,0,0,0.7);
  --shadow-btn: inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.5);
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

- Mono dla wszystkich wartości technicznych
- Statusy jako kropka + tekst
- Jeden akcent, reszta grafit

## Nie rób ❌

- Cyjan jako kolor tekstu długich akapitów
- Wypełnione kolorowe pigułki w tabelach
- Animowane tła
