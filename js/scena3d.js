// Obiekt 3D (three.js) w banerze próbki i eksport sceny jako samodzielny moduł .js.
// three.min.js ładuje się dopiero wtedy, gdy styl naprawdę ma obiekt 3D.
(function (g) {
    var T = g.Tokens;
    var me = document.currentScript && document.currentScript.src;
    var THREE_SRC = me ? me.replace(/js\/scena3d\.js.*$/, "js/vendor/three.min.js") : "js/vendor/three.min.js";
    var waiting = null;

    function loadThree(cb) {
        if (g.THREE) return cb();
        if (waiting) return waiting.push(cb);
        waiting = [cb];
        var s = document.createElement("script");
        s.src = THREE_SRC;
        s.onload = function () { waiting.forEach(function (f) { f(); }); waiting = null; };
        s.onerror = function () { waiting = null; };
        document.head.appendChild(s);
    }

    // Wspólny kod sceny: używany na stronie i wklejany do eksportu (build.toString()),
    // dlatego nie może korzystać z niczego spoza argumentów.
    function build(THREE, canvas) {
        var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
        camera.position.set(0, 0, 7.5);
        var hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
        var key = new THREE.DirectionalLight(0xffffff, 2.4);
        key.position.set(3, 4, 5);
        var rim = new THREE.PointLight(0xffffff, 40, 20);
        rim.position.set(-3, -2, 2.5);
        scene.add(hemi, key, rim);
        var group = new THREE.Group();
        scene.add(group);
        var raf = 0, running = false, still = false, t0 = performance.now();

        // [chropowatość, metaliczność, połysk lakieru] dla materiału stylu
        var LOOK = {
            flat: [0.45, 0.1, 0.6], glass: [0.12, 0.1, 1], outline: [0.6, 0, 0], soft: [0.75, 0, 0], brutal: [0.5, 0, 0],
            paper: [0.85, 0, 0], neon: [0.25, 0.2, 1], clay: [0.95, 0, 0], extrude: [0.45, 0.15, 0.5], bevel: [0.22, 0.75, 1]
        };

        function clear() {
            while (group.children.length) {
                var m = group.children.pop();
                m.traverse(function (o) {
                    if (o.geometry) o.geometry.dispose();
                    if (o.material) o.material.dispose();
                });
            }
        }

        function set(o) {
            clear();
            still = !!o.still;
            var look = LOOK[o.material] || LOOK.flat;
            hemi.groundColor.set(o.a2);
            hemi.intensity = o.dark ? 0.8 : 1.3;
            rim.color.set(o.a2);
            function mat(c) {
                return new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color(c), roughness: look[0], metalness: look[1],
                    clearcoat: look[2], clearcoatRoughness: 0.2, flatShading: o.kind === "crystal",
                    emissive: o.material === "neon" ? new THREE.Color(c) : new THREE.Color(0x000000), emissiveIntensity: 0.35
                });
            }
            function mesh(geo, c, orbit) {
                var m = new THREE.Mesh(geo, mat(c));
                if (orbit) m.userData.orbit = orbit;
                group.add(m);
                return m;
            }
            var mid = new THREE.Color(o.a1).lerp(new THREE.Color(o.a2), 0.5);
            switch (o.kind) {
                case "knot":
                    mesh(new THREE.TorusKnotGeometry(1, 0.34, 220, 32), o.a1);
                    break;
                case "crystal":
                    mesh(new THREE.OctahedronGeometry(1.45, 0), o.a1).scale.set(1, 1.35, 1);
                    mesh(new THREE.OctahedronGeometry(0.32, 0), o.a2, [2.1, 0.9, 0]);
                    mesh(new THREE.OctahedronGeometry(0.22, 0), mid, [2.4, -0.6, 2.4]);
                    break;
                case "rings":
                    [[1.5, o.a1, 0], [1.15, o.a2, Math.PI / 2], [0.8, mid, Math.PI / 4]].forEach(function (r) {
                        mesh(new THREE.TorusGeometry(r[0], 0.1, 24, 120), r[1]).rotation.set(r[2], r[2] / 2, 0);
                    });
                    mesh(new THREE.SphereGeometry(0.34, 32, 32), o.a2);
                    break;
                case "cubes":
                    [[0, 0, 0, o.a1], [1, 0, 0, o.a2], [0, 1, 0, mid], [0, 0, 1, o.a2], [-1, 0, 0, mid], [0, -1, 0, o.a1], [1, 1, 1, o.a1]].forEach(function (b) {
                        mesh(new THREE.BoxGeometry(0.86, 0.86, 0.86), b[3]).position.set(b[0] * 0.95, b[1] * 0.95, b[2] * 0.95);
                    });
                    group.scale.setScalar(0.9);
                    break;
                default: // orb
                    mesh(new THREE.SphereGeometry(1.3, 64, 64), o.a1);
                    mesh(new THREE.SphereGeometry(0.34, 32, 32), o.a2, [2, 0.8, 0]);
                    mesh(new THREE.SphereGeometry(0.2, 32, 32), mid, [2.3, -0.5, 2]);
            }
            if (o.kind !== "cubes") group.scale.setScalar(1);
            render(performance.now());
        }

        function resize() {
            var w = canvas.clientWidth, h = canvas.clientHeight;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.position.z = w / h < 0.9 ? 9.5 : 7.5;
            camera.updateProjectionMatrix();
            render(performance.now());
        }

        function render(now) {
            var t = still ? 0.6 : (now - t0) / 1000;
            group.rotation.y = t * 0.45;
            group.rotation.x = Math.sin(t * 0.5) * 0.3;
            group.children.forEach(function (m) {
                var o = m.userData.orbit;
                if (!o) return;
                var a = t * o[1] + o[2];
                m.position.set(Math.cos(a) * o[0], Math.sin(a * 1.3) * 0.5, Math.sin(a) * o[0]);
            });
            renderer.render(scene, camera);
        }
        function frame(now) {
            render(now);
            if (running) raf = requestAnimationFrame(frame);
        }

        return {
            set: set, resize: resize,
            start: function () {
                if (running || still) return;
                running = true;
                raf = requestAnimationFrame(frame);
            },
            stop: function () { running = false; cancelAnimationFrame(raf); },
            dispose: function () { running = false; cancelAnimationFrame(raf); clear(); renderer.dispose(); }
        };
    }

    function reduced() { return g.matchMedia && g.matchMedia("(prefers-reduced-motion: reduce)").matches; }
    function opts(st, mode) {
        var t = st[mode];
        return { kind: st.scene, material: st.material, a1: t["--accent"], a2: t["--accent-2"], dark: mode === "dark", still: reduced() };
    }

    // obiekt w banerze próbki (.pk-w-hero); bez obiektu baner wraca do zwykłego wyglądu
    function attach(probka, st, mode) {
        var hero = probka.querySelector(".pk-w-hero");
        if (!hero) return;
        var box = hero.querySelector(".pk-scene");
        var on = !!st.scene && st.scene !== "none";
        hero.classList.toggle("has-scene", on);
        if (!on) {
            if (box && box.__s) box.__s.stop();
            if (box) box.hidden = true;
            return;
        }
        if (!box) {
            box = document.createElement("div");
            box.className = "pk-scene";
            box.setAttribute("aria-hidden", "true");
            box.appendChild(document.createElement("canvas"));
            hero.prepend(box);
        }
        box.hidden = false;
        loadThree(function () {
            if (!hero.classList.contains("has-scene")) return;
            var s = box.__s;
            if (!s) {
                try { s = box.__s = build(g.THREE, box.firstChild); } catch (e) { box.hidden = true; return; }
                if ("ResizeObserver" in g) new ResizeObserver(s.resize).observe(box);
                // animacja tylko wtedy, gdy baner jest widoczny
                if ("IntersectionObserver" in g) {
                    new IntersectionObserver(function (en) {
                        box.__visible = en[0].isIntersecting;
                        if (box.__visible && !box.hidden) s.start(); else s.stop();
                    }).observe(box);
                } else box.__visible = true;
            }
            s.set(opts(st, mode));
            s.resize();
            if (box.__visible) s.start();
        });
    }

    function dedent(src) {
        var lines = src.split("\n"), pad = (lines[lines.length - 1].match(/^ */) || [""])[0].length;
        return lines.map(function (l, i) { return i ? l.slice(pad) : l; }).join("\n");
    }
    // samodzielny moduł: <canvas id="scena-3d"> + <script type="module" src="scena-3d.js">
    function code(st) {
        var c = function (m) { return JSON.stringify({ a1: st[m]["--accent"], a2: st[m]["--accent-2"] }); };
        return [
            "// Scena 3D stylu „" + st.name + "” (" + (T.SCENES[st.scene] || st.scene) + ") — katalog stylów rafal13381.github.io",
            "// Użycie:",
            "//   <canvas id=\"scena-3d\" style=\"width:100%;height:320px\"></canvas>",
            "//   <script type=\"module\" src=\"scena-3d.js\"></script>",
            "import * as THREE from \"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js\";",
            "",
            "var COLORS = { light: " + c("light") + ", dark: " + c("dark") + " };",
            "var canvas = document.getElementById(\"scena-3d\");",
            "var dark = matchMedia(\"(prefers-color-scheme: dark)\");",
            "var still = matchMedia(\"(prefers-reduced-motion: reduce)\").matches;",
            "var s = build(THREE, canvas);",
            "",
            "function apply() {",
            "  var m = document.documentElement.dataset.theme || (dark.matches ? \"dark\" : \"light\");",
            "  var c = COLORS[m] || COLORS.light;",
            "  s.set({ kind: " + JSON.stringify(st.scene) + ", material: " + JSON.stringify(st.material) + ", a1: c.a1, a2: c.a2, dark: m === \"dark\", still: still });",
            "  s.resize();",
            "  s.start();",
            "}",
            "apply();",
            "dark.addEventListener(\"change\", apply);",
            "new ResizeObserver(s.resize).observe(canvas);",
            "",
            dedent(build.toString()),
            ""
        ].join("\n");
    }

    // ---------- tło 3D wizytówek ----------
    // Jedna scena za całą stroną: kamera płynie przez nią razem z przewijaniem, obiekt
    // przechodzi z boku na bok obok kolejnych treści, a kursor daje paralaksę.
    // Tak jak build() — samowystarczalna, bo trafia do eksportowanego pliku .html.
    function buildBg(THREE, canvas) {
        var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(40, 1, 0.1, 60);
        var hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
        var key = new THREE.DirectionalLight(0xffffff, 2.6);
        key.position.set(4, 5, 6);
        var rim = new THREE.PointLight(0xffffff, 60, 30);
        rim.position.set(-4, -2, 3);
        scene.add(hemi, key, rim);
        var group = new THREE.Group(), far = new THREE.Group();
        scene.add(group, far);
        var o = {}, tick = null, raf = 0, running = false, t0 = performance.now(), wide = true;
        var ptr = { x: 0, y: 0, tx: 0, ty: 0 }, scroll = 0, scrollT = 0;

        function clear() {
            tick = null;
            scene.fog = null;
            [group, far].forEach(function (gr) {
                while (gr.children.length) {
                    gr.children.pop().traverse(function (m) {
                        if (m.geometry) m.geometry.dispose();
                        if (m.material) { if (m.material.map) m.material.map.dispose(); m.material.dispose(); }
                    });
                }
            });
            group.position.set(0, 0, 0);
            group.rotation.set(0, 0, 0);
            pivot = null;
            scene.environment = null;
        }
        function rnd(i) { var x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
        function gradient(n, f) {
            var c1 = new THREE.Color(o.a1), c2 = new THREE.Color(o.a2), out = new Float32Array(n * 3), c = new THREE.Color();
            for (var i = 0; i < n; i++) { c.copy(c1).lerp(c2, f(i)); out[i * 3] = c.r; out[i * 3 + 1] = c.g; out[i * 3 + 2] = c.b; }
            return out;
        }
        function points(pos, col, size, into) {
            var geo = new THREE.BufferGeometry();
            geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
            geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
            var p = new THREE.Points(geo, new THREE.PointsMaterial({
                size: size, vertexColors: true, transparent: true, opacity: o.dark ? 0.95 : 0.85, depthWrite: false,
                blending: o.dark ? THREE.AdditiveBlending : THREE.NormalBlending
            }));
            (into || group).add(p);
            return p;
        }
        // daleki pył: osobna warstwa, która przy przewijaniu przesuwa się szybciej niż obiekt (głębia)
        function dust() {
            var n = 1400, pos = new Float32Array(n * 3);
            for (var i = 0; i < n; i++) {
                pos[i * 3] = (rnd(i + 101) - 0.5) * 26;
                pos[i * 3 + 1] = (rnd(i + 202) - 0.5) * 30;
                pos[i * 3 + 2] = -rnd(i + 303) * 18 + 3;
            }
            points(pos, gradient(n, function (i) { return rnd(i + 404); }), 0.035, far).material.opacity = o.dark ? 0.7 : 0.45;
        }

        // ---------- przedmioty branż ----------
        // Modelowane z brył three.js (bez plików modeli), każdy z własną animacją.
        // Rozmiar ustala item(): model jest skalowany do wspólnej „kostki”, więc jednostki są umowne.
        var pivot = null, envTex = null, lastNow = 0;
        var spin = { y: 0, vy: 0, x: 0, rx: 0, vx: 0, s: 1, vs: 0, held: false, hist: [] };

        // „studio fotograficzne” jako mapa otoczenia — bez niej metal wygląda na czarny
        function studio() {
            if (envTex) return envTex;
            var pm = new THREE.PMREMGenerator(renderer), env = new THREE.Scene();
            env.add(new THREE.Mesh(new THREE.BoxGeometry(20, 12, 20), new THREE.MeshBasicMaterial({ color: 0x24262c, side: THREE.BackSide })));
            [[0, 5.9, 0, 12, 0.2, 6, 0xffffff, 3], [-9.9, 1, 0, 0.2, 5, 10, 0xffffff, 1.6], [9.9, 2, -3, 0.2, 4, 6, 0xc8dcff, 1.3], [0, -1, -9.9, 14, 3, 0.2, 0xffe8d0, 0.9], [0, 0, 9.9, 6, 6, 0.2, 0xffffff, 0.5]].forEach(function (p) {
                var m = new THREE.Mesh(new THREE.BoxGeometry(p[3], p[4], p[5]), new THREE.MeshBasicMaterial({ color: new THREE.Color(p[6]).multiplyScalar(p[7]) }));
                m.position.set(p[0], p[1], p[2]);
                env.add(m);
            });
            envTex = pm.fromScene(env, 0.035).texture;
            pm.dispose();
            env.traverse(function (m) { if (m.geometry) m.geometry.dispose(); if (m.material) m.material.dispose(); });
            return envTex;
        }
        function canvasTex(w, h, draw) {
            var c = document.createElement("canvas");
            c.width = w; c.height = h;
            var tex = new THREE.CanvasTexture(c);
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.anisotropy = 4;
            tex.redraw = function () { draw(c.getContext("2d"), w, h); tex.needsUpdate = true; };
            tex.redraw();
            return tex;
        }
        function mat(c, p) {
            var m = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(c), roughness: 0.35, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.25 });
            if (p) m.setValues(p);
            return m;
        }
        var MAT = {
            a1: function (p) { return mat(o.a1, Object.assign({ clearcoat: 1, roughness: 0.28 }, p)); },
            a2: function (p) { return mat(o.a2, Object.assign({ clearcoat: 1, roughness: 0.3 }, p)); },
            chrome: function () { return mat("#e9ecf1", { metalness: 1, roughness: 0.16, clearcoat: 0 }); },
            steel: function () { return mat("#b9bec7", { metalness: 1, roughness: 0.38, clearcoat: 0 }); },
            brass: function () { return mat("#d8ac52", { metalness: 1, roughness: 0.24, clearcoat: 0 }); },
            dark: function () { return mat("#1d1f25", { roughness: 0.5, metalness: 0.2, clearcoat: 0.4 }); },
            ceramic: function () { return mat("#f6f4ef", { roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.08 }); },
            wood: function () { return mat("#a86f3c", { roughness: 0.62, clearcoat: 0.35 }); },
            fabric: function (c) { return mat(c || "#f2f0ea", { roughness: 0.9, clearcoat: 0, sheen: 1, sheenRoughness: 0.6, sheenColor: new THREE.Color(0xffffff) }); },
            glow: function (c, k) { return mat(c, { emissive: new THREE.Color(c), emissiveIntensity: k || 0.6, clearcoat: 1, roughness: 0.2 }); }
        };
        function V2(a) { return a.map(function (p) { return new THREE.Vector2(p[0], p[1]); }); }
        function poly(pts) { return new THREE.Shape(V2(pts)); }
        function rrect(w, h, r) {
            var s = new THREE.Shape(), x = -w / 2, y = -h / 2;
            r = Math.min(r, w / 2, h / 2);
            s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
            s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
            s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
            return s;
        }
        // bryła z kształtu 2D z fazowaną krawędzią; center=false zostawia punkt (0,0) kształtu jako oś
        function ext(shape, depth, bevel, center) {
            var g = new THREE.ExtrudeGeometry(shape, { depth: depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 6, curveSegments: 32 });
            if (center === false) g.translate(0, 0, -depth / 2); else g.center();
            return g;
        }
        function rbox(w, h, d, r) {
            var b = Math.min(r, d / 2 - 0.002, w / 2 - 0.002, h / 2 - 0.002);
            return ext(rrect(w - 2 * b, h - 2 * b, Math.max(r - b, 0.005)), Math.max(d - 2 * b, 0.002), b);
        }
        function lathe(pts, seg) { return new THREE.LatheGeometry(V2(pts), seg || 96); }
        function add(par, geo, m, p, r, s) {
            var me = new THREE.Mesh(geo, m);
            if (p) me.position.set(p[0], p[1], p[2]);
            if (r) me.rotation.set(r[0], r[1], r[2]);
            if (s != null) { if (typeof s === "number") me.scale.setScalar(s); else me.scale.set(s[0], s[1], s[2]); }
            par.add(me);
            return me;
        }
        function node(par, p, r) {
            var gr = new THREE.Group();
            if (p) gr.position.set(p[0], p[1], p[2]);
            if (r) gr.rotation.set(r[0], r[1], r[2]);
            par.add(gr);
            return gr;
        }
        // pręt między dwoma punktami (łańcuszki, szprychy)
        function rod(par, a, b, r, m) {
            var A = new THREE.Vector3(a[0], a[1], a[2]), B = new THREE.Vector3(b[0], b[1], b[2]);
            var me = add(par, new THREE.CylinderGeometry(r, r, A.distanceTo(B), 10), m);
            me.position.copy(A).add(B).multiplyScalar(0.5);
            me.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.sub(A).normalize());
            return me;
        }
        function ease(x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
        function pulse(t, period, width) { var p = (t % period) / period; return p < width ? Math.sin(p / width * Math.PI) : 0; }
        function inkOn(c) { var hsl = {}; new THREE.Color(c).getHSL(hsl); return hsl.l > 0.62 ? "#15161a" : "#ffffff"; }

        var ITEMS = {
            // filiżanka na spodku, z kawą, pianką i parą unoszącą się nad naczyniem
            cup: function (M) {
                var body = MAT.a1({ side: THREE.DoubleSide });
                add(M, lathe([[0, -0.9], [0.5, -0.9], [0.6, -0.86], [0.66, -0.76], [0.8, 0.55], [0.83, 0.68], [0.79, 0.72], [0.73, 0.63], [0.6, -0.7], [0, -0.74]]), body);
                add(M, new THREE.CylinderGeometry(0.69, 0.69, 0.02, 72), mat("#4a2a17", { roughness: 0.25, clearcoat: 1 }), [0, 0.44, 0]);
                add(M, new THREE.TorusGeometry(0.42, 0.06, 16, 72), mat("#d9b48a", { roughness: 0.6 }), [0, 0.455, 0], [Math.PI / 2, 0, 0], [1, 1, 0.25]);
                add(M, new THREE.SphereGeometry(0.16, 24, 16), mat("#e6c9a3", { roughness: 0.6 }), [0, 0.45, 0], null, [1, 0.12, 1]);
                add(M, new THREE.TorusGeometry(0.3, 0.075, 20, 64, Math.PI * 1.25), body, [0.9, 0.05, 0], [0, 0, -Math.PI * 0.625]);
                add(M, lathe([[0, -1.0], [1.15, -1.0], [1.32, -0.92], [1.4, -0.86], [1.36, -0.84], [1.18, -0.9], [0.72, -0.94], [0, -0.94]]), MAT.ceramic());
                var steamMat = [], steam = [];
                for (var i = 0; i < 3; i++) {
                    var pts = [];
                    for (var k = 0; k <= 8; k++) pts.push(new THREE.Vector3(Math.sin(k * 0.9 + i * 2) * 0.12, 0.7 + k * 0.2, Math.cos(k * 0.7 + i) * 0.06));
                    var sm = new THREE.MeshBasicMaterial({ color: new THREE.Color(o.dark ? "#ffffff" : o.a2), transparent: true, opacity: 0, depthWrite: false });
                    steamMat.push(sm);
                    steam.push(add(M, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 64, 0.035, 8), sm, [(i - 1) * 0.28, 0, 0]));
                }
                return function (t) {
                    steam.forEach(function (s, i) {
                        var p = (t * 0.32 + i / 3) % 1;
                        s.position.y = p * 0.6;
                        s.scale.set(1 + p * 0.6, 1, 1);
                        steamMat[i].opacity = Math.sin(p * Math.PI) * (o.dark ? 0.45 : 0.6);
                    });
                };
            },
            // waga szalkowa z mosiądzu; belka się waży, szalki zawsze wiszą pionowo
            scale: function (M) {
                var brass = MAT.brass();
                add(M, lathe([[0, -1.6], [0.95, -1.6], [0.98, -1.5], [0.9, -1.42], [0.5, -1.32], [0.28, -1.15], [0.2, -1.0], [0, -1.0]]), MAT.a1());
                add(M, new THREE.CylinderGeometry(0.07, 0.1, 2.5, 32), brass, [0, 0.25, 0]);
                add(M, new THREE.SphereGeometry(0.16, 32, 24), brass, [0, 1.62, 0]);
                add(M, new THREE.TorusGeometry(0.14, 0.03, 12, 32), brass, [0, 1.36, 0.0]);
                var beam = node(M, [0, 1.36, 0]);
                add(beam, new THREE.CylinderGeometry(0.045, 0.045, 2.7, 24), brass, null, [0, 0, Math.PI / 2]);
                [-1.35, 1.35].forEach(function (x) { add(beam, new THREE.SphereGeometry(0.075, 20, 16), brass, [x, 0, 0]); });
                var pans = [-1, 1].map(function () {
                    var h = node(M);
                    for (var i = 0; i < 3; i++) {
                        var a = i / 3 * Math.PI * 2 + 0.4;
                        rod(h, [0, 0, 0], [Math.cos(a) * 0.46, -1.05, Math.sin(a) * 0.46], 0.012, brass);
                    }
                    add(h, lathe([[0, -0.14], [0.32, -0.12], [0.5, -0.02], [0.53, 0.0], [0.5, 0.0], [0.32, -0.09], [0, -0.11]]), brass, [0, -1.02, 0]);
                    return h;
                });
                return function (t) {
                    var a = Math.sin(t * 0.9) * 0.13;
                    beam.rotation.z = a;
                    pans[0].position.set(-1.35 * Math.cos(a), 1.36 - 1.35 * Math.sin(a), 0);
                    pans[1].position.set(1.35 * Math.cos(a), 1.36 + 1.35 * Math.sin(a), 0);
                    pans.forEach(function (p) { p.rotation.z = -Math.cos(t * 0.9) * 0.04; });
                };
            },
            // aparat: korpus, górna płyta, wizjer, obiektyw z powłoką, migająca lampa
            camera: function (M) {
                var dark = MAT.dark(), chrome = MAT.chrome(), leather = mat("#2a2b30", { roughness: 0.85, clearcoat: 0 });
                add(M, rbox(2.6, 1.25, 0.95, 0.16), leather, [0, -0.18, 0]);
                add(M, rbox(2.62, 0.42, 0.97, 0.14), chrome, [0, 0.62, 0]);
                add(M, rbox(0.9, 0.5, 0.8, 0.12), chrome, [0, 0.95, -0.05]);
                add(M, rbox(0.5, 1.5, 0.4, 0.16), dark, [-1.08, -0.05, 0.42]);
                add(M, new THREE.CylinderGeometry(0.66, 0.68, 0.45, 72), dark, [0, -0.1, 0.65], [Math.PI / 2, 0, 0]);
                var ring = add(M, new THREE.CylinderGeometry(0.69, 0.69, 0.2, 72), mat("#121317", { roughness: 0.7 }), [0, -0.1, 0.85], [Math.PI / 2, 0, 0]);
                add(M, new THREE.TorusGeometry(0.68, 0.03, 12, 96), MAT.a1(), [0, -0.1, 0.97]);
                add(M, new THREE.CylinderGeometry(0.58, 0.64, 0.3, 72), dark, [0, -0.1, 1.08], [Math.PI / 2, 0, 0]);
                add(M, new THREE.SphereGeometry(0.5, 64, 32, 0, Math.PI * 2, 0, Math.PI / 3.2), mat("#0c1430", { metalness: 0.5, roughness: 0.02, clearcoat: 1, iridescence: 1, iridescenceIOR: 1.7 }), [0, -0.1, 1.0], [Math.PI / 2, 0, 0]);
                var btn = add(M, new THREE.CylinderGeometry(0.13, 0.13, 0.12, 32), MAT.a1(), [0.85, 0.89, 0.05]);
                add(M, new THREE.CylinderGeometry(0.22, 0.22, 0.12, 40), chrome, [-0.75, 0.89, 0]);
                var flash = add(M, rbox(0.42, 0.22, 0.05, 0.03), MAT.glow("#ffffff", 0.1), [0.8, 0.62, 0.5]);
                var light = new THREE.PointLight(0xffffff, 0, 8);
                light.position.set(0.8, 0.62, 1.2);
                M.add(light);
                return function (t) {
                    var f = pulse(t, 3.6, 0.05);
                    flash.material.emissiveIntensity = 0.1 + f * 4;
                    light.intensity = f * 40;
                    btn.position.y = 0.89 - pulse(t + 0.08, 3.6, 0.08) * 0.05;
                    ring.rotation.y = Math.sin(t * 0.6) * 0.6;
                };
            },
            // błyskawica z energią: pulsujące świecenie i orbitujące pierścienie
            bolt: function (M) {
                var b = add(M, ext(poly([[-0.3, 1.6], [0.8, 1.6], [0.22, 0.28], [0.9, 0.28], [-0.6, -1.75], [-0.12, -0.2], [-0.78, -0.2]]), 0.32, 0.09), MAT.a1({ emissive: new THREE.Color(o.a1), emissiveIntensity: 0.25 }));
                var rings = [0, 1].map(function (i) { return add(M, new THREE.TorusGeometry(1.55 + i * 0.25, 0.018, 12, 128), MAT.glow(o.a2, 0.8), null, [1.2 + i * 0.5, 0.3, 0]); });
                var sparks = [];
                for (var i = 0; i < 6; i++) sparks.push(add(M, new THREE.SphereGeometry(0.05, 12, 8), MAT.glow(o.a2, 1.5)));
                return function (t) {
                    b.material.emissiveIntensity = 0.2 + Math.pow(Math.max(0, Math.sin(t * 2.4)), 12) * 0.9;
                    rings[0].rotation.z = t * 0.5;
                    rings[1].rotation.z = -t * 0.35;
                    sparks.forEach(function (s, i) {
                        var a = t * (0.8 + i * 0.1) + i;
                        var r = i % 2 ? 1.8 : 1.55;
                        s.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.45, Math.sin(a) * r * 0.85);
                    });
                };
            },
            // ząb trzonowy: korona z guzkami, dwa korzenie i błyski czystości
            tooth: function (M) {
                var enamel = mat("#f8f6f1", { roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.05, sheen: 0.6, sheenColor: new THREE.Color(0xffffff) });
                var g = new THREE.SphereGeometry(1, 96, 64), p = g.attributes.position;
                for (var i = 0; i < p.count; i++) {
                    var x = p.getX(i), y = p.getY(i), z = p.getZ(i), th = Math.atan2(z, x);
                    if (y > 0) y = y * 0.78 + 0.22 * Math.pow(Math.abs(Math.cos(2 * th)), 3) * y * y - 0.25 * Math.exp(-(x * x + z * z) * 9) * y;
                    else y *= 0.55;
                    p.setXYZ(i, x * 1.12, y, z);
                }
                g.computeVertexNormals();
                add(M, g, enamel, [0, 0.55, 0]);
                [-1, 1].forEach(function (s) {
                    add(M, lathe([[0, -1.55], [0.1, -1.52], [0.26, -1.0], [0.38, -0.25], [0.42, 0.2], [0, 0.2]], 64), enamel, [s * 0.5, 0.15, 0], [0, 0, s * 0.14]);
                });
                var star = [];
                for (var k = 0; k < 8; k++) { var r = k % 2 ? 0.07 : 0.32, a = k / 8 * Math.PI * 2 + Math.PI / 2; star.push([Math.cos(a) * r, Math.sin(a) * r]); }
                var sg = ext(poly(star), 0.03, 0.015);
                var sparks = [[1.25, 1.35, 0.4], [-1.2, 0.9, 0.5], [0.6, -0.4, 0.9]].map(function (q) { return add(M, sg, MAT.glow(o.a2, 1.2), q); });
                return function (t) {
                    sparks.forEach(function (s, i) {
                        var k = Math.pow(Math.max(0, Math.sin(t * 1.6 + i * 2.1)), 3);
                        s.scale.setScalar(0.001 + k);
                        s.rotation.z = t * 0.8 + i;
                    });
                };
            },
            // cyrkiel kreślarski: nóżki się rozchylają, a ołówek rysuje okrąg
            compass: function (M) {
                var chrome = MAT.chrome();
                add(M, new THREE.CylinderGeometry(0.3, 0.3, 0.32, 48), chrome, [0, 1.6, 0], [Math.PI / 2, 0, 0]);
                add(M, new THREE.CylinderGeometry(0.1, 0.12, 0.62, 24), MAT.a1(), [0, 2.05, 0]);
                add(M, new THREE.SphereGeometry(0.12, 24, 16), MAT.a1(), [0, 2.36, 0]);
                add(M, new THREE.CylinderGeometry(0.08, 0.08, 0.38, 24), MAT.dark(), [0, 1.6, 0], [Math.PI / 2, 0, 0]);
                var L = node(M, [0, 1.6, 0]), R = node(M, [0, 1.6, 0]);
                add(L, new THREE.CylinderGeometry(0.075, 0.05, 2.6, 24), chrome, [0, -1.3, 0]);
                add(L, new THREE.ConeGeometry(0.035, 0.32, 16), MAT.steel(), [0, -2.74, 0], [Math.PI, 0, 0]);
                add(R, new THREE.CylinderGeometry(0.075, 0.06, 1.85, 24), chrome, [0, -0.93, 0]);
                add(R, new THREE.CylinderGeometry(0.11, 0.11, 0.2, 24), chrome, [0, -1.9, 0]);
                add(R, new THREE.CylinderGeometry(0.085, 0.085, 0.62, 6), MAT.a2(), [0, -2.2, 0]);
                add(R, new THREE.ConeGeometry(0.085, 0.24, 6), mat("#e7c48d", { roughness: 0.7 }), [0, -2.63, 0], [Math.PI, 0, 0]);
                add(R, new THREE.ConeGeometry(0.03, 0.08, 12), MAT.dark(), [0, -2.78, 0], [Math.PI, 0, 0]);
                var arc = add(M, new THREE.TorusGeometry(1, 0.012, 8, 160), MAT.glow(o.a2, 0.9), [0, 0, 0], [Math.PI / 2, 0, 0]);
                return function (t) {
                    var a = 0.2 + 0.14 * (Math.sin(t * 0.7) * 0.5 + 0.5);
                    L.rotation.z = -a; R.rotation.z = a;
                    var tipY = 1.6 - 2.85 * Math.cos(a), tipX = 2.85 * Math.sin(a);
                    arc.position.set(tipX, tipY, 0);
                    arc.scale.set(2 * tipX, 2 * tipX, 1);
                };
            },
            // laptop z kodem na ekranie i unoszącymi się znakami </>
            code: function (M) {
                var alu = mat("#cfd3da", { metalness: 0.9, roughness: 0.32, clearcoat: 0 });
                add(M, rbox(3, 0.12, 2, 0.06), alu, [0, 0, 0]);
                add(M, rbox(2.62, 0.02, 1.0, 0.01), MAT.dark(), [0, 0.07, -0.25]);
                add(M, rbox(0.95, 0.01, 0.55, 0.03), mat("#bfc4cc", { metalness: 0.8, roughness: 0.4 }), [0, 0.065, 0.62]);
                var lid = node(M, [0, 0.05, -0.98], [-0.26, 0, 0]);
                add(lid, rbox(3, 1.95, 0.08, 0.05), alu, [0, 0.98, 0]);
                var cols = [o.a1, o.a2, "rgba(255,255,255,0.75)", "rgba(255,255,255,0.4)"];
                var screen = canvasTex(512, 320, function (x, w, h) {
                    x.fillStyle = "#0e1016"; x.fillRect(0, 0, w, h);
                    var lines = [[0, 5, 0, 3], [1, 3, 2, 6], [2, 4, 3, 4], [2, 7, 1, 2], [1, 2, 0, 5], [0, 4, 3, 3], [1, 6, 2, 2], [2, 3, 1, 5], [1, 5, 0, 2], [0, 2, 3, 4]];
                    lines.forEach(function (l, i) {
                        x.fillStyle = cols[l[2]]; x.fillRect(28 + l[0] * 28, 24 + i * 28, l[1] * 18, 12);
                        x.fillStyle = cols[l[3] % 4]; x.fillRect(36 + l[0] * 28 + l[1] * 18, 24 + i * 28, l[3] * 14, 12);
                    });
                });
                add(lid, new THREE.PlaneGeometry(2.76, 1.72), new THREE.MeshBasicMaterial({ map: screen }), [0, 0.99, 0.045]);
                var cursor = add(lid, new THREE.PlaneGeometry(0.05, 0.08), new THREE.MeshBasicMaterial({ color: new THREE.Color(o.a2) }), [-0.95, 0.05 + 0.99 - 0.36, 0.05]);
                var glyphs = node(M, [0, 2.65, 0]);
                var chev = [[0.42, 0.66], [-0.48, 0], [0.42, -0.66], [0.42, -0.38], [-0.1, 0], [0.42, 0.38]];
                add(glyphs, ext(poly(chev), 0.2, 0.05), MAT.a1(), [-0.95, 0, 0]);
                add(glyphs, ext(poly(chev.map(function (p) { return [-p[0], p[1]]; }).reverse()), 0.2, 0.05), MAT.a1(), [0.95, 0, 0]);
                add(glyphs, ext(poly([[0.1, 0.72], [0.34, 0.72], [-0.1, -0.72], [-0.34, -0.72]]), 0.2, 0.05), MAT.a2(), [0, 0, 0]);
                return function (t) {
                    glyphs.position.y = 2.65 + Math.sin(t * 1.2) * 0.12;
                    glyphs.rotation.y = Math.sin(t * 0.6) * 0.35;
                    glyphs.children.forEach(function (c, i) { c.position.z = Math.sin(t * 1.5 + i) * 0.12; });
                    cursor.visible = Math.floor(t * 2) % 2 === 0;
                };
            },
            // kwiat w ceramicznym wazonie: dwa pierścienie płatków, liście i kołyszący się kielich
            flower: function (M) {
                add(M, lathe([[0, -1.7], [0.42, -1.7], [0.6, -1.45], [0.7, -0.95], [0.55, -0.35], [0.28, -0.08], [0.3, 0.06], [0.26, 0.08], [0.22, -0.06], [0, -0.1]]), MAT.a2({ roughness: 0.2 }));
                var green = mat("#3f8a45", { roughness: 0.45, clearcoat: 0.5 });
                var curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, -0.3, 0), new THREE.Vector3(0.06, 0.5, 0), new THREE.Vector3(-0.08, 1.2, 0.05), new THREE.Vector3(0, 1.85, 0)]);
                add(M, new THREE.TubeGeometry(curve, 48, 0.045, 10), green);
                var leaf = new THREE.Shape();
                leaf.moveTo(0, 0); leaf.quadraticCurveTo(0.38, 0.32, 0, 0.95); leaf.quadraticCurveTo(-0.38, 0.32, 0, 0);
                var lg = ext(leaf, 0.02, 0.015, false);
                add(M, lg, green, [0.04, 0.55, 0], [0.2, 0.3, -0.9]);
                add(M, lg, green, [-0.06, 0.95, 0.02], [-0.2, -0.4, 0.95]);
                var head = node(M, [0, 1.9, 0], [0.55, 0, 0]);
                var petal = mat(o.a1, { roughness: 0.45, clearcoat: 0.4, sheen: 1, sheenRoughness: 0.4, sheenColor: new THREE.Color(0xffffff), side: THREE.DoubleSide });
                var pg = new THREE.SphereGeometry(0.5, 32, 16);
                var rings = [[11, 0.62, -0.32, 1], [8, 0.42, -0.85, 0.75]].map(function (r) {
                    var ring = node(head);
                    for (var i = 0; i < r[0]; i++) {
                        var hold = node(ring, null, [0, i / r[0] * Math.PI * 2 + r[2], 0]);
                        add(hold, pg, petal, [0, 0.02, r[1]], [r[2], 0, 0], [0.36 * r[3], 0.07, 0.7 * r[3]]);
                    }
                    return ring;
                });
                add(head, new THREE.SphereGeometry(0.24, 32, 24), mat("#f3c14b", { roughness: 0.7 }), [0, 0.08, 0], null, [1, 0.6, 1]);
                return function (t) {
                    head.rotation.z = Math.sin(t * 0.8) * 0.09;
                    rings[0].scale.setScalar(1 + Math.sin(t * 1.1) * 0.03);
                    rings[1].rotation.y = t * 0.15;
                };
            },
            // nożyczki fryzjerskie: dwa ostrza na śrubie, ciach-ciach
            scissors: function (M) {
                var chrome = MAT.chrome(), grip = MAT.a1();
                var blade = new THREE.Shape();
                blade.moveTo(0, 0.13); blade.quadraticCurveTo(1.5, 0.15, 2.4, 0.0); blade.quadraticCurveTo(1.5, -0.04, 0, -0.13); blade.lineTo(0, 0.13);
                var bg = ext(blade, 0.05, 0.016, false);
                var halves = [1, -1].map(function (s) {
                    var h = node(M, [0, 0, s * 0.05]);
                    add(h, bg, chrome, null, [s > 0 ? 0 : Math.PI, 0, 0]);
                    rod(h, [0, 0, 0], [-0.75, -s * 0.42, 0], 0.07, chrome);
                    add(h, new THREE.TorusGeometry(0.36, 0.09, 20, 56), grip, [-1.08, -s * 0.55, 0], null, [1, 0.8, 1]);
                    if (s < 0) add(h, new THREE.CylinderGeometry(0.03, 0.04, 0.45, 12), grip, [-1.3, 0.95, 0], [0, 0, -0.5]);
                    return h;
                });
                add(M, new THREE.CylinderGeometry(0.1, 0.1, 0.2, 24), MAT.brass(), null, [Math.PI / 2, 0, 0]);
                return function (t) {
                    var a = 0.04 + 0.3 * Math.pow(Math.max(0, Math.sin(t * 2.2)), 2);
                    halves[0].rotation.z = a;
                    halves[1].rotation.z = -a;
                };
            },
            // klucz płasko-oczkowy dokręcający nakrętkę na śrubie
            wrench: function (M) {
                var chrome = MAT.chrome();
                M.rotation.set(-0.55, 0.35, 0);
                var turn = node(M, [0, 0, 0]);
                var w = node(turn, [-1.65, 0, 0]);
                var open = new THREE.Shape(), a = 0.62;
                open.absarc(0, 0, 0.56, a, Math.PI * 2 - a, false);
                open.absarc(0, 0, 0.31, Math.PI * 2 - a, a, true);
                add(w, ext(open, 0.12, 0.05), chrome, [1.65, 0, 0]);
                add(w, ext(rrect(2.5, 0.34, 0.17), 0.08, 0.04), chrome, [0, 0, 0]);
                var ring = new THREE.Shape();
                ring.absarc(0, 0, 0.5, 0, Math.PI * 2, false);
                var hex = new THREE.Path();
                for (var i = 0; i <= 12; i++) { var r = i % 2 ? 0.27 : 0.23, q = i / 12 * Math.PI * 2; if (i) hex.lineTo(Math.cos(q) * r, Math.sin(q) * r); else hex.moveTo(Math.cos(q) * r, Math.sin(q) * r); }
                ring.holes.push(hex);
                add(w, ext(ring, 0.12, 0.05), chrome, [-1.6, 0, 0], [0, 0, 0.3]);
                var nut = node(turn);
                add(nut, new THREE.CylinderGeometry(0.29, 0.29, 0.24, 6), MAT.steel(), null, [Math.PI / 2, 0, 0]);
                add(nut, new THREE.CylinderGeometry(0.13, 0.13, 0.25, 24), MAT.dark(), null, [Math.PI / 2, 0, 0]);
                add(M, new THREE.CylinderGeometry(0.12, 0.12, 1.5, 24), MAT.steel(), [0, 0, -0.65], [Math.PI / 2, 0, 0]);
                add(M, new THREE.CylinderGeometry(0.34, 0.34, 0.14, 6), MAT.a1({ metalness: 0.6 }), [0, 0, -1.45], [Math.PI / 2, 0, 0]);
                return function (t) {
                    var p = (t * 0.55) % 1;
                    turn.rotation.z = -(p < 0.7 ? ease(p / 0.7) : 1 - ease((p - 0.7) / 0.3)) * 0.9;
                };
            },
            // talerz z widelcem i nożem skrzyżowanymi nad nim
            utensils: function (M) {
                var plate = node(M, [0, -0.3, -0.4], [1.15, 0, 0]);
                add(plate, lathe([[0, -0.05], [0.95, -0.05], [1.5, 0.12], [1.62, 0.17], [1.58, 0.2], [1.45, 0.16], [0.95, 0.02], [0, 0.02]], 128), MAT.ceramic());
                add(plate, new THREE.TorusGeometry(1.3, 0.02, 8, 128), MAT.a2(), [0, 0.11, 0], [Math.PI / 2, 0, 0]);
                var chrome = MAT.chrome(), handle = MAT.a1();
                var fork = node(M, [-0.45, 0.1, 0.35], [0, 0, 0.42]);
                add(fork, rbox(0.26, 1.35, 0.1, 0.05), handle, [0, -0.8, 0]);
                add(fork, new THREE.CylinderGeometry(0.05, 0.06, 0.5, 16), chrome, [0, 0.1, 0]);
                add(fork, rbox(0.5, 0.32, 0.05, 0.08), chrome, [0, 0.45, 0]);
                for (var i = 0; i < 4; i++) add(fork, new THREE.CapsuleGeometry(0.03, 0.6, 4, 8), chrome, [-0.18 + i * 0.12, 0.9, 0]);
                var knife = node(M, [0.45, 0.1, 0.4], [0, 0, -0.42]);
                add(knife, rbox(0.28, 1.35, 0.12, 0.06), handle, [0, -0.8, 0]);
                var b = new THREE.Shape();
                b.moveTo(-0.13, 0); b.lineTo(0.12, 0); b.lineTo(0.12, 1.25); b.quadraticCurveTo(0.12, 1.72, -0.13, 1.8); b.lineTo(-0.13, 0);
                add(knife, ext(b, 0.02, 0.012, false), chrome, [0, -0.12, 0]);
                return function (t) {
                    fork.rotation.z = 0.42 + Math.sin(t * 0.9) * 0.05;
                    knife.rotation.z = -0.42 - Math.sin(t * 0.9 + 0.6) * 0.05;
                    plate.rotation.z = t * 0.1;
                };
            },
            // łapa z miękkimi poduszkami i kość krążąca wokół niej
            paw: function (M) {
                var pad = MAT.a1({ roughness: 0.55, clearcoat: 0.35, sheen: 1, sheenRoughness: 0.5, sheenColor: new THREE.Color(0xffffff) });
                var paw = node(M);
                add(paw, new THREE.SphereGeometry(1, 64, 48), pad, [0, -0.45, 0], null, [1.0, 0.8, 0.38]);
                [[-0.98, 0.42, 0.35], [-0.36, 0.95, 0.12], [0.36, 0.95, -0.12], [0.98, 0.42, -0.35]].forEach(function (q) {
                    add(paw, new THREE.SphereGeometry(1, 48, 32), pad, [q[0], q[1], 0], [0, 0, q[2]], [0.34, 0.45, 0.3]);
                });
                var bone = node(M), white = MAT.ceramic();
                add(bone, new THREE.CylinderGeometry(0.11, 0.11, 1.1, 24), white, null, [0, 0, Math.PI / 2]);
                [[-0.6, 0.12], [-0.6, -0.12], [0.6, 0.12], [0.6, -0.12]].forEach(function (q) { add(bone, new THREE.SphereGeometry(0.18, 24, 16), white, [q[0], q[1], 0]); });
                return function (t) {
                    paw.scale.setScalar(1 + pulse(t, 2.4, 0.18) * 0.07);
                    var a = t * 0.7;
                    bone.position.set(Math.cos(a) * 2.1, Math.sin(a * 2) * 0.3 + 0.3, Math.sin(a) * 1.2);
                    bone.rotation.set(t * 0.8, t * 1.1, 0);
                };
            },
            // dymki rozmowy w różnych językach
            languages: function (M) {
                function bubble(w, h, tail) {
                    var s = rrect(w, h, 0.38);
                    var tl = poly(tail > 0 ? [[w * 0.12, -h / 2 + 0.05], [w * 0.4, -h / 2 + 0.05], [w * 0.38, -h / 2 - 0.42]] : [[-w * 0.4, -h / 2 + 0.05], [-w * 0.12, -h / 2 + 0.05], [-w * 0.38, -h / 2 - 0.42]]);
                    return [ext(s, 0.22, 0.08, false), ext(tl, 0.2, 0.08, false)];
                }
                function text(word, ink) {
                    return canvasTex(512, 200, function (x, w, h) {
                        x.clearRect(0, 0, w, h);
                        x.fillStyle = ink;
                        x.font = "700 120px system-ui, -apple-system, Segoe UI, sans-serif";
                        x.textAlign = "center"; x.textBaseline = "middle";
                        x.fillText(word, w / 2, h / 2 + 6);
                    });
                }
                var items = [["Hello", o.a1, [-0.55, 0.85, 0], 1, 2.4, 1.15], ["Cześć!", o.a2, [0.65, -0.5, 0.45], -1, 2.5, 1.15], ["Hola", "#f4f2ee", [-0.5, -1.75, -0.35], 1, 1.9, 0.95]];
                var nodes = items.map(function (b, i) {
                    var n = node(M, b[2]), g = bubble(b[4], b[5], b[3]);
                    var m = i === 2 ? MAT.ceramic() : mat(b[1], { clearcoat: 1, roughness: 0.25 });
                    add(n, g[0], m); add(n, g[1], m);
                    add(n, new THREE.PlaneGeometry(b[4] * 0.8, b[4] * 0.8 * 200 / 512), new THREE.MeshBasicMaterial({ map: text(b[0], inkOn(b[1])), transparent: true }), [0, 0, 0.23]);
                    return n;
                });
                return function (t) {
                    nodes.forEach(function (n, i) {
                        n.position.y = items[i][2][1] + Math.sin(t * 1.1 + i * 2) * 0.12;
                        n.rotation.y = Math.sin(t * 0.6 + i) * 0.18;
                        n.scale.setScalar(1 + pulse(t + i * 1.3, 4, 0.12) * 0.08);
                    });
                };
            },
            // łóżko z poduszkami i kocem, nad nim unoszą się „Z z z”
            bed: function (M) {
                var wood = MAT.wood(), linen = MAT.fabric(), blanket = MAT.fabric(o.a1);
                add(M, rbox(3.2, 0.36, 2.2, 0.08), wood, [0, -0.62, 0]);
                [[-1.5, -1.0], [1.5, -1.0], [-1.5, 1.0], [1.5, 1.0]].forEach(function (q) { add(M, new THREE.CylinderGeometry(0.07, 0.06, 0.42, 16), wood, [q[0], -0.98, q[1]]); });
                add(M, rbox(3.32, 1.55, 0.18, 0.1), wood, [0, 0.1, -1.12]);
                add(M, rbox(3.05, 0.42, 2.05, 0.18), linen, [0, -0.22, 0]);
                add(M, rbox(3.14, 0.14, 1.42, 0.07), blanket, [0, 0.03, 0.34]);
                add(M, rbox(3.14, 0.16, 0.3, 0.08), MAT.fabric(o.a2), [0, 0.07, -0.38]);
                [-0.74, 0.74].forEach(function (x) { add(M, rbox(1.2, 0.32, 0.62, 0.16), linen, [x, 0.17, -0.72], [-0.28, 0, 0]); });
                var Z = ext(poly([[-0.3, 0.3], [0.3, 0.3], [0.3, 0.17], [-0.1, -0.17], [0.3, -0.17], [0.3, -0.3], [-0.3, -0.3], [-0.3, -0.17], [0.1, 0.17], [-0.3, 0.17]]), 0.08, 0.025);
                var zs = [0, 1, 2].map(function () { return add(M, Z, MAT.glow(o.a2, 0.5)); });
                zs.forEach(function (z) { z.material = z.material.clone(); z.material.transparent = true; });
                return function (t) {
                    zs.forEach(function (z, i) {
                        var p = (t * 0.22 + i / 3) % 1;
                        z.position.set(-0.7 + p * 1.1 + Math.sin(p * 6) * 0.1, 0.55 + p * 1.7, -0.6);
                        z.scale.setScalar(0.35 + p * 0.55);
                        z.material.opacity = Math.sin(p * Math.PI);
                    });
                };
            },
            // kalkulator: wyświetlacz liczy, klawisze same się wciskają
            calculator: function (M) {
                add(M, rbox(2.1, 3.1, 0.32, 0.18), MAT.dark(), [0, 0, 0]);
                add(M, rbox(1.78, 0.78, 0.06, 0.06), mat("#0b0d11", { roughness: 0.1, clearcoat: 1 }), [0, 1.0, 0.17]);
                var value = 12480.5, shown = "";
                var display = canvasTex(512, 192, function (x, w, h) {
                    x.fillStyle = "#0b0d11"; x.fillRect(0, 0, w, h);
                    // długa liczba zmniejsza krój, żeby zmieścić się na wyświetlaczu
                    x.font = "500 104px ui-monospace, SF Mono, Menlo, monospace";
                    var fs = Math.min(104, 104 * (w - 64) / Math.max(1, x.measureText(shown).width));
                    x.fillStyle = "#f2f4f7"; x.font = "500 " + Math.floor(fs) + "px ui-monospace, SF Mono, Menlo, monospace";
                    x.textAlign = "right"; x.textBaseline = "middle";
                    x.fillText(shown, w - 28, h / 2 + 6);
                    x.fillStyle = o.a2; x.fillRect(28, h - 26, 70, 8);
                });
                var screen = add(M, new THREE.PlaneGeometry(1.66, 0.62), new THREE.MeshBasicMaterial({ map: display }), [0, 1.0, 0.205]);
                function show(v) {
                    var s = v.toFixed(2).replace(".", ","), parts = s.split(",");
                    shown = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "," + parts[1];
                    display.redraw();
                }
                show(value);
                var rows = [["C", "±", "%", "÷"], ["7", "8", "9", "×"], ["4", "5", "6", "−"], ["1", "2", "3", "+"], ["0", ",", "⌫", "="]];
                var keyGeo = rbox(0.36, 0.3, 0.12, 0.07), keys = [];
                var light = mat("#eceef2", { roughness: 0.35, clearcoat: 0.8 }), grey = mat("#9ea3ad", { roughness: 0.35, clearcoat: 0.8 }), op = MAT.a1();
                rows.forEach(function (row, r) {
                    row.forEach(function (lab, c) {
                        var m = c === 3 ? op : r === 0 ? grey : light;
                        var k = node(M, [-0.66 + c * 0.44, 0.27 - r * 0.38, 0.2]);
                        add(k, keyGeo, m);
                        var ink = c === 3 ? inkOn(o.a1) : "#1b1c20";
                        add(k, new THREE.PlaneGeometry(0.22, 0.22), new THREE.MeshBasicMaterial({ transparent: true, map: canvasTex(64, 64, function (x, w, h) {
                            x.clearRect(0, 0, w, h); x.fillStyle = ink; x.font = "600 40px system-ui, -apple-system, sans-serif";
                            x.textAlign = "center"; x.textBaseline = "middle"; x.fillText(lab, w / 2, h / 2 + 2);
                        }) }), [0, 0, 0.081]);
                        keys.push(k);
                    });
                });
                var lastKey = -1;
                return function (t) {
                    var step = Math.floor(t / 0.55);
                    if (step !== lastKey) {
                        lastKey = step;
                        value += (step * 7919 % 97) * 1.25 + 3.5;
                        if (value > 999999) value = 12480.5;
                        show(value);
                    }
                    var ph = (t / 0.55) % 1, which = (step * 7) % keys.length;
                    keys.forEach(function (k, i) { k.position.z = 0.2 - (i === which ? Math.sin(Math.min(1, ph * 3) * Math.PI) * 0.06 : 0); });
                    screen.material.map = display;
                };
            },
            // młotek z gumowym uchwytem wbija gwóźdź; przy uderzeniu rozchodzi się fala
            hammer: function (M) {
                var steel = MAT.chrome(), hit = -0.82, lift = 0.75;
                var swing = node(M, [-1.1, -1.4, 0], [0, 0, hit + lift * 0.5]);
                add(swing, lathe([[0, 0], [0.12, 0], [0.15, 0.1], [0.14, 1.2], [0.1, 2.75], [0.09, 2.95], [0, 2.95]], 48), MAT.wood());
                add(swing, new THREE.CylinderGeometry(0.17, 0.165, 0.95, 40), MAT.a1({ roughness: 0.7, clearcoat: 0.2 }), [0, 0.55, 0]);
                var head = node(swing, [0, 2.95, 0]);
                add(head, rbox(1.05, 0.38, 0.38, 0.06), steel, [0.05, 0, 0]);
                add(head, new THREE.CylinderGeometry(0.21, 0.19, 0.26, 40), steel, [0.68, 0, 0], [0, 0, Math.PI / 2]);
                [-0.09, 0.09].forEach(function (z) {
                    add(head, new THREE.TorusGeometry(0.42, 0.065, 12, 32, Math.PI / 2), steel, [-0.47, -0.42, z], [0, 0, Math.PI / 2]);
                });
                var face = new THREE.Vector3(0.81, 2.95, 0), n = new THREE.Vector2(Math.cos(hit), Math.sin(hit));
                var fx = face.x * Math.cos(hit) - face.y * Math.sin(hit) - 1.1, fy = face.x * Math.sin(hit) + face.y * Math.cos(hit) - 1.4;
                var nail = node(M, [fx + n.x * 0.62, fy + n.y * 0.62, 0], [0, 0, hit - Math.PI / 2]);
                add(nail, new THREE.CylinderGeometry(0.035, 0.035, 1.1, 16), MAT.steel(), [0, 0.02, 0]);
                add(nail, new THREE.CylinderGeometry(0.13, 0.13, 0.04, 32), MAT.steel(), [0, -0.55, 0]);
                add(nail, new THREE.ConeGeometry(0.035, 0.14, 16), MAT.steel(), [0, 0.64, 0]);
                // deska, w którą wchodzi gwóźdź — górna ściana prostopadła do kierunku uderzenia
                add(M, rbox(1.9, 0.5, 1.1, 0.06), MAT.wood(), [fx + n.x * 1.05, fy + n.y * 1.05, 0], [0, 0, hit + Math.PI / 2]);
                var wave = add(M, new THREE.TorusGeometry(0.2, 0.012, 8, 64), MAT.glow(o.a2, 1), [fx, fy, 0], [Math.PI / 2, 0, hit - Math.PI / 2]);
                wave.material.transparent = true;
                return function (t) {
                    var p = (t / 1.7) % 1, a;
                    if (p < 0.62) a = hit + lift * ease(p / 0.62);
                    else if (p < 0.72) a = hit + lift * (1 - Math.pow((p - 0.62) / 0.1, 2));
                    else a = hit + Math.sin((p - 0.72) / 0.28 * Math.PI) * 0.04 * (1 - (p - 0.72) / 0.28);
                    swing.rotation.z = a;
                    var w = p >= 0.72 ? (p - 0.72) / 0.28 : 0;
                    wave.scale.setScalar(0.3 + w * 3);
                    wave.material.opacity = p >= 0.72 ? 1 - w : 0;
                    nail.scale.y = 1 - (p >= 0.72 && p < 0.78 ? 0.05 : 0);
                };
            }
        };

        // przedmiot w „kostce” wspólnego rozmiaru + cień kontaktowy pod nim
        function item(name) {
            var model = new THREE.Group(), anim = (ITEMS[name] || ITEMS.cup)(model) || function () {};
            var box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
            var k = 3.4 / Math.max(size.x, size.y, size.z);
            model.scale.setScalar(k);
            model.position.copy(c).multiplyScalar(-k);
            pivot = new THREE.Group();
            pivot.add(model);
            group.add(pivot);
            var shadow = canvasTex(128, 128, function (x, w) {
                var gr = x.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
                gr.addColorStop(0, "rgba(0,0,0,0.6)"); gr.addColorStop(1, "rgba(0,0,0,0)");
                x.fillStyle = gr; x.fillRect(0, 0, w, w);
            });
            add(group, new THREE.PlaneGeometry(4.2, 4.2), new THREE.MeshBasicMaterial({ map: shadow, transparent: true, depthWrite: false, opacity: o.dark ? 0.9 : 0.45 }), [0, -2.3, 0], [-Math.PI / 2, 0, 0]);
            spin.y = -0.5; spin.vy = 0; spin.x = spin.rx = spin.vx = 0; spin.s = 1; spin.vs = 0;
            return anim;
        }
        // gumka: im dalej za granicą, tym słabiej przedmiot podąża za ręką
        function band(v, lim) {
            var a = Math.abs(v);
            if (a <= lim) return v;
            var over = a - lim;
            return Math.sign(v) * (lim + (over * 0.55) / (1 + 0.55 * over));
        }

        var KINDS = {
            // płynna bryła: wierzchołki sfery przesuwane falami wzdłuż normalnych + pierścień cząsteczek
            blob: function () {
                // sfera z indeksami: wspólne wierzchołki dają gładkie normalne (bez widocznych trójkątów)
                var geo = new THREE.SphereGeometry(1.7, 160, 120), pos = geo.attributes.position, base = pos.array.slice();
                var mesh = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color(o.a1), roughness: 0.18, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.15,
                    sheen: 1, sheenColor: new THREE.Color(o.a2), iridescence: 0.6
                }));
                group.add(mesh);
                var n = 900, ring = new Float32Array(n * 3);
                for (var i = 0; i < n; i++) {
                    var a = rnd(i) * Math.PI * 2, r = 2.5 + rnd(i + 7) * 0.9;
                    ring[i * 3] = Math.cos(a) * r; ring[i * 3 + 1] = (rnd(i + 3) - 0.5) * 0.25; ring[i * 3 + 2] = Math.sin(a) * r;
                }
                var dust = points(ring, gradient(n, function (i) { return rnd(i + 11); }), 0.045);
                dust.rotation.x = 0.45;
                return function (t) {
                    for (var i = 0; i < pos.count; i++) {
                        var x = base[i * 3], y = base[i * 3 + 1], z = base[i * 3 + 2];
                        var d = 1 + 0.13 * Math.sin(x * 1.9 + t * 1.1) * Math.sin(y * 2.2 + t * 0.9) + 0.07 * Math.sin(z * 3.1 + t * 1.6);
                        pos.array[i * 3] = x * d; pos.array[i * 3 + 1] = y * d; pos.array[i * 3 + 2] = z * d;
                    }
                    pos.needsUpdate = true;
                    geo.computeVertexNormals();
                    mesh.rotation.y = t * 0.15;
                    dust.rotation.y = -t * 0.08;
                };
            },
            // pole cząsteczek falujące jak powierzchnia wody
            waves: function () {
                var cols = 140, rows = 70, n = cols * rows, pos = new Float32Array(n * 3);
                for (var i = 0; i < n; i++) {
                    pos[i * 3] = (i % cols - cols / 2) * 0.16;
                    pos[i * 3 + 2] = (Math.floor(i / cols) - rows / 2) * 0.16;
                }
                var p = points(pos, gradient(n, function (i) { return Math.floor(i / cols) / rows; }), 0.05);
                var arr = p.geometry.attributes.position;
                group.position.y = -1.2;
                group.rotation.x = 0.35;
                return function (t) {
                    for (var i = 0; i < n; i++) {
                        var x = arr.array[i * 3], z = arr.array[i * 3 + 2];
                        arr.array[i * 3 + 1] = Math.sin(x * 0.55 + t * 1.2) * 0.45 + Math.cos(z * 0.7 + t * 0.9) * 0.35;
                    }
                    arr.needsUpdate = true;
                };
            },
            // bryły unoszące się we mgle w kolorze tła — głębia z perspektywy i zanikania
            float: function () {
                scene.fog = new THREE.Fog(new THREE.Color(o.bg), 5, 15);
                var geos = [new THREE.BoxGeometry(0.7, 0.7, 0.7), new THREE.IcosahedronGeometry(0.5, 0), new THREE.TorusGeometry(0.4, 0.15, 16, 48), new THREE.ConeGeometry(0.45, 0.8, 4)];
                var cols = [o.a1, o.a2, o.a1, new THREE.Color(o.a1).lerp(new THREE.Color(o.a2), 0.5)];
                var items = [], dummy = new THREE.Object3D();
                geos.forEach(function (geo, k) {
                    var count = 11;
                    var im = new THREE.InstancedMesh(geo, new THREE.MeshPhysicalMaterial({ color: new THREE.Color(cols[k]), roughness: 0.3, metalness: 0.2, clearcoat: 1 }), count);
                    for (var i = 0; i < count; i++) {
                        var s = k * 50 + i;
                        items.push({ m: im, i: i, x: (rnd(s) - 0.5) * 14, y: (rnd(s + 1) - 0.5) * 8, z: -rnd(s + 2) * 11 - 0.5, sp: 0.3 + rnd(s + 3) * 0.6, ph: rnd(s + 4) * 6.28, sc: 0.45 + rnd(s + 5) * 0.6 });
                    }
                    group.add(im);
                });
                return function (t) {
                    items.forEach(function (it) {
                        dummy.position.set(it.x, it.y + Math.sin(t * it.sp + it.ph) * 0.4, it.z);
                        dummy.rotation.set(t * it.sp * 0.7 + it.ph, t * it.sp + it.ph, 0);
                        dummy.scale.setScalar(it.sc);
                        dummy.updateMatrix();
                        it.m.setMatrixAt(it.i, dummy.matrix);
                    });
                    group.children.forEach(function (m) { m.instanceMatrix.needsUpdate = true; });
                };
            },
            // spiralna galaktyka cząsteczek z jasnym jądrem
            galaxy: function () {
                var n = 7000, pos = new Float32Array(n * 3);
                for (var i = 0; i < n; i++) {
                    var r = Math.pow(rnd(i), 1.6) * 4.2, arm = (i % 3) * Math.PI * 2 / 3, a = arm + r * 1.15;
                    var j = (rnd(i + 9) - 0.5) * (0.25 + r * 0.18);
                    pos[i * 3] = Math.cos(a) * r + j; pos[i * 3 + 1] = (rnd(i + 5) - 0.5) * 0.3 * (1.4 - r / 4.2); pos[i * 3 + 2] = Math.sin(a) * r + j;
                }
                var p = points(pos, gradient(n, function (i) { return Math.min(1, Math.pow(rnd(i), 1.6) * 1.3); }), 0.04);
                var core = new THREE.Mesh(new THREE.SphereGeometry(0.32, 32, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(o.a1) }));
                group.add(core);
                group.rotation.x = 0.55;
                return function (t) { p.rotation.y = t * 0.12; core.scale.setScalar(1 + Math.sin(t * 2) * 0.06); };
            }
        };

        function set(opts) {
            clear();
            o = opts;
            hemi.groundColor.set(o.a2);
            hemi.intensity = o.dark ? 0.8 : 1.3;
            rim.color.set(o.a2);
            group.userData.base = null;
            if (o.kind.indexOf("item-") === 0) {
                scene.environment = studio();
                hemi.intensity *= 0.6;
                tick = item(o.kind.slice(5));
            } else tick = (KINDS[o.kind] || KINDS.blob)();
            group.userData.base = { x: group.rotation.x, y: group.position.y };
            dust();
            resize();
        }
        function resize() {
            var w = canvas.clientWidth, h = canvas.clientHeight;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            wide = w / h > 1.25;
            render(performance.now());
        }
        function render(now) {
            var t = o.still ? 1.5 : (now - t0) / 1000;
            var dt = Math.min(0.033, Math.max(0, (now - lastNow) / 1000));
            lastNow = now;
            if (tick) tick(t, dt);
            if (pivot) physics(dt);
            // przewijanie i kursor wygładzane — kamera „płynie” zamiast skakać
            var k = running ? 0.06 : 1;
            scroll += (scrollT - scroll) * k;
            ptr.x += (ptr.tx - ptr.x) * k;
            ptr.y += (ptr.ty - ptr.y) * k;
            var b = group.userData.base || { x: 0, y: 0 };
            // obiekt przechodzi z prawej na lewą i z powrotem obok kolejnych treści
            var isItem = !!pivot, solo = isItem || o.kind === "blob" || o.kind === "galaxy";
            var sway = Math.cos(scroll * Math.PI * 3) * (wide ? (solo ? 2.6 : 1) : 0.4);
            group.position.x = sway;
            group.position.y = b.y + Math.sin(scroll * Math.PI * 2) * 0.4;
            group.rotation.x = b.x + scroll * (isItem ? 0.25 : 0.9);
            group.rotation.y = scroll * Math.PI * (isItem ? 1 : 1.6);
            group.rotation.z = Math.sin(scroll * Math.PI) * 0.25;
            far.position.y = scroll * 9;
            far.rotation.y = t * 0.01 + scroll * 0.4;
            // kamera: lekki odjazd w połowie strony i najazd pod koniec
            camera.position.set(ptr.x * 1.1, -ptr.y * 0.7 - scroll * 1.2, 7.8 + Math.sin(scroll * Math.PI) * 2.6 - scroll * 1.4);
            camera.lookAt(sway * 0.25, -scroll * 1.2, 0);
            renderer.render(scene, camera);
        }
        function frame(now) {
            render(now);
            if (running) raf = requestAnimationFrame(frame);
        }
        // fizyka chwytu: bezwładność obrotu po puszczeniu, sprężyny przechyłu i „ściśnięcia”
        function physics(dt) {
            if (!spin.held) {
                // obrót wytraca prędkość jak przewijanie (0.998 na ms), potem wraca spokojny obrót własny
                spin.y += (spin.vy + (o.still ? 0 : 0.28)) * dt;
                spin.vy *= Math.pow(0.998, dt * 1000);
                // przechył: sprężyna krytycznie tłumiona (bez przestrzału), odpowiedź 0.45 s
                var w = 2 * Math.PI / 0.45;
                spin.vx += (-w * w * spin.x - 2 * w * spin.vx) * dt;
                spin.x += spin.vx * dt;
            }
            // ściśnięcie przy chwycie: tłumienie 0.7 — po puszczeniu lekko odbija, bo był pęd
            var w2 = 2 * Math.PI / 0.32, target = spin.held ? 0.94 : 1;
            spin.vs += (-w2 * w2 * (spin.s - target) - 2 * 0.7 * w2 * spin.vs) * dt;
            spin.s += spin.vs * dt;
            pivot.rotation.set(spin.x, spin.y, 0);
            pivot.scale.setScalar(spin.s);
        }
        return {
            set: set, resize: resize,
            pointer: function (x, y) { ptr.tx = x; ptr.ty = y; },
            // chwyt przedmiotu: przesunięcie w pikselach, obrót 1:1 z ręką
            grab: function () {
                spin.held = true;
                spin.vy = 0;
                spin.rx = spin.x;
                spin.hist = [[performance.now(), spin.y]];
                if (!running) render(performance.now());
            },
            drag: function (dx, dy) {
                spin.y += dx * 0.011;
                spin.rx += dy * 0.008;
                spin.x = band(spin.rx, 0.6);
                var now = performance.now();
                spin.hist.push([now, spin.y]);
                while (spin.hist.length > 2 && now - spin.hist[0][0] > 100) spin.hist.shift();
                if (!running) render(now);
            },
            release: function () {
                spin.held = false;
                spin.vx = 0;
                // prędkość z ostatnich ~100 ms przekazana dalej — bez szwu między ręką a animacją
                var h = spin.hist, n = h.length, now = performance.now();
                var v = n > 1 && now - h[n - 1][0] < 60 ? (h[n - 1][1] - h[0][1]) / Math.max(0.016, (h[n - 1][0] - h[0][0]) / 1000) : 0;
                spin.vy = o.still ? 0 : Math.max(-22, Math.min(22, v));
                if (!running) { spin.x = 0; render(now); }
            },
            scroll: function (p) { scrollT = p; if (!running) render(performance.now()); },
            start: function () {
                if (running || o.still) return;
                running = true;
                raf = requestAnimationFrame(frame);
            },
            stop: function () { running = false; cancelAnimationFrame(raf); },
            dispose: function () { running = false; cancelAnimationFrame(raf); clear(); if (envTex) envTex.dispose(); renderer.dispose(); renderer.forceContextLoss(); }
        };
    }

    var BGS = { none: "Brak (płaska strona)", auto: "Automatycznie (wg stylu)", blob: "Płynna bryła", waves: "Fale cząsteczek", float: "Bryły we mgle", galaxy: "Galaktyka", item: "Przedmiot branży" };
    // przedmioty 3D — klucze takie jak ikony szablonów wizytówek (js/wizytowki.js)
    var ITEMS = {
        cup: "Filiżanka kawy", scale: "Waga szalkowa", camera: "Aparat", bolt: "Błyskawica", tooth: "Ząb",
        compass: "Cyrkiel", code: "Laptop z kodem", flower: "Kwiat w wazonie", scissors: "Nożyczki", wrench: "Klucz i nakrętka",
        utensils: "Talerz i sztućce", paw: "Łapa i kość", languages: "Dymki rozmowy", bed: "Łóżko", calculator: "Kalkulator", hammer: "Młotek i gwóźdź"
    };
    function validBg(k) { return !!(BGS[k] || (/^item-/.test(k) && ITEMS[k.slice(5)])); }
    function bgLabel(k) { return BGS[k] || ITEMS[String(k).slice(5)] || k; }
    // „auto”: styl 3D dostaje tło pasujące do swojego obiektu, pozostałe — do materiału;
    // „item”: przedmiot z ikony branży (icon), np. młotek dla firmy remontowej
    function bgKind(kind, st, icon) {
        if (kind === "item") return "item-" + (ITEMS[icon] ? icon : "cup");
        if (kind !== "auto") return validBg(kind) ? kind : "none";
        if (st.scene && st.scene !== "none") return { orb: "blob", knot: "blob", crystal: "float", rings: "galaxy", cubes: "float" }[st.scene];
        return { glass: "blob", neon: "galaxy", clay: "blob", extrude: "float", bevel: "float", brutal: "float", outline: "float" }[st.material] || "waves";
    }
    function bgOpts(kind, st, mode) {
        var t = st[mode];
        return { kind: kind, a1: t["--accent"], a2: t["--accent-2"], bg: t["--bg"], dark: mode === "dark", still: reduced() };
    }
    function iconOf(root) {
        var W = g.Wizytowki;
        return W && root.dataset.template ? W.byId(root.dataset.template).icon : null;
    }

    // Chwytanie przedmiotu w hero: obrót 1:1 z ręką, po puszczeniu bezwładność.
    // Samowystarczalna — trafia też do eksportowanego pliku .html.
    function grabbable(hero, s, signal) {
        var last = null;
        hero.addEventListener("pointerdown", function (e) {
            if (!hero.closest(".has-item3d") || e.button > 0) return;
            // tekst, przyciski i karty zostają klikalne — chwytamy tylko „pustą” przestrzeń
            if (e.target.closest("a, button, input, textarea, select, label, h1, h2, p, dl, .wz-card")) return;
            last = { x: e.clientX, y: e.clientY, id: e.pointerId };
            hero.setPointerCapture(e.pointerId);
            hero.classList.add("is-grabbing");
            s.grab();
        }, { signal: signal });
        hero.addEventListener("pointermove", function (e) {
            if (!last || e.pointerId !== last.id) return;
            s.drag(e.clientX - last.x, e.clientY - last.y);
            last.x = e.clientX;
            last.y = e.clientY;
        }, { signal: signal });
        function end(e) {
            if (!last || e.pointerId !== last.id) return;
            last = null;
            hero.classList.remove("is-grabbing");
            s.release();
        }
        hero.addEventListener("pointerup", end, { signal: signal });
        hero.addEventListener("pointercancel", end, { signal: signal });
    }

    // scena za całą wizytówką: przyklejona „scena” (.wz-stage) o wysokości okna;
    // `scroller` to przewijany kontener podglądu albo null (okno przeglądarki)
    function attachBg(root, st, mode, kind, scroller) {
        kind = bgKind(kind, st, iconOf(root));
        var old = root.__bg;
        // po zmianie szablonu (innerHTML) stara scena wypadła z dokumentu — zwalniamy kontekst WebGL i słuchacze
        if (old && (!root.contains(old.stage) || kind === "none")) {
            old.off();
            old.s.dispose();
            old.stage.remove();
            old = root.__bg = null;
        }
        root.classList.toggle("has-bg3d", kind !== "none");
        root.classList.toggle("has-item3d", kind.indexOf("item-") === 0);
        root.__bgKind = kind;
        if (kind === "none") return kind;
        loadThree(function () {
            if (root.__bgKind === "none") return;
            var cur = root.__bg;
            if (!cur) {
                var stage = document.createElement("div"), c = document.createElement("canvas");
                stage.className = "wz-stage";
                stage.setAttribute("aria-hidden", "true");
                c.className = "wz-bg3d";
                stage.appendChild(c);
                root.prepend(stage);
                try { cur = root.__bg = { stage: stage, canvas: c, s: buildBg(g.THREE, c) }; } catch (e) { stage.remove(); root.classList.remove("has-bg3d", "has-item3d"); return; }
                cur.off = wireBg(cur, root, scroller);
            }
            cur.s.set(bgOpts(root.__bgKind, st, mode));
            cur.s.start();
        });
        return kind;
    }
    function wireBg(cur, root, scroller) {
        var box = scroller || g, ac = new AbortController(), obs = [];
        function progress() {
            var y = scroller ? scroller.scrollTop : g.scrollY;
            var max = scroller ? scroller.scrollHeight - scroller.clientHeight : document.documentElement.scrollHeight - g.innerHeight;
            cur.s.scroll(max > 0 ? Math.max(0, Math.min(1, y / max)) : 0);
        }
        // wysokość sceny = widoczna wysokość podglądu (w oknie przeglądarki wystarcza 100svh z css)
        function fit() {
            if (scroller) root.style.setProperty("--stage-h", scroller.clientHeight + "px");
            progress();
        }
        root.addEventListener("pointermove", function (e) {
            var r = (scroller || document.documentElement).getBoundingClientRect();
            var h = scroller ? r.height : g.innerHeight, w = scroller ? r.width : g.innerWidth;
            cur.s.pointer(((e.clientX - (scroller ? r.left : 0)) / w) * 2 - 1, ((e.clientY - (scroller ? r.top : 0)) / h) * 2 - 1);
        }, { signal: ac.signal });
        root.addEventListener("pointerleave", function () { cur.s.pointer(0, 0); }, { signal: ac.signal });
        box.addEventListener("scroll", progress, { passive: true, signal: ac.signal });
        var hero = root.querySelector(".wz-hero");
        if (hero) grabbable(hero, cur.s, ac.signal);
        if ("ResizeObserver" in g) {
            obs.push(new ResizeObserver(cur.s.resize), new ResizeObserver(fit));
            obs[0].observe(cur.canvas);
            obs[1].observe(scroller || root);
        }
        fit();
        // poza ekranem (np. ukryta zakładka) — bez animacji
        if ("IntersectionObserver" in g) {
            var io = new IntersectionObserver(function (en) {
                if (en[0].isIntersecting) cur.s.start(); else cur.s.stop();
            });
            io.observe(cur.stage);
            obs.push(io);
        }
        return function () {
            ac.abort();
            obs.forEach(function (x) { x.disconnect(); });
        };
    }

    // skrypt modułu do eksportowanej strony .html (scena .wz-stage jest już na początku strony)
    function bgCode(kind, st, icon) {
        kind = bgKind(kind, st, icon);
        if (kind === "none") return "";
        var c = function (m) { return JSON.stringify({ a1: st[m]["--accent"], a2: st[m]["--accent-2"], bg: st[m]["--bg"] }); };
        var item = kind.indexOf("item-") === 0;
        return [
            "// Scena 3D za całą stroną (" + bgLabel(kind) + ") — three.js; kamera płynie z przewijaniem, kursor daje paralaksę" +
                (item ? ", przedmiot w nagłówku można złapać i zakręcić" : ""),
            "import * as THREE from \"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js\";",
            "var COLORS = { light: " + c("light") + ", dark: " + c("dark") + " };",
            "var canvas = document.querySelector(\".wz-bg3d\");",
            "var dark = matchMedia(\"(prefers-color-scheme: dark)\");",
            "var still = matchMedia(\"(prefers-reduced-motion: reduce)\").matches;",
            "var s = buildBg(THREE, canvas);",
            "function apply() {",
            "  var c = COLORS[dark.matches ? \"dark\" : \"light\"];",
            "  s.set({ kind: " + JSON.stringify(kind) + ", a1: c.a1, a2: c.a2, bg: c.bg, dark: dark.matches, still: still });",
            "  s.start();",
            "}",
            "function progress() {",
            "  var max = document.documentElement.scrollHeight - innerHeight;",
            "  s.scroll(max > 0 ? Math.min(1, scrollY / max) : 0);",
            "}",
            "apply();",
            "progress();",
            "dark.addEventListener(\"change\", apply);",
            "new ResizeObserver(s.resize).observe(canvas);",
            "addEventListener(\"scroll\", progress, { passive: true });",
            "addEventListener(\"pointermove\", function (e) { s.pointer(e.clientX / innerWidth * 2 - 1, e.clientY / innerHeight * 2 - 1); });",
            item ? "grabbable(document.querySelector(\".wz-hero\"), s);" : "",
            "",
            dedent(buildBg.toString()),
            item ? "\n" + dedent(grabbable.toString()) : "",
            ""
        ].join("\n");
    }

    g.Scena3D = { attach: attach, code: code, build: build, BGS: BGS, ITEMS: ITEMS, validBg: validBg, bgLabel: bgLabel, attachBg: attachBg, bgKind: bgKind, bgCode: bgCode };
})(window);
