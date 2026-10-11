# 07 · Clinical Teal

> Spokojny, dostępny i godny zaufania. Dla zdrowia i usług publicznych.

Podgląd na żywo: `stylownik-pro.html#clinical-light` oraz `stylownik-pro.html#clinical-dark`.

## Charakter

Styl dla ochrony zdrowia, telemedycyny i e-administracji: chłodny, uspokajający morski turkus, duże cele dotykowe, hojne odstępy i wysoki kontrast tekstu. Nic nie jest krzykliwe — interfejs ma obniżać stres, a nie podnosić.

## Kiedy używać

Aplikacje medyczne, rezerwacja wizyt, portale pacjenta, ubezpieczenia, usługi publiczne, aplikacje dla seniorów.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F4F8F8` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#EEF4F4` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#102A2A` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#4F6B6B` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#0E7C7B` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#0B6766` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#3E6FE0` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#DCE7E7` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#1E7F52` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A86200` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#C8323C` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#0B1717` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#112222` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#182D2D` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#E6F2F1` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#93B0AF` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#4FD1C5` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#6EDDD3` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#062222` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#7FA8FF` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#23393A` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#5FD39A` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#F5B451` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF7A80` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `linear-gradient(180deg, #E3F0EF 0%, #F4F8F8 45%)` | `linear-gradient(180deg, #0F2424 0%, #0B1717 45%)` |
| Cień karty | `--shadow-card` | `0 1px 2px rgba(16,42,42,0.04), 0 10px 30px -12px rgba(16,42,42,0.12)` | `0 1px 2px rgba(0,0,0,0.3), 0 10px 30px -12px rgba(0,0,0,0.6)` |
| Cień przycisku | `--shadow-btn` | `none` | `none` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 14.16:1 · AAA ✅ | 15.96:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.38:1 · AA ✅ | 7.89:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 5.01:1 · AA ✅ | 8.94:1 · AAA ✅ |
| Akcent na tle (link) | 4.69:1 · AA ✅ | 9.80:1 · AAA ✅ |
| Błąd na tle | 4.94:1 · AA ✅ | 7.26:1 · AAA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

DM Sans z osią optyczną. Tekst 16–17px (nigdy poniżej 15px), interlinia 1.6. Nagłówki 700. Komunikaty pisane prostym językiem, bez żargonu.

| Rola | Krój |
|---|---|
| Nagłówki | `"DM Sans", system-ui, sans-serif` — waga 700, tracking -0.025em |
| Tekst | `"DM Sans", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking 0 |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap">
```

## Kształt, obramowanie, głębia

Duże, przyjazne promienie (16px karty, 12px kontrolki). Kontrolki min. 48px wysokości (cel dotykowy). Delikatne cienie, cienkie turkusowo-szare ramki.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 16px |
| Promień pól `--radius-sm` | 12px |
| Promień przycisków `--radius-btn` | 12px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 1px 2px rgba(16,42,42,0.04), 0 10px 30px -12px rgba(16,42,42,0.12)` |
| Cień karty (ciemny) | `0 1px 2px rgba(0,0,0,0.3), 0 10px 30px -12px rgba(0,0,0,0.6)` |

## Jak wykonać komponenty

### Przycisk
Primary: turkus #0E7C7B, biały tekst (kontrast 5:1), 48px wysokości. Secondary: `surface2` bez ramki. Ghost: tekst w akcencie z ikoną. Zawsze z czytelną etykietą, nie samą ikoną.

### Pole tekstowe
Tło `surface`, ramka 1px `border`, promień 12px, wysokość 48px, etykieta zawsze nad polem (nie placeholder zamiast etykiety). Walidacja w trakcie, z ikoną i tekstem — nie tylko kolorem.

### Widget / karta
Duże, czytelne karty. Postęp jako pierścień z liczbą w środku. Statusy z ikoną + słowem + kolorem (nigdy sam kolor — daltonizm).

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.btn, .input { min-height: 48px; }
body { font-size: 17px; line-height: 1.6; }
.status::before { /* zawsze ikona + tekst, nie tylko kolor */
  content: ""; width: 8px; height: 8px; border-radius: 50%;
  background: currentColor; display: inline-block; margin-right: 6px;
}
```

## Ruch i interakcja

Łagodne, krótkie, bez odbić. Respektuj `prefers-reduced-motion` szczególnie starannie — odbiorcy mogą mieć zaburzenia przedsionkowe.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "DM Sans", system-ui, sans-serif;
  --font-display: "DM Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 16px;
  --radius-sm: 12px;
  --radius-btn: 12px;
  --border-w: 1px;
  --heading-weight: 700;
  --heading-tracking: -0.025em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: 0;
  /* kolory — tryb jasny */
  --bg: #F4F8F8;
  --surface: #FFFFFF;
  --surface-2: #EEF4F4;
  --text: #102A2A;
  --muted: #4F6B6B;
  --accent: #0E7C7B;
  --accent-hover: #0B6766;
  --on-accent: #FFFFFF;
  --accent-2: #3E6FE0;
  --border: #DCE7E7;
  --success: #1E7F52;
  --warning: #A86200;
  --danger: #C8323C;
  --bg-art: linear-gradient(180deg, #E3F0EF 0%, #F4F8F8 45%);
  --shadow-card: 0 1px 2px rgba(16,42,42,0.04), 0 10px 30px -12px rgba(16,42,42,0.12);
  --shadow-btn: none;
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0B1717;
    --surface: #112222;
    --surface-2: #182D2D;
    --text: #E6F2F1;
    --muted: #93B0AF;
    --accent: #4FD1C5;
    --accent-hover: #6EDDD3;
    --on-accent: #062222;
    --accent-2: #7FA8FF;
    --border: #23393A;
    --success: #5FD39A;
    --warning: #F5B451;
    --danger: #FF7A80;
    --bg-art: linear-gradient(180deg, #0F2424 0%, #0B1717 45%);
    --shadow-card: 0 1px 2px rgba(0,0,0,0.3), 0 10px 30px -12px rgba(0,0,0,0.6);
    --shadow-btn: none;
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #0B1717;
  --surface: #112222;
  --surface-2: #182D2D;
  --text: #E6F2F1;
  --muted: #93B0AF;
  --accent: #4FD1C5;
  --accent-hover: #6EDDD3;
  --on-accent: #062222;
  --accent-2: #7FA8FF;
  --border: #23393A;
  --success: #5FD39A;
  --warning: #F5B451;
  --danger: #FF7A80;
  --bg-art: linear-gradient(180deg, #0F2424 0%, #0B1717 45%);
  --shadow-card: 0 1px 2px rgba(0,0,0,0.3), 0 10px 30px -12px rgba(0,0,0,0.6);
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

- Kontrolki min. 48px
- Ikona + tekst przy statusach
- Etykiety nad polami

## Nie rób ❌

- Czerwień jako kolor dekoracyjny
- Tekst poniżej 15px
- Placeholder zamiast etykiety
