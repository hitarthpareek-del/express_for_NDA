const Employee = require("../models/employee.model");

/*
====================================
Create Employee
POST /api/employees
====================================
*/

const createEmployee = async (req, res) => {
  try {
    const {
      company,
      employee,
      documents
    } = req.body;

    /*
    ===============================
    Basic Validation
    ===============================
    */

    if (!company) {
      return res.status(400).json({
        success: false,
        message: "Company is required."
      });
    }

    if (!employee) {
      return res.status(400).json({
        success: false,
        message: "Employee information is required."
      });
    }

    /*
    ===============================
    Save Employee
    ===============================
    */

    const newEmployee = await Employee.create({

      company,

      employee,

      documents

    });

    return res.status(201).json({

      success: true,

      message: "Employee created successfully.",

      data: newEmployee

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Internal Server Error."

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

    const employees = await Employee
      .find()
      .sort({ createdAt: -1 });

    return res.status(200).json({

      success: true,

      count: employees.length,

      data: employees

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Internal Server Error."

    });

  }

};

/*
====================================
Get Single Employee
GET /api/employees/:id
====================================
*/

const getEmployeeById = async (req, res) => {

  try {

    const employee = await Employee.findById(req.params.id);

    if (!employee) {

      return res.status(404).json({

        success: false,

        message: "Employee not found."

      });

    }

    return res.status(200).json({

      success: true,

      data: employee

    });

  }

  catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Internal Server Error."

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

    const employee =
      await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {

      return res.status(404).json({

        success: false,

        message: "Employee not found."

      });

    }

    return res.status(200).json({

      success: true,

      message: "Employee deleted successfully."

    });

  }

  catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Internal Server Error."

    });

  }

};

module.exports = {

  createEmployee,

  getEmployees,

  getEmployeeById,

  deleteEmployee

};