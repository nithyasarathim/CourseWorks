let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const emojiMap = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

const resultText = document.getElementById("result-text");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const buttons = document.querySelectorAll(".choice-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const winner = determineWinner(playerChoice, computerChoice);

        displayResult(playerChoice, computerChoice, winner);
        updateScores(winner);
        animateResult(winner);
    });
});

document.getElementById("reset-btn").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    resultText.textContent = "Game Reset! Let's Play!";
    resultText.style.opacity = 1;
    document.body.classList.remove('background-lose');
});

function determineWinner(player, computer) {
    if (player === computer) return "draw";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function displayResult(playerChoice, computerChoice, winner) {
    resultText.style.opacity = 0;
    setTimeout(() => {
        let resultMessage = `You chose ${emojiMap[playerChoice]} vs Computer chose ${emojiMap[computerChoice]}. `;
        if (winner === "draw") {
            resultMessage += "It's a draw! 🤔";
        } else if (winner === "player") {
            resultMessage += "You win! 🎉";
            document.getElementById("win-sound").play();
        } else {
            resultMessage += "Computer wins! 😭";
            document.getElementById("lose-sound").play();
        }
        resultText.textContent = resultMessage;
        resultText.style.opacity = 1;
    }, 300);
}

function updateScores(winner) {
    if (winner === "player") playerScore++;
    if (winner === "computer") computerScore++;
    updateScoreDisplay();
}

function updateScoreDisplay() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function animateResult(winner) {
    if (winner === "player") {
        document.body.classList.add('background-win');
    } else if (winner === "computer") {
        document.body.classList.add('background-lose');
    } else {
        document.body.classList.add('background-draw');
    }
    setTimeout(() => {
        document.body.classList.remove('background-lose');
        document.body.classList.remove('background-win');
        document.body.classList.remove('background-draw');
    }, 500);
}
