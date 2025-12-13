/* *************************************************************
 * Express server endpoints just handle HTTP and call the tested functions. They
 * do not contain business logic. So we are not testing them.
 * ************************************************************ */

import express from "express";
import { getStaticGreeting, getTimeBasedGreeting } from "./greetings.js";

const app = express();
const PORT = 3000;

// This API sends responses in the following format:
// { message: string, error: string | null }

// GET endpoint for static greeting
app.get("/basic-greeting", (req, res) => {
  const greeting = getStaticGreeting(); // Business logic...
  res.json({ message: greeting, error: null });
});

// GET endpoint for time-based greeting
app.get("/time-greeting", (req, res) => {
  const currentHour = new Date().getHours();
  const greeting = getTimeBasedGreeting(currentHour); // Business logic...
  res.json({ message: greeting, error: null });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
