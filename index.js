
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect("mongodb+srv://hitarthpareek_db_user:rRIzINfIr6jDYrc1@leegality.i2zmexx.mongodb.net/testingfolder?retryWrites=true&w=majority&appName=leegality")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Store uploaded file in memory
const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Upload Route
app.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No PDF uploaded",
      });
    }

    const user = new User({
      name: req.body.name,
      pdf: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
        fileName: req.file.originalname,
      },
    });

    await user.save();

    res.status(201).json({
      message: "User and PDF saved successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, {
      "pdf.data": 0
    });

    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
 