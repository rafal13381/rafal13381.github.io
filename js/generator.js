// Generator stylów: ustawienia → ziarno → pełny styl (js/tokens.js) z podglądem, kontrastem i kodem CSS.
(function () {
    var T = window.Tokens, UI = window.UI, ready = false;
    var state, mode, current, probka;
    var DEFAULTS = {
        name: "Mój styl", accent: "#5B5BD6", harmony: "150", accent2: "#E8742A",
        tone: "tinted", material: "glass", shape: "round", font: "jakarta", art: "auto", high: false
    };
    var ADJ = ["Quiet", "Bold", "Velvet", "Solar", "Arctic", "Smoky", "Lunar", "Copper", "Misty", "Electric", "Coral", "Silent", "Wild", "Golden", "Deep", "Paper", "Neon", "Soft"];
    var NOUN = ["Harbor", "Studio", "Orbit", "Grove", "Canvas", "Bloom", "Drift", "Forge", "Haven", "Pulse", "Prism", "Ridge", "Tide", "Field", "Garden", "Room"];
    var $ = function (id) { return document.getElementById(id); };
    var DEV_KEY = "generator-dev", WIDGET_KEY = "generator-widgets", tab = "css", widgets;

    function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
    function validHex(v) { return /^#[0-9a-f]{6}$/i.test(v); }
    function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

    function seedFrom(s) {
        var a = s.accent, h = T.toHsl(a);
        var a2 = s.harmony === "custom" ? s.accent2 : T.fromHsl(h[0] + Number(s.harmony), clamp(h[1], 0.45, 0.85), clamp(h[2], 0.42, 0.58));
        var tone = {
            neutral: ["#F7F7F8", "#121216", "#0F1013", "#F2F3F5"],
            tinted: [T.mix("#FBFBFD", a, 0.07), T.mix("#121216", a, 0.1), T.mix("#0C0D11", a, 0.12), T.mix("#F4F4F6", a, 0.06)],
            warm: ["#FAF6EF", "#1E1A15", "#15120E", "#F5EFE6"],
            cool: ["#F3F6FA", "#0F1520", "#0B1018", "#EAF0F8"]
        }[s.tone];
        var lt = s.high ? T.mix(tone[1], "#000000", 0.6) : tone[1];
        var dt = s.high ? T.mix(tone[3], "#FFFFFF", 0.6) : tone[3];
        return {
            id: "wlasny", name: s.name || "Mój styl", cat: T.category(a), collection: "Generator",
            material: s.material, shape: s.shape, font: s.font, art: s.art === "auto" ? null : s.art,
            tagline: "Styl utworzony w generatorze.", use: "", highContrast: s.high,
            l: [tone[0], lt, a, a2],
            d: [tone[2], dt, T.ensure(a, tone[2], 4.5, "#FFFFFF"), T.ensure(a2, tone[2], 3.5, "#FFFFFF")]
        };
    }

    // stan w adresie (#generator?g=…), żeby można było udostępnić link
    function encode(s) { return btoa(unescape(encodeURIComponent(JSON.stringify(s)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
    function decode(v) {
        try {
            var j = JSON.parse(decodeURIComponent(escape(atob(v.replace(/-/g, "+").replace(/_/g, "/")))));
            var s = {};
            Object.keys(DEFAULTS).forEach(function (k) { s[k] = j[k] != null ? j[k] : DEFAULTS[k]; });
            if (!validHex(s.accent)) s.accent = DEFAULTS.accent;
            if (!validHex(s.accent2)) s.accent2 = DEFAULTS.accent2;
            if (!T.FONTS[s.font]) s.font = DEFAULTS.font;
            if (!T.MATERIALS[s.material]) s.material = DEFAULTS.material;
            if (!T.SHAPES[s.shape]) s.shape = DEFAULTS.shape;
            if (s.art !== "auto" && !T.ARTS[s.art]) s.art = "auto";
            s.name = String(s.name).slice(0, 32);
            return s;
        } catch (e) { return null; }
    }
    function fromHash() {
        var m = location.hash.match(/[?&]g=([^&]+)/);
        return m ? decode(m[1]) : null;
    }

    function option(sel, v, label) {
        var o = document.createElement("option");
        o.value = v;
        o.textContent = label;
        sel.appendChild(o);
        return o;
    }

    function init() {
        Object.keys(T.MATERIALS).forEach(function (k) { option($("gMaterial"), k, T.MATERIALS[k]); });
        option($("gArt"), "auto", "Automatyczne (wg materiału)");
        Object.keys(T.ARTS).forEach(function (k) { option($("gArt"), k, T.ARTS[k]); });
        var groups = { Bezszeryfowe: [], Szeryfowe: [], Monospace: [], Ekspresyjne: [] };
        Object.keys(T.FONTS).forEach(function (k) {
            var f = T.FONTS[k];
            var g = /monospace$/.test(f.d) ? "Monospace" : /serif$/.test(f.d) && !/sans-serif$/.test(f.d) ? "Szeryfowe" : f.x ? "Ekspresyjne" : "Bezszeryfowe";
            groups[g].push(k);
        });
        Object.keys(groups).forEach(function (g) {
            var og = document.createElement("optgroup");
            og.label = g;
            groups[g].forEach(function (k) { option(og, k, T.FONTS[k].label); });
            $("gFont").appendChild(og);
        });
        Object.keys(T.SHAPES).forEach(function (k) {
            var b = UI.el("button", "seg-btn", T.SHAPES[k].label);
            b.type = "button";
            b.dataset.v = k;
            $("gShape").appendChild(b);
        });

        probka = $("gProbka");
        widgets = loadWidgets();
        Probka.render(probka, "", widgets);
        buildWidgetPicker();
        mode = T.siteMode();
        state = fromHash() || Object.assign({}, DEFAULTS);
        bind();
        var dev = false;
        try { dev = localStorage.getItem(DEV_KEY) === "1"; } catch (e) {}
        setDev(dev);
        sync();
        ready = true;
    }

    // wartości ze stanu do kontrolek
    function sync() {
        $("gName").value = state.name;
        $("gAccent").value = state.accent;
        $("gAccentHex").value = state.accent.toUpperCase();
        $("gAccent2").value = state.accent2;
        $("gAccent2Hex").value = state.accent2.toUpperCase();
        $("gHarmony").value = state.harmony;
        $("gAccent2Field").hidden = state.harmony !== "custom";
        $("gTone").value = state.tone;
        $("gMaterial").value = state.material;
        $("gFont").value = state.font;
        $("gArt").value = state.art;
        $("gHigh").checked = !!state.high;
        Array.prototype.forEach.call($("gShape").children, function (b) { b.setAttribute("aria-pressed", b.dataset.v === state.shape); });
        Array.prototype.forEach.call($("gMode").children, function (b) { b.setAttribute("aria-pressed", b.dataset.mode === mode); });
        update();
    }

    function bind() {
        function set(k, v) { state[k] = v; sync(); }
        $("gName").addEventListener("input", function () { state.name = this.value; update(); });
        $("gAccent").addEventListener("input", function () { set("accent", this.value.toUpperCase()); });
        $("gAccent2").addEventListener("input", function () { set("accent2", this.value.toUpperCase()); });
        [["gAccentHex", "accent"], ["gAccent2Hex", "accent2"]].forEach(function (p) {
            $(p[0]).addEventListener("input", function () {
                var v = this.value.trim();
                if (v[0] !== "#") v = "#" + v;
                if (validHex(v)) { state[p[1]] = v.toUpperCase(); $(p[0] === "gAccentHex" ? "gAccent" : "gAccent2").value = v; update(); }
            });
            $(p[0]).addEventListener("blur", function () { this.value = state[p[1]]; });
        });
        ["gHarmony", "gTone", "gMaterial", "gFont", "gArt"].forEach(function (id) {
            var key = { gHarmony: "harmony", gTone: "tone", gMaterial: "material", gFont: "font", gArt: "art" }[id];
            $(id).addEventListener("change", function () { set(key, this.value); });
        });
        $("gHigh").addEventListener("change", function () { set("high", this.checked); });
        $("gShape").addEventListener("click", function (e) {
            var b = e.target.closest("button");
            if (b) set("shape", b.dataset.v);
        });
        $("gMode").addEventListener("click", function (e) {
            var b = e.target.closest("button");
            if (b) { mode = b.dataset.mode; sync(); }
        });
        $("gRandom").addEventListener("click", randomize);
        $("gCopy").addEventListener("click", function () { UI.copy(T.toCSS(current), "Skopiowano CSS"); });
        $("gLink").addEventListener("click", function () { UI.copy(location.href, "Skopiowano link do stylu"); });
        $("gDownload").addEventListener("click", function () { download("css"); });
        $("gDownloadMd").addEventListener("click", function () { download("md"); });
        $("gDownloadAll").addEventListener("click", function () {
            download("css");
            // druga paczka z opóźnieniem — część przeglądarek blokuje dwa pobrania naraz
            setTimeout(function () { download("md"); }, 400);
        });
        $("gDev").addEventListener("click", function () { setDev(this.getAttribute("aria-checked") !== "true"); });
        $("gDevDownloads").addEventListener("click", function (e) {
            var b = e.target.closest("[data-download]");
            if (b) download(b.dataset.download);
        });
        $("gDevJump").addEventListener("click", function () {
            var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            $("gDevPanel").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        });
        $("gCodeTab").addEventListener("click", function (e) {
            var b = e.target.closest("button");
            if (b) { tab = b.dataset.tab; update(); }
        });
    }

    function file(kind) {
        return kind === "md" ? T.toMarkdown(current) : T.toCSS(current);
    }
    function download(kind) {
        var blob = new Blob([file(kind)], { type: kind === "md" ? "text/markdown" : "text/css" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = slug(state.name) + "." + kind;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
        UI.toast("Pobrano " + a.download);
    }

    // tryb deweloperski pokazuje pliki do pobrania; wybór zapamiętany w przeglądarce
    function setDev(on) {
        $("gDev").setAttribute("aria-checked", on);
        $("gDevBox").classList.toggle("is-on", on);
        $("gDevState").textContent = on ? "Włączony" : "Wyłączony";
        $("gDevDesc").textContent = on
            ? "Generator nie zapisuje projektu — pobierz pliki, żeby go zachować."
            : "Włącz, aby pobrać pliki dla programisty: arkusz CSS i opis stylu .md dla AI.";
        $("gDevDownloads").hidden = !on;
        $("gDevPanel").hidden = !on;
        try { localStorage.setItem(DEV_KEY, on ? "1" : "0"); } catch (e) {}
    }

    // ---------- widżety podglądu (wybór zapamiętany w przeglądarce) ----------
    function loadWidgets() {
        var all = Probka.WIDGETS.map(function (w) { return w.id; });
        try {
            var v = JSON.parse(localStorage.getItem(WIDGET_KEY));
            if (Array.isArray(v)) {
                v = v.filter(function (id) { return all.indexOf(id) >= 0; });
                if (v.length) return v;
            }
        } catch (e) {}
        return all;
    }
    function setWidgets(list) {
        widgets = list;
        Probka.setWidgets(probka, widgets);
        try { localStorage.setItem(WIDGET_KEY, JSON.stringify(widgets)); } catch (e) {}
        syncWidgetPicker();
    }
    function buildWidgetPicker() {
        Probka.PRESETS.forEach(function (p) {
            var b = UI.el("button", "seg-btn", p.label);
            b.type = "button";
            b.dataset.preset = p.id;
            b.addEventListener("click", function () { setWidgets(p.list.slice()); });
            $("gPresets").appendChild(b);
        });
        Probka.WIDGETS.forEach(function (w) {
            var lab = UI.el("label", "facet-opt");
            var inp = UI.el("input");
            inp.type = "checkbox";
            inp.value = w.id;
            inp.addEventListener("change", function () {
                var next = widgets.filter(function (id) { return id !== w.id; });
                if (inp.checked) next = Probka.WIDGETS.map(function (x) { return x.id; }).filter(function (id) { return id === w.id || widgets.indexOf(id) >= 0; });
                if (!next.length) { inp.checked = true; UI.toast("Zostaw przynajmniej jeden widżet"); return; }
                setWidgets(next);
            });
            lab.appendChild(inp);
            lab.appendChild(UI.el("span", "box"));
            lab.appendChild(UI.el("span", "facet-label", w.label));
            $("gWidgets").appendChild(lab);
        });
        // lista zamyka się po kliknięciu obok niej
        document.addEventListener("click", function (e) {
            var d = $("gWidgetPick");
            if (d.open && !d.contains(e.target)) d.open = false;
        });
        syncWidgetPicker();
    }
    function syncWidgetPicker() {
        var key = widgets.slice().sort().join();
        Array.prototype.forEach.call($("gPresets").children, function (b) {
            var p = Probka.PRESETS.filter(function (x) { return x.id === b.dataset.preset; })[0];
            b.setAttribute("aria-pressed", p.list.slice().sort().join() === key);
        });
        Array.prototype.forEach.call($("gWidgets").querySelectorAll("input"), function (i) { i.checked = widgets.indexOf(i.value) >= 0; });
        $("gWidgetCount").textContent = widgets.length + "/" + Probka.WIDGETS.length;
    }

    function slug(n) {
        return (String(n).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l")
            .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")) || "styl";
    }

    function randomize() {
        var mats = Object.keys(T.MATERIALS), shapes = Object.keys(T.SHAPES), fonts = Object.keys(T.FONTS), arts = Object.keys(T.ARTS);
        state = {
            name: pick(ADJ) + " " + pick(NOUN),
            accent: T.fromHsl(Math.random() * 360, 0.55 + Math.random() * 0.35, 0.38 + Math.random() * 0.17),
            harmony: pick(["40", "180", "150", "120"]), accent2: state.accent2,
            tone: pick(["neutral", "tinted", "tinted", "warm", "cool"]),
            material: pick(mats), shape: pick(shapes), font: pick(fonts),
            art: Math.random() < 0.5 ? "auto" : pick(arts), high: false
        };
        sync();
    }

    function update() {
        current = T.expand(seedFrom(state));
        T.loadFonts(current);
        T.apply(probka, current, mode);
        Probka.setName(probka, current.name);
        $("gTitle").textContent = current.name || "Podgląd";
        $("gCss").textContent = file(tab);
        $("gCssName").textContent = slug(state.name) + ".css";
        $("gMdName").textContent = slug(state.name) + ".md";
        Array.prototype.forEach.call($("gCodeTab").children, function (b) { b.setAttribute("aria-pressed", b.dataset.tab === tab); });
        var code = encode(state);
        $("gOpen").href = "style/podglad.html?g=" + code + "&m=" + mode;
        try { history.replaceState(null, "", location.pathname + location.search + "#generator?g=" + code); } catch (e) {}
        UI.palette($("gPalette"), current);
        contrastTable();
    }

    function grade(r, large) {
        if (r >= 7) return ["AAA", "ok"];
        if (r >= 4.5) return ["AA", "ok"];
        if (r >= 3) return [large ? "AA duży" : "Tylko duży", large ? "ok" : "warn"];
        return ["Za niski", "bad"];
    }
    function contrastTable() {
        var tb = $("gContrast");
        tb.textContent = "";
        var head = tb.createTHead().insertRow();
        ["Para kolorów", "Jasny", "Ciemny"].forEach(function (h) { var th = document.createElement("th"); th.textContent = h; head.appendChild(th); });
        var body = tb.createTBody();
        [["Tekst na tle", "--text", "--bg"], ["Tekst na powierzchni", "--text", "--surface"], ["Tekst drugorzędny", "--muted", "--bg"],
            ["Etykieta przycisku", "--on-accent", "--accent"], ["Link", "--link", "--bg"], ["Akcent 2 (grafika)", "--accent-2", "--bg", true],
            ["Komunikat błędu", "--danger", "--bg"]].forEach(function (p) {
            var tr = body.insertRow();
            tr.insertCell().textContent = p[0];
            ["light", "dark"].forEach(function (m) {
                var t = current[m];
                var bg = p[2] === "--surface" ? T.flat(t["--surface"], t["--bg"]) : t[p[2]];
                var r = T.contrast(t[p[1]], bg), g = grade(r, p[3]);
                var td = tr.insertCell();
                td.appendChild(UI.el("span", "ratio", r.toFixed(2) + ":1"));
                td.appendChild(UI.el("span", "grade " + g[1], g[0]));
            });
        });
        var src = state.accent.toUpperCase(), fixed = current.light["--accent"];
        var note = $("gContrastNote");
        if (!note) {
            note = UI.el("p", "note");
            note.id = "gContrastNote";
            tb.parentNode.after(note);
        }
        note.textContent = fixed !== src
            ? "Akcent " + src + " był za słaby pod etykietą przycisku — w trybie jasnym użyto " + fixed + "."
            : "Kolory, które nie spełniały progu WCAG, są korygowane automatycznie.";
    }

    window.Generator = {
        // styl z kodu w adresie — używa go strona pełnego podglądu
        fromCode: function (code) {
            var s = decode(code);
            return s ? { style: T.expand(seedFrom(s)), code: code } : null;
        },
        show: function () {
            if (!ready) init();
            else {
                var s = fromHash();
                if (s && encode(s) !== encode(state)) { state = s; sync(); }
            }
        }
    };
})();
