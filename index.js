const express = require("express");

const app = express();

const cors = require('cors');

app.use(express.json());

app.use(cors());

const leegalityRoutes = require("./routes/leegalityRoutes");

app.use("/api/leegality", leegalityRoutes);

app.get("/", (req, res) => {
  res.send("Working");
});

module.exports = app;