# 09 · Clay Pastel

> Pucołowate, plastelinowe kształty w pastelach.

Podgląd na żywo: `stylownik.html#clay-light` oraz `stylownik.html#clay-dark`.

## Charakter

Claymorfizm: elementy wyglądają jak ulepione z plasteliny — miękkie, pucołowate, z wewnętrznym światłem z lewej-góry i cieniem wewnętrznym z prawej-dołu, plus duży, miękki cień rzucany pod spód. Pastelowe tło z rozlanymi plamami koloru. Radosny, przyjazny, „zabawkowy”.

## Kiedy używać

Aplikacje dla dzieci i edukacja, onboarding, gry casual, fintech dla młodych, ilustracyjne landing pages. Unikaj w narzędziach profesjonalnych i gęstych danych.

## Paleta — tryb jasny ☀️

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#F4EEFF` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#FFFFFF` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#F6EFFF` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#3A2E5C` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#6B6088` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#7445E6` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#6538D4` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#FFFFFF` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#FF9F6B` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `transparent` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#1FA97A` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#D98A00` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#F0506E` | Błędy walidacji, akcje destrukcyjne |

## Paleta — tryb ciemny 🌙

| Rola | Token | Wartość | Zastosowanie |
|---|---|---|---|
| Tło | `--bg` | `#1E1A2E` | Tło całej strony / aplikacji |
| Powierzchnia | `--surface` | `#2A2440` | Karty, panele, modale |
| Powierzchnia 2 | `--surface-2` | `#231E36` | Pola tekstowe, przyciski tonalne, tory suwaków |
| Tekst | `--text` | `#F3EEFF` | Nagłówki i tekst główny |
| Tekst drugorzędny | `--muted` | `#B0A6D0` | Opisy, etykiety pomocnicze, placeholdery |
| Akcent | `--accent` | `#B69CFF` | Główna akcja, aktywne stany, wykresy |
| Akcent (hover) | `--accent-hover` | `#C9B5FF` | Najechanie na przycisk główny |
| Tekst na akcencie | `--on-accent` | `#1E1A2E` | Etykieta na wypełnionym przycisku |
| Akcent 2 | `--accent-2` | `#FFC48A` | Wyróżnienia drugorzędne, druga seria danych |
| Obramowanie | `--border` | `transparent` | Ramki kart i pól, separatory |
| Sukces | `--success` | `#6EE7B7` | Potwierdzenia, wartości dodatnie |
| Ostrzeżenie | `--warning` | `#FCD34D` | Ostrzeżenia, stany oczekujące |
| Błąd | `--danger` | `#FF8FA3` | Błędy walidacji, akcje destrukcyjne |

### Tokeny efektów (cienie, tła, poświaty)

| Efekt | Token | Jasny | Ciemny |
|---|---|---|---|
| Tło dekoracyjne (warstwy) | `--bg-art` | `radial-gradient(40% 40% at 10% 15%, #FFD6E8 0%, transparent 70%), radial-gradient(40% 45% at 95% 20%, #CFE8FF 0%, transparent 70%), radial-gradient(45% 45% at 60% 100%, #FFE9C7 0%, transparent 70%), #F4EEFF` | `radial-gradient(40% 40% at 10% 15%, #3B2350 0%, transparent 70%), radial-gradient(40% 45% at 95% 20%, #1F2D52 0%, transparent 70%), radial-gradient(45% 45% at 60% 100%, #3D2A1E 0%, transparent 70%), #1E1A2E` |
| Cień karty | `--shadow-card` | `0 18px 40px -12px rgba(90,60,160,0.28), inset -6px -8px 16px rgba(139,92,246,0.08), inset 6px 8px 16px rgba(255,255,255,0.9)` | `0 18px 40px -12px rgba(0,0,0,0.6), inset -6px -8px 16px rgba(0,0,0,0.25), inset 6px 8px 16px rgba(255,255,255,0.06)` |
| Cień przycisku | `--shadow-btn` | `0 10px 20px -8px rgba(139,92,246,0.55), inset -4px -5px 10px rgba(0,0,0,0.12), inset 4px 5px 10px rgba(255,255,255,0.35)` | `0 10px 20px -8px rgba(182,156,255,0.45), inset -4px -5px 10px rgba(0,0,0,0.18), inset 4px 5px 10px rgba(255,255,255,0.4)` |
| Cień wklęsły (pola) | `--shadow-inset` | `inset 3px 4px 8px rgba(90,60,160,0.12), inset -3px -4px 8px rgba(255,255,255,0.9)` | `inset 3px 4px 8px rgba(0,0,0,0.35), inset -3px -4px 8px rgba(255,255,255,0.04)` |

## Kontrast (WCAG 2.2, policzony automatycznie)

| Para | Jasny | Ciemny |
|---|---|---|
| Tekst na tle | 10.73:1 · AAA ✅ | 14.88:1 · AAA ✅ |
| Tekst drugorzędny na tle | 5.07:1 · AA ✅ | 7.41:1 · AAA ✅ |
| Tekst na akcencie (przycisk) | 5.62:1 · AA ✅ | 7.40:1 · AAA ✅ |
| Akcent na tle (link) | 4.96:1 · AA ✅ | 7.40:1 · AAA ✅ |
| Błąd na tle | 3.05:1 · AA tylko duży tekst ⚠️ | 7.82:1 · AAA ✅ |

> Próg AA: 4.5:1 dla zwykłego tekstu, 3:1 dla tekstu ≥ 24px lub ≥ 19px pogrubionego i dla elementów UI.

## Typografia

Nagłówki: Fredoka 600–700 (zaokrąglone zakończenia). Tekst: Nunito 600 — zaokrąglony i ciepły. Duże rozmiary, przyjazny ton.

| Rola | Krój |
|---|---|
| Nagłówki | `"Fredoka", "Nunito", system-ui, sans-serif` — waga 700, tracking -0.01em |
| Tekst | `"Nunito", system-ui, sans-serif` |
| Mono / dane | `"JetBrains Mono", ui-monospace, monospace` |
| Przyciski | tracking 0 |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Fredoka:wght@500;600;700&display=swap">
```

## Kształt, obramowanie, głębia

Bardzo duże promienie (32px karty, 20px przyciski), brak ramek. Głębia = cień zewnętrzny (miękki, kolorowy) + 2 cienie wewnętrzne (jasny i ciemny) dające „objętość”.

| Właściwość | Wartość |
|---|---|
| Promień kart `--radius` | 32px |
| Promień pól `--radius-sm` | 18px |
| Promień przycisków `--radius-btn` | 20px |
| Grubość ramki `--border-w` | 0px |
| Cień karty (jasny) | `0 18px 40px -12px rgba(90,60,160,0.28), inset -6px -8px 16px rgba(139,92,246,0.08), inset 6px 8px 16px rgba(255,255,255,0.9)` |
| Cień karty (ciemny) | `0 18px 40px -12px rgba(0,0,0,0.6), inset -6px -8px 16px rgba(0,0,0,0.25), inset 6px 8px 16px rgba(255,255,255,0.06)` |

## Jak wykonać komponenty

### Przycisk
Primary: fioletowy akcent z kolorowym cieniem pod spodem i wewnętrznymi światłami. Wciśnięcie: `scale(0.94)` na sprężynie z lekkim odbiciem — jedyny styl, w którym bounce przy kliknięciu jest na miejscu. Secondary: biały „klocek” z tym samym zestawem cieni.

### Pole tekstowe
Wklęsłe pole (`shadowInset`), promień 18px, tło `surface2`. Fokus: pierścień 3px w akcencie z 35% krycia.

### Widget / karta
Biała pucołowata karta, ikony w kolorowych „cukierkach” (kwadraty 44px z promieniem 14px w pastelach), pierścień postępu z grubym, zaokrąglonym końcem linii.

## Efekt sygnaturowy

To jest detal, który sprawia, że styl jest rozpoznawalny:

```css
.clay {
  border-radius: 32px;
  background: var(--surface);
  box-shadow:
    0 18px 40px -12px rgba(90,60,160,.28),   /* cień rzucany */
    inset -6px -8px 16px rgba(139,92,246,.08), /* cień wewnętrzny */
    inset 6px 8px 16px rgba(255,255,255,.9);   /* światło wewnętrzne */
}
.btn:active { transform: scale(.94); transition: transform 300ms cubic-bezier(.34,1.56,.64,1); }
```

## Ruch i interakcja

Sprężyny z lekkim odbiciem (damping ~0.7) dla elementów dotykanych; wejścia z „podskokiem” skali 0.9 → 1.

Zawsze: reakcja na `pointerdown` (nie na kliknięcie), animuj tylko `transform` i `opacity`, a przy `prefers-reduced-motion: reduce` zamień przesunięcia na krótkie przenikanie.

## Zmienne CSS — gotowe do wklejenia

```css
:root {
  /* typografia */
  --font-body: "Nunito", system-ui, sans-serif;
  --font-display: "Fredoka", "Nunito", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  /* kształt */
  --radius: 32px;
  --radius-sm: 18px;
  --radius-btn: 20px;
  --border-w: 0px;
  --heading-weight: 700;
  --heading-tracking: -0.01em;
  --heading-transform: none;
  --btn-transform: none;
  --btn-tracking: 0;
  /* kolory — tryb jasny */
  --bg: #F4EEFF;
  --surface: #FFFFFF;
  --surface-2: #F6EFFF;
  --text: #3A2E5C;
  --muted: #6B6088;
  --accent: #7445E6;
  --accent-hover: #6538D4;
  --on-accent: #FFFFFF;
  --accent-2: #FF9F6B;
  --border: transparent;
  --success: #1FA97A;
  --warning: #D98A00;
  --danger: #F0506E;
  --bg-art: radial-gradient(40% 40% at 10% 15%, #FFD6E8 0%, transparent 70%), radial-gradient(40% 45% at 95% 20%, #CFE8FF 0%, transparent 70%), radial-gradient(45% 45% at 60% 100%, #FFE9C7 0%, transparent 70%), #F4EEFF;
  --shadow-card: 0 18px 40px -12px rgba(90,60,160,0.28), inset -6px -8px 16px rgba(139,92,246,0.08), inset 6px 8px 16px rgba(255,255,255,0.9);
  --shadow-btn: 0 10px 20px -8px rgba(139,92,246,0.55), inset -4px -5px 10px rgba(0,0,0,0.12), inset 4px 5px 10px rgba(255,255,255,0.35);
  --shadow-inset: inset 3px 4px 8px rgba(90,60,160,0.12), inset -3px -4px 8px rgba(255,255,255,0.9);
}

/* tryb ciemny: systemowy lub wymuszony atrybutem */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #1E1A2E;
    --surface: #2A2440;
    --surface-2: #231E36;
    --text: #F3EEFF;
    --muted: #B0A6D0;
    --accent: #B69CFF;
    --accent-hover: #C9B5FF;
    --on-accent: #1E1A2E;
    --accent-2: #FFC48A;
    --border: transparent;
    --success: #6EE7B7;
    --warning: #FCD34D;
    --danger: #FF8FA3;
    --bg-art: radial-gradient(40% 40% at 10% 15%, #3B2350 0%, transparent 70%), radial-gradient(40% 45% at 95% 20%, #1F2D52 0%, transparent 70%), radial-gradient(45% 45% at 60% 100%, #3D2A1E 0%, transparent 70%), #1E1A2E;
    --shadow-card: 0 18px 40px -12px rgba(0,0,0,0.6), inset -6px -8px 16px rgba(0,0,0,0.25), inset 6px 8px 16px rgba(255,255,255,0.06);
    --shadow-btn: 0 10px 20px -8px rgba(182,156,255,0.45), inset -4px -5px 10px rgba(0,0,0,0.18), inset 4px 5px 10px rgba(255,255,255,0.4);
    --shadow-inset: inset 3px 4px 8px rgba(0,0,0,0.35), inset -3px -4px 8px rgba(255,255,255,0.04);
  }
}
:root[data-theme="dark"] {
  --bg: #1E1A2E;
  --surface: #2A2440;
  --surface-2: #231E36;
  --text: #F3EEFF;
  --muted: #B0A6D0;
  --accent: #B69CFF;
  --accent-hover: #C9B5FF;
  --on-accent: #1E1A2E;
  --accent-2: #FFC48A;
  --border: transparent;
  --success: #6EE7B7;
  --warning: #FCD34D;
  --danger: #FF8FA3;
  --bg-art: radial-gradient(40% 40% at 10% 15%, #3B2350 0%, transparent 70%), radial-gradient(40% 45% at 95% 20%, #1F2D52 0%, transparent 70%), radial-gradient(45% 45% at 60% 100%, #3D2A1E 0%, transparent 70%), #1E1A2E;
  --shadow-card: 0 18px 40px -12px rgba(0,0,0,0.6), inset -6px -8px 16px rgba(0,0,0,0.25), inset 6px 8px 16px rgba(255,255,255,0.06);
  --shadow-btn: 0 10px 20px -8px rgba(182,156,255,0.45), inset -4px -5px 10px rgba(0,0,0,0.18), inset 4px 5px 10px rgba(255,255,255,0.4);
  --shadow-inset: inset 3px 4px 8px rgba(0,0,0,0.35), inset -3px -4px 8px rgba(255,255,255,0.04);
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

- Pastelowe tło z plamami koloru
- Kolorowe (nie szare) cienie rzucane
- Zaokrąglone kroje

## Nie rób ❌

- Ostre narożniki
- Czarne cienie
- Cienkie fonty 300
