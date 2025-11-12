import express from "express";

const app = express();
const PORT = 3000;

// Grades object
const finalGrades = {
  c001: 99,
  c002: 90,
  c003: 88,
};

// Return all grades as a JSON object
app.get("/grades", (req, res) => {
  res.json(finalGrades);
});

// Return the grades for the given student ID
app.get("/grades/:id", (req, res) => {
  const id = req.params.id;

  // Validate what the user provided
  if (!id) {
    res.status(400).json({ error: "No name provided" });
    return;
  }

  // Make sure the colorSchemes object has the requested key
  if (!finalGrades.hasOwnProperty(id)) {
    res.status(404).json({ error: "Student not found" });
    return;
  }

  const grade = finalGrades[id];
  res.json(grade);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
