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

app.get("/r/:userRequest", (req, res) => {
  console.log(req.params);
  const { userRequest } = req.params;
  console.log(userRequest);
  res.status(200).send(`You have requested subredit ${userRequest}`);
});

app.get("/r/:userRequest/:id", (req, res) => {
  console.log(req.params);
  const { userRequest, id } = req.params;
  console.log(userRequest);
  res
    .status(200)
    .send(
      `You have requested subredit <b>${userRequest.toUpperCase()}</b> with id: ${id}`,
    );
});

app.get("/search", (req, res) => {
  const { q, dogs } = req.query;
  res.send(`<h1>Your searching for ${q} and breed ${dogs}??</h1>`);
});

app.get("*", (_req, resp) => {
  resp.status(404).send("<h1>Invalid page!!!</h1>");
});
