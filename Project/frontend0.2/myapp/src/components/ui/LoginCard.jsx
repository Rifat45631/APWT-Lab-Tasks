//LoginCard.jsx


/*
'use client';
import React, { useState } from 'react';
import { FiMail, FiEye } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[350px]">
        <div className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md">
          <FaPowerOff className="text-white" />
        </div>

        <h2 className="text-center text-3xl font-bold mb-8">Login</h2>

        <div className="mb-6">
          <label className="text-red-500 text-sm">Email</label>
          <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
            <input type="email" className="w-full px-2 py-2 focus:outline-none text-sm" />
            <FiMail className="text-red-400 mr-2" />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-red-500 text-sm">Password</label>
          <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-2 py-2 focus:outline-none text-sm"
            />
            <FiEye
              className="text-red-400 mr-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-gray-600 underline">
            Forget password?
          </a>
        </div>

        <button className="w-full bg-gradient-to-b from-red-600 to-black text-white py-2 rounded-md text-lg font-bold shadow-md hover:opacity-90 transition">
          Login
        </button>

        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{' '}
          <a href="#" className="text-red-500 font-semibold underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
*/