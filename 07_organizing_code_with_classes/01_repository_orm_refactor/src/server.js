import express from "express";
import { getDb } from "./db.js";
import { UserRepository } from "./userRepository.js";

/* ***************************************
 * Initialize app and middleware
 *************************************** */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ***************************************
 * Initialize database
 *************************************** */
const db = getDb();
const userRepository = new UserRepository(db);

// Login route handler
app.post("/login", (req, res) => {
  // Request validation
  if (!req.body?.email || !req.body?.password) {
    return res.status(400).json({ error: "Bad request" });
  }

  const user = userRepository.fetchByEmail(req.body.email);
  if (!user || user.password !== req.body.password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  if (!user.is_active) {
    return res.status(403).json({ error: "Account is inactive" });
  }

  res.json({
    message: "Login successful",
    user,
  });
});

// API: Get single user by email
app.get("/users/by-email/:email", (req, res) => {
  // Check for malformed request
  if (!req.params || !req.params.email) {
    return res.status(400).json({ error: "Bad request" });
  }
  const email = req.params.email;

  const user = userRepository.fetchByEmail(email);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// Get active users
app.get("/users/active", (req, res) => {
  const users = userRepository.fetchActive();
  res.json(users);
});

// Create a new user
app.post("/users", (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = userRepository.create(email, username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message || "Bad request" });
  }
});

// Update user
app.patch("/users/:id", (req, res) => {
  // Check for malformed request
  if (!req.params || !req.params.id) {
    return res.status(400).json({ error: "Bad request" });
  }
  const id = req.params.id;
  const { email, username, is_active } = req.body;

  try {
    const user = userRepository.update(id, email, username, is_active);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message || "Bad request" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
