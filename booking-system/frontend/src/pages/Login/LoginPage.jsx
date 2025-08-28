import React from 'react'
import NavLogo from "../../assets/NavLogo.png"
import RegisterSideImg from '../../assets/RegisterSideImg.jpg';


export default function LoginPage() {
    return (
      <div className="min-h-screen flex">
        {/* Right column - Image */}
        <div className="w-1/2 h-80 hidden md:flex items-center justify-center bg-gray-200">
          <img
            src={RegisterSideImg}
            alt="Register illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Left column - Register form */}
        <div className="w-1/2 flex items-center justify-center bg-gray-50 p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
                
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-blue-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='Enter UserName'
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-blue-950 outline-1 -outline-offset-1 outline-indigo-500 placeholder:text-indigo-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-950 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-blue-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='*********'
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-blue-950 outline-1 -outline-offset-1 outline-indigo-500 placeholder:text-indigo-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-950 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Create new Account?{' '}
            <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-300">
              Click here
            </a>
          </p>
        

          </div>
        </div>
  
        
      </div>
    );
  }