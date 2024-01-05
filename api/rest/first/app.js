const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/register", (req, res) => {
  let { name, surname } = req.query;
  res.send(`Hello ${surname} ${name}`);
});

app.post("/submit", (req, res) => {
  let { name, surname } = req.body;
  res.send(`Data ${surname} ${name} was saved. You can close the page`);
});
