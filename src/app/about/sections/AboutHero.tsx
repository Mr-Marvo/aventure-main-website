"use client";
import RoundImage from "@/app/assets/Section2/RoundImage";
import Squares from "@/app/components/animations/Squares";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 500;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const mouseX = mousePosition.x;
    const mouseY = mousePosition.y;

    const imageX = (mouseX - window.innerWidth / 2) * 0.05;
    const imageY = (mouseY - window.innerHeight / 2) * 0.05;

    setImagePosition({ x: imageX, y: imageY });
  }, [mousePosition]);

  return (
    <div className="flex flex-col items-center w-full">
      <section className="relative w-full h-[70vh] md:h-screen flex items-center bg-white overflow-hidden">
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal"
          borderColor="#F0F0F0"
          hoverFillColor="#F1F1F1"
        />
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

        <div className="hidden md:block absolute -bottom-10 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-48 lg:h-48">
          <motion.div
            style={{
              transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <RoundImage />
          </motion.div>
        </div>
      </section>
      {/* Image Section */}
      <div>
        <div className="w-full flex h-[600px] justify-between gap-5 bg-black py-10 px-10">
          <div className="relative w-full">
            <h2 className="text-lg text-gray-400 md:text-xl mb-5 md:mb-10">
              ABOUT
            </h2>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-relaxed sm:leading-relaxed md:leading-normal ">
              At our software service company, we specialise in crafting
              international-standard enterprise-level applications that drive
              success. Harnessing the power of cutting-edge technologies and
              artificial intelligence, we deliver robust solutions designed to
              meet the ever-changing demands of your business.
            </h2>
          </div>
          <div className="hidden md:block w-[40%]"></div>
        </div>
        <div className="flex items-center h-[130px] md:h-[200px] justify-start w-full px-10 bg-black">
          <div className="relative w-full  flex items-center">
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
