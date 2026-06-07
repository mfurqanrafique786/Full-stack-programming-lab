const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAppointments,
  approveAppointment,
  rejectAppointment
} = require("../controllers/appointmentController");

const { protect } = require("../middleware/authMiddleware");

// @route   POST /api/appointments
router.post("/", protect, createAppointment);

// @route   GET /api/appointments
router.get("/", protect, getAppointments);

// @route   PUT /api/appointments/:id/approve
router.put("/:id/approve", protect, approveAppointment);

// @route   PUT /api/appointments/:id/reject
router.put("/:id/reject", protect, rejectAppointment);

module.exports = router;