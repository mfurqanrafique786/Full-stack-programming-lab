"use client";

import { useEffect, useState } from "react";
import API from "../../../services/api";
import Navbar from "../../../components/Navbar";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
    
    // Auto-refresh every 8 seconds so new actions instantly pop up during your live evaluation!
    const interval = setInterval(fetchNotifications, 8000);
    return () => clearInterval(interval);
  }, []);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/notifications", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotifications(res.data);
    } catch (error) {
      console.log("Error fetching notifications:", error);
    }
  };

  // Helper helper to dynamically change left border color based on the title context
  const getCardStyles = (title = "") => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("prescription")) {
      return { border: "border-l-purple-500", icon: "💊", bg: "from-purple-50/10" };
    }
    if (lowerTitle.includes("approved")) {
      return { border: "border-l-emerald-500", icon: "🗓️", bg: "from-emerald-50/10" };
    }
    if (lowerTitle.includes("rejected")) {
      return { border: "border-l-rose-500", icon: "❌", bg: "from-rose-50/10" };
    }
    return { border: "border-l-blue-500", icon: "🩺", bg: "from-blue-50/10" };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="p-8 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Notifications Center</h1>
            <p className="text-sm text-gray-500 mt-1">Live tracking logs for patient care modifications</p>
          </div>
          <span className="bg-blue-600 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
            Total Logs: {notifications.length}
          </span>
        </div>
        
        <div className="grid gap-4">
          {notifications.map((n) => {
            const styles = getCardStyles(n.title);
            return (
              <div 
                key={n._id} 
                className={`bg-white shadow-sm rounded-xl p-5 border-l-4 ${styles.border} bg-gradient-to-br ${styles.bg} to-white flex justify-between items-center transition-all hover:shadow-md border border-gray-100`}
              >
                <div className="flex gap-4 items-start">
                  <span className="text-2xl mt-1">{styles.icon}</span>
                  <div className="space-y-1">
                    {/* Title */}
                    <h3 className="font-bold text-lg text-gray-900">{n.title}</h3>
                    
                    {/* Actual Message Body */}
                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">{n.message}</p>
                    
                    {/* Meta details */}
                    <div className="text-[11px] text-gray-400 flex flex-wrap gap-x-4 gap-y-1 pt-1.5 border-t border-dashed border-gray-100">
                      <p><strong>Recipient Role:</strong> <span className="text-gray-500">{n.recipientType}</span></p>
                      <p><strong>User ID Reference:</strong> <span className="font-mono text-gray-500">{n.recipientId}</span></p>
                      {n.createdAt && (
                        <p><strong>Logged:</strong> <span className="text-gray-500">{new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex flex-col items-end justify-between h-full min-w-[70px]">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border ${
                    n.isRead 
                      ? 'bg-gray-50 text-gray-400 border-gray-200' 
                      : 'bg-blue-50 text-blue-700 border-blue-200 animate-pulse'
                  }`}>
                    {n.isRead ? "Read" : "New Entry"}
                  </span>
                </div>
              </div>
            );
          })}

          {notifications.length === 0 && (
            <div className="bg-white rounded-xl shadow border border-gray-100 p-12 text-center">
              <span className="text-4xl block mb-2">✨</span>
              <h3 className="text-gray-700 font-bold text-lg">System Log Empty</h3>
              <p className="text-gray-400 text-sm mt-1 max-w-xs mx-auto">
                No notification tickets generated. Try scheduling appointments or adding care profiles to view data.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}