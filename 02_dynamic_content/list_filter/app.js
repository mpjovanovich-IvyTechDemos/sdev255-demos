import express from "express";

const app = express();
const PORT = 3000;

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

app.get("/", (req, res) => {
  // filter none, even, or odd based on query param
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
