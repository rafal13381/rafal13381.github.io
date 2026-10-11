# 02 · Midnight

> Ciemne, gęste narzędzie dla zespołów produktowych. Indygo i precyzja.

Podgląd na żywo: `stylownik-pro.html#midnight-light` oraz `stylownik-pro.html#midnight-dark`.

## Charakter

Estetyka nowoczesnych narzędzi do zarządzania projektami: ciemny tryb jest pierwszym obywatelem, interfejs jest gęsty i szybki, a jedyny kolor to stonowane indygo. Wrażenie „premium” daje subtelna poświata u góry tła, gradient w nagłówku (od bieli do szarości) i przyciski z wewnętrznym jasnym brzegiem.

## Kiedy używać

Issue trackery, narzędzia deweloperskie, CRM-y, aplikacje dla power-userów, panele z dużą liczbą list i skrótów klawiszowych.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#FBFBFC` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F4F5F8` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#0F1011` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#62666D` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#5E6AD2` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#4F5BC4` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#1F6FEB` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#E6E8EB` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#2E8F5E` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#A86A12` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#CF3A3A` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#08090A` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#101113` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#18191B` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#F7F8F8` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#8A8F98` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#5E6AD2` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#6E79D9` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#4EA7FC` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `#23252A` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#4CB782` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#F2C94C` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#EB5757` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `radial-gradient(70% 45% at 50% -8%, rgba(94,106,210,0.12), transparent 70%), #FBFBFC` | `radial-gradient(70% 45% at 50% -8%, rgba(94,106,210,0.22), transparent 70%), #08090A` |
| Cień karty | `--shadow-card` | `0 0 0 1px rgba(0,0,0,0.01), 0 1px 2px rgba(0,0,0,0.04), 0 4px 16px -6px rgba(0,0,0,0.06)` | `0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px -12px rgba(0,0,0,0.7)` |
| Cień przycisku | `--shadow-btn` | `inset 0 1px 0 rgba(255,255,255,0.16), 0 1px 2px rgba(0,0,0,0.14)` | `inset 0 1px 0 rgba(255,255,255,0.14), 0 1px 2px rgba(0,0,0,0.5)` |
| Cień wklęsły (pola) | `--shadow-inset` | `none` | `none` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 18.42:1 · AAA ✅ | 18.73:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.58:1 · AA ✅ | 6.13:1 · AA ✅ |
| Tekst na akcencie (przycisk) | 4.70:1 · AA ✅ | 4.70:1 · AA ✅ |
| Akcent na tle (link) | 4.54:1 · AA ✅ | 4.24:1 · AA tylko duży tekst ⚠️ |
| Błąd na tle | 4.70:1 · AA ✅ | 5.73:1 · AA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Inter wszędzie. Nagłówki 600 z mocnym ujemnym trackingiem (−0.03em). Tekst w interfejsie 14–15px — gęstość jest celowa. Etykiety i metadane w `muted`, identyfikatory (np. ENG-142) w kroju mono.

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

Małe promienie (10px karty, 6px kontrolki). Ramki 1px prawie niewidoczne (#23252A w ciemnym). Przycisk primary ma `inset 0 1px 0 rgba(255,255,255,.14)` — jasny górny brzeg, który daje mu fizyczność.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 10px |
| Promień pól `--radius-sm` | 6px |
| Promień przycisków `--radius-btn` | 6px |
| Grubość ramki `--border-w` | 1px |
| Cień karty (jasny) | `0 0 0 1px rgba(0,0,0,0.01), 0 1px 2px rgba(0,0,0,0.04), 0 4px 16px -6px rgba(0,0,0,0.06)` |
| Cień karty (ciemny) | `0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px -12px rgba(0,0,0,0.7)` |

## Jak wykonać komponenty

### Przycisk
Primary: indygo + biały tekst + wewnętrzny jasny brzeg. Secondary: `surface2` + ramka 1px. Ghost: tylko tekst `muted`, na hover tło `surface2`. Wysokość 32px, kompaktowo.

### Pole tekstowe
Tło `surface2`, ramka 1px `border`, promień 6px, wysokość 36px. Fokus: ramka w akcencie + pierścień 3px w 25% krycia.

### Widget / karta
Karty niemal zlewają się z tłem; wyróżnia je ramka i cień. Liczby duże, białe; wykres indygo z gradientem do przezroczystości. Statusy jako kolorowe kropki obok tekstu, nie pełne pigułki.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.hero-title {
  background: linear-gradient(to right, var(--text), var(--muted));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.btn-primary { box-shadow: inset 0 1px 0 rgba(255,255,255,.14), 0 1px 2px rgba(0,0,0,.5); }
body { background: radial-gradient(70% 45% at 50% -8%, rgba(94,106,210,.22), transparent 70%), #08090A; }
```

## Ruch i interakcja

Bardzo szybko: 120–180ms, krytycznie tłumione. Listy reagują natychmiast na klawiaturę — animacja nigdy nie blokuje następnej akcji.

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
  --bg: #FBFBFC;
  --surface: #FFFFFF;
  --surface-2: #F4F5F8;
  --text: #0F1011;
  --muted: #62666D;
  --accent: #5E6AD2;
  --accent-hover: #4F5BC4;
  --on-accent: #FFFFFF;
  --accent-2: #1F6FEB;
  --border: #E6E8EB;
  --success: #2E8F5E;
  --warning: #A86A12;
  --danger: #CF3A3A;
  --bg-art: radial-gradient(70% 45% at 50% -8%, rgba(94,106,210,0.12), transparent 70%), #FBFBFC;
  --shadow-card: 0 0 0 1px rgba(0,0,0,0.01), 0 1px 2px rgba(0,0,0,0.04), 0 4px 16px -6px rgba(0,0,0,0.06);
  --shadow-btn: inset 0 1px 0 rgba(255,255,255,0.16), 0 1px 2px rgba(0,0,0,0.14);
  --shadow-inset: none;
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #08090A;
    --surface: #101113;
    --surface-2: #18191B;
    --text: #F7F8F8;
    --muted: #8A8F98;
    --accent: #5E6AD2;
    --accent-hover: #6E79D9;
    --on-accent: #FFFFFF;
    --accent-2: #4EA7FC;
    --border: #23252A;
    --success: #4CB782;
    --warning: #F2C94C;
    --danger: #EB5757;
    --bg-art: radial-gradient(70% 45% at 50% -8%, rgba(94,106,210,0.22), transparent 70%), #08090A;
    --shadow-card: 0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px -12px rgba(0,0,0,0.7);
    --shadow-btn: inset 0 1px 0 rgba(255,255,255,0.14), 0 1px 2px rgba(0,0,0,0.5);
    --shadow-inset: none;
  }
}
:root[data-theme="dark"] {
  --bg: #08090A;
  --surface: #101113;
  --surface-2: #18191B;
  --text: #F7F8F8;
  --muted: #8A8F98;
  --accent: #5E6AD2;
  --accent-hover: #6E79D9;
  --on-accent: #FFFFFF;
  --accent-2: #4EA7FC;
  --border: #23252A;
  --success: #4CB782;
  --warning: #F2C94C;
  --danger: #EB5757;
  --bg-art: radial-gradient(70% 45% at 50% -8%, rgba(94,106,210,0.22), transparent 70%), #08090A;
  --shadow-card: 0 0 0 1px rgba(255,255,255,0.02), 0 10px 30px -12px rgba(0,0,0,0.7);
  --shadow-btn: inset 0 1px 0 rgba(255,255,255,0.14), 0 1px 2px rgba(0,0,0,0.5);
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

- Gęsty layout, 14px tekst w listach
- Statusy jako kropki + tekst
- Skróty klawiszowe widoczne w UI

## Nie rób ❌

- Duże kolorowe plamy
- Grube ramki
- Wolne, ozdobne animacje
