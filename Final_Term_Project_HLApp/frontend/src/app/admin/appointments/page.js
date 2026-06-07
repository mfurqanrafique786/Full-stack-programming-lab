"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctors, setSelectedDoctors] = useState({}); // Tracks dropdown selection per appointment card

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, []);

  // 🔍 Fetch All Appointments
  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/appointments", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAppointments(res.data);
    } catch (error) {
      console.log("Error fetching appointments:", error);
    }
  };

  // 🩺 Fetch All Doctors for the Assignment Dropdown Menu
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

  // 🟢 Handle Doctor Selection Change in Dropdown
  const handleDoctorChange = (appointmentId, doctorId) => {
    setSelectedDoctors((prev) => ({
      ...prev,
      [appointmentId]: doctorId,
    }));
  };

  // ✅ Approve Appointment & Assign Doctor
  const handleApprove = async (id) => {
    const assignedDoctorId = selectedDoctors[id];
    if (!assignedDoctorId) {
      alert("Please select a doctor to assign before approving this appointment!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      // Sends the doctor ID inside the body payload as your controller expects
      await API.put(
        `/appointments/approve/${id}`,
        { doctorId: assignedDoctorId }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Appointment Approved & Doctor Assigned Successfully!");
      fetchAppointments(); // Refresh data lists dynamically
    } catch (error) {
      console.error("Approval error:", error);
      alert("Failed to approve appointment.");
    }
  };

  // ❌ Reject Appointment
  const handleReject = async (id) => {
    if (!window.confirm("Are you sure you want to reject this appointment request?")) return;

    try {
      const token = localStorage.getItem("token");
      await API.put(
        `/appointments/reject/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Appointment Rejected.");
      fetchAppointments(); // Refresh data lists dynamically
    } catch (error) {
      console.error("Rejection error:", error);
      alert("Failed to reject appointment.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Appointments Management</h1>

        <div className="grid gap-4">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white shadow rounded-xl p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              {/* Info Column */}
              <div className="space-y-1.5 w-full md:w-1/2">
                <h2 className="font-bold text-lg text-blue-600">
                  Appointment Ticket
                </h2>
                <p className="text-gray-700">
                  <strong>Patient:</strong> {appointment.patient?.name || "No Patient Found"}
                </p>
                <p className="text-gray-700">
                  <strong>Assigned Doctor:</strong>{" "}
                  <span className={appointment.doctor ? "text-gray-900 font-medium" : "text-amber-600 font-medium animate-pulse"}>
                    {appointment.doctor?.name || "Pending Assignment"}
                  </span>
                </p>
                {appointment.reason && (
                  <p className="text-gray-600 text-sm italic">
                    <strong>Reason:</strong> "{appointment.reason}"
                  </p>
                )}
                <div className="pt-1">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                    appointment.status === "Approved" ? "bg-green-50 text-green-700 border-green-200" :
                    appointment.status === "Rejected" ? "bg-rose-50 text-rose-700 border-rose-200" :
                    "bg-amber-50 text-amber-700 border-amber-200"
                  }`}>
                    Status: {appointment.status || "Pending"}
                  </span>
                </div>
              </div>

              {/* Actions & Assignments Column */}
              {appointment.status !== "Approved" && appointment.status !== "Rejected" ? (
                <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-end gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex flex-col">
                    <label className="text-xs font-medium text-gray-500 mb-1">Select Doctor</label>
                    <select
                      value={selectedDoctors[appointment._id] || ""}
                      onChange={(e) => handleDoctorChange(appointment._id, e.target.value)}
                      className="px-3 py-2 border rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-w-[200px]"
                    >
                      <option value="">-- Choose Medical Staff --</option>
                      {doctors.map((doc) => (
                        <option key={doc._id} value={doc._id}>
                          {doc.name} ({doc.specialization})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(appointment._id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(appointment._id)}
                      className="bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-400 font-medium italic border border-dashed border-gray-200 rounded-lg px-4 py-2 bg-gray-50">
                  Action processed and finalized
                </div>
              )}
            </div>
          ))}

          {appointments.length === 0 && (
            <p className="text-gray-500 text-center py-8">No appointment tickets registered.</p>
          )}
        </div>
      </div>
    </div>
  );
}