//AboutModal.jsx


'use client';
import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import clsx from 'clsx';

const AboutModal = ({ isOpen, onClose }) => {
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
        <h2 className="text-2xl font-bold text-center text-global-1 mb-4">About EduQuest 📜</h2>
        
        <p className="text-sm text-gray-700 leading-6 text-justify mb-8">
        <strong>EduQuest</strong> is a global online quiz platform designed to empower students
        to assess and enhance their knowledge. Whether you're preparing for exams or just exploring topics,
        EduQuest provides a fun, interactive, and secure learning space for all.
        </p>

        <p className="text-sm text-red-400 leading-6 text-center mx-auto">
        <strong>Join a worldwide community of learners and turn your curiosity into achievement.</strong>
        </p>


      </div>
    </div>
  );
};

export default AboutModal;
