const form = document.querySelector("#tweetForm");
const listOfTweets = document.querySelector("#tweets");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submited");

  const usernameInput = form.username;
  const tweetInput = form.tweet;
  addTweet(usernameInput, tweetInput);

  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (usernameElement, tweetElement) => {
  const tweet = document.createElement("li");
  const highlight = document.createElement("b");
  highlight.innerText = usernameElement.value;
  tweet.append(highlight);
  tweet.append(`: posted tweet -> ${tweetElement.value}  `);
  listOfTweets.append(tweet);
};
