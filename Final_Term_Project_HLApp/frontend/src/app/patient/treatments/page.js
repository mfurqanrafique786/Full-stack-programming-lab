"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function PatientTreatments() {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const fetchTreats = async () => {
      try {
        const token = localStorage.getItem("token");
        const storedId = localStorage.getItem("userId") || localStorage.getItem("patientId");
        const res = await API.get(`/treatments`, { headers: { Authorization: `Bearer ${token}` } });
        
        if (Array.isArray(res.data)) {
          const filtered = res.data.filter(t => (t.patient?._id || t.patient) === storedId);
          setTreatments(filtered);
        }
      } catch (err) {
        console.log("Error loading treatments:", err);
      }
    };
    fetchTreats();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="p-8 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-black text-gray-800">My Medical Treatment Logs</h1>
          <p className="text-xs text-gray-400">Official medical charts from your practitioners</p>
        </div>

        <div className="space-y-4">
          {treatments.map(t => (
            <div key={t._id} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-3">
              <div className="flex justify-between items-center border-b pb-2 border-gray-100">
                <h3 className="font-bold text-base text-emerald-600">Diagnosis: {t.diagnosis}</h3>
                <span className="text-xs font-bold bg-slate-100 px-2 py-0.5 rounded text-gray-700">Status: {t.status || "Ongoing"}</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Physician Leader:</strong> {t.doctor?.name || "Assigned Medical Staff"}</p>
                <p><strong>Physical Exam Summary:</strong> {t.physicalCheckup}</p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-gray-100 text-xs space-y-2">
                <span className="font-bold text-gray-700 block">📋 Chart Progress Timeline Additions:</span>
                {t.followUps?.map((f, i) => (
                  <div key={i} className="border-l-2 border-emerald-500 pl-2 py-0.5">
                    <span className="text-gray-400 block">{f.visitDate ? new Date(f.visitDate).toLocaleDateString() : "N/A"}</span>
                    <p className="text-gray-700 font-medium">{f.notes}</p>
                  </div>
                ))}
                {(!t.followUps || t.followUps.length === 0) && <p className="text-gray-400 italic">No additions to this record chart.</p>}
              </div>
            </div>
          ))}
          {treatments.length === 0 && <p className="text-sm text-gray-400 italic">No charts exist for your profile path.</p>}
        </div>
      </div>
    </div>
  );
}