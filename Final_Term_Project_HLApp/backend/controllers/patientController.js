const Patient = require("../models/Patient");

// @desc    Create a new patient
// @route   POST /api/patients
const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);

    res.status(201).json({
      message: "Patient Created Successfully",
      patient
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Get all patients
// @route   GET /api/patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate("assignedDoctor");

    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Get patient by ID
// @route   GET /api/patients/:id
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate("assignedDoctor");

    if (!patient) {
      return res.status(404).json({
        message: "Patient Not Found"
      });
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Update patient details
// @route   PUT /api/patients/:id
const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!patient) {
      return res.status(404).json({
        message: "Patient Not Found"
      });
    }

    res.status(200).json({
      message: "Patient Updated Successfully",
      patient
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Delete a patient
// @route   DELETE /api/patients/:id
const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({
        message: "Patient Not Found"
      });
    }

    await patient.deleteOne();

    res.status(200).json({
      message: "Patient Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Export all controller functions
module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient
};