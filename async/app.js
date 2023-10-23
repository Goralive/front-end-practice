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
