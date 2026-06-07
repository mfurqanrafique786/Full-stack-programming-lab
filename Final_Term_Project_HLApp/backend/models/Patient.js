const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  age: {
    type: Number,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  assignedDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  }
},
{
  timestamps: true
}
);

module.exports = mongoose.model(
  "Patient",
  patientSchema
);