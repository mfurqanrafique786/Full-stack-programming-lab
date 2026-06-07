"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function PrescriptionsPage() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [treatments, setTreatments] = useState([]);

  // Form Field States
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [schedule, setSchedule] = useState("");

  useEffect(() => {
    fetchPrescriptions();
    fetchTreatments();
  }, []);

  // 🔍 1. Fetch All Active Prescriptions
  const fetchPrescriptions = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/prescriptions", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPrescriptions(res.data);
    } catch (error) {
      console.log("Error loading prescriptions:", error);
    }
  };

  // 🩺 2. Fetch Treatments to Link inside Selection Dropdown
  const fetchTreatments = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/treatments", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTreatments(res.data);
    } catch (error) {
      console.log("Error loading active treatments:", error);
    }
  };

  // ➕ 3. Submit: Link & Post New Prescription Record
  const handleCreatePrescription = async () => {
    if (!selectedTreatment || !medicineName || !dosage || !schedule) {
      alert("Please fill all mandatory prescription layout metrics!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await API.post(
        "/prescriptions",
        {
          treatment: selectedTreatment,
          medicineName,
          dosage,
          schedule
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Prescription Created & Dispatched Successfully!");
      
      // Clear inputs
      setSelectedTreatment("");
      setMedicineName("");
      setDosage("");
      setSchedule("");
      
      fetchPrescriptions(); // Refresh list on screen
    } catch (error) {
      console.error("Prescription dispatch network error:", error.response || error);
      alert(`Dispatch Failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Prescription Dispatch Module</h1>

        {/* Prescription Generation Deck */}
        <div className="bg-white shadow rounded-xl p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-purple-600">➕ Issue New Prescription Form</h2>
          
          <div className="grid md:grid-cols-4 gap-4 items-end mb-4">
            {/* Treatment Link Dropdown Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Link to Treatment File</label>
              <select
                value={selectedTreatment}
                onChange={(e) => setSelectedTreatment(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              >
                <option value="">-- Choose Treatment File --</option>
                {treatments.map((t) => (
                  <option key={t._id} value={t._id}>
                    Patient: {t.patient?.name || "Unknown"} | Diagnosis: {t.diagnosis}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Medicine Name</label>
              <input 
                type="text"
                placeholder="Amoxicillin 500mg" 
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Dosage Metrics</label>
              <input 
                type="text"
                placeholder="1 Tablet / Capsule" 
                value={dosage}
                onChange={(e) => setDosage(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Schedule / Frequency</label>
              <input 
                type="text"
                placeholder="Thrice a day (After Meals)" 
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm text-gray-800"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCreatePrescription}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm text-sm"
            >
              Dispatch Prescription
            </button>
          </div>
        </div>

        {/* Issued Prescriptions Render Grid */}
        <h2 className="text-xl font-bold mb-4 text-gray-700">Issued Pharmacy Orders</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {prescriptions.map((p) => (
            <div 
              key={p._id} 
              className="bg-white shadow rounded-lg p-5 border border-purple-100 bg-gradient-to-br from-white to-purple-50/20 space-y-2"
            >
              <div className="flex justify-between items-center border-b pb-2 border-purple-100">
                <h3 className="font-bold text-purple-700 text-lg">💊 {p.medicineName}</h3>
                <span className="text-xs bg-purple-100 text-purple-800 font-semibold px-2.5 py-0.5 rounded-full">
                  Rx Active
                </span>
              </div>
              
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Linked Patient:</strong> {p.treatment?.patient?.name || "N/A"}</p>
                <p><strong>Prescribed By:</strong> {p.treatment?.doctor?.name || "N/A"}</p>
                <p><strong>Dosage:</strong> <span className="text-gray-900 font-medium">{p.dosage}</span></p>
                <p><strong>Schedule Timing:</strong> <span className="text-gray-900 font-medium">{p.schedule}</span></p>
              </div>
            </div>
          ))}

          {prescriptions.length === 0 && (
            <p className="text-gray-500 text-center py-8 col-span-2">No prescriptions issued yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}