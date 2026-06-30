const multer = require("multer");

/*
=========================================
Multer Storage
=========================================
*/

const storage = multer.memoryStorage();

/*
=========================================
File Upload Middleware
=========================================
*/

const upload = multer({
  storage,

  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
});

module.exports = upload;