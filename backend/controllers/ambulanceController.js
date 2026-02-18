const AmbulanceRequest = require("../models/AmbulanceRequest");
const Hospital = require("../models/Hospital");

const requestAmbulance = async (req, res) => {
  const { patientName, location, contact } = req.body;

  const hospital = await Hospital.findOne({
    availableAmbulances: { $gt: 0 },
  }).sort({ createdAt: 1 });

  if (!hospital) {
    return res.status(400).json({ message: "No available ambulances nearby" });
  }

  const ambulanceRequest = await AmbulanceRequest.create({
    patientName,
    location,
    contact,
    nearestHospital: hospital._id,
  });

  hospital.availableAmbulances -= 1;
  await hospital.save();

  res.status(201).json({
    message: "Ambulance requested successfully",
    requestId: ambulanceRequest._id,
  });
};

const getAllAmbulanceRequests = async (req, res) => {
  const requests = await AmbulanceRequest.find().populate("nearestHospital");
  res.status(200).json(requests);
};

module.exports = { requestAmbulance, getAllAmbulanceRequests };