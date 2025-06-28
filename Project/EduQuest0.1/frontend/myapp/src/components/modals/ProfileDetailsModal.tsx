'use client';
import React, { useEffect, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import clsx from 'clsx';

const ProfileDetailsModal = ({ isOpen, onClose }) => {
  const [userDetails, setUserDetails] = useState(null); // Store the fetched user details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (isOpen) {
      // Fetch user details when the modal opens
      const fetchUserDetails = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            alert('You must be logged in to view profile details');
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
          setUserDetails(data.user); // Set the fetched user details from the `user` object in the response
          setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
          console.error(error);
          setError('Error fetching user details');
          setLoading(false); // Stop loading on error
        }
      };

      fetchUserDetails();
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Don't render if the modal is not open

  if (loading) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[400px] max-w-[90%]">
          <h2 className="text-2xl font-bold text-center text-global-1 mb-6">Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
      >
        <div className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[400px] max-w-[90%]">
          <h2 className="text-2xl font-bold text-center text-global-1 mb-6">Error</h2>
          <p className="text-center">{error}</p>
        </div>
      </div>
    );
  }

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
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md cursor-pointer"
        >
          <FaPowerOff className="text-white" />
        </button>

        <h2 className="text-2xl font-bold text-center text-global-1 mb-6">👩‍🎓 Profile Details 🧑‍🎓</h2>

        <div className="flex flex-col gap-4 text-left text-lg">
          {/* Display User Details */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-600">Name:</span>
              <span>{userDetails.username}</span> {/* Display the user's username */}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-600">Email:</span>
              <span>{userDetails.email}</span> {/* Display the user's email */}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-600">Age:</span>
              <span>{userDetails.age}</span> {/* Display the user's age */}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-600">Institution:</span>
              <span>{userDetails.institution}</span> {/* Display the user's institution */}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-600">Region:</span>
              <span>{userDetails.region}</span> {/* Display the user's region */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsModal;
