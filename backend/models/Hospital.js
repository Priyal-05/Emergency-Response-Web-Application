const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    capacity: { type: Number, required: true },
    availableAmbulances: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hospital", hospitalSchema);