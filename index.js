const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("<YOUR_MONGODB_CONNECTION_STRING>")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Model
const User = mongoose.model("User", userSchema);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Save User
app.post("/api/users", async (req, res) => {
  try {
    const { organization, name, position, address } = req.body;

    const user = new User({
      organization,
      name,
      position,
      address,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "User saved successfully",
      data: user,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to save user",
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});