//page.tsx

'use client';
import React from 'react';
import Image from 'next/image';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import Slider from '../components/ui/Slider';

export default function HomePage() {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };
  const handleSelectPlan = (planType) => {
    console.log(`${planType} plan selected`);
  };
  const handleSubscribe = () => {
    console.log('Subscribe Now clicked');
  };
 
  
  return (
    
    <div className="flex flex-col bg-global-7 w-full min-h-screen">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="flex flex-row items-center justify-center px-[150px] py-[133px] gap-x-[40px]">
        <div className="flex flex-col w-[555px]">
          <h1 className="font-rubik font-medium text-[50px] leading-[70px] text-global-1 mb-[20px]">
            Make every quiz easy with EduQuest.
          </h1>
          <p className="font-rubik font-normal text-base leading-[30px] text-global-2 mb-[110px]">
            Access all your learning needs with ease and fun using EduQuest — discover exciting features made just for you.
          </p>
          <div className="relative w-[250px] h-[85px]">
            
            <Button 
              onClick={handleGetStarted}
              className="absolute top-0 left-0 w-[250px] h-[60px] bg-global-3 text-button-2 rounded-[10px]"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="w-[611px] h-[324px]">
          <Image
            src="/images/img_group_1306.svg"
            alt="EduQuest Hero Illustration"
            width={611}
            height={324}
          />
        </div>
      </section>
      {/* Statistics Section */}
{/* Statistics Section */}
<section className="relative px-[20px] sm:px-[150px] mb-[103px]">
  <div className="absolute top-[53px] left-[50%] transform -translate-x-1/2 w-[1068px] h-[189px] bg-global-1 rounded-[10px] shadow-[0px_4px_114px_#888888ff]" />
  <div className="relative bg-global-7 rounded-[10px] w-[1140px] h-[200px] p-[37px] mx-auto">
    <div className="flex flex-row items-center justify-center gap-x-[37px] w-full">
      {/* Users */}
      <div className="flex flex-row items-center gap-x-[37px]">
        <div className="w-[55px] h-[55px] bg-global-6 rounded-[27px] flex items-center justify-center">
          <Image
            src="/images/img_heroiconssmuser.svg"
            alt="Users icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-rubik font-bold text-[25px] leading-[30px] text-global-1">90+</span>
          <span className="font-rubik font-normal text-xl leading-[24px] text-global-3">Users</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[2px] h-[125px] bg-global-2" />

      {/* Locations */}
      <div className="flex flex-row items-center gap-x-[37px]">
        <div className="w-[55px] h-[55px] bg-global-6 rounded-[27px] flex items-center justify-center">
          <Image
            src="/images/img_gridiconslocation.svg"
            alt="Location icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col ">
          <span className="font-rubik font-bold text-[25px] leading-[30px] text-global-1">30+</span>
          <span className="font-rubik font-normal text-xl leading-[24px] text-global-3">Locations</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[2px] h-[125px] bg-global-2" />

      {/* Assessment Servers */}
      <div className="flex flex-row items-center gap-x-[37px]">
        <div className="w-[55px] h-[55px] bg-global-6 rounded-[27px] flex items-center justify-center">
          <Image
            src="/images/img_bxbxsserver.svg"
            alt="Server icon"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-rubik font-bold text-[25px] leading-[30px] text-global-1">50+</span>
          <span className="font-rubik font-normal text-xl leading-[30px] text-global-3">Assessment Servers</span>
        </div>
      </div>
    </div>
  </div>
</section>

      
{/* Features Section */}
<section id="features" className="flex flex-col sm:flex-row justify-center px-[20px] sm:px-[184px] py-[54px] gap-y-[30px] sm:gap-x-[170px]">
  <div className="w-full sm:w-[508px] h-[414px] mx-auto">
    <Image
      src="/images/img_illustration_2.svg"
      alt="Features Illustration"
      width={508}
      height={414}
    />
  </div>
  <div className="flex flex-col w-full sm:w-[428px] mx-auto">
    <h2 className="font-rubik font-medium text-[35px] leading-[50px] text-global-1 mb-[8px] text-center sm:text-left">
      We Provide Many Features You Can Use
    </h2>
    <p className="font-rubik font-normal text-base leading-[30px] text-global-2 mb-[120px] text-center sm:text-left">
      Explore EduQuest&apos;s powerful features — each designed with purpose, and all made to make your learning journey fun and effective.
    </p>
    {/* Feature List */}
    <div className="flex flex-col gap-y-[21px]">
      <div className="flex flex-row items-center gap-x-[34px]">
        <Image
          src="/images/img_bxbxscheckcircle.svg"
          alt="Check"
          width={24}
          height={24}
        />
        <span className="font-rubik font-normal text-sm leading-[17px] text-global-3">
          Secure Learning Environment.
        </span>
      </div>
      <div className="flex flex-row items-center gap-x-[34px]">
        <Image
          src="/images/img_bxbxscheckcircle.svg"
          alt="Check"
          width={24}
          height={24}
        />
        <span className="font-rubik font-normal text-sm leading-[17px] text-global-3">
          Access Anytime, Anywhere.
        </span>
      </div>
      <div className="flex flex-row items-center gap-x-[34px]">
        <Image
          src="/images/img_bxbxscheckcircle.svg"
          alt="Check"
          width={24}
          height={24}
        />
        <span className="font-rubik font-normal text-sm leading-[17px] text-global-3">
          Optimized Performance.
        </span>
      </div>
      <div className="flex flex-row items-center gap-x-[34px]">
        <Image
          src="/images/img_bxbxscheckcircle.svg"
          alt="Check"
          width={24}
          height={24}
        />
        <span className="font-rubik font-normal text-sm leading-[17px] text-global-3">
          No Time Pressure.
        </span>
      </div>
    </div>
  </div>
</section>


      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-b from-global-5 to-transparent px-[175px] py-[80px]">
        <div className="text-center mb-[120px]">
          <h2 className="font-rubik font-medium text-[35px] leading-[42px] text-global-1 mb-[20px]">
            Choose Your Plan
          </h2>
          <p className="font-rubik font-normal text-base leading-[30px] text-global-2">
            Pick the learning package that suits you best — and start exploring with joy and confidence!
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="flex flex-row gap-x-[71px] justify-center mb-[150px]">
          {/* Free Plan */}
          <div className="bg-global-7 border-2 border-solid border-gray-300 rounded-[10px] w-[330px] h-[760px] p-[72px] flex flex-col items-center">
            <Image
              src="/images/img_illustration_free.svg"
              alt="Free Plan"
              width={144}
              height={165}
              className="mb-[32px]"
            />
            <h3 className="font-rubik font-medium text-lg leading-[22px] text-global-1 mb-[36px]">
              Free Plan
            </h3>
            {/* Features */}
            <div className="flex flex-col gap-y-[20px] mb-[40px] w-full">
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Unlimited Quiz Access
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Basic Study Materials
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Track Your Progress
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Works on All Devices
                </span>
              </div>
            </div>
            <div className="font-rubik font-normal text-sm leading-[17px] text-global-2 mb-[20px]">
              <span className="font-medium text-global-1">No Credit Card Required</span>
            </div>
            <div className="font-rubik font-normal text-sm leading-[17px] text-global-2 mb-[20px]">
              <span className="font-medium text-global-1"></span>
            </div>
            <span className="font-rubik font-medium text-[25px] leading-[30px] text-global-1 mb-[20px]">
              Free
            </span>
            <Button 
              variant="primary"
              onClick={() => handleSelectPlan('Free')}
              className="w-[177px] h-[45px] border-2 border-solid border-global-3 text-button-1 bg-transparent"
            >
              Select
            </Button>
          </div>
          {/* Standard Plan */}
          <div className="bg-global-7 border-2 border-solid border-gray-300 rounded-[10px] w-[330px] h-[760px] p-[72px] flex flex-col items-center">
            <Image
              src="/images/img_illustration_standard.svg"
              alt="Standard Plan"
              width={144}
              height={165}
              className="mb-[32px]"
            />
            <h3 className="font-rubik font-medium text-lg leading-[22px] text-global-1 mb-[36px]">
              Standard Plan
            </h3>
            {/* Features */}
            <div className="flex flex-col gap-y-[20px] mb-[40px] w-full">
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Unlimited Quiz Access
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Full Study Material Library
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Progress Tracking & Insights
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Works on All Devices
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Learn Anytime, Anywhere
                </span>
              </div>
            </div>
            <div className="font-rubik font-medium text-[25px] leading-[30px] text-global-1 mb-[20px]">
              <span>$9 </span>
              <span className="font-normal text-global-3">/ mo</span>
            </div>
            <Button 
              variant="primary"
              onClick={() => handleSelectPlan('Standard')}
              className="w-[177px] h-[45px] border-2 border-solid border-global-3 text-button-1 bg-transparent"
            >
              Select
            </Button>
          </div>
          {/* Premium Plan */}
          <div className="bg-global-7 border-2 border-solid border-global-3 rounded-[10px] w-[330px] h-[760px] p-[72px] flex flex-col items-center">
            <Image
              src="/images/img_illustration_premium.svg"
              alt="Premium Plan"
              width={144}
              height={165}
              className="mb-[32px]"
            />
            <h3 className="font-rubik font-medium text-lg leading-[22px] text-global-1 mb-[36px]">
              Premium Plan
            </h3>
            {/* Features */}
            <div className="flex flex-col gap-y-[20px] mb-[40px] w-full">
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  All Standard Features
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Exclusive Practice Tests
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Personalized Learning Paths
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Advanced Analytics
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-[21px]">
                <Image src="/images/img_jamcheck.svg" alt="Check" width={24} height={24} />
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-2">
                  Early Access to New Features
                </span>
              </div>
            </div>
            <div className="font-rubik font-medium text-[25px] leading-[30px] text-global-1 mb-[20px]">
              <span>$12 </span>
              <span className="font-normal text-global-3">/ mo</span>
            </div>
            <div className="relative w-[177px] h-[62px]">
              <Button 
              variant="primary"
              onClick={() => handleSelectPlan('Standard')}
              className="w-[177px] h-[45px] border-2 border-solid border-global-3 text-button-1 bg-transparent"
            >
              Select
            </Button>
            </div>
          </div>
        </div>
        {/* Network Section */}
        <div className="text-center mb-[216px]">
          <h2 className="font-rubik font-medium text-[35px] leading-[50px] text-global-1 mb-[15px]">
            Extensive Learning Network with Fast & Reliable Access
          </h2>
          <p className="font-rubik font-normal text-base leading-[30px] text-global-2 mb-[216px]">
            Access EduQuest anywhere — your learning goes with you, no matter where you are.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/img_huge_global.svg"
              alt="Global Network Map"
              width={1060}
              height={537}
            />
          </div>
        </div>
      </section>
      {/* Company Logos */}
      <section className="flex flex-row justify-center gap-x-[228px] px-[404px] mb-[121px]">
        <Image
          src="/images/discord.jpg"
          alt="Company Logo 1"
          width={156}
          height={50}
        />
        <Image
          src="/images/reddit.jpg"
          alt="Company Logo 2"
          width={156}
          height={50}
        />
        <Image
          src="/images/git.jpg"
          alt="Company Logo 3"
          width={187}
          height={63}
        />
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="px-[150px] mb-[115px]">
        <div className="text-center mb-[120px]">
          <h2 className="font-rubik font-medium text-[35px] leading-[50px] text-global-1 mb-[20px]">
            Trusted by Thousands of Happy Learners
          </h2>
          <p className="font-rubik font-normal text-base leading-[30px] text-global-2">
            Here are the stories of our happy learners who have discovered the exciting features of EduQuest!
          </p>
        </div>
        {/* Testimonials Slider */}
        <div className="relative mb-[85px]">
          <Slider className="relative z-10" />
        </div>
      </section>
      {/* Subscribe Section */}
<section className="relative px-[20px] sm:px-[150px] mb-[115px]">
  <div className="absolute top-[16px] left-[50%] transform -translate-x-1/2 w-[1077px] h-[250px] bg-global-1 rounded-[10px] shadow-[0px_4px_114px_#888888ff]" />
  <div className="relative bg-global-7 rounded-[10px] w-full sm:w-[1140px] h-[233px] flex flex-col sm:flex-row items-center justify-center sm:justify-between px-[20px] sm:px-[70px] mx-auto">
    <div className="flex flex-col w-full sm:w-[460px] text-center sm:text-left">
      <h2 className="font-rubik font-medium text-[35px] leading-[45px] text-global-1 mb-[7px]">
        Subscribe now to unlock exclusive features!
      </h2>
      <p className="font-rubik font-normal text-base leading-[19px] text-global-2">
        Subscribe with us and start your fun learning journey.
      </p>
    </div>
    <div className="relative w-full sm:w-[250px] h-[85px] mt-[20px] sm:mt-0">
      <Button 
        onClick={handleSubscribe}
        className="absolute top-0 left-0 w-full sm:w-[250px] h-[60px] bg-global-3 text-button-2 rounded-[10px]"
      >
        Subscribe Now
      </Button>
    </div>
  </div>
</section>

      {/* Footer */}
      <div className="bg-global-5 ">
        <Footer />
      </div>
      
    </div>
  );
}