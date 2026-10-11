let score = 0;
let multiplier = 1;
let autoClickerActive = false;
let autoClickerTimer = null;
let gameStarted = false;
let multiplierCost = 30;
let autoClickerCost = 50;
let taxInterval = 10;
let taxAmount = 5;
let timeLeft = taxInterval;

const startButton = document.getElementById("startButton");
const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");
const scoreDisplay = document.getElementById("score");
const multiplierDisplay = document.getElementById("multiplier");
const autoStateDisplay = document.getElementById("autoState");
const autoStat = document.getElementById("autoStat");
const multiplierUpgrade = document.getElementById("multiplierUpgrade");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");
const multiplierCostDisplay = document.getElementById("multiplierCost");
const autoClickerCostDisplay = document.getElementById("autoClickerCost");
const taxCountdownDisplay = document.getElementById("taxCountdown");
const taxAmountDisplay = document.getElementById("taxAmount");
const taxBar = document.getElementById("taxBar");
const toastEl = document.getElementById("toast");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function render() {
    scoreDisplay.textContent = score;
    multiplierDisplay.textContent = multiplier;
    multiplierCostDisplay.textContent = multiplierCost;
    autoClickerCostDisplay.textContent = autoClickerCost;
    autoStateDisplay.textContent = autoClickerActive ? "on" : "off";
    autoStat.classList.toggle("on", autoClickerActive);
    taxAmountDisplay.textContent = taxAmount;
    taxCountdownDisplay.textContent = timeLeft;
    taxBar.style.transform = "scaleX(" + timeLeft / taxInterval + ")";
}

// Krótki „puls” wyniku — Web Animations startuje od bieżącej wartości, więc szybkie kliki się nie zacinają
function bump() {
    if (reduceMotion) return;
    scoreDisplay.animate(
        [{ transform: "scale(1.06)" }, { transform: "scale(1)" }],
        { duration: 260, easing: "cubic-bezier(0.2, 0.9, 0.25, 1)" }
    );
}

let toastTimer = null;
function toast(message, danger) {
    toastEl.textContent = message;
    toastEl.classList.toggle("danger", !!danger);
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

function updateScore() {
    if (!gameStarted) return;
    score += multiplier;
    render();
    bump();
}

function resetScore() {
    score = 0;
    multiplier = 1;
    autoClickerActive = false;
    clearInterval(autoClickerTimer);
    autoClickerTimer = null;
    multiplierCost = 30;
    autoClickerCost = 50;
    timeLeft = taxInterval;
    render();
}

function buyMultiplier() {
    if (score >= multiplierCost) {
        score -= multiplierCost;
        multiplier *= 2;
        multiplierCost *= 2;
        render();
        toast("Multiplier ×" + multiplier);
    } else {
        toast("Not enough points!", true);
    }
}

function buyAutoClicker() {
    if (autoClickerActive) {
        toast("Auto-clicker is already active!", true);
    } else if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickerCost *= 2;
        autoClickerActive = true;
        autoClickerTimer = setInterval(() => {
            score += multiplier;
            render();
        }, 1000);
        render();
        toast("Auto-clicker on");
    } else {
        toast("Not enough points!", true);
    }
}

function tax() {
    if (score < taxAmount) {
        toast("Game Over! Resetting…", true);
        resetScore();
    } else {
        score -= taxAmount;
        render();
    }
}

function startTaxCountdown() {
    setInterval(() => {
        if (!gameStarted) return;
        timeLeft--;
        if (timeLeft <= 0) {
            tax();
            timeLeft = taxInterval;
        }
        render();
    }, 1000);
}

function startGame() {
    gameStarted = true;
    clickButton.disabled = false;
    resetButton.disabled = false;
    multiplierUpgrade.disabled = false;
    autoClickerUpgrade.disabled = false;
    startButton.style.display = "none";
    clickButton.focus();
}

// Reakcja na wciśnięcie (pointerdown), nie na puszczenie
clickButton.addEventListener("pointerdown", (e) => {
    if (clickButton.disabled || e.button !== 0) return;
    clickButton.classList.add("pressed");
    updateScore();
});
["pointerup", "pointerleave", "pointercancel"].forEach((type) =>
    clickButton.addEventListener(type, () => clickButton.classList.remove("pressed"))
);
// Klawiatura (Enter/Spacja) nadal działa przez click; detail === 0 oznacza aktywację bez wskaźnika
clickButton.addEventListener("click", (e) => {
    if (e.detail === 0) updateScore();
});

render();
startTaxCountdown();
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetScore);
multiplierUpgrade.addEventListener("click", buyMultiplier);
autoClickerUpgrade.addEventListener("click", buyAutoClicker);
