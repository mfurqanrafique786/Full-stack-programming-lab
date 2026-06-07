const Appointment = require("../models/Appointment");
const Notification = require("../models/Notification"); 

// @desc    Create a new appointment request
const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json({ message: "Appointment Created Successfully", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all appointments with patient and doctor details
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("patient").populate("doctor");
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Approve an appointment, assign a doctor, and trigger a notification
const approveAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: "Approved", doctor: req.body.doctorId },
      { new: true }
    );

    if (!appointment) return res.status(404).json({ message: "Appointment Not Found" });

    // Automatically create a notification for the patient
    await Notification.create({
      recipientType: "Patient",
      recipientId: appointment.patient.toString(),
      title: "Appointment Approved",
      message: "Your appointment request has been approved and scheduled successfully."
    });

    res.status(200).json({ message: "Appointment Approved and Notification Sent", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Reject an appointment request and trigger a notification
const rejectAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" },
      { new: true }
    );

    if (!appointment) return res.status(404).json({ message: "Appointment Not Found" });

    // 🔥 ADDED AUTOMATIC NOTIFICATION FOR REJECTION
    await Notification.create({
      recipientType: "Patient",
      recipientId: appointment.patient.toString(),
      title: "Appointment Rejected",
      message: "Your appointment request has been rejected. Please select an alternate schedule time."
    });

    res.status(200).json({ message: "Appointment Rejected and Notification Sent", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createAppointment, getAppointments, approveAppointment, rejectAppointment };