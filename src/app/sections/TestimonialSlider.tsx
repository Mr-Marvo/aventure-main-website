"use client";
import { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Slick Carousel styles (Required)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FollowCursor from "../components/animations/FollowCursor";

const testimonials = [
  {
    id: 1,
    text: "Cras gravida felis, convallis. lobortis, at, nisl. ex. vitae Ut amet, tempor Quisque odio ullamcorper non, nisl. Nam efficitur. ultrices fringilla hendrerit orci Lorem vitae faucibus lacus urna. ullamcorper tortor. urna. tincidunt ex nibh",
    author: "Lorem CEO of Ipsum",
  },
  {
    id: 2,
    text: "Cras gravida felis, convallis. lobortis, at, nisl. ex. vitae Ut amet, tempor Quisque odio ullamcorper non, nisl. Nam efficitur. ultrices fringilla hendrerit orci Lorem vitae faucibus lacus urna. ullamcorper tortor. urna. tincidunt ex nibh",
    author: "Lorem CEO of Ipsum",
  },
  {
    id: 3,
    text: "Cras gravida felis, convallis. lobortis, at, nisl. ex. vitae Ut amet, tempor Quisque odio ullamcorper non, nisl. Nam efficitur. ultrices fringilla hendrerit orci Lorem vitae faucibus lacus urna. ullamcorper tortor. urna. tincidunt ex nibh",
    author: "Lorem CEO of Ipsum",
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
    <section className="bg-white h-screen flex items-start md:items-center py-16">
      <div className="w-80 sm:w-2xl md:w-3xl lg:w-5xl xl:w-6xl mx-auto px-1 md:px-4">
        <h2 className="text-2xl md:text-4xl px-5 font-bold text-center md:text-right mb-8">
          Love from clients
        </h2>

        {/* Slider Container */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4">
                <FollowCursor
                  offsetX={0}
                  cardWidth="200px"
                  rotationFactor={40}
                  enableTilt={true}
                  animationConfig={{ mass: 5, tension: 350, friction: 40 }}
                  wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
                >
                  {" "}
                </FollowCursor>
                <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                  <p className="text-gray-500 text-sm md:text-lg mb-4">
                    {item.text}
                  </p>
                  <h3 className="font-bold text-gray-700">{item.author}</h3>
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
