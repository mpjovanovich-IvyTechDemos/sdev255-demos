import express from "express";

const app = express();
const PORT = 3000;

// Custom logger middleware
app.use((req, res, next) => {
  console.log(`Logger: ${req.method} ${req.url}`);
  next();
});

// CHALLENGE: Try adding a new middleware function that logs the current date
// and time.

app.use(express.static("public"));

app.get("/test", (req, res) => {
  console.log(`Non-static route: ${req.method} ${req.url}`);
  res.send("This did not come from the public directory.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
