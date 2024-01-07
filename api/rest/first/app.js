const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const inMemoryDb = [
  {
    id: 1,
    username: "Todd",
    comment: "lol kek cheburek",
  },
  {
    id: 2,
    username: "Jeremy",
    comment: "Yes you can",
  },
  {
    id: 3,
    username: "Mario",
    comment: "Hello, it's me Mario",
  },
  {
    id: 4,
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

app.get("/comments/new", (_req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  let { username, comments } = req.body;
  inMemoryDb.push({ username: username, comment: comments });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = inMemoryDb.find((com) => com.id === parseInt(id));
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
