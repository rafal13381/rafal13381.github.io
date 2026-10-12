// Przykładowe strony-wizytówki renderowane w dowolnym stylu z katalogu.
// Wszystkie kolory, kroje i kształty pochodzą z tokenów stylu ustawionych na .wz (Tokens.apply).
// Dane firm są fikcyjne.
(function (g) {
    var ICONS = {
        cup: '<path d="M4 9h13v4a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 2.5c-.6 1 .6 2-.2 3M12 2.5c-.6 1 .6 2-.2 3"/>',
        scale: '<path d="M12 3v18M7 21h10M5 7h14"/><path d="m5 7-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0z"/>',
        camera: '<path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.3L8.5 4.5h7L17.2 7h2.3A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.6"/>',
        bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
        tooth: '<path d="M7.5 3C4.9 3 3.5 5.1 3.5 7.6c0 2.6 1.4 4 1.9 6.6.5 2.6.9 6.8 2.6 6.8 1.9 0 1.6-5.6 4-5.6s2.1 5.6 4 5.6c1.7 0 2.1-4.2 2.6-6.8.5-2.6 1.9-4 1.9-6.6C20.5 5.1 19.1 3 16.5 3c-2 0-2.8 1.2-4.5 1.2S9.5 3 7.5 3z"/>',
        compass: '<path d="M3 21 12 3l9 18"/><path d="M6.5 14h11"/><circle cx="12" cy="3" r="1"/>',
        code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/>',
        flower: '<circle cx="12" cy="9" r="2.4"/><path d="M12 6.6C12 4 10.6 2.5 9.3 3.3 8 4 8.6 6.4 10.2 7.6M14.4 9c2.6 0 4.1-1.4 3.3-2.7-.7-1.3-3.1-.7-4.3.9M12 11.4c0 2.6 1.4 4.1 2.7 3.3 1.3-.7.7-3.1-.9-4.3M9.6 9C7 9 5.5 10.4 6.3 11.7c.7 1.3 3.1.7 4.3-.9M12 14v7.5M12 18c-1.8-1.8-4-2-5.5-1.5M12 19.5c1.5-1.5 3.5-1.8 5-1.2"/>',
        pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
        phone: '<path d="M5 3h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 5.1 5.1l1.4-2.3L19 13.5V17a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
        mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
        clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
        star: '<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z"/>',
        menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
        arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
        scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/>',
        wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
        utensils: '<path d="M3 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3zm0 0v7"/>',
        paw: '<circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.05Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10z"/>',
        languages: '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
        bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
        calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M16 14v4M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"/>',
        hammer: '<path d="m15 12-8.4 8.4a2.1 2.1 0 1 1-3-3L12 9M18 15l4-4M21.5 11.5l-1.9-1.9A2 2 0 0 1 19 8.2V7l-2.3-2.3a6 6 0 0 0-4.2-1.7H9l.9.8A6.2 6.2 0 0 1 12 8.4V10l2 2h1.2a2 2 0 0 1 1.4.6l1.9 1.9"/>'
    };
    function icon(name, cls) {
        return '<svg class="' + (cls || "wz-ico") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + "</svg>";
    }

    var HOURS_SHOP = [["Poniedziałek – piątek", "7:30 – 19:00"], ["Sobota", "9:00 – 17:00"], ["Niedziela", "9:00 – 15:00"]];
    var HOURS_OFFICE = [["Poniedziałek – piątek", "9:00 – 17:00"], ["Sobota", "po umówieniu"], ["Niedziela", "nieczynne"]];

    var TEMPLATES = [
        {
            id: "kawiarnia", label: "Kawiarnia", icon: "cup", name: "Ziarno i Para", domain: "ziarno-i-para.example",
            nav: [["menu", "Menu"], ["galeria", "Wnętrze"], ["opinie", "Opinie"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "cover", eyebrow: "Kawiarnia i piekarnia rzemieślnicza",
                title: "Świeży chleb o siódmej, najlepsza kawa przez cały dzień",
                lead: "Palimy ziarno w małych partiach, pieczemy na zakwasie i podajemy bez pośpiechu. Wpadnij na śniadanie albo zabierz bochenek do domu.",
                cta: ["menu", "Zobacz menu"], cta2: ["kontakt", "Jak dojechać"],
                facts: [["4,9", "ocena gości"], ["12", "rodzajów pieczywa"], ["od 2016", "w centrum miasta"]]
            },
            sections: [
                { type: "services", variant: "menu", id: "menu", eyebrow: "Menu", title: "Co dziś podajemy", lead: "Karta zmienia się sezonowo. Wszystkie wypieki są z naszej piekarni.",
                    groups: [
                        ["Kawa", [["Espresso", "Pojedyncze, ziarno sezonowe", "9 zł"], ["Flat white", "Podwójne espresso, mleko", "15 zł"], ["Przelew V60", "Kawa filtrowana, 300 ml", "18 zł"], ["Cold brew", "Parzone 18 godzin", "16 zł"]]],
                        ["Na talerzu", [["Tost na zakwasie", "Masło, ricotta, miód", "22 zł"], ["Jajka po turecku", "Jogurt, masło z papryką", "29 zł"], ["Drożdżówka dnia", "Zapytaj przy ladzie", "11 zł"], ["Owsianka", "Owoce sezonowe, orzechy", "19 zł"]]]
                    ] },
                { type: "gallery", id: "galeria", eyebrow: "Wnętrze", title: "Miejsce, w którym chce się zostać", items: ["Sala główna", "Piec chlebowy", "Ogródek", "Bar kawowy"] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Wracają do nas codziennie", score: "4,8", count: 326,
                    items: [
                        ["Chodzę tu prawie codziennie przed pracą. Flat white zawsze tak samo dobry, a żytni na zakwasie trzyma świeżość do trzeciego dnia.", "Marta K.", "stała bywalczyni", 5, "wrzesień 2026"],
                        ["Jajka po turecku to najlepsze śniadanie w mieście. W weekend trzeba chwilę poczekać na stolik, ale warto.", "Tomasz W.", "śniadanie w sobotę", 4, "sierpień 2026"],
                        ["Zamówiliśmy 40 drożdżówek na urodziny córki. Odebrane punktualnie o 8:00, jeszcze ciepłe — dzieci zjadły wszystko.", "Ewa N.", "zamówienie okolicznościowe", 5, "lipiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Zajrzyj do nas", lead: "Stolików nie trzeba rezerwować. Większe zamówienia pieczywa przyjmujemy dzień wcześniej.",
                    address: "ul. Przykładowa 12, 15-001 Białystok", phone: "+48 123 456 789", hours: HOURS_SHOP, form: "Zamów pieczywo" }
            ]
        },
        {
            id: "kancelaria", label: "Kancelaria", icon: "scale", name: "Kancelaria Lex Forma", domain: "lexforma.example",
            nav: [["uslugi", "Specjalizacje"], ["proces", "Współpraca"], ["zespol", "Zespół"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "split", eyebrow: "Radcy prawni · Białystok i zdalnie",
                title: "Prawo dla firm, wyjaśnione po ludzku",
                lead: "Obsługujemy małe i średnie przedsiębiorstwa: umowy, spory, prawo pracy i RODO. Pierwsza konsultacja trwa 30 minut i jest bezpłatna.",
                cta: ["kontakt", "Umów konsultację"], cta2: ["uslugi", "Zakres usług"],
                facts: [["15 lat", "praktyki"], ["300+", "obsłużonych firm"], ["24 h", "na odpowiedź"]]
            },
            sections: [
                { type: "services", variant: "cards", id: "uslugi", eyebrow: "Specjalizacje", title: "W czym pomagamy",
                    items: [["Umowy handlowe", "Przygotowanie i weryfikacja umów z kontrahentami, dostawcami i klientami.", "od 600 zł"], ["Spory sądowe", "Reprezentacja przed sądami powszechnymi i w mediacjach gospodarczych.", "wycena indywidualna"], ["Prawo pracy", "Regulaminy, umowy, rozwiązywanie sporów z pracownikami.", "od 400 zł"], ["Ochrona danych", "Wdrożenie RODO, polityki prywatności, audyty zgodności.", "od 900 zł"]] },
                { type: "steps", id: "proces", eyebrow: "Współpraca", title: "Jak pracujemy",
                    items: [["Rozmowa", "Bezpłatna, 30-minutowa konsultacja online lub w kancelarii."], ["Plan i wycena", "Opisujemy możliwe rozwiązania i podajemy stały koszt."], ["Działanie", "Prowadzimy sprawę i informujemy o każdym etapie."], ["Opieka", "Po zakończeniu zostajemy do dyspozycji w abonamencie."]] },
                { type: "team", id: "zespol", eyebrow: "Zespół", title: "Ludzie, którzy poprowadzą Twoją sprawę",
                    items: [["Anna Lis", "radczyni prawna, partnerka"], ["Michał Bór", "radca prawny, spory"], ["Julia Sowa", "aplikantka, ochrona danych"]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Co mówią nasi klienci", score: "4,9", count: 87,
                    items: [
                        ["W godzinę dostaliśmy jasne wyjaśnienie umowy najmu lokalu, nad którą siedzieliśmy dwa tygodnie. Wycena podana z góry i dotrzymana.", "Paweł D.", "właściciel restauracji", 5, "wrzesień 2026"],
                        ["Spór z kontrahentem zakończył się ugodą bez sądu. Po każdym etapie dostawałem krótkie podsumowanie, bez prawniczego żargonu.", "Krzysztof M.", "firma transportowa", 5, "czerwiec 2026"],
                        ["Bardzo rzeczowe wsparcie przy wdrożeniu RODO, dokumenty gotowe w terminie. Na pierwszą konsultację czekałam tydzień.", "Agnieszka L.", "sklep internetowy", 4, "maj 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Opisz krótko swoją sprawę", lead: "Odpowiemy w ciągu jednego dnia roboczego i zaproponujemy termin konsultacji.",
                    address: "ul. Przykładowa 4/2, 15-002 Białystok", phone: "+48 123 456 789", hours: HOURS_OFFICE, form: "Wyślij zapytanie" }
            ]
        },
        {
            id: "fotograf", label: "Fotograf", icon: "camera", name: "Kadr Studio", domain: "kadr-studio.example",
            nav: [["portfolio", "Portfolio"], ["pakiety", "Pakiety"], ["opinie", "Opinie"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "center", eyebrow: "Fotografia ślubna i portretowa",
                title: "Zdjęcia, które za dwadzieścia lat będą jeszcze ważniejsze",
                lead: "Fotografuję naturalnie, bez ustawiania i sztywnych póz. Reportaże ślubne, sesje rodzinne i portrety biznesowe w całej Polsce.",
                cta: ["kontakt", "Sprawdź termin"], cta2: ["portfolio", "Portfolio"],
                facts: [["140", "reportaży ślubnych"], ["3 tyg.", "na gotowe zdjęcia"], ["5,0", "średnia opinii"]]
            },
            sections: [
                { type: "gallery", id: "portfolio", eyebrow: "Portfolio", title: "Wybrane kadry", items: ["Ślub w plenerze", "Portret biznesowy", "Sesja rodzinna", "Przygotowania", "Pierwszy taniec", "Sesja narzeczeńska"] },
                { type: "services", variant: "pricing", id: "pakiety", eyebrow: "Pakiety", title: "Wybierz zakres sesji",
                    items: [["Portret", "1 200 zł", ["Sesja do 1,5 godziny", "25 obrobionych zdjęć", "Galeria online"]], ["Reportaż", "4 900 zł", ["Do 10 godzin zdjęć", "Ok. 500 zdjęć", "Sesja narzeczeńska gratis", "Galeria online"], true], ["Rodzina", "900 zł", ["Sesja w plenerze lub w domu", "30 obrobionych zdjęć", "Odbitki 15×21"]]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Co mówią pary i rodziny", score: "5,0", count: 64,
                    items: [
                        ["Nikt z gości nie czuł obiektywu, a w galerii jest każdy ważny moment — nawet babcia tańcząca z wujkiem. Zdjęcia dostaliśmy po 17 dniach.", "Ola i Kuba", "reportaż ślubny", 5, "wrzesień 2026"],
                        ["Zwykle wychodzę na zdjęciach sztywno. Tu przez całą sesję rozmawialiśmy i po dziesięciu minutach zapomniałam o aparacie.", "Karolina M.", "portret biznesowy", 5, "sierpień 2026"],
                        ["Dwoje dzieci poniżej pięciu lat i pies, a zdjęcia wyszły spokojne i naturalne. Odbitki wiszą już w salonie.", "Joanna R.", "sesja rodzinna", 5, "czerwiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Zarezerwuj termin", lead: "Napisz datę i miejsce wydarzenia, a odpowiem z dostępnością i propozycją pakietu.",
                    address: "Studio: ul. Przykładowa 30, 15-003 Białystok", phone: "+48 123 456 789", hours: HOURS_OFFICE, form: "Zapytaj o termin" }
            ]
        },
        {
            id: "fitness", label: "Studio treningowe", icon: "bolt", name: "Puls Studio", domain: "puls-studio.example",
            nav: [["grafik", "Grafik"], ["karnety", "Karnety"], ["trenerzy", "Trenerzy"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "split", eyebrow: "Treningi w małych grupach",
                title: "Siła, mobilność i dobra energia — maksymalnie 8 osób na zajęciach",
                lead: "Każdy trening prowadzi trener, który zna Twoje imię i postępy. Pierwsze zajęcia próbne są bezpłatne.",
                cta: ["karnety", "Wybierz karnet"], cta2: ["grafik", "Grafik zajęć"],
                facts: [["8", "osób w grupie"], ["40+", "zajęć tygodniowo"], ["6:30", "pierwszy trening"]]
            },
            sections: [
                { type: "schedule", id: "grafik", eyebrow: "Grafik", title: "Zajęcia w tym tygodniu",
                    days: ["Pon", "Wt", "Śr", "Czw", "Pt"],
                    rows: [["6:30", "Siła", "Mobilność", "Siła", "Mobilność", "Siła"], ["12:00", "", "Kręgosłup", "", "Kręgosłup", ""], ["18:00", "Obwodowy", "Siła", "Obwodowy", "Siła", "Joga"], ["19:15", "Joga", "Boks", "Joga", "Boks", ""]] },
                { type: "services", variant: "pricing", id: "karnety", eyebrow: "Karnety", title: "Trenuj tyle, ile chcesz",
                    items: [["4 wejścia", "199 zł", ["Ważny 30 dni", "Dowolne zajęcia", "Zapisy w aplikacji"]], ["Bez limitu", "349 zł", ["Ważny 30 dni", "Wszystkie zajęcia", "Konsultacja z trenerem", "Zamrożenie do 14 dni"], true], ["Trening osobisty", "150 zł", ["60 minut", "Plan dopasowany do celu", "Pomiary co miesiąc"]]] },
                { type: "team", id: "trenerzy", eyebrow: "Trenerzy", title: "Poznaj nasz zespół",
                    items: [["Kasia Zając", "siła, trening kobiet"], ["Bartek Wilk", "boks, trening obwodowy"], ["Natalia Kos", "joga, mobilność"], ["Paweł Dąb", "rehabilitacja ruchowa"]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Efekty, o których nam piszą", score: "4,9", count: 152,
                    items: [
                        ["Pierwszy raz od lat trenuję regularnie. Małe grupy robią różnicę — trener poprawia technikę przy każdym ćwiczeniu.", "Magda S.", "karnet bez limitu od 8 miesięcy", 5, "wrzesień 2026"],
                        ["Po trzech miesiącach zajęć «Kręgosłup» przestały mnie boleć plecy przy biurku. Polecam każdemu, kto pracuje przy komputerze.", "Robert K.", "zajęcia w południe", 5, "sierpień 2026"],
                        ["Świetna atmosfera i trenerzy, którzy pamiętają, nad czym pracujesz. Wieczorem bywa ciasno na parkingu.", "Iwona P.", "karnet 4 wejścia", 4, "lipiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Zapisz się na trening próbny", lead: "Zostaw numer — oddzwonimy i dobierzemy zajęcia do Twojego poziomu.",
                    address: "ul. Przykładowa 8, 15-004 Białystok", phone: "+48 123 456 789", hours: [["Poniedziałek – piątek", "6:00 – 21:30"], ["Sobota", "8:00 – 14:00"], ["Niedziela", "nieczynne"]], form: "Zapisz mnie" }
            ]
        },
        {
            id: "stomatolog", label: "Gabinet stomatologiczny", icon: "tooth", name: "Gabinet Biały Ząb", domain: "bialy-zab.example",
            nav: [["uslugi", "Leczenie"], ["o-nas", "O gabinecie"], ["zespol", "Lekarze"], ["kontakt", "Rejestracja"]],
            hero: {
                layout: "split", eyebrow: "Stomatologia rodzinna",
                title: "Spokojna wizyta, bez bólu i bez pośpiechu",
                lead: "Leczymy dorosłych i dzieci. Przed każdym zabiegiem dokładnie wyjaśniamy plan i koszty — bez niespodzianek na rachunku.",
                cta: ["kontakt", "Zarezerwuj wizytę"], cta2: ["uslugi", "Cennik"],
                facts: [["20 lat", "doświadczenia"], ["7 dni", "na wolny termin"], ["0 zł", "konsultacja dzieci"]]
            },
            sections: [
                { type: "services", variant: "menu", id: "uslugi", eyebrow: "Leczenie", title: "Zakres usług i cennik", lead: "Ceny orientacyjne. Dokładną wycenę otrzymasz po przeglądzie.",
                    groups: [
                        ["Profilaktyka", [["Przegląd z planem leczenia", "Zdjęcie, konsultacja", "150 zł"], ["Higienizacja", "Skaling, piaskowanie, fluor", "280 zł"], ["Lakowanie zęba", "Dla dzieci i młodzieży", "120 zł"]]],
                        ["Leczenie", [["Wypełnienie kompozytowe", "Jedna powierzchnia", "od 250 zł"], ["Leczenie kanałowe", "Pod mikroskopem", "od 900 zł"], ["Wybielanie", "Nakładkowe, 2 tygodnie", "1 100 zł"]]]
                    ] },
                { type: "about", id: "o-nas", eyebrow: "O gabinecie", title: "Nowoczesny sprzęt, ludzkie podejście",
                    text: "Gabinet działa od 2005 roku. Pracujemy pod mikroskopem, wykonujemy zdjęcia cyfrowe o niskiej dawce promieniowania i zawsze proponujemy kilka wariantów leczenia.",
                    points: ["Znieczulenie komputerowe", "Parking dla pacjentów", "Płatność w ratach 0%", "Gabinet przyjazny dzieciom"] },
                { type: "team", id: "zespol", eyebrow: "Lekarze", title: "Nasz zespół",
                    items: [["lek. dent. Ewa Brzoza", "stomatologia zachowawcza"], ["lek. dent. Adam Klon", "endodoncja"], ["Iga Grab", "higienistka"]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Opinie pacjentów", score: "4,9", count: 241,
                    items: [
                        ["Pierwsza wizyta od kilku lat i zero stresu. Lekarka pokazała mi zdjęcie i omówiła każdy krok, zanim cokolwiek zaczęła.", "Anna W.", "przegląd i plan leczenia", 5, "wrzesień 2026"],
                        ["Leczenie kanałowe pod mikroskopem bez bólu, a rachunek dokładnie taki, jak w planie leczenia.", "Marek Z.", "endodoncja", 5, "lipiec 2026"],
                        ["Syn (6 lat) wyszedł z gabinetu z naklejką i pytaniem, kiedy wracamy. To mówi wszystko.", "Katarzyna B.", "mama pacjenta", 5, "czerwiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Rejestracja", title: "Umów wizytę", lead: "Zadzwoń lub zostaw wiadomość — rejestracja oddzwoni z propozycją terminu.",
                    address: "ul. Przykładowa 21, 15-005 Białystok", phone: "+48 123 456 789", hours: [["Poniedziałek – piątek", "8:00 – 20:00"], ["Sobota", "9:00 – 13:00"], ["Niedziela", "nieczynne"]], form: "Poproś o termin" }
            ]
        },
        {
            id: "architekt", label: "Pracownia architektoniczna", icon: "compass", name: "Pracownia Linia", domain: "pracownia-linia.example",
            nav: [["projekty", "Projekty"], ["proces", "Proces"], ["o-nas", "Pracownia"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "cover", eyebrow: "Architektura i wnętrza",
                title: "Projektujemy domy, w których dobrze się mieszka",
                lead: "Domy jednorodzinne, wnętrza mieszkań i małe obiekty usługowe. Od koncepcji po nadzór autorski na budowie.",
                cta: ["projekty", "Zobacz projekty"], cta2: ["kontakt", "Porozmawiajmy"],
                facts: [["60+", "zrealizowanych projektów"], ["3", "nagrody branżowe"], ["od 2012", "na rynku"]]
            },
            sections: [
                { type: "gallery", id: "projekty", eyebrow: "Projekty", title: "Wybrane realizacje", items: ["Dom pod lasem", "Mieszkanie 54 m²", "Stodoła po przebudowie", "Biuro w kamienicy"] },
                { type: "steps", id: "proces", eyebrow: "Proces", title: "Od pierwszej rozmowy do kluczy",
                    items: [["Analiza", "Poznajemy działkę, budżet i sposób, w jaki żyjecie."], ["Koncepcja", "Dwa warianty bryły i układu z wizualizacjami."], ["Projekt", "Dokumentacja do pozwolenia na budowę i wykonawcza."], ["Nadzór", "Wizyty na budowie i pomoc w wyborze wykonawców."]] },
                { type: "about", id: "o-nas", eyebrow: "Pracownia", title: "Mały zespół, pełna uwaga",
                    text: "Prowadzimy jednocześnie najwyżej sześć projektów, dlatego każdy klient ma stały kontakt z architektem prowadzącym. Lubimy proste bryły, naturalne materiały i dużo światła.",
                    points: ["Projekty energooszczędne", "Wizualizacje 3D w cenie", "Kosztorys inwestorski", "Nadzór autorski"],
                    stats: [["6", "projektów naraz"], ["4", "architektów"]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Rekomendacje inwestorów", score: "5,0", count: 38,
                    items: [
                        ["Dom zaprojektowany pod nasz sposób życia: kuchnia od wschodu, gabinet z dala od sypialni dzieci. Kosztorys pomylił się o niecałe 4%.", "Monika i Adam", "dom jednorodzinny", 5, "sierpień 2026"],
                        ["Przebudowa starej stodoły wydawała się niemożliwa. Pracownia przeprowadziła nas przez uzgodnienia z konserwatorem i pozwolenie na budowę.", "Henryk T.", "przebudowa siedliska", 5, "maj 2026"],
                        ["Wizualizacje bardzo ułatwiły decyzje. Na koncepcję czekaliśmy trochę dłużej, niż zakładaliśmy, ale efekt to wynagrodził.", "Natalia G.", "wnętrze mieszkania", 4, "kwiecień 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Opowiedz nam o swoim miejscu", lead: "Napisz, co planujesz. Pierwsze spotkanie na działce jest bezpłatne w promieniu 50 km.",
                    address: "ul. Przykładowa 3, 15-006 Białystok", phone: "+48 123 456 789", hours: HOURS_OFFICE, form: "Wyślij wiadomość" }
            ]
        },
        {
            id: "programista", label: "Programista freelancer", icon: "code", name: "Kod na Miarę", domain: "kod-na-miare.example",
            nav: [["uslugi", "Usługi"], ["realizacje", "Realizacje"], ["proces", "Proces"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "center", eyebrow: "Strony, aplikacje i automatyzacje",
                title: "Oprogramowanie dopasowane do Twojej firmy, nie odwrotnie",
                lead: "Projektuję i programuję szybkie strony, aplikacje webowe i mobilne oraz narzędzia, które oszczędzają godziny ręcznej pracy.",
                cta: ["kontakt", "Wyceń projekt"], cta2: ["realizacje", "Realizacje"],
                facts: [["40+", "wdrożonych projektów"], ["100", "wynik Lighthouse"], ["2 tyg.", "do pierwszej wersji"]]
            },
            sections: [
                { type: "services", variant: "cards", id: "uslugi", eyebrow: "Usługi", title: "Co mogę dla Ciebie zbudować",
                    items: [["Strony firmowe", "Szybkie, dostępne i łatwe w edycji. Gotowe na wyszukiwarki.", "od 2 500 zł"], ["Aplikacje webowe", "Panele klienta, rezerwacje, systemy wewnętrzne.", "od 9 000 zł"], ["Aplikacje mobilne", "Android i iOS z jednego kodu, z publikacją w sklepach.", "od 12 000 zł"], ["Automatyzacje", "Integracje, raporty i boty, które robią nudną robotę.", "od 1 500 zł"]] },
                { type: "gallery", id: "realizacje", eyebrow: "Realizacje", title: "Ostatnie projekty", items: ["System rezerwacji", "Sklep internetowy", "Aplikacja treningowa", "Panel raportów"] },
                { type: "steps", id: "proces", eyebrow: "Proces", title: "Jak wygląda współpraca",
                    items: [["Warsztat", "Godzina rozmowy o celach, użytkownikach i budżecie."], ["Prototyp", "Klikalny projekt, zanim powstanie pierwsza linia kodu."], ["Wdrożenie", "Pracuję w tygodniowych etapach z wersją do testów."], ["Wsparcie", "Opieka, poprawki i rozwój po starcie."]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Opinie klientów", score: "5,0", count: 29,
                    items: [
                        ["System rezerwacji działa od roku bez jednej awarii. Klienci rezerwują wieczorami, a rano mamy gotowy grafik.", "Łukasz F.", "salon fryzjerski", 5, "wrzesień 2026"],
                        ["Najbardziej doceniam klikalny prototyp. Zanim zapłaciliśmy za programowanie, wiedzieliśmy dokładnie, co dostaniemy.", "Beata O.", "biuro rachunkowe", 5, "lipiec 2026"],
                        ["Automatyczne raporty oszczędzają nam około sześciu godzin tygodniowo. Szybki kontakt także po wdrożeniu.", "Michał J.", "hurtownia", 5, "maj 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Porozmawiajmy o projekcie", lead: "Opisz pomysł w kilku zdaniach. Odpowiem z pytaniami i wstępną wyceną w ciągu 48 godzin.",
                    address: "Pracuję zdalnie · Białystok", phone: "+48 123 456 789", hours: HOURS_OFFICE, form: "Wyślij opis projektu" }
            ]
        },
        {
            id: "kwiaciarnia", label: "Kwiaciarnia", icon: "flower", name: "Pracownia Bukiet", domain: "pracownia-bukiet.example",
            nav: [["oferta", "Bukiety"], ["o-nas", "Pracownia"], ["opinie", "Opinie"], ["kontakt", "Zamów"]],
            hero: {
                layout: "split", eyebrow: "Kwiaty sezonowe z dostawą",
                title: "Bukiety układane rano, dostarczone jeszcze tego samego dnia",
                lead: "Pracujemy z lokalnymi plantacjami. Każdy bukiet jest inny, a kwiaty stoją dłużej, bo nie podróżowały przez pół Europy.",
                cta: ["oferta", "Wybierz bukiet"], cta2: ["kontakt", "Zamów telefonicznie"],
                facts: [["3 h", "dostawa w mieście"], ["100%", "kwiatów z Polski"], ["7 dni", "gwarancji świeżości"]]
            },
            sections: [
                { type: "services", variant: "cards", id: "oferta", eyebrow: "Bukiety", title: "Na każdą okazję",
                    items: [["Bukiet sezonowy", "Kompozycja florysty z kwiatów dostępnych danego dnia.", "od 119 zł"], ["Subskrypcja", "Świeże kwiaty do domu lub biura co tydzień.", "od 99 zł / tydz."], ["Ślub i przyjęcia", "Bukiet ślubny, dekoracje stołów i kościoła.", "wycena indywidualna"], ["Kwiaty w doniczce", "Rośliny domowe z poradą, jak o nie dbać.", "od 49 zł"]] },
                { type: "about", id: "o-nas", eyebrow: "Pracownia", title: "Kwiaty z sąsiedztwa",
                    text: "Zaczynałyśmy od stoiska na targu. Dziś mamy pracownię, ale zasady są te same: kwiaty prosto od hodowców, minimum plastiku i bukiety, które wyglądają jak zerwane z ogrodu.",
                    points: ["Opakowania z papieru", "Bilecik z odręcznym podpisem", "Dostawa rowerem w centrum", "Płatność przy odbiorze"],
                    stats: [["12", "lokalnych hodowców"], ["2 400", "bukietów rocznie"]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Uśmiechy po dostawie", score: "4,9", count: 418,
                    items: [
                        ["Bukiet na urodziny mamy stał prawie dwa tygodnie. Na bileciku odręczny podpis — drobiazg, a robi wrażenie.", "Kamil R.", "dostawa w mieście", 5, "wrzesień 2026"],
                        ["Dekoracje ślubne wyszły dokładnie jak na naszych inspiracjach, a florystka sama zaproponowała tańsze kwiaty sezonowe.", "Zuzanna P.", "ślub i przyjęcie", 5, "czerwiec 2026"],
                        ["Subskrypcja do biura to strzał w dziesiątkę. Raz bukiet przyjechał później, ale od razu dostaliśmy rabat na kolejny tydzień.", "Agata W.", "subskrypcja do biura", 4, "maj 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Zamów", title: "Zamów bukiet", lead: "Napisz okazję, budżet i adres. Zadzwonimy, żeby potwierdzić szczegóły.",
                    address: "ul. Przykładowa 17, 15-007 Białystok", phone: "+48 123 456 789", hours: HOURS_SHOP, form: "Złóż zamówienie" }
            ]
        },
        {
            id: "fryzjer", label: "Fryzjer i barber", icon: "scissors", name: "Brzytwa & Grzebień", domain: "brzytwa-grzebien.example",
            nav: [["cennik", "Cennik"], ["barberzy", "Barberzy"], ["opinie", "Opinie"], ["kontakt", "Rezerwacja"]],
            hero: {
                layout: "split", eyebrow: "Barber shop · strzyżenie i broda",
                title: "Dobre cięcie, gorący ręcznik i kawa w cenie",
                lead: "Strzyżemy klasycznie i nowocześnie, golimy brzytwą i doradzamy, jak dbać o fryzurę na co dzień. Rezerwacja online w minutę.",
                cta: ["kontakt", "Zarezerwuj wizytę"], cta2: ["cennik", "Cennik"],
                facts: [["45 min", "średnia wizyta"], ["4", "barberów"], ["7 dni", "w tygodniu"]]
            },
            sections: [
                { type: "services", variant: "menu", id: "cennik", eyebrow: "Cennik", title: "Usługi i ceny", lead: "Do każdej usługi myjemy włosy i doradzamy w stylizacji.",
                    groups: [
                        ["Włosy", [["Strzyżenie męskie", "Nożyczki i maszynka, stylizacja", "70 zł"], ["Strzyżenie maszynką", "Jedna długość na całej głowie", "45 zł"], ["Strzyżenie dziecięce", "Do 12 lat", "50 zł"]]],
                        ["Broda", [["Trymowanie brody", "Konturowanie, olejek", "50 zł"], ["Golenie brzytwą", "Gorący ręcznik, balsam", "70 zł"], ["Combo: włosy i broda", "Pełna usługa, ok. 75 minut", "110 zł"]]]
                    ] },
                { type: "team", id: "barberzy", eyebrow: "Barberzy", title: "Wybierz swojego barbera",
                    items: [["Kuba Szpak", "fade i krótkie cięcia"], ["Oskar Lin", "długie włosy, styl klasyczny"], ["Daria Sęk", "broda i golenie brzytwą"], ["Igor Wąs", "strzyżenie dzieci"]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Wychodzą zadowoleni", score: "4,9", count: 512,
                    items: [
                        ["Najrówniejszy fade, jaki miałem. Kuba pamiętał, jak strzygłem się miesiąc temu, i od razu wiedział, co poprawić.", "Bartek S.", "stały klient", 5, "wrzesień 2026"],
                        ["Pierwszy raz golenie brzytwą — gorący ręcznik i zero podrażnień. Rezerwacja przez stronę zajęła chwilę.", "Mateusz L.", "golenie brzytwą", 5, "sierpień 2026"],
                        ["Bardzo dobre strzyżenie, miła atmosfera. W sobotę opóźnienie wyniosło kwadrans, ale dostałem kawę i przeprosiny.", "Adrian K.", "strzyżenie i broda", 4, "lipiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Rezerwacja", title: "Zarezerwuj termin", lead: "Napisz, na kiedy i do którego barbera — potwierdzimy SMS-em w ciągu godziny.",
                    address: "ul. Przykładowa 9, 15-008 Białystok", phone: "+48 123 456 789", hours: [["Poniedziałek – piątek", "9:00 – 20:00"], ["Sobota", "9:00 – 16:00"], ["Niedziela", "10:00 – 14:00"]], form: "Poproś o termin" }
            ]
        },
        {
            id: "mechanik", label: "Warsztat samochodowy", icon: "wrench", name: "Auto Serwis Tłok", domain: "auto-serwis-tlok.example",
            nav: [["uslugi", "Usługi"], ["proces", "Jak działamy"], ["opinie", "Opinie"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "cover", eyebrow: "Mechanika · diagnostyka · klimatyzacja",
                title: "Naprawiamy uczciwie: najpierw diagnoza i wycena, potem praca",
                lead: "Serwisujemy samochody osobowe i dostawcze wszystkich marek. Zdjęcia wymienionych części dostajesz na telefon.",
                cta: ["kontakt", "Umów przegląd"], cta2: ["uslugi", "Zakres usług"],
                facts: [["25 lat", "doświadczenia"], ["12 mies.", "gwarancji na naprawy"], ["1 dzień", "większość napraw"]]
            },
            sections: [
                { type: "services", variant: "cards", id: "uslugi", eyebrow: "Usługi", title: "Co robimy na co dzień",
                    items: [["Przegląd okresowy", "Wymiana oleju i filtrów, kontrola 40 punktów, wpis do książki serwisowej.", "od 290 zł"], ["Diagnostyka komputerowa", "Odczyt błędów i test jazdy z mechanikiem.", "120 zł"], ["Hamulce i zawieszenie", "Klocki, tarcze, amortyzatory, geometria kół.", "wycena po diagnozie"], ["Klimatyzacja", "Odgrzybianie, nabicie czynnika, test szczelności.", "od 199 zł"]] },
                { type: "steps", id: "proces", eyebrow: "Jak działamy", title: "Bez niespodzianek na fakturze",
                    items: [["Zgłoszenie", "Opisz objawy — umówimy termin, zwykle w ciągu 2 dni."], ["Diagnoza", "Sprawdzamy auto i dzwonimy z wyceną przed naprawą."], ["Naprawa", "Pracujemy tylko w zakresie, który zaakceptujesz."], ["Odbiór", "Pokazujemy wymienione części i dajemy 12 miesięcy gwarancji."]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Kierowcy nam ufają", score: "4,8", count: 274,
                    items: [
                        ["Inny warsztat chciał wymieniać sprzęgło. Tutaj znaleźli tani czujnik za 180 zł i auto jeździ od pół roku.", "Grzegorz N.", "diagnostyka", 5, "wrzesień 2026"],
                        ["Dostałam zdjęcia starych klocków i tarcz na telefon — pierwszy raz rozumiałam, za co płacę.", "Monika F.", "hamulce", 5, "lipiec 2026"],
                        ["Rzetelna robota i dobra cena. Na wolny termin czekałem cztery dni, więc lepiej dzwonić z wyprzedzeniem.", "Sławomir P.", "przegląd okresowy", 4, "czerwiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Umów wizytę w serwisie", lead: "Podaj markę, model i krótko opisz problem. Oddzwonimy z terminem.",
                    address: "ul. Przykładowa 44, 15-009 Białystok", phone: "+48 123 456 789", hours: [["Poniedziałek – piątek", "7:30 – 17:30"], ["Sobota", "8:00 – 13:00"], ["Niedziela", "nieczynne"]], form: "Wyślij zgłoszenie" }
            ]
        },
        {
            id: "restauracja", label: "Restauracja", icon: "utensils", name: "Bistro Pod Lipą", domain: "bistro-pod-lipa.example",
            nav: [["karta", "Karta"], ["sala", "Sala"], ["opinie", "Opinie"], ["kontakt", "Rezerwacja"]],
            hero: {
                layout: "center", eyebrow: "Kuchnia sezonowa · lunch i kolacje",
                title: "Lokalne produkty, krótka karta i stół, przy którym się nie spieszysz",
                lead: "Gotujemy z tego, co przywożą rolnicy z Podlasia. Karta zmienia się co miesiąc, a lunch dnia — codziennie.",
                cta: ["kontakt", "Zarezerwuj stolik"], cta2: ["karta", "Zobacz kartę"],
                facts: [["30 km", "od pola do talerza"], ["48", "miejsc na sali"], ["39 zł", "lunch dnia"]]
            },
            sections: [
                { type: "services", variant: "menu", id: "karta", eyebrow: "Karta", title: "Październik w kuchni", lead: "Dania bezglutenowe i wegańskie oznaczamy w karcie na miejscu.",
                    groups: [
                        ["Przystawki i zupy", [["Krem z dyni", "Pestki, olej z czarnuszki", "24 zł"], ["Tatar z buraka", "Kozi ser, orzechy włoskie", "32 zł"], ["Pierogi z kaszanką", "Cebula, jabłko", "34 zł"]]],
                        ["Dania główne", [["Pierś z kaczki", "Puree z selera, sos wiśniowy", "68 zł"], ["Sandacz", "Kasza pęczak, masło koperkowe", "62 zł"], ["Gołąbki z kaszą", "Sos grzybowy (wege)", "44 zł"]]]
                    ] },
                { type: "gallery", id: "sala", eyebrow: "Sala", title: "Ciepło, drewno i światło świec", items: ["Sala główna", "Kuchnia otwarta", "Taras pod lipą", "Stół degustacyjny"] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Goście wracają na kolejne sezony", score: "4,7", count: 689,
                    items: [
                        ["Kaczka z sosem wiśniowym — najlepsze danie, jakie jadłam w tym roku. Obsługa doradziła świetne wino.", "Alicja M.", "kolacja we dwoje", 5, "wrzesień 2026"],
                        ["Chodzimy z zespołem na lunch dnia. Szybko, sycąco i za każdym razem coś innego.", "Rafał G.", "lunch firmowy", 5, "wrzesień 2026"],
                        ["Bardzo smaczne jedzenie i piękny taras. W piątek wieczorem kuchnia była przeciążona i czekaliśmy dłużej na drugie danie.", "Piotr i Ania", "kolacja w piątek", 4, "sierpień 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Rezerwacja", title: "Zarezerwuj stolik", lead: "Podaj dzień, godzinę i liczbę osób. Grupy powyżej 8 osób prosimy o telefon.",
                    address: "ul. Przykładowa 2, 15-010 Białystok", phone: "+48 123 456 789", hours: [["Wtorek – piątek", "12:00 – 22:00"], ["Sobota – niedziela", "13:00 – 22:00"], ["Poniedziałek", "nieczynne"]], form: "Zarezerwuj" }
            ]
        },
        {
            id: "weterynarz", label: "Gabinet weterynaryjny", icon: "paw", name: "Przychodnia Łapka", domain: "przychodnia-lapka.example",
            nav: [["uslugi", "Usługi"], ["o-nas", "Przychodnia"], ["zespol", "Lekarze"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "split", eyebrow: "Przychodnia dla psów, kotów i małych zwierząt",
                title: "Spokojna wizyta dla Twojego zwierzaka — i dla Ciebie",
                lead: "Osobne poczekalnie dla psów i kotów, bez pośpiechu i z jasnym planem leczenia. W nagłych przypadkach przyjmujemy bez kolejki.",
                cta: ["kontakt", "Umów wizytę"], cta2: ["uslugi", "Usługi"],
                facts: [["2", "osobne poczekalnie"], ["5", "lekarzy"], ["24/7", "dyżur telefoniczny"]]
            },
            sections: [
                { type: "services", variant: "cards", id: "uslugi", eyebrow: "Usługi", title: "Opieka od szczeniaka do seniora",
                    items: [["Profilaktyka", "Szczepienia, odrobaczanie, czipowanie i paszport.", "od 80 zł"], ["Diagnostyka", "USG, RTG cyfrowe i badania krwi na miejscu.", "od 120 zł"], ["Chirurgia", "Kastracje, zabiegi tkanek miękkich, stomatologia.", "wycena po konsultacji"], ["Wizyty domowe", "Dla zwierząt starszych i bardzo zestresowanych.", "od 180 zł"]] },
                { type: "about", id: "o-nas", eyebrow: "Przychodnia", title: "Mniej stresu, więcej czasu",
                    text: "Wizyty planujemy co 30 minut, żeby nikt nie czekał w tłoku. Koty mają własną poczekalnię i gabinet z feromonami, a psy dostają smaczki za odwagę.",
                    points: ["Gabinet przyjazny kotom", "Wyniki badań tego samego dnia", "Przypomnienia o szczepieniach SMS", "Płatność kartą i BLIK"],
                    stats: [["6 000", "pacjentów pod opieką"], ["30 min", "na każdą wizytę"]] },
                { type: "team", id: "zespol", eyebrow: "Lekarze", title: "Nasz zespół",
                    items: [["lek. wet. Ola Mróz", "choroby wewnętrzne"], ["lek. wet. Jan Bąk", "chirurgia"], ["lek. wet. Ewa Kruk", "koty i małe ssaki"]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Opiekunowie polecają", score: "4,9", count: 368,
                    items: [
                        ["Nasza kotka zwykle panikuje u weterynarza. Tu, w osobnym gabinecie, pierwszy raz dała się spokojnie zbadać.", "Weronika T.", "opiekunka kotki Mili", 5, "wrzesień 2026"],
                        ["W niedzielę w nocy pies zjadł skarpetkę. Dyżurny lekarz oddzwonił w pięć minut i poprowadził nas do rana.", "Dawid C.", "nagły przypadek", 5, "sierpień 2026"],
                        ["Bardzo dokładni lekarze, wszystko wytłumaczone. Ceny trochę wyższe niż gdzie indziej, ale warte tej opieki.", "Halina Z.", "opiekunka psa seniora", 4, "czerwiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Umów wizytę", lead: "Napisz, jakie zwierzę i co się dzieje. W nagłych przypadkach zadzwoń — telefon odbieramy całą dobę.",
                    address: "ul. Przykładowa 15, 15-011 Białystok", phone: "+48 123 456 789", hours: [["Poniedziałek – piątek", "8:00 – 20:00"], ["Sobota", "9:00 – 15:00"], ["Niedziela", "dyżur telefoniczny"]], form: "Poproś o termin" }
            ]
        },
        {
            id: "szkola-jezykowa", label: "Szkoła językowa", icon: "languages", name: "Lingua Most", domain: "lingua-most.example",
            nav: [["kursy", "Kursy"], ["grafik", "Grafik"], ["metoda", "Metoda"], ["kontakt", "Zapisy"]],
            hero: {
                layout: "center", eyebrow: "Angielski · hiszpański · niemiecki",
                title: "Zacznij mówić od pierwszej lekcji, a nie po roku gramatyki",
                lead: "Grupy do 6 osób, lektorzy z doświadczeniem za granicą i bezpłatny test poziomujący. Zajęcia stacjonarne i online.",
                cta: ["kontakt", "Zapisz się na test"], cta2: ["kursy", "Kursy i ceny"],
                facts: [["6", "osób w grupie"], ["A1–C1", "poziomy"], ["94%", "zdanych egzaminów"]]
            },
            sections: [
                { type: "services", variant: "pricing", id: "kursy", eyebrow: "Kursy", title: "Wybierz tryb nauki",
                    items: [["Grupa", "390 zł / mies.", ["2 × 90 min w tygodniu", "Do 6 osób na tym samym poziomie", "Materiały w cenie"]], ["Indywidualnie", "120 zł / 60 min", ["Program pod Twój cel", "Elastyczne terminy", "Online lub w szkole", "Raport postępów co miesiąc"], true], ["Egzamin", "1 490 zł / kurs", ["Przygotowanie do FCE, CAE, DELE", "Próbne egzaminy", "Konsultacje przed testem"]]] },
                { type: "schedule", id: "grafik", eyebrow: "Grafik", title: "Grupy startujące w październiku",
                    days: ["Pon", "Wt", "Śr", "Czw", "Pt"],
                    rows: [["16:00", "Angielski A2", "Hiszpański A1", "Angielski A2", "Hiszpański A1", ""], ["17:45", "Angielski B1", "Niemiecki A1", "Angielski B1", "Niemiecki A1", "Konwersacje"], ["19:30", "Angielski B2", "Angielski C1", "Angielski B2", "Angielski C1", ""]] },
                { type: "steps", id: "metoda", eyebrow: "Metoda", title: "Jak uczymy",
                    items: [["Test", "20 minut rozmowy z lektorem i krótki test pisemny."], ["Plan", "Dobieramy grupę i cel: praca, podróże albo egzamin."], ["Mówienie", "70% zajęć to rozmowa w realnych sytuacjach."], ["Postęp", "Co miesiąc krótki raport i rozmowa o wynikach."]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Kursanci o nas", score: "4,9", count: 203,
                    items: [
                        ["Po trzech miesiącach przestałem bać się spotkań po angielsku w pracy. Lektorka ćwiczyła ze mną dokładnie te sytuacje.", "Tomasz B.", "angielski indywidualnie", 5, "wrzesień 2026"],
                        ["Zdałam CAE z wynikiem A. Próbne egzaminy były trudniejsze niż prawdziwy — i bardzo dobrze.", "Julia K.", "kurs egzaminacyjny", 5, "lipiec 2026"],
                        ["Świetna atmosfera w grupie i dużo mówienia. Wolałbym więcej terminów porannych.", "Marcin W.", "hiszpański A1", 4, "czerwiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Zapisy", title: "Zapisz się na bezpłatny test", lead: "Podaj język i preferowane godziny — zaproponujemy termin testu w ciągu jednego dnia.",
                    address: "ul. Przykładowa 27, 15-012 Białystok", phone: "+48 123 456 789", hours: [["Poniedziałek – piątek", "10:00 – 21:00"], ["Sobota", "9:00 – 14:00"], ["Niedziela", "nieczynne"]], form: "Zapisz mnie" }
            ]
        },
        {
            id: "pensjonat", label: "Pensjonat", icon: "bed", name: "Pensjonat Bory", domain: "pensjonat-bory.example",
            nav: [["pokoje", "Pokoje"], ["galeria", "Okolica"], ["opinie", "Opinie"], ["kontakt", "Rezerwacja"]],
            hero: {
                layout: "cover", eyebrow: "Pensjonat na skraju Puszczy",
                title: "Cisza, las za oknem i śniadania z lokalnych produktów",
                lead: "Dziesięć pokoi w drewnianym domu, sauna, rowery dla gości i szlaki zaczynające się przy furtce.",
                cta: ["kontakt", "Sprawdź dostępność"], cta2: ["pokoje", "Pokoje i ceny"],
                facts: [["10", "pokoi"], ["200 m", "do lasu"], ["9,6", "ocena gości"]]
            },
            sections: [
                { type: "services", variant: "pricing", id: "pokoje", eyebrow: "Pokoje", title: "Wybierz pokój",
                    items: [["Pokój dwuosobowy", "320 zł / noc", ["Łóżko małżeńskie", "Łazienka z prysznicem", "Śniadanie w cenie"]], ["Apartament z kominkiem", "520 zł / noc", ["Do 4 osób", "Kominek i aneks kuchenny", "Taras z widokiem na las", "Śniadanie w cenie"], true], ["Pokój rodzinny", "420 zł / noc", ["Do 4 osób", "Dwa pomieszczenia", "Łóżeczko dla dziecka gratis"]]] },
                { type: "gallery", id: "galeria", eyebrow: "Okolica", title: "Co czeka na miejscu", items: ["Ścieżka w puszczy", "Sauna w ogrodzie", "Jadalnia", "Pomost nad stawem", "Wypożyczalnia rowerów", "Ognisko wieczorem"] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Goście wracają co roku", score: "4,8", count: 431,
                    items: [
                        ["Najlepiej przespany weekend od lat. Śniadania z serami od sąsiadów i jajecznicą na maśle — bajka.", "Kasia i Michał", "weekend we dwoje", 5, "wrzesień 2026"],
                        ["Przyjechaliśmy z dziećmi i psem. Rowery, ognisko, staw — dzieci nie chciały wracać do miasta.", "Rodzina Lisów", "pobyt rodzinny", 5, "sierpień 2026"],
                        ["Piękne miejsce i bardzo czysto. Zasięg telefonu słaby — dla jednych wada, dla nas zaleta.", "Andrzej O.", "tydzień urlopu", 4, "lipiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Rezerwacja", title: "Zapytaj o wolny termin", lead: "Podaj daty przyjazdu i wyjazdu oraz liczbę osób. Odpowiemy z dostępnością i ceną za cały pobyt.",
                    address: "Przykładowo 7, 17-000 Puszcza (fikcyjny adres)", phone: "+48 123 456 789", hours: [["Zameldowanie", "od 15:00"], ["Wymeldowanie", "do 11:00"], ["Recepcja", "8:00 – 21:00"]], form: "Sprawdź dostępność" }
            ]
        },
        {
            id: "biuro-rachunkowe", label: "Biuro rachunkowe", icon: "calculator", name: "Bilans Plus", domain: "bilans-plus.example",
            nav: [["pakiety", "Pakiety"], ["proces", "Współpraca"], ["o-nas", "O biurze"], ["kontakt", "Kontakt"]],
            hero: {
                layout: "split", eyebrow: "Księgowość dla firm i jednoosobowych działalności",
                title: "Ty prowadzisz firmę, my pilnujemy terminów i przepisów",
                lead: "Księgi, kadry i płace, deklaracje i kontakt z urzędami. Dokumenty wysyłasz zdjęciem z telefonu, a wynik finansowy widzisz co miesiąc.",
                cta: ["kontakt", "Poproś o wycenę"], cta2: ["pakiety", "Pakiety"],
                facts: [["180", "firm pod opieką"], ["0", "kar za spóźnienia"], ["OC", "ubezpieczenie biura"]]
            },
            sections: [
                { type: "services", variant: "pricing", id: "pakiety", eyebrow: "Pakiety", title: "Przejrzyste ceny miesięczne",
                    items: [["Start", "250 zł / mies.", ["Ryczałt lub KPiR", "Do 20 dokumentów", "Deklaracje VAT i PIT"]], ["Firma", "490 zł / mies.", ["KPiR lub pełna księgowość", "Do 80 dokumentów", "Kadry do 3 osób", "Raport wyniku co miesiąc"], true], ["Spółka", "od 1 200 zł / mies.", ["Pełna księgowość", "Sprawozdanie finansowe", "Kadry i płace", "Stały opiekun"]]] },
                { type: "steps", id: "proces", eyebrow: "Współpraca", title: "Przejście do nas w 4 krokach",
                    items: [["Rozmowa", "Poznajemy formę działalności i liczbę dokumentów."], ["Umowa", "Stała cena miesięczna, bez ukrytych opłat."], ["Przejęcie", "Sami odbieramy dokumentację od poprzedniego biura."], ["Comiesięczny raport", "Podatki do zapłaty i wynik firmy w jednym mailu."]] },
                { type: "about", id: "o-nas", eyebrow: "O biurze", title: "Księgowe, które odbierają telefon",
                    text: "Biuro prowadzą biegłe księgowe z ponad 15-letnim doświadczeniem. Każda firma ma jedną stałą opiekunkę, która zna jej sprawy i odpowiada w ciągu jednego dnia roboczego.",
                    points: ["Licencja Ministra Finansów", "Ubezpieczenie OC biura", "Elektroniczny obieg dokumentów", "Reprezentacja przed US i ZUS"] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Przedsiębiorcy o nas", score: "5,0", count: 96,
                    items: [
                        ["Przeszedłem z innego biura w połowie roku i nie musiałem nic robić — dokumenty przejęli sami.", "Wojciech H.", "usługi IT, JDG", 5, "wrzesień 2026"],
                        ["Comiesięczny raport z wynikiem i podatkami to coś, czego brakowało mi przez pięć lat działalności.", "Ilona S.", "sklep internetowy", 5, "lipiec 2026"],
                        ["Pani Ewa wyjaśniła mi ulgę na start tak, że wreszcie zrozumiałam, ile zapłacę ZUS. Konkretnie i bez pośpiechu.", "Natalia R.", "gabinet kosmetyczny", 5, "maj 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Kontakt", title: "Poproś o wycenę", lead: "Napisz, jaka to forma działalności i ile mniej więcej dokumentów miesięcznie. Wycena w 24 godziny.",
                    address: "ul. Przykładowa 33/4, 15-013 Białystok", phone: "+48 123 456 789", hours: HOURS_OFFICE, form: "Poproś o wycenę" }
            ]
        },
        {
            id: "remonty", label: "Firma remontowa", icon: "hammer", name: "Fach Remonty", domain: "fach-remonty.example",
            nav: [["uslugi", "Usługi"], ["realizacje", "Realizacje"], ["proces", "Proces"], ["kontakt", "Wycena"]],
            hero: {
                layout: "split", eyebrow: "Remonty mieszkań i domów pod klucz",
                title: "Remont z terminem w umowie i jedną osobą do kontaktu",
                lead: "Łazienki, kuchnie i całe mieszkania. Wycena po bezpłatnych oględzinach, a postęp prac widzisz na zdjęciach co tydzień.",
                cta: ["kontakt", "Umów oględziny"], cta2: ["realizacje", "Realizacje"],
                facts: [["320+", "zakończonych remontów"], ["5 lat", "gwarancji"], ["98%", "w terminie"]]
            },
            sections: [
                { type: "services", variant: "cards", id: "uslugi", eyebrow: "Usługi", title: "Zakres prac",
                    items: [["Łazienka pod klucz", "Hydraulika, płytki, zabudowa i biały montaż.", "od 1 400 zł / m²"], ["Kuchnia", "Instalacje, ściany, podłogi i montaż mebli.", "od 900 zł / m²"], ["Mieszkanie pod klucz", "Pełny remont z koordynacją wszystkich ekip.", "wycena po oględzinach"], ["Prace wykończeniowe", "Gładzie, malowanie, podłogi, drzwi.", "od 60 zł / m²"]] },
                { type: "gallery", id: "realizacje", eyebrow: "Realizacje", title: "Ostatnio oddane", items: ["Łazienka 6 m²", "Kuchnia z wyspą", "Mieszkanie 48 m²", "Poddasze"] },
                { type: "steps", id: "proces", eyebrow: "Proces", title: "Od oględzin do odbioru",
                    items: [["Oględziny", "Bezpłatnie, z pomiarami i rozmową o budżecie."], ["Wycena i umowa", "Kosztorys pozycja po pozycji i termin zakończenia."], ["Realizacja", "Kierownik ekipy wysyła zdjęcia postępu co tydzień."], ["Odbiór", "Wspólny przegląd, protokół i 5 lat gwarancji."]] },
                { type: "reviews", id: "opinie", eyebrow: "Opinie", title: "Zadowoleni klienci", score: "4,8", count: 157,
                    items: [
                        ["Remont łazienki skończony dzień przed terminem z umowy. Ekipa sprzątała po sobie codziennie.", "Ewelina D.", "łazienka 5 m²", 5, "wrzesień 2026"],
                        ["Zdjęcia co piątek to świetny pomysł — byliśmy za granicą i wiedzieliśmy, co się dzieje w mieszkaniu.", "Paweł i Ola", "mieszkanie pod klucz", 5, "lipiec 2026"],
                        ["Dobra jakość prac i uczciwa wycena. Na rozpoczęcie czekaliśmy sześć tygodni, bo mają pełny grafik.", "Ryszard J.", "kuchnia", 4, "czerwiec 2026"]
                    ] },
                { type: "contact", id: "kontakt", eyebrow: "Wycena", title: "Umów bezpłatne oględziny", lead: "Opisz krótko zakres i metraż. Zadzwonimy, żeby ustalić termin wizyty.",
                    address: "ul. Przykładowa 50, 15-014 Białystok", phone: "+48 123 456 789", hours: HOURS_OFFICE, form: "Umów oględziny" }
            ]
        }
    ];

    // ---------- HTML ----------
    function esc(s) {
        return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
    }
    function initials(n) {
        return n.replace(/^(lek\. dent\.)\s*/, "").split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join("");
    }
    function go(id, label, cls) {
        return '<a class="' + cls + '" href="#wz-' + id + '" data-go="' + id + '">' + esc(label) + "</a>";
    }
    function art(t, i, label) {
        return '<div class="wz-art wz-art-' + (i % 4) + '">' +
            '<span class="wz-art-badge">' + icon(t.icon) + "</span>" +
            (label ? '<span class="wz-art-label">' + esc(label) + "</span>" : "") + "</div>";
    }
    function head(s, center) {
        return '<header class="wz-head' + (center ? " wz-head-c" : "") + '">' +
            '<p class="wz-eyebrow">' + esc(s.eyebrow) + "</p><h2>" + esc(s.title) + "</h2>" +
            (s.lead ? '<p class="wz-lead">' + esc(s.lead) + "</p>" : "") + "</header>";
    }

    function hero(t) {
        var h = t.hero;
        var facts = '<dl class="wz-facts">' + h.facts.map(function (f) {
            return "<div><dt>" + esc(f[1]) + "</dt><dd>" + esc(f[0]) + "</dd></div>";
        }).join("") + "</dl>";
        var copy = '<p class="wz-eyebrow">' + esc(h.eyebrow) + "</p><h1>" + esc(h.title) + '</h1><p class="wz-lead">' + esc(h.lead) + "</p>" +
            '<div class="wz-actions">' + go(h.cta[0], h.cta[1], "wz-btn wz-primary") + go(h.cta2[0], h.cta2[1], "wz-btn wz-secondary") + "</div>";
        if (h.layout === "cover") {
            return '<section class="wz-hero wz-hero-cover"><div class="wz-wrap">' +
                '<div class="wz-cover">' + art(t, 0) + '<div class="wz-cover-card wz-card">' + copy + "</div></div>" + facts + "</div></section>";
        }
        if (h.layout === "center") {
            return '<section class="wz-hero wz-hero-center"><div class="wz-wrap">' +
                '<div class="wz-hero-copy">' + copy + "</div>" +
                '<div class="wz-strip">' + art(t, 1) + art(t, 2) + art(t, 3) + "</div>" + facts + "</div></section>";
        }
        return '<section class="wz-hero wz-hero-split"><div class="wz-wrap wz-split">' +
            '<div class="wz-hero-copy">' + copy + facts + "</div>" + art(t, 0) + "</div></section>";
    }

    var SECTION = {
        services: function (s, t) {
            var body;
            if (s.variant === "menu") {
                body = '<div class="wz-menu">' + s.groups.map(function (gr) {
                    return '<div class="wz-card wz-menu-group"><h3>' + esc(gr[0]) + "</h3><ul>" + gr[1].map(function (it) {
                        return '<li><span class="wz-menu-name">' + esc(it[0]) + '</span><span class="wz-dots" aria-hidden="true"></span>' +
                            '<span class="wz-price">' + esc(it[2]) + "</span><small>" + esc(it[1]) + "</small></li>";
                    }).join("") + "</ul></div>";
                }).join("") + "</div>";
            } else if (s.variant === "pricing") {
                body = '<div class="wz-pricing">' + s.items.map(function (it) {
                    return '<div class="wz-card wz-plan' + (it[3] ? " is-featured" : "") + '">' +
                        (it[3] ? '<span class="wz-tag">Najczęściej wybierany</span>' : "") +
                        "<h3>" + esc(it[0]) + '</h3><p class="wz-plan-price">' + esc(it[1]) + "</p><ul>" +
                        it[2].map(function (f) { return "<li>" + icon("check") + esc(f) + "</li>"; }).join("") + "</ul>" +
                        go("kontakt", "Wybieram", "wz-btn " + (it[3] ? "wz-primary" : "wz-secondary")) + "</div>";
                }).join("") + "</div>";
            } else {
                body = '<div class="wz-cards">' + s.items.map(function (it, i) {
                    return '<div class="wz-card wz-service"><span class="wz-num">0' + (i + 1) + "</span><h3>" + esc(it[0]) + "</h3><p>" + esc(it[1]) +
                        '</p><p class="wz-price">' + esc(it[2]) + "</p></div>";
                }).join("") + "</div>";
            }
            return head(s) + body;
        },
        gallery: function (s, t) {
            return head(s) + '<div class="wz-gallery wz-gallery-' + s.items.length + '">' + s.items.map(function (l, i) { return art(t, i + 1, l); }).join("") + "</div>";
        },
        about: function (s, t) {
            return '<div class="wz-split wz-about">' + art(t, 2) + "<div>" + head(s) + '<p class="wz-text">' + esc(s.text) + '</p><ul class="wz-points">' +
                s.points.map(function (p) { return "<li>" + icon("check") + esc(p) + "</li>"; }).join("") + "</ul>" +
                (s.stats ? '<dl class="wz-facts">' + s.stats.map(function (f) { return "<div><dt>" + esc(f[1]) + "</dt><dd>" + esc(f[0]) + "</dd></div>"; }).join("") + "</dl>" : "") +
                "</div></div>";
        },
        steps: function (s) {
            return head(s, true) + '<ol class="wz-steps">' + s.items.map(function (it, i) {
                return '<li class="wz-card"><span class="wz-step-n">' + (i + 1) + "</span><h3>" + esc(it[0]) + "</h3><p>" + esc(it[1]) + "</p></li>";
            }).join("") + "</ol>";
        },
        team: function (s) {
            return head(s) + '<div class="wz-team">' + s.items.map(function (p) {
                return '<div class="wz-card wz-person"><span class="wz-ava">' + esc(initials(p[0])) + "</span><div><h3>" + esc(p[0]) + "</h3><p>" + esc(p[1]) + "</p></div></div>";
            }).join("") + "</div>";
        },
        schedule: function (s) {
            return head(s) + '<div class="wz-card wz-table-wrap" tabindex="0" role="region" aria-label="' + esc(s.title) + '"><table class="wz-table"><thead><tr><th scope="col">Godzina</th>' +
                s.days.map(function (d) { return '<th scope="col">' + esc(d) + "</th>"; }).join("") + "</tr></thead><tbody>" +
                s.rows.map(function (r) {
                    return '<tr><th scope="row">' + esc(r[0]) + "</th>" + r.slice(1).map(function (c) {
                        return "<td>" + (c ? '<span class="wz-class">' + esc(c) + "</span>" : '<span class="wz-empty" aria-label="brak zajęć">—</span>') + "</td>";
                    }).join("") + "</tr>";
                }).join("") + "</tbody></table></div>";
        },
        reviews: function (s) {
            function stars(n) {
                return '<span class="wz-stars" role="img" aria-label="Ocena ' + n + ' na 5">' + [1, 2, 3, 4, 5].map(function (i) {
                    return icon("star", "wz-ico" + (i <= n ? "" : " is-off"));
                }).join("") + "</span>";
            }
            return '<div class="wz-reviews-top">' + head(s) +
                '<div class="wz-card wz-score"><span class="wz-score-n">' + esc(s.score) + '</span><span class="wz-score-txt">' +
                stars(Math.round(parseFloat(s.score.replace(",", ".")))) + "<small>średnia z " + s.count + " opinii</small></span></div></div>" +
                '<div class="wz-reviews">' + s.items.map(function (r) {
                    return '<figure class="wz-card wz-review"><div class="wz-review-top">' + stars(r[3]) + "<small>" + esc(r[4]) + "</small></div>" +
                        "<blockquote>" + esc(r[0]) + "</blockquote>" +
                        '<figcaption><span class="wz-ava wz-ava-sm" aria-hidden="true">' + esc(initials(r[1])) + "</span><span><b>" + esc(r[1]) + "</b><small>" + esc(r[2]) + "</small></span>" +
                        '<span class="wz-verified" title="Opinia po wykonanej usłudze">' + icon("check") + "Klient</span></figcaption></figure>";
                }).join("") + "</div>" +
                '<p class="wz-note">Przykładowe opinie — osoby i treści są fikcyjne.</p>';
        },
        contact: function (s, t) {
            var email = "kontakt@" + t.domain;
            return '<div class="wz-contact">' +
                "<div>" + head(s) +
                '<ul class="wz-info">' +
                "<li>" + icon("pin") + "<span>" + esc(s.address) + "</span></li>" +
                "<li>" + icon("phone") + '<a class="wz-link" href="#" data-noop>' + esc(s.phone) + "</a></li>" +
                "<li>" + icon("mail") + '<a class="wz-link" href="#" data-noop>' + esc(email) + "</a></li></ul>" +
                '<div class="wz-card wz-hours"><h3>' + icon("clock") + "Godziny otwarcia</h3><dl>" +
                s.hours.map(function (h) { return "<div><dt>" + esc(h[0]) + "</dt><dd>" + esc(h[1]) + "</dd></div>"; }).join("") + "</dl></div></div>" +
                '<form class="wz-card wz-form" novalidate>' +
                '<label class="wz-field"><span>Imię</span><input class="wz-input" name="imie" autocomplete="off" placeholder="np. Anna"></label>' +
                '<label class="wz-field"><span>Telefon lub e-mail</span><input class="wz-input" name="kontakt" autocomplete="off" placeholder="Jak mamy odpowiedzieć?"></label>' +
                '<label class="wz-field"><span>Wiadomość</span><textarea class="wz-input" name="tresc" rows="4" placeholder="Kilka słów o tym, czego potrzebujesz"></textarea></label>' +
                '<button class="wz-btn wz-primary" type="submit">' + esc(s.form) + "</button>" +
                '<p class="wz-status" role="status" aria-live="polite"></p>' +
                "</form>" +
                '<div class="wz-map">' + art(t, 3) + '<span class="wz-map-pin">' + icon("pin") + "</span></div>" +
                "</div>";
        }
    };

    function markup(t) {
        return '<header class="wz-top"><div class="wz-wrap wz-top-in">' +
            '<a class="wz-brand" href="#wz-start" data-go="start"><span class="wz-logo">' + icon(t.icon) + "</span>" + esc(t.name) + "</a>" +
            '<nav class="wz-nav" aria-label="Menu strony ' + esc(t.name) + '">' + t.nav.map(function (n) { return go(n[0], n[1], "wz-nav-link"); }).join("") + "</nav>" +
            go(t.hero.cta[0], t.hero.cta[1], "wz-btn wz-primary wz-btn-sm wz-top-cta") +
            '<button class="wz-burger" type="button" aria-expanded="false" aria-label="Otwórz menu">' + icon("menu") + "</button>" +
            "</div></header>" +
            '<div class="wz-body" id="wz-start">' + hero(t) +
            t.sections.map(function (s, i) {
                return '<section class="wz-sec wz-sec-' + s.type + (i % 2 ? " wz-sec-alt" : "") + '" id="wz-' + s.id + '"><div class="wz-wrap">' + SECTION[s.type](s, t) + "</div></section>";
            }).join("") + "</div>" +
            '<footer class="wz-foot"><div class="wz-wrap wz-foot-in">' +
            '<span class="wz-brand"><span class="wz-logo">' + icon(t.icon) + "</span>" + esc(t.name) + "</span>" +
            '<nav class="wz-foot-nav" aria-label="Stopka strony ' + esc(t.name) + '">' + t.nav.map(function (n) { return go(n[0], n[1], "wz-link"); }).join("") + "</nav>" +
            "<small>© 2026 " + esc(t.name) + ". Przykładowa wizytówka — firma i dane są fikcyjne.</small>" +
            "</div></footer>";
    }

    function render(root, id) {
        var t = byId(id);
        root.classList.add("wz");
        root.dataset.template = t.id;
        root.innerHTML = markup(t);
        bind(root);
        return t;
    }

    // ---------- interakcje wewnątrz wizytówki ----------
    function scroller(root) { return root.closest(".wz-screen") || null; }
    function reduced() { return g.matchMedia && g.matchMedia("(prefers-reduced-motion: reduce)").matches; }
    function bind(root) {
        if (root.__wzBound) return;
        root.__wzBound = true;
        root.addEventListener("click", function (e) {
            var a = e.target.closest("[data-go], [data-noop], .wz-burger");
            if (!a || !root.contains(a)) return;
            e.preventDefault();
            var top = root.querySelector(".wz-top");
            if (a.classList.contains("wz-burger")) {
                var open = !top.classList.contains("is-open");
                top.classList.toggle("is-open", open);
                a.setAttribute("aria-expanded", open);
                a.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
                return;
            }
            if (a.hasAttribute("data-noop")) return;
            top.classList.remove("is-open");
            root.querySelector(".wz-burger").setAttribute("aria-expanded", "false");
            var target = root.querySelector("#wz-" + a.dataset.go);
            if (!target) return;
            var box = scroller(root), offset = top.offsetHeight + 8, behavior = reduced() ? "auto" : "smooth";
            if (box) {
                box.scrollTo({ top: target.getBoundingClientRect().top - box.getBoundingClientRect().top + box.scrollTop - (a.dataset.go === "start" ? 0 : offset), behavior: behavior });
            } else {
                g.scrollTo({ top: target.getBoundingClientRect().top + g.scrollY - (a.dataset.go === "start" ? offset + 40 : offset), behavior: behavior });
            }
        });
        root.addEventListener("submit", function (e) {
            var f = e.target.closest(".wz-form");
            if (!f) return;
            e.preventDefault();
            var status = f.querySelector(".wz-status"), name = f.elements.imie, contact = f.elements.kontakt;
            [name, contact].forEach(function (i) { i.removeAttribute("aria-invalid"); });
            var missing = [name, contact].filter(function (i) { return !i.value.trim(); });
            if (missing.length) {
                missing.forEach(function (i) { i.setAttribute("aria-invalid", "true"); });
                status.className = "wz-status is-error";
                status.textContent = "Uzupełnij imię i dane kontaktowe.";
                missing[0].focus();
                return;
            }
            status.className = "wz-status is-ok";
            status.innerHTML = icon("check") + "Dziękujemy! To przykładowa strona — wiadomość nigdzie nie została wysłana.";
            f.reset();
        });
    }

    // ---------- eksport: pliki dla programisty ----------
    // Interakcje strony w wersji samodzielnej (bez ramki podglądu). Serializowane do pliku .html.
    function standalone() {
        var root = document.querySelector(".wz");
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        root.addEventListener("click", function (e) {
            var a = e.target.closest("[data-go], [data-noop], .wz-burger");
            if (!a) return;
            e.preventDefault();
            var top = root.querySelector(".wz-top"), burger = root.querySelector(".wz-burger");
            if (a === burger) {
                var open = !top.classList.contains("is-open");
                top.classList.toggle("is-open", open);
                burger.setAttribute("aria-expanded", open);
                burger.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
                return;
            }
            if (a.hasAttribute("data-noop")) return;
            top.classList.remove("is-open");
            burger.setAttribute("aria-expanded", "false");
            var target = document.getElementById("wz-" + a.dataset.go);
            if (!target) return;
            var y = a.dataset.go === "start" ? 0 : target.getBoundingClientRect().top + window.scrollY - top.offsetHeight - 8;
            window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
        });
        root.addEventListener("submit", function (e) {
            var f = e.target.closest(".wz-form");
            if (!f) return;
            e.preventDefault();
            var status = f.querySelector(".wz-status"), fields = [f.elements.imie, f.elements.kontakt];
            fields.forEach(function (i) { i.removeAttribute("aria-invalid"); });
            var missing = fields.filter(function (i) { return !i.value.trim(); });
            if (missing.length) {
                missing.forEach(function (i) { i.setAttribute("aria-invalid", "true"); });
                status.className = "wz-status is-error";
                status.textContent = "Uzupełnij imię i dane kontaktowe.";
                missing[0].focus();
                return;
            }
            // TODO: podłącz wysyłkę formularza (np. własne API lub usługę formularzy)
            status.className = "wz-status is-ok";
            status.textContent = "Dziękujemy! Odezwiemy się najszybciej, jak to możliwe.";
            f.reset();
        });
    }

    function slug(n) {
        return (String(n).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l")
            .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")) || "wizytowka";
    }

    // arkusz: tokeny stylu (jasny + ciemny) i style komponentów wizytówki
    function css(st, componentCss) {
        return window.Tokens.toCSS(st) + "\n/* ---------- wizytówka ---------- */\n" +
            "body { margin: 0; }\n.wz { min-height: 100vh; }\n\n" + componentCss.trim() + "\n";
    }

    function html(id, st, componentCss) {
        var t = byId(id), T = window.Tokens, f = T.families(st);
        var desc = t.hero.lead;
        return "<!DOCTYPE html>\n" +
            '<html lang="pl">\n<head>\n' +
            '    <meta charset="UTF-8">\n' +
            '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
            "    <title>" + esc(t.name) + " — " + esc(t.hero.eyebrow) + "</title>\n" +
            '    <meta name="description" content="' + esc(desc) + '">\n' +
            '    <meta name="theme-color" content="' + st.light["--bg"] + '" media="(prefers-color-scheme: light)">\n' +
            '    <meta name="theme-color" content="' + st.dark["--bg"] + '" media="(prefers-color-scheme: dark)">\n' +
            (f.length ? '    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
                '    <link rel="stylesheet" href="' + T.fontUrl(f) + '">\n' : "") +
            "    <style>\n" + css(st, componentCss) + "    </style>\n" +
            "</head>\n<body>\n" +
            '<div class="wz">\n' + markup(t).replace(/></g, ">\n<") + "\n</div>\n" +
            "<script>\n(" + standalone.toString() + ")();\n</" + "script>\n" +
            "</body>\n</html>\n";
    }

    // opis dla asystenta AI: treść, struktura i zasady + pełny opis stylu
    function md(id, st) {
        var t = byId(id), T = window.Tokens;
        var NAMES = { services: "Oferta", gallery: "Galeria", about: "O firmie", steps: "Proces", team: "Zespół", schedule: "Grafik", reviews: "Opinie", contact: "Kontakt" };
        function list(a) { return a.map(function (x) { return "- " + x; }).join("\n"); }
        function section(s) {
            var out = ["### " + (NAMES[s.type] || s.type) + " — „" + s.title + "”", "", "- **Kotwica:** `#wz-" + s.id + "`" + (s.eyebrow ? " · nadtytuł: " + s.eyebrow : "")];
            if (s.lead) out.push("- **Wstęp:** " + s.lead);
            out.push("");
            if (s.type === "services" && s.groups) s.groups.forEach(function (gr) {
                out.push("**" + gr[0] + "**", "", "| Pozycja | Opis | Cena |", "|---|---|---|");
                gr[1].forEach(function (i) { out.push("| " + i[0] + " | " + i[1] + " | " + i[2] + " |"); });
                out.push("");
            });
            else if (s.type === "services" && s.variant === "pricing") s.items.forEach(function (i) {
                out.push("- **" + i[0] + "** — " + i[1] + (i[3] ? " (wyróżniony: „Najczęściej wybierany”)" : "") + ": " + i[2].join(", "));
            });
            else if (s.type === "services") s.items.forEach(function (i) { out.push("- **" + i[0] + "** — " + i[1] + " Cena: " + i[2] + "."); });
            else if (s.type === "gallery") out.push(list(s.items.map(function (i) { return i + " (miejsce na zdjęcie)"; })));
            else if (s.type === "about") { out.push(s.text, "", list(s.points)); if (s.stats) out.push("", list(s.stats.map(function (x) { return x[0] + " — " + x[1]; }))); }
            else if (s.type === "steps") s.items.forEach(function (i, n) { out.push((n + 1) + ". **" + i[0] + "** — " + i[1]); });
            else if (s.type === "team") out.push(list(s.items.map(function (p) { return p[0] + " — " + p[1]; })));
            else if (s.type === "schedule") {
                out.push("| Godzina | " + s.days.join(" | ") + " |", "|---" + s.days.map(function () { return "|---"; }).join("") + "|");
                s.rows.forEach(function (r) { out.push("| " + r.map(function (c) { return c || "—"; }).join(" | ") + " |"); });
            }
            else if (s.type === "reviews") {
                out.push("Ocena średnia **" + s.score + "/5** z " + s.count + " opinii.", "");
                s.items.forEach(function (r) { out.push("> „" + r[0] + "” — **" + r[1] + "**, " + r[2] + " · " + r[3] + "/5 · " + r[4], ""); });
            }
            else if (s.type === "contact") {
                out.push("- Adres: " + s.address, "- Telefon: " + s.phone, "- E-mail: kontakt@" + t.domain,
                    "- Godziny: " + s.hours.map(function (h) { return h[0] + " " + h[1]; }).join("; "),
                    "- Formularz: imię, telefon lub e-mail (wymagane), wiadomość; przycisk „" + s.form + "”");
            }
            return out.join("\n");
        }
        var style = T.toMarkdown(st).replace(/^# .*\n/, "").replace(/^## /gm, "### ");
        return [
            "# " + t.name + " — strona-wizytówka",
            "",
            "> " + t.label + " · " + t.hero.eyebrow + " · styl „" + st.name + "”",
            "",
            "Ten plik opisuje kompletną jednostronicową wizytówkę firmy: strukturę, treści i system wizualny. " +
            "Przekaż go asystentowi AI (lub programiście) razem z plikami `.html` i `.css`, aby rozwijać stronę bez utraty spójności.",
            "",
            "**Uwaga:** firma, osoby, adres i dane kontaktowe są fikcyjne — przed publikacją zastąp je prawdziwymi.",
            "",
            "## Struktura strony",
            "",
            "1. **Nagłówek** (przyklejony, półprzezroczysty z rozmyciem): logo + nazwa, menu: " + t.nav.map(function (n) { return n[1] + " → `#wz-" + n[0] + "`"; }).join(", ") +
                ", przycisk „" + t.hero.cta[1] + "”. Poniżej 680 px menu chowa się pod przyciskiem hamburgera.",
            "2. **Hero** (układ `" + t.hero.layout + "`): nadtytuł „" + t.hero.eyebrow + "”, nagłówek H1, wstęp, przyciski „" + t.hero.cta[1] + "” i „" + t.hero.cta2[1] + "”, liczby: " +
                t.hero.facts.map(function (f) { return f[0] + " " + f[1]; }).join(", ") + ".",
            t.sections.map(function (s, i) { return (i + 3) + ". **" + (NAMES[s.type] || s.type) + "** — " + s.title; }).join("\n"),
            (t.sections.length + 3) + ". **Stopka**: nazwa, linki menu, prawa autorskie.",
            "",
            "## Treść",
            "",
            "### Hero",
            "",
            "- **H1:** " + t.hero.title,
            "- **Wstęp:** " + t.hero.lead,
            "",
            t.sections.map(section).join("\n\n"),
            "",
            "## Zasady budowy",
            "",
            "- Jedna strona, semantyczny HTML: `header`, `nav`, `main`/`section` z nagłówkami H2, `footer`. Jeden H1 w hero.",
            "- Wszystkie kolory, kroje, promienie i cienie wyłącznie z tokenów CSS opisanych niżej — nic na sztywno.",
            "- Układ oparty na `container queries` (`.wz { container-type: inline-size }`): progi 860, 760, 680, 640 i 560 px.",
            "- Zdjęcia zastąpione kaflami `.wz-art` (gradient z akcentów + ikona). W produkcji wstaw zdjęcia `<img>` z `alt`, `width`, `height` i `loading=\"lazy\"`.",
            "- Kolorowy tekst tylko w `--link`; tekst na akcencie w `--on-accent` — wtedy kontrast WCAG jest zagwarantowany.",
            "- Formularz: walidacja przy wysyłce, błędy w `--danger` z `aria-invalid`, komunikat w `role=\"status\"`. Wysyłkę trzeba podłączyć (w pliku jest `TODO`).",
            "- Ruch: tylko `transform` i `opacity`; przy `prefers-reduced-motion` przewijanie bez animacji.",
            "- Tryb ciemny działa automatycznie według ustawień systemu (`prefers-color-scheme`).",
            "",
            "## Styl „" + st.name + "”",
            "",
            style.trim(),
            ""
        ].join("\n");
    }

    function byId(id) {
        return TEMPLATES.filter(function (t) { return t.id === id; })[0] || TEMPLATES[0];
    }

    g.Wizytowki = { TEMPLATES: TEMPLATES, render: render, byId: byId, icon: icon, slug: slug, files: { html: html, css: css, md: md } };
})(window);
