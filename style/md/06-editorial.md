# 06 · Editorial

> Papier, szeryfy, linie łamania — jak dobry magazyn.

Podgląd na żywo: `stylownik.html#editorial-light` oraz `stylownik.html#editorial-dark`.

## Charakter

Interfejs jak strona dobrego magazynu: kremowy papier, czarna farba drukarska, jedna czerwień redakcyjna. Struktura wynika z typografii i linii łamania (grube linie nad sekcjami), nie z pudełek i cieni. Tryb ciemny to „wydanie nocne” — ciepły brąz zamiast zimnej czerni.

## Kiedy używać

Media, blogi, newslettery, publikacje długich treści, portfolio pisarzy, marki premium/kulturalne. Unikaj w gęstych narzędziach i aplikacjach z dużą liczbą kontrolek.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#FAF7F0` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFDF8` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F1ECE0` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#1A1714` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#6B645A` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#B3261E` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#8F1E18` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFDF8` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#1F3A5F` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#DDD5C5` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#2F6B3A` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#9A6B00` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#B3261E` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#16140F` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#1D1A15` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#29251E` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#EDE6D6` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#A69D8B` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#E5544B` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#F07068` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#16140F` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#8FB0D9` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#3A352C` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#7DBB86` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#E0B04F` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#E5544B` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `#FAF7F0` | `#16140F` |
| Cień karty | `--shadow-card` | `none` | `none` |
| Cień przycisku | `--shadow-btn` | `none` | `none` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |
| Linia łamania | `--rule` | `#1A1714` | `#EDE6D6` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 16.68:1 · AAA ✅ | 14.80:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.46:1 · AA ✅ | 6.85:1 · AA ✅ |
| Tekst na akcencie (przycisk) | 6.43:1 · AA ✅ | 5.00:1 · AA ✅ |
| Akcent na tle (link) | 6.11:1 · AA ✅ | 5.00:1 · AA ✅ |
| Błąd na tle | 6.11:1 · AA ✅ | 5.00:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Nagłówki: Fraunces (oś optyczna — w dużych rozmiarach staje się bardziej kontrastowy), 600, kursywa dla akcentowanych słów. Tekst: Newsreader 400, interlinia 1.6, inicjał (drop cap) na początku artykułu. Eyebrow: kapitaliki z +0.12em.

| Rola | Krój |
|---|---|
| Nagłówki | `"Fraunces", Georgia, serif` — waga 600, tracking -0.02em |
| Tekst | `"Newsreader", Georgia, serif` |
| Mono / dane | `"IBM Plex Mono", ui-monospace, monospace` |
| Przyciski | tracking 0.01em |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;1,9..144,500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap">
```

## Kształt, obramowanie, głębia

Zero zaokrągleń, zero cieni. Karty: gruba linia 3px w kolorze `rule` u góry, cienkie 1px między elementami. Przyciski prostokątne.

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
Primary: czerwień redakcyjna `accent`, kremowy tekst, prostokąt. Secondary: ramka 1px w kolorze tekstu, przezroczyste. Ghost: tekst z podkreśleniem `text-underline-offset: 3px`.

### Pole tekstowe
Tylko dolna linia 1px w kolorze tekstu, tło przezroczyste, szeryfowa treść. Fokus: linia grubieje do 2px i zmienia się na `accent`.

### Widget / karta
Karta jak szpalta: linia 3px u góry, tytuł w Fraunces, liczby w kroju szeryfowym z cyframi nautycznymi (`font-variant-numeric: oldstyle-nums`), wykres jako cienkie czarne linie.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.card { border: 0; border-top: 3px solid var(--rule); padding-top: 16px; }
.lead::first-letter {
  float: left; font-family: var(--font-display);
  font-size: 3.4em; line-height: .85; padding: 4px 8px 0 0;
  color: var(--accent);
}
.eyebrow { font-variant: small-caps; letter-spacing: .12em; }
```

## Ruch i interakcja

Prawie brak: cross-fade 200ms. Treść ma być stabilna jak druk.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Newsreader", Georgia, serif;
  --font-display: "Fraunces", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 0px;
  --radius-sm: 0px;
  --radius-btn: 0px;
  --border-w: 1px;
  --heading-weight: 600;
  --heading-tracking: -0.02em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: 0.01em;
  /* kolory — tryb jasny */
  --bg: #FAF7F0;
  --surface: #FFFDF8;
  --surface-2: #F1ECE0;
  --text: #1A1714;
  --muted: #6B645A;
  --accent: #B3261E;
  --accent-hover: #8F1E18;
  --on-accent: #FFFDF8;
  --accent-2: #1F3A5F;
  --border: #DDD5C5;
  --success: #2F6B3A;
  --warning: #9A6B00;
  --danger: #B3261E;
  --bg-art: #FAF7F0;
  --shadow-card: none;
  --shadow-btn: none;
  --shadow-inset: none;
  --rule: #1A1714;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #16140F;
    --surface: #1D1A15;
    --surface-2: #29251E;
    --text: #EDE6D6;
    --muted: #A69D8B;
    --accent: #E5544B;
    --accent-hover: #F07068;
    --on-accent: #16140F;
    --accent-2: #8FB0D9;
    --border: #3A352C;
    --success: #7DBB86;
    --warning: #E0B04F;
    --danger: #E5544B;
    --bg-art: #16140F;
    --shadow-card: none;
    --shadow-btn: none;
    --shadow-inset: none;
    --rule: #EDE6D6;
  }
}
:root[data-theme="dark"] {
  --bg: #16140F;
  --surface: #1D1A15;
  --surface-2: #29251E;
  --text: #EDE6D6;
  --muted: #A69D8B;
  --accent: #E5544B;
  --accent-hover: #F07068;
  --on-accent: #16140F;
  --accent-2: #8FB0D9;
  --border: #3A352C;
  --success: #7DBB86;
  --warning: #E0B04F;
  --danger: #E5544B;
  --bg-art: #16140F;
  --shadow-card: none;
  --shadow-btn: none;
  --shadow-inset: none;
  --rule: #EDE6D6;
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

- Linie łamania zamiast pudełek
- Kursywa dla akcentu w nagłówku
- Szeroka interlinia w tekście

## Nie rób ❌

- Zaokrąglone rogi i cienie
- Więcej niż jeden kolor akcentu
- Sans-serif w długim tekście
