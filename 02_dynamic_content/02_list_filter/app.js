import express from "express";

const app = express();
const PORT = 3000;

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// We are expecting an optional querystring in the format:
//   ?filter=even or ?filter=odd
app.get("/even-odd", (req, res) => {
  // filter none, even, or odd based on query param
  const filter = req.query.filter;
  if (!filter) {
    res.send(nums);
    return;
  } else if (filter === "even") {
    res.send(nums.filter((num) => num % 2 === 0));
    return;
  } else if (filter === "odd") {
    res.send(nums.filter((num) => num % 2 !== 0));
    return;
  }
  // CHALLENGE: Add a new filter for "multipleOfThree" here

  // If we hit this point, the filter is invalid.
  res.send("Invalid filter");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
