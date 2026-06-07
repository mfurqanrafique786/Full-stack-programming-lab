"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  
  // Form Input States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");         // Added phone state
  const [experience, setExperience] = useState(""); // Added experience state
  
  // Tracking State for Updating/Editing
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  // 🔍 1. Read: Fetch Doctor List
  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/doctors", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setDoctors(res.data);
    } catch (error) {
      console.log("Error fetching doctors:", error);
    }
  };

  // ➕ 2. Create: Add Doctor Profile
  const handleAddDoctor = async () => {
    if (!name || !email || !specialization || !phone || !experience) {
      alert("Please fill all fields before creating!");
      return;
    }
    
    try {
      const token = localStorage.getItem("token");
      await API.post(
        "/doctors",
        { name, email, specialization, phone, experience }, // Added phone and experience to payload
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      alert("Doctor Profile Created Successfully!");
      clearForm();
      fetchDoctors(); 
    } catch (error) {
      console.error("Add Doctor Network Error:", error.response || error);
      alert(`Create Failed: ${error.response?.data?.message || error.message}`);
    }
  };

  // 📝 3. Update: Save Edited Changes
  const handleUpdateDoctor = async () => {
    if (!editId) return;
    
    try {
      const token = localStorage.getItem("token");
      await API.put(
        `/doctors/${editId}`,
        { name, email, specialization, phone, experience }, // Added phone and experience to payload
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Doctor Profile Updated Successfully!");
      setEditId(null);
      clearForm();
      fetchDoctors(); 
    } catch (error) {
      console.error("Update Doctor Network Error:", error.response || error);
      alert(`Update Failed: ${error.response?.data?.message || error.message}`);
    }
  };

  // ❌ 4. Delete: Remove Doctor
  const deleteDoctor = async (id) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) return;
    
    try {
      const token = localStorage.getItem("token");
      await API.delete(`/doctors/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchDoctors();
    } catch (error) {
      console.log("Error deleting doctor:", error);
    }
  };

  const handleEditClick = (doctor) => {
    setEditId(doctor._id);
    setName(doctor.name);
    setEmail(doctor.email);
    setSpecialization(doctor.specialization);
    setPhone(doctor.phone || "");              // Populate phone
    setExperience(doctor.experience || "");    // Populate experience
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setSpecialization("");
    setPhone("");
    setExperience("");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Doctors Directory</h1>

        {/* Input panel handles all mandatory backend properties */}
        <div className="bg-white shadow rounded-xl p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-blue-600">
            {editId ? "📝 Edit Doctor Record" : "➕ Add New Doctor"}
          </h2>
          
          <div className="grid md:grid-cols-5 gap-4 items-end mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input 
                type="text"
                placeholder="Dr. John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input 
                type="email"
                placeholder="doctor@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Specialization</label>
              <input 
                type="text"
                placeholder="Cardiology" 
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
              <input 
                type="text"
                placeholder="+923001234567" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Experience (Years)</label>
              <input 
                type="text"
                placeholder="5" 
                value={experience}
                onChange={(e) => setExperience(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
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
              onClick={editId ? handleUpdateDoctor : handleAddDoctor}
              className={`px-6 py-2 text-white rounded-lg font-medium transition-colors ${
                editId ? "bg-amber-500 hover:bg-amber-600" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {editId ? "Save Changes" : "Create Profile"}
            </button>
          </div>
        </div>

        {/* Medical Personnel Render List Grid */}
        <h2 className="text-xl font-bold mb-4 text-gray-700">Active Medical Personnel</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {doctors.map((doctor) => (
            <div 
              key={doctor._id} 
              className="bg-white shadow rounded-lg p-5 border border-gray-100 flex justify-between items-center"
            >
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.email}</p>
                <p className="text-xs text-gray-500">📞 {doctor.phone || "N/A"} | 🎓 {doctor.experience ? `${doctor.experience} Years Exp` : "N/A"}</p>
                <span className="mt-2 inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                  {doctor.specialization}
                </span>
              </div>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleEditClick(doctor)}
                  className="bg-amber-50 text-amber-700 border border-amber-200 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-amber-100 transition-colors"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteDoctor(doctor._id)}
                  className="bg-rose-50 text-rose-700 border border-rose-200 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-rose-100 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}