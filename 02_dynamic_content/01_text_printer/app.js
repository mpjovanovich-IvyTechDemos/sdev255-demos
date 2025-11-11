import express from "express";

const app = express();
const PORT = 3000;

// We are expecting a querystring in the format: ?text=Hello&times=3
// "times" is optional and defaults to 1
app.get("/", (req, res) => {
  // Assign to temp variables for readability
  const text = req.query.text;

  // Validate that the text parameter was provided
  // Make sure to exit the function with return!
  if (!text) {
    res.send("Error: No text provided");
    return;
  }

  // Validate that the times parameter was provided
  let times = 1;

  // Convert the times string parameter to a number
  if (req.query.times) {
    times = parseInt(req.query.times);
  }

  // Validate that the times parameter is a number
  if (isNaN(times)) {
    res.send("Error: Invalid times parameter");
    return;
  }

  // CHALLENGE: Add validation to make sure the number of times is at least 1
  // and at most 1000.

  // Build the result string
  let result = "";
  for (let i = 0; i < times; i++) {
    result += text + " "; // Add a space between each word
  }
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
