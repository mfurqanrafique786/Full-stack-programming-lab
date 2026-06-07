const Treatment = require("../models/Treatment");
const Notification = require("../models/Notification"); // 🔥 Imported Notification Model

// @desc    Create a new treatment record
const createTreatment = async (req, res) => {
  try {
    const treatment = await Treatment.create(req.body);
    res.status(201).json({ message: "Treatment Created Successfully", treatment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all treatment records with population
const getTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find().populate("patient").populate("doctor").populate("appointment");
    res.status(200).json(treatments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add a follow-up visit note to a treatment & notify patient
const addFollowUp = async (req, res) => {
  try {
    const treatment = await Treatment.findById(req.params.id);
    if (!treatment) return res.status(404).json({ message: "Treatment Not Found" });

    // Push new sub-document object into the followUps array
    treatment.followUps.push({
      notes: req.body.notes
    });

    await treatment.save();

    // 🔥 AUTOMATIC NOTIFICATION FOR FOLLOW-UP REMINDER
    await Notification.create({
      recipientType: "Patient",
      recipientId: treatment.patient.toString(),
      title: "Follow-Up Reminder",
      message: "A new follow-up progress note or schedule entry has been logged to your treatment."
    });

    res.status(200).json({ message: "Follow Up Added", treatment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update the active status of a treatment & notify patient
const updateTreatmentStatus = async (req, res) => {
  try {
    const treatment = await Treatment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!treatment) return res.status(404).json({ message: "Treatment Not Found" });

    // 🔥 AUTOMATIC NOTIFICATION FOR STATUS UPDATE
    await Notification.create({
      recipientType: "Patient",
      recipientId: treatment.patient.toString(),
      title: "Treatment Progress Updated",
      message: `Your treatment medical file status has transitioned to "${req.body.status}".`
    });

    res.status(200).json({ message: "Treatment Status Updated", treatment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get treatment history for a specific patient
const getPatientTreatmentHistory = async (req, res) => {
  try {
    const treatments = await Treatment.find({ patient: req.params.patientId }).populate("doctor").populate("appointment");
    res.status(200).json(treatments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTreatment, getTreatments, addFollowUp, updateTreatmentStatus, getPatientTreatmentHistory };