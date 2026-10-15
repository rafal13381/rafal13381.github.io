// Pełny podgląd jednego stylu: ?s=<id> (katalog) albo ?g=<kod> (generator), opcjonalnie &m=light|dark.
document.addEventListener("DOMContentLoaded", function () {
    var T = window.Tokens, UI = window.UI, el = UI.el;
    var params = new URLSearchParams(location.search);
    var list = T.all();
    var st, idx = -1, fromGen = null;

    if (params.get("g") && window.Generator) {
        fromGen = window.Generator.fromCode(params.get("g"));
        if (fromGen) st = fromGen.style;
    } else {
        idx = list.findIndex(function (s) { return s.id === params.get("s"); });
        if (idx < 0 && !params.get("s")) idx = 0;
        st = list[idx];
    }
    if (!st) {
        document.querySelector(".preview-top").hidden = true;
        document.getElementById("pProbka").hidden = true;
        document.querySelector(".preview-details").hidden = true;
        document.getElementById("pMissing").hidden = false;
        return;
    }

    var mode = params.get("m") === "dark" || params.get("m") === "light" ? params.get("m") : T.siteMode();
    var probka = document.getElementById("pProbka");
    Probka.render(probka, st.name);
    T.loadFonts(st);

    document.title = st.name + " · Style · rafal13381";
    document.getElementById("pName").textContent = st.name;
    document.getElementById("pTagline").textContent = st.tagline;
    var cat = T.CATEGORIES.filter(function (c) { return c.id === st.cat; })[0];
    var meta = document.getElementById("pMeta");
    [cat.label, T.MATERIALS[st.material], T.SHAPES[st.shape].label, st.fontLabel, st.collection].forEach(function (t, i) {
        var c = el("span", "chip");
        if (i === 0) {
            var d = el("span", "cat-dot");
            d.style.background = cat.swatch;
            c.prepend(d);
        }
        c.appendChild(document.createTextNode(t));
        meta.appendChild(c);
    });

    var prev = document.getElementById("pPrev"), next = document.getElementById("pNext");
    if (fromGen) {
        document.getElementById("pPager").hidden = true;
        document.getElementById("pPos").textContent = "Styl z generatora";
        document.getElementById("back").href = "../style.html#generator?g=" + fromGen.code;
        document.getElementById("backLabel").textContent = "Wróć do generatora";
    } else {
        document.getElementById("pPos").textContent = "Styl " + (idx + 1) + " z " + list.length + " · " + cat.label;
        if (st.stylownik) {
            var sty = document.getElementById("pStylownik");
            sty.hidden = false;
            sty.href = "../" + st.stylownik + "-" + mode;
        }
    }
    function link(i) { return "?s=" + encodeURIComponent(list[(i + list.length) % list.length].id) + "&m=" + mode; }

    // adres z aktualnym trybem; na file:// niektóre przeglądarki tego zabraniają
    function replace(q) {
        try { history.replaceState(null, "", location.pathname + q); } catch (e) {}
    }

    function render() {
        T.apply(probka, st, mode);
        Array.prototype.forEach.call(document.getElementById("pMode").children, function (b) {
            b.setAttribute("aria-pressed", b.dataset.mode === mode);
        });
        document.getElementById("pWz").href = "wizytowka.html?" + (fromGen ? "g=" + fromGen.code : "s=" + encodeURIComponent(st.id)) + "&m=" + mode;
        if (!fromGen) {
            prev.href = link(idx - 1);
            next.href = link(idx + 1);
            if (st.stylownik) document.getElementById("pStylownik").href = "../" + st.stylownik + "-" + mode;
            replace("?s=" + encodeURIComponent(st.id) + "&m=" + mode);
        } else {
            replace("?g=" + fromGen.code + "&m=" + mode);
        }
    }
    UI.palette(document.getElementById("pPalette"), st);
    document.getElementById("pCss").textContent = T.toCSS(st);
    render();

    document.getElementById("pMode").addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (b) { mode = b.dataset.mode; render(); }
    });
    document.getElementById("pCopy").addEventListener("click", function () { UI.copy(T.toCSS(st), "Skopiowano CSS stylu " + st.name); });

    // ---------- tryb deweloperski: pliki dla programisty ----------
    var DEV_KEY = "podglad-dev", dev = false, tab = "css";
    var base = fromGen
        ? (String(st.name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "styl")
        : st.id;
    function file(kind) { return kind === "md" ? T.toMarkdown(st) : T.toCSS(st); }
    function download(kind) {
        var blob = new Blob([file(kind)], { type: (kind === "md" ? "text/markdown" : "text/css") + ";charset=utf-8" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = base + "." + kind;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
        UI.toast("Pobrano " + a.download);
    }
    function showCode() {
        document.getElementById("pCode").textContent = file(tab);
        Array.prototype.forEach.call(document.getElementById("pCodeTab").children, function (b) { b.setAttribute("aria-pressed", b.dataset.tab === tab); });
    }
    // stan przełącznika zapamiętany w przeglądarce (klucz „podglad-dev”)
    function setDev(on) {
        dev = on;
        document.getElementById("pDev").setAttribute("aria-checked", on);
        document.getElementById("pDevBox").classList.toggle("is-on", on);
        document.getElementById("pDevState").textContent = on ? "Włączony" : "Wyłączony";
        document.getElementById("pDevDesc").textContent = on
            ? "Pliki stylu są gotowe do pobrania poniżej, pod paletą."
            : "Włącz, aby pobrać pliki dla programisty: arkusz CSS i opis stylu .md dla AI.";
        document.getElementById("pDevPanel").hidden = !on;
        document.getElementById("pCodePanel").hidden = on;
        try { localStorage.setItem(DEV_KEY, on ? "1" : "0"); } catch (e) {}
        if (on) showCode();
    }
    document.getElementById("pCssName").textContent = base + ".css";
    document.getElementById("pMdName").textContent = base + ".md";
    document.getElementById("pDev").addEventListener("click", function () { setDev(!dev); });
    document.getElementById("pDevPanel").addEventListener("click", function (e) {
        var b = e.target.closest("[data-download]");
        if (b) download(b.dataset.download);
    });
    document.getElementById("pDownloadAll").addEventListener("click", function () {
        download("css");
        // drugie pobranie z opóźnieniem — część przeglądarek blokuje dwa naraz
        setTimeout(function () { download("md"); }, 400);
    });
    document.getElementById("pCodeTab").addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (b) { tab = b.dataset.tab; showCode(); }
    });
    document.getElementById("pCopyCode").addEventListener("click", function () {
        UI.copy(file(tab), tab === "md" ? "Skopiowano opis .md" : "Skopiowano CSS stylu " + st.name);
    });
    document.getElementById("pLink").addEventListener("click", function () { UI.copy(location.href, "Skopiowano link do stylu"); });
    var saved = false;
    try { saved = localStorage.getItem(DEV_KEY) === "1"; } catch (e) {}
    setDev(saved);

    // ← → zmiana stylu, D przełącza tryb
    document.addEventListener("keydown", function (e) {
        if (e.target.closest("input, textarea, select") || e.metaKey || e.ctrlKey || e.altKey) return;
        if (e.key === "ArrowLeft" && !fromGen) location.href = prev.href;
        else if (e.key === "ArrowRight" && !fromGen) location.href = next.href;
        else if (e.key === "d" || e.key === "D") { mode = mode === "light" ? "dark" : "light"; render(); }
    });
});
