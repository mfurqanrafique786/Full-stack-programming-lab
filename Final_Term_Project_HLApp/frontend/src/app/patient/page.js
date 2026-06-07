"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import API from "../../services/api";
import Navbar from "../../components/Navbar";

export default function PatientDashboard() {
  const [stats, setStats] = useState({ appointments: 0, treatments: 0, prescriptions: 0, notifications: 0 });
  const [patientName, setPatientName] = useState("Patient");

  useEffect(() => {
    fetchDashboardSummary();
  }, []);

  const fetchDashboardSummary = async () => {
    try {
      const token = localStorage.getItem("token");
      const storedId = localStorage.getItem("userId") || localStorage.getItem("patientId");
      if (!token || !storedId) return;

      const [appRes, treatRes, rxRes, notifRes] = await Promise.all([
        API.get("/appointments", { headers: { Authorization: `Bearer ${token}` } }).catch(() => ({ data: [] })),
        API.get("/treatments", { headers: { Authorization: `Bearer ${token}` } }).catch(() => ({ data: [] })),
        API.get("/prescriptions", { headers: { Authorization: `Bearer ${token}` } }).catch(() => ({ data: [] })),
        API.get("/notifications", { headers: { Authorization: `Bearer ${token}` } }).catch(() => ({ data: [] }))
      ]);

      const myApps = Array.isArray(appRes.data) ? appRes.data.filter(a => (a.patient?._id || a.patient) === storedId) : [];
      const myTreats = Array.isArray(treatRes.data) ? treatRes.data.filter(t => (t.patient?._id || t.patient) === storedId) : [];
      const myRxs = Array.isArray(rxRes.data) ? rxRes.data.filter(p => (p.patient?._id || p.patient) === storedId) : [];
      const myNotifs = Array.isArray(notifRes.data) ? notifRes.data.filter(n => n.recipientId === storedId) : [];

      if (myTreats[0]?.patient?.name) {
        setPatientName(myTreats[0].patient.name);
      } else if (myApps[0]?.patient?.name) {
        setPatientName(myApps[0].patient.name);
      }

      setStats({
        appointments: myApps.length,
        treatments: myTreats.length,
        prescriptions: myRxs.length,
        notifications: myNotifs.filter(n => !n.isRead).length
      });
    } catch (err) {
      console.error("Dashboard summary calculations error:", err);
    }
  };

  const cards = [
    { title: "My Appointments", value: stats.appointments, color: "bg-blue-600", path: "/patient/appointments", desc: "Book & check schedule tickets" },
    { title: "Medical Treatments", value: stats.treatments, color: "bg-emerald-600", path: "/patient/treatments", desc: "Trace your health progress" },
    { title: "Active Prescriptions", value: stats.prescriptions, color: "bg-purple-600", path: "/patient/prescriptions", desc: "Pharmacy orders & frequency" },
    { title: "Unread Notifications", value: stats.notifications, color: "bg-rose-600", path: "/patient/notifications", desc: "Live medical updates alert log" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back, {patientName}! 👋</h1>
          <p className="text-gray-500 mt-1">Access your comprehensive personalized clinical diagnostic data hub portal.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className={`inline-block px-2.5 py-1 rounded-lg text-white font-bold text-xs ${c.color} mb-3`}>
                  Metrics
                </span>
                <h3 className="text-gray-500 text-sm font-semibold">{c.title}</h3>
                <p className="text-3xl font-black text-gray-800 my-1">{c.value}</p>
                <p className="text-xs text-gray-400 leading-normal">{c.desc}</p>
              </div>
              <Link href={c.path} className="mt-5 text-sm text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Open Console &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}