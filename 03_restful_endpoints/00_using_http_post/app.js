import express from "express";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  const text = req.body.text;
  res.send("Post received: " + text);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
