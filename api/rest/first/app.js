const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const inMemoryDb = [
  {
    username: "Todd",
    comment: "lol kek cheburek",
  },
  {
    username: "Jeremy",
    comment: "Yes you can",
  },
  {
    username: "Mario",
    comment: "Hello, it's me Mario",
  },
  {
    username: "Patron",
    comment: "Woof woof!",
  },
];

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/comments", (_req, res) => {
  res.render("comments/index", { inMemoryDb });
});

app.get("/", (_req, res) => {
  res.render("home");
});
app.get("/register", (req, res) => {
  let { name, surname } = req.query;
  res.send(`Hello ${surname} ${name}`);
});

app.post("/submit", (req, res) => {
  let { name, surname } = req.body;
  res.send(`Data ${surname} ${name} was saved. You can close the page`);
});
