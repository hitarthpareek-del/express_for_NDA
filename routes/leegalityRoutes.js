const express = require("express");
const router = express.Router();

const {
  submitDocument,
} = require("../controllers/leegalityController");

router.post("/sign", submitDocument);

module.exports = router;