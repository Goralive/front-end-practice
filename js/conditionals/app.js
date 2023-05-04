const age = 10;

// if (age < 5) {
//   console.log("Free access!!!");
// } else if (age < 10) {
//   console.log("10$");
// } else if (age < 65) {
//   console.log("20$");
// } else {
//   console.log("10$");
// }
// console.log(`Age is ${age}`);
//
// const password = prompt("Type user password: ");
//
// if (password.length >= 6) {
//   console.log("Password have more then 6 chars");
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid password");
//   } else {
//     console.log("No space in the password allowed");
//   }
// } else {
//   console.log("Password have less then 6 chars");
// }
//
// console.log(`Password -> ${password}`);
//

if ((age > 0 && age < 5) || age >= 65) {
  console.log("Free");
} else if (age >= 5 && age < 10) {
  console.log("10$");
} else if (age >= 10 && age < 65) {
  console.log("20$");
} else {
  console.log(`Your age is ${age}. Age are invalid`);
}
