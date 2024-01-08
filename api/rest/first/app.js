const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let inMemoryDb = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol kek cheburek",
  },
  {
    id: uuid(),
    username: "Jeremy",
    comment: "Yes you can",
  },
  {
    id: uuid(),
    username: "Mario",
    comment: "Hello, it's me Mario",
  },
  {
    id: uuid(),
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
  let { username, comment } = req.body;
  let obj = {
    id: uuid(),
    username: username,
    comment: comment,
  };
  inMemoryDb.push(obj);

  res.redirect(`/comments/${obj.id}`);
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = inMemoryDb.find((com) => com.id === id);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = inMemoryDb.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const findComment = inMemoryDb.find((cm) => cm.id === id);
  findComment.comment = newComment;
  res.redirect(`/comments/${id}`);
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  inMemoryDb = inMemoryDb.filter((c) => c.id !== id);
  res.redirect("/comments");
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
