import ejs from "ejs";
import express from "express";

const app = express();
const PORT = 3000;

app.get("/favfood", (req, res) => {
  // example: /favfood?food=pizza
  const food = req.query.food;

  let html = "<p>I like <%= food %>.</p>";
  html = ejs.render(html, { food: food });

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
