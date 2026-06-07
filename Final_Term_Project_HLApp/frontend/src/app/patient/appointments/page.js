"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function PatientAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [reason, setReason] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  useEffect(() => {
    fetchMyAppointments();
  }, []);

  const fetchMyAppointments = async () => {
    try {
      const token = localStorage.getItem("token");
      const storedId = localStorage.getItem("userId") || localStorage.getItem("patientId");
      const res = await API.get("/appointments", { headers: { Authorization: `Bearer ${token}` } });
      
      if (Array.isArray(res.data)) {
        const filtered = res.data.filter(a => (a.patient?._id || a.patient) === storedId);
        setAppointments(filtered);
      }
    } catch (err) {
      console.log("Error loading appointments:", err);
    }
  };

  const handleBookRequest = async (e) => {
    e.preventDefault();
    if (!reason.trim() || !appointmentDate) {
      alert("Please fill in both the date and the visit reason!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const storedId = localStorage.getItem("userId") || localStorage.getItem("patientId");
      
      await API.post("/appointments", 
        { 
          patient: storedId, 
          reason, 
          appointmentDate, 
          status: "Pending" 
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Appointment Ticket Requested Successfully!");
      setReason("");
      setAppointmentDate("");
      fetchMyAppointments();
    } catch (err) {
      alert("Scheduling Request Failed.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="p-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-fit space-y-4">
          <h2 className="font-bold text-lg text-blue-600">Request Appointment</h2>
          <form onSubmit={handleBookRequest} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Target Date</label>
              <input 
                type="date"
                value={appointmentDate}
                onChange={e => setAppointmentDate(e.target.value)}
                className="w-full text-sm border p-2 rounded focus:ring-2 focus:ring-blue-500 text-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">Reason for Visit</label>
              <textarea 
                rows="3" 
                placeholder="Type details..."
                value={reason}
                onChange={e => setReason(e.target.value)}
                className="w-full text-sm border p-2 rounded focus:ring-2 focus:ring-blue-500 text-gray-800 focus:outline-none"
              />
            </div>
            <button className="w-full bg-blue-600 text-white font-medium py-2 text-sm rounded shadow hover:bg-blue-700">
              Submit Request Ticket
            </button>
          </form>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h1 className="text-2xl font-black text-gray-800">My Appointment Records</h1>
          <div className="space-y-3">
            {appointments.map(a => (
              <div key={a._id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex justify-between items-center">
                <div className="space-y-1 text-sm text-gray-700">
                  <p><strong>Date:</strong> {a.appointmentDate ? new Date(a.appointmentDate).toLocaleDateString() : "N/A"}</p>
                  <p><strong>Reason:</strong> "{a.reason}"</p>
                  <p><strong>Assigned Doctor:</strong> {a.doctor?.name || "Awaiting Assignment"}</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 border rounded-full ${
                  a.status === "Approved" ? "bg-green-50 text-green-700 border-green-200" :
                  a.status === "Rejected" ? "bg-rose-50 text-rose-700 border-rose-200" :
                  "bg-amber-50 text-amber-700 border-amber-200"
                }`}>{a.status || "Pending"}</span>
              </div>
            ))}
            {appointments.length === 0 && <p className="text-sm text-gray-400 italic">No appointments registered.</p>}
          </div>
        </div>

      </div>
    </div>
  );
}