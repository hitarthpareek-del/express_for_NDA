const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employee.routes");

const app = express();

/* ============================
   Global Middlewares
============================ */

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* ============================
   Health Check Route
============================ */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Employee Onboarding API is running.",
  });
});

/* ============================
   API Routes
============================ */

app.use("/api/employees", employeeRoutes);

/* ============================
   404 Route
============================ */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

module.exports = app;