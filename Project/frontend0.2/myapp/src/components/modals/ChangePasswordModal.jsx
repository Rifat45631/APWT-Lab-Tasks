// ChangePasswordModal.jsx


'use client';

import React, { useState } from 'react';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';

const ChangePasswordModal = ({ isOpen, onClose, onBackToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

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

        <h2 className="text-center text-2xl font-bold mb-8">Change Password</h2>

        <form className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="text-red-500 text-sm">Email</label>
            <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
              <input type="email" className="w-full px-2 py-2 focus:outline-none text-sm" />
              <FiMail className="text-red-400 mr-2" />
            </div>
            <label className="flex items-center mt-2 text-xs text-gray-600">
              <input type="checkbox" className="mr-2" />
              verify email
            </label>
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

          {/* Re-password */}
          <div>
            <label className="text-red-500 text-sm">Re-Password</label>
            <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
              <input
                type={showRePassword ? 'text' : 'password'}
                className="w-full px-2 py-2 focus:outline-none text-sm"
              />
              {showRePassword ? (
                <FiEyeOff
                  className="text-red-400 mr-2 cursor-pointer"
                  onClick={() => setShowRePassword(false)}
                />
              ) : (
                <FiEye
                  className="text-red-400 mr-2 cursor-pointer"
                  onClick={() => setShowRePassword(true)}
                />
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-red-600 to-black text-white py-2 rounded-md text-lg font-bold shadow-md hover:opacity-90 transition"
          >
            Change Password
          </button>
        </form>

        {/* Back to login */}
        <p className="text-center text-sm text-gray-700 mt-4">
          <button
            onClick={() => {
              onClose();
              if (onBackToLogin) onBackToLogin();
            }}
            className="text-red-500 font-semibold underline"
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
