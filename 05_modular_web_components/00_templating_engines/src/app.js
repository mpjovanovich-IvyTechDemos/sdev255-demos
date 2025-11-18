import ejs from "ejs";
import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// Demo1: Single property databind
app.get("/favfood", (req, res) => {
  // example: /favfood?food=pizza
  const food = req.query.food;

  let html = "<p>I like <%= food %>.</p>";
  html = ejs.render(html, { food: food });

  res.send(html);
});

// Demo2: String join list
app.get("/foodlist-plain", (req, res) => {
  // example: /foodlist-plain?foods=kiwi,cherry,orange
  const userFoods = req.query.foods;
  const foodsList = userFoods.split(",");

  let html = "<p>I like <%= foods.join(' and ') %>.</p>";
  html = ejs.render(html, { foods: foodsList });

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
