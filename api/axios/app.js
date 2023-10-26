const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
  } catch (e) {
    return "Something go wrong";
  }
};

const addJoke = async () => {
  const joke = await getDadJoke();
  const newLI = document.createElement("li");
  newLI.append(joke);
  jokes.append(newLI);
};

btn.addEventListener("click", addJoke);
