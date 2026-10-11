// Przykładowy interfejs renderowany w barwach dowolnego stylu (tokeny z style/tokens.js).
// Składa się z widżetów, które można włączać i wyłączać (Probka.setWidgets).
(function (g) {
    function ico(d, extra) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' +
            (extra || "") + '><path d="' + d + '"/></svg>';
    }
    var I = {
        prev: "m15 6-6 6 6 6", next: "m9 6 6 6-6 6", check: "M5 12.5 10 17 19 7",
        play: "M8 5v14l11-7z", pause: "M8 5v14M16 5v14", skipB: "M19 20 9 12l10-8zM5 19V5", skipF: "m5 4 10 8-10 8zM19 5v14",
        heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
        send: "M4 12 20 4l-6 16-3-7z", up: "M12 16V4M6 10l6-6 6 6M4 20h16", file: "M14 3H6v18h12V7zM14 3v4h4",
        star: "m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z", minus: "M5 12h14", plus: "M12 5v14M5 12h14",
        sun: "M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
        cloud: "M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z", rain: "M7 15h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 6.5 4.3 4.3 0 0 0 7 15zM8 19l-1 2M12 19l-1 2M16 19l-1 2",
        alert: "M12 8v5M12 16.5v.5M10.3 3.9 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
        music: "M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
        key: "M15 7a4 4 0 1 0-3.9 5L4 19v2h3l1-1v-2h2v-2h2l1.9-1.9A4 4 0 0 0 15 7z"
    };
    function stars(n, cls) {
        var s = '<span class="pk-stars' + (cls ? " " + cls : "") + '" role="group" aria-label="Ocena">';
        for (var i = 1; i <= 5; i++) s += '<button type="button" data-v="' + i + '" class="' + (i <= n ? "on" : "") + '" aria-label="' + i + ' z 5">' + ico(I.star) + "</button>";
        return s + "</span>";
    }

    var BARS = [38, 52, 44, 61, 57, 70, 66, 78, 72, 84, 90, 96];
    var TEAM = [
        ["AK", "Anna Kowalska", "Projektantka produktu", "ok", "Aktywna"],
        ["MN", "Marek Nowak", "Inżynier front-end", "warn", "Spotkanie"],
        ["ZW", "Zofia Wiśniewska", "Analityczka danych", "off", "Offline"]
    ];

    function calendar() {
        // październik 2026 zaczyna się w czwartek
        var s = '<div class="pk-cal-week">' + ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map(function (d) { return "<span>" + d + "</span>"; }).join("") + "</div><div class=\"pk-cal\">";
        for (var b = 0; b < 3; b++) s += "<span></span>";
        for (var d = 1; d <= 31; d++) {
            var c = (d === 14 ? "on " : "") + (d === 11 ? "today " : "") + ([6, 20, 23].indexOf(d) >= 0 ? "ev" : "");
            s += '<button type="button" class="' + c.trim() + '">' + d + "</button>";
        }
        return s + "</div>";
    }

    var W = [
        { id: "hero", label: "Baner", wide: true, html:
            '<span class="pk-chip"><i></i>Nowość · wersja 2.0</span>' +
            '<h2>Projektuj szybciej, wdrażaj pewniej</h2>' +
            '<p>Jeden system tokenów dla kolorów, typografii i kształtów — w trybie jasnym i ciemnym.</p>' +
            '<div class="pk-row"><button class="pk-btn pk-primary" type="button">Zacznij teraz</button>' +
            '<button class="pk-btn pk-secondary" type="button">Zobacz demo</button>' +
            '<a class="pk-link" href="#" tabindex="-1">Dokumentacja →</a></div>' },
        { id: "stats", label: "Statystyki", html:
            '<div class="pk-head"><h3>Przychód</h3><span class="pk-badge ok">+12,4%</span></div>' +
            '<div class="pk-big">84 290 zł</div>' +
            '<div class="pk-bars">' + BARS.map(function (h, i) { return '<span style="height:' + h + '%"' + (i > 8 ? ' class="b2"' : "") + "></span>"; }).join("") + "</div>" +
            '<div class="pk-legend"><span><i></i>Plan</span><span><i class="b2"></i>Prognoza</span></div>' },
        { id: "form", label: "Ustawienia", html:
            '<h3>Ustawienia konta</h3>' +
            '<label class="pk-field"><span>Adres e-mail</span><input class="pk-input" value="anna@example.com" aria-label="Adres e-mail"></label>' +
            '<div class="pk-field"><span>Rozliczenie</span><div class="pk-seg"><button type="button" class="on">Miesięczne</button><button type="button">Roczne</button></div></div>' +
            '<div class="pk-toggle"><span>Powiadomienia</span><button type="button" class="pk-switch on" aria-label="Powiadomienia"></button></div>' +
            '<div class="pk-toggle"><span>Tryb skupienia</span><button type="button" class="pk-switch" aria-label="Tryb skupienia"></button></div>' +
            '<div class="pk-progress"><span style="width:68%"></span></div><small class="pk-muted">Profil uzupełniony w 68%</small>' },
        { id: "team", label: "Zespół", html:
            '<div class="pk-head"><h3>Zespół</h3><span class="pk-muted">3 osoby</span></div>' +
            TEAM.map(function (p) {
                return '<div class="pk-person"><span class="pk-ava">' + p[0] + '</span><span class="pk-who"><b>' + p[1] +
                    "</b><small>" + p[2] + '</small></span><span class="pk-badge ' + p[3] + '">' + p[4] + "</span></div>";
            }).join("") },
        { id: "alerts", label: "Powiadomienia", html:
            '<h3>Powiadomienia</h3>' +
            '<p class="pk-alert ok"><b>Wdrożono.</b> Wersja 2.0 działa na produkcji.</p>' +
            '<p class="pk-alert warn"><b>Uwaga.</b> Limit miejsca wykorzystany w 85%.</p>' +
            '<p class="pk-alert bad"><b>Błąd.</b> Nie udało się zsynchronizować 2 plików.</p>' +
            '<code class="pk-code">npm run build · 1,8 s</code>' },
        { id: "calendar", label: "Kalendarz", html:
            '<div class="pk-head"><h3>Październik 2026</h3><span class="pk-row pk-tight">' +
            '<button class="pk-icon" type="button" aria-label="Poprzedni miesiąc">' + ico(I.prev) + "</button>" +
            '<button class="pk-icon" type="button" aria-label="Następny miesiąc">' + ico(I.next) + "</button></span></div>" +
            calendar() +
            '<div class="pk-event"><i></i><span><b>Przegląd projektu</b><small>14 paź · 10:00–11:00</small></span></div>' },
        { id: "player", label: "Odtwarzacz", html:
            '<div class="pk-track"><span class="pk-cover">' + ico(I.music) + '</span><span class="pk-who"><b>Nocna zmiana</b><small>Kwartet Sygnał · Album „Neon”</small></span>' +
            '<button class="pk-icon pk-like on" type="button" aria-label="Polub">' + ico(I.heart) + "</button></div>" +
            '<div class="pk-progress pk-seek"><span style="width:37%"></span></div>' +
            '<div class="pk-times"><span>1:24</span><span>3:51</span></div>' +
            '<div class="pk-controls"><button class="pk-icon" type="button" aria-label="Poprzedni">' + ico(I.skipB) + "</button>" +
            '<button class="pk-btn pk-primary pk-play" type="button" aria-label="Pauza">' + ico(I.pause, ' class="i-pause"') + ico(I.play, ' class="i-play"') + "</button>" +
            '<button class="pk-icon" type="button" aria-label="Następny">' + ico(I.skipF) + "</button></div>" },
        { id: "weather", label: "Pogoda", html:
            '<div class="pk-head"><span class="pk-muted">Białystok · teraz</span><span class="pk-wx-ico">' + ico(I.sun) + "</span></div>" +
            '<div class="pk-big pk-temp">18°</div><p class="pk-muted">Częściowe zachmurzenie · odczuwalna 16°</p>' +
            '<div class="pk-forecast">' + [["Pt", I.sun, "19°"], ["So", I.cloud, "16°"], ["Nd", I.rain, "14°"], ["Pn", I.cloud, "17°"]].map(function (f) {
                return "<span><small>" + f[0] + "</small>" + ico(f[1]) + "<b>" + f[2] + "</b></span>";
            }).join("") + "</div>" },
        { id: "chat", label: "Czat", html:
            '<div class="pk-head"><span class="pk-person"><span class="pk-ava">ZW</span><span class="pk-who"><b>Zofia</b><small class="pk-online">dostępna</small></span></span></div>' +
            '<div class="pk-msgs"><p class="pk-msg in">Hej! Raport jest już gotowy?</p>' +
            '<p class="pk-msg out">Tak, właśnie go wysyłam.</p><p class="pk-msg in">Super, dzięki!</p></div>' +
            '<div class="pk-compose"><input class="pk-input" placeholder="Napisz wiadomość…" aria-label="Wiadomość">' +
            '<button class="pk-btn pk-primary pk-square" type="button" aria-label="Wyślij">' + ico(I.send) + "</button></div>" },
        { id: "pricing", label: "Cennik", html:
            '<div class="pk-head"><h3>Plan Pro</h3><span class="pk-badge accent">Popularny</span></div>' +
            '<div class="pk-price"><b>49 zł</b><span>/ miesiąc</span></div>' +
            '<ul class="pk-features">' + ["Nielimitowane projekty", "Eksport do CSS i Figma", "Wsparcie w 24 godziny", "Historia wersji"].map(function (t) {
                return "<li>" + ico(I.check) + t + "</li>";
            }).join("") + "</ul>" +
            '<button class="pk-btn pk-primary pk-block" type="button">Wybierz plan</button><small class="pk-muted pk-center">Anulujesz w każdej chwili</small>' },
        { id: "product", label: "Produkt", html:
            '<div class="pk-media"><span class="pk-tag">Nowość</span><svg viewBox="0 0 120 80" aria-hidden="true"><circle cx="60" cy="40" r="26" fill="none" stroke="currentColor" stroke-width="6"/><rect x="28" y="40" width="12" height="22" rx="5" fill="currentColor"/><rect x="80" y="40" width="12" height="22" rx="5" fill="currentColor"/></svg></div>' +
            '<div class="pk-head"><h3>Słuchawki Studio</h3>' + stars(4, "pk-sm-stars") + "</div>" +
            '<p class="pk-muted">Redukcja szumów, 40 godzin pracy, etui w zestawie.</p>' +
            '<div class="pk-head"><span class="pk-price pk-price-sm"><b>599 zł</b><s>749 zł</s></span>' +
            '<span class="pk-row pk-tight"><button class="pk-icon pk-like" type="button" aria-label="Do ulubionych">' + ico(I.heart) + '</button>' +
            '<button class="pk-btn pk-primary pk-sm" type="button">Do koszyka</button></span></div>' },
        { id: "table", label: "Tabela", wide: true, html:
            '<div class="pk-head"><h3>Ostatnie zamówienia</h3><a class="pk-link" href="#" tabindex="-1">Zobacz wszystkie</a></div>' +
            '<div class="pk-table-wrap"><table class="pk-table"><thead><tr><th>Nr</th><th>Klient</th><th>Data</th><th class="r">Kwota</th><th>Status</th></tr></thead><tbody>' +
            [["#1042", "Anna Kowalska", "11.10.2026", "1 249 zł", "ok", "Opłacone"], ["#1041", "Marek Nowak", "10.10.2026", "389 zł", "warn", "Oczekuje"],
                ["#1040", "Studio Pixel", "09.10.2026", "4 920 zł", "ok", "Opłacone"], ["#1039", "Ola Zielińska", "08.10.2026", "129 zł", "bad", "Zwrot"]].map(function (r) {
                return "<tr><td class=\"pk-mono\">" + r[0] + "</td><td>" + r[1] + '</td><td class="pk-muted">' + r[2] + '</td><td class="r pk-mono">' + r[3] +
                    '</td><td><span class="pk-badge ' + r[4] + '">' + r[5] + "</span></td></tr>";
            }).join("") + "</tbody></table></div>" +
            '<div class="pk-head"><small class="pk-muted">1–4 z 128 zamówień</small><span class="pk-row pk-tight">' +
            '<button class="pk-icon" type="button" aria-label="Poprzednia strona">' + ico(I.prev) + "</button>" +
            '<button class="pk-icon" type="button" aria-label="Następna strona">' + ico(I.next) + "</button></span></div>" },
        { id: "donut", label: "Wykres kołowy", html:
            '<div class="pk-head"><h3>Źródła ruchu</h3><span class="pk-muted">30 dni</span></div>' +
            '<div class="pk-donut-row"><div class="pk-donut"><span><b>68%</b><small>organiczny</small></span></div>' +
            '<ul class="pk-legend-list"><li><i class="a1"></i>Wyszukiwarki<b>45%</b></li><li><i class="a2"></i>Media społ.<b>23%</b></li>' +
            '<li><i class="a3"></i>Bezpośrednie<b>16%</b></li><li><i class="a4"></i>Inne<b>16%</b></li></ul></div>' },
        { id: "timeline", label: "Aktywność", html:
            '<h3>Aktywność</h3><ol class="pk-timeline">' +
            [["Anna dodała komentarz do „Makieta v3”", "2 min temu", ""], ["Wdrożono wersję 2.0 na produkcję", "1 godz. temu", "ok"],
                ["Marek zamknął zadanie #128", "wczoraj, 16:40", ""], ["Nowy członek zespołu: Zofia", "3 dni temu", "a2"]].map(function (e) {
                return '<li class="' + e[2] + '"><b>' + e[0] + "</b><small>" + e[1] + "</small></li>";
            }).join("") + "</ol>" },
        { id: "tasks", label: "Zadania", html:
            '<div class="pk-head"><h3>Zadania na dziś</h3><span class="pk-badge off">2 z 5</span></div>' +
            [["Przygotować paletę kolorów", true, "Projekt"], ["Sprawdzić kontrast przycisków", true, "Dostępność"], ["Spotkanie z klientem", false, "Pilne"],
                ["Eksport tokenów do CSS", false, "Kod"], ["Aktualizacja dokumentacji", false, ""]].map(function (t) {
                return '<button type="button" class="pk-task' + (t[1] ? " done" : "") + '"><span class="pk-check">' + ico(I.check) + "</span><span>" + t[0] + "</span>" +
                    (t[2] ? '<span class="pk-tag-sm' + (t[2] === "Pilne" ? " bad" : "") + '">' + t[2] + "</span>" : "") + "</button>";
            }).join("") },
        { id: "dialog", label: "Okno dialogowe", html:
            '<div class="pk-dialog"><span class="pk-dialog-ico">' + ico(I.alert) + "</span>" +
            '<h3>Usunąć projekt?</h3><p class="pk-muted">Projekt „Strona firmowa” i 24 pliki zostaną trwale usunięte. Tej operacji nie można cofnąć.</p>' +
            '<div class="pk-row pk-end"><button class="pk-btn pk-secondary pk-sm" type="button">Anuluj</button>' +
            '<button class="pk-btn pk-danger pk-sm" type="button">Usuń projekt</button></div></div>' },
        { id: "login", label: "Logowanie", html:
            '<h3>Zaloguj się</h3><p class="pk-muted">Witaj ponownie! Podaj dane, aby kontynuować.</p>' +
            '<label class="pk-field"><span>E-mail</span><input class="pk-input" type="email" placeholder="ty@firma.pl" aria-label="E-mail"></label>' +
            '<label class="pk-field"><span class="pk-head">Hasło<a class="pk-link pk-small" href="#" tabindex="-1">Nie pamiętasz?</a></span><input class="pk-input" type="password" value="sekret123" aria-label="Hasło"></label>' +
            '<button type="button" class="pk-task pk-remember done"><span class="pk-check">' + ico(I.check) + "</span><span>Zapamiętaj mnie</span></button>" +
            '<button class="pk-btn pk-primary pk-block" type="button">Zaloguj</button>' +
            '<span class="pk-or">lub</span>' +
            '<button class="pk-btn pk-secondary pk-block" type="button">' + ico(I.key) + "Klucz dostępu</button>" },
        { id: "controls", label: "Suwaki i ocena", html:
            '<h3>Preferencje</h3>' +
            '<label class="pk-field"><span class="pk-head">Głośność<b class="pk-mono" data-out>64%</b></span><input class="pk-range" type="range" min="0" max="100" value="64" aria-label="Głośność"></label>' +
            '<div class="pk-field"><span>Rozmiar</span><div class="pk-pills"><button type="button">S</button><button type="button" class="on">M</button><button type="button">L</button><button type="button">XL</button></div></div>' +
            '<div class="pk-head"><span class="pk-field"><span>Ilość</span></span><span class="pk-stepper"><button type="button" aria-label="Mniej">' + ico(I.minus) +
            '</button><b data-n>2</b><button type="button" aria-label="Więcej">' + ico(I.plus) + "</button></span></div>" +
            '<div class="pk-head"><span class="pk-field"><span>Twoja ocena</span></span>' + stars(4) + "</div>" },
        { id: "upload", label: "Przesyłanie pliku", html:
            '<h3>Załączniki</h3>' +
            '<div class="pk-drop">' + ico(I.up) + '<b>Przeciągnij plik tutaj</b><small>lub <span class="pk-link">wybierz z dysku</span> · PNG, JPG, PDF do 10 MB</small></div>' +
            '<div class="pk-file"><span class="pk-file-ico">' + ico(I.file) + '</span><span class="pk-who"><b>raport-q3.pdf</b><small>2,4 MB · 72%</small>' +
            '<span class="pk-progress"><span style="width:72%"></span></span></span></div>' },
        { id: "steps", label: "Kroki", html:
            '<h3>Zamówienie</h3><ol class="pk-steps">' +
            [["Koszyk", "done"], ["Dostawa", "done"], ["Płatność", "now"], ["Gotowe", ""]].map(function (s, i) {
                return '<li class="' + s[1] + '"><span>' + (s[1] === "done" ? ico(I.check) : i + 1) + "</span><small>" + s[0] + "</small></li>";
            }).join("") + "</ol>" +
            '<div class="pk-pay"><span class="pk-head"><b>Karta •••• 4242</b><span class="pk-badge ok">Domyślna</span></span><small class="pk-muted">Wygasa 08/28</small></div>' +
            '<div class="pk-row pk-end"><button class="pk-btn pk-secondary pk-sm" type="button">Wstecz</button><button class="pk-btn pk-primary pk-sm" type="button">Zapłać 599 zł</button></div>' },
        { id: "profile", label: "Profil", html:
            '<div class="pk-cover-band"></div><span class="pk-ava pk-ava-lg">AK</span>' +
            '<div class="pk-center-col"><h3>Anna Kowalska</h3><small class="pk-muted">Projektantka produktu · Kraków</small></div>' +
            '<div class="pk-kpis"><span><b>24</b><small>Projekty</small></span><span><b>1,2 tys.</b><small>Obserwujący</small></span><span><b>4,9</b><small>Ocena</small></span></div>' +
            '<div class="pk-row pk-grow"><button class="pk-btn pk-primary pk-sm pk-follow" type="button">Obserwuj</button><button class="pk-btn pk-secondary pk-sm" type="button">Wiadomość</button></div>' }
    ];

    var PRESETS = [
        { id: "all", label: "Wszystkie", list: W.map(function (w) { return w.id; }) },
        { id: "dashboard", label: "Pulpit", list: ["hero", "stats", "donut", "table", "timeline", "tasks", "alerts"] },
        { id: "app", label: "Aplikacja", list: ["calendar", "chat", "profile", "team", "player", "weather"] },
        { id: "shop", label: "Sklep", list: ["product", "pricing", "steps", "controls", "login", "dialog"] },
        { id: "forms", label: "Formularze", list: ["form", "login", "controls", "upload", "steps", "dialog"] }
    ];

    function render(el, name, widgets) {
        el.classList.add("pk");
        el.innerHTML =
            '<div class="pk-bar">' +
                '<span class="pk-logo" aria-hidden="true"></span><b class="pk-name"></b>' +
                '<nav class="pk-nav"><span class="on">Pulpit</span><span>Projekty</span><span>Raporty</span></nav>' +
                '<button class="pk-btn pk-primary pk-sm" type="button">Nowy projekt</button>' +
            "</div>" +
            '<div class="pk-grid">' + W.map(function (w) {
                return '<section class="pk-card pk-w-' + w.id + (w.wide ? " pk-wide" : "") + '" data-w="' + w.id + '">' + w.html + "</section>";
            }).join("") + "</div>";
        setName(el, name);
        setWidgets(el, widgets);
        el.addEventListener("click", click);
        el.addEventListener("input", function (e) {
            if (e.target.classList.contains("pk-range")) {
                var o = e.target.closest(".pk-field").querySelector("[data-out]");
                if (o) o.textContent = e.target.value + "%";
            }
        });
    }

    // proste interakcje, żeby próbka dała się „poklikać”
    function only(btn) {
        Array.prototype.forEach.call(btn.parentNode.children, function (b) { b.classList.toggle("on", b === btn); });
    }
    function click(e) {
        var t = e.target;
        if (t.closest(".pk-link")) e.preventDefault();
        var x;
        if ((x = t.closest(".pk-switch"))) x.classList.toggle("on");
        else if ((x = t.closest(".pk-seg button, .pk-nav span, .pk-pills button, .pk-cal button"))) only(x);
        else if ((x = t.closest(".pk-task"))) x.classList.toggle("done");
        else if ((x = t.closest(".pk-like"))) x.classList.toggle("on");
        else if ((x = t.closest(".pk-follow"))) {
            x.classList.toggle("pk-primary");
            x.classList.toggle("pk-secondary");
            x.textContent = x.classList.contains("pk-primary") ? "Obserwuj" : "Obserwujesz";
        } else if ((x = t.closest(".pk-play"))) {
            var p = x.classList.toggle("paused");
            x.setAttribute("aria-label", p ? "Odtwórz" : "Pauza");
        } else if ((x = t.closest(".pk-stars button"))) {
            var v = +x.dataset.v;
            Array.prototype.forEach.call(x.parentNode.children, function (b) { b.classList.toggle("on", +b.dataset.v <= v); });
        } else if ((x = t.closest(".pk-stepper button"))) {
            var n = x.parentNode.querySelector("[data-n]");
            n.textContent = Math.max(0, Math.min(99, +n.textContent + (x === x.parentNode.lastElementChild ? 1 : -1)));
        }
    }

    function setName(el, name) {
        var n = el.querySelector(".pk-name");
        if (n) n.textContent = name || "Studio";
    }
    function setWidgets(el, list) {
        Array.prototype.forEach.call(el.querySelectorAll("[data-w]"), function (s) {
            s.hidden = !!list && list.indexOf(s.dataset.w) < 0;
        });
    }

    g.Probka = {
        render: render, setName: setName, setWidgets: setWidgets,
        WIDGETS: W.map(function (w) { return { id: w.id, label: w.label }; }), PRESETS: PRESETS
    };
})(window);
