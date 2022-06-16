const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const foodball = [
  { name: "Messi", id: 1 },
  { name: "Ronaldo", id: 2 },
  { name: "Neymar", id: 3 },
];

app.get("/", (req, res) => {
  res.send("bosh sahifa");
});

app.get("/api/foodball", (req, res) => {
  res.send(foodball);
});

app.post("/api/foodball/add", (req, res) => {
  const foodbal = {
    name: req.body.name,
    id: foodball.length + 1,
  };
  foodball.push(foodbal);
  res.status(201).send("created");
});
app.delete("/api/foodball/delete/:id", (req, res) => {
  const idx = foodball.findIndex((cls) => cls.id === +req.params.id);
  if (idx === -1) {
    console.log("erron 404");
  }
  foodball.splice(idx, 1);
  res.send("deleted");
});

app.put("/api/foodball/update/:id", (req, res) => {
  const idx = foodball.findIndex((cls) => cls.id === +req.params.id);
  if (idx === -1) {
    console.log("erron 404");
  }
  let player = {
    name: req.body.name,
    id: req.params.id,
  };
  foodball[idx] = player;
  res.send("updated");
});

app.listen(port, () => {
  console.log(`server working on port${port}`);
});
