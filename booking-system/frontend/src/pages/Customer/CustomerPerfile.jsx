import React from "react";
import { jwtDecode } from "jwt-decode";

export default function CustomerPerfile() {
  const token = localStorage.getItem("token");
  let role = "Unknown";
  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded.role || decoded.userRole || decoded.type || "Unknown";
    } catch (e) {
      role = "Invalid token";
    }
  } else {
    role = "No token found";
  }
  return (
    <div>
      <h1>Customer Profile</h1>
      <p className="text-lg">Role: <span className="font-semibold text-indigo-600">{role}</span></p>
    <button 
        onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
        }}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
        Clear Token & Go Home
    </button>
    </div>
  );
}


