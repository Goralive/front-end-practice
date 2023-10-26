fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
  .then((res) => {
    console.log("RESPONSE:", res);
    return res.json();
  })
  .then((body) => {
    console.log("Data is parsed:", body);
    const header = document.querySelector("h1");
    header.textContent = body.joke;
  })
  .catch((e) => {
    console.log("Error:", e);
  });

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const body = await response.json();
  console.log(body.joke);
};
