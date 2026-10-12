function pad(n) {
    return n < 10 ? "0" + n : n;
}

function pokazCzas() {
    var teraz = new Date();
    var czas = document.getElementById("czas");
    var data = document.getElementById("data");
    if (!czas) return;
    czas.innerHTML = teraz.getHours() + ":" + pad(teraz.getMinutes()) +
        '<span class="sec">' + pad(teraz.getSeconds()) + "</span>";
    data.textContent = teraz.toLocaleDateString("pl-PL", {
        weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    pokazCzas();
    setInterval(pokazCzas, 1000);
});
