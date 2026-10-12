// Wizytówka na pełnym ekranie: ?t=<szablon>&s=<styl> albo &g=<kod z generatora>, opcjonalnie &m=light|dark.
document.addEventListener("DOMContentLoaded", function () {
    var T = window.Tokens, W = window.Wizytowki;
    var params = new URLSearchParams(location.search);
    var list = T.all();
    var site = document.getElementById("site");
    var tpl = W.byId(params.get("t")).id;
    var code = params.get("g"), st = null, idx = -1;

    if (code && window.Generator) {
        var gen = window.Generator.fromCode(code);
        if (gen) st = gen.style; else code = null;
    }
    if (!st) {
        code = null;
        idx = Math.max(0, list.findIndex(function (s) { return s.id === params.get("s"); }));
        st = list[idx];
    }
    var mode = params.get("m") === "dark" || params.get("m") === "light" ? params.get("m") : T.siteMode();

    var ICON = {
        light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
        dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
    };

    var sel = document.getElementById("dTemplate");
    W.TEMPLATES.forEach(function (t) {
        var o = document.createElement("option");
        o.value = t.id;
        o.textContent = t.label;
        sel.appendChild(o);
    });
    if (code) {
        document.getElementById("dPrev").hidden = true;
        document.getElementById("dNext").hidden = true;
    }

    function query() {
        return "?t=" + tpl + (code ? "&g=" + code : "&s=" + encodeURIComponent(st.id)) + "&m=" + mode;
    }
    function update() {
        T.apply(site, st, mode);
        T.loadFonts(st);
        document.documentElement.style.background = st[mode]["--bg"];
        document.documentElement.style.colorScheme = mode;
        sel.value = tpl;
        document.getElementById("dName").textContent = st.name;
        var m = document.getElementById("dMode");
        m.innerHTML = ICON[mode === "light" ? "dark" : "light"];
        document.getElementById("dBack").href = code ? "../style.html#generator?g=" + code
            : "../style.html#wizytowki?t=" + tpl + "&s=" + encodeURIComponent(st.id) + "&m=" + mode;
        var t = W.byId(tpl);
        document.title = t.name + " · " + st.name + " · Wizytówka";
        try { history.replaceState(null, "", location.pathname + query()); } catch (e) {}
    }
    function setTemplate(id) {
        tpl = W.byId(id).id;
        W.render(site, tpl);
        window.scrollTo(0, 0);
        update();
    }
    function step(d) {
        if (code) return;
        idx = (idx + d + list.length) % list.length;
        st = list[idx];
        update();
    }

    sel.addEventListener("change", function () { setTemplate(sel.value); });
    document.getElementById("dPrev").addEventListener("click", function () { step(-1); });
    document.getElementById("dNext").addEventListener("click", function () { step(1); });
    document.getElementById("dMode").addEventListener("click", function () { mode = mode === "light" ? "dark" : "light"; update(); });
    document.addEventListener("keydown", function (e) {
        if (e.target.closest("input, textarea, select") || e.metaKey || e.ctrlKey || e.altKey) return;
        if (e.key === "ArrowLeft") step(-1);
        else if (e.key === "ArrowRight") step(1);
        else if (e.key === "d" || e.key === "D") { mode = mode === "light" ? "dark" : "light"; update(); }
    });

    setTemplate(tpl);
});
