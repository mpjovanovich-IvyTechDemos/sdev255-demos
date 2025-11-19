import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = path.resolve(fileURLToPath(import.meta.url), "..");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const birds = {
  cardinal: {
    commonName: "Northern Cardinal",
    scientificName: "Cardinalis cardinalis",
    imageUrl:
      "https://indianaaudubon.org/wp-content/uploads/2016/04/Cardinal_Northern_male_Ash_2012.jpg",
  },
  mourningDove: {
    commonName: "Muorning Dove",
    scientificName: "Zenaida macroura",
    imageUrl:
      "https://indianaaudubon.org/wp-content/uploads/2016/04/1337616657773062826pair-of-mourning-doves.jpg",
  },
  redWingedBlackbird: {
    commonName: "Red-winged Blackbird",
    scientificName: "Agelaius phoeniceus",
    imageUrl:
      "https://indianaaudubon.org/wp-content/uploads/2016/04/RedWingedBlackbird2.jpg",
  },
};

app.get("/", (req, res) => {
  const isMember = req.query.member === "true";
  res.render("index", { isMember: isMember });
});

app.get("/bird/:birdId", (req, res) => {
  const birdId = req.params.birdId;
  const bird = birds[birdId];
  res.render("bird", { bird: bird });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
