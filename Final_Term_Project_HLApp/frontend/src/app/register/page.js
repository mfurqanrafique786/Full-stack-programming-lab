"use client";

import { useState } from "react";
import API from "../../services/api";

export default function Register() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "patient",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await API.post(
            "/auth/register",
            formData
          );

        alert(
          res.data.message
        );

      } catch (error) {

        alert(
          error.response?.data?.message
        );

      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[450px]">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Healthcare Management System
        </p>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Full Name"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />

          <select
            name="role"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          >
            <option value="patient">
              Patient
            </option>

            <option value="doctor">
              Doctor
            </option>

            <option value="admin">
              Admin
            </option>

          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}