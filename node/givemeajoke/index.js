const jokes = require("give-me-a-joke");
const colors = require("colors");
const figlet = require("figlet");

jokes.getRandomDadJoke(function (joke) {
  console.log(
    colors.trap("Do you wanna see the dad joke? Of course you want!"),
  );
  figlet("Hello World!", function (err, data) {
    if (err) {
      console.dir(err);
      return;
    }
    console.log(data.rainbow);
  });
  console.log(joke.rainbow);
});
