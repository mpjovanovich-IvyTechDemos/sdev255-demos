import Database from "better-sqlite3";
import express from "express";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* ***************************************
 * Initialize app and middleware
 *************************************** */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ***************************************
 * Initialize database
 *************************************** */
let db;
try {
  const dbPath = join(__dirname, "..", "data", "data.db");
  const initSqlPath = join(__dirname, "..", "data", "init.sql");
  db = new Database(dbPath);
  const initSql = readFileSync(initSqlPath, "utf8");
  db.exec(initSql);
} catch (err) {
  console.error("Failed to initialize database:", err.message);
  process.exit(1);
}

// Login (form post)
app.post("/login", (req, res) => {
  // Check for malformed request
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ error: "Bad request" });
  }
  const { email, password } = req.body;

  // This query is used in multiple places...
  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  if (!user.is_active) {
    return res.status(403).json({ error: "Account is inactive" });
  }

  // Not shown: handle actual session or token creation

  res.json({
    message: "Login successful",
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
    },
  });
});

// API: Get single user by email
app.get("/users/by-email/:email", (req, res) => {
  // Check for malformed request
  if (!req.params || !req.params.email) {
    return res.status(400).json({ error: "Bad request" });
  }
  const email = req.params.email;

  // This query is used in multiple places...
  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
});

// Get active users
app.get("/users/active", (req, res) => {
  const users = db
    .prepare(
      "SELECT id, email, username, created_at, is_active FROM users WHERE is_active = 1"
    )
    .all();
  res.json(users);
});

// Create a new user
app.post("/users", (req, res) => {
  // Check for malformed request
  if (
    !req.body ||
    !req.body.email ||
    !req.body.username ||
    !req.body.password
  ) {
    return res.status(400).json({ error: "Bad request" });
  }
  const { email, username, password } = req.body;

  // Check if email already exists
  const existing = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (existing) {
    return res.status(400).json({ error: "Email already exists" });
  }

  // Insert user
  const stmt = db.prepare(
    "INSERT INTO users (email, username, password, created_at, is_active) VALUES (?, ?, ?, ?, ?)"
  );
  const result = stmt.run(
    email,
    username,
    password,
    new Date().toISOString(),
    1
  );

  // Fetch the created user
  const user = db
    .prepare(
      "SELECT id, email, username, created_at, is_active FROM users WHERE id = ?"
    )
    .get(result.lastInsertRowid);

  res.status(201).json(user);
});

// Update user
app.patch("/users/:id", (req, res) => {
  // Check for malformed request
  if (!req.params || !req.params.id) {
    return res.status(400).json({ error: "Bad request" });
  }
  const id = req.params.id;

  // These fields are optional since this is a PATCH request
  const { email, username, is_active } = req.body;

  // Check if user exists (note the duplicate query from above...)
  const existing = db.prepare("SELECT * FROM users WHERE id = ?").get(id);
  if (!existing) {
    return res.status(404).json({ error: "User not found" });
  }

  // Check if email is taken by another user
  if (email) {
    const emailCheck = db
      .prepare("SELECT * FROM users WHERE email = ? AND id != ?")
      .get(email, id);
    if (emailCheck) {
      return res.status(400).json({ error: "Email already exists" });
    }
  }

  // Build update query dynamically
  const updates = [];
  const values = [];

  if (username !== undefined) {
    updates.push("username = ?");
    values.push(username);
  }
  if (email !== undefined) {
    updates.push("email = ?");
    values.push(email);
  }
  if (is_active !== undefined) {
    updates.push("is_active = ?");
    values.push(is_active ? 1 : 0);
  }

  if (updates.length === 0) {
    return res.status(400).json({ error: "No fields to update" });
  }

  values.push(id);
  const sql = `UPDATE users SET ${updates.join(", ")} WHERE id = ?`;
  db.prepare(sql).run(...values);

  // Fetch updated user
  const user = db
    .prepare(
      "SELECT id, email, username, created_at, is_active FROM users WHERE id = ?"
    )
    .get(id);

  res.json(user);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
