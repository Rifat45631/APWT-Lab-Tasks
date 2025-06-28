//RegisterModal.tsx


'use client';

import React, { useState } from 'react';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaPowerOff } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

const RegisterModal = ({ isOpen, onClose, onLoginClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Added state for form fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [institution, setInstitution] = useState('');
  const [region, setRegion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  // ✅ Register handler
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username:name,
          age: Number(age),
          institution,
          region,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Registration failed');
        return;
      }









      alert('Registration successful! Verify your email to login.');
      onClose();
      if(onLoginClick){
        onLoginClick(false); 
      }









      
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[350px]">
        {/* Close Button */}
        <div
          onClick={onClose}
          className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md cursor-pointer"
        >
          <FaPowerOff className="text-white" />
        </div>

        <h2 className="text-center text-3xl font-bold mb-8">Registration</h2>

        {/* ✅ Register form */}
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          {/* Name */}
          <div>
            <label className="text-red-500 text-sm">Name</label>
            <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-2 py-2 focus:outline-none text-sm"
                required
              />
              <BsPerson className="text-red-400 mr-2" />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="text-red-500 text-sm">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border-b-2 border-red-300 px-2 py-2 text-sm focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Institution */}
          <div>
            <label className="text-red-500 text-sm">Institution</label>
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full border-b-2 border-red-300 px-2 py-2 text-sm focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Region */}
          <div>
            <label className="text-red-500 text-sm">Region</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border-b-2 border-red-300 px-2 py-2 text-sm focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-red-500 text-sm">Email</label>
            <div className="flex items-center border-b-2 border-red-300 focus-within:border-red-500">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-2 focus:outline-none text-sm"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 py-2 focus:outline-none text-sm"
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

          {/* Terms */}
          <label className="flex items-center text-xs text-gray-600 -mt-2">
            <input type="checkbox" className="mr-2" required />
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
              onClick={() => {
                onClose();
                if (onLoginClick) onLoginClick(); // optional callback
              }}
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
