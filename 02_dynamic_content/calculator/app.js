import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log(req.query);
  res.send("Bla bla bla...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
