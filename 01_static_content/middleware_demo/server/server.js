import express from "express";

const app = express();
const PORT = 3000;

// Middleware runs in the order it is added to the app. Many middleware
// functions can be chained together.

// TODO: custom logger middleware

// This line tells Express to serve static files from the public directory.
// TODO: More info
app.use(express.static("../public"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
