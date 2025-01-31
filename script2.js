let score = 0;
let multiplier = 1;
let autoClickerActive = false;
let gameStarted = false; 
let multiplierCost = 30;
let autoClickerCost = 50;
let taxInterval = 10;
let taxAmount = 5;
const startButton = document.getElementById("startButton");
const clickButton = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");
const scoreDisplay = document.getElementById("score");
const multiplierUpgrade = document.getElementById("multiplierUpgrade");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");
const multiplierCostDisplay = document.getElementById("multiplierCost");
const autoClickerCostDisplay = document.getElementById("autoClickerCost");
const taxCountdownDisplay = document.getElementById("taxCountdown");
multiplierCostDisplay.textContent = multiplierCost;
autoClickerCostDisplay.textContent = autoClickerCost;
function updateScore() {
    if (!gameStarted) return;
    score += multiplier;
    scoreDisplay.textContent = score;
}
function resetScore() {
    score = 0;
    multiplier = 1;
    autoClickerActive = false;
    multiplierCost = 30;
    autoClickerCost = 50;
    scoreDisplay.textContent = score;
    multiplierCostDisplay.textContent = multiplierCost;
    autoClickerCostDisplay.textContent = autoClickerCost;
}
function buyMultiplier() {
    if (score >= multiplierCost) {
        score -= multiplierCost;
        multiplier *= 2;
        multiplierCost *= 2;
        scoreDisplay.textContent = score;
        multiplierCostDisplay.textContent = multiplierCost;
    } else {
        alert("Not enough points!");
    }
}
function buyAutoClicker() {
    if (score >= autoClickerCost && !autoClickerActive) {
        score -= autoClickerCost;
        autoClickerCost *= 2;
        autoClickerActive = true;
        setInterval(() => {
            score += multiplier;
            scoreDisplay.textContent = score;
        }, 1000);
        scoreDisplay.textContent = score;
        autoClickerCostDisplay.textContent = autoClickerCost;
    } else if (autoClickerActive) {
        alert("Auto-clicker is already active!");
    } else {
        alert("Not enough points!");
    }
}
function tax() {
    if (score < taxAmount) {
        alert("Game Over! Resetting...");
        resetScore();
    } else {
        score -= taxAmount;
        scoreDisplay.textContent = score;
    }
}
function startTaxCountdown() {
    let timeLeft = taxInterval;
    taxCountdownDisplay.textContent = timeLeft;
    setInterval(() => {
        if (!gameStarted) return;
        timeLeft--;
        taxCountdownDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            tax();
            timeLeft = taxInterval;
        }
    }, 1000);
}
function startGame() {
    gameStarted = true;
    clickButton.disabled = false;
    resetButton.disabled = false;
    multiplierUpgrade.disabled = false;
    autoClickerUpgrade.disabled = false;
    startButton.style.display = "none";
}
startTaxCountdown();
startButton.addEventListener("click", startGame);
clickButton.addEventListener("click", updateScore);
resetButton.addEventListener("click", resetScore);
multiplierUpgrade.addEventListener("click", buyMultiplier);
autoClickerUpgrade.addEventListener("click", buyAutoClicker);