"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Optimized Next.js router
import API from "../../services/api";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Prevents multi-form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // Safely save user data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      const role = res.data.role;

      // Clean, internal routing without forcing a hard browser refresh
      if (role === "admin") {
        router.push("/admin");
      } else if (role === "doctor") {
        router.push("/doctor");
      } else if (role === "patient") {
        router.push("/patient");
      } else {
        alert("Unauthorized or unknown role.");
      }
    } catch (error) {
      alert(
        error.response?.data?.message || 
        "Login Failed. Please try again."
      );
    } finally {
      setIsLoading(false); // Always turns off loader even if request fails
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-[400px]">
        
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Healthcare System
        </h1>
        
        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to continue
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email} // Controlled input component
            className="w-full border p-3 rounded mb-4 focus:outline-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password} // Controlled input component
            className="w-full border p-3 rounded mb-4 focus:outline-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={isLoading} // Disables button while waiting for backend
            className={`w-full text-white p-3 rounded transition-colors ${
              isLoading 
                ? "bg-blue-400 cursor-not-allowed" 
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

      </div>
    </div>
  );
}