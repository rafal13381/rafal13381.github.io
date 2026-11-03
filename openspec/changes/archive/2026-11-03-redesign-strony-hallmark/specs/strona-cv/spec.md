## ADDED Requirements

### Requirement: Hero typu Banner na pierwszym ekranie
Strona `index.html` SHALL otwierać się hero, który zawiera nagłówek „Programista full stack”, jedno zdanie o długości najwyżej 12 wyrazów i jedną wypełnioną akcję. Nagłówek, zdanie i akcja MUST być widoczne bez przewijania w oknie 1280×800.

#### Scenario: Pierwszy ekran na laptopie
- **WHEN** strona zostanie otwarta w oknie 1280×800
- **THEN** nagłówek, zdanie i przycisk GitHub są widoczne bez przewijania, a obok przycisku jest najwyżej jeden link tekstowy

#### Scenario: Jeden przycisk wypełniony
- **WHEN** linter sprawdzi hero
- **THEN** nie zgłasza F4 (dwa wypełnione przyciski obok siebie)

### Requirement: Arkusz kompetencji jako signature
Pod hero strona SHALL pokazywać tabelę na arkuszu (`--color-sheet`, linia 2px u góry), w której wiersze to technologie, a kolumny to miejsca użycia: „Staż KNF”, „Aplikacje mobilne”, „Ta strona”. Komórki MUST być wypełnione wyłącznie na podstawie faktów obecnych w treści CV. Tabela MUST NOT zawierać lat doświadczenia, procentów ani poziomów zaawansowania.

#### Scenario: Zgodność z treścią
- **WHEN** w tabeli zaznaczono Angular w kolumnie „Staż KNF”
- **THEN** sekcja Doświadczenie wymienia Angular w opisie stażu

#### Scenario: Tabela na telefonie
- **WHEN** szerokość okna wynosi 375px
- **THEN** tabela mieści się bez poziomego przewijania strony (przewija się co najwyżej sama tabela we własnym kontenerze z widocznym wskaźnikiem)

### Requirement: Zachowanie treści CV
Redesign SHALL zachować każdy fakt z obecnego `index.html`: stanowisko i opis stażu w UKNF, technologie, aplikacje mobilne, Technikum Infotech 2022–2027, finał Olimpiady Innowacji Technicznych, certyfikaty INF.03, PECP, SOFTECH, szkolenie CSIRT KNF, kompetencje, języki, zainteresowania, projekt Style i obie gry. Zmienione mogą być tylko linie wskazane przez gate (19, 58, 67), a każda zmiana MUST być wypisana w raporcie przed/po.

#### Scenario: Kontrola zachowania
- **WHEN** uruchomiony zostanie `sloplint.mjs index.html --kept`
- **THEN** raport nie zawiera żadnego `FAIL kept`, a każdy `WARN kept` jest przywrócony lub opisany w pieczęci

### Requirement: Prace pokazane zrzutami
Sekcja Prace SHALL pokazywać Style, Autostradę i Kliker jako wpisy rejestru ze zrzutem ekranu prawdziwej strony (`img/prace/`), nazwą, jednym zdaniem i linkiem. Jeden wpis (Style) MUST być otwarty jako case z listą faktów (120 stylów, korekta kontrastu WCAG 2.2, 21 widżetów, eksport .css i .md, 16 branż) i linkami do katalogu, generatora, wizytówek i kodu.

#### Scenario: Zrzuty zamiast ikon
- **WHEN** odwiedzający przewinie do sekcji Prace
- **THEN** każdy wpis ma zrzut ekranu z opisowym `alt`, a nie ikonę „JS” w kółku

#### Scenario: Siatka obrazów bez rozjechania
- **WHEN** okno ma 1920px szerokości
- **THEN** kontener jest wyśrodkowany i ma stałą maksymalną szerokość, a ścieżki siatki z obrazami używają `minmax(0, 1fr)`

### Requirement: Rejestr doświadczenia i edukacji
Doświadczenie, edukacja, osiągnięcia i certyfikaty SHALL być złożone jako wpisy rejestru lub tabela: data lub zakres w mono w lewej kolumnie, nazwa i instytucja w nagłówku wpisu, opis w Newsreader. Strona MUST NOT używać kart w kartach ani pigułek jako etykiet technologii.

#### Scenario: Zakres dat
- **WHEN** wyświetlany jest okres nauki w technikum
- **THEN** zakres jest złożony w IBM Plex Mono bez myślnika półpauzy otoczonego spacjami

### Requirement: Kontakt na końcu strony
Strona SHALL kończyć się sekcją kontaktu z profilem GitHub (i e-mailem lub LinkedIn, jeśli właściciel je poda) oraz linkiem do kodu strony.

#### Scenario: Ścieżka rekrutera
- **WHEN** odwiedzający dotrze do końca treści
- **THEN** widzi sekcję kontaktu przed stopką, z co najmniej jednym działającym linkiem kontaktowym

### Requirement: Budżet treści
Każdy ekran SHALL mieścić około 80 widocznych słów lub mniej, poza sekcjami-tabelami, a strona MUST mieć od 6 do 9 sekcji łącznie z hero i stopką.

#### Scenario: Liczenie słów w hero
- **WHEN** linter sprawdzi hero
- **THEN** nie zgłasza gate 58
