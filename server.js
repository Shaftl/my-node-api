const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

// Example route
app.get("/recipes", (req, res) => {
  res.json([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Pasta" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
