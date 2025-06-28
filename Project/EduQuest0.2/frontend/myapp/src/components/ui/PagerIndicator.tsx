//PagerIndicator.tsx


'use client';

import React from 'react';
import Image from 'next/image';

const PagerIndicator = ({ 
  totalPages = 4,
  currentPage = 0,
  onPageChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-row gap-x-4 items-center ${className}`} {...props}>
      <Image
        src="/images/img_union.svg"
        alt="Active indicator"
        width={45}
        height={15}
      />
      {Array.from({ length: totalPages - 1 }, (_, index) => (
        <div
          key={index + 1}
          className="w-[15px] h-[15px] bg-pager-1 rounded-[7px] cursor-pointer hover:bg-global-3 transition-colors"
          onClick={() => onPageChange && onPageChange(index + 1)}
        />
      ))}
    </div>
  );
};

export default PagerIndicator;