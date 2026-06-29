const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Port
const PORT = process.env.PORT || 3000;

// MongoDB URI
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://hitarthpareek_db_user:rRIzINfIr6jDYrc1@leegality.i2zmexx.mongodb.net/testingfolder?retryWrites=true&w=majority&appName=leegality";

// Schema
const userSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

// Model
const User = mongoose.model("User", userSchema);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running",
  });
});

// Save User
app.post("/api/users", async (req, res) => {
  try {
    const { organization, name, position, address } = req.body;

    if (!organization || !name || !position || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = await User.create({
      organization,
      name,
      position,
      address,
    });

    res.status(201).json({
      success: true,
      message: "User saved successfully.",
      data: user,
    });
  } catch (err) {
    console.error("Error saving user:", err);

    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
});

// Start Server
async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
    process.exit(1);
  }
}

startServer();