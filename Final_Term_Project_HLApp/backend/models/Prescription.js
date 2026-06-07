const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
{
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },

    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    },

    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Appointment",
        required:true
    },

    medicationName:{
        type:String,
        required:true
    },

    dosage:{
        type:String,
        required:true
    },

    schedule:{
        type:String,
        required:true
    },

    instructions:{
        type:String
    }
},
{
    timestamps:true
}
);

module.exports =
mongoose.model(
    "Prescription",
    prescriptionSchema
);