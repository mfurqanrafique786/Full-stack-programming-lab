"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link"; 

export default function AdminDashboard() {

  return (
    <div>

      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard
        </h1>

        {/* Updated grid breakpoints to handle all 6 management cards cleanly across various screen sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

          {/* 1. Doctors Card */}
          <Link
            href="/admin/doctors"
            className="bg-white shadow p-6 rounded block hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="font-bold text-xl">
              Doctors
            </h2>

            <p>
              Manage Doctor Records
            </p>
          </Link>

          {/* 2. Patients Card */}
          <Link
            href="/admin/patients"
            className="bg-white shadow p-6 rounded block hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="font-bold text-xl">
              Patients
            </h2>

            <p>
              Manage Patient Records
            </p>
          </Link>

          {/* 3. Appointments Card */}
          <Link
            href="/admin/appointments"
            className="bg-white shadow p-6 rounded block hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="font-bold text-xl">
              Appointments
            </h2>

            <p>
              Manage Appointments
            </p>
          </Link>

          {/* 4. Treatments Card */}
          <Link
            href="/admin/treatments"
            className="bg-white shadow p-6 rounded block hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="font-bold text-xl">
              Treatments
            </h2>

            <p>
              Manage Treatments
            </p>
          </Link>

          {/* 5. Prescriptions Card */}
          <Link
            href="/admin/prescriptions"
            className="bg-white shadow p-6 rounded block hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="font-bold text-xl">
              Prescriptions
            </h2>

            <p>
              Manage Prescriptions
            </p>
          </Link>

          {/* 6. Newly Added Notifications Card */}
          <Link
            href="/admin/notifications"
            className="bg-white shadow p-6 rounded block hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="font-bold text-xl">
              Notifications
            </h2>

            <p>
              Manage Notifications
            </p>
          </Link>

        </div>

      </div>

    </div>
  );
}