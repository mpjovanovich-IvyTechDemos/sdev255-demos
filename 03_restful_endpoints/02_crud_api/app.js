import express from "express";

const app = express();
const PORT = 3000;

// Grades object
const finalGrades = {
  c001: 99,
  c002: 90,
  c003: 88,
};

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
  res.json(finalGrades);
});

// Return the grades for the given student ID
app.get("/grades/:id", (req, res) => {
  const id = req.params.id;

  const grade = finalGrades[id];
  res.status(200).json(grade);
});

/* ********************************************************
 * POST routes
 ******************************************************** */
app.post("/grades", (req, res) => {
  const id = req.body.id;
  const grade = req.body.grade;

  // Not shown: Check if the student already exists and return an error if they
  // do.

  // Add the new grade to the finalGrades object
  finalGrades[id] = grade;
  res.status(201).json({ id: id, grade: grade });
});

/* ********************************************************
 * PUT routes
 ******************************************************** */
app.put("/grades/:id", (req, res) => {
  const id = req.params.id;
  const grade = req.body.grade;

  // Not shown: Check if the student already exists and return an error if they
  // do not.

  // Update the grade in the finalGrades object
  finalGrades[id] = grade;
  res.status(201).json({ id: id, grade: grade });
});

/* ********************************************************
 * DELETE routes
 ******************************************************** */
app.delete("/grades/:id", (req, res) => {
  const id = req.params.id;

  // Not shown: Check if the student already exists and return an error if they
  // do not.

  // Delete the grade from the finalGrades object
  delete finalGrades[id];

  const message = `Grade deleted for user: ${id}`;
  res.status(200).json({ message: message });
});

/* ********************************************************
 * Start the server
 ******************************************************** */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
