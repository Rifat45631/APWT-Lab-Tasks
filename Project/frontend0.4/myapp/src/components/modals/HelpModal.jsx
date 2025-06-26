//HelpModal.jsx



'use client';
import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import clsx from 'clsx';

const HelpModal = ({ isOpen, onClose }) => {
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
        <h2 className="text-2xl font-bold text-center text-global-1 mb-4">Need Help❓</h2>


<p className="text-sm text-gray-700 leading-6 text-justify mb-8">
  If you're having trouble logging in, accessing quizzes, or navigating the platform, we're here for you.
  Check your email verification, internet connection, or contact us at 
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=arafinutsha2@gmail.com&su=Need+Help+..🔔&body=Hi+EduQuest+Team%2C%0D%0A%0D%0AI+need+help+with+-+ "
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-400 font-bold ml-1"
>
  support@eduquest.com
</a>

</p>



      </div>
    </div>
  );
};

export default HelpModal;
