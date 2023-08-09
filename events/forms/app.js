const catForm = document.querySelector("#shelterForm");
const catInput = document.querySelector("#catInputName");
const list = document.querySelector("#catList");

catForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const catName = catInput.value;
  console.log(`Form was submitted with input value ${catName}`);
  const listElem = document.createElement("li");
  listElem.innerText = catName;

  list.appendChild(listElem);
});
