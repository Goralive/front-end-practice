const form = document.querySelector("#tweetForm");
const listOfTweets = document.querySelector("#tweets");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submited");

  const usernameInput = form.username;
  const tweetInput = form.tweet;

  const tweet = document.createElement("li");
  const highlight = document.createElement("b");
  highlight.innerText = usernameInput.value;
  tweet.append(highlight);
  tweet.append(`: posted tweet ${tweetInput.value} - `);

  listOfTweets.append(tweet);
});
