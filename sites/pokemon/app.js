// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png
const pokemonImg = 33;
const content = document.querySelector(".content");
for (let i = 1; i <= pokemonImg; i++) {
  let temp = document.createElement("img");
  temp.setAttribute(
    "src",
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
  );
  content.insertAdjacentElement("afterend", temp);
}
