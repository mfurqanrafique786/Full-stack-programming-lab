"use client";

import Navbar from "../../components/Navbar";

export default function DoctorDashboard() {

  return (
    <div>

      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          Doctor Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow p-6 rounded">
            View Appointments
          </div>

          <div className="bg-white shadow p-6 rounded">
            Treatments
          </div>

          <div className="bg-white shadow p-6 rounded">
            Prescriptions
          </div>

        </div>

      </div>

    </div>
  );
}