import express from "express";
const app = express();
import path from "node:path";
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/random", (req, resp) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  resp.render("random", { randomNumber });
});

app.listen("3001", () => {
  console.log("Listening on port 3001");
});
