// Header.jsx


'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import LoginModal from '../modals/LoginModal'; // 🔁 Import LoginModal

const Header = ({ className = '', ...props }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // 🔁 Add modal toggle state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-[73px] transition-colors duration-100 ${className}`}
      {...props}
    >
      <div
        className={`flex flex-row w-full h-full items-center px-[119px] shadow-[0px_4px_15px_#888888ff] transition-colors duration-300 ${
          scrolled ? 'bg-gray-400' : 'bg-header-1'
        }`}
      >
        <div className="flex flex-row items-center gap-x-2">
          <Image
            src="/images/img_vector.svg"
            alt="EduQuest Logo"
            width={35}
            height={36}
          />
          <span className="font-rubik font-bold text-2xl leading-[29px] text-global-1">
            EduQuest
          </span>
        </div>

        <nav className="flex flex-row items-center gap-x-8 ml-[181px]">
          {['about', 'features', 'pricing', 'testimonials', 'help'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="font-instrument font-normal text-2xl leading-[30px] text-header-1 hover:text-global-3 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto">
          {/* 🔁 Updated Login Button to open modal */}
          <Button
            onClick={() => setShowLogin(true)}
            className={`w-[140px] h-[48px] border-2 transition-colors duration-300 ${
              scrolled ? 'border-global-3' : 'border-black'
            }`}
          >
            Login
          </Button>
        </div>
      </div>

      {/* 🔁 Render the modal conditionally */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </header>
  );
};

export default Header;
