import express from "express";

const app = express();
const PORT = 3000;

// Tells Express to serve any files in the public directory if the requested
// path matches. Remember that "index.html" is a special naming convention that
// will match the root path.
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
