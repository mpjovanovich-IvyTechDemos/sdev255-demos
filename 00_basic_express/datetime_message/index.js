import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  // Return the current date and time
  const currentDate = new Date();
  let message = "";

  // TODO: Let's try refactoring this to its own function.
  if (currentDate.getHours() < 12) {
    message = "Good morning";
  } else if (currentDate.getHours() < 18) {
    message = "Good afternoon";
  } else {
    message = "Good evening";
  }

  res.send(`${message} world, it is now ${currentDate.toLocaleTimeString()}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
