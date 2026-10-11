// Silnik stylów: kolory, kontrast WCAG i rozwinięcie „ziarna” stylu w pełny zestaw tokenów CSS.
// Używany przez katalog, podgląd i generator.
(function (g) {
    // ---------- kolory ----------
    function parse(c) {
        c = String(c).trim();
        var m = c.match(/^#([0-9a-f]{3,8})$/i);
        if (m) {
            var h = m[1];
            if (h.length === 3) h = h.replace(/./g, "$&$&");
            return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16),
                h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1];
        }
        m = c.match(/^rgba?\(([^)]+)\)$/i);
        if (m) {
            var p = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat);
            return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1];
        }
        return null;
    }
    function hex(rgb) {
        return "#" + rgb.slice(0, 3).map(function (v) {
            return ("0" + Math.round(Math.max(0, Math.min(255, v))).toString(16)).slice(-2);
        }).join("").toUpperCase();
    }
    function mix(a, b, t) {
        var x = parse(a), y = parse(b);
        return hex([0, 1, 2].map(function (i) { return x[i] + (y[i] - x[i]) * t; }));
    }
    function alpha(c, a) {
        var x = parse(c);
        return "rgba(" + x[0] + "," + x[1] + "," + x[2] + "," + a + ")";
    }
    // kolor z przezroczystością nałożony na tło
    function flat(c, over) {
        var x = parse(c), y = parse(over || "#FFFFFF");
        if (!x) return over;
        return hex([0, 1, 2].map(function (i) { return y[i] + (x[i] - y[i]) * x[3]; }));
    }
    function lum(c) {
        var x = parse(c);
        var v = x.slice(0, 3).map(function (n) {
            n /= 255;
            return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
    }
    function contrast(a, b) {
        var x = lum(a), y = lum(b);
        return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
    }
    // przesuwa kolor w stronę `toward`, aż osiągnie wymagany kontrast
    function ensure(fg, bg, min, toward) {
        var c = fg;
        for (var i = 0; i < 40 && contrast(c, bg) < min; i++) c = mix(c, toward, 0.07);
        return c;
    }
    function toHsl(c) {
        var x = parse(c), r = x[0] / 255, gg = x[1] / 255, b = x[2] / 255;
        var mx = Math.max(r, gg, b), mn = Math.min(r, gg, b), l = (mx + mn) / 2, h = 0, s = 0;
        if (mx !== mn) {
            var d = mx - mn;
            s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
            h = mx === r ? (gg - b) / d + (gg < b ? 6 : 0) : mx === gg ? (b - r) / d + 2 : (r - gg) / d + 4;
            h *= 60;
        }
        return [h, s, l];
    }
    function fromHsl(h, s, l) {
        h = ((h % 360) + 360) % 360;
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
        function f(t) {
            t = (t + 1) % 1;
            return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p;
        }
        return hex([f(h / 360 + 1 / 3) * 255, f(h / 360) * 255, f(h / 360 - 1 / 3) * 255]);
    }

    // ---------- słowniki ----------
    var CATEGORIES = [
        { id: "niebieskie", label: "Niebieskie", swatch: "#2F6FEB" },
        { id: "turkusowe", label: "Turkusowe", swatch: "#14B8A6" },
        { id: "zielone", label: "Zielone", swatch: "#2E9E4F" },
        { id: "zolte", label: "Żółte i pomarańczowe", swatch: "#F2A20C" },
        { id: "czerwone", label: "Czerwone", swatch: "#DC2626" },
        { id: "rozowe", label: "Różowe", swatch: "#E64A8B" },
        { id: "fioletowe", label: "Fioletowe", swatch: "#7C3AED" },
        { id: "ziemiste", label: "Ziemiste", swatch: "#9A5B34" },
        { id: "neutralne", label: "Neutralne", swatch: "#6B7280" }
    ];
    var MATERIALS = {
        flat: "Płaski", glass: "Szkło", outline: "Kontur", soft: "Miękki",
        brutal: "Brutalizm", paper: "Papier", neon: "Neon"
    };
    var SHAPES = {
        sharp: { label: "Ostre", radius: "4px", sm: "2px", btn: "2px" },
        soft: { label: "Łagodne", radius: "12px", sm: "8px", btn: "8px" },
        round: { label: "Zaokrąglone", radius: "20px", sm: "12px", btn: "12px" },
        pill: { label: "Pigułki", radius: "28px", sm: "16px", btn: "999px" }
    };
    var ARTS = { none: "Jednolite", blobs: "Mgła barw", glow: "Poświata", grid: "Siatka", dots: "Kropki", lines: "Linie" };
    var KINDS = ["Bezszeryfowy", "Szeryfowy", "Monospace", "Ekspresyjny"];

    var SANS = 'system-ui, sans-serif', SERIF = 'Georgia, serif', MONO = 'ui-monospace, monospace';
    function stack(name, fb) { return '"' + name + '", ' + fb; }
    // krój nagłówków, tekstu i danych + charakter nagłówków
    var FONTS = {
        inter: { label: "Inter", d: stack("Inter", SANS), b: stack("Inter", SANS), m: stack("JetBrains Mono", MONO), w: 700, t: "-0.025em" },
        manrope: { label: "Manrope", d: stack("Manrope", SANS), b: stack("Manrope", SANS), m: stack("JetBrains Mono", MONO), w: 800, t: "-0.03em" },
        dmsans: { label: "DM Sans", d: stack("DM Sans", SANS), b: stack("DM Sans", SANS), m: stack("JetBrains Mono", MONO), w: 700, t: "-0.03em" },
        plex: { label: "IBM Plex Sans", d: stack("IBM Plex Sans", SANS), b: stack("IBM Plex Sans", SANS), m: stack("IBM Plex Mono", MONO), w: 600, t: "-0.015em" },
        sora: { label: "Sora", d: stack("Sora", SANS), b: stack("Inter", SANS), m: stack("JetBrains Mono", MONO), w: 700, t: "-0.035em" },
        outfit: { label: "Outfit", d: stack("Outfit", SANS), b: stack("Outfit", SANS), m: stack("JetBrains Mono", MONO), w: 600, t: "-0.02em" },
        jakarta: { label: "Plus Jakarta Sans", d: stack("Plus Jakarta Sans", SANS), b: stack("Plus Jakarta Sans", SANS), m: stack("JetBrains Mono", MONO), w: 800, t: "-0.03em" },
        nunito: { label: "Nunito", d: stack("Nunito", SANS), b: stack("Nunito", SANS), m: stack("JetBrains Mono", MONO), w: 800, t: "-0.015em" },
        worksans: { label: "Work Sans", d: stack("Work Sans", SANS), b: stack("Work Sans", SANS), m: stack("IBM Plex Mono", MONO), w: 600, t: "-0.02em" },
        grotesk: { label: "Space Grotesk", d: stack("Space Grotesk", SANS), b: stack("Inter", SANS), m: stack("Space Mono", MONO), w: 700, t: "-0.035em" },
        fraunces: { label: "Fraunces", d: stack("Fraunces", SERIF), b: stack("Inter", SANS), m: stack("JetBrains Mono", MONO), w: 600, t: "-0.02em" },
        playfair: { label: "Playfair Display", d: stack("Playfair Display", SERIF), b: stack("Source Sans 3", SANS), m: stack("IBM Plex Mono", MONO), w: 700, t: "-0.01em" },
        newsreader: { label: "Newsreader", d: stack("Newsreader", SERIF), b: stack("Newsreader", SERIF), m: stack("IBM Plex Mono", MONO), w: 600, t: "-0.015em" },
        lora: { label: "Lora", d: stack("Lora", SERIF), b: stack("Inter", SANS), m: stack("JetBrains Mono", MONO), w: 600, t: "-0.01em" },
        dmserif: { label: "DM Serif Display", d: stack("DM Serif Display", SERIF), b: stack("DM Sans", SANS), m: stack("JetBrains Mono", MONO), w: 400, t: "-0.01em" },
        instrument: { label: "Instrument Serif", d: stack("Instrument Serif", SERIF), b: stack("Inter", SANS), m: stack("JetBrains Mono", MONO), w: 400, t: "-0.01em" },
        jetbrains: { label: "JetBrains Mono", d: stack("JetBrains Mono", MONO), b: stack("JetBrains Mono", MONO), m: stack("JetBrains Mono", MONO), w: 800, t: "-0.02em" },
        plexmono: { label: "IBM Plex Mono", d: stack("IBM Plex Mono", MONO), b: stack("IBM Plex Sans", SANS), m: stack("IBM Plex Mono", MONO), w: 600, t: "-0.02em" },
        spacemono: { label: "Space Mono", d: stack("Space Mono", MONO), b: stack("Space Grotesk", SANS), m: stack("Space Mono", MONO), w: 700, t: "-0.03em" },
        syne: { label: "Syne", d: stack("Syne", SANS), b: stack("Inter", SANS), m: stack("JetBrains Mono", MONO), w: 800, t: "-0.03em", x: true },
        unbounded: { label: "Unbounded", d: stack("Unbounded", SANS), b: stack("Manrope", SANS), m: stack("JetBrains Mono", MONO), w: 600, t: "-0.03em", x: true },
        bricolage: { label: "Bricolage Grotesque", d: stack("Bricolage Grotesque", SANS), b: stack("Inter", SANS), m: stack("JetBrains Mono", MONO), w: 800, t: "-0.04em", x: true },
        archivo: { label: "Archivo Black", d: stack("Archivo Black", SANS), b: stack("Archivo", SANS), m: stack("Space Mono", MONO), w: 400, t: "-0.01em", up: true, x: true },
        fredoka: { label: "Fredoka", d: stack("Fredoka", SANS), b: stack("Nunito", SANS), m: stack("JetBrains Mono", MONO), w: 600, t: "-0.01em", x: true },
        chakra: { label: "Chakra Petch", d: stack("Chakra Petch", SANS), b: stack("Inter", SANS), m: stack("JetBrains Mono", MONO), w: 700, t: "0.01em", up: true, x: true }
    };
    // rodziny dostępne w Google Fonts (z wagami, które naprawdę istnieją)
    var GOOGLE = {
        "Inter": "Inter:wght@400;500;600;700", "Inter Tight": "Inter+Tight:wght@500;600;700;800",
        "Manrope": "Manrope:wght@400;500;600;700;800", "DM Sans": "DM+Sans:wght@400;500;600;700",
        "IBM Plex Sans": "IBM+Plex+Sans:wght@400;500;600;700", "IBM Plex Mono": "IBM+Plex+Mono:wght@400;500;600;700",
        "Space Grotesk": "Space+Grotesk:wght@400;500;700", "Sora": "Sora:wght@400;600;700",
        "Outfit": "Outfit:wght@400;500;600;700", "Plus Jakarta Sans": "Plus+Jakarta+Sans:wght@400;500;600;700;800",
        "Nunito": "Nunito:wght@400;600;700;800", "Work Sans": "Work+Sans:wght@400;500;600;700",
        "Fraunces": "Fraunces:wght@400;600;700", "Playfair Display": "Playfair+Display:wght@400;600;700",
        "Source Sans 3": "Source+Sans+3:wght@400;600", "Newsreader": "Newsreader:wght@400;500;600;700",
        "Lora": "Lora:wght@400;600;700", "DM Serif Display": "DM+Serif+Display",
        "JetBrains Mono": "JetBrains+Mono:wght@400;500;700;800", "Space Mono": "Space+Mono:wght@400;700",
        "Syne": "Syne:wght@400;600;700;800", "Unbounded": "Unbounded:wght@400;600;700",
        "Bricolage Grotesque": "Bricolage+Grotesque:wght@400;600;700;800", "Archivo Black": "Archivo+Black",
        "Archivo": "Archivo:wght@400;500;600", "Fredoka": "Fredoka:wght@400;500;600;700",
        "Chakra Petch": "Chakra+Petch:wght@400;500;600;700", "Instrument Serif": "Instrument+Serif",
        "Roboto Flex": "Roboto+Flex:wght@400;500;600", "Geist": "Geist:wght@400;500;600;700",
        "Geist Mono": "Geist+Mono:wght@400;500", "Hanken Grotesk": "Hanken+Grotesk:wght@400;500;600;700"
    };
    var EXPRESSIVE = ["Archivo Black", "Chakra Petch", "Fredoka", "Unbounded", "Syne", "Bricolage Grotesque"];

    function families(st) {
        var out = [];
        ["--font-display", "--font-body", "--font-mono"].forEach(function (k) {
            (String(st.shared[k] || "").match(/"([^"]+)"/g) || []).forEach(function (q) {
                var n = q.slice(1, -1);
                if (GOOGLE[n] && out.indexOf(n) < 0) out.push(n);
            });
        });
        return out;
    }
    function fontUrl(names) {
        return "https://fonts.googleapis.com/css2?" + names.map(function (n) { return "family=" + GOOGLE[n]; }).join("&") + "&display=swap";
    }
    var loaded = {};
    // każda rodzina osobno — błąd jednej nie blokuje pozostałych
    function loadFonts(st) {
        families(st).forEach(function (n) {
            if (loaded[n]) return;
            loaded[n] = true;
            // czcionki z Google tylko po zgodzie (consent.js); bez niej zostają fonty systemowe
            var l = document.createElement("link");
            l.rel = "stylesheet";
            l.setAttribute("data-consent", "fonts");
            l.dataset.href = fontUrl([n]);
            if (!g.Consent || g.Consent.allowed("fonts")) l.href = l.dataset.href;
            document.head.appendChild(l);
        });
    }

    // ---------- rozwinięcie ziarna ----------
    var WHITE = "#FFFFFF", BLACK = "#000000";
    var STATUS = {
        light: { success: "#1E8E3E", warning: "#B25E09", danger: "#D32F2F" },
        dark: { success: "#4ADE80", warning: "#FBBF24", danger: "#F87171" }
    };

    function art(kind, bg, text, a1, a2, dark) {
        switch (kind) {
            case "blobs":
                return "radial-gradient(60% 55% at 12% 8%, " + alpha(a1, dark ? 0.3 : 0.24) + " 0%, transparent 60%), " +
                    "radial-gradient(55% 50% at 92% 12%, " + alpha(a2, dark ? 0.24 : 0.2) + " 0%, transparent 60%), " +
                    "radial-gradient(60% 55% at 60% 100%, " + alpha(mix(a1, a2, 0.5), dark ? 0.2 : 0.16) + " 0%, transparent 65%), " + bg;
            case "glow":
                return "radial-gradient(70% 60% at 50% -10%, " + alpha(a1, dark ? 0.38 : 0.2) + " 0%, transparent 60%), " +
                    "radial-gradient(50% 45% at 100% 100%, " + alpha(a2, dark ? 0.22 : 0.14) + " 0%, transparent 60%), " + bg;
            case "grid":
                var gl = alpha(a1, dark ? 0.1 : 0.08);
                return "linear-gradient(" + gl + " 1px, transparent 1px) 0 0 / 28px 28px, " +
                    "linear-gradient(90deg, " + gl + " 1px, transparent 1px) 0 0 / 28px 28px, " + bg;
            case "dots":
                return "radial-gradient(" + alpha(text, dark ? 0.18 : 0.16) + " 1px, transparent 1.6px) 0 0 / 18px 18px, " + bg;
            case "lines":
                return "repeating-linear-gradient(0deg, " + alpha(text, dark ? 0.06 : 0.055) + " 0 1px, transparent 1px 32px), " + bg;
            default:
                return bg;
        }
    }

    function material(kind, bg, text, accent, dark) {
        var o = { bw: "1px", blur: "0px", inset: "none", edge: "transparent", btn: "none", s2: alpha(text, dark ? 0.08 : 0.06) };
        switch (kind) {
            case "glass":
                o.surface = dark ? alpha(mix(bg, text, 0.12), 0.55) : alpha(WHITE, 0.58);
                o.s2 = alpha(text, dark ? 0.1 : 0.07);
                o.border = dark ? alpha(WHITE, 0.12) : alpha(WHITE, 0.7);
                o.card = dark ? "0 30px 70px -24px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.3)"
                    : "0 24px 60px -24px " + alpha(mix(text, accent, 0.3), 0.28) + ", 0 2px 6px " + alpha(text, 0.05);
                o.edge = dark ? alpha(WHITE, 0.16) : alpha(WHITE, 0.9);
                o.btn = "0 6px 16px -6px " + alpha(accent, 0.55);
                o.blur = "28px";
                break;
            case "outline":
                o.surface = bg;
                o.s2 = alpha(text, 0.05);
                o.border = mix(bg, text, dark ? 0.3 : 0.24);
                o.card = "none";
                break;
            case "soft":
                var lo = mix(bg, BLACK, dark ? 0.45 : 0.13), hi = mix(bg, WHITE, dark ? 0.06 : 0.7);
                o.surface = bg;
                o.s2 = mix(bg, BLACK, dark ? 0.22 : 0.045);
                o.border = "transparent";
                o.card = "8px 8px 18px " + lo + ", -8px -8px 18px " + hi;
                o.btn = "4px 4px 10px " + lo + ", -4px -4px 10px " + hi;
                o.inset = "inset 3px 3px 7px " + lo + ", inset -3px -3px 7px " + hi;
                break;
            case "brutal":
                o.surface = dark ? mix(bg, text, 0.07) : mix(bg, WHITE, 0.55);
                o.s2 = alpha(text, 0.07);
                o.border = text;
                o.bw = "2px";
                o.card = "5px 5px 0 " + text;
                o.btn = "3px 3px 0 " + text;
                break;
            case "paper":
                o.surface = dark ? mix(bg, text, 0.045) : mix(bg, WHITE, 0.55);
                o.s2 = alpha(text, 0.05);
                o.border = mix(bg, text, dark ? 0.16 : 0.14);
                o.card = dark ? "0 18px 40px -28px rgba(0,0,0,0.8)"
                    : "0 1px 1px " + alpha(text, 0.05) + ", 0 18px 40px -28px " + alpha(text, 0.35);
                break;
            case "neon":
                o.surface = dark ? alpha(mix(bg, accent, 0.08), 0.82) : alpha(mix(WHITE, accent, 0.04), 0.85);
                o.s2 = alpha(accent, dark ? 0.1 : 0.08);
                o.border = alpha(accent, dark ? 0.45 : 0.35);
                o.card = "0 0 0 1px " + alpha(accent, 0.12) + ", 0 0 32px -8px " + alpha(accent, dark ? 0.55 : 0.3);
                o.btn = "0 0 18px -2px " + alpha(accent, 0.7);
                o.blur = "8px";
                break;
            default: // flat
                o.surface = dark ? mix(bg, text, 0.06) : (lum(bg) > 0.9 ? WHITE : mix(bg, WHITE, 0.7));
                o.border = mix(bg, text, dark ? 0.14 : 0.11);
                o.card = dark ? "0 1px 2px rgba(0,0,0,0.5), 0 12px 32px -16px rgba(0,0,0,0.6)"
                    : "0 1px 2px " + alpha(text, 0.06) + ", 0 12px 32px -16px " + alpha(text, 0.18);
                o.btn = dark ? "none" : "0 1px 2px " + alpha(text, 0.12);
        }
        return o;
    }

    // kolory zależne od kontrastu — wspólne dla ziaren i stylów z plików .md
    function finish(t, dark) {
        var bg = t["--bg"], text = t["--text"];
        var surf = flat(t["--surface"], bg);
        var acc = t["--accent"];
        var ink = dark ? mix(bg, BLACK, 0.4) : "#0B0B0F";
        var on = contrast(WHITE, acc) >= contrast(ink, acc) ? WHITE : ink;
        // za słaby akcent pod etykietą przycisku — przyciemnij albo rozjaśnij
        for (var i = 0; i < 30 && contrast(on, acc) < 4.5; i++) acc = mix(acc, on === WHITE ? BLACK : WHITE, 0.06);
        t["--accent"] = acc;
        if (!t["--on-accent"] || contrast(t["--on-accent"], acc) < 4.5) t["--on-accent"] = on;
        if (!t["--accent-hover"]) t["--accent-hover"] = dark ? mix(acc, WHITE, 0.15) : mix(acc, BLACK, 0.14);
        var muted = t["--muted"] || mix(text, bg, 0.4);
        muted = ensure(ensure(muted, bg, 4.6, text), surf, 4.5, text);
        t["--muted"] = muted;
        t["--link"] = ensure(ensure(t["--link"] || acc, bg, 4.6, text), surf, 4.5, text);
        var st = STATUS[dark ? "dark" : "light"];
        ["success", "warning", "danger"].forEach(function (k) {
            t["--" + k] = ensure(t["--" + k] || st[k], bg, 4.5, text);
        });
        return t;
    }

    function expand(seed) {
        var font = FONTS[seed.font] || FONTS.inter, shape = SHAPES[seed.shape] || SHAPES.round;
        var mat = seed.material || "flat", artKind = seed.art || (mat === "glass" ? "blobs" : mat === "neon" ? "grid" : "none");
        var st = {
            id: seed.id, name: seed.name, tagline: seed.tagline || "", use: seed.use || "",
            collection: seed.collection || "Rozszerzone", cat: seed.cat, material: mat, art: artKind,
            fontKey: seed.font, seed: seed,
            shared: {
                "--font-display": font.d, "--font-body": font.b, "--font-mono": font.m,
                "--heading-weight": String(font.w), "--heading-tracking": font.t,
                "--heading-transform": font.up ? "uppercase" : "none",
                "--radius": shape.radius, "--radius-sm": shape.sm, "--radius-btn": shape.btn
            }
        };
        ["light", "dark"].forEach(function (mode) {
            var dark = mode === "dark", c = seed[mode === "light" ? "l" : "d"];
            var bg = c[0], text = c[1], a1 = c[2], a2 = c[3];
            var m = material(mat, bg, text, a1, dark);
            var t = {
                "--bg": bg, "--bg-art": art(artKind, bg, text, a1, a2, dark),
                "--surface": m.surface, "--surface-2": m.s2, "--text": text,
                "--accent": a1, "--accent-2": ensure(a2, bg, 3, text), "--border": m.border,
                "--shadow-card": m.card, "--shadow-btn": m.btn, "--shadow-inset": m.inset, "--edge": m.edge,
                "--border-w": m.bw, "--blur": m.blur
            };
            if (seed.highContrast) t["--muted"] = mix(text, bg, 0.25);
            st[mode] = finish(t, dark);
        });
        st.shared["--border-w"] = st.light["--border-w"];
        st.shared["--blur"] = st.light["--blur"];
        delete st.light["--border-w"]; delete st.dark["--border-w"];
        delete st.light["--blur"]; delete st.dark["--blur"];
        return describe(st);
    }

    // style z plików .md mają już pełne tokeny — dopełniamy tylko braki
    function normalize(st) {
        st.shared = st.shared || {};
        if (!st.shared["--blur"]) st.shared["--blur"] = st.material === "glass" ? "28px" : st.material === "neon" ? "8px" : "0px";
        if (!st.shared["--border-w"]) st.shared["--border-w"] = "1px";
        ["light", "dark"].forEach(function (m) {
            var t = st[m];
            if (!t["--bg-art"]) t["--bg-art"] = t["--bg"];
            if (!t["--surface-2"]) t["--surface-2"] = alpha(t["--text"], 0.06);
            if (!t["--edge"]) t["--edge"] = "transparent";
            if (!t["--shadow-btn"]) t["--shadow-btn"] = "none";
            if (!t["--shadow-inset"]) t["--shadow-inset"] = "none";
            finish(t, m === "dark");
        });
        return describe(st);
    }

    function category(c) {
        var h = toHsl(c);
        if (h[1] < 0.16 || h[2] < 0.1 || h[2] > 0.94) return "neutralne";
        var x = h[0];
        if (x < 15 || x >= 345) return "czerwone";
        if (x < 45) return h[2] < 0.4 && h[1] < 0.65 ? "ziemiste" : "zolte";
        if (x < 70) return "zolte";
        if (x < 160) return "zielone";
        if (x < 200) return "turkusowe";
        if (x < 250) return "niebieskie";
        if (x < 290) return "fioletowe";
        return "rozowe";
    }

    function px(v) { return /999/.test(v) ? 999 : parseFloat(v) || 0; }

    // pola do filtrowania: kolor, kształt, typografia
    function describe(st) {
        if (!st.cat) st.cat = category(st.light["--accent"]);
        if (!st.shape) {
            var r = px(st.shared["--radius"]), b = px(st.shared["--radius-btn"] || st.shared["--radius"]);
            st.shape = b >= 999 ? "pill" : r <= 6 ? "sharp" : r <= 14 ? "soft" : "round";
        }
        if (!st.kind) {
            var d = String(st.shared["--font-display"] || ""), first = (d.match(/"([^"]+)"/) || [])[1] || "";
            st.kind = /monospace\s*$/.test(d) ? "Monospace"
                : /(^|,)\s*(Georgia,\s*)?serif\s*$/.test(d) ? "Szeryfowy"
                : EXPRESSIVE.indexOf(first) >= 0 ? "Ekspresyjny" : "Bezszeryfowy";
        }
        if (!st.fontLabel) st.fontLabel = (String(st.shared["--font-display"] || "").match(/"([^"]+)"/) || [, "Systemowy"])[1];
        return st;
    }

    // ---------- użycie ----------
    function apply(el, st, mode) {
        var t = st[mode];
        Object.keys(st.shared).forEach(function (k) { el.style.setProperty(k, st.shared[k]); });
        Object.keys(t).forEach(function (k) { el.style.setProperty(k, t[k]); });
        el.style.colorScheme = mode;
    }

    function block(t, pad) {
        return Object.keys(t).map(function (k) { return pad + k + ": " + t[k] + ";"; }).join("\n");
    }
    function toCSS(st) {
        var f = families(st);
        return "/* " + st.name + " — katalog stylów rafal13381.github.io */\n" +
            (f.length ? "/* Fonty: <link rel=\"stylesheet\" href=\"" + fontUrl(f) + "\"> */\n" : "") +
            ":root {\n" + block(st.shared, "  ") + "\n" + block(st.light, "  ") + "\n  color-scheme: light;\n}\n\n" +
            "/* tryb ciemny: systemowy lub wymuszony atrybutem */\n" +
            "@media (prefers-color-scheme: dark) {\n  :root:not([data-theme=\"light\"]) {\n" + block(st.dark, "    ") + "\n    color-scheme: dark;\n  }\n}\n" +
            ":root[data-theme=\"dark\"] {\n" + block(st.dark, "  ") + "\n  color-scheme: dark;\n}\n";
    }

    // opis stylu w Markdown — do przekazania asystentowi AI razem z kodem
    var MATERIAL_RULES = {
        flat: "Płaskie, jednolite powierzchnie z delikatną ramką i miękkim cieniem. Bez rozmycia i gradientów na kartach.",
        glass: "Półprzezroczyste panele z rozmyciem tła (`backdrop-filter: blur(var(--blur)) saturate(160%)`) i jasną krawędzią u góry (`inset 0 1px 0 var(--edge)`). Pod szkłem zawsze bogate tło `--bg-art`.",
        outline: "Brak cieni — strukturę budują wyłącznie ramki `var(--border-w) solid var(--border)`. Powierzchnie mają kolor tła.",
        soft: "Neumorfizm: karty w kolorze tła, wytłoczone podwójnym cieniem (`--shadow-card`), pola wklęsłe (`--shadow-inset`). Bez widocznych ramek.",
        brutal: "Grube ramki w kolorze tekstu i twarde, przesunięte cienie bez rozmycia (`--shadow-card`, `--shadow-btn`). Zero gradientów.",
        paper: "Spokojne powierzchnie jak papier: cienka ramka, długi, bardzo miękki cień, dużo światła między blokami.",
        neon: "Powierzchnie z poświatą w kolorze akcentu (`--shadow-card`), półprzezroczyste ramki akcentu, przyciski świecą (`--shadow-btn`)."
    };
    function row(cells) { return "| " + cells.join(" | ") + " |"; }
    function toMarkdown(st) {
        var cat = CATEGORIES.filter(function (c) { return c.id === st.cat; })[0] || { label: "" };
        var f = families(st), sh = st.shared;
        var roles = [["--bg", "Tło", "Tło strony"], ["--surface", "Powierzchnia", "Karty, panele, modale"],
            ["--surface-2", "Powierzchnia 2", "Pola tekstowe, przyciski tonalne, tory"], ["--text", "Tekst", "Nagłówki i tekst główny"],
            ["--muted", "Tekst drugorzędny", "Opisy, etykiety, placeholdery"], ["--accent", "Akcent", "Główna akcja, aktywne stany"],
            ["--accent-hover", "Akcent (hover)", "Najechanie na przycisk główny"], ["--on-accent", "Tekst na akcencie", "Etykieta przycisku głównego"],
            ["--accent-2", "Akcent 2", "Wyróżnienia, druga seria danych"], ["--link", "Link", "Linki w tekście"],
            ["--border", "Obramowanie", "Ramki kart i pól, separatory"], ["--success", "Sukces", "Potwierdzenia"],
            ["--warning", "Ostrzeżenie", "Stany oczekujące"], ["--danger", "Błąd", "Błędy, akcje destrukcyjne"]];
        function palette(m) {
            return ["| Rola | Token | Wartość | Zastosowanie |", "|---|---|---|---|"].concat(roles.map(function (r) {
                return row([r[1], "`" + r[0] + "`", "`" + st[m][r[0]] + "`", r[2]]);
            })).join("\n");
        }
        function ratio(m, a, b) {
            var t = st[m], bg = b === "--surface" ? flat(t[b], t["--bg"]) : t[b], r = contrast(t[a], bg);
            return r.toFixed(2) + ":1 " + (r >= 7 ? "AAA" : r >= 4.5 ? "AA" : r >= 3 ? "AA (duży tekst)" : "poniżej AA");
        }
        var pairs = [["Tekst na tle", "--text", "--bg"], ["Tekst na powierzchni", "--text", "--surface"],
            ["Tekst drugorzędny na tle", "--muted", "--bg"], ["Etykieta na akcencie", "--on-accent", "--accent"], ["Link na tle", "--link", "--bg"]];
        return [
            "# " + st.name + " — styl interfejsu",
            "",
            "> " + (st.tagline || "Styl interfejsu z trybem jasnym i ciemnym."),
            "",
            "Ten plik opisuje kompletny system wizualny. Przekaż go asystentowi AI (lub programiście) razem z plikiem `.css`: " +
            "przy budowie interfejsu używaj wyłącznie podanych tokenów — nie wpisuj kolorów, promieni ani cieni na sztywno.",
            "",
            "## Charakter",
            "",
            "- **Kategoria kolorystyczna:** " + cat.label,
            "- **Materiał:** " + MATERIALS[st.material] + " — " + (MATERIAL_RULES[st.material] || ""),
            "- **Kształt:** " + SHAPES[st.shape].label + " — karty `" + sh["--radius"] + "`, pola `" + sh["--radius-sm"] + "`, przyciski `" + sh["--radius-btn"] + "`",
            "- **Tło dekoracyjne:** " + (ARTS[st.art] || "według stylu") + " (`--bg-art`)",
            st.use ? "- **Kiedy używać:** " + st.use : null,
            "",
            "## Typografia",
            "",
            "| Rola | Krój | Uwagi |",
            "|---|---|---|",
            row(["Nagłówki", "`" + sh["--font-display"] + "`", "waga " + sh["--heading-weight"] + ", tracking " + sh["--heading-tracking"] +
                (sh["--heading-transform"] === "uppercase" ? ", wersaliki" : "")]),
            row(["Tekst", "`" + sh["--font-body"] + "`", "15–17 px, interlinia 1.5"]),
            row(["Dane / kod", "`" + sh["--font-mono"] + "`", "liczby tabelaryczne, identyfikatory"]),
            "",
            f.length ? "```html\n<link rel=\"stylesheet\" href=\"" + fontUrl(f) + "\">\n```" : "Font systemowy — nie wymaga ładowania.",
            "",
            "## Paleta — tryb jasny",
            "",
            palette("light"),
            "",
            "## Paleta — tryb ciemny",
            "",
            palette("dark"),
            "",
            "## Kontrast (WCAG 2.2)",
            "",
            "| Para | Jasny | Ciemny |",
            "|---|---|---|"
        ].concat(pairs.map(function (p) { return row([p[0], ratio("light", p[1], p[2]), ratio("dark", p[1], p[2])]); })).concat([
            "",
            "## Zasady budowy komponentów",
            "",
            "- **Strona:** `background: var(--bg-art); background-color: var(--bg); color: var(--text); font-family: var(--font-body);`",
            "- **Karta / panel:** tło `--surface`, ramka `var(--border-w) solid var(--border)`, promień `--radius`, cień `--shadow-card`" +
                (st.material === "glass" || st.material === "neon" ? ", rozmycie `backdrop-filter: blur(var(--blur))`" : "") + ".",
            "- **Przycisk główny:** tło `--accent`, tekst `--on-accent`, promień `--radius-btn`, cień `--shadow-btn`; hover `--accent-hover`; wciśnięcie `transform: scale(.97)`.",
            "- **Przycisk drugorzędny:** tło `--surface-2`, tekst `--text`, ramka `--border`.",
            "- **Pole tekstowe:** tło `--surface-2`, promień `--radius-sm`, cień `--shadow-inset`; fokus: pierścień 3 px z `--accent` w 30% krycia.",
            "- **Nagłówki:** `--font-display`, waga `--heading-weight`, tracking `--heading-tracking`, `text-transform: var(--heading-transform)`.",
            "- **Linki:** kolor `--link` (nie `--accent` — link ma zagwarantowany kontrast na tle).",
            "- **Statusy:** `--success`, `--warning`, `--danger` jako kolor tekstu lub ikony; tło komunikatu to ten sam kolor w 10–14% krycia.",
            "- **Tryb ciemny:** działa automatycznie (`prefers-color-scheme`) albo przez `data-theme=\"dark\"` na `<html>`; `data-theme=\"light\"` wymusza jasny.",
            "- **Ruch:** animuj tylko `transform` i `opacity`; przy `prefers-reduced-motion: reduce` zastąp ruch krótkim przenikaniem.",
            "",
            "## Zmienne CSS",
            "",
            "```css",
            toCSS(st).trim(),
            "```",
            ""
        ]).filter(function (l) { return l !== null; }).join("\n");
    }

    // wszystkie style: z plików .md + rozszerzona kolekcja
    function all() {
        if (g.__ALL_STYLES) return g.__ALL_STYLES;
        var base = (g.STYLES || []).map(normalize);
        var extra = (g.SEEDS || []).map(expand);
        var order = CATEGORIES.map(function (c) { return c.id; });
        var list = base.concat(extra).sort(function (a, b) {
            return order.indexOf(a.cat) - order.indexOf(b.cat) || a.name.localeCompare(b.name, "pl");
        });
        g.__ALL_STYLES = list;
        return list;
    }

    // tryb motywu strony (atrybut z przełącznika albo ustawienie systemu)
    function siteMode() {
        var a = document.documentElement.getAttribute("data-theme");
        if (a === "light" || a === "dark") return a;
        return g.matchMedia && g.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function onSiteMode(fn) {
        new MutationObserver(fn).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        if (g.matchMedia) {
            var mq = g.matchMedia("(prefers-color-scheme: dark)");
            if (mq.addEventListener) mq.addEventListener("change", fn);
        }
    }

    g.Tokens = {
        parse: parse, hex: hex, mix: mix, alpha: alpha, flat: flat, contrast: contrast, ensure: ensure,
        toHsl: toHsl, fromHsl: fromHsl, category: category,
        CATEGORIES: CATEGORIES, MATERIALS: MATERIALS, SHAPES: SHAPES, ARTS: ARTS, KINDS: KINDS, FONTS: FONTS,
        expand: expand, normalize: normalize, apply: apply, toCSS: toCSS, toMarkdown: toMarkdown, families: families,
        loadFonts: loadFonts, all: all, siteMode: siteMode, onSiteMode: onSiteMode
    };
})(window);
