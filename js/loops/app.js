let arr = ["full", "stack", "developer", "my", "goal"];
for (let i = 1; i <= 10; i++) {
  console.log(`Hello from console -> times ${i}`);
}

//even numbers from 0 to 20
for (let i = 0; i <= 20; i += 2) {
  console.log(`Number ${i} is even`);
}

//count down from 100 to 0 by 10
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

let i = 0;

while (i <= 10) {
  console.log(i, "Hello world");
  i++;
}

for (let elem of arr) {
  console.log(`Elements in the array: ${elem}`);
}
const nums = [10, 300, 22, 33, 55];

const minNum = nums.reduce((lowest, current) => {
  if (lowest < current) {
    return lowest;
  }
  return current;
});

console.log(minNum);
