'use client';
import React, { useState ,useEffect} from 'react';
import { FaUser, FaEdit, FaTrash, FaSignOutAlt, FaPowerOff } from 'react-icons/fa';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import ProfileDetailsModal from './ProfileDetailsModal';
import UpdateProfileModal from './UpdateProfileModal';




const ProfileModal = ({ isOpen, onClose, onLogout,isLoggedIn, onUsernameUpdate   }) => {
  const [showProfileDetailsModal, setShowProfileDetailsModal] = useState(false);
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // For delete confirmation
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

useEffect(() => {
  if (isLoggedIn) {
    setShowLogoutConfirmation(false); // Reset logout confirmation on login
  }
}, [isLoggedIn]);

  useEffect(() => {
    if (isOpen) {
      setShowLogoutConfirmation(false); // Reset logout confirmation when profile modal opens
    }
  }, [isOpen]);

  const handleUpdateProfile = (updatedUserDetails) => {
    // Optionally update the UI with the new user details after update
    console.log(updatedUserDetails);
    
  };

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to delete your account');
      onClose();
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/examinee', {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error('Failed to delete account');
      }

      const data = await res.json();
      console.log(data); // Log success message
      localStorage.removeItem('token'); // Remove token to log the user out
      onLogout(); // Trigger logout function passed as a prop
      onClose(); // Close the modal
      alert('Your account has been deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting account');
    }
  };

  const closeProfileModal = () => {
    // Reset the delete confirmation state when closing the modal
    setShowDeleteConfirmation(false);
    setShowLogoutConfirmation(false);
    onClose();
  };


    const confirmLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    onLogout();
    onClose(); // Close the profile modal after logging out
    //alert('You have logged out successfully!');
  };

  // Cancel logout confirmation
  const cancelLogout = () => {
    setShowLogoutConfirmation(false); // Close the confirmation modal
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeProfileModal} // Close the modal when clicking outside
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
          onClick={closeProfileModal}
          className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md cursor-pointer"
        >
          <FaPowerOff className="text-white" />
        </button>

        <h2 className="text-2xl font-bold text-center text-global-1 mb-6">👩‍🎓Your Profile🧑‍🎓</h2>

        <div className="flex flex-col gap-4 text-left text-lg">
          {/* Profile Details Button */}
          <button
            className="flex items-center gap-3 hover:text-red-500"
            onClick={() => setShowProfileDetailsModal(true)}
          >
            <FaUser /> Profile Details
          </button>

          {/* Update Profile Button */}
          <button
            className="flex items-center gap-3 hover:text-red-500"
            onClick={() => setShowUpdateProfileModal(true)}
          >
            <FaEdit /> Update Profile
          </button>

          {/* Delete Account Button */}
          <button
            className="flex items-center gap-3 hover:text-red-500"
            onClick={() => setShowDeleteConfirmation(true)} // Show confirmation modal
          >
            <FaTrash /> Delete Account
          </button>

{/* Logout Button */}
          <button
            className="flex items-center gap-3 px-3 py-2 text-red-600 font-bold rounded-md bg-red-100 hover:bg-red-200 transition-all w-full"
            onClick={() => setShowLogoutConfirmation(true)} // Show logout confirmation modal
          >
            <FaSignOutAlt className="text-lg" />
            <span className="text-base">Logout</span>
          </button>
        </div>
      </div>

      {/* Show ProfileDetailsModal */}
      <ProfileDetailsModal
        isOpen={showProfileDetailsModal}
        onClose={() => setShowProfileDetailsModal(false)}
      />

      {/* Show UpdateProfileModal */}
      <UpdateProfileModal
        isOpen={showUpdateProfileModal}
        onClose={() => setShowUpdateProfileModal(false)}
        onUsernameUpdate={onUsernameUpdate}
        onUpdate={handleUpdateProfile}
      />

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[300px] max-w-[90%] transition-transform duration-300"
          >
            <h2 className="text-xl font-bold text-center text-global-1 mb-6">
              Are you sure you want to delete your account?
            </h2>
            <div className="flex justify-between">
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirmation(false)} // Close confirmation modal
                className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

 {/* Logout Confirmation Modal */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-8 w-[300px] max-w-[90%] transition-transform duration-300"
          >
            <h2 className="text-xl font-bold text-center text-global-1 mb-6">
              Do you want to log out?
            </h2>
            <div className="flex justify-between">
              <button
                onClick={confirmLogout} // Proceed with logout if user clicks Yes
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Yes, Log Out
              </button>
              <button
                onClick={cancelLogout} // Close confirmation modal if user clicks No
                className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
              >
                No, Stay
              </button>
            </div>
          </div>
        </div>
      )}



    </div>
  );
};

export default ProfileModal;
