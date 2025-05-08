"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import RoundImage from "../assets/Section2/RoundImage";
import VideoSection from "./VideoSection";
import BlurText from "../components/animations/BlurText";

const Section2 = ({ id }: { id: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInsideSection, setIsInsideSection] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current && sectionRef.current.contains(e.target as Node)) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsInsideSection(true);
      } else {
        setIsInsideSection(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollClick = () => {
    const videoSection = document.getElementById("videoSection");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        id={id}
        className="relative w-full h-[500px] md:h-screen flex flex-col md:flex-row items-center justify-center px-4 md:pl-20 text-black cursor-none"
      >
        {/* Background Image */}
        <div className="absolute inset-0 top-20 md:top-44 left-0 md:left-[600px]">
          <div className="relative w-full h-full">
            <Image
              src="/Glass.png"
              fill
              alt="Glass background"
              className="object-cover"
            />
          </div>
        </div>

        {isInsideSection && (
          <div
            className="fixed top-0 left-0 z-[9999] pointer-events-auto w-16 h-16 md:w-24 md:h-24"
            onClick={handleScrollClick}
            style={{
              transform: `translate(${mousePosition.x - 48}px, ${
                mousePosition.y - 48
              }px)`,
              transition: "transform 0.05s linear",
            }}
          >
            <RoundImage className="w-full h-full" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 w-full mx-auto">
          <div>
            <BlurText
              text="Empowering enterprises with cutting-edge solutions"
              delay={300}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[120px] font-normal mb-6 md:mb-8"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-44 pt-6 md:pt-12">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-right text-gray-400 mb-6 md:mb-12 px-4 md:px-11">
                AI-driven innovation, and transformative technology to enhance
                efficiency, drive growth, optimise operations, and unlock new
                opportunities in the ever-evolving digital landscape.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <VideoSection id="videoSection" />
    </>
  );
};

export default Section2;
