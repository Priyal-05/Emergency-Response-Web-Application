import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = ({ closeForm }) => {
  const [formType, setFormType] = useState('appointment');
  const [location, setLocation] = useState('');
  const [mapPosition, setMapPosition] = useState(null);
  const [eta, setEta] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userEmail: '',
    userNumber: '',
    patientName: '',
    emergencyType: '',
    patientCondition: '',
    location: '',
  });

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapPosition([latitude, longitude]);
          setLocation(`Lat: ${latitude}, Lng: ${longitude}`);
          setFormData({ ...formData, location: `Lat: ${latitude}, Lng: ${longitude}` });
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to get location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formType === 'appointment' ? 'Appointment Booked!' : 'Ambulance Requested!');
    closeForm();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div
        className="popup-form relative mt-12 overflow-y-auto p-6 w-full max-w-lg bg-white rounded-2xl shadow-2xl"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          <h1 className="text-4xl font-bold text-center">🚨 Contact Us</h1>
          
          <div className="flex justify-center gap-6 mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="formType" value="appointment" checked={formType === 'appointment'} onChange={() => setFormType('appointment')} className="form-radio" />
              <span>Book Appointment</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="formType" value="ambulance" checked={formType === 'ambulance'} onChange={() => setFormType('ambulance')} className="form-radio" />
              <span>Request Ambulance</span>
            </label>
          </div>

          {formType === 'appointment' && (
            <>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg" />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg" />
              <input type="text" name="userNumber" placeholder="Phone Number" value={formData.userNumber} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg" />
              <input type="email" name="userEmail" placeholder="Email" value={formData.userEmail} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg" />
              <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">📅 Book Appointment</button>
            </>
          )}

          {formType === 'ambulance' && (
            <>
              <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg" />
              <input type="text" name="userNumber" placeholder="Phone Number" value={formData.userNumber} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg" />
              <input type="email" name="userEmail" placeholder="Email" value={formData.userEmail} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg" />
              <select name="emergencyType" value={formData.emergencyType} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg">
                <option value="">Select Emergency Type</option>
                <option value="accident">🚗 Accident</option>
                <option value="heart-attack">❤️ Heart Attack</option>
                <option value="stroke">🧠 Stroke</option>
              </select>
              <textarea name="patientCondition" placeholder="Brief Description of Patient's Condition" value={formData.patientCondition} onChange={handleChange} required className="w-full py-3 px-4 border border-gray-300 rounded-lg"></textarea>
              {mapPosition && (
                <MapContainer center={mapPosition} zoom={15} style={{ height: "250px", width: "100%" }} className="rounded-lg border border-gray-300 shadow-md">
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={mapPosition}><Popup>You are here!</Popup></Marker>
                </MapContainer>
              )}
              <button type="button" onClick={getCurrentLocation} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">📍 Use My Current Location</button>
              <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">🚑 Request Ambulance</button>
            </>
          )}

          <button type="button" className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600" onClick={closeForm}>❌ Close</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
















