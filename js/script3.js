// Strona Style: przełączanie widoków i katalog z filtrami.
document.addEventListener("DOMContentLoaded", function () {
    var T = window.Tokens, UI = window.UI, el = UI.el;
    var styles = T.all();

    // ---------- widoki ----------
    var views = { katalog: document.getElementById("viewKatalog"), generator: document.getElementById("viewGenerator"), wizytowki: document.getElementById("viewWizytowki") };
    var tabs = { katalog: document.getElementById("tabKatalog"), generator: document.getElementById("tabGenerator"), wizytowki: document.getElementById("tabWizytowki") };
    function route() {
        var h = location.hash.split("?")[0].slice(1);
        var v = views[h] ? h : "katalog";
        Object.keys(views).forEach(function (k) {
            views[k].hidden = k !== v;
            tabs[k].setAttribute("aria-selected", k === v);
            tabs[k].setAttribute("aria-pressed", k === v);
        });
        if (v === "generator" && window.Generator) window.Generator.show();
        if (v === "wizytowki" && window.WizytowkiWidok) window.WizytowkiWidok.show();
    }
    window.addEventListener("hashchange", route);
    document.getElementById("totalCount").textContent = styles.length;

    // ---------- katalog ----------
    var grid = document.getElementById("styles");
    var q = document.getElementById("q");
    var count = document.getElementById("count");
    var empty = document.getElementById("empty");
    var catLabel = {};
    T.CATEGORIES.forEach(function (c) { catLabel[c.id] = c; });

    var FACETS = [
        { key: "cat", title: "Kolorystyka", options: T.CATEGORIES.map(function (c) { return { v: c.id, label: c.label, swatch: c.swatch }; }) },
        { key: "material", title: "Charakter", options: Object.keys(T.MATERIALS).map(function (k) { return { v: k, label: T.MATERIALS[k] }; }) },
        { key: "shape", title: "Kształt", options: Object.keys(T.SHAPES).map(function (k) { return { v: k, label: T.SHAPES[k].label }; }) },
        { key: "kind", title: "Typografia", options: T.KINDS.map(function (k) { return { v: k, label: k }; }) },
        { key: "collection", title: "Kolekcja", options: ["Podstawowe", "Pro", "Rozszerzone"].map(function (k) { return { v: k, label: k }; }) }
    ];
    var active = {};
    FACETS.forEach(function (f) { active[f.key] = []; });

    function norm(t) {
        return String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l");
    }
    styles.forEach(function (s) {
        s.hay = norm([s.name, s.tagline, s.use, catLabel[s.cat].label, T.MATERIALS[s.material], T.SHAPES[s.shape].label, s.kind, s.fontLabel, s.collection].join(" "));
    });

    function previewUrl(s, mode) { return "style/podglad.html?s=" + encodeURIComponent(s.id) + (mode ? "&m=" + mode : ""); }

    function card(s) {
        var art = el("article", "panel style-card");
        var mini = el("a", "mini");
        mini.href = previewUrl(s);
        mini.setAttribute("aria-label", "Podgląd stylu " + s.name);
        var box = el("div", "mini-card");
        var chip = el("span", "mini-chip");
        chip.appendChild(el("i"));
        box.appendChild(chip);
        box.appendChild(el("span", "mini-title", "Aa"));
        box.appendChild(el("span", "mini-line"));
        var row = el("span", "mini-row");
        row.appendChild(el("span", "mini-btn", "Akcja"));
        row.appendChild(el("span", "mini-ghost"));
        box.appendChild(row);
        mini.appendChild(box);
        art.appendChild(mini);

        var head = el("div", "style-head");
        head.appendChild(el("h3", null, s.name));
        var dot = el("span", "cat-dot");
        dot.style.background = catLabel[s.cat].swatch;
        dot.title = catLabel[s.cat].label;
        head.appendChild(dot);
        art.appendChild(head);
        art.appendChild(el("p", "style-tagline", s.tagline));
        art.appendChild(el("p", "style-meta", [T.MATERIALS[s.material], T.SHAPES[s.shape].label, s.fontLabel].join(" · ")));

        var links = el("div", "card-links");
        var pv = el("a", "btn btn-secondary btn-sm", "Podgląd");
        pv.href = previewUrl(s);
        links.appendChild(pv);
        var cp = el("button", "btn btn-ghost btn-sm", "Kopiuj CSS");
        cp.type = "button";
        cp.addEventListener("click", function () { UI.copy(T.toCSS(s), "Skopiowano CSS stylu " + s.name); });
        links.appendChild(cp);
        if (s.spec) {
            var sp = el("a", "btn btn-ghost btn-sm", "Specyfikacja");
            // specyfikacje .md czytelniej wyglądają w widoku GitHuba niż jako surowy plik
            sp.href = "https://github.com/rafal13381/rafal13381.github.io/blob/main/" + s.spec;
            links.appendChild(sp);
        }
        art.appendChild(links);
        s.card = art;
        s.mini = mini;
        return art;
    }

    styles.forEach(function (s) { grid.appendChild(card(s)); });

    function paint() {
        var mode = T.siteMode();
        styles.forEach(function (s) { T.apply(s.mini, s, mode); });
    }
    paint();
    T.onSiteMode(paint);

    // fonty dociągane dopiero, gdy karta pojawi się na ekranie
    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                io.unobserve(e.target);
                T.loadFonts(e.target.__style);
            });
        }, { rootMargin: "300px" });
        styles.forEach(function (s) { s.card.__style = s; io.observe(s.card); });
    } else styles.forEach(T.loadFonts);

    // ---------- filtry ----------
    var facetsBox = document.getElementById("facets");
    var countEls = {};
    FACETS.forEach(function (f) {
        var fs = el("fieldset", "facet");
        fs.appendChild(el("legend", null, f.title));
        f.options.forEach(function (o) {
            var lab = el("label", "facet-opt");
            var inp = el("input");
            inp.type = "checkbox";
            inp.value = o.v;
            inp.addEventListener("change", function () {
                var a = active[f.key], i = a.indexOf(o.v);
                if (inp.checked && i < 0) a.push(o.v);
                if (!inp.checked && i >= 0) a.splice(i, 1);
                render();
            });
            lab.appendChild(inp);
            lab.appendChild(el("span", "box"));
            if (o.swatch) {
                var sw = el("span", "swatch");
                sw.style.background = o.swatch;
                lab.appendChild(sw);
            }
            lab.appendChild(el("span", "facet-label", o.label));
            var c = el("span", "facet-count");
            lab.appendChild(c);
            countEls[f.key + ":" + o.v] = { count: c, label: lab, input: inp };
            fs.appendChild(lab);
        });
        facetsBox.appendChild(fs);
    });

    function matches(s, skip, term) {
        if (term && s.hay.indexOf(term) < 0) return false;
        for (var i = 0; i < FACETS.length; i++) {
            var k = FACETS[i].key;
            if (k !== skip && active[k].length && active[k].indexOf(s[k]) < 0) return false;
        }
        return true;
    }

    function render() {
        var term = norm(q.value.trim()), shown = 0, n = 0;
        styles.forEach(function (s) {
            var ok = matches(s, null, term);
            s.card.hidden = !ok;
            if (ok) shown++;
        });
        // liczniki: ile stylów da dana opcja przy pozostałych filtrach
        FACETS.forEach(function (f) {
            n += active[f.key].length;
            f.options.forEach(function (o) {
                var c = 0;
                styles.forEach(function (s) { if (s[f.key] === o.v && matches(s, f.key, term)) c++; });
                var ref = countEls[f.key + ":" + o.v];
                ref.count.textContent = c;
                ref.label.classList.toggle("is-empty", c === 0 && !ref.input.checked);
            });
        });
        count.textContent = shown === styles.length ? styles.length + " stylów" : shown + " z " + styles.length;
        empty.hidden = shown > 0;
        var ac = document.getElementById("activeCount");
        ac.hidden = !n;
        ac.textContent = n;
        document.getElementById("clearFilters").disabled = !n && !q.value;
    }

    function clear() {
        FACETS.forEach(function (f) { active[f.key] = []; });
        Object.keys(countEls).forEach(function (k) { countEls[k].input.checked = false; });
        q.value = "";
        render();
    }
    document.getElementById("clearFilters").addEventListener("click", clear);
    empty.querySelector("[data-clear]").addEventListener("click", clear);
    q.addEventListener("input", render);

    // na telefonie filtry są zwinięte, na szerokim ekranie zawsze otwarte
    var box = document.getElementById("filtersBox");
    var wide = window.matchMedia("(min-width: 901px)");
    function syncBox() { box.open = wide.matches; }
    syncBox();
    if (wide.addEventListener) wide.addEventListener("change", syncBox);

    render();
    route();
});
