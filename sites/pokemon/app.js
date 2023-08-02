// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png
const pokemonImg = 151;
const content = document.querySelector("#content");
const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

for (let i = 1; i <= pokemonImg; i++) {
  const pokemonContainer = document.createElement("div");
  pokemonContainer.classList.add("pokemon");
  const numPokemon = document.createElement("span");
  numPokemon.innerText = `#${i}`;
  const pokemonImg = document.createElement("img");

  pokemonImg.setAttribute("src", `${baseUrl}/${i}.png`);

  pokemonContainer.appendChild(pokemonImg);
  pokemonContainer.appendChild(numPokemon);

  content.appendChild(pokemonContainer);
}
