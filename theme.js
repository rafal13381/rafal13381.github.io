// Motyw: system → jasny → ciemny. Ustawiany przed renderem, żeby nie mrugało.
(function () {
    var KEY = "theme";
    var root = document.documentElement;
    var order = ["system", "light", "dark"];
    var labels = { system: "Theme: system", light: "Theme: light", dark: "Theme: dark" };
    var icons = {
        system: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>',
        light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
        dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
    };

    function read() {
        try { return localStorage.getItem(KEY) || "system"; } catch (e) { return "system"; }
    }
    function apply(mode) {
        if (mode === "system") root.removeAttribute("data-theme");
        else root.setAttribute("data-theme", mode);
    }

    var mode = read();
    apply(mode);

    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.getElementById("themeToggle");
        if (!btn) return;
        function render() {
            btn.innerHTML = icons[mode];
            btn.setAttribute("aria-label", labels[mode]);
            btn.title = labels[mode];
        }
        render();
        btn.addEventListener("click", function () {
            mode = order[(order.indexOf(mode) + 1) % order.length];
            apply(mode);
            try { localStorage.setItem(KEY, mode); } catch (e) {}
            render();
        });
    });
})();
