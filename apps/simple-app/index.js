const express = require("express");
const app = express();
const path = require("path");
const mongo = require("mongoose");

mongo
  .connect("mongodb://localhost:27017/shop", { useNewUrlParser: true })
  .then(() => {
    console.log("Connection open");
  })
  .catch((err) => {
    console.log("Connection error");
    console.error(err);
  });

app.set("views", path.join(__dirname));
app.set("view engine", "ejs");

app.get("/dogs", (__req, res) => {
  res.send("HEllop!");
});

app.listen(3080, () => {
  console.log("Hello Igor!");
});
