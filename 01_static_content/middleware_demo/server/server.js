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
  console.log(`${req.method} ${req.url}`);
  // next() is used to call the next middleware function in the chain.
  // We always call next() unless we are done processing the request.
  next();
});

// This line tells Express to serve static files from the public directory.
// TODO: More info
app.use(express.static("../public"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
