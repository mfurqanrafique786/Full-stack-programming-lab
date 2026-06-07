"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function PatientNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchMyNotifications();
  }, []);

  const fetchMyNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      const storedId = localStorage.getItem("userId") || localStorage.getItem("patientId");
      const res = await API.get("/notifications", { headers: { Authorization: `Bearer ${token}` } });
      
      if (Array.isArray(res.data)) {
        const filtered = res.data.filter(n => n.recipientId === storedId);
        setNotifications(filtered);
      }
    } catch (err) {
      console.log("Error loading notifications:", err);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await API.put(`/notifications/read/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } });
      fetchMyNotifications();
    } catch (err) {
      console.log("Error updating status badge:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl font-black text-gray-800">Alert Center Notifications</h1>
        <div className="space-y-3">
          {notifications.map(n => (
            <div key={n._id} className={`p-4 bg-white border border-gray-100 rounded-xl shadow-sm flex justify-between items-start ${!n.isRead ? "border-l-4 border-l-blue-500 bg-blue-50/5 font-medium" : ""}`}>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-gray-900">{n.title || "Care Alert"}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{n.message}</p>
                <span className="text-[10px] text-gray-400 block pt-1">
                  {n.createdAt ? new Date(n.createdAt).toLocaleString() : ""}
                </span>
              </div>
              {!n.isRead && (
                <button 
                  onClick={() => handleMarkAsRead(n._id)}
                  className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                >
                  Mark Read
                </button>
              )}
            </div>
          ))}
          {notifications.length === 0 && <p className="text-sm text-gray-400 italic">No messages found.</p>}
        </div>
      </div>
    </div>
  );
}