const btn = document.querySelector("#colorBtn");
const header = document.querySelector("h1");

btn.addEventListener("click", () => {
  const newColor = randomColor();
  header.innerText = newColor;
  header.style.textAlign = "center";

  document.body.style.background = newColor;
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const sum = r + g + b;
  if (sum < 250) {
    header.style.color = "white";
  } else {
    header.style.color = "black";
  }
  return `rgb(${r},${g},${b})`;
};
