const playerOne = document.querySelector("#playerOneBtn");
const playerTwo = document.querySelector("#playerTwoBtn");
const reset = document.querySelector("#resetBtn");

const userOneScoreSelector = document.querySelector("#playerOneScore");
const userTwoScoreSelector = document.querySelector("#playerTwoScore");

const maxScoreSelector = document.querySelector("#maxScore");

let maxScore = maxScoreSelector.value;

let userOneScore = 0;
let userTwoScore = 0;

playerOne.addEventListener("click", (event) => {
  event.preventDefault();
  userOneScore++;
  userOneScoreSelector.textContent = userOneScore;
  if (isFinished()) {
    finishGameScreen();
  }
});

playerTwo.addEventListener("click", (event) => {
  event.preventDefault();
  userTwoScore++;
  userTwoScoreSelector.textContent = userTwoScore;
  if (isFinished()) {
    finishGameScreen();
  }
});

reset.addEventListener("click", (event) => {
  event.preventDefault();
  resetScoreFor(userOneScoreSelector, userTwoScoreSelector);
  userOneScore = 0;
  userTwoScore = 0;
});

maxScoreSelector.addEventListener("change", () => {
  maxScore = maxScoreSelector.value;
});

function resetScoreFor(...selectors) {
  for (let elem of selectors) {
    elem.textContent = 0;
    elem.classList.remove("loser");
    elem.classList.remove("winner");
  }
}

const isFinished = () => {
  let scoreOne = parseInt(userOneScore);
  let scoreTwo = parseInt(userTwoScore);
  let playUntil = parseInt(maxScore);

  const result = scoreOne >= playUntil || scoreTwo >= playUntil;
  console.log(
    `Score one ${scoreOne} to score two ${scoreTwo} play until ${playUntil} return result ${result}`
  );
  return result;
};

function finishGameScreen() {
  if (userOneScore < userTwoScore) {
    userTwoScoreSelector.classList.add("winner");
    userOneScoreSelector.classList.add("loser");
  } else {
    userTwoScoreSelector.classList.add("loser");
    userOneScoreSelector.classList.add("winner");
  }
  alert("Game finished. Reset the score!");
}
