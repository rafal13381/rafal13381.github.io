// Kolekcja rozszerzona: 100 stylów zapisanych jako „ziarna”.
// Kolory: [tło, tekst, akcent, akcent 2] dla trybu jasnego i ciemnego.
// Pozostałe tokeny (powierzchnie, ramki, cienie, kontrast) liczy style/tokens.js.
(function () {
    var list = [];
    function S(id, name, cat, material, shape, font, art, tagline, use, l, d) {
        list.push({
            id: id, name: name, cat: cat, material: material, shape: shape, font: font, art: art || null,
            tagline: tagline, use: use, l: l.split(" "), d: d.split(" ")
        });
    }

    // ---------- niebieskie ----------
    S("harbor", "Harbor", "niebieskie", "flat", "round", "jakarta", "", "Spokojny granat portu i ciepły pomarańczowy sygnał.", "Fintech, bankowość, aplikacje płatnicze", "#F5F8FC #0F1B2D #1F5FD6 #E8742A", "#0B1220 #E8EEF8 #6EA2FF #FFA866");
    S("cobalt-pulse", "Cobalt Pulse", "niebieskie", "brutal", "sharp", "grotesk", "dots", "Kobalt, czarne kontury i twarde cienie.", "Startupy, landing pages, kampanie", "#F3F1EA #111111 #1E40FF #FFCC00", "#101014 #F5F5F0 #5B7BFF #FFD84D");
    S("ice-field", "Ice Field", "niebieskie", "glass", "pill", "outfit", "blobs", "Lodowe szkło na chłodnej mgle błękitu.", "Pogoda, podróże, aplikacje konsumenckie", "#EAF2FB #0E1A2B #2273E6 #5BC8F5", "#071321 #EAF3FF #6FB1FF #7FDBFF");
    S("tally", "Tally", "niebieskie", "outline", "sharp", "plex", "lines", "Precyzja arkusza: cienkie linie, cyfry w mono, granat.", "Księgowość, raporty, tabele danych", "#FFFFFF #0B1526 #1546A8 #0E8A6A", "#0A0F18 #E6ECF5 #79A3FF #3FD3A6");
    S("night-watch", "Night Watch", "niebieskie", "neon", "soft", "chakra", "grid", "Nocny dyżur: elektryczny błękit na granatowej siatce.", "Monitoring, DevOps, centra operacyjne", "#EEF3FA #0A1630 #0059FF #00B3FF", "#050B1A #DCE7FF #3D8BFF #00D1FF");
    S("skyline", "Skyline", "niebieskie", "flat", "pill", "sora", "", "Lekki błękit nieba i dużo powietrza.", "SaaS, onboarding, aplikacje produktowe", "#F7FAFF #111827 #2563EB #F59E0B", "#0B1120 #F1F5FF #7AA7FF #FBBF24");
    S("denim", "Denim", "niebieskie", "paper", "soft", "worksans", "", "Sprane indygo, ciepły papier, rzemieślniczy charakter.", "E-commerce odzieżowy, marki lifestyle", "#F6F3EE #1B2233 #2F4B85 #C8553D", "#12151D #EFEAE2 #8EA8E0 #F0896F");
    S("admiral", "Admiral", "niebieskie", "flat", "soft", "dmserif", "", "Dostojny granat, szeryfowe nagłówki, złoty detal.", "Kancelarie, ubezpieczenia, instytucje", "#F8F7F3 #0F1A33 #1B3A7A #B08A2E", "#0B1222 #F2EFE6 #8FA9E8 #E2BE62");
    S("bluebell", "Bluebell", "niebieskie", "soft", "round", "nunito", "", "Miękki neumorfizm w odcieniu dzwonka.", "Aplikacje zdrowotne, medytacja, dzieci", "#E8EDF6 #1E2A44 #4A6FD8 #E07AA0", "#1A2030 #E6ECF8 #8FA8F0 #F2A3C0");
    S("beacon", "Beacon", "niebieskie", "outline", "soft", "inter", "", "Czysty, techniczny, z jednym wyraźnym sygnałem.", "Narzędzia deweloperskie, dokumentacja API", "#FAFBFC #0D1117 #0969DA #8250DF", "#0D1117 #E6EDF3 #58A6FF #BC8CFF");
    S("undertow", "Undertow", "niebieskie", "glass", "round", "manrope", "glow", "Głęboka toń oceanu z poświatą akwamaryny.", "Muzyka, streaming, aplikacje medialne", "#E9F0F8 #0B1B2E #1D5FBF #18B5A4", "#04101F #E3EEFA #5C9DFF #2EE6CF");
    S("blueprint", "Blueprint", "niebieskie", "outline", "sharp", "spacemono", "grid", "Kalka techniczna: biała linia na błękicie.", "Architektura, inżynieria, portfolio techniczne", "#EEF4FF #0B2A6B #1747C9 #E2503B", "#0A2463 #E8F0FF #9DBBFF #FF8A75");

    // ---------- turkusowe ----------
    S("lagoon", "Lagoon", "turkusowe", "glass", "pill", "jakarta", "blobs", "Turkusowa laguna pod mlecznym szkłem.", "Turystyka, rezerwacje, wellness", "#ECF7F6 #0D2A2A #0F8C86 #FF7A59", "#061A1A #E2F5F3 #3DD6CB #FF9C80");
    S("mint-console", "Mint Console", "turkusowe", "neon", "sharp", "jetbrains", "grid", "Miętowy fosfor na grafitowym ekranie.", "CLI, narzędzia deweloperskie, logi", "#F2F7F5 #0E1F1A #0B8F6E #2C7BE5", "#0A0F0D #D7F5EA #34E3B0 #6CB4FF");
    S("hydro-lab", "Hydro Lab", "turkusowe", "flat", "round", "sora", "", "Laboratoryjna czystość z akwamarynowym akcentem.", "Biotech, nauka, aplikacje badawcze", "#F6FAFA #10211F #00897B #5C6BC0", "#0C1716 #E5F2F0 #4DD0C0 #9FA8FF");
    S("reef", "Reef", "turkusowe", "brutal", "soft", "bricolage", "dots", "Rafa: turkus, koral i grube kontury.", "Edukacja, kampanie społeczne, eventy", "#EFFAF7 #0E1B1A #00A3A3 #FF6B4A", "#0E1716 #EAF7F4 #3FE0D8 #FF8E73");
    S("sea-glass", "Sea Glass", "turkusowe", "paper", "soft", "lora", "", "Szkło wyrzucone przez morze: zgaszona zieleń morska.", "Blogi, książki, rękodzieło", "#F4F6F2 #1E2B28 #3E7F78 #B5654A", "#131A18 #E9EEEA #8CC9BF #E3A18A");
    S("cyan-ops", "Cyan Ops", "turkusowe", "flat", "sharp", "plex", "", "Chłodny cyjan dla dashboardów infrastruktury.", "Chmura, infrastruktura, panele metryk", "#F5F8FA #0C1A24 #0E7490 #D97706", "#0A1218 #E2EEF4 #22D3EE #FBBF24");
    S("teal-house", "Teal House", "turkusowe", "soft", "pill", "outfit", "", "Glinkowy turkus, pucołowate kształty.", "Aplikacje domowe, smart home, rodzina", "#E6F1EF #1A2E2B #1F8A80 #F2A541", "#17221F #E4F0ED #66D1C4 #F7C46C");
    S("fjord", "Fjord", "turkusowe", "glass", "soft", "dmsans", "blobs", "Zimny fiord: granit, mgła i lodowy turkus.", "Outdoor, podróże, aplikacje pogodowe", "#EDF3F3 #13201F #1C7C7D #5E7CE2", "#0B1314 #E3EDEC #5CC8C6 #91A7FF");
    S("jade-court", "Jade Court", "turkusowe", "paper", "soft", "playfair", "", "Jadeit i kość słoniowa — elegancja herbaciarni.", "Restauracje, hotele, marki premium", "#F7F5EE #14231F #1F6F5C #A6763A", "#0F1714 #EFECE2 #6CC4AB #D9AA6C");
    S("pool-party", "Pool Party", "turkusowe", "neon", "pill", "fredoka", "glow", "Basen nocą: świecący turkus i różowe światło.", "Gry, eventy, aplikacje rozrywkowe", "#EAFBFB #0D2326 #00A8B5 #FF4FA3", "#071518 #DDFBFC #2EF2FF #FF6FB8");
    S("verdigris", "Verdigris", "turkusowe", "outline", "soft", "instrument", "lines", "Patyna na miedzi, szeryf i cienka kreska.", "Muzea, kultura, wydawnictwa", "#F5F4EF #1B2422 #2E7A6E #9A5B2E", "#111715 #ECEAE3 #7FCDBF #D6995F");

    // ---------- zielone ----------
    S("fern", "Fern", "zielone", "flat", "round", "manrope", "", "Leśna zieleń paproci, ciepła biel, dużo spokoju.", "Ekologia, ogrodnictwo, aplikacje lifestyle", "#F6F8F3 #16231A #2F7D3A #D98E04", "#0E150F #E7F0E6 #6FCF7F #F2B640");
    S("matcha", "Matcha", "zielone", "soft", "pill", "nunito", "", "Kremowa matcha, miękkie wytłoczenia.", "Kawiarnie, zdrowe jedzenie, nawyki", "#EEF1E6 #232B1E #5C8A2E #C2703D", "#1B2017 #ECEFE3 #A5D46A #E8A06F");
    S("circuit", "Circuit", "zielone", "neon", "sharp", "spacemono", "grid", "Zielony laser na płytce drukowanej.", "Hardware, IoT, elektronika", "#F1F6F1 #0B1A0E #0A8A2E #00A3FF", "#050B06 #D6FADD #39FF6A #36C5FF");
    S("sagebrush", "Sagebrush", "zielone", "paper", "soft", "newsreader", "", "Szałwia, papier i spokojna lektura.", "Blogi, poradniki, newslettery", "#F5F4EE #1F2620 #4F6F52 #A8553A", "#141813 #ECEDE5 #9DC1A0 #E19A80");
    S("lime-punch", "Lime Punch", "zielone", "brutal", "sharp", "archivo", "dots", "Limonka, czerń i zero kompromisów.", "Kampanie, sport, marki młodzieżowe", "#F4F7EC #0E0E0E #4C9A00 #FF3D7F", "#0F110C #F3F7EA #B6F23B #FF6B9C");
    S("pinewood", "Pinewood", "zielone", "flat", "soft", "fraunces", "", "Głęboka zieleń iglaków i złoto.", "Fundacje, banki spółdzielcze, marki tradycyjne", "#F7F6F0 #102018 #1E5B3A #B7862B", "#0B1510 #EDEDE4 #67C28F #E0B45A");
    S("meadow", "Meadow", "zielone", "glass", "pill", "sora", "blobs", "Łąka w porannym świetle, mleczne szkło.", "Aplikacje rodzinne, wellbeing, planery", "#F0F6EC #18241A #3A8F3E #E0A526", "#0C140D #E6F2E3 #7FD686 #F3C653");
    S("moss", "Moss", "zielone", "soft", "round", "dmsans", "", "Mech na kamieniu: stłumiona oliwka, miękkie cienie.", "Outdoor, sprzęt turystyczny, survival", "#E9ECE3 #22281C #5E6E2F #8C5A3C", "#1A1D16 #E6E9DE #B4C77A #D79B78");
    S("greenback", "Greenback", "zielone", "outline", "sharp", "plexmono", "lines", "Zieleń banknotu, tabelaryczna dyscyplina.", "Finanse, giełda, portfele inwestycyjne", "#FBFCFA #0E1A12 #13703D #B4232C", "#0B110D #E3F1E7 #4ED48A #FF6B6B");
    S("kiwi", "Kiwi", "zielone", "flat", "pill", "fredoka", "", "Soczysta zieleń kiwi, radosne zaokrąglenia.", "Aplikacje dla dzieci, edukacja, gry casual", "#F6FBEF #1A2610 #4D9A1A #FF8A3D", "#11180B #EEF8E2 #9BE05A #FFAA6E");
    S("botanica", "Botanica", "zielone", "paper", "soft", "dmserif", "", "Zielnik: butelkowa zieleń, kremowy papier, szeryf.", "Kosmetyki naturalne, kwiaciarnie, sklepy", "#F6F1E7 #1A2A20 #2C6B4A #C0603F", "#121A15 #F1ECE1 #7CC9A0 #EB9472");
    S("emerald-night", "Emerald Night", "zielone", "glass", "round", "bricolage", "glow", "Szmaragdowa poświata na czarnym aksamicie.", "Kluby, muzyka, aplikacje nocne", "#EDF6F1 #0E1E16 #0E8F5A #9B5DE5", "#040C08 #DFF5EA #2EE59D #B98CFF");

    // ---------- żółte i pomarańczowe ----------
    S("saffron", "Saffron", "zolte", "flat", "round", "jakarta", "", "Szafran i grafit — ciepło z charakterem.", "Restauracje, dostawy jedzenia, rezerwacje", "#FFF9F0 #241A0F #D9480F #2B6CB0", "#17110A #FBF1E4 #FF8A4C #7FB2F0");
    S("marigold", "Marigold", "zolte", "brutal", "sharp", "grotesk", "dots", "Nagietkowy żółty, czarne ramki, plakatowa energia.", "Festiwale, kampanie, portfolio kreatywne", "#FFF6D6 #141414 #E8A400 #2A4BFF", "#15130C #FFF4D1 #FFC93C #7B8CFF");
    S("sunset-strip", "Sunset Strip", "zolte", "neon", "pill", "unbounded", "glow", "Zachód słońca nad autostradą: pomarańcz i magenta.", "Muzyka, eventy, retro gry", "#FFF3EC #2A1209 #E8590C #D6336C", "#140806 #FFE9DE #FF8A3D #FF5CA8");
    S("beeswax", "Beeswax", "zolte", "soft", "round", "nunito", "", "Miód, wosk i miękkie, ciepłe bryły.", "Aplikacje rodzinne, przepisy, planery", "#FBF3E2 #2B2214 #C77D0A #6B8E23", "#1E1810 #F8EEDB #F2B441 #A9CC6A");
    S("citrus", "Citrus", "zolte", "flat", "pill", "outfit", "", "Świeży cytrus: żółć, zieleń i biel.", "Fitness, dieta, zakupy spożywcze", "#FFFDF2 #1E1E10 #C99A00 #2E9E5B", "#14140B #FAF8E6 #FFD43B #5FD394");
    S("amber-crt", "Amber CRT", "zolte", "neon", "sharp", "jetbrains", "lines", "Bursztynowy monitor z lat osiemdziesiątych.", "Retro, narzędzia CLI, gry tekstowe", "#FBF5EA #22180A #B35C00 #6E7F00", "#0E0A04 #FFD9A0 #FFB000 #D4E157");
    S("clementine", "Clementine", "zolte", "glass", "round", "sora", "blobs", "Mandarynkowe szkło w ciepłym świetle popołudnia.", "Podróże, social media, aplikacje konsumenckie", "#FFF2E8 #2A170B #E8650A #F2B400", "#160B05 #FFEDE0 #FF9447 #FFD24A");
    S("mustard", "Mustard", "zolte", "paper", "soft", "playfair", "", "Musztardowa żółć, kremowy papier, styl magazynu.", "Magazyny, kulinaria, wydawnictwa", "#F8F2E3 #1F1A10 #A87A00 #7A2E2E", "#16130B #F3ECDB #E8B634 #E08484");
    S("hazard", "Hazard", "zolte", "brutal", "sharp", "archivo", "lines", "Taśma ostrzegawcza: żółty, czarny, bez ozdobników.", "Budownictwo, logistyka, przemysł", "#FFF8D9 #111111 #F5B800 #E03A1E", "#111111 #FFF6CC #FFC800 #FF6A4D");
    S("apricot", "Apricot", "zolte", "soft", "pill", "fredoka", "", "Morelowa glinka, pucołowate przyciski.", "Aplikacje dla dzieci, edukacja, zabawki", "#FCEDE3 #2E1F17 #E07A3F #4A90C2", "#20160F #F8E8DC #F7A36E #7DB8E3");
    S("cinder", "Cinder", "zolte", "outline", "soft", "bricolage", "", "Żar węgli: pomarańczowy płomień na grafitowej linii.", "Gry, sport, aplikacje treningowe", "#FAF8F5 #1A1410 #D4500B #3B6FD4", "#12100E #F3EDE7 #FF7A33 #7FA6FF");
    S("golden-hour", "Golden Hour", "zolte", "glass", "soft", "manrope", "blobs", "Wydmy o złotej godzinie, piaskowe szkło.", "Turystyka, hotele, fotografia", "#F7EFE3 #2A1E12 #C2661A #7C5CBF", "#150F09 #F6EBDD #F09A50 #B49BFF");

    // ---------- czerwone ----------
    S("crimson-press", "Crimson Press", "czerwone", "paper", "sharp", "newsreader", "lines", "Gazetowa czerwień i rytm kolumn.", "Media, newsy, wydawnictwa", "#FAF7F2 #161212 #B3121F #1F3A5F", "#121010 #F2ECE6 #FF5A5F #8FB0D9");
    S("pit-lane", "Pit Lane", "czerwone", "brutal", "sharp", "unbounded", "", "Bolid: czerwień, biel i energia prędkości.", "Motoryzacja, sport, e-sport", "#F5F5F5 #0E0E0E #E10600 #0A3D91", "#0E0E10 #F5F5F5 #FF3B30 #6E9BFF");
    S("cherry-soda", "Cherry Soda", "czerwone", "glass", "pill", "outfit", "blobs", "Wiśniowa oranżada pod błyszczącym szkłem.", "Napoje, food trucki, aplikacje rozrywkowe", "#FFF0F1 #2A0D12 #D7263D #FF9F1C", "#16070A #FFE6E9 #FF5C70 #FFB84D");
    S("brick-mortar", "Brick & Mortar", "czerwone", "flat", "soft", "worksans", "", "Cegła, beton i solidne rzemiosło.", "Budownictwo, nieruchomości, warsztaty", "#F6F3F0 #231816 #A33A2A #44617A", "#161111 #F1EAE6 #E87763 #8DB0CC");
    S("redline", "Redline", "czerwone", "outline", "sharp", "plex", "grid", "Krytyczny alert: czerwona linia na szarej siatce.", "Bezpieczeństwo, SOC, systemy alarmowe", "#F7F7F8 #121316 #C8102E #0B7A75", "#0C0D10 #E8E9EC #FF4D5E #2DD4BF");
    S("lacquer", "Lacquer", "czerwone", "flat", "round", "dmserif", "", "Laka: głęboka czerwień i złoto na czerni.", "Restauracje, sztuka, marki luksusowe", "#F8F4EE #1A0F0D #9E1B1B #B8892E", "#0E0807 #F4EBE3 #F0605A #E6BC62");
    S("poppy", "Poppy", "czerwone", "flat", "pill", "sora", "", "Maki na łące: radosna czerwień i zieleń.", "Aplikacje społecznościowe, wydarzenia lokalne", "#FFF7F5 #24110E #E0322B #2E8B57", "#170C0A #FCEDEA #FF6B5E #5FD18C");
    S("rouge-arcade", "Rouge Arcade", "czerwone", "neon", "soft", "chakra", "glow", "Automat do gier: czerwony neon i cyjan.", "Gry, e-sport, streaming", "#FFF2F3 #250A10 #E5173F #0096C7", "#0B0306 #FFE3E8 #FF2E63 #08D9D6");
    S("rosehip", "Rosehip", "czerwone", "soft", "round", "lora", "", "Owoc dzikiej róży: miękka czerwień, ciepłe cienie.", "Herbaciarnie, rękodzieło, kosmetyki", "#F6ECE9 #2B1916 #B5413A #6D7F4E", "#1E1513 #F3E6E2 #EA837B #ADC08C");
    S("vermilion", "Vermilion", "czerwone", "outline", "round", "inter", "", "Cynobrowy akcent na minimalistycznej bieli.", "Portfolio, agencje, studia projektowe", "#FFFFFF #111111 #E2341D #3D5AFE", "#0B0B0B #F2F2F2 #FF6A50 #8C9EFF");

    // ---------- różowe ----------
    S("blush", "Blush", "rozowe", "glass", "pill", "jakarta", "blobs", "Pudrowy róż pod perłowym szkłem.", "Uroda, moda, aplikacje lifestyle", "#FCF1F4 #2A1520 #C2185B #7E57C2", "#160A10 #FBE7EF #FF6FA5 #B39DFF");
    S("bubblegum", "Bubblegum", "rozowe", "brutal", "soft", "fredoka", "dots", "Guma balonowa, grube kontury i komiksowa radość.", "Gry dla dzieci, naklejki, social", "#FFEAF4 #1C0F17 #FF3D9A #00B8D9", "#170B12 #FFE5F2 #FF6FB5 #3DDCF5");
    S("peony", "Peony", "rozowe", "paper", "soft", "fraunces", "", "Piwonia, atrament i miękki szeryf.", "Śluby, zaproszenia, florystyka", "#FBF4F2 #2A1A1E #B03A6A #4F6D5A", "#19111A #F6EAEC #F089B5 #98C3A6");
    S("flamingo", "Flamingo", "rozowe", "flat", "round", "sora", "", "Tropikalny róż i turkusowa woda.", "Podróże, hotele, aplikacje wakacyjne", "#FFF6F8 #2B1218 #E5397A #0097A7", "#180A0F #FFE9EF #FF77A8 #4DD5E3");
    S("synthwave", "Synthwave", "rozowe", "neon", "sharp", "unbounded", "grid", "Lata osiemdziesiąte: różowy neon na fioletowej siatce.", "Muzyka elektroniczna, gry retro, eventy", "#FBEFFB #22102E #D6168C #5B3BE0", "#12061E #FCE4FF #FF3EC8 #7C5CFF");
    S("rosewater", "Rosewater", "rozowe", "soft", "pill", "nunito", "", "Woda różana: delikatny róż i mleczne wytłoczenia.", "Zdrowie kobiet, dziennik, medytacja", "#F5E9EC #2E1D22 #C2577A #6B8CAE", "#211819 #F3E5E9 #F09AB7 #A3C2E3");
    S("rose-mono", "Rose Mono", "rozowe", "outline", "sharp", "jetbrains", "lines", "Monospace, siatka i jeden ostry różowy akcent.", "Narzędzia deweloperskie, dokumentacja, changelogi", "#FFFFFF #121212 #C2187A #5C5C5C", "#0D0D0D #EDEDED #FF4FB0 #A3A3A3");
    S("sakura", "Sakura", "rozowe", "glass", "soft", "dmsans", "blobs", "Kwitnąca wiśnia na wiosennym niebie.", "Nauka języków, kalendarze, aplikacje sezonowe", "#FCF3F6 #2A1A22 #C74B7D #5C8DD6", "#150C12 #FAEAF0 #F58EB4 #8FB5F2");
    S("watermelon", "Watermelon", "rozowe", "flat", "pill", "outfit", "", "Arbuz: soczysty róż, zielona skórka.", "Jedzenie, napoje, aplikacje letnie", "#FFF5F6 #22141A #E8436B #2C9A4B", "#160B0E #FDE9EC #FF7593 #63D483");
    S("orchid-studio", "Orchid Studio", "rozowe", "flat", "soft", "bricolage", "", "Kreatywne studio: orchideowa purpura i czysta biel.", "Agencje, narzędzia kreatywne, portfolio", "#FCFBFC #1A1220 #C026D3 #F97316", "#120D16 #F4EEF7 #E879F9 #FB923C");
    S("guava", "Guava", "rozowe", "flat", "round", "manrope", "", "Guawa: koralowy róż i turkusowy liść.", "Aplikacje zakupowe, kosmetyki, social", "#FBECE8 #2C1915 #E0566B #3F8E8C", "#20140F #F8E5E0 #FF8597 #6FD0CD");

    // ---------- fioletowe ----------
    S("amethyst", "Amethyst", "fioletowe", "glass", "round", "sora", "blobs", "Kryształ ametystu w fioletowej mgle.", "AI, asystenci, aplikacje premium", "#F4F0FB #1C1430 #6D3FD8 #E2559B", "#0D0819 #EEE8FB #A68BFF #FF7AB8");
    S("lavender-field", "Lavender Field", "fioletowe", "soft", "pill", "nunito", "", "Lawendowe pole i miękkie, puszyste przyciski.", "Sen, relaks, aplikacje wellbeing", "#EEEAF6 #251F36 #7A5CC9 #4FA88A", "#1C1828 #ECE7F7 #B9A2F5 #7FD3B4");
    S("ultraviolet", "Ultraviolet", "fioletowe", "neon", "sharp", "grotesk", "glow", "Ultrafiolet: fosforyzujący fiolet na czerni.", "Kluby, festiwale, kolekcje cyfrowe", "#F6F0FF #1A0B33 #7B2CFF #00C2A8", "#07020F #EDE2FF #9D5CFF #1EF2D2");
    S("plum-ink", "Plum Ink", "fioletowe", "paper", "soft", "playfair", "", "Atrament śliwkowy na kremowym papierze.", "Literatura, poezja, wydawnictwa", "#F8F4EF #22182A #5E2A72 #A35A2A", "#150F19 #F2EBF3 #C79BE0 #E59B6A");
    S("grape-soda", "Grape Soda", "fioletowe", "brutal", "soft", "archivo", "dots", "Winogronowa oranżada: fiolet, limonka, czarne obrysy.", "Marki młodzieżowe, napoje, kampanie", "#F3EEFF #120B1C #6A2CF5 #A5E000", "#110B1A #F1EAFF #9F7AFF #C6F432");
    S("indigo-desk", "Indigo Desk", "fioletowe", "flat", "soft", "inter", "", "Biurowe indygo: porządek, gęstość, skupienie.", "Zarządzanie projektami, CRM, narzędzia zespołowe", "#F7F7FB #15152A #4F46E5 #0EA5E9", "#0E0E1A #ECECF7 #8B87FF #38BDF8");
    S("iris", "Iris", "fioletowe", "outline", "round", "dmsans", "lines", "Fiolet irysa, cienka linia i dużo oddechu.", "Dokumentacja, wiki, bazy wiedzy", "#FCFBFE #1B1830 #5B4BC4 #C2410C", "#0F0D18 #EEECF8 #A397FF #FB923C");
    S("nebula-haze", "Nebula Haze", "fioletowe", "glass", "pill", "unbounded", "glow", "Mgławica: kosmiczny fiolet i błękit.", "Astronomia, gry, aplikacje sci-fi", "#F2EEFB #170F2E #6C2BD9 #2563EB", "#06031A #ECE6FF #A47BFF #60A5FA");
    S("mauve", "Mauve", "fioletowe", "soft", "round", "lora", "", "Zgaszony fiolet, starszy brat lawendy.", "Galerie, sztuka, aplikacje kulturalne", "#EFE9EC #2A2128 #7D4F73 #4F7A72", "#1E181C #F0E7EC #D3A4C8 #8EC4BA");
    S("velvet-crown", "Velvet Crown", "fioletowe", "flat", "soft", "dmserif", "", "Królewski aksamit i złote nici.", "Biżuteria, luksus, wydarzenia premium", "#F8F5F0 #1C1226 #4B1E78 #B88A2B", "#0F0916 #F3EDE6 #B48CF0 #E6BC5C");
    S("violet-pop", "Violet Pop", "fioletowe", "flat", "pill", "fredoka", "", "Fioletowa radość i słoneczny żółty.", "Edukacja, quizy, aplikacje dla dzieci", "#F9F6FF #20153A #7C3AED #F2B705", "#120C20 #F2EDFF #A78BFA #FFD84A");

    // ---------- ziemiste ----------
    S("terracotta", "Terracotta", "ziemiste", "paper", "soft", "fraunces", "", "Terakota, len i ciepło śródziemnomorskiego domu.", "Wnętrza, ceramika, architektura", "#F5EEE6 #2A1D16 #B5532F #4E6E5D", "#18120E #F2E8DE #E8875F #94BCA6");
    S("espresso", "Espresso", "ziemiste", "flat", "round", "manrope", "", "Espresso, crema i ciepłe drewno.", "Kawiarnie, palarnie, sklepy z kawą", "#F7F2EC #2A1C14 #7A4A2A #C08A3E", "#15100C #F3EBE3 #D5A07A #E8B86A");
    S("clay-studio", "Clay Studio", "ziemiste", "soft", "pill", "nunito", "", "Glina z pracowni: ugier, cegła i miękkie bryły.", "Rękodzieło, warsztaty, kursy online", "#EFE6DC #2D221A #A0623A #557A8A", "#201912 #F1E7DC #E0A07A #8EB9CB");
    S("sandstone", "Sandstone", "ziemiste", "outline", "soft", "worksans", "lines", "Piaskowiec: miękkie beże i precyzyjna linia.", "Architektura, nieruchomości, biura projektowe", "#F7F3EC #23201A #8A6A3B #5A6D86", "#14120E #EEE9DF #D1AF7A #9FB4CF");
    S("saddle", "Saddle", "ziemiste", "brutal", "soft", "archivo", "", "Siodło: koniak, czarne szwy, westernowy plakat.", "Marki odzieżowe, barbershop, rzemiosło", "#F4ECE1 #1B120B #8C4A1E #2F5D50", "#120D09 #F4EBDF #D98A52 #6FB8A2");
    S("olive-grove", "Olive Grove", "ziemiste", "glass", "round", "dmsans", "blobs", "Gaj oliwny: oliwka, ochra i ciepłe szkło.", "Kuchnia, wino, agroturystyka", "#F2F0E6 #22221A #6B6B1F #B5642E", "#13130D #EEEDE3 #C2C26A #E7996A");
    S("cacao", "Cacao", "ziemiste", "flat", "soft", "dmserif", "", "Gorzka czekolada i różowe ziarno kakao.", "Cukiernie, delikatesy, marki rzemieślnicze", "#F6EFEA #24160F #6B3A24 #C2577A", "#120B08 #F3E9E3 #D59776 #F08BAE");
    S("mesa-night", "Mesa Night", "ziemiste", "neon", "soft", "chakra", "glow", "Płaskowyż nocą: rdzawa poświata i chłodny cień.", "Gry przygodowe, outdoor, mapy", "#FAF0E8 #26150C #B9471A #2B7A99", "#0E0705 #F7E6DA #FF7A3D #4FC3E8");
    S("tweed", "Tweed", "ziemiste", "paper", "sharp", "newsreader", "lines", "Tweed i biblioteka: brąz, zieleń, staranna typografia.", "Uczelnie, archiwa, czasopisma naukowe", "#F3EFE6 #221E17 #6E5534 #2F5A46", "#151310 #EEE8DC #C9A97A #7FB89C");
    S("rust-belt", "Rust Belt", "ziemiste", "flat", "sharp", "spacemono", "grid", "Rdza, stal i przemysłowa siatka.", "Przemysł, maszyny, logistyka", "#F2EFEB #1C1916 #A1431B #3C6E8F", "#121110 #EDE8E2 #E3784A #7CB2D6");

    // ---------- neutralne ----------
    S("ink", "Ink", "neutralne", "paper", "sharp", "instrument", "lines", "Czarny atrament, biały papier, typografia ponad wszystko.", "Portfolio, eseje, wydawnictwa", "#FAFAF7 #111111 #111111 #B91C1C", "#0E0E0E #F2F2EE #F2F2EE #F87171");
    S("concrete", "Concrete", "neutralne", "brutal", "sharp", "grotesk", "grid", "Beton, siatka modułowa i brutalna szczerość.", "Architektura, galerie, studia projektowe", "#E9E9E6 #111111 #111111 #FF4F00", "#161616 #EDEDED #EDEDED #FF7A33");
    S("brushed-silver", "Brushed Silver", "neutralne", "glass", "pill", "inter", "blobs", "Szczotkowane srebro i chłodne, matowe szkło.", "Elektronika, sprzęt audio, gadżety", "#EEF0F3 #121417 #2B2F36 #4C7DFF", "#0B0C0E #F1F3F6 #E6E8EC #7FA3FF");
    S("typewriter", "Typewriter", "neutralne", "outline", "soft", "spacemono", "lines", "Maszyna do pisania: mono, papier, czerwona taśma.", "Pisarze, notatniki, blogi minimalistyczne", "#F8F6F1 #1A1A1A #1A1A1A #C0392B", "#141414 #EAE7E0 #EAE7E0 #FF6B5B");
    S("fiber", "Fiber", "neutralne", "flat", "soft", "plex", "", "Włókno: grafit, gęstość i chłodna precyzja.", "Panele administracyjne, ERP, narzędzia B2B", "#F4F4F4 #161616 #393939 #0F62FE", "#161616 #F4F4F4 #C6C6C6 #78A9FF");
    S("morning-fog", "Morning Fog", "neutralne", "glass", "soft", "manrope", "blobs", "Poranna mgła: szarości z nutą błękitu.", "Notatki, kalendarze, aplikacje produktywności", "#F1F2F4 #17191C #4B5563 #3B82F6", "#0F1012 #E9EBEE #C3C8D0 #7AA8FF");
    S("newsprint", "Newsprint", "neutralne", "paper", "sharp", "playfair", "lines", "Szpalty gazety, czerń, biel i szeryf z charakterem.", "Media, magazyny opinii, blogi", "#F4F1EA #121212 #121212 #1D4ED8", "#121212 #EFECE5 #EFECE5 #7AA2FF");
    S("pebble", "Pebble", "neutralne", "soft", "round", "dmsans", "", "Kamyk z plaży: gładka szarość, miękkie cienie.", "Aplikacje domowe, smart home, termostaty", "#E7E8EA #1F2226 #4A5059 #E07B39", "#1C1E21 #E7E9EC #B8BEC7 #F5A06A");
    S("noir", "Noir", "neutralne", "flat", "sharp", "syne", "", "Film noir: czerń, biel i jedno światło reflektora.", "Kino, fotografia, portfolio artystyczne", "#F2F2F2 #0A0A0A #0A0A0A #B8860B", "#050505 #F2F2F2 #F2F2F2 #F2CF4A");
    S("chalk", "Chalk", "neutralne", "outline", "round", "nunito", "", "Kreda na tablicy: grafit, biel i ciepła żółć.", "Edukacja, kursy, tablice zadań", "#F7F7F5 #1D1F1E #2E3230 #B7791F", "#1F2422 #EDEFEA #EDEFEA #F2C66D");
    S("stealth", "Stealth", "neutralne", "neon", "sharp", "jetbrains", "glow", "Tryb niewidzialny: czerń, szarość i biały sygnał.", "Cyberbezpieczeństwo, VPN, narzędzia prywatności", "#F3F4F5 #0C0D0F #1F2328 #10B981", "#030405 #E6E8EB #F5F6F7 #34D399");

    window.SEEDS = list;
})();
