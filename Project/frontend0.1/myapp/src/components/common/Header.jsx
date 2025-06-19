'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

const Header = ({ className = '', ...props }) => {
  
  const [scrolled, setScrolled] = useState(false);

 
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
          
          <Link
            href="#about"
            className="font-instrument font-normal text-2xl leading-[30px] text-header-1 hover:text-global-3 transition-colors"
          >
            About
          </Link>
          <Link
            href="#features"
            className="font-instrument font-normal text-2xl leading-[30px] text-header-1 hover:text-global-3 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="font-instrument font-normal text-2xl leading-[30px] text-header-1 hover:text-global-3 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="font-instrument font-normal text-2xl leading-[30px] text-header-1 hover:text-global-3 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#help"
            className="font-instrument font-normal text-2xl leading-[30px] text-header-1 hover:text-global-3 transition-colors"
          >
            Help
          </Link>
        </nav>

        <div className="ml-auto">
         <Button
    className={`w-[140px] h-[48px] border-2 transition-colors duration-300 ${
      scrolled ? 'border-global-3' : 'border-black'
    }`}
  >
    Login
  </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
