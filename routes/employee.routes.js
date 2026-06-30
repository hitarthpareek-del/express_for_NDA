const express = require("express");
const upload = require("../middleware/upload.middleware");
const router = express.Router();

const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  deleteEmployee,
} = require("../controllers/employee.controller");

/*
========================================
Employee Routes
========================================
*/

// Create Employee
router.post(
    "/",
    upload.fields([
      {
        name: "panCardCopy",
        maxCount: 1,
      },
      {
        name: "aadhaarCopy",
        maxCount: 1,
      },
      {
        name: "passportPhoto",
        maxCount: 1,
      },
      {
        name: "cancelledCheque",
        maxCount: 1,
      },
      {
        name: "dobProof",
        maxCount: 1,
      },
      {
        name: "educationCertificates",
        maxCount: 5,
      },
      {
        name: "salarySlips",
        maxCount: 5,
      },
      {
        name: "relievingLetter",
        maxCount: 5,
      },
      {
        name: "resume",
        maxCount: 1,
      },
    ]),
    createEmployee
  );

// Get All Employees
router.get("/", getEmployees);

// Get Employee By ID
router.get("/:id", getEmployeeById);

// Delete Employee
router.delete("/:id", deleteEmployee);

module.exports = router;