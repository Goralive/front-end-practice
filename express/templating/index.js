import express from "express";
const app = express();
import path from "node:path";
const __dirname = path.resolve();
import redditData from "./data.json" assert { type: "json" };

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (_req, res) => {
  res.render("home");
});

app.get("/random", (_req, resp) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  resp.render("random", { randomNumber });
});

app.get("/r/:subreddit", (req, resp) => {
  const { subreddit } = req.params;
  const templateData = redditData[subreddit];
  if (templateData) {
    resp.render("subreddit", { ...templateData });
  } else {
    resp.render("notfound", { subreddit });
  }
});

app.listen("3001", () => {
  console.log("Listening on port 3001");
});

app.get("/cats", (_req, res) => {
  const cats = ["Lapa", "Oma", "Marvel", "Bully"];
  res.render("cats", { cats });
});
