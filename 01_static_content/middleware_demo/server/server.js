import express from "express";

const app = express();
const PORT = 3000;

/*
Middleware runs in the order it is added to the app. Many middleware
functions can be chained together to perform functions like:
- logging
- authentication
- data validation
- error handling
- rate limiting
- caching
- etc.
*/

// Custom logger middleware
app.use((req, res, next) => {
  console.log(`Logger: ${req.method} ${req.url}`);
  // next() is used to call the next middleware function in the chain.
  // We always call next() unless we are done processing the request.
  next();
});

// This line tells Express to serve static files from the public directory.
// If a request is made that matches a file in the public directory, Express will serve it.
// In this case no more middleware will be executed.
app.use(express.static("../public"));

// We can still add routes that are not static files.
// We often serve only CSS and images from the public directory and dymanic
// content from other routes.
app.get("/test", (req, res) => {
  console.log(`Non-static route: ${req.method} ${req.url}`);
  res.send("This did not come from the public directory.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
