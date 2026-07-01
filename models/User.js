const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pdf: {
      data: Buffer,
      contentType: String,
      fileName: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);