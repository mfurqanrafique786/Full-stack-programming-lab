"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function TreatmentsPage() {
  const [treatments, setTreatments] = useState([]);
  
  // Follow Up input states tracked per card item ID
  const [followUpNotes, setFollowUpNotes] = useState({});

  useEffect(() => {
    fetchTreatments();
  }, []);

  // 🔍 Read All Treatment Records
  const fetchTreatments = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/treatments", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTreatments(res.data);
    } catch (error) {
      console.log("Error fetching treatments:", error);
    }
  };

  // 🔄 Update Treatment Status Progress String
  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      await API.put(
        `/treatments/${id}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Treatment Status Updated Successfully!");
      fetchTreatments(); // Refresh interface view
    } catch (error) {
      console.error("Status update error:", error);
      alert("Failed to modify treatment status progress state.");
    }
  };

  // ➕ Append a New Follow-Up Checkup Note Object
  const handleAddFollowUpSubmit = async (id) => {
    const notesText = followUpNotes[id];
    if (!notesText || !notesText.trim()) {
      alert("Please write down follow-up notes before saving!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await API.post(
        `/treatments/${id}/followup`,
        { notes: notesText },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      alert("Follow Up Note Successfully Added to Record!");
      setFollowUpNotes(prev => ({ ...prev, [id]: "" })); // Clear specific text field area
      fetchTreatments(); // Refresh database arrays on UI screen
    } catch (error) {
      console.error("Follow-up saving error:", error);
      alert("Failed to save append logs into followUps array.");
    }
  };

  const handleNotesTextareaChange = (id, textValue) => {
    setFollowUpNotes(prev => ({
      ...prev,
      [id]: textValue
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Treatments Console</h1>

        <div className="grid gap-6">
          {treatments.map((treatment) => (
            <div
              key={treatment._id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 grid md:grid-cols-2 gap-6"
            >
              {/* Left Column: Metrics & Informational Display Logs */}
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-green-600">Treatment File</h2>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                    treatment.status === "Recovered" ? "bg-green-50 text-green-700 border-green-200" :
                    treatment.status === "Critical" ? "bg-rose-50 text-rose-700 border-rose-200" :
                    "bg-blue-50 text-blue-700 border-blue-200"
                  }`}>
                    {treatment.status || "Ongoing"}
                  </span>
                </div>

                <p><strong>Patient:</strong> {treatment.patient?.name || treatment.patient || "N/A"}</p>
                <p><strong>Doctor:</strong> {treatment.doctor?.name || treatment.doctor || "N/A"}</p>
                <p><strong>Diagnosis Summary:</strong> {treatment.diagnosis}</p>
                
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm">
                  <strong>🩺 Initial Physical Checkup Notes:</strong>
                  <p className="text-gray-600 mt-1">{treatment.physicalCheckup}</p>
                </div>

                {/* History Timeline of appended Follow Up Array Blocks */}
                <div className="pt-2">
                  <strong className="text-sm text-gray-800">📋 Follow-Up Progress History:</strong>
                  {treatment.followUps && treatment.followUps.length > 0 ? (
                    <div className="space-y-1.5 mt-1 max-h-[150px] overflow-y-auto pr-1">
                      {treatment.followUps.map((follow, idx) => (
                        <div key={idx} className="bg-emerald-50/40 p-2 rounded border border-emerald-100 text-xs">
                          <span className="text-emerald-800 font-medium block">
                            📅 {new Date(follow.visitDate).toLocaleDateString()}
                          </span>
                          <p className="text-gray-600 mt-0.5">{follow.notes}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic mt-1">No subsequent follow-up visit note sequences recorded yet.</p>
                  )}
                </div>
              </div>

              {/* Right Column: Interaction Controls (Status Modifications & Notes Logging) */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-between gap-4">
                {/* Section A: Live Progress Status Selection Trigger */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Update Treatment Progress
                  </label>
                  <select
                    value={treatment.status || "Ongoing"}
                    onChange={(e) => handleStatusChange(treatment._id, e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm font-medium"
                  >
                    <option value="Ongoing">Ongoing Progress</option>
                    <option value="Recovered">Recovered / Cleared</option>
                    <option value="Critical">Critical State</option>
                  </select>
                </div>

                {/* Section B: Log New Follow-Up Session Notes Form */}
                <div className="flex-1 flex flex-col justify-end">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Log New Follow-Up Progress Note
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Type notes on changes, updated prescriptions, or blood metrics observations..."
                    value={followUpNotes[treatment._id] || ""}
                    onChange={(e) => handleNotesTextareaChange(treatment._id, e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm mb-2 resize-none"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddFollowUpSubmit(treatment._id)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg text-sm transition-colors shadow-sm"
                  >
                    Save Progress Entry
                  </button>
                </div>
              </div>

            </div>
          ))}

          {treatments.length === 0 && (
            <p className="text-gray-500 text-center py-12 bg-white rounded-xl shadow border">
              No medical files found inside active treatment records schema indices.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}