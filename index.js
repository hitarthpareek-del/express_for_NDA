require("dotenv").config();

const express = require("express");
const cors = require("cors");

const leegalityRoutes = require("./routes/leegalityRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.use("/api/leegality", leegalityRoutes);

// Run locally only
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

// Required for Vercel
module.exports = app;