"use client";
import { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    text: "An innovative web developer who consistently delivered beyond expectations. They were not only technically skilled but also incredibly patient and professional throughout the process. Communication was smooth, and deadlines were met without any issues. I truly appreciated the dedication and attention to detail. Highly recommend working with them for any digital project.",
    author: "Lena Marie",
    role:"Entrepreneur",
  },
  {
    id: 2,
    text: "This developer has an exceptional eye for design combined with a deep understanding of web development. They transformed our ideas into a beautiful, high-performing site with a clean, modern look. Their approach was creative, thoughtful, and technically sound. If you're looking for top-tier quality and reliability, I highly recommend their services.",
    author: "Azka Brown",
    role:"Brand Developer",
  },
  {
    id: 3,
    text: "I’m genuinely impressed by their talent as a web developer. The application delivered was both functionally robust and visually stunning. It’s rare to find someone with such a strong balance of design sensibility and technical know-how. Their work exceeded my expectations and brought real value to our project. Absolutely recommend them!",
    author: "Nicol Icon",
    role:"Business Owner",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },

      {
        breakpoint: 500,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white h-[500px] md:h-screen flex items-start md:items-center py-16">
      <div className="w-80 sm:w-2xl md:w-3xl lg:w-5xl xl:w-6xl mx-auto px-1 md:px-4">
        <h2 className="text-2xl md:text-4xl px-5 font-bold text-center md:text-right mb-8">
          Love from clients
        </h2>

        {/* Slider Container */}
        <div className="relative p-5 ">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4 h-[300px] xl:h-[450px] p-2">
                <div className="bg-white drop-shadow-lg  p-4 text-center h-full">
                  <p className="text-gray-500 text-xs md:text-md xl:text-lg  mb-4">
                    {item.text}
                  </p>
                  <h3 className="font-extrabold text-black text-md">{item.author}</h3>
                  <h3 className="font-semibold text-gray-500 text-sm">{item.role}</h3>

                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <div className="absolute -bottom-30 right-0 flex gap-3 pt-9 p-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-2 rounded-full border border-gray-600 hover:bg-gray-600 hover:text-white transition-all"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-2 rounded-full border border-gray-600 hover:bg-gray-600 hover:text-white transition-all"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
