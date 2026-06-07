const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },

    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true
    },

    diagnosis: {
      type: String,
      required: true
    },

    physicalCheckup: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Ongoing", "Recovered", "Critical"],
      default: "Ongoing"
    },

    followUps: [
      {
        visitDate: {
          type: Date,
          default: Date.now
        },
        notes: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Treatment", treatmentSchema);