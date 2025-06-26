// LoginModal.jsx




'use client';

import React, { useState } from 'react';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';
import ChangePasswordModal from './ChangePasswordModal';
import RegisterModal from './RegisterModal';




const LoginModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false); // ✅ moved here
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Login Modal */}
    
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">

        <div className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[350px]">
          {/* Close Button */}
          <div
            onClick={onClose}
            className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md cursor-pointer"
          >
            <FaPowerOff className="text-white" />
          </div>

          <h2 className="text-center text-3xl font-bold mb-8">Login</h2>

          <form className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="text-red-500 text-sm">Email</label>
              <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
                <input
                  type="email"
                  className="w-full px-2 py-2 focus:outline-none text-sm"
                />
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

            {/* Options */}
            <div className="flex items-center justify-between text-sm mb-2">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowChangePasswordModal(true); // ✅ opens ChangePassword modal
                
                }}
                className="text-gray-600 underline"
              >
                Forget password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-b from-red-600 to-black text-white py-2 rounded-md text-lg font-bold shadow-md hover:opacity-90 transition"
            >
              Login
            </button>

            {/* Register */}
            <p className="text-center text-sm text-gray-700 mt-2">
              Don’t have an account?{' '}
              <a href="#" 
              onClick={(e) => {
                  e.preventDefault();
                 setShowRegisterModal(true); // ✅ opens ChangePassword modal
                
                }}
              className="text-red-500 font-semibold underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* ✅ Render ChangePassword Modal here */}
      <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
      />

      {/* ✅ Render Register Modal here */}
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        />
    </>
  );
};

export default LoginModal;
