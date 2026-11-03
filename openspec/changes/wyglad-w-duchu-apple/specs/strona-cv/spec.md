## ADDED Requirements

### Requirement: Hero premiery na pierwszym ekranie
Strona `index.html` SHALL otwierać się wyśrodkowanym hero: nagłówek „Programista full stack.”, jedno zdanie o długości najwyżej 12 wyrazów, wypełniona pigułka GitHub i link tekstowy do prac, a pod nimi zrzut katalogu Style. Nagłówek, zdanie, akcja i górna krawędź zrzutu MUST być widoczne bez przewijania w oknie 1280×800.

#### Scenario: Pierwszy ekran na laptopie
- **WHEN** strona zostanie otwarta w oknie 1280×800
- **THEN** nagłówek, zdanie, pigułka GitHub i co najmniej 120px zrzutu Style są widoczne bez przewijania

#### Scenario: Zrzut widoczny bez JS
- **WHEN** strona zostanie wczytana bez wykonania skryptów
- **THEN** zrzut w hero jest widoczny (animacja wejścia działa tylko pod klasą `.js`)

### Requirement: Pasek najważniejszych faktów
Pod hero strona SHALL pokazywać trzy fakty złożone dużym krojem: staż w Urzędzie Komisji Nadzoru Finansowego, Technikum Programistyczne Infotech w Białymstoku (od 2022 do 2027), finał Ogólnopolskiej Olimpiady Innowacji Technicznych. Pasek MUST NOT zawierać liczb ani twierdzeń spoza treści CV.

#### Scenario: Zgodność faktów
- **WHEN** porównany zostanie pasek faktów z sekcją Dane techniczne
- **THEN** każdy fakt z paska występuje w Danych technicznych

### Requirement: Galeria zrzutów prowadzona gestem
Pas premiery Style SHALL zawierać galerię co najmniej czterech zrzutów (katalog, generator, wizytówki, podgląd stylu) z podpisami. Galeria MUST śledzić przeciąganie 1:1 z zachowaniem miejsca chwytu, po puszczeniu MUST rzutować pęd (`x + (v/1000)·0.998/(1−0.998)`) i dociągać do najbliższego kadru sprężyną krytycznie tłumioną z prędkością startową gestu, a na krańcach MUST stawiać rosnący opór. Galeria MUST być obsługiwana klawiaturą (strzałki, przyciski poprzedni i następny) i MUST działać bez JS jako natywne przewijanie z `scroll-snap`.

#### Scenario: Rzut myszą
- **WHEN** użytkownik chwyci galerię, szybko przeciągnie w lewo i puści
- **THEN** galeria przesuwa się dalej w kierunku ruchu i zatrzymuje na kadrze, bez skoku w chwili puszczenia

#### Scenario: Przerwanie w locie
- **WHEN** użytkownik chwyci galerię w trakcie dociągania
- **THEN** galeria zatrzymuje się pod palcem w bieżącym położeniu i dalej śledzi ruch

#### Scenario: Pionowy ruch na telefonie
- **WHEN** użytkownik przesuwa palcem w pionie po galerii
- **THEN** strona przewija się w pionie, a galeria się nie przesuwa

#### Scenario: Bez JS
- **WHEN** skrypty nie zostały wykonane
- **THEN** galerię można przewinąć poziomo, a kadry przyciągają się przez `scroll-snap`

### Requirement: Dane techniczne
Doświadczenie, aplikacje mobilne, edukacja, osiągnięcia, certyfikaty, języki, kompetencje i zainteresowania SHALL być złożone jako wiersze specyfikacji: etykieta po lewej, treść po prawej, rozdzielone przestrzenią i jasną linią. Tabela kompetencji (technologie × Staż w UKNF, Aplikacje mobilne, Ta strona) MUST być częścią tej sekcji.

#### Scenario: Wiersz specyfikacji na telefonie
- **WHEN** szerokość okna wynosi 375px
- **THEN** etykieta stoi nad treścią, a strona nie przewija się poziomo

## MODIFIED Requirements

### Requirement: Arkusz kompetencji jako signature
W sekcji Dane techniczne strona SHALL pokazywać tabelę, w której wiersze to technologie, a kolumny to miejsca użycia: „Staż w UKNF”, „Aplikacje mobilne”, „Ta strona”, z zaznaczeniem w komórce. Komórki MUST być wypełnione wyłącznie na podstawie faktów obecnych w treści CV. Tabela MUST NOT zawierać lat doświadczenia, procentów ani poziomów zaawansowania.

#### Scenario: Zgodność z treścią
- **WHEN** w tabeli zaznaczono Angular w kolumnie „Staż w UKNF”
- **THEN** wiersz Doświadczenie wymienia Angular w opisie stażu

#### Scenario: Tabela na telefonie
- **WHEN** szerokość okna wynosi 375px
- **THEN** tabela mieści się bez poziomego przewijania strony (przewija się co najwyżej sama tabela we własnym kontenerze z przypiętą pierwszą kolumną)

### Requirement: Prace pokazane zrzutami
Prace SHALL być pokazane jak premiery: Style jako ciemny pas z nagłówkiem, jednym zdaniem, galerią zrzutów, czterema faktami z treści (120 stylów, korekta kontrastu WCAG 2.2, 21 widżetów, 16 branż) i linkami do katalogu, generatora, wizytówek i kodu; Autostrada i Kliker jako dwa kafle obok siebie z nazwą, jednym zdaniem, zrzutem i linkiem. Każdy zrzut MUST pochodzić z prawdziwej strony (`img/prace/`) i mieć opisowy `alt`.

#### Scenario: Zrzuty zamiast ikon
- **WHEN** odwiedzający przewinie do prac
- **THEN** każda praca ma zrzut ekranu z opisowym `alt`

#### Scenario: Siatka obrazów bez rozjechania
- **WHEN** okno ma 1920px szerokości
- **THEN** kontener jest wyśrodkowany i ma stałą maksymalną szerokość, a ścieżki siatki z obrazami używają `minmax(0, 1fr)`

### Requirement: Rejestr doświadczenia i edukacji
Doświadczenie i edukacja SHALL być wierszami Danych technicznych: etykieta (np. „Doświadczenie”, „Edukacja”) w lewej kolumnie, nazwa stanowiska lub szkoły, instytucja i opis w prawej. Strona MUST NOT używać kart w kartach ani pigułek jako etykiet technologii.

#### Scenario: Zakres dat
- **WHEN** wyświetlany jest okres nauki w technikum
- **THEN** zakres jest zapisany słownie („od 2022 do 2027”) z cyframi tabelarycznymi, bez półpauzy

## REMOVED Requirements

### Requirement: Hero typu Banner na pierwszym ekranie
**Reason**: Kompozycja premiery z wyśrodkowanym hero i wyłaniającym się zrzutem zastępuje hero Banner.
**Migration**: Treść hero (nagłówek, zdanie, akcja GitHub, link do prac) przechodzi bez zmian do wymagania „Hero premiery na pierwszym ekranie”. Pasek faktów spod hero przechodzi do wymagania „Pasek najważniejszych faktów”.
