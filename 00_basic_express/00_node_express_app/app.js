import express from "express";

// Initialize the express application
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("This is the root path!");
});

app.get("/compliment", (req, res) => {
  res.send("Nice shirt.");
});

app.get("/proverb", (req, res) => {
  res.send("There is joy in the humble service of others.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
