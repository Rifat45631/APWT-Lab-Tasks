'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Slider = ({
  testimonials = [],
  className = '',
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const defaultTestimonials = [
    {
      id: 1,
      name: "Rifat Arafin",
      location: "Dhaka, Bangladesh",
      rating: "4.5",
      image: "/images/img_ellipse_175.png",
      testimonial: "Wow... I am thrilled to use EduQuest! It exceeded all my expectations, and I have had no issues so far.It is truly the best for learning!"
    },
    {
      id: 2,
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: "4.5",
      image: "/images/img_ellipse_175_50x50.png",
      testimonial: "I love EduQuest because I can travel far and still access my quizzes with high speed and ease."
    },
    {
      id: 3,
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: "4.5",
      image: "/images/img_ellipse_175_1.png",
      testimonial: "This is exactly what I need for my studies — a platform that offers high security and reliability."
    },


    {
      id: 4,
      name: "Sophia Ling",
      location: "Taipei, Taiwan",
      rating: "4.8",
      image: "/images/id4.png",
      testimonial: "EduQuest has transformed how I prepare for exams. The platform is smooth, and I love the detailed progress tracking."
    },

    {
      id: 5,
      name: "Arjun Mehta",
      location: "Mumbai, India",
      rating: "4.6",
      image: "/images/id5.png",
      testimonial: "I appreciate how accessible everything is. Whether I'm on my phone or laptop, EduQuest delivers consistent performance."
    },

    {
     id: 6,
     name: "Amelia Nguyen",
     location: "Sydney, Australia",
     rating: "4.8",
     image: "/images/id6.png",
     testimonial: "The quizzes are fun, and the UI is so clean! It's helped me stay motivated and organized throughout my courses."
    },

    {
      id: 7,
      name: "Carlos Romero",
      location: "Bogotá, Colombia",
      rating: "4.4",
      image: "/images/id7.png",
      testimonial: "EduQuest is intuitive and reliable. I especially like how quickly I can find the right material when I need it."
    },

    {
      id: 8,
      name: "Fatima Zahra",
      location: "Casablanca, Morocco",
      rating: "4.9",
      image: "/images/id8.png",
      testimonial: "A fantastic platform for self-paced learning. The instant feedback on quizzes keeps me on the right track."
    },

    {
      id: 9,
      name: "Nora Al-Fulan",
      location: "Dubai, UAE",
      rating: "4.6",
      image: "/images/nora_circular_grayscale.png",
      testimonial: "EduQuest fits perfectly into my busy schedule — flexible and easy to use."
    },
    {
      id: 10,
      name: "James Okoro",
      location: "Lagos, Nigeria",
      rating: "4.7",
      image: "/images/id10.png",
      testimonial: "I never thought learning online could be this engaging. EduQuest makes studying feel less like a chore."
    },
    {
      id: 11,
      name: "Hana Kobayashi",
      location: "Kyoto, Japan",
      rating: "4.8",
      image: "/images/id11.png",
      testimonial: "The quizzes are clear, concise, and helpful. EduQuest gives me the confidence to tackle tough topics."
    },
    {
      id: 12,
      name: "Liam Gallagher",
      location: "Dublin, Ireland",
      rating: "4.5",
      image: "/images/id12.png",
      testimonial: "As someone who learns better visually, I love the design of EduQuest. It keeps me focused and on track."
    }

  ];

  const slides = testimonials.length > 0 ? testimonials : defaultTestimonials;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(slides.length / itemsPerPage);

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className="flex flex-row gap-x-12 justify-center">
        {slides.slice(currentSlide * itemsPerPage, currentSlide * itemsPerPage + itemsPerPage).map((testimonial, index) => (
          <div
            key={testimonial.id || index}
            className="flex flex-col bg-global-7 rounded-[10px] w-[400px] h-[230px] p-[30px] border-2 border-solid border-gray-300"
          >
            <div className="flex flex-row items-center gap-x-4 mb-5">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-rubik font-medium text-lg leading-[22px] text-global-1">
                  {testimonial.name}
                </span>
                <span className="font-rubik font-normal text-sm leading-[17px] text-global-3">
                  {testimonial.location}
                </span>
              </div>
              <div className="flex flex-row items-center ml-auto gap-x-2">
                <span className="font-rubik font-normal text-base leading-[19px] text-global-1">
                  {testimonial.rating}
                </span>
                <Image
                  src="/images/img_antdesignstarfilled.svg"
                  alt="Star rating"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <p className="font-rubik font-normal text-base leading-[30px] text-global-1">
              &quot;{testimonial.testimonial}&quot;
            </p>
          </div>
        ))}
      </div>

      {/* Pager Indicators */}
      <div className="flex justify-center gap-x-3 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`w-5 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'bg-global-3' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center gap-x-4 mt-6">
        
        
        
<button
  onClick={goPrev}
  className="w-[60px] h-[60px] bg-global-3 border-2 border-solid border-global-3 rounded-full flex items-center justify-center shadow-[0px_14px_44px_#0e132214] hover:bg-red-600 transition-colors"
>
  <Image
    src="/images/img_evaarrowbackfill_white_a700.svg" 
    alt="Previous"
    width={30}
    height={30}
    className="rotate-180" 
  />

  
</button>
        <button
          onClick={goNext}
          className="w-[60px] h-[60px] bg-global-3 border-2 border-solid border-global-3 rounded-full flex items-center justify-center shadow-[0px_14px_44px_#0e132214] hover:bg-red-600 transition-colors"
        >
          <Image
            src="/images/img_evaarrowbackfill_white_a700.svg"
            alt="Next"
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
