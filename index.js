const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://hitarthpareek_db_user:rRIzINfIr6jDYrc1@leegality.i2zmexx.mongodb.net/testingfolder?retryWrites=true&w=majority&appName=leegality")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Save Name
app.post("/users", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
    });

    await user.save();

    res.json({
      message: "User Saved",
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});