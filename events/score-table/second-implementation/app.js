const p1Btn = document.querySelector("#p1Button");
const p2Btn = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Score");
const p2Display = document.querySelector("#p2Score");
const playToSelect = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;

let p1Score = 0;
let p2Score = 0;

p1Btn.addEventListener("click", () => {
  if (!isGameOver) {
    if (p1Score !== winningScore) {
      p1Score += 1;
      isOver(p1Score);
      p1Display.textContent = p1Score;
    }
  }
});

p2Btn.addEventListener("click", () => {
  if (!isGameOver) {
    if (p2Score !== winningScore) {
      p2Score += 1;
      isOver(p2Score);
      p2Display.textContent = p2Score;
    }
  }
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

playToSelect.addEventListener("change", () => {
  winningScore = parseInt(playToSelect.value);
  console.log(`Score is ${winningScore}`);
  resetGame();
});

function isOver(score) {
  if (score === winningScore) {
    isGameOver = true;
    highlightGameResult();
    p1Btn.disabled = true;
    p2Btn.disabled = true;
  }
}

function resetGame() {
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  isGameOver = false;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Btn.disabled = false;
  p2Btn.disabled = false;
}

function highlightGameResult() {
  if (p1Score > p2Score) {
    p1Display.classList.add("has-text-success");
    p2Display.classList.add("has-text-danger");
  } else {
    p1Display.classList.add("has-text-danger");
    p2Display.classList.add("has-text-success");
  }
}
