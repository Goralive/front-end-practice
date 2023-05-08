// // loop the guessing
// too loo or too high prompt Guess again
// how many guess it's takes
// q to quit
//

let num = parseInt(prompt("Welcome! Enter your max number to guess"));
while(!num) {
  num = parseInt(prompt("Enter please a number to guess"));
}
const targetNumber = Math.floor(Math.random() * num) + 1;

let userInput = prompt("Enter your first guess: ");
let attempts = 1;

while(parseInt(userInput) !== targetNumber){
  if(userInput == 'q') break;
  attempts++
  if(userInput < targetNumber) {
    userInput = prompt(`You type ${userInput} is too low. Try again: `);
  } else {
    userInput = prompt(`You type ${userInput} is too high. Try again: `);
  }
}

if(userInput === targetNumber) console.log(`Congrats, you are guess it! `)

console.log(`It's took you ${attempts} attempts. The number was ${targetNumber}`)
