const Doctor = require("../models/Doctor");

// @desc    Create a new doctor
// @route   POST /api/doctors
const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      message: "Doctor Created Successfully",
      doctor
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Get all doctors
// @route   GET /api/doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Get a single doctor by ID
// @route   GET /api/doctors/:id
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor Not Found"
      });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Update a doctor by ID
// @route   PUT /api/doctors/:id
const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Returns the modified document rather than the original
        runValidators: true // Runs schema validation on the update data
      }
    );

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor Not Found"
      });
    }

    res.status(200).json({
      message: "Doctor Updated Successfully",
      doctor
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// @desc    Delete a doctor by ID
// @route   DELETE /api/doctors/:id
const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor Not Found"
      });
    }

    await doctor.deleteOne();

    res.status(200).json({
      message: "Doctor Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
};