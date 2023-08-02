const btn = document.querySelector("#v2");
const heading = document.querySelector("h1");

btn.onclick = function () {
  console.log("You click me!");
};

heading.onmouseover = () => {
  console.log("Hover Over!");
};

const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", () => {
  console.log("Clicked!");
});
