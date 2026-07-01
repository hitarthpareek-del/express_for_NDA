const express = require("express");
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

router.post("/", createEmployee);

// Get All Employees
router.get("/", getEmployees);

// Get Employee By ID
router.get("/:id", getEmployeeById);

// Delete Employee
router.delete("/:id", deleteEmployee);

module.exports = router;