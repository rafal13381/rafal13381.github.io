// Zakładka „Wizytówki” na stronie Style: wybór branży, stylu, trybu i szerokości ekranu.
// Stan trzymany w adresie: #wizytowki?t=<szablon>&s=<styl>&m=light|dark&d=desktop|tablet|phone
(function () {
    var T, UI, W, list, state, ready = false;
    var DEV_KEY = "wizytowki-dev", dev = false, tab = "html", cssCache = null;
    var DEVICES = ["desktop", "tablet", "phone"];
    function $(id) { return document.getElementById(id); }

    function fromHash() {
        var p = new URLSearchParams(location.hash.split("?")[1] || "");
        // brakujące pola zostają null — wtedy zachowujemy bieżący wybór
        var s = {
            t: W.TEMPLATES.some(function (t) { return t.id === p.get("t"); }) ? p.get("t") : null,
            s: list.some(function (x) { return x.id === p.get("s"); }) ? p.get("s") : null,
            m: p.get("m") === "dark" || p.get("m") === "light" ? p.get("m") : null,
            d: DEVICES.indexOf(p.get("d")) >= 0 ? p.get("d") : null
        };
        return s;
    }
    function style() { return list.filter(function (x) { return x.id === state.s; })[0]; }
    function mode() { return state.m || T.siteMode(); }

    function save() {
        var q = "#wizytowki?t=" + state.t + "&s=" + encodeURIComponent(state.s) + (state.m ? "&m=" + state.m : "") + (state.d !== "desktop" ? "&d=" + state.d : "");
        try { history.replaceState(null, "", location.pathname + location.search + q); } catch (e) {}
    }
    function fullUrl() {
        return "style/wizytowka.html?t=" + state.t + "&s=" + encodeURIComponent(state.s) + "&m=" + mode();
    }

    function paint() {
        var st = style(), m = mode();
        T.apply($("wSite"), st, m);
        T.loadFonts(st);
        Array.prototype.forEach.call($("wMode").children, function (b) { b.setAttribute("aria-pressed", b.dataset.mode === m); });
        $("wStyle").value = st.id;
        $("wStyleNote").textContent = st.tagline;
        $("wFull").href = fullUrl();
        $("wPreview").href = "style/podglad.html?s=" + encodeURIComponent(st.id) + "&m=" + m;
        save();
        refreshFiles();
    }

    // ---------- tryb deweloperski: pliki dla programisty ----------
    function baseName() { return W.slug(W.byId(state.t).name + " " + style().name); }

    // style komponentów wizytówki: oryginalny plik, a gdy fetch niedostępny (file://) — reguły z arkusza
    function componentCss() {
        if (cssCache) return Promise.resolve(cssCache);
        var sheet = Array.prototype.filter.call(document.styleSheets, function (x) { return /wizytowki\.css/.test(x.href || ""); })[0];
        if (!sheet) return Promise.reject(new Error("brak arkusza"));
        function fromRules() {
            cssCache = Array.prototype.map.call(sheet.cssRules, function (r) { return r.cssText; }).join("\n");
            return cssCache;
        }
        return fetch(sheet.href).then(function (r) {
            if (!r.ok) throw new Error(r.status);
            return r.text();
        }).then(function (t) {
            cssCache = t.replace(/^\/\*[^]*?\*\/\s*/, "/* Wizytówka — style komponentów. Wartości pochodzą z tokenów stylu powyżej. */\n");
            return cssCache;
        }).catch(fromRules);
    }

    function file(kind, compCss) {
        var st = style();
        if (kind === "md") return W.files.md(state.t, st);
        if (kind === "css") return W.files.css(st, compCss);
        return W.files.html(state.t, st, compCss);
    }
    var TYPES = { html: "text/html", css: "text/css", md: "text/markdown" };
    function withCss(kind) {
        // plik .md nie potrzebuje arkusza komponentów
        return kind === "md" ? Promise.resolve("") : componentCss();
    }
    function download(kind) {
        return withCss(kind).then(function (c) {
            var blob = new Blob([file(kind, c)], { type: TYPES[kind] + ";charset=utf-8" });
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = baseName() + "." + kind;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
            UI.toast("Pobrano " + a.download);
        }, function () { UI.toast("Nie udało się przygotować pliku — otwórz stronę przez http(s)"); });
    }

    function refreshFiles() {
        if (!dev) return;
        var b = baseName();
        $("wHtmlName").textContent = b + ".html";
        $("wCssName").textContent = b + ".css";
        $("wMdName").textContent = b + ".md";
        Array.prototype.forEach.call($("wCodeTab").children, function (x) { x.setAttribute("aria-pressed", x.dataset.tab === tab); });
        var want = state.t + "|" + state.s + "|" + tab;
        withCss(tab).then(function (c) {
            if (want !== state.t + "|" + state.s + "|" + tab) return;
            $("wCode").textContent = file(tab, c);
        }, function () { $("wCode").textContent = "Nie udało się wczytać stylów komponentów. Otwórz stronę przez http(s), np. na GitHub Pages."; });
    }

    // stan przełącznika zapamiętany w przeglądarce (klucz „wizytowki-dev”)
    function setDev(on) {
        dev = on;
        $("wDev").setAttribute("aria-checked", on);
        $("wDevBox").classList.toggle("is-on", on);
        $("wDevState").textContent = on ? "Włączony" : "Wyłączony";
        $("wDevDesc").textContent = on
            ? "Podgląd nie zapisuje projektu — pobierz pliki, żeby zachować wizytówkę."
            : "Włącz, aby pobrać wizytówkę jako gotową stronę .html, arkusz .css i opis .md dla AI.";
        $("wDevDownloads").hidden = !on;
        $("wDevPanel").hidden = !on;
        try { localStorage.setItem(DEV_KEY, on ? "1" : "0"); } catch (e) {}
        refreshFiles();
    }

    function setTemplate(id, keepScroll) {
        state.t = W.byId(id).id;
        var screen = $("wScreen");
        var t = W.render($("wSite"), state.t);
        // krótkie przenikanie zamiast twardego przeskoku treści
        screen.classList.add("is-swapping");
        if (!keepScroll) screen.scrollTop = 0;
        void screen.offsetWidth;
        screen.classList.remove("is-swapping");
        $("wUrl").textContent = t.domain;
        $("wTitle").textContent = t.name;
        var box = $("wTemplates");
        Array.prototype.forEach.call(box.children, function (b) {
            var on = b.dataset.t === state.t;
            b.setAttribute("aria-pressed", on);
            // zaznaczona branża zawsze widoczna w przewijanej liście (bez przewijania strony)
            if (on && (b.offsetTop < box.scrollTop || b.offsetTop + b.offsetHeight > box.scrollTop + box.clientHeight)) {
                box.scrollTop = b.offsetTop - box.clientHeight / 2 + b.offsetHeight / 2;
            }
        });
        paint();
    }

    function setStyle(id) { state.s = id; paint(); }
    function step(d) {
        var i = list.findIndex(function (x) { return x.id === state.s; });
        setStyle(list[(i + d + list.length) % list.length].id);
    }

    function setDevice(d) {
        state.d = d;
        $("wDeviceFrame").dataset.device = d;
        Array.prototype.forEach.call($("wDevice").children, function (b) { b.setAttribute("aria-pressed", b.dataset.device === d); });
        save();
    }

    function init() {
        ready = true;
        T = window.Tokens; UI = window.UI; W = window.Wizytowki;
        list = T.all();
        state = fromHash();
        state.t = state.t || W.TEMPLATES[0].id;
        state.d = state.d || "desktop";
        if (!state.s) state.s = list[Math.floor(Math.random() * list.length)].id;

        // branże
        var box = $("wTemplates");
        W.TEMPLATES.forEach(function (t) {
            var b = UI.el("button", "wz-pick");
            b.type = "button";
            b.dataset.t = t.id;
            b.innerHTML = '<span class="wz-pick-ico">' + W.icon(t.icon) + "</span>";
            var txt = UI.el("span", "wz-pick-text");
            txt.appendChild(UI.el("b", null, t.label));
            txt.appendChild(UI.el("small", null, t.name));
            b.appendChild(txt);
            b.addEventListener("click", function () { if (state.t !== t.id) setTemplate(t.id); });
            box.appendChild(b);
        });

        // style pogrupowane według kolorystyki
        var sel = $("wStyle");
        T.CATEGORIES.forEach(function (c) {
            var og = UI.el("optgroup");
            og.label = c.label;
            list.forEach(function (s) {
                if (s.cat !== c.id) return;
                var o = UI.el("option", null, s.name);
                o.value = s.id;
                og.appendChild(o);
            });
            if (og.children.length) sel.appendChild(og);
        });
        sel.addEventListener("change", function () { setStyle(sel.value); });
        $("wPrev").addEventListener("click", function () { step(-1); });
        $("wNext").addEventListener("click", function () { step(1); });
        $("wRandom").addEventListener("click", function () {
            var next;
            do { next = list[Math.floor(Math.random() * list.length)].id; } while (next === state.s && list.length > 1);
            setStyle(next);
        });

        $("wMode").addEventListener("click", function (e) {
            var b = e.target.closest("button");
            if (b) { state.m = b.dataset.mode; paint(); }
        });
        $("wDevice").addEventListener("click", function (e) {
            var b = e.target.closest("button");
            if (b) setDevice(b.dataset.device);
        });
        $("wCopy").addEventListener("click", function () {
            var st = style();
            UI.copy(T.toCSS(st), "Skopiowano CSS stylu " + st.name);
        });
        $("wDev").addEventListener("click", function () { setDev(!dev); });
        [$("wDevDownloads"), $("wDevPanel")].forEach(function (box) {
            box.addEventListener("click", function (e) {
                var b = e.target.closest("[data-download]");
                if (b) download(b.dataset.download);
            });
        });
        $("wDevJump").addEventListener("click", function () {
            var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            $("wDevPanel").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        });
        $("wDownloadAll").addEventListener("click", function () {
            // kolejne pobrania z odstępem — część przeglądarek blokuje kilka naraz
            download("html").then(function () {
                setTimeout(function () { download("css"); }, 400);
                setTimeout(function () { download("md"); }, 800);
            });
        });
        $("wCodeTab").addEventListener("click", function (e) {
            var b = e.target.closest("button");
            if (b) { tab = b.dataset.tab; refreshFiles(); }
        });
        $("wCopyCode").addEventListener("click", function () {
            UI.copy($("wCode").textContent, "Skopiowano kod " + ({ html: "HTML", css: "CSS", md: "Markdown" })[tab]);
        });
        $("wLink").addEventListener("click", function () { UI.copy(location.href, "Skopiowano link do wizytówki"); });
        var saved = false;
        try { saved = localStorage.getItem(DEV_KEY) === "1"; } catch (e) {}
        setDev(saved);

        // bez wybranego trybu podgląd idzie za motywem strony
        T.onSiteMode(function () { if (!state.m) paint(); });

        setDevice(state.d);
        setTemplate(state.t);
    }

    window.WizytowkiWidok = {
        show: function () {
            if (!ready) { init(); return; }
            var s = fromHash();
            if (s.s) state.s = s.s;
            if (s.m) state.m = s.m;
            if (s.d && s.d !== state.d) setDevice(s.d);
            if (s.t && s.t !== state.t) setTemplate(s.t); else paint();
        }
    };
})();
