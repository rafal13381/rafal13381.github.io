// Zgoda na usługi zewnętrzne (Google Fonts) + baner prywatności.
// Strona nie ustawia ciasteczek. Wybór zapisuje w localStorage pod kluczem „consent”.
// Arkusze z atrybutem data-consent="fonts" wczytują się (data-href → href) dopiero po zgodzie.
(function () {
    var KEY = "consent";
    var listeners = [];
    var root = document.currentScript && document.currentScript.src.replace(/consent\.js(\?.*)?$/, "") || "";

    function get() {
        try {
            var v = localStorage.getItem(KEY);
            return v === "all" || v === "necessary" ? v : null;
        } catch (e) { return null; }
    }
    function allowed(cat) { return cat === "necessary" || get() === "all"; }

    function applyLinks() {
        var ok = allowed("fonts");
        Array.prototype.forEach.call(document.querySelectorAll('link[data-consent="fonts"]'), function (l) {
            if (ok && !l.getAttribute("href")) l.setAttribute("href", l.dataset.href);
            if (!ok && l.getAttribute("href")) l.removeAttribute("href");
        });
    }

    function set(v) {
        try { localStorage.setItem(KEY, v); } catch (e) {}
        applyLinks();
        listeners.forEach(function (fn) { fn(v); });
        close();
    }

    // ---------- baner ----------
    var CSS =
        ".cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:1000;max-width:560px;margin:0 auto;padding:20px;" +
        "border-radius:24px;border:1px solid var(--cc-line);background:var(--cc-bg);color:var(--cc-text);" +
        "-webkit-backdrop-filter:blur(30px) saturate(180%);backdrop-filter:blur(30px) saturate(180%);" +
        "box-shadow:0 24px 60px -20px rgba(0,0,0,.45);font:500 15px/1.5 -apple-system,BlinkMacSystemFont,\"Inter\",system-ui,sans-serif;" +
        "-webkit-font-smoothing:antialiased;animation:cc-in .45s cubic-bezier(.2,.9,.25,1) both}" +
        ".cc{--cc-bg:rgba(255,255,255,.88);--cc-text:#111114;--cc-muted:#55555F;--cc-line:rgba(0,0,0,.08);--cc-btn:#1C1C1E;--cc-on:#FFF;--cc-soft:rgba(120,120,128,.14);--cc-link:#0A5FD6}" +
        "@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .cc{--cc-bg:rgba(30,32,40,.9);--cc-text:#FFF;--cc-muted:#B0B3BD;--cc-line:rgba(255,255,255,.12);--cc-btn:#FFF;--cc-on:#000;--cc-soft:rgba(255,255,255,.1);--cc-link:#7AB4FF}}" +
        ":root[data-theme=dark] .cc{--cc-bg:rgba(30,32,40,.9);--cc-text:#FFF;--cc-muted:#B0B3BD;--cc-line:rgba(255,255,255,.12);--cc-btn:#FFF;--cc-on:#000;--cc-soft:rgba(255,255,255,.1);--cc-link:#7AB4FF}" +
        ".cc h2{margin:0 0 6px;font-size:17px;font-weight:700;letter-spacing:-.01em}" +
        ".cc p{margin:0;color:var(--cc-muted);font-size:14px}" +
        ".cc a{color:var(--cc-link);font-weight:600;text-decoration:none}.cc a:hover{text-decoration:underline}" +
        ".cc-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}" +
        ".cc-row button{flex:1 1 180px;min-height:44px;padding:10px 16px;border:0;border-radius:999px;font-family:inherit;font-size:15px;font-weight:600;line-height:1.2;cursor:pointer;" +
        "transition:transform .12s ease-out,filter .2s ease}" +
        ".cc-row button:active{transform:scale(.97)}" +
        ".cc-row button:focus-visible{outline:3px solid var(--cc-link);outline-offset:2px}" +
        ".cc-yes{background:var(--cc-btn);color:var(--cc-on)}.cc-no{background:var(--cc-soft);color:var(--cc-text)}" +
        "@keyframes cc-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}" +
        "@media (prefers-reduced-motion:reduce){.cc{animation:none}}";

    var box;
    function open() {
        if (box) return;
        if (!document.getElementById("cc-style")) {
            var st = document.createElement("style");
            st.id = "cc-style";
            st.textContent = CSS;
            document.head.appendChild(st);
        }
        box = document.createElement("section");
        box.className = "cc";
        box.setAttribute("role", "region");
        box.setAttribute("aria-label", "Ustawienia prywatności");
        box.innerHTML =
            "<h2>Prywatność na tej stronie</h2>" +
            "<p>Nie używam ciasteczek śledzących, analityki ani reklam. W przeglądarce zapisuję tylko Twoje ustawienia, np. motyw. " +
            "Za Twoją zgodą wczytam czcionki z Google Fonts — Google otrzyma wtedy Twój adres IP. " +
            '<a href="' + root + 'prywatnosc.html">Polityka prywatności</a></p>' +
            '<div class="cc-row"><button type="button" class="cc-no">Tylko niezbędne</button>' +
            '<button type="button" class="cc-yes">Akceptuj czcionki Google</button></div>';
        box.querySelector(".cc-yes").addEventListener("click", function () { set("all"); });
        box.querySelector(".cc-no").addEventListener("click", function () { set("necessary"); });
        document.body.appendChild(box);
    }
    function close() {
        if (box) { box.remove(); box = null; }
    }

    applyLinks();
    document.addEventListener("DOMContentLoaded", function () {
        applyLinks();
        if (!get()) open();
        // przyciski „Ustawienia prywatności” w stopce i na stronie polityki
        document.addEventListener("click", function (e) {
            if (e.target.closest("[data-consent-open]")) { e.preventDefault(); close(); open(); }
        });
    });

    window.Consent = {
        get: get, allowed: allowed, set: set, open: open,
        onChange: function (fn) { listeners.push(fn); }
    };
})();
