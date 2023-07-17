function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

let nums = [7, 234, 321, 500, 345, 123, 8];

let min = Math.min(...nums);
let max = Math.max(...nums);

const user = {
  name: "jackson",
  surname: "ford",
};

const admin = { ...user, isAdmin: true };

console.log(`Min from array is ${min} and max is ${max}`);

console.log(..."WoW");

console.log(admin.isAdmin);
