const Employee = require("../models/employee.model");

/*
====================================
Create Employee
POST /api/employees
====================================
*/

const createEmployee = async (req, res) => {
  try {
    const { company, employee } = req.body;
    console.log(req.body);

    // Basic Validation
    if (!company) {
      return res.status(400).json({
        success: false,
        message: "Company is required.",
      });
    }

    if (!employee) {
      return res.status(400).json({
        success: false,
        message: "Employee information is required.",
      });
    }

    // Create Employee
    const newEmployee = await Employee.create({
      company,
      employee,
    });

    return res.status(201).json({
      success: true,
      message: "Employee created successfully.",
      data: newEmployee,
    });
  } catch (error) {
    console.error("Create Employee Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

/*
====================================
Get All Employees
GET /api/employees
====================================
*/

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    console.error("Get Employees Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

/*
====================================
Get Employee By ID
GET /api/employees/:id
====================================
*/

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    console.error("Get Employee Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

/*
====================================
Update Employee
PUT /api/employees/:id
====================================
*/

const updateEmployee = async (req, res) => {
  try {
    const { company, employee } = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        company,
        employee,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedEmployee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Employee updated successfully.",
      data: updatedEmployee,
    });
  } catch (error) {
    console.error("Update Employee Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

/*
====================================
Delete Employee
DELETE /api/employees/:id
====================================
*/

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Employee deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Employee Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};