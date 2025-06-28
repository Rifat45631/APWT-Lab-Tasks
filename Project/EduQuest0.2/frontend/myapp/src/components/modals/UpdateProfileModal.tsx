// UpdateProfileModal.tsx

'use client';
import React, { useState, useEffect } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import clsx from 'clsx';

const UpdateProfileModal = ({ isOpen, onClose, onUpdate, onUsernameUpdate }) => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    age: '',
    institution: '',
    region: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const fetchUserDetails = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            alert('You must be logged in to update your profile');
            onClose();
            return;
          }

          const res = await fetch('http://localhost:3000/examinee', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!res.ok) {
            throw new Error('Failed to fetch user details');
          }

          const data = await res.json();
          setUserDetails(data.user);
        } catch (error) {
          console.error(error);
          setError('Error fetching user details');
        }
      };

      fetchUserDetails();
    }
  }, [isOpen, onClose]);

  const handleUpdate = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User is not logged in.');
        setLoading(false);
        return;
      }

      const res = await fetch('http://localhost:3000/examinee', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: userDetails.username,
          age: userDetails.age,
          institution: userDetails.institution,
          region: userDetails.region,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await res.json();
      localStorage.setItem('username', data.user.username);

      // Call onUsernameUpdate to update the username in Header
      onUsernameUpdate(data.user.username);

      onUpdate(data.user);
      setLoading(false);
      onClose();
    } catch (error) {
      console.error(error);
      setError('Error updating profile');
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[400px] max-w-[90%] transition-transform duration-300',
          'animate-slideDown'
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md cursor-pointer"
        >
          <FaPowerOff className="text-white" />
        </button>

        <h2 className="text-2xl font-bold text-center text-global-1 mb-6">Update Profile ✏️</h2>

        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="flex flex-col gap-4 text-left text-lg">
          {/* Form for updating profile */}
          <div className="flex flex-col gap-2">
            {/* Username Input */}
            <div className="flex items-center gap-2">
              <label className="font-semibold text-gray-600">Username:</label>
              <input
                type="text"
                value={userDetails.username}
                onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                className="border-b-2 border-gray-300"
              />
            </div>

            {/* Email Input (Read-only) */}
            <div className="flex items-center gap-2">
              <label className="font-semibold text-gray-600">Email:</label>
              <input
                type="email"
                value={userDetails.email}
                readOnly
                className="border-b-2 border-gray-300 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Age Input */}
            <div className="flex items-center gap-2">
              <label className="font-semibold text-gray-600">Age:</label>
              <input
                type="number"
                value={userDetails.age}
                onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
                className="border-b-2 border-gray-300"
              />
            </div>

            {/* Institution Input */}
            <div className="flex items-center gap-2">
              <label className="font-semibold text-gray-600">Institution:</label>
              <input
                type="text"
                value={userDetails.institution}
                onChange={(e) => setUserDetails({ ...userDetails, institution: e.target.value })}
                className="border-b-2 border-gray-300"
              />
            </div>

            {/* Region Input */}
            <div className="flex items-center gap-2">
              <label className="font-semibold text-gray-600">Region:</label>
              <input
                type="text"
                value={userDetails.region}
                onChange={(e) => setUserDetails({ ...userDetails, region: e.target.value })}
                className="border-b-2 border-gray-300"
              />
            </div>
          </div>

          <button
            onClick={handleUpdate}
            disabled={loading}
            className={`w-full py-2 text-white font-bold bg-green-500 hover:bg-green-600 ${loading ? 'opacity-50' : ''}`}
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
