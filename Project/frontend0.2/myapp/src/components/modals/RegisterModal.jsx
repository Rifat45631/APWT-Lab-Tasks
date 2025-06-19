//RegisterModal.jsx


'use client';

import React, { useState } from 'react';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

const RegisterModal = ({ isOpen, onClose, onLoginClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[350px]">
        {/* Close Button */}
        <div
          onClick={onClose}
          className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md cursor-pointer"
        >
          <FaPowerOff className="text-white" />
        </div>

        <h2 className="text-center text-3xl font-bold mb-8">Registration</h2>

        <form className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="text-red-500 text-sm">Name</label>
            <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
              <input type="text" className="w-full px-2 py-2 focus:outline-none text-sm" />
              <BsPerson className="text-red-400 mr-2" />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="text-red-500 text-sm">Age</label>
            <input
              type="number"
              className="w-full border-b-2 border-red-300 px-2 py-2 text-sm focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Institution */}
          <div>
            <label className="text-red-500 text-sm">Institution</label>
            <input
              type="text"
              className="w-full border-b-2 border-red-300 px-2 py-2 text-sm focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Region */}
          <div>
            <label className="text-red-500 text-sm">Region</label>
            <input
              type="text"
              className="w-full border-b-2 border-red-300 px-2 py-2 text-sm focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-red-500 text-sm">Email</label>
            <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
              <input type="email" className="w-full px-2 py-2 focus:outline-none text-sm" />
              <FiMail className="text-red-400 mr-2" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-red-500 text-sm">Password</label>
            <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-2 py-2 focus:outline-none text-sm"
              />
              {showPassword ? (
                <FiEyeOff
                  className="text-red-400 mr-2 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FiEye
                  className="text-red-400 mr-2 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center text-xs text-gray-600 -mt-2">
            <input type="checkbox" className="mr-2" />
            I agree to the terms & conditions.
          </label>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-red-600 to-black text-white py-2 rounded-md text-lg font-bold shadow-md hover:opacity-90 transition"
          >
            Register
          </button>

          {/* Switch to Login */}
          <p className="text-center text-sm text-gray-700 mt-2">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onLoginClick}
              className="text-red-500 font-semibold underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
