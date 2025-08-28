import React from 'react'
import RegisterSideImg from '../../assets/RegisterSideImg.jpg';

export default function Register() {
    return (
    <div className="min-h-screen flex">
        {/* Left column - Register form */}
        <div className="w-1/2 flex items-center justify-center bg-gray-50 p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </button>
            </form>
          </div>
        </div>
  
        {/* Right column - Image */}
        <div className="w-1/2 h-80 hidden md:flex items-center justify-center bg-gray-200">
          <img
            src={RegisterSideImg}
            alt="Register illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
    </div>
    );
  }
  