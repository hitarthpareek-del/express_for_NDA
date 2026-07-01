const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employee.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Employee Onboarding API is running.",
  });
});

app.use("/api/employees", employeeRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

module.exports = app;