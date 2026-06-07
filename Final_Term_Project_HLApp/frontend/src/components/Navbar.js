"use client";

import Link from "next/link";

export default function Navbar() {

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.href = "/login";
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">

      <h1 className="font-bold text-xl">
        HMS
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>

    </nav>
  );
}