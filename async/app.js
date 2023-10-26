const delayedColorChange = (color, delay) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      document.body.style.background = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 2000)
  .then(() => delayedColorChange("orange", 2000))
  .then(() => delayedColorChange("green", 2000))
  .then(() => delayedColorChange("blue", 2000))
  .then(() => delayedColorChange("yellow", 2000));

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("purple", 1000);
}
