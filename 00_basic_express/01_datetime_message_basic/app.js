import express from "express";

// Initialize the express application
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  // Construct the message
  const currentDate = new Date();
  let message = "";

  // CHALLENGE: Try refactoring this to its own "getGreeting" function and calling it here.
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
