// Wspólne pomocniki stron stylów: kopiowanie do schowka, komunikaty, tworzenie elementów.
(function () {
    var toastTimer;
    function toast(msg) {
        var t = document.getElementById("toast");
        if (!t) return;
        t.textContent = msg;
        t.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1800);
    }
    function copy(text, msg) {
        function ok() { toast(msg || "Skopiowano"); }
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(ok, fallback);
        } else fallback();
        function fallback() {
            var ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand("copy"); ok(); } catch (e) { toast("Nie udało się skopiować"); }
            ta.remove();
        }
    }
    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text != null) e.textContent = text;
        return e;
    }
    // paleta obu trybów jako przyciski kopiujące wartości
    function palette(box, current) {
        var T = window.Tokens;
        box.textContent = "";
        var keys = [["--bg", "Tło"], ["--surface", "Powierzchnia"], ["--text", "Tekst"], ["--muted", "Drugorzędny"],
            ["--accent", "Akcent"], ["--on-accent", "Na akcencie"], ["--accent-2", "Akcent 2"], ["--link", "Link"],
            ["--success", "Sukces"], ["--warning", "Ostrzeżenie"], ["--danger", "Błąd"]];
        ["light", "dark"].forEach(function (m) {
            var t = current[m];
            var row = el("div", "swatch-row");
            row.appendChild(el("span", "label", m === "light" ? "Jasny" : "Ciemny"));
            var list = el("div", "swatches");
            keys.forEach(function (k) {
                var v = k[0] === "--surface" ? T.flat(t[k[0]], t["--bg"]) : t[k[0]];
                var b = el("button", "swatch-btn");
                b.type = "button";
                b.title = k[1] + " " + k[0] + " — kliknij, aby skopiować";
                var c = el("span", "swatch-color");
                c.style.background = v;
                b.appendChild(c);
                b.appendChild(el("span", "swatch-name", k[1]));
                b.appendChild(el("span", "swatch-hex", v));
                b.addEventListener("click", function () { copy(v, "Skopiowano " + v); });
                list.appendChild(b);
            });
            row.appendChild(list);
            box.appendChild(row);
        });
    }
    window.UI = { toast: toast, copy: copy, el: el, palette: palette };
})();
