const mongoose = require("mongoose");

const ambulanceRequestSchema = mongoose.Schema(
  {
    patientName: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
    nearestHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AmbulanceRequest", ambulanceRequestSchema);