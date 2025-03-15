"use client";
import React, { useEffect, useRef } from "react";
import { Bokor } from "next/font/google";
import localFont from "next/font/local";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DownArrow from "../assets/DownArrow";
import Section2 from "./Section2";

const bokorFont = Bokor({
  subsets: ["latin"],
  weight: "400",
});

const baunkFont = localFont({
  src: "../font/Baunk.ttf",
});

const Hero: React.FC = () => {
  const handleExploreClick = () => {
    const section2 = document.getElementById("section2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  const text = "AVENTURE";

  useEffect(() => {
    if (!triggerRef.current) return;

    gsap.to(lettersRef.current, {
      color: "#067106",
      stagger: 0.2, // Delay for each letter
      duration: 0.5,
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 67%",
        end: "bottom 30%",
      },
    });
  }, []);

  return (
    <>
      <section className="relative w-full h-screen flex overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col pt-16 pl-12">
          <h1 className="text-white text-6xl md:text-[110px] font-normal max-w-6xl">
            We Make Concepts <br /> into Tangible Solutions
          </h1>

          {/* Explore Button */}
          <div className="mt-6 pl-[1000px]">
            <button
              onClick={handleExploreClick}
              className="flex flex-row items-center justify-center gap-1 px-6 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm transition hover:bg-white/20"
            >
              <DownArrow />
              <span className="-ml-2 mt-2">EXPLORE</span>
            </button>
          </div>
        </div>

        {/* Animated AVENTURE Text */}
        <div className="absolute bottom-20 left-5">
          <div className="pl-9">
            <div ref={triggerRef} className="flex space-x-2">
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    if (el) lettersRef.current[index] = el;
                  }}
                  className={`text-[160px] font-normal text-white drop-shadow-lg transition-all duration-500 ease-out ${baunkFont.className}`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Icon */}
        <div className="absolute top-5 right-5">
          <button className="w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white">
            ☰
          </button>
        </div>
      </section>

      {/* Section2 */}
      <Section2 id="section2" />
    </>
  );
};

export default Hero;
