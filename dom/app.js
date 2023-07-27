const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }
//
const h1 = document.querySelector("h1");

h1.classList.add("border");

h1.classList.add("purple");

const newH3 = document.createElement("h3");
const paragraph = document.querySelector("p");

newH3.innerText = "Hello world";
document.body.append(newH3);

const additionalParagraph = document.createElement("p");
additionalParagraph.innerText = "it's preety fun to do some websites";

newH3.insertAdjacentElement("afterend", additionalParagraph);

const newBold = document.createElement("b");
newBold.innerText = "I wan't to be awesome ";

paragraph.prepend(newBold);

const contentList = document.querySelector("ul");
const firstLi = document.querySelector("li");
contentList.removeChild(firstLi);

const removeImg = document.querySelector("img");
removeImg.remove();
