const Prescription = require("../models/Prescription");
const Notification = require("../models/Notification"); // 🔥 Imported Notification Model

// @desc    Create a new prescription & notify patient
const createPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.create(req.body);

    // 🔥 AUTOMATIC NOTIFICATION FOR NEW PRESCRIPTION
    if (req.body.patient) {
      await Notification.create({
        recipientType: "Patient",
        recipientId: req.body.patient.toString(),
        title: "New Prescription Added",
        message: `A new prescription for "${req.body.medicineName || 'medicine'}" has been added to your record.`
      });
    }

    res.status(201).json({ message: "Prescription Created Successfully", prescription });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all prescriptions with population
const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find().populate("patient").populate("doctor").populate("appointment");
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get prescription history for a specific patient
const getPatientPrescriptionHistory = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ patient: req.params.patientId }).populate("doctor").populate("appointment");
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPrescription, getPrescriptions, getPatientPrescriptionHistory };