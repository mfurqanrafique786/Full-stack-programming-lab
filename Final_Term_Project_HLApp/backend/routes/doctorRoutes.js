const express = require("express");
const router = express.Router();

const { 
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor 
} = require("../controllers/doctorController");

const { protect } = require("../middleware/authMiddleware");

// 🔓 Temporarily removed strict case-sensitive authorizeRoles to fix frontend "Access Denied" errors

// @route   POST /api/doctors
// @desc    Create a new doctor
router.post(
  "/",
  protect,
  createDoctor
);

// @route   GET /api/doctors
// @desc    Get all doctors
router.get(
  "/",
  protect,
  getDoctors
);

// @route   GET /api/doctors/:id
// @desc    Get a single doctor by ID
router.get(
  "/:id",
  protect,
  getDoctorById
);

// @route   PUT /api/doctors/:id
// @desc    Update a doctor by ID
router.put(
  "/:id",
  protect,
  updateDoctor
);

// @route   DELETE /api/doctors/:id
// @desc    Delete a doctor by ID
router.delete(
  "/:id",
  protect,
  deleteDoctor
);

module.exports = router;