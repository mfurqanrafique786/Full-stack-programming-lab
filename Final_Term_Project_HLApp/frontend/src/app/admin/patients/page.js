"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  
  // Form Input States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  
  // Tracking State for Updating/Editing
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  // 🔍 1. Read: Fetch Patient List
  const fetchPatients = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/patients", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPatients(res.data);
    } catch (error) {
      console.log("Error fetching patients:", error);
    }
  };

  // ➕ 2. Create: Add Patient Profile
  const handleAddPatient = async () => {
    if (!name || !email || !phone || !age || !bloodGroup) {
      alert("Please fill all mandatory fields!");
      return;
    }
    
    try {
      const token = localStorage.getItem("token");
      await API.post(
        "/patients",
        { name, email, phone, age, bloodGroup },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      alert("Patient Profile Created Successfully!");
      clearForm();
      fetchPatients(); // Refresh view grid
    } catch (error) {
      console.error("Add Patient Network Error:", error.response || error);
      alert(`Create Failed: ${error.response?.data?.message || error.message}`);
    }
  };

  // 📝 3. Update: Save Edited Changes
  const handleUpdatePatient = async () => {
    if (!editId) return;
    
    try {
      const token = localStorage.getItem("token");
      await API.put(
        `/patients/${editId}`,
        { name, email, phone, age, bloodGroup },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Patient Profile Updated Successfully!");
      setEditId(null);
      clearForm();
      fetchPatients(); // Refresh view grid
    } catch (error) {
      console.error("Update Patient Network Error:", error.response || error);
      alert(`Update Failed: ${error.response?.data?.message || error.message}`);
    }
  };

  // ❌ 4. Delete: Remove Patient Record
  const deletePatient = async (id) => {
    if (!window.confirm("Are you sure you want to completely delete this patient record?")) return;
    
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/patients/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchPatients();
    } catch (error) {
      console.log("Error deleting patient:", error);
    }
  };

  const handleEditClick = (patient) => {
    setEditId(patient._id);
    setName(patient.name);
    setEmail(patient.email);
    setPhone(patient.phone || "");
    setAge(patient.age || "");
    setBloodGroup(patient.bloodGroup || "");
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAge("");
    setBloodGroup("");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Patients Directory</h1>

        {/* Dynamic Form Control Deck */}
        <div className="bg-white shadow rounded-xl p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-emerald-600">
            {editId ? "📝 Edit Patient Record" : "➕ Register New Patient"}
          </h2>
          
          <div className="grid md:grid-cols-5 gap-4 items-end mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input 
                type="text"
                placeholder="Abdul Salam" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input 
                type="email"
                placeholder="patient@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Contact Number</label>
              <input 
                type="text"
                placeholder="+923331234567" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Age</label>
              <input 
                type="number"
                placeholder="45" 
                value={age}
                onChange={(e) => setAge(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Blood Group</label>
              <input 
                type="text"
                placeholder="O+" 
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            {editId && (
              <button 
                type="button" 
                onClick={() => { setEditId(null); clearForm(); }}
                className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
            )}
            <button 
              type="button" 
              onClick={editId ? handleUpdatePatient : handleAddPatient}
              className={`px-6 py-2 text-white rounded-lg font-medium transition-colors ${
                editId ? "bg-amber-500 hover:bg-amber-600" : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              {editId ? "Save Changes" : "Create Profile"}
            </button>
          </div>
        </div>

        {/* Patients Render Grid List */}
        <h2 className="text-xl font-bold mb-4 text-gray-700">Registered Patients</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {patients.map((patient) => (
            <div 
              key={patient._id} 
              className="bg-white shadow rounded-lg p-5 border border-gray-100 flex justify-between items-center"
            >
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-gray-900">{patient.name}</h3>
                <p className="text-sm text-gray-600">{patient.email}</p>
                <p className="text-xs text-gray-500">📞 {patient.phone || "N/A"} | 🎂 Age: {patient.age || "N/A"}</p>
                <span className="mt-2 inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                  Blood Group: {patient.bloodGroup || "Not Provided"}
                </span>
              </div>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleEditClick(patient)}
                  className="bg-amber-50 text-amber-700 border border-amber-200 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-amber-100 transition-colors"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deletePatient(patient._id)}
                  className="bg-rose-50 text-rose-700 border border-rose-200 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-rose-100 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {patients.length === 0 && (
            <p className="text-gray-500 text-center py-8 col-span-2">No patients records found.</p>
          )}
        </div>
      </div>
    </div>
  );
}