let userInput;
let task;
let todoList = [];

while (userInput !== "new" || "list" || "delete" || "quit") {
  userInput = prompt("What you like to do?").toLowerCase();

  if (userInput === "new") {
    task = prompt("New Task: ");
    todoList.push(task);
    console.log(
      `${task} added to the list. Size of todo list is ${todoList.length}`
    );
  }

  if (userInput === "list") {
    if (todoList.length > 0) {
      console.log("**************");
      for (const [index, elem] of todoList.entries()) {
        console.log(`${index + 1}. ${elem}`);
      }
      console.log("**************");
    } else {
      console.log("The todo list is empty");
    }
  }

  if (userInput === "delete") {
    let deleteTask = prompt("Enter the index of item to delete");
    deleteTask--;
    if (deleteTask <= 0 || typeof todoList[deleteTask] !== "undefined") {
      console.log(`${todoList[deleteTask]} deleted from the list`);
      todoList.splice(deleteTask, 1);
    } else {
      console.log(`"${deleteTask}" isn't present in the list`);
    }
  }
  if (userInput === "quit") {
    console.log("Quiting...");
    break;
  }
}
