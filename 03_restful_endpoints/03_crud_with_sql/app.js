import express from "express";

const app = express();
const PORT = 3000;

// const db = new sqlite3.Database('grades.db');

/* ********************************************************
 * Middleware
 ******************************************************** */
// Body content will be in JSON format, so we need this
app.use(express.json());

/* ********************************************************
 * GET routes
 ******************************************************** */
// Return all grades as a JSON object
app.get("/grades", (req, res) => {
  //
});

// Return the grades for the given student ID
app.get("/grades/:id", (req, res) => {
  const id = req.params.id;
  //
});

/* ********************************************************
 * POST routes
 ******************************************************** */
app.post("/grades", (req, res) => {
  const id = req.body.id;
  const grade = req.body.grade;

  // res.status(201).json({ id: id, grade: grade });
});

/* ********************************************************
 * PUT routes
 ******************************************************** */
app.put("/grades/:id", (req, res) => {
  const id = req.params.id;
  const grade = req.body.grade;

  // res.status(201).json({ id: id, grade: grade });
});

/* ********************************************************
 * DELETE routes
 ******************************************************** */
app.delete("/grades/:id", (req, res) => {
  const id = req.params.id;

  // res.status(200).json({ message: message });
});

/* ********************************************************
 * Start the server
 ******************************************************** */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
