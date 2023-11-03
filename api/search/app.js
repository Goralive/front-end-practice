const formSelector = document.querySelector("#searchForm");

formSelector.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchQuery = formSelector.elements.query.value;
  const config = { params: { q: searchQuery } };
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    config,
  );
  console.log(response.data);
  displayAllImages(response.data);
  formSelector.elements.query.value = "";
});

function displayAllImages(shows) {
  shows.forEach((elem) => {
    if (elem.show.image) {
      const img = document.createElement("img");
      img.src = elem.show.image.medium;
      document.body.append(img);
    }
  });
}
