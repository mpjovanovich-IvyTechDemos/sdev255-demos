import cookieParser from "cookie-parser";
import express from "express";

const app = express();
const PORT = 3000;

/* ********************************************************
 * Middleware
 ******************************************************** */
app.use(cookieParser());

/* ********************************************************
 * GET routes
 ******************************************************** */
app.get("/set-cookie", (req, res) => {
  // Get message from query string
  const message = req.query.message;

  // Sets a message property in the cookies object
  res.cookie("message", message, {
    httpOnly: true,
    secure: false, // set to true in production
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  });
  res.send("Cookie set");
});

app.get("/get-cookie", (req, res) => {
  // Check if cookie is set
  if (!req.cookies.message) {
    res.send("No cookie set");
    return;
  }

  // Get the message from the cookies object
  const message = req.cookies.message;
  res.send(message);
});

app.get("/delete-cookie", (_, res) => {
  // Delete the cookie
  res.clearCookie("message");
  res.send("Cookie deleted");
});

/* ********************************************************
 * Start the server
 ******************************************************** */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
