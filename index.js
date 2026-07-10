const express = require("express");
const cors = require("cors");

const app = express();

const leegalityRoutes = require("./routes/leegalityRoutes");

app.use("/api/leegality", leegalityRoutes);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});

module.exports = app;