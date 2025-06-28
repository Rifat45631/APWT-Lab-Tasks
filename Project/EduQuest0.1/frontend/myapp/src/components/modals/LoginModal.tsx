// LoginModal.tsx




'use client';

import React, { useState } from 'react';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';
import ChangePasswordModal from './ChangePasswordModal';
import RegisterModal from './RegisterModal';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      // ✅ Save token and username
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.user.username); // <-- make sure backend returns this

      // ✅ Notify Header with username
      if (onLoginSuccess) onLoginSuccess(data.user.username);

      //alert('Login successful!');
      onClose();
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[350px]">
          <div
            onClick={onClose}
            className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md cursor-pointer"
          >
            <FaPowerOff className="text-white" />
          </div>

          <h2 className="text-center text-3xl font-bold mb-8">Login</h2>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div>
              <label className="text-red-500 text-sm">Email</label>
              <div className="flex items-center border-b-2 border-red-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-2 py-2 text-sm focus:outline-none"
                  required
                />
                <FiMail className="text-red-400 mr-2" />
              </div>
            </div>

            <div>
              <label className="text-red-500 text-sm">Password</label>
              <div className="flex items-center border-b-2 border-red-300">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 py-2 text-sm focus:outline-none"
                  required
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

            <div className="flex items-center justify-between text-sm mb-2">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowChangePasswordModal(true);
                }}
                className="text-gray-600 underline"
              >
                Forget password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-b from-red-600 to-black text-white py-2 rounded-md text-lg font-bold shadow-md hover:opacity-90 transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-700 mt-2">
              Don’t have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowRegisterModal(true);
                }}
                className="text-red-500 font-semibold underline"
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </div>




 <ChangePasswordModal
        isOpen={showChangePasswordModal}
        onClose={() => setShowChangePasswordModal(false)}
        onBackToLogin={() => setShowChangePasswordModal(false)} // Pass onBackToLogin
      />

      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onLoginClick={() => {
          setShowRegisterModal(false); // Close register modal
          // Optionally show the login modal again, etc.
        }}
      />
    </>


  );
};

export default LoginModal;
