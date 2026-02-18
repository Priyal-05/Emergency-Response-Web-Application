const Hospital = require("../models/Hospital");

const getHospitals = async (req, res) => {
  const hospitals = await Hospital.find();
  res.status(200).json(hospitals);
};

const getHospitalById = async (req, res) => {
  const hospital = await Hospital.findById(req.params.id);
  if (hospital) {
    res.status(200).json(hospital);
  } else {
    res.status(404).json({ message: "Hospital not found" });
  }
};

const addHospital = async (req, res) => {
  const { name, location, contact, capacity, availableAmbulances } = req.body;
  const hospital = await Hospital.create({
    name,
    location,
    contact,
    capacity,
    availableAmbulances,
  });
  res.status(201).json(hospital);
};

const updateHospital = async (req, res) => {
  const hospital = await Hospital.findById(req.params.id);
  if (hospital) {
    hospital.name = req.body.name || hospital.name;
    hospital.location = req.body.location || hospital.location;
    hospital.contact = req.body.contact || hospital.contact;
    hospital.capacity = req.body.capacity || hospital.capacity;
    hospital.availableAmbulances =
      req.body.availableAmbulances || hospital.availableAmbulances;

    const updatedHospital = await hospital.save();
    res.status(200).json(updatedHospital);
  } else {
    res.status(404).json({ message: "Hospital not found" });
  }
};

const deleteHospital = async (req, res) => {
  const hospital = await Hospital.findById(req.params.id);
  if (hospital) {
    await hospital.deleteOne();
    res.status(200).json({ message: "Hospital removed" });
  } else {
    res.status(404).json({ message: "Hospital not found" });
  }
};

module.exports = {
  getHospitals,
  getHospitalById,
  addHospital,
  updateHospital,
  deleteHospital,
};