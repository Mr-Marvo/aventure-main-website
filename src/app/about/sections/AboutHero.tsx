"use client";

import RoundImage from "@/app/assets/Section2/RoundImage";
import Squares from "@/app/components/animations/Squares";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInsideSection, setIsInsideSection] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 500;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroSectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      const mouseY = window.scrollY + e.clientY;

      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        mouseY >= sectionTop &&
        mouseY <= sectionBottom;

      if (isInside) {
        setIsInsideSection(true);
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      } else {
        setIsInsideSection(false);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleScrollClick = () => {
    const aboutSection2 = document.getElementById("aboutSection2");
    if (aboutSection2) {
      aboutSection2.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="relative w-full h-[90vh] flex items-center bg-white overflow-hidden cursor-none"
      >
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal"
          borderColor="#F0F0F0"
          hoverFillColor="#F1F1F1"
        />

        {isInsideSection && (
          <div
            className="fixed z-40 w-16 h-16 md:w-24 md:h-24 pointer-events-auto"
            onClick={handleScrollClick}
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
              transition: "transform 0.05s linear",
              cursor: "none",
            }}
          >
            <RoundImage className="w-full h-full" />
          </div>
        )}

        {/* Hero Text */}
        <div className="absolute z-10 text-black text-left p-5 md:p-10 w-full">
          <div className="flex flex-col justify-start w-full items-start">
            <p className="text-3xl lg:text-5xl xl:text-6xl font-extralight leading-normal pl-5 sm:pl-10 md:pl-20 lg:pl-20 xl:pl-40">
              We are more than a company, we are family
            </p>
            <p className="text-3xl lg:text-5xl xl:text-6xl font-extralight leading-normal pl-5">
              beyond the typical work culture.
            </p>
            <div className="hidden md:block w-[70%]"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div id="aboutSection2">
        <div className="w-full flex h-[600px] justify-between gap-5 bg-black py-10 px-10">
          <div className="relative w-full">
            <h2 className="text-lg text-gray-400 md:text-xl mb-5 md:mb-10">
              ABOUT
            </h2>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-relaxed sm:leading-relaxed md:leading-normal">
              At our software service company, we specialise in crafting
              international-standard enterprise-level applications that drive
              success. Harnessing the power of cutting-edge technologies and
              artificial intelligence, we deliver robust solutions designed to
              meet the ever-changing demands of your business.
            </h2>
          </div>
          <div className="hidden md:block w-[40%]"></div>
        </div>

        {/* Timeline Progress */}
        <div className="flex items-center h-[130px] md:h-[200px] justify-start w-full px-10 bg-black">
          <div className="relative w-full flex items-center">
            <div className="flex flex-col -mt-9 items-center">
              <span className="text-white mb-2">2022</span>
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>

            <motion.div
              className="h-[2px] bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />

            <div className="flex flex-col -mt-9 items-center">
              <span className="text-white mb-2">Now</span>
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
