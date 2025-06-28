//Button.tsx


'use client';

import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'border-4 border-solid border-global-3 text-header-1 bg-transparent hover:bg-global-3 hover:text-button-2',
    secondary: 'bg-global-2 text-global-4 hover:bg-global-3 hover:text-button-2'
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-3 text-lg'
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        rounded-3xl
        transition-colors 
        duration-150 
        focus:outline-none 
        focus:ring-2 
        focus:ring-opacity-50
        font-instrument font-bold text-2xl leading-[30px] text-center
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
