import express from "express";

const app = express();
const PORT = 3000;

// Color scheme object
const colorSchemes = {
  superRed: { primary: "red", secondary: "red", tertiary: "red" },
  kindaRed: { primary: "red", secondary: "pink", tertiary: "magenta" },
};

// We will expect the request body to be JSON
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  const text = req.body.text;
  res.send("Post received: " + text);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
