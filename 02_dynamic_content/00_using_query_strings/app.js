import express from "express";

const app = express();
const PORT = 3000;

// We are expecting a querystring in the format: ?text=[some text]
app.get("/", (req, res) => {
  // Log the query string to the console for learning and debug purposes
  console.log(req.query);

  // Get the text parameter from the query string
  const text = req.query.text;

  // Send the query string back to the client
  res.send(text);
});

// CHALLENGE: Make a new endpoint for the route `/print-name` that accepts a
// query string parameter called `name` and returns a string that says "Hello,
// [name]!".

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
