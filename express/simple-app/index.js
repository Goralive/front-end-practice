import express from "express";

const app = express();

// app.use((_req, res) => {
//   res.status(201).send("<h1>Hello!</h1>");
// });

app.listen(3001, () => {
  console.log("Listening port 3001");
});

app.get("/help", (_req, resp) => {
  resp.status(201).send("<h1>Help!</h1>");
  console.log("There is no help here!");
});

app.get(3000, () => {
  console.log;
});
