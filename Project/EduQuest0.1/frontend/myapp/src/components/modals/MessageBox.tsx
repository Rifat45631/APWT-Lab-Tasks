//MessageBox.tsx


'use client';
import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import clsx from 'clsx';

const MessageBox = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          'relative bg-white border-2 border-red-300 rounded-xl shadow-lg p-6 w-[360px] max-w-[90%] transition-transform duration-300',
          'animate-slideDown'
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-[-20px] right-[-20px] bg-red-500 rounded-full p-2 shadow-md cursor-pointer"
        >
          <FaPowerOff className="text-white" />
        </button>

        <p className="text-gray-800 text-sm leading-6 text-center">{message}</p>
      </div>
    </div>
  );
};

export default MessageBox;
