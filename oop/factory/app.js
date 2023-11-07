// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
//
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };
//
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
//
// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b},${a})`;
// };

class Color {
  constructor(r, g, b, name) {
    console.log("In Constructor!");
    console.log(r, g, b, name);
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  colorName() {
    return `Color name ${this.name}`;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()},${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const c1 = new Color(255, 23, 33, "Tomato");
const c2 = new Color(0, 0, 0, "Black");
