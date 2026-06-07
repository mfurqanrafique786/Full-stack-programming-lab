import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-10">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Healthcare Management System
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Secure Online Appointment Booking, Treatment Tracking,
            Prescription Management and Patient Care.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-blue-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Appointments
            </h2>

            <p className="text-gray-600">
              Book and manage appointments with doctors online.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Treatments
            </h2>

            <p className="text-gray-600">
              Track treatment progress and follow-up visits.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Prescriptions
            </h2>

            <p className="text-gray-600">
              Manage prescriptions and medication schedules.
            </p>
          </div>

        </div>

        <div className="flex justify-center gap-6">

          <Link
            href="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}