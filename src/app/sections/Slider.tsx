"use client";
import { useRef, useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

type SliderData = {
  image: string;
  title: string;
  description: string;
};

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"right" | "left">(
    "right"
  );
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollAmount = 290;

  // Function to scroll in the current direction
  const scroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (
        scrollDirection === "right" &&
        scrollLeft + clientWidth >= scrollWidth
      ) {
        setScrollDirection("left");
      } else if (scrollDirection === "left" && scrollLeft <= 0) {
        setScrollDirection("right");
      }

      sliderRef.current.scrollBy({
        left: scrollDirection === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isUserScrolling || isHovered) return;

    const interval = setInterval(scroll, 1000);
    return () => clearInterval(interval);
  }, [scrollDirection, isUserScrolling, isHovered]);

  // Handle manual scrolling and resume auto-scroll
  const handleManualScroll = (direction: "left" | "right") => {
    setIsUserScrolling(true);
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsUserScrolling(false), 1000);
  };

  const sliderData: SliderData[] = [
    {
      image: "/Image Block.png",
      title: "saas product testing",
      description: "UI/UX | Web Development.",
    },
    {
      image: "/Image Block (1).png",
      title: "saas product testing",
      description: "UI/UX | Web Development.",
    },
    {
      image: "/Image Block (2).png",
      title: "saas product testing",
      description: "UI/UX | Web Development.",
    },
    {
      image: "/Image Block (3).png",
      title: "saas product testing",
      description: "UI/UX | Web Development.",
    },
  ];

  return (
    <section className="h-screen bg-[#F0F0F0] p-4 md:p-20">
      <div className="flex flex-col justify-between w-full z-30 overflow-y-hidden">
        <div className="mb-7 md:mb-1">
          <h1 className="text-xl md:text-2xl">FEATURED PROJECTS</h1>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end w-full px-4 py-2 gap-3">
          <button
            onClick={() => handleManualScroll("left")}
            className="text-black p-2 rounded-full border border-black hover:bg-black hover:text-white transition-all"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => handleManualScroll("right")}
            className="text-black p-2 rounded-full border border-black hover:bg-black hover:text-white transition-all"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Slider Section */}
        <div ref={sliderRef} className="flex space-x-3 w-full overflow-hidden">
          {sliderData.map((item, id) => (
            <div
              key={id}
              className="flex flex-col w-[280px] md:w-[400px] lg:w-[520px] flex-shrink-0 rounded-3xl overflow-hidden relative bg-white shadow-lg"
            >
              <div
                className="relative overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] md:h-[300px] lg:h-[330px] xl:h-[370px] object-cover transition-transform duration-400 hover:scale-120"
                />
                {/* Centered arrow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  <Link href="/portfolio">
                    <button className="text-white p-7 rounded-full bg-[#73ba0d] transition-all">
                      <FaArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-base md:text-lg font-semibold ">
                  {item.title}
                </h2>
                <p className="text-[12px] font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
