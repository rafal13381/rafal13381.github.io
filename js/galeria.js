// Galeria prowadzona gestem: przesuw 1:1, rzut pędu, sprężyna krytycznie tłumiona, opór na krańcach.
// Bez JS galeria jest zwykłym poziomym przewijaniem ze scroll-snap (CSS). Ten skrypt ją tylko wzbogaca.
(function () {
    var DECELERATION = 0.998;   // jak przewijanie systemowe
    var RESPONSE = 0.4;         // s: jak szybko sprężyna dochodzi do celu (tłumienie 1.0, bez odbicia)
    var THRESHOLD = 10;         // px: próg rozpoznania kierunku gestu
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // rzut pędu: gdzie element by się zatrzymał, gdyby hamował jak przewijanie
    function project(velocity) { return (velocity / 1000) * DECELERATION / (1 - DECELERATION); }
    // miękki opór za krańcem
    function rubberband(overshoot, dimension) {
        var c = 0.55;
        return (overshoot * dimension * c) / (dimension + c * Math.abs(overshoot));
    }

    function Gallery(root) {
        this.track = root.querySelector(".gallery-track");
        this.rail = root.querySelector(".gallery-rail");
        this.items = Array.prototype.slice.call(root.querySelectorAll(".gallery-item"));
        this.prev = root.querySelector("[data-gallery-prev]");
        this.next = root.querySelector("[data-gallery-next]");
        if (!this.track || !this.rail || this.items.length < 2) return;

        this.x = 0; this.v = 0; this.index = 0;
        this.raf = 0; this.drag = null; this.wheelTimer = 0;

        this.track.scrollLeft = 0;
        this.track.classList.add("is-driven");
        this.measure();
        this.x = this.snaps[0];
        this.render();
        this.bind();
    }

    Gallery.prototype.measure = function () {
        var trackW = this.track.clientWidth;
        this.width = trackW;
        this.snaps = this.items.map(function (item) {
            return -(item.offsetLeft - (trackW - item.offsetWidth) / 2);
        });
        this.max = this.snaps[0];
        this.min = this.snaps[this.snaps.length - 1];
    };

    Gallery.prototype.nearest = function (x) {
        var best = 0, dist = Infinity;
        for (var i = 0; i < this.snaps.length; i++) {
            var d = Math.abs(this.snaps[i] - x);
            if (d < dist) { dist = d; best = i; }
        }
        return best;
    };

    // pozycja z oporem poza krańcami
    Gallery.prototype.bounded = function (x) {
        if (x > this.max) return this.max + rubberband(x - this.max, this.width);
        if (x < this.min) return this.min + rubberband(x - this.min, this.width);
        return x;
    };

    Gallery.prototype.render = function () {
        this.rail.style.transform = "translate3d(" + this.x.toFixed(2) + "px,0,0)";
        if (this.prev) this.prev.disabled = this.index === 0;
        if (this.next) this.next.disabled = this.index === this.snaps.length - 1;
    };

    Gallery.prototype.stop = function () {
        if (this.raf) cancelAnimationFrame(this.raf);
        this.raf = 0;
    };

    // sprężyna krytycznie tłumiona: x(t) = cel + (c1 + c2·t)·e^(−ωt), start z bieżącej pozycji i prędkości gestu
    Gallery.prototype.settle = function (index, velocity) {
        var self = this;
        this.stop();
        this.index = index;
        var target = this.snaps[index];
        if (reduceMotion.matches) { this.x = target; this.v = 0; this.render(); return; }
        var omega = 2 * Math.PI / RESPONSE;
        var c1 = this.x - target;
        var c2 = (velocity || 0) + omega * c1;
        var start = performance.now();
        function step(now) {
            var t = (now - start) / 1000;
            var e = Math.exp(-omega * t);
            self.x = target + (c1 + c2 * t) * e;
            self.v = (c2 - omega * (c1 + c2 * t)) * e;
            if (Math.abs(self.x - target) < 0.5 && Math.abs(self.v) < 5) {
                self.x = target; self.v = 0; self.raf = 0; self.render(); return;
            }
            self.render();
            self.raf = requestAnimationFrame(step);
        }
        this.raf = requestAnimationFrame(step);
        this.render();
    };

    Gallery.prototype.go = function (delta) {
        var i = Math.max(0, Math.min(this.snaps.length - 1, this.index + delta));
        this.settle(i, 0);
    };

    Gallery.prototype.bind = function () {
        var self = this, track = this.track;

        track.addEventListener("pointerdown", function (e) {
            if (e.button !== 0) return;
            self.stop(); // przerwanie: chwytamy z bieżącej (widocznej) pozycji
            self.drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, x0: self.x, axis: null, history: [{ x: e.clientX, t: e.timeStamp }] };
        });

        track.addEventListener("pointermove", function (e) {
            var d = self.drag;
            if (!d || e.pointerId !== d.id) return;
            var dx = e.clientX - d.sx, dy = e.clientY - d.sy;
            if (!d.axis) {
                if (Math.abs(dx) < THRESHOLD && Math.abs(dy) < THRESHOLD) return;
                d.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
                if (d.axis === "y") { self.drag = null; self.settle(self.nearest(self.x), 0); return; }
                track.setPointerCapture(d.id);
                track.classList.add("is-dragging");
                d.sx = e.clientX; d.x0 = self.x; // od progu ruch dokładnie 1:1
                dx = 0;
            }
            d.history.push({ x: e.clientX, t: e.timeStamp });
            if (d.history.length > 6) d.history.shift();
            self.x = self.bounded(d.x0 + dx);
            self.index = self.nearest(self.x);
            self.render();
        });

        function release(e) {
            var d = self.drag;
            if (!d || e.pointerId !== d.id) return;
            self.drag = null;
            track.classList.remove("is-dragging");
            if (d.axis !== "x") return;
            var h = d.history, a = h[0], b = h[h.length - 1];
            var dt = (b.t - a.t) / 1000;
            var v = dt > 0 && e.timeStamp - b.t < 80 ? (b.x - a.x) / dt : 0; // px/s, zero gdy palec stanął
            var target = self.nearest(Math.max(self.min, Math.min(self.max, self.x + project(v))));
            self.settle(target, v);
        }
        track.addEventListener("pointerup", release);
        track.addEventListener("pointercancel", release);

        // trackpad: przesuw poziomy 1:1, potem dociągnięcie do najbliższego kadru
        track.addEventListener("wheel", function (e) {
            if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
            e.preventDefault();
            self.stop();
            self.x = self.bounded(self.x - e.deltaX);
            self.index = self.nearest(self.x);
            self.render();
            clearTimeout(self.wheelTimer);
            self.wheelTimer = setTimeout(function () { self.settle(self.nearest(self.x), 0); }, 120);
        }, { passive: false });

        track.addEventListener("keydown", function (e) {
            if (e.key === "ArrowRight") { e.preventDefault(); self.go(1); }
            else if (e.key === "ArrowLeft") { e.preventDefault(); self.go(-1); }
            else if (e.key === "Home") { e.preventDefault(); self.settle(0, 0); }
            else if (e.key === "End") { e.preventDefault(); self.settle(self.snaps.length - 1, 0); }
        });
        if (this.prev) this.prev.addEventListener("click", function () { self.go(-1); });
        if (this.next) this.next.addEventListener("click", function () { self.go(1); });

        window.addEventListener("resize", function () {
            self.stop();
            self.measure();
            self.x = self.snaps[self.index];
            self.render();
        });
    };

    function init() {
        Array.prototype.forEach.call(document.querySelectorAll("[data-gallery]"), function (el) { new Gallery(el); });
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
