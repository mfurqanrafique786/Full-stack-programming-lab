"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function PatientPrescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const token = localStorage.getItem("token");
        const storedId = localStorage.getItem("userId") || localStorage.getItem("patientId");
        const res = await API.get("/prescriptions", { headers: { Authorization: `Bearer ${token}` } });
        
        if (Array.isArray(res.data)) {
          const filtered = res.data.filter(p => (p.patient?._id || p.patient) === storedId);
          setPrescriptions(filtered);
        }
      } catch (err) {
        console.log("Error fetching prescription data:", err);
      }
    };
    fetchPrescriptions();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="p-8 max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-black text-gray-800">My Active Prescriptions (Rx)</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {prescriptions.map(p => (
            <div key={p._id} className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm border-t-4 border-t-purple-500 space-y-2">
              <h3 className="font-bold text-lg text-purple-700">💊 {p.medicationName || "Medication Order"}</h3>
              <div className="text-xs text-gray-600 space-y-1 pt-1 border-t border-gray-100">
                <p><strong>Dosage Layout:</strong> {p.dosage}</p>
                <p><strong>Schedule Frequency:</strong> {p.schedule}</p>
                {p.instructions && <p><strong>Special Instructions:</strong> {p.instructions}</p>}
                <p><strong>Prescribed By Doctor:</strong> {p.doctor?.name || "Medical Staff Specialist"}</p>
              </div>
            </div>
          ))}
          {prescriptions.length === 0 && (
            <p className="text-sm text-gray-400 italic col-span-2">No medication orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
}