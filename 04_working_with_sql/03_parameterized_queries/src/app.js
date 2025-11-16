import express from "express";
import { createConnection, initializeDatabase } from "./db.js";

const app = express();
const PORT = 3000;
let db;

try {
  db = await createConnection();
  initializeDatabase(db);
} catch (err) {
  console.error("Failed to initialize database:", err.message);
  process.exit(1);
}

/* ********************************************************
 * Middleware
 ******************************************************** */
// Body content will be in JSON format, so we need this
app.use(express.json());

/* ********************************************************
 * GET routes
 ******************************************************** */
// Return all grades as a JSON object
app.get("/mustards", (req, res) => {
  const sql = "SELECT * FROM Mustard";

  db.all(sql, function (err, rows) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(rows);
    }
  });
});

// Return the mustard for the given ID
app.get("/mustards/:id", (req, res) => {
  const id = req.params.id;

  // Validate id here; not shown...

  const sql = "SELECT * FROM Mustard WHERE id = ?";

  db.get(sql, [id], function (err, row) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(row);
    }
  });
});

/* ********************************************************
 * POST routes
 ******************************************************** */
app.post("/mustards", (req, res) => {
  // Object destructuring
  // This is a shorthand for storing object properties in variables
  const { id, brand, type } = req.body;

  // Validate the data here; not shown...

  const sql = `INSERT INTO Mustard (id, brand, type) VALUES (?, ?, ?)`;

  db.run(sql, [id, brand, type], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: id, brand: brand, type: type });
    }
  });
});

/* ********************************************************
 * Start the server
 ******************************************************** */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
