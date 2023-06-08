let userInput;

while (userInput !== "new" || "list" || "delete" || "quit") {
  userInput = prompt("What you like to do?").toLowerCase();

  if (userInput === "quit") {
    console.log("Quiting...");
    break;
  }
}
