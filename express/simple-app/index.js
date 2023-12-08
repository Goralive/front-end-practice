const express = require("express");

const app = express();

app.use((req, res) => {
  res.status(201).send("<h1>Hello!</h1>");
});

app.listen(3001, () => {
  console.log("Listening port 3001");
});

app.get(3001, () => {
  console.log("Preved medved!");
});
