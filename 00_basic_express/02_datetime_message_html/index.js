import express from "express";

// Initialize the express application
const app = express();
const PORT = 3000;

// Define the route handler for the root path
app.get("/", (req, res) => {
  // Construct the HTML content
  const currentDate = new Date();
  const h1 = '<h1 style="color: red;">Hello Minions</h1>';
  const p = `<p style="color: orange;">It is now ${currentDate.toLocaleTimeString()}</p>`;

  // This is not well-formed HTML, but it's a start...
  // We should always return a full HTML document (html, head, body, etc.)
  res.send(h1 + p);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
