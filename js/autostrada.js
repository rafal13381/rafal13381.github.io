// Autostrada — otwarty świat 3D (three.js, WebGL). Zwykły skrypt, nie moduł — działa też z file://.
// Siatka ulic z przecznicami, budynki i przyroda zależne od mapy, ruch uliczny skręcający na skrzyżowaniach,
// paliwo i stacje, monety, zlecenia kurierskie, garaż z autami i mapy do kupienia.
// Postęp zapisuje się w localStorage pod kluczem „autostrada-postep”.
(function () {
const THREE = window.THREE; // js/vendor/three.min.js wczytany wcześniej

const $ = (id) => document.getElementById(id);
const canvas = $("road"), wrap = $("roadWrap"), overlay = $("overlay");
const SAVE_KEY = "autostrada-postep";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// ---------- dane: auta i mapy ----------
const CARS = [
    { id: "maluch", name: "Maluch", desc: "Skromny początek: mały bak, niewielka moc.", price: 0, vmax: 115, accel: 5.5, handling: 1.0, grip: 1.0, tank: 30, cons: 3.6, dur: 1.0, color: "#E5484D",
        body: { l: 3.4, w: 1.6, h: 0.72, cabL: 1.75, cabH: 0.62, cabZ: -0.15 } },
    { id: "kombi", name: "Kombi Rodzinne", desc: "Większy bak i solidna karoseria.", price: 250, vmax: 150, accel: 6.5, handling: 1.05, grip: 1.05, tank: 50, cons: 3.8, dur: 1.4, color: "#3E63DD",
        body: { l: 4.6, w: 1.8, h: 0.78, cabL: 2.9, cabH: 0.66, cabZ: -0.4 } },
    { id: "terenowka", name: "Terenówka 4×4", desc: "Nie zwalnia poza drogą i pewnie trzyma się śniegu.", price: 500, vmax: 140, accel: 6.2, handling: 0.95, grip: 1.4, tank: 70, cons: 5.0, dur: 2.0, offroad: true, color: "#30A46C",
        body: { l: 4.4, w: 2.0, h: 1.05, cabL: 2.6, cabH: 0.85, cabZ: -0.3 } },
    { id: "sport", name: "Sportowe Coupé", desc: "Szybkie i zwinne, ale dużo pali i łatwo się rysuje.", price: 900, vmax: 210, accel: 10, handling: 1.3, grip: 1.15, tank: 45, cons: 6.0, dur: 0.85, color: "#F5A524",
        body: { l: 4.4, w: 1.9, h: 0.58, cabL: 1.9, cabH: 0.5, cabZ: -0.25 } },
    { id: "elektryk", name: "Elektryk GT", desc: "Najszybszy i najoszczędniejszy. Ładuje się na stacjach.", price: 1500, vmax: 235, accel: 12, handling: 1.35, grip: 1.25, tank: 60, cons: 2.6, dur: 1.3, color: "#E2E4E9",
        body: { l: 4.8, w: 1.95, h: 0.68, cabL: 2.4, cabH: 0.55, cabZ: -0.2 } }
];
const MAPS = [
    { id: "las", name: "Leśne Mazury", desc: "Lasy, pola i spokojny ruch.", price: 0, N: 12, seed: 11, kind: "forest",
        ground: "#6FAE61", road: "#4A4E57", line: "#F2F2F2", sky: "#A7D3F2", fog: "#C9E2F2", fogNear: 90, fogFar: 520, sun: 1, friction: 1, traffic: 10 },
    { id: "miasto", name: "Miasto", desc: "Gęsta zabudowa, dużo skrzyżowań i ruchu.", price: 300, N: 14, seed: 23, kind: "city",
        ground: "#A3A9B0", road: "#3F434B", line: "#F5F5F5", sky: "#B9D4EA", fog: "#CCD9E4", fogNear: 110, fogFar: 600, sun: 1, friction: 1, traffic: 22 },
    { id: "pustynia", name: "Pustynia o zachodzie", desc: "Piasek spowalnia, kaktusy nie wybaczają.", price: 500, N: 12, seed: 37, kind: "desert",
        ground: "#E2C089", road: "#5B5148", line: "#FFF1D6", sky: "#F6B98A", fog: "#F3C9A0", fogNear: 80, fogFar: 520, sun: 0.95, friction: 0.9, traffic: 7 },
    { id: "zima", name: "Zima w górach", desc: "Ślisko! Hamuj wcześniej i uważaj na zakrętach.", price: 700, N: 12, seed: 51, kind: "winter",
        ground: "#EEF3F7", road: "#5E636C", line: "#FFFFFF", sky: "#C7D6E4", fog: "#DCE6EF", fogNear: 50, fogFar: 380, sun: 0.8, friction: 0.55, traffic: 9 },
    { id: "neon", name: "Neonowe miasto nocą", desc: "Światła wieżowców i nocne ulice.", price: 1000, N: 14, seed: 71, kind: "neon", night: true,
        ground: "#1B1D26", road: "#24262E", line: "#B8C2FF", sky: "#0B0B1A", fog: "#14112A", fogNear: 70, fogFar: 520, sun: 0.3, friction: 1, traffic: 18 }
];
const PLACES = ["Piekarnia", "Poczta", "Apteka", "Kwiaciarnia", "Warsztat", "Szkoła", "Biblioteka", "Pizzeria", "Przychodnia",
    "Ratusz", "Sklep rowerowy", "Kawiarnia", "Kino", "Hotel", "Ogrodnictwo", "Sklep zoologiczny", "Pralnia", "Księgarnia"];
const PALETTE = ["#E5484D", "#F5A524", "#3E63DD", "#30A46C", "#8E4EC6", "#E2E4E9", "#4B5563", "#12A594", "#D6409F", "#1F2937"];

const B = 90;             // długość kwartału (odległość między skrzyżowaniami)
const RW = 7;             // połowa szerokości jezdni
const LANE = 3.4;         // odsunięcie pasa ruchu od osi jezdni
const FUEL_PRICE = 1;     // moneta za litr
const REPAIR_PRICE = 0.5; // moneta za 1% uszkodzeń

// ---------- zapis postępu ----------
function defaultSave() {
    return { v: 2, coins: 50, km: 0, jobs: 0, car: "maluch", map: "las",
        cars: ["maluch"], maps: ["las"], carState: { maluch: { fuel: 30, dmg: 0 } }, pos: {} };
}
let S;
try { S = Object.assign(defaultSave(), JSON.parse(localStorage.getItem(SAVE_KEY)) || {}); } catch (e) { S = defaultSave(); }
try { localStorage.removeItem("autostrada-rekord"); } catch (e) {} // klucz poprzedniej wersji gry
if (!CARS.some((c) => c.id === S.car)) S.car = "maluch";
if (!MAPS.some((m) => m.id === S.map)) S.map = "las";
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) {} }
const carSpec = () => CARS.find((c) => c.id === S.car);
const mapSpec = () => MAPS.find((m) => m.id === S.map);
function cs() { // stan wybranego auta: paliwo i uszkodzenia
    if (!S.carState[S.car]) S.carState[S.car] = { fuel: carSpec().tank, dmg: 0 };
    return S.carState[S.car];
}

// ---------- pomocnicze ----------
function rng(seed) { // mulberry32 — ten sam świat przy każdym wejściu
    return function () {
        seed |= 0; seed = seed + 0x6D2B79F5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const fmt = (n) => Math.round(n).toLocaleString("pl-PL");
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------- renderer ----------
let renderer;
try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
} catch (e) {
    $("ovTitle").textContent = "Brak WebGL";
    $("ovText").textContent = "Ta przeglądarka lub urządzenie nie obsługuje grafiki 3D (WebGL), więc gra nie może się uruchomić.";
    $("startBtn").hidden = true;
    throw e;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.5, 900);
const hemi = new THREE.HemisphereLight(0xffffff, 0x445544, 1.2);
const sun = new THREE.DirectionalLight(0xffffff, 2.2);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -70, right: 70, top: 70, bottom: -70, near: 10, far: 220 });
sun.shadow.bias = -0.0006;
scene.add(hemi, sun, sun.target);

let world = null;      // obiekty bieżącej mapy (usuwane przy zmianie)
let colliders = {};    // przeszkody pogrupowane wg kwartałów
let N = 12, WORLD = N * B;
let stations = [], coins = [], cans = [], traffic = [], snow = null;
let coinMesh, canMesh;

// ---------- tekstury ----------
function windowTexture(night) {
    const c = document.createElement("canvas"); c.width = 64; c.height = 128;
    const g = c.getContext("2d");
    g.fillStyle = night ? "#14151C" : "#D9DDE3"; g.fillRect(0, 0, 64, 128);
    for (let y = 6; y < 128; y += 14) for (let x = 5; x < 64; x += 15) {
        const lit = Math.random();
        g.fillStyle = night ? (lit < 0.55 ? ["#FFD27A", "#7AE7FF", "#FF8BD8", "#FFF1C1"][Math.floor(lit * 7) % 4] : "#20222C") : (lit < 0.15 ? "#9FB6CC" : "#5D7189");
        g.fillRect(x, y, 9, 8);
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
}

// ---------- budowa świata ----------
function addCollider(c) {
    const cx = c.type === "box" ? (c.minX + c.maxX) / 2 : c.x, cz = c.type === "box" ? (c.minZ + c.maxZ) / 2 : c.z;
    const key = Math.floor(cx / B) + "," + Math.floor(cz / B);
    (colliders[key] = colliders[key] || []).push(c);
}
function onRoad(x, z) {
    if (x < -RW || z < -RW || x > WORLD + RW || z > WORLD + RW) return false;
    const dx = Math.abs(x - Math.round(x / B) * B), dz = Math.abs(z - Math.round(z / B) * B);
    return dx < RW || dz < RW;
}
function inStation(x, z) { return stations.find((s) => Math.hypot(s.x - x, s.z - z) < s.r) || null; }

function clearWorld() {
    if (!world) return;
    scene.remove(world);
    world.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); });
    });
    world = null;
}

const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion(), s3 = new THREE.Vector3(), p3 = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);

function buildWorld() {
    clearWorld();
    const M = mapSpec(), R = rng(M.seed);
    N = M.N; WORLD = N * B;
    colliders = {}; stations = []; coins = []; cans = []; traffic = [];
    world = new THREE.Group();
    scene.add(world);

    scene.background = new THREE.Color(M.sky);
    scene.fog = new THREE.Fog(M.fog, M.fogNear, M.fogFar);
    camera.far = M.fogFar + 60; camera.updateProjectionMatrix();
    hemi.color.set(M.night ? 0x6B6FB8 : 0xffffff);
    hemi.groundColor.set(M.night ? 0x111122 : (M.kind === "winter" ? 0xBBC6D2 : 0x445544));
    hemi.intensity = M.night ? 0.55 : 1.15;
    sun.color.set(M.kind === "desert" ? 0xFFD0A0 : (M.night ? 0x8899FF : 0xffffff));
    sun.intensity = 2.4 * M.sun;

    // podłoże i jezdnie
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(WORLD + 1600, WORLD + 1600), new THREE.MeshStandardMaterial({ color: M.ground, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2; ground.position.set(WORLD / 2, 0, WORLD / 2); ground.receiveShadow = true;
    world.add(ground);
    const roadMat = new THREE.MeshStandardMaterial({ color: M.road, roughness: 0.92 });
    for (let k = 0; k <= N; k++) {
        const v = new THREE.Mesh(new THREE.BoxGeometry(RW * 2, 0.04, WORLD + RW * 2), roadMat);
        v.position.set(k * B, 0.02, WORLD / 2); v.receiveShadow = true;
        const h = new THREE.Mesh(new THREE.BoxGeometry(WORLD + RW * 2, 0.05, RW * 2), roadMat);
        h.position.set(WORLD / 2, 0.025, k * B); h.receiveShadow = true;
        world.add(v, h);
    }
    // przerywana linia środkowa i chodniki na każdym odcinku między skrzyżowaniami
    const dash = [], walks = [];
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
        [[1, 0], [0, 1]].forEach(([dx, dz]) => {
            if (i + dx > N || j + dz > N) return;
            const x0 = i * B, z0 = j * B;
            for (let t = RW + 4; t < B - RW - 3; t += 9) dash.push([x0 + dx * (t + 2), z0 + dz * (t + 2), dx]);
            if (M.kind === "city" || M.kind === "neon") [-1, 1].forEach((side) => walks.push([x0 + dx * B / 2 + dz * side * (RW + 1.3), z0 + dz * B / 2 + dx * side * (RW + 1.3), dx]));
        });
    }
    const dashMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.22, 0.02, 4), new THREE.MeshBasicMaterial({ color: M.line }), dash.length);
    dash.forEach(([x, z, horiz], k) => { q4.setFromAxisAngle(UP, horiz ? Math.PI / 2 : 0); m4.compose(p3.set(x, 0.07, z), q4, s3.set(1, 1, 1)); dashMesh.setMatrixAt(k, m4); });
    world.add(dashMesh);
    if (walks.length) {
        const walkMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(2.6, 0.18, B - RW * 2 - 1), new THREE.MeshStandardMaterial({ color: M.night ? "#2C2F3A" : "#C9CDD3", roughness: 1 }), walks.length);
        walks.forEach(([x, z, horiz], k) => { q4.setFromAxisAngle(UP, horiz ? Math.PI / 2 : 0); m4.compose(p3.set(x, 0.09, z), q4, s3.set(1, 1, 1)); walkMesh.setMatrixAt(k, m4); });
        walkMesh.receiveShadow = true;
        world.add(walkMesh);
    }

    // stacje paliw w stałych kwartałach
    const half = Math.floor(N / 2);
    const stationBlocks = [[0, 0], [N - 2, half - 1], [half, N - 2], [N - 3, 1]];
    const stationSet = new Set(stationBlocks.map((b) => b.join(",")));
    stationBlocks.forEach(([i, j]) => buildStation(i * B + RW + 18, j * B + RW + 20, M));

    // zawartość kwartałów zależna od mapy
    const boxes = [], trees = [], rocks = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
        if (stationSet.has(i + "," + j)) continue;
        const x0 = i * B + RW + 3, z0 = j * B + RW + 3, size = B - RW * 2 - 6, r = R();
        const lots = (n, hMin, hMax, fill) => { // podział kwartału na działki z budynkami
            const cell = size / n;
            for (let a = 0; a < n; a++) for (let b = 0; b < n; b++) {
                if (R() > fill) continue;
                const w = cell * (0.55 + R() * 0.35), d = cell * (0.55 + R() * 0.35), h = hMin + R() * (hMax - hMin);
                boxes.push({ x: x0 + cell * (a + 0.5), z: z0 + cell * (b + 0.5), w, d, h });
            }
        };
        const scatter = (count, kind) => { for (let k = 0; k < count; k++) trees.push({ x: x0 + 3 + R() * (size - 6), z: z0 + 3 + R() * (size - 6), kind, s: 0.8 + R() * 0.6 }); };
        if (M.kind === "city") { if (r < 0.82) lots(2, 10, 46, 0.95); else scatter(14, "round"); }
        else if (M.kind === "neon") { if (r < 0.88) lots(2, 22, 85, 0.95); else scatter(6, "round"); }
        else if (M.kind === "forest") { if (r < 0.55) scatter(26, R() < 0.5 ? "pine" : "round"); else if (r < 0.8) { lots(3, 5, 8, 0.3); scatter(6, "round"); } }
        else if (M.kind === "winter") { if (r < 0.6) scatter(26, "snowpine"); else if (r < 0.85) { lots(3, 4, 7, 0.25); scatter(10, "snowpine"); } }
        else if (M.kind === "desert") { if (r < 0.5) scatter(9, "cactus"); else if (r < 0.75) rocks.push({ x: x0 + size / 2, z: z0 + size / 2, s: 8 + R() * 10 }); else lots(3, 4, 7, 0.3); }
    }

    // budynki: jeden InstancedMesh, okna na ścianach, gładki dach
    if (boxes.length) {
        const wall = windowTexture(!!M.night);
        const side = new THREE.MeshStandardMaterial({ map: wall, roughness: 0.85, emissive: M.night ? 0xffffff : 0x000000, emissiveMap: M.night ? wall : null, emissiveIntensity: M.night ? 0.9 : 0 });
        const roof = new THREE.MeshStandardMaterial({ color: M.night ? "#191A22" : "#8E949C", roughness: 1 });
        const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), [side, side, roof, roof, side, side], boxes.length);
        const col = new THREE.Color();
        const tones = M.kind === "desert" ? ["#E8C39A", "#D9A877", "#F0D5B0"] : M.kind === "winter" || M.kind === "forest" ? ["#B98B5E", "#C7A27C", "#E9E1D3", "#A0522D"] : ["#FFFFFF", "#E8E2D6", "#D5DCE6", "#F2D9C9", "#CFD8CF"];
        boxes.forEach((b, k) => {
            m4.compose(p3.set(b.x, b.h / 2, b.z), q4.identity(), s3.set(b.w, b.h, b.d));
            mesh.setMatrixAt(k, m4);
            mesh.setColorAt(k, col.set(M.night ? "#FFFFFF" : tones[k % tones.length]));
            addCollider({ type: "box", minX: b.x - b.w / 2, maxX: b.x + b.w / 2, minZ: b.z - b.d / 2, maxZ: b.z + b.d / 2 });
        });
        mesh.castShadow = true; mesh.receiveShadow = true;
        world.add(mesh);
    }
    buildTrees(trees, M);
    if (rocks.length) {
        const rock = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: "#B7703F", roughness: 1, flatShading: true }), rocks.length);
        rocks.forEach((r, k) => { m4.compose(p3.set(r.x, r.s * 0.45, r.z), q4.setFromAxisAngle(UP, k), s3.set(r.s, r.s * 0.9, r.s * 0.8)); rock.setMatrixAt(k, m4); addCollider({ type: "circle", x: r.x, z: r.z, r: r.s * 0.85 }); });
        rock.castShadow = true;
        world.add(rock);
    }
    // latarnie na skrzyżowaniach (miasta)
    if (M.kind === "city" || M.kind === "neon") {
        const n = (N + 1) * (N + 1);
        const pole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.15, 6, 6), new THREE.MeshStandardMaterial({ color: "#3A3D45" }), n);
        const lamp = new THREE.InstancedMesh(new THREE.SphereGeometry(0.45, 10, 8), new THREE.MeshBasicMaterial({ color: M.night ? "#FFE6A8" : "#F5F5F5" }), n);
        let k = 0;
        for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
            m4.compose(p3.set(i * B + RW + 1.2, 3, j * B + RW + 1.2), q4.identity(), s3.set(1, 1, 1)); pole.setMatrixAt(k, m4);
            m4.compose(p3.set(i * B + RW + 1.2, 6.1, j * B + RW + 1.2), q4.identity(), s3.set(1, 1, 1)); lamp.setMatrixAt(k, m4);
            k++;
        }
        world.add(pole, lamp);
    }

    // monety i kanistry na jezdniach
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
        [[1, 0], [0, 1]].forEach(([dx, dz]) => {
            if (i + dx > N || j + dz > N) return;
            const x = i * B, z = j * B;
            if (R() < 0.16) {
                const side = R() < 0.5 ? -1 : 1;
                [0.38, 0.5, 0.62].forEach((t) => coins.push({ x: x + dx * B * t + dz * side * LANE, z: z + dz * B * t + dx * side * LANE, alive: true, timer: 0 }));
            } else if (R() < 0.05) {
                cans.push({ x: x + dx * B * 0.5 + dz * LANE, z: z + dz * B * 0.5 + dx * LANE, alive: true, timer: 0 });
            }
        });
    }
    coinMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.75, 0.75, 0.16, 20), new THREE.MeshStandardMaterial({ color: "#F5C542", metalness: 0.7, roughness: 0.3, emissive: "#6B4E00", emissiveIntensity: M.night ? 0.8 : 0.25 }), Math.max(1, coins.length));
    canMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.9, 1.2, 0.5), new THREE.MeshStandardMaterial({ color: "#E5372E", roughness: 0.5, emissive: "#5A0E0A", emissiveIntensity: M.night ? 0.8 : 0.2 }), Math.max(1, cans.length));
    coinMesh.count = coins.length; canMesh.count = cans.length;
    coinMesh.castShadow = true; canMesh.castShadow = true;
    world.add(coinMesh, canMesh);

    // ruch uliczny
    for (let k = 0; k < M.traffic; k++) spawnTraffic(R);
    updateTraffic(0);

    // śnieg na mapie zimowej
    snow = null;
    if (M.kind === "winter") {
        const n = 1400, pos = new Float32Array(n * 3);
        for (let k = 0; k < n; k++) { pos[k * 3] = (Math.random() - 0.5) * 140; pos[k * 3 + 1] = Math.random() * 50; pos[k * 3 + 2] = (Math.random() - 0.5) * 140; }
        const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        const dot = document.createElement("canvas"); dot.width = dot.height = 32; // okrągły płatek zamiast kwadratu
        const dg = dot.getContext("2d"), grad = dg.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, "rgba(255,255,255,1)"); grad.addColorStop(1, "rgba(255,255,255,0)");
        dg.fillStyle = grad; dg.fillRect(0, 0, 32, 32);
        snow = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 0.22, map: new THREE.CanvasTexture(dot), transparent: true, depthWrite: false }));
        world.add(snow);
    }
    buildMinimap(M);
}

function buildTrees(list, M) {
    if (!list.length) return;
    const kinds = {
        pine: { trunkH: 2, crown: () => new THREE.ConeGeometry(2.2, 6.5, 8), y: 5.2, color: "#2F6A39" },
        round: { trunkH: 2.6, crown: () => new THREE.IcosahedronGeometry(2.6, 0), y: 4.6, color: M.kind === "city" ? "#4E8B4A" : "#3E7D45" },
        snowpine: { trunkH: 1.8, crown: () => new THREE.ConeGeometry(2.3, 6.8, 8), y: 5, color: "#E6EEF2" },
        cactus: { trunkH: 0, crown: () => new THREE.CylinderGeometry(0.45, 0.55, 4.5, 8), y: 2.25, color: "#4F8A3C" }
    };
    const trunk = list.filter((t) => kinds[t.kind].trunkH);
    if (trunk.length) {
        const tm = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.25, 0.35, 1, 6), new THREE.MeshStandardMaterial({ color: "#6B4A33", roughness: 1 }), trunk.length);
        trunk.forEach((t, k) => { const h = kinds[t.kind].trunkH * t.s; m4.compose(p3.set(t.x, h / 2, t.z), q4.identity(), s3.set(t.s, h, t.s)); tm.setMatrixAt(k, m4); });
        tm.castShadow = true;
        world.add(tm);
    }
    Object.keys(kinds).forEach((k) => {
        const items = list.filter((t) => t.kind === k);
        if (!items.length) return;
        const K = kinds[k];
        const mesh = new THREE.InstancedMesh(K.crown(), new THREE.MeshStandardMaterial({ color: K.color, roughness: 1, flatShading: true }), items.length);
        items.forEach((t, n) => { m4.compose(p3.set(t.x, K.y * t.s, t.z), q4.identity(), s3.set(t.s, t.s, t.s)); mesh.setMatrixAt(n, m4); addCollider({ type: "circle", x: t.x, z: t.z, r: k === "cactus" ? 0.7 : 0.6 * t.s }); });
        mesh.castShadow = true;
        world.add(mesh);
    });
}

function buildStation(x, z, M) {
    const g = new THREE.Group();
    const mat = (c, e) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, emissive: e || 0x000000, emissiveIntensity: e ? 1 : 0 });
    const pad = new THREE.Mesh(new THREE.BoxGeometry(30, 0.06, 26), mat("#6E737C")); pad.position.set(0, 0.03, 0); pad.receiveShadow = true;
    const roof = new THREE.Mesh(new THREE.BoxGeometry(18, 0.8, 12), mat("#F4F4F4", M.night ? "#BFF5CF" : null)); roof.position.set(0, 6, 0); roof.castShadow = true;
    const band = new THREE.Mesh(new THREE.BoxGeometry(18.2, 0.5, 12.2), mat("#1F9D55", M.night ? "#1F9D55" : null)); band.position.set(0, 5.5, 0);
    g.add(pad, roof, band);
    [[-7, -4.5], [7, -4.5], [-7, 4.5], [7, 4.5]].forEach(([px, pz]) => { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 6, 8), mat("#D9DDE3")); c.position.set(px, 3, pz); g.add(c); });
    [-3, 3].forEach((px) => { const pump = new THREE.Mesh(new THREE.BoxGeometry(1, 1.8, 0.8), mat("#1F9D55")); pump.position.set(px, 0.9, 0); pump.castShadow = true; g.add(pump); });
    const shop = new THREE.Mesh(new THREE.BoxGeometry(14, 4.5, 7), mat("#E8E2D6", M.night ? "#3A3420" : null)); shop.position.set(0, 2.25, 12); shop.castShadow = true;
    const sign = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.4, 0.4), mat("#1F9D55", "#1F9D55")); sign.position.set(-13, 7, -10);
    const signPole = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 6, 6), mat("#9AA0A8")); signPole.position.set(-13, 3, -10);
    const ring = new THREE.Mesh(new THREE.RingGeometry(10.5, 11.2, 48), new THREE.MeshBasicMaterial({ color: "#34C759", transparent: true, opacity: 0.55, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.08;
    g.add(shop, sign, signPole, ring);
    g.position.set(x, 0, z);
    world.add(g);
    stations.push({ x, z, r: 12 });
    addCollider({ type: "box", minX: x - 7, maxX: x + 7, minZ: z + 8.5, maxZ: z + 15.5 });
}

// ---------- modele aut ----------
function carMesh(spec, color) {
    const b = spec.body, g = new THREE.Group(), WR = 0.36;
    const paint = new THREE.MeshStandardMaterial({ color, metalness: 0.45, roughness: 0.35 });
    const glass = new THREE.MeshStandardMaterial({ color: "#1B2230", metalness: 0.6, roughness: 0.15 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(b.w, b.h, b.l), paint); body.position.y = WR + b.h / 2 + 0.05;
    const cab = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.84, b.cabH, b.cabL), glass); cab.position.set(0, WR + b.h + b.cabH / 2 + 0.05, b.cabZ);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.86, 0.08, b.cabL * 0.92), paint); roof.position.set(0, WR + b.h + b.cabH + 0.08, b.cabZ);
    [body, cab, roof].forEach((m) => { m.castShadow = true; });
    g.add(body, cab, roof);
    const wheels = [];
    const wGeo = new THREE.CylinderGeometry(WR, WR, 0.3, 14), wMat = new THREE.MeshStandardMaterial({ color: "#16181D", roughness: 0.9 });
    [[-1, 1], [1, 1], [-1, -1], [1, -1]].forEach(([sx, sz]) => {
        const holder = new THREE.Group(); holder.position.set(sx * (b.w / 2 - 0.08), WR, sz * (b.l / 2 - 0.72));
        const w = new THREE.Mesh(wGeo, wMat); w.rotation.z = Math.PI / 2; w.castShadow = true;
        const spinner = new THREE.Group(); spinner.add(w); holder.add(spinner); g.add(holder);
        wheels.push({ holder, spinner, front: sz > 0 });
    });
    const head = new THREE.MeshStandardMaterial({ color: "#FFF6D5", emissive: "#FFF1C1", emissiveIntensity: 1.2 });
    const tail = new THREE.MeshStandardMaterial({ color: "#7A1016", emissive: "#FF2A2A", emissiveIntensity: 0.6 });
    [-1, 1].forEach((sx) => {
        const h = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.06), head); h.position.set(sx * (b.w / 2 - 0.32), WR + b.h * 0.65, b.l / 2 + 0.02);
        const t = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.14, 0.06), tail); t.position.set(sx * (b.w / 2 - 0.3), WR + b.h * 0.7, -b.l / 2 - 0.02);
        g.add(h, t);
    });
    if (spec.id === "sport") { const sp = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.9, 0.08, 0.4), paint); sp.position.set(0, WR + b.h + 0.35, -b.l / 2 + 0.3); g.add(sp); }
    if (spec.id === "terenowka") {
        const rack = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.8, 0.12, b.cabL * 0.8), new THREE.MeshStandardMaterial({ color: "#222222" })); rack.position.set(0, WR + b.h + b.cabH + 0.22, b.cabZ); g.add(rack);
        const spare = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.28, 14), wMat); spare.rotation.x = Math.PI / 2; spare.position.set(0, WR + b.h * 0.8, -b.l / 2 - 0.16); g.add(spare);
    }
    if (spec.id === "elektryk") { const strip = new THREE.Mesh(new THREE.BoxGeometry(b.w * 0.9, 0.05, 0.05), new THREE.MeshStandardMaterial({ color: "#7AE7FF", emissive: "#7AE7FF", emissiveIntensity: 1.5 })); strip.position.set(0, WR + b.h * 0.75, b.l / 2 + 0.03); g.add(strip); }
    g.userData = { wheels, tail, WR };
    return g;
}

// ---------- gracz ----------
const P = { x: 0, z: 0, h: 0, vx: 0, vz: 0, steer: 0, speed: 0, mesh: null, light: null };
let camMode = 0, shake = 0;
function placePlayerMesh() {
    if (P.mesh) scene.remove(P.mesh);
    P.mesh = carMesh(carSpec(), carSpec().color);
    scene.add(P.mesh);
    if (P.light) { scene.remove(P.light, P.light.target); P.light = null; }
    if (mapSpec().night) { // reflektory na nocnej mapie
        P.light = new THREE.SpotLight(0xFFF1D0, 90, 70, 0.55, 0.5, 1.2);
        scene.add(P.light, P.light.target);
    }
}
function loadPosition() {
    const s = S.pos[S.map];
    if (s && isFinite(s.x)) { P.x = s.x; P.z = s.z; P.h = s.h; }
    else { P.x = B - LANE; P.z = 38; P.h = 0; } // na wewnętrznej ulicy, stacja po prawej stronie
    P.vx = P.vz = 0; P.steer = 0; P.speed = 0;
}
function storePosition() { S.pos[S.map] = { x: +P.x.toFixed(1), z: +P.z.toFixed(1), h: +P.h.toFixed(3) }; }

// ---------- ruch uliczny ----------
function spawnTraffic(R) {
    const spec = CARS[Math.floor(R() * CARS.length)];
    const mesh = carMesh(spec, PALETTE[Math.floor(R() * PALETTE.length)]);
    const i = Math.floor(R() * (N + 1)), j = Math.floor(R() * (N + 1));
    const t = { a: [i, j], b: null, s: R() * B * 0.8, v: 0, vmax: 9 + R() * 6, mesh, len: spec.body.l, wait: 0, x: null, z: null };
    t.b = nextNode(t.a, null, R);
    world.add(mesh);
    traffic.push(t);
}
function nextNode(a, from, R) {
    const opts = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dz]) => [a[0] + dx, a[1] + dz])
        .filter(([i, j]) => i >= 0 && j >= 0 && i <= N && j <= N && !(from && i === from[0] && j === from[1]));
    return opts.length ? opts[Math.floor((R || Math.random)() * opts.length)] : from;
}
function updateTraffic(dt) {
    traffic.forEach((t) => {
        const dx = t.b[0] - t.a[0], dz = t.b[1] - t.a[1];
        const rx = -dz, rz = dx; // prawy pas (ruch prawostronny)
        const x = t.a[0] * B + dx * t.s + rx * LANE, z = t.a[1] * B + dz * t.s + rz * LANE;
        // zatrzymaj się, gdy gracz stoi na pasie przed autem
        const px = P.x - x, pz = P.z - z, ahead = px * dx + pz * dz, side = Math.abs(px * rx + pz * rz);
        const target = ahead > 0 && ahead < 14 && side < 2.6 ? 0 : t.vmax;
        if (t.wait > 0) t.wait -= dt;
        t.v += clamp(target - t.v, -14 * dt, 4 * dt);
        if (t.wait <= 0) t.s += t.v * dt;
        if (t.s >= B) { t.s -= B; const prev = t.a; t.a = t.b; t.b = nextNode(t.a, prev); }
        t.mesh.position.set(x, 0, z);
        const goal = Math.atan2(dx, dz);
        let d = goal - t.mesh.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d));
        t.mesh.rotation.y += dt ? d * Math.min(1, dt * 8) : d; // płynny obrót na skrzyżowaniu
        t.mesh.userData.wheels.forEach((w) => { w.spinner.rotation.x += t.v * dt / t.mesh.userData.WR; });
        t.x = x; t.z = z;
    });
}

// ---------- sterowanie ----------
const keys = { left: false, right: false, gas: false, brake: false, hand: false };
const KEYMAP = { ArrowLeft: "left", a: "left", A: "left", ArrowRight: "right", d: "right", D: "right",
    ArrowUp: "gas", w: "gas", W: "gas", ArrowDown: "brake", s: "brake", S: "brake", " ": "hand" };
let state = "ready"; // ready | run | pause
const inField = (e, sel) => (e.target && e.target.closest ? e.target.closest(sel) : null);
document.addEventListener("keydown", (e) => {
    if (inField(e, "input, textarea, select") || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "Enter" && state !== "run") { if (!inField(e, "button, a")) { e.preventDefault(); start(); } return; }
    if (e.key === "p" || e.key === "P" || e.key === "Escape") { if (state === "run") pause(); else if (state === "pause") start(); return; }
    if (state !== "run") return;
    if (e.key === "e" || e.key === "E") { const b = $("prompt").querySelector("button:not(:disabled)"); if (b && !$("prompt").hidden) b.click(); return; }
    if (e.key === "r" || e.key === "R") { toRoad(); return; }
    if (e.key === "c" || e.key === "C") { camMode = (camMode + 1) % CAMS.length; return; }
    const k = KEYMAP[e.key];
    if (!k) return;
    if (k === "hand" && inField(e, "button, a")) return;
    e.preventDefault();
    keys[k] = true;
});
document.addEventListener("keyup", (e) => { const k = KEYMAP[e.key]; if (k) keys[k] = false; });
document.querySelectorAll("[data-ctrl]").forEach((b) => {
    const k = b.dataset.ctrl;
    const down = (e) => { e.preventDefault(); if (state !== "run") return; b.classList.add("is-down"); keys[k] = true; };
    const up = () => { b.classList.remove("is-down"); keys[k] = false; };
    b.addEventListener("pointerdown", down);
    ["pointerup", "pointerleave", "pointercancel"].forEach((ev) => b.addEventListener(ev, up));
    b.addEventListener("contextmenu", (e) => e.preventDefault());
});

function toRoad() { // przestaw auto na najbliższą jezdnię
    const gx = Math.round(P.x / B) * B, gz = Math.round(P.z / B) * B;
    if (Math.abs(P.x - gx) < Math.abs(P.z - gz)) { P.x = gx - LANE; P.z = clamp(P.z, 0, WORLD); P.h = 0; } // jazda na południe, prawy pas
    else { P.z = gz + LANE; P.x = clamp(P.x, 0, WORLD); P.h = Math.PI / 2; }
    P.vx = P.vz = 0; P.speed = 0;
    message("Wróciłeś na drogę");
}

// ---------- fizyka gracza ----------
let lastEmpty = false;
function updatePlayer(dt) {
    const car = carSpec(), M = mapSpec(), st = cs();
    const broken = st.dmg >= 100, empty = st.fuel <= 0;
    const fx = Math.sin(P.h), fz = Math.cos(P.h);
    let vf = P.vx * fx + P.vz * fz;
    let lx = P.vx - fx * vf, lz = P.vz - fz * vf;
    const paved = onRoad(P.x, P.z) || !!inStation(P.x, P.z);
    const rough = !paved && !car.offroad;
    const vmax = car.vmax / 3.6 * (rough ? 0.5 : 1) * (broken ? 0 : 1) * (st.dmg > 70 ? 0.8 : 1);

    if (keys.gas && !empty && !broken) vf += car.accel * Math.max(0, 1 - Math.max(0, vf) / vmax) * dt;
    if (keys.brake) vf = vf > 0.5 ? vf - 16 * dt * M.friction : Math.max(vf - 5 * dt, -8);
    if (!keys.gas && !keys.brake) vf -= Math.sign(vf) * Math.min(Math.abs(vf), 1.6 * dt);
    vf -= vf * (0.06 + (rough ? 0.9 : 0)) * dt;
    if (vf > vmax) vf -= (vf - vmax) * Math.min(1, dt * 2);
    if (keys.hand) vf -= Math.sign(vf) * Math.min(Math.abs(vf), 5 * dt);

    // skręt słabnie przy dużej prędkości; na wstecznym kierownica działa odwrotnie
    const input = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    P.steer += (input - P.steer) * Math.min(1, dt * 7);
    const turn = P.steer * car.handling * 2.1 * clamp(vf / 5, -1, 1) / (1 + Math.abs(vf) / 26);
    P.h -= turn * dt;

    // przyczepność boczna: na śniegu i z ręcznym auto ślizga się w bok
    const keep = Math.exp(-car.grip * M.friction * (keys.hand ? 0.9 : 7) * dt);
    lx *= keep; lz *= keep;
    P.vx = Math.sin(P.h) * vf + lx; P.vz = Math.cos(P.h) * vf + lz;

    const ox = P.x, oz = P.z;
    P.x += P.vx * dt; P.z += P.vz * dt;
    collide(car);
    const lim = 60; // granica świata
    if (P.x < -lim || P.x > WORLD + lim || P.z < -lim || P.z > WORLD + lim) {
        P.x = clamp(P.x, -lim, WORLD + lim); P.z = clamp(P.z, -lim, WORLD + lim); P.vx *= -0.3; P.vz *= -0.3;
        message("Dalej nic nie ma — zawróć", "bad");
    }

    // spalanie i licznik kilometrów
    const moved = Math.hypot(P.x - ox, P.z - oz);
    if (moved > 0) {
        st.fuel = Math.max(0, st.fuel - car.cons * moved / 1000 * (keys.gas ? 1 : 0.35));
        S.km += moved / 1000;
    }
    if (empty && !lastEmpty) message("Skończyło się paliwo!", "bad");
    lastEmpty = empty;
    P.speed = P.vx * Math.sin(P.h) + P.vz * Math.cos(P.h);
}

function hit(impact, car) {
    if (impact < 2.5) return;
    const st = cs();
    st.dmg = Math.min(100, st.dmg + impact * 2.2 / car.dur);
    if (!reduceMotion.matches) shake = Math.min(0.6, impact * 0.04);
    if (navigator.vibrate && impact > 6) navigator.vibrate(40);
    if (st.dmg >= 100) message("Auto rozbite!", "bad");
}
function collide(car) {
    const R0 = Math.max(car.body.w, car.body.l) * 0.42;
    const bi = Math.floor(P.x / B), bj = Math.floor(P.z / B);
    for (let a = bi - 1; a <= bi + 1; a++) for (let b = bj - 1; b <= bj + 1; b++) {
        const list = colliders[a + "," + b];
        if (!list) continue;
        for (const c of list) {
            if (c.type === "box") {
                if (P.x > c.minX - R0 && P.x < c.maxX + R0 && P.z > c.minZ - R0 && P.z < c.maxZ + R0) {
                    const pl = P.x - (c.minX - R0), pr = c.maxX + R0 - P.x, pt = P.z - (c.minZ - R0), pb = c.maxZ + R0 - P.z;
                    const m = Math.min(pl, pr, pt, pb);
                    let impact;
                    if (m === pl || m === pr) { P.x += m === pl ? -pl : pr; impact = Math.abs(P.vx); P.vx *= -0.3; P.vz *= 0.8; }
                    else { P.z += m === pt ? -pt : pb; impact = Math.abs(P.vz); P.vz *= -0.3; P.vx *= 0.8; }
                    hit(impact, car);
                }
            } else {
                const dx = P.x - c.x, dz = P.z - c.z, d = Math.hypot(dx, dz), min = c.r + R0 * 0.8;
                if (d < min && d > 0.001) {
                    const nx = dx / d, nz = dz / d, vn = P.vx * nx + P.vz * nz;
                    P.x = c.x + nx * min; P.z = c.z + nz * min;
                    if (vn < 0) { P.vx -= 1.3 * vn * nx; P.vz -= 1.3 * vn * nz; hit(-vn, car); }
                }
            }
        }
    }
    // zderzenia z ruchem ulicznym
    for (const t of traffic) {
        if (t.x == null) continue;
        const dx = P.x - t.x, dz = P.z - t.z, d = Math.hypot(dx, dz), min = R0 + t.len * 0.42;
        if (d < min && d > 0.001) {
            const nx = dx / d, nz = dz / d, vn = P.vx * nx + P.vz * nz;
            P.x = t.x + nx * min; P.z = t.z + nz * min;
            if (vn < 0) { P.vx -= 1.4 * vn * nx; P.vz -= 1.4 * vn * nz; hit(-vn + 2, car); t.wait = 1.2; }
        }
    }
}

// ---------- monety, kanistry, stacje, zlecenia ----------
const FLIP = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
let spin = 0, coinBurst = 0;
function updatePickups(dt) {
    spin += dt * 2.4;
    const st = cs(), car = carSpec();
    coins.forEach((c, k) => {
        if (!c.alive) { c.timer -= dt; if (c.timer <= 0) c.alive = true; }
        else if (Math.hypot(P.x - c.x, P.z - c.z) < 2.6) { c.alive = false; c.timer = 60; S.coins += 1; coinGain(1); }
        q4.setFromAxisAngle(UP, spin + k).multiply(FLIP);
        m4.compose(p3.set(c.x, 1.2 + Math.sin(spin * 1.5 + k) * 0.15, c.z), q4, c.alive ? s3.set(1, 1, 1) : s3.set(0, 0, 0));
        coinMesh.setMatrixAt(k, m4);
    });
    coinMesh.instanceMatrix.needsUpdate = true;
    cans.forEach((c, k) => {
        if (!c.alive) { c.timer -= dt; if (c.timer <= 0) c.alive = true; }
        else if (Math.hypot(P.x - c.x, P.z - c.z) < 2.8) {
            c.alive = false; c.timer = 90;
            const add = Math.min(15, car.tank - st.fuel);
            st.fuel += add; message("Kanister: +" + Math.round(add) + " L paliwa", "good");
        }
        m4.compose(p3.set(c.x, 0.6, c.z), q4.setFromAxisAngle(UP, spin * 0.5 + k), c.alive ? s3.set(1, 1, 1) : s3.set(0, 0, 0));
        canMesh.setMatrixAt(k, m4);
    });
    canMesh.instanceMatrix.needsUpdate = true;
}
function coinGain(n) { coinBurst += n; message("+" + coinBurst + (coinBurst === 1 ? " moneta" : coinBurst < 5 ? " monety" : " monet"), "good"); }

let job = null, beam = null, arrow = null;
function makeJobMarkers() {
    beam = new THREE.Group();
    const col = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 70, 24, 1, true), new THREE.MeshBasicMaterial({ color: "#FFD54A", transparent: true, opacity: 0.28, depthWrite: false, side: THREE.DoubleSide }));
    col.position.y = 35;
    const ring = new THREE.Mesh(new THREE.RingGeometry(5.5, 6.5, 40), new THREE.MeshBasicMaterial({ color: "#FFD54A", transparent: true, opacity: 0.85, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.1;
    beam.add(col, ring); beam.visible = false; scene.add(beam);
    // płaska strzałka nad autem: grot wzdłuż +z, lekko uniesiona w stronę kamery, żeby było widać kształt
    const sh = new THREE.Shape();
    sh.moveTo(0, 1.1); sh.lineTo(0.85, 0.05); sh.lineTo(0.32, 0.05); sh.lineTo(0.32, -0.9); sh.lineTo(-0.32, -0.9); sh.lineTo(-0.32, 0.05); sh.lineTo(-0.85, 0.05); sh.closePath();
    const shape = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.14, bevelEnabled: false }), new THREE.MeshStandardMaterial({ color: "#FFD54A", emissive: "#FFB800", emissiveIntensity: 0.7 }));
    shape.rotation.x = Math.PI / 2 - 0.55;
    arrow = new THREE.Group(); arrow.add(shape); arrow.visible = false; scene.add(arrow);
}
function hideJob() { job = null; beam.visible = false; arrow.visible = false; renderJob(); }
function newJob() {
    let x, z, d, tries = 0;
    do { // cel przy jezdni, nie za blisko i nie za daleko od gracza
        const i = Math.floor(Math.random() * N), j = Math.floor(Math.random() * (N + 1)), horiz = Math.random() < 0.5;
        const off = (Math.random() < 0.5 ? -1 : 1) * (RW - 2);
        if (horiz) { x = i * B + B * (0.3 + Math.random() * 0.4); z = j * B + off; }
        else { x = j * B + off; z = i * B + B * (0.3 + Math.random() * 0.4); }
        d = Math.hypot(x - P.x, z - P.z);
    } while ((d < 220 || d > 900) && ++tries < 40);
    const reward = Math.round(15 + d / 18), time = Math.round(d / 11 + 25);
    job = { x, z, reward, time, left: time, name: PLACES[Math.floor(Math.random() * PLACES.length)] };
    beam.position.set(x, 0, z); beam.visible = true; arrow.visible = true;
    message("Nowe zlecenie: " + job.name, "good");
    renderJob();
}
function endJob(ok) {
    if (ok) { S.coins += job.reward; S.jobs += 1; message("Dostarczone! +" + job.reward + " monet", "good"); }
    else message("Za późno — zlecenie przepadło", "bad");
    hideJob(); save();
}
function updateJob(dt) {
    if (!job) return;
    job.left -= dt;
    const d = Math.hypot(job.x - P.x, job.z - P.z);
    if (d < 7 && Math.abs(P.speed) < 6) { endJob(true); return; }
    if (job.left <= 0) { endJob(false); return; }
    arrow.position.set(P.x, 3.3 + carSpec().body.h, P.z);
    arrow.rotation.y = Math.atan2(job.x - P.x, job.z - P.z);
    beam.children[1].scale.setScalar(1 + Math.sin(performance.now() / 300) * 0.06);
    const t = $("hTask"), s = Math.max(0, Math.ceil(job.left));
    t.hidden = false;
    t.textContent = job.name + " · " + (d >= 1000 ? (d / 1000).toFixed(1).replace(".", ",") + " km" : Math.round(d) + " m") +
        " · " + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0") + " · " + job.reward + " monet";
}
function renderJob() {
    if (job) {
        $("jobText").innerHTML = "";
        $("jobText").append("Dowieź paczkę do: ", Object.assign(document.createElement("b"), { textContent: job.name }),
            ". Nagroda: ", Object.assign(document.createElement("b"), { textContent: job.reward + " monet" }), ". Zatrzymaj się w złotym kręgu.");
        $("jobBtn").textContent = "Anuluj zlecenie";
        $("jobLabel").textContent = "w drodze";
    } else {
        $("hTask").hidden = true;
        $("jobText").textContent = "Odbierz zlecenie i dowieź paczkę na czas. Cel pokaże złota kolumna, strzałka nad autem i minimapa.";
        $("jobBtn").textContent = "Weź zlecenie";
        $("jobLabel").textContent = "kurier";
    }
}
$("jobBtn").addEventListener("click", () => {
    if (job) { hideJob(); message("Zlecenie anulowane"); }
    else { newJob(); if (state !== "run") start(); }
});

// podpowiedzi kontekstowe: stacja, brak paliwa, rozbite auto
let promptKey = "";
function setPrompt(key, text, actions) {
    const el = $("prompt");
    if (!key) { if (!el.hidden) { el.hidden = true; promptKey = ""; } return; }
    if (key === promptKey) return;
    promptKey = key;
    el.textContent = "";
    el.appendChild(Object.assign(document.createElement("p"), { textContent: text }));
    actions.forEach((a, i) => {
        const b = document.createElement("button");
        b.type = "button"; b.className = "btn btn-sm " + (i ? "btn-secondary" : "btn-primary"); b.disabled = !!a.disabled;
        b.textContent = a.label;
        if (!i) b.appendChild(Object.assign(document.createElement("kbd"), { textContent: "E" }));
        b.addEventListener("click", () => { a.run(); promptKey = ""; save(); });
        el.appendChild(b);
    });
    el.hidden = false;
}
function nearestStation() { return stations.reduce((a, b) => (Math.hypot(a.x - P.x, a.z - P.z) < Math.hypot(b.x - P.x, b.z - P.z) ? a : b)); }
function updatePrompt() {
    const st = cs(), car = carSpec(), slow = Math.abs(P.speed) < 3;
    if (st.dmg >= 100) {
        const price = Math.min(40, S.coins);
        return setPrompt("broken" + price, "Auto jest rozbite.", [{ label: price ? "Holowanie do stacji (" + price + " monet)" : "Holowanie do stacji (za darmo)", run: () => {
            S.coins -= price;
            const s = nearestStation();
            P.x = s.x; P.z = s.z - 6; P.h = 0; P.vx = P.vz = 0; st.dmg = 50; st.fuel = Math.max(st.fuel, 8);
            message("Odholowano na stację");
        } }]);
    }
    if (inStation(P.x, P.z) && slow) {
        const needFuel = Math.max(0, car.tank - st.fuel), needDmg = st.dmg;
        const fuelCost = Math.min(Math.ceil(needFuel * FUEL_PRICE), S.coins), dmgCost = Math.min(Math.ceil(needDmg * REPAIR_PRICE), S.coins);
        const acts = [];
        if (needFuel >= 0.5) acts.push({ label: "Zatankuj (" + fuelCost + " monet)", disabled: !fuelCost, run: () => {
            const l = Math.min(needFuel, fuelCost / FUEL_PRICE);
            st.fuel = Math.min(car.tank, st.fuel + l); S.coins -= fuelCost;
            message(st.fuel >= car.tank - 0.5 ? "Bak pełny" : "Zatankowano " + Math.round(l) + " L", "good");
        } });
        if (needDmg >= 0.5) acts.push({ label: "Napraw (" + dmgCost + " monet)", disabled: !dmgCost, run: () => {
            st.dmg = Math.max(0, st.dmg - dmgCost / REPAIR_PRICE); S.coins -= dmgCost;
            message(st.dmg <= 0 ? "Auto jak nowe" : "Naprawiono część usterek", "good");
        } });
        if (acts.length) return setPrompt("station" + fuelCost + "/" + dmgCost, "Stacja paliw", acts);
        return setPrompt("stationfull", "Bak pełny, auto sprawne.", []);
    }
    if (st.fuel <= 0 && slow) {
        const paid = S.coins >= 25;
        return setPrompt("empty" + paid, "Brak paliwa.", [{ label: paid ? "Pomoc drogowa: +15 L (25 monet)" : "Pomoc drogowa: +8 L (za darmo)", run: () => {
            if (paid) { S.coins -= 25; st.fuel = 15; } else st.fuel = 8;
            message("Pomoc drogowa dowiozła paliwo", "good");
        } }]);
    }
    setPrompt("");
}

// ---------- komunikaty i HUD ----------
let msgTimer;
function message(text, kind) {
    const el = $("msg");
    el.textContent = text;
    el.className = "hud-msg show" + (kind ? " " + kind : "");
    clearTimeout(msgTimer);
    msgTimer = setTimeout(() => { el.className = "hud-msg" + (kind ? " " + kind : ""); coinBurst = 0; }, 1500);
}
const shown = {};
function setText(id, v) { if (shown[id] !== v) { shown[id] = v; $(id).textContent = v; } }
function hud() {
    const st = cs(), car = carSpec(), fuelPct = st.fuel / car.tank * 100;
    setText("hCoins", fmt(S.coins));
    setText("hSpeed", String(Math.round(Math.abs(P.speed) * 3.6)));
    $("hFuelBar").style.width = fuelPct + "%";
    $("hFuelBar").classList.toggle("is-low", fuelPct < 20);
    $("hDmgBar").style.width = st.dmg + "%";
    setText("sCoins", fmt(S.coins));
    setText("sFuel", Math.round(st.fuel) + " / " + car.tank);
    setText("sDmg", String(Math.round(st.dmg)));
    setText("sKm", S.km.toFixed(1).replace(".", ","));
    setText("sJobs", String(S.jobs));
}

// ---------- minimapa ----------
const mini = $("mini"), mctx = mini.getContext("2d");
let miniBg = null;
function buildMinimap(M) {
    const size = 280; miniBg = document.createElement("canvas"); miniBg.width = miniBg.height = size;
    const g = miniBg.getContext("2d"), k = size / (WORLD + 60);
    g.fillStyle = M.night ? "#101119" : "#1E2330"; g.fillRect(0, 0, size, size);
    g.strokeStyle = M.night ? "#4A4F6A" : "#8B93A3"; g.lineWidth = Math.max(2, RW * 2 * k);
    for (let i = 0; i <= N; i++) {
        g.beginPath(); g.moveTo((i * B + 30) * k, 30 * k); g.lineTo((i * B + 30) * k, (WORLD + 30) * k); g.stroke();
        g.beginPath(); g.moveTo(30 * k, (i * B + 30) * k); g.lineTo((WORLD + 30) * k, (i * B + 30) * k); g.stroke();
    }
    g.fillStyle = "#34C759";
    stations.forEach((s) => { g.beginPath(); g.arc((s.x + 30) * k, (s.z + 30) * k, 7, 0, Math.PI * 2); g.fill(); });
}
function drawMinimap() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2), px = Math.round(mini.clientWidth * dpr);
    if (!px) return;
    if (mini.width !== px) mini.width = mini.height = px;
    const k = px / (WORLD + 60), u = px / 140;
    mctx.drawImage(miniBg, 0, 0, px, px);
    mctx.fillStyle = "rgba(255,255,255,.6)";
    traffic.forEach((t) => { if (t.x != null) mctx.fillRect((t.x + 30) * k - u, (t.z + 30) * k - u, 2 * u, 2 * u); });
    if (job) {
        mctx.fillStyle = "#FFD54A"; mctx.strokeStyle = "#000"; mctx.lineWidth = u;
        mctx.beginPath(); mctx.arc((job.x + 30) * k, (job.z + 30) * k, 5 * u, 0, Math.PI * 2); mctx.fill(); mctx.stroke();
    }
    // gracz jako strzałka w kierunku jazdy (oś y minimapy = oś z świata)
    mctx.save();
    mctx.translate((P.x + 30) * k, (P.z + 30) * k); mctx.rotate(Math.PI - P.h);
    mctx.fillStyle = "#FFFFFF"; mctx.strokeStyle = "#0A6CFF"; mctx.lineWidth = 1.5 * u;
    const a = 6 * u;
    mctx.beginPath(); mctx.moveTo(0, -a); mctx.lineTo(a * 0.7, a * 0.8); mctx.lineTo(0, a * 0.4); mctx.lineTo(-a * 0.7, a * 0.8); mctx.closePath(); mctx.fill(); mctx.stroke();
    mctx.restore();
}

// ---------- kamera ----------
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
const CAMS = [[8.5, 3.6, 0.8], [14, 6.5, 1.2], [3.4, 1.9, 0.4]]; // za autem, wysoko, nisko
function updateCamera(dt, snap) {
    const fx = Math.sin(P.h), fz = Math.cos(P.h), [back, height, lookUp] = CAMS[camMode];
    const tx = P.x - fx * back, tz = P.z - fz * back, ty = height + carSpec().body.h * 0.5;
    const s = snap ? 1 : Math.min(1, dt * 4.5);
    camPos.set(camPos.x + (tx - camPos.x) * s, camPos.y + (ty - camPos.y) * s, camPos.z + (tz - camPos.z) * s);
    camera.position.copy(camPos);
    if (shake > 0) { camera.position.x += (Math.random() - 0.5) * shake; camera.position.y += (Math.random() - 0.5) * shake; shake = Math.max(0, shake - dt * 1.5); }
    camLook.set(P.x + fx * 6, lookUp + 1, P.z + fz * 6);
    camera.lookAt(camLook);
    const fov = 62 + clamp(Math.abs(P.speed) * 0.22, 0, 14); // szersze pole widzenia = odczucie prędkości
    if (Math.abs(camera.fov - fov) > 0.1) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); }
}

function syncScene(dt) {
    const m = P.mesh;
    m.position.set(P.x, 0, P.z);
    m.rotation.y = P.h;
    m.rotation.z = -P.steer * clamp(Math.abs(P.speed) / 30, 0, 1) * 0.06; // przechył na zakręcie
    m.userData.wheels.forEach((w) => {
        w.spinner.rotation.x += P.speed * dt / m.userData.WR;
        if (w.front) w.holder.rotation.y = -P.steer * 0.45;
    });
    m.userData.tail.emissiveIntensity = keys.brake ? 2.2 : 0.6;
    if (P.light) {
        P.light.position.set(P.x + Math.sin(P.h) * 1.5, 1.4, P.z + Math.cos(P.h) * 1.5);
        P.light.target.position.set(P.x + Math.sin(P.h) * 20, 0, P.z + Math.cos(P.h) * 20);
    }
    sun.position.set(P.x + 40, 90, P.z + 25); // cień podąża za autem
    sun.target.position.set(P.x, 0, P.z);
    if (snow) {
        snow.position.set(camera.position.x, 0, camera.position.z);
        const a = snow.geometry.attributes.position;
        for (let k = 0; k < a.count; k++) { let y = a.getY(k) - dt * 6; if (y < 0) y += 50; a.setY(k, y); }
        a.needsUpdate = true;
    }
}

// ---------- garaż i mapy ----------
function shopItem(icon, title, sub, price, selected, disabled, onClick) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "upgrade" + (selected ? " is-selected" : ""); b.disabled = disabled;
    const ico = Object.assign(document.createElement("span"), { className: "row-ico" }); ico.setAttribute("aria-hidden", "true"); ico.appendChild(icon);
    const text = Object.assign(document.createElement("span"), { className: "row-text" });
    text.append(Object.assign(document.createElement("span"), { className: "row-title", textContent: title }), Object.assign(document.createElement("span"), { className: "row-sub", textContent: sub }));
    const p = Object.assign(document.createElement("span"), { className: "price" + (price.cls ? " " + price.cls : ""), textContent: price.text });
    b.append(ico, text, p);
    b.addEventListener("click", onClick);
    return b;
}
function swatch(bg) { return Object.assign(document.createElement("span"), { className: "swatch-car", style: "background:" + bg }); }
function renderShop() {
    const g = $("garage"); g.textContent = "";
    CARS.forEach((c) => {
        const owned = S.cars.includes(c.id), sel = S.car === c.id;
        const sub = c.vmax + " km/h · bak " + c.tank + " L · wytrzymałość ×" + String(c.dur).replace(".", ",") + (c.offroad ? " · teren" : "") + ". " + c.desc;
        g.appendChild(shopItem(swatch(c.color), c.name, sub,
            sel ? { text: "Jedziesz", cls: "is-on" } : owned ? { text: "Wybierz", cls: "is-owned" } : { text: fmt(c.price) + " monet" },
            sel, sel || (!owned && S.coins < c.price), () => {
                if (!owned) { S.coins -= c.price; S.cars.push(c.id); S.carState[c.id] = { fuel: c.tank, dmg: 0 }; message("Kupiono: " + c.name, "good"); }
                S.car = c.id; placePlayerMesh(); save(); renderShop(); renderOnce();
            }));
    });
    const m = $("maps"); m.textContent = "";
    MAPS.forEach((mp) => {
        const owned = S.maps.includes(mp.id), sel = S.map === mp.id;
        m.appendChild(shopItem(swatch("linear-gradient(135deg," + mp.sky + " 50%," + mp.ground + " 50%)"), mp.name, mp.desc,
            sel ? { text: "Tutaj", cls: "is-on" } : owned ? { text: "Jedź", cls: "is-owned" } : { text: fmt(mp.price) + " monet" },
            sel, sel || (!owned && S.coins < mp.price), () => {
                if (!owned) { S.coins -= mp.price; S.maps.push(mp.id); message("Odblokowano: " + mp.name, "good"); }
                storePosition();
                S.map = mp.id; hideJob();
                buildWorld(); placePlayerMesh(); loadPosition(); updateCamera(0, true); save(); renderShop(); renderOnce();
            }));
    });
    shopCoins = S.coins;
}
let shopCoins = -1;
$("resetBtn").addEventListener("click", () => {
    if (!window.confirm("Usunąć cały postęp w grze Autostrada? Monety, auta i mapy przepadną.")) return;
    try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
    location.reload();
});

// ---------- pętla ----------
function resize() {
    const r = wrap.getBoundingClientRect();
    if (!r.width) return;
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
    renderOnce();
}
function renderOnce() { syncScene(0); updateCamera(0, true); drawMinimap(); hud(); renderer.render(scene, camera); }

let prev = null, saveTimer = 0, shopTimer = 0;
function loop(now) {
    if (state !== "run") return;
    const dt = prev == null ? 0 : Math.max(0, Math.min((now - prev) / 1000, 0.05));
    prev = now;
    updatePlayer(dt);
    updateTraffic(dt);
    updatePickups(dt);
    updateJob(dt);
    updatePrompt();
    syncScene(dt);
    updateCamera(dt);
    drawMinimap();
    hud();
    renderer.render(scene, camera);
    saveTimer += dt; shopTimer += dt;
    if (saveTimer > 3) { saveTimer = 0; storePosition(); save(); }
    if (shopTimer > 1) { shopTimer = 0; if (S.coins !== shopCoins) renderShop(); } // ceny w sklepie zależą od portfela
    requestAnimationFrame(loop);
}
function start() {
    if (state === "run") return;
    state = "run";
    overlay.hidden = true;
    $("pauseBtn").disabled = false; $("pauseBtn").textContent = "Pauza";
    prev = null;
    requestAnimationFrame(loop);
}
function pause() {
    if (state !== "run") return;
    state = "pause";
    Object.keys(keys).forEach((k) => { keys[k] = false; });
    storePosition(); save();
    $("pauseBtn").textContent = "Wznów";
    $("ovTitle").textContent = "Pauza";
    $("ovText").textContent = "Postęp jest zapisany. Naciśnij Enter albo przycisk, żeby jechać dalej.";
    $("startBtn").textContent = "Wznów jazdę";
    overlay.hidden = false;
}
$("startBtn").addEventListener("click", start);
$("pauseBtn").addEventListener("click", () => (state === "run" ? pause() : start()));
document.addEventListener("visibilitychange", () => { if (document.hidden) pause(); });
window.addEventListener("pagehide", () => { storePosition(); save(); });

// ---------- start ----------
buildWorld();
makeJobMarkers();
placePlayerMesh();
loadPosition();
renderShop();
renderJob();
if (S.km > 0.05) {
    $("ovTitle").textContent = "Witaj z powrotem";
    $("ovText").textContent = "Masz " + fmt(S.coins) + " monet i " + S.km.toFixed(1).replace(".", ",") + " km na liczniku. Auto czeka tam, gdzie je zostawiłeś.";
    $("startBtn").textContent = "Jedź dalej";
}
if (window.ResizeObserver) new ResizeObserver(resize).observe(wrap); else window.addEventListener("resize", resize);
resize();
})();
