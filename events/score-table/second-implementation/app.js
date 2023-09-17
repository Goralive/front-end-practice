const p1Btn = document.querySelector("#p1Button");
const p2Btn = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Score");
const p2Display = document.querySelector("#p2Score");
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
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  isGameOver = false;
});

function isOver(score) {
  if (score === winningScore) {
    isGameOver = true;
  }
}
