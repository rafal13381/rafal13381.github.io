# 08 · Porcelain

> Ciepła biel, malinowy akcent i miękkie światło. Aplikacje premium dla ludzi.

Podgląd na żywo: `stylownik-pro.html#porcelain-light` oraz `stylownik-pro.html#porcelain-dark`.

## Charakter

Styl konsumenckich aplikacji premium: porcelanowa, ciepła biel, miękkie i głębokie cienie, duże zaokrąglenia oraz malinowy akcent, który jest jednocześnie elegancki i ciepły. Interfejs wygląda jak dopracowany produkt fizyczny — spokojny, ale z charakterem.

## Kiedy używać

Rezerwacje (hotele, restauracje, salony), e-commerce premium, aplikacje lifestyle i beauty, podróże, subskrypcje, aplikacje społecznościowe.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#FBFAF8` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F4F1EE` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#1C1917` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#6B6560` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#BE185D` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#A3154F` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#4F46E5` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#ECE7E2` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#15803D` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A16207` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#C62828` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#131110` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#1C1A18` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#262321` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#F5F2EF` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#A8A19B` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#F472B6` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#F78FC6` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#2A0717` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#A5B4FC` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#302C29` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#4ADE80` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FBBF24` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#F87171` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#FBFAF8` | `#131110` |
| Cień karty | `--shadow-card` | `0 1px 2px rgba(28,25,23,0.04), 0 14px 36px -16px rgba(28,25,23,0.16)` | `0 1px 2px rgba(0,0,0,0.4), 0 16px 40px -16px rgba(0,0,0,0.7)` |
| Cień przycisku | `--shadow-btn` | `0 1px 2px rgba(28,25,23,0.14), 0 6px 16px -8px rgba(190,24,93,0.45)` | `0 1px 2px rgba(0,0,0,0.4), 0 6px 16px -8px rgba(244,114,182,0.4)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 16.77:1 · AAA ✅ | 16.88:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.51:1 · AA ✅ | 7.38:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 6.04:1 · AA ✅ | 6.95:1 · AA ✅ |
| Akcent na tle (link) | 5.79:1 · AA ✅ | 7.11:1 · AAA ✅ |
| Błąd na tle | 5.39:1 · AA ✅ | 6.81:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Hanken Grotesk — ciepły, nowoczesny grotesk. Nagłówki 700 (−0.03em), tekst 16px/1.55. Ceny i daty duże i wyraźne, opisy w `muted`.

| Rola | Krój |
|---|---|
| Nagłówki | `"Hanken Grotesk", system-ui, sans-serif` — waga 700, tracking -0.03em |
| Tekst | `"Hanken Grotesk", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking -0.005em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Karty 18px, pola 12px, przyciski w kształcie pigułki. Cień kart miękki i długi; przycisk główny ma dodatkowy, delikatnie malinowy cień, który „unosi” go nad kartą. Ramki prawie niewidoczne.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 18px |
| Promień pól `--radius-sm` | 12px |
| Promień przycisków `--radius-btn` | 999px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 1px 2px rgba(28,25,23,0.04), 0 14px 36px -16px rgba(28,25,23,0.16)` |
| Cień karty (ciemny) | `0 1px 2px rgba(0,0,0,0.4), 0 16px 40px -16px rgba(0,0,0,0.7)` |

## Jak wykonać komponenty

### Przycisk
Primary: malina #BE185D, biały tekst, pigułka, kolorowy cień. Secondary: białe tło + ramka. Ghost: tekst `text`, hover `surface2`. Wciśnięcie: `scale(.97)` na `pointerdown`.

### Pole tekstowe
Tło `surface2` (ciepła szarość), bez ramki, promień 12px, wysokość 48px. Fokus: tło białe + ramka w akcencie + pierścień 3px w 20%.

### Widget / karta
Duża karta z miękkim cieniem, cena/kwota wyraźna, tagi jako miękkie pigułki. Zaznaczony element (dzień w kalendarzu, opcja) — malinowe wypełnienie.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.btn-primary {
  border-radius: 999px;
  background: var(--accent); color: #fff;
  box-shadow: 0 1px 2px rgba(28,25,23,.14), 0 6px 16px -8px rgba(190,24,93,.45);
}
.card { border-radius: 18px; box-shadow: 0 1px 2px rgba(28,25,23,.04), 0 14px 36px -16px rgba(28,25,23,.16); }
```

## Ruch i interakcja

Sprężyny krytycznie tłumione ~0.35s; arkusze (bottom sheet) z lekkim odbiciem tylko po geście rzutu. Polubienie/zapis — krótka skala 1 → 1.15 → 1.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Hanken Grotesk", system-ui, sans-serif;
  --font-display: "Hanken Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 18px;
  --radius-sm: 12px;
  --radius-btn: 999px;
  --border-w: 1px;
  --heading-weight: 700;
  --heading-tracking: -0.03em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: -0.005em;
  /* kolory — tryb jasny */
  --bg: #FBFAF8;
  --surface: #FFFFFF;
  --surface-2: #F4F1EE;
  --text: #1C1917;
  --muted: #6B6560;
  --accent: #BE185D;
  --accent-hover: #A3154F;
  --on-accent: #FFFFFF;
  --accent-2: #4F46E5;
  --border: #ECE7E2;
  --success: #15803D;
  --warning: #A16207;
  --danger: #C62828;
  --bg-art: #FBFAF8;
  --shadow-card: 0 1px 2px rgba(28,25,23,0.04), 0 14px 36px -16px rgba(28,25,23,0.16);
  --shadow-btn: 0 1px 2px rgba(28,25,23,0.14), 0 6px 16px -8px rgba(190,24,93,0.45);
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #131110;
    --surface: #1C1A18;
    --surface-2: #262321;
    --text: #F5F2EF;
    --muted: #A8A19B;
    --accent: #F472B6;
    --accent-hover: #F78FC6;
    --on-accent: #2A0717;
    --accent-2: #A5B4FC;
    --border: #302C29;
    --success: #4ADE80;
    --warning: #FBBF24;
    --danger: #F87171;
    --bg-art: #131110;
    --shadow-card: 0 1px 2px rgba(0,0,0,0.4), 0 16px 40px -16px rgba(0,0,0,0.7);
    --shadow-btn: 0 1px 2px rgba(0,0,0,0.4), 0 6px 16px -8px rgba(244,114,182,0.4);
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #131110;
  --surface: #1C1A18;
  --surface-2: #262321;
  --text: #F5F2EF;
  --muted: #A8A19B;
  --accent: #F472B6;
  --accent-hover: #F78FC6;
  --on-accent: #2A0717;
  --accent-2: #A5B4FC;
  --border: #302C29;
  --success: #4ADE80;
  --warning: #FBBF24;
  --danger: #F87171;
  --bg-art: #131110;
  --shadow-card: 0 1px 2px rgba(0,0,0,0.4), 0 16px 40px -16px rgba(0,0,0,0.7);
  --shadow-btn: 0 1px 2px rgba(0,0,0,0.4), 0 6px 16px -8px rgba(244,114,182,0.4);
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

- Ciepła biel zamiast czystej
- Miękkie, długie cienie
- Malina tylko dla akcji i zaznaczenia

## Nie rób ❌

- Malina w komunikatach błędów (tam czerwień)
- Ostre narożniki
- Zimne niebieskie szarości
