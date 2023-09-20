const playerOne = {
  scores: 0,
  buttonSelector: document.querySelector("#p1Button"),
  displaySelector: document.querySelector("#p1Score"),
};

const playerTwo = {
  scores: 0,
  buttonSelector: document.querySelector("#p2Button"),
  displaySelector: document.querySelector("#p2Score"),
};

const p1Btn = document.querySelector("h1");
const p2Btn = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#reset");
const p1Display = document.querySelector("h1");
const p2Display = document.querySelector("#p2Score");
const playToSelect = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;

function updateScore(player) {
  if (!isGameOver) {
    if (player.scores !== winningScore) {
      player.scores += 1;
      console.log(`player score is ${player.scores}`);
      isOver(player.scores);
      player.displaySelector.textContent = player.scores;
    }
  }
}

playerOne.buttonSelector.addEventListener("click", () => {
  updateScore(playerOne);
});

playerTwo.buttonSelector.addEventListener("click", () => {
  updateScore(playerTwo);
});

resetBtn.addEventListener("click", () => {
  resetGame(playerOne, playerTwo);
});

playToSelect.addEventListener("change", () => {
  winningScore = parseInt(playToSelect.value);
  console.log(`Score is ${winningScore}`);
  resetGame(playerOne, playerTwo);
});

function isOver(score) {
  if (score === winningScore) {
    isGameOver = true;
    highlightGameResult(playerOne, playerTwo);
    playerOne.buttonSelector.disabled = true;
    playerTwo.buttonSelector.disabled = true;
  }
}

function resetGame(...players) {
  for (let p of players) {
    p.scores = 0;
    p.displaySelector.textContent = 0;
    p.displaySelector.classList.remove("has-text-success", "has-text-danger");
    p.buttonSelector.disabled = false;
  }
  isGameOver = false;
}

function highlightGameResult(p1, p2) {
  if (parseInt(p1.scores) > parseInt(p2.scores)) {
    p1.displaySelector.classList.add("has-text-success");
    p2.displaySelector.classList.add("has-text-danger");
  } else {
    p1.displaySelector.classList.add("has-text-danger");
    p2.displaySelector.classList.add("has-text-success");
  }
}
