require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const apiRoutes = require("./routes/apiRoutes");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Parse JSON request body
connectDB();

app.use("/api", apiRoutes); 

app.get("/images/:name", (req, res) => {
  const imageName = req.params.name;
  const imagePath = path.join(__dirname, "images", imageName);

  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    }
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});

app.use((req, res) => {
  res.status(404).send({ error: "Sorry, can't find that" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
