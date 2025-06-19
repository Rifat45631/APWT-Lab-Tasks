//Footer.jsx


'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = ({ className = '', ...props }) => {
  return (
    <footer className={`w-full px-[150px] py-12 ${className}`} {...props}>
      <div className="flex flex-col w-full max-w-[1173px]">
        <div className="flex flex-row justify-between mb-12">
          {/* Company Info */}
          <div className="flex flex-col w-[340px]">
            <Image
              src="/images/img_footerlogo.png"
              alt="EduQuest Footer Logo"
              width={143}
              height={36}
              className="mb-6"
            />
            <p className="font-rubik font-medium text-base leading-[30px] text-global-3 mb-8">
              EduQuest is a unique learning platform with powerful features and top-notch security to enhance your educational experience.
            </p>
            <div className="flex flex-row gap-x-4 mb-6">
              <Image
                src="/images/img_socmed_facebook.svg"
                alt="Facebook"
                width={33}
                height={33}
                className="cursor-pointer hover:opacity-80"
              />
              <Image
                src="/images/img_socmed_twitter.svg"
                alt="Twitter"
                width={33}
                height={33}
                className="cursor-pointer hover:opacity-80"
              />
              <Image
                src="/images/img_socmed_instagram.svg"
                alt="Instagram"
                width={33}
                height={33}
                className="cursor-pointer hover:opacity-80"
              />
            </div>
            <p className="font-rubik font-normal text-base leading-[19px] text-footer-1">
              ©2023Quizizz
            </p>
          </div>

          {/* Resource Links */}
          <div className="flex flex-col w-[200px]">
            <h3 className="font-rubik font-medium text-lg leading-[22px] text-global-1 mb-6">
              Resource
            </h3>
            <div className="flex flex-col gap-y-4">
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                Download
              </span>
              <Link 
                href="#pricing"
                className="font-rubik font-normal text-base leading-[19px] text-global-3 hover:text-global-1"
              >
                Pricing
              </Link>
              <Link 
                href="#locations"
                className="font-rubik font-normal text-base leading-[19px] text-global-3 hover:text-global-1"
              >
                Locations
              </Link>
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                Server
              </span>
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                Countries
              </span>
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                Blog
              </span>
            </div>
          </div>

          {/* Start Exploring */}
          <div className="flex flex-col w-[249px]">
            <h3 className="font-rubik font-medium text-lg leading-[22px] text-global-1 mb-6">
              Start Exploring
            </h3>
            <div className="flex flex-col gap-y-4">
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                EduQuest ?
              </span>
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                FAQ
              </span>
              <Link 
                href="#tutorials"
                className="font-rubik font-normal text-base leading-[19px] text-global-3 hover:text-global-1"
              >
                Tutorials
              </Link>
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                About Us
              </span>
              <Link 
                href="#privacy"
                className="font-rubik font-normal text-base leading-[19px] text-global-3 hover:text-global-1"
              >
                Privacy Policy
              </Link>
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                Terms of Service
              </span>
            </div>
          </div>

          {/* Earn Rewards */}
          <div className="flex flex-col w-[154px]">
            <h3 className="font-rubik font-medium text-lg leading-[22px] text-global-1 mb-6">
              Earn Rewards
            </h3>
            <div className="flex flex-col gap-y-4">
              <span className="font-rubik font-normal text-base leading-[19px] text-global-3 cursor-pointer hover:text-global-1">
                Quiz Champion
              </span>
              <Link 
                href="#referrer"
                className="font-rubik font-normal text-base leading-[19px] text-global-3 hover:text-global-1"
              >
                Quiz Referrer
              </Link>
              <Link 
                href="#community"
                className="font-rubik font-normal text-base leading-[19px] text-global-3 hover:text-global-1"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>

        {/* Go to Top Button */}
        <div className="flex justify-center">
          <Image
            src="/images/img_go_to_top.svg"
            alt="Go to top"
            width={46}
            height={45}
            className="cursor-pointer hover:opacity-80"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;