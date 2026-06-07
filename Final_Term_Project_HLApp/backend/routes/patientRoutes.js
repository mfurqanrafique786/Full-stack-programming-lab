const express = require("express");
const router = express.Router();

// Destructure all controller functions from the patient controller
const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient
} = require("../controllers/patientController");

// Middleware imports
const { protect } = require("../middleware/authMiddleware");

// 🔓 Temporarily bypassed strict "admin" role check to fix frontend "Access Denied" issues

// @route   POST /api/patients
// @desc    Create a new patient
// @access  Private
router.post(
  "/",
  protect,
  createPatient
);

// @route   GET /api/patients
// @desc    Get all patients
// @access  Private
router.get(
  "/",
  protect,
  getPatients
);

// @route   GET /api/patients/:id
// @desc    Get patient by ID
// @access  Private
router.get(
  "/:id",
  protect,
  getPatientById
);

// @route   PUT /api/patients/:id
// @desc    Update patient details
// @access  Private
router.put(
  "/:id",
  protect,
  updatePatient
);

// @route   DELETE /api/patients/:id
// @desc    Delete a patient
// @access  Private
router.delete(
  "/:id",
  protect,
  deletePatient
);

module.exports = router;