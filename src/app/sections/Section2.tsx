"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import RoundImage from "../assets/Section2/RoundImage";
import DecryptedText from "../components/animations/DecryptedText";

const Section2 = ({ id }: { id: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!imageRef.current || !sectionRef.current) return;

    const imageRect = imageRef.current.getBoundingClientRect();
    const imageCenter = {
      x: imageRect.left + imageRect.width / 2,
      y: imageRect.top + imageRect.height / 2,
    };

    // Calculate exact offset needed to center image on cursor
    const offsetX = mousePosition.x - imageCenter.x;
    const offsetY = mousePosition.y - imageCenter.y;

    // Apply different follow intensities
    const followIntensity = isHovering ? 0.95 : 0.1; // 95% follow when hovering

    setImagePosition({
      x: offsetX * followIntensity,
      y: offsetY * followIntensity,
    });
  }, [mousePosition, isHovering]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative w-full h-[500px] md:h-screen flex flex-col md:flex-row items-center justify-center px-4 md:pl-20 text-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto">
        {/* Main Heading */}
        <div onMouseEnter={() => setIsHovering(true)}>
          <DecryptedText
            text="Empowering enterprises with cutting-edge solutions"
            speed={90}
            maxIterations={30}
            animateOn="view"
            revealDirection="center"
            sequential={true}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[120px] font-normal mb-6 md:mb-8"
          />
        </div>

        {/* Subheading & Round Image */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-44 pt-6 md:pt-12">
          {/* Round Image with Strong Magnet Effect */}
          <div
            ref={imageRef}
            className="hidden md:block w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 transition-transform duration-100 ease-linear pointer-events-none"
            style={{
              transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
              willChange: "transform",
            }}
          >
            <RoundImage />
          </div>

          {/* Text */}
          <div onMouseEnter={() => setIsHovering(true)}>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-right text-gray-400 mb-6 md:mb-12 px-4 md:px-11">
              AI-driven innovation, and transformative technology to enhance
              efficiency, drive growth, optimise operations, and unlock new
              opportunities in the ever-evolving digital landscape.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
