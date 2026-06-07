const express = require("express");
const router = express.Router();

// Destructure all controller functions from the prescription controller
const {
  createPrescription,
  getPrescriptions,
  getPatientPrescriptionHistory
} = require("../controllers/prescriptionController");

// Middleware imports
const { protect } = require("../middleware/authMiddleware");

// @route   POST /api/prescriptions
// @desc    Create a new prescription
// @access  Private
router.post(
  "/",
  protect,
  createPrescription
);

// @route   GET /api/prescriptions
// @desc    Get all prescriptions
// @access  Private
router.get(
  "/",
  protect,
  getPrescriptions
);

// @route   GET /api/prescriptions/patient/:patientId
// @desc    Get prescription history for a specific patient
// @access  Private
router.get(
  "/patient/:patientId",
  protect,
  getPatientPrescriptionHistory
);

module.exports = router;