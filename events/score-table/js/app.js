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
  if (isFinished()) {
    alert("Game finished. Reset the score!");
  } else {
    userOneScore++;
    userOneScoreSelector.textContent = userOneScore;
  }
});

playerTwo.addEventListener("click", (event) => {
  event.preventDefault();
  userTwoScore++;
  userTwoScoreSelector.textContent = userTwoScore;
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
