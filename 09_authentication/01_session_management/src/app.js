import express from "express";
import session from "express-session";

const app = express();
const PORT = 3000;

/* ********************************************************
 * Middleware
 ******************************************************** */
// Session middleware
app.use(
  session({
    secret: "SuperSecretSessionKey",
    resave: false, // See documentation; false is advised
    saveUninitialized: false, // See documentation; false is advised
    cookie: {
      httpOnly: true, // Can't be accessed by client JS
      secure: false, // SHOULD BE TRUE IN PRODUCTION (HTTPS only)
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

/* ********************************************************
 * GET routes
 ******************************************************** */
app.get("/increment", (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  } else {
    req.session.count++;
  }
  res.send(`Count is ${req.session.count}`);
});

app.get("/clear", (req, res) => {
  // Clear the session
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("Error clearing session");
    } else {
      res.send("Session cleared");
    }
  });
});

/* ********************************************************
 * Start the server
 ******************************************************** */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
