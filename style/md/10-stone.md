# 10 · Stone

> Ciepłe kamienne neutralne i grafitowy przycisk. Spokojna praca z dokumentami.

Podgląd na żywo: `stylownik-pro.html#stone-light` oraz `stylownik-pro.html#stone-dark`.

## Charakter

Ciepły odpowiednik monochromu: zamiast zimnej czerni i bieli — kamienne szarości z nutą brązu, grafitowy przycisk główny i niebieski wyłącznie dla linków i zaznaczeń. Miękkie promienie i cienie sprawiają, że interfejs jest przyjazny, ale nadal bardzo poważny.

## Kiedy używać

Obieg dokumentów, umowy, kancelarie, HR, CRM, aplikacje do pisania i redakcji, wewnętrzne narzędzia firm.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F5F5F4` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F0EFED` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#1C1917` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#6B6661` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#292524` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#44403C` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FAFAF9` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#2563EB` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#E7E5E4` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#15803D` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A16207` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#C62828` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#0F0E0D` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#1A1918` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#242221` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#F5F5F4` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#A8A29E` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#F5F5F4` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#FFFFFF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#1C1917` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#60A5FA` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#2E2B29` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#4ADE80` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FBBF24` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#F87171` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#F5F5F4` | `#0F0E0D` |
| Cień karty | `--shadow-card` | `0 1px 2px rgba(28,25,23,0.05), 0 10px 30px -14px rgba(28,25,23,0.14)` | `0 1px 2px rgba(0,0,0,0.4), 0 12px 32px -14px rgba(0,0,0,0.7)` |
| Cień przycisku | `--shadow-btn` | `0 1px 2px rgba(28,25,23,0.2), inset 0 1px 0 rgba(255,255,255,0.1)` | `0 1px 2px rgba(0,0,0,0.4)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 16.03:1 · AAA ✅ | 17.68:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.21:1 · AA ✅ | 7.65:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 14.52:1 · AAA ✅ | 16.03:1 · AAA ✅ |
| Akcent na tle (link) | 13.90:1 · AAA ✅ | 17.68:1 · AAA ✅ |
| Błąd na tle | 5.15:1 · AA ✅ | 6.97:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Inter. Nagłówki 600 (−0.03em), tekst 15px/1.55. Dokumenty i dłuższe treści 16px/1.65. Metadane (autor, data, wersja) 13px w `muted`.

| Rola | Krój |
|---|---|
| Nagłówki | `"Inter", system-ui, sans-serif` — waga 600, tracking -0.03em |
| Tekst | `"Inter", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking -0.005em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Karty 14px, kontrolki 10px. Ramka 1px w ciepłej szarości + miękki cień. W ciemnym trybie przycisk główny odwraca się na kamienną biel z grafitowym tekstem.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 14px |
| Promień pól `--radius-sm` | 10px |
| Promień przycisków `--radius-btn` | 10px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 1px 2px rgba(28,25,23,0.05), 0 10px 30px -14px rgba(28,25,23,0.14)` |
| Cień karty (ciemny) | `0 1px 2px rgba(0,0,0,0.4), 0 12px 32px -14px rgba(0,0,0,0.7)` |

## Jak wykonać komponenty

### Przycisk
Primary: grafit #292524, kremowy tekst, wewnętrzny jasny brzeg. Secondary: `surface` + ramka. Ghost: tekst `muted`, hover `surface2`. Linki i akcje pomocnicze w niebieskim `accent2`.

### Pole tekstowe
Tło `surface`, ramka 1px `border`, promień 10px. Fokus: ramka w kolorze tekstu + pierścień 3px w 10% — neutralny, bez koloru.

### Widget / karta
Karta z miękkim cieniem, wartości w kolorze tekstu, wykres grafitowy z niebieską serią porównawczą. Statusy jako delikatne pigułki.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
:root { --bg: #F5F5F4; --text: #1C1917; --accent: #292524; --link: #2563EB; }
.input:focus {
  border-color: var(--text);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--text) 10%, transparent);
}
.btn-primary { background: #292524; color: #FAFAF9; box-shadow: 0 1px 2px rgba(28,25,23,.2), inset 0 1px 0 rgba(255,255,255,.1); }
```

## Ruch i interakcja

Ciche i krótkie: 150–200ms, bez odbić. Panele boczne wysuwają się z krawędzi, z której zostały wywołane.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Inter", system-ui, sans-serif;
  --font-display: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 14px;
  --radius-sm: 10px;
  --radius-btn: 10px;
  --border-w: 1px;
  --heading-weight: 600;
  --heading-tracking: -0.03em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: -0.005em;
  /* kolory — tryb jasny */
  --bg: #F5F5F4;
  --surface: #FFFFFF;
  --surface-2: #F0EFED;
  --text: #1C1917;
  --muted: #6B6661;
  --accent: #292524;
  --accent-hover: #44403C;
  --on-accent: #FAFAF9;
  --accent-2: #2563EB;
  --border: #E7E5E4;
  --success: #15803D;
  --warning: #A16207;
  --danger: #C62828;
  --bg-art: #F5F5F4;
  --shadow-card: 0 1px 2px rgba(28,25,23,0.05), 0 10px 30px -14px rgba(28,25,23,0.14);
  --shadow-btn: 0 1px 2px rgba(28,25,23,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0F0E0D;
    --surface: #1A1918;
    --surface-2: #242221;
    --text: #F5F5F4;
    --muted: #A8A29E;
    --accent: #F5F5F4;
    --accent-hover: #FFFFFF;
    --on-accent: #1C1917;
    --accent-2: #60A5FA;
    --border: #2E2B29;
    --success: #4ADE80;
    --warning: #FBBF24;
    --danger: #F87171;
    --bg-art: #0F0E0D;
    --shadow-card: 0 1px 2px rgba(0,0,0,0.4), 0 12px 32px -14px rgba(0,0,0,0.7);
    --shadow-btn: 0 1px 2px rgba(0,0,0,0.4);
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #0F0E0D;
  --surface: #1A1918;
  --surface-2: #242221;
  --text: #F5F5F4;
  --muted: #A8A29E;
  --accent: #F5F5F4;
  --accent-hover: #FFFFFF;
  --on-accent: #1C1917;
  --accent-2: #60A5FA;
  --border: #2E2B29;
  --success: #4ADE80;
  --warning: #FBBF24;
  --danger: #F87171;
  --bg-art: #0F0E0D;
  --shadow-card: 0 1px 2px rgba(0,0,0,0.4), 0 12px 32px -14px rgba(0,0,0,0.7);
  --shadow-btn: 0 1px 2px rgba(0,0,0,0.4);
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

- Ciepłe szarości w całej skali
- Kolor tylko dla linków i stanów
- Spokojne, miękkie cienie

## Nie rób ❌

- Mieszanie ciepłych i zimnych szarości
- Kolorowe przyciski główne
- Czysta czerń #000
