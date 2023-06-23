let userInput = prompt("What you like to do?").toLowerCase();
const todoList = [];

while (userInput !== "quit") {
  if (userInput === "new") {
    const task = prompt("New Task: ");
    todoList.push(task);
    console.log(
      `${task} added to the list. Size of todo list is ${todoList.length}`
    );
  } else if (userInput === "list") {
    if (todoList.length > 0) {
      console.log("**************");
      for (const [index, elem] of todoList.entries()) {
        console.log(`${index}. ${elem}`);
      }
      console.log("**************");
    } else {
      console.log("The todo list is empty");
    }
  } else if (userInput === "delete") {
    const deleteTask = prompt("Enter the index of item to delete");
    if (deleteTask <= 0 || typeof todoList[deleteTask] !== "undefined") {
      const deleted = todoList.splice(deleteTask, 1);
      console.log(`${deleted[0]} deleted from the list`);
    } else {
      console.log(`"${deleteTask}" isn't present in the list`);
    }
  }
  userInput = prompt("What you like to do?").toLowerCase();
}
console.log("Quiting...");
