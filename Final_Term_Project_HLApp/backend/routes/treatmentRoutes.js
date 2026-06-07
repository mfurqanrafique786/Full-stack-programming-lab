const express = require("express");
const router = express.Router();

const {
  createTreatment,
  getTreatments,
  addFollowUp,
  updateTreatmentStatus,
  getPatientTreatmentHistory
} = require("../controllers/treatmentController");

const { protect } = require("../middleware/authMiddleware");

// @route    POST /api/treatments
// @desc     Create a new treatment record
router.post("/", protect, createTreatment);

// @route    GET /api/treatments
// @desc     Get all treatment records
router.get("/", protect, getTreatments);

// @route    POST /api/treatments/:id/followup
// @desc     Add a follow-up visit note to a treatment (FIXED: Matched Controller definition)
router.post("/:id/followup", protect, addFollowUp);

// @route    PUT /api/treatments/:id/status
// @desc     Update the active status of a treatment (FIXED: Matched Controller definition)
router.put("/:id/status", protect, updateTreatmentStatus);

// @route    GET /api/treatments/patient/:patientId
// @desc     Get treatment history for a specific patient
router.get("/patient/:patientId", protect, getPatientTreatmentHistory);

module.exports = router;