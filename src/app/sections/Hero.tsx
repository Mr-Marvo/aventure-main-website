"use client";
import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DownArrow from "../assets/DownArrow";
import Section2 from "./Section2";

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
      color: "#73ba0d",
      stagger: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 30%",
      },
    });
  }, []);

  return (
    <>
      <section className="relative w-full h-[500px] md:h-screen flex overflow-hidden">
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
        <div className="relative z-10 flex flex-col pt-16 pl-6 md:pl-12">
          <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[120px] 3xl:text-[190px] font-light max-w-4xl md:max-w-6xl 2xl:max-w-[1920px]">
            We Make Concepts <br /> into Tangible Solutions
          </p>

          {/* Explore Button */}
          <div className="mt-6 pl-0 sm:pl-[500px] lg:pl-[700px] xl:pl-[1000px]">
            <button
              onClick={handleExploreClick}
              className="flex flex-row items-center justify-center gap-1 px-6 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm transition hover:bg-white/20"
            >
              <DownArrow />
              <span className="-ml-2 mt-2 text-lg">EXPLORE</span>
            </button>
          </div>
        </div>

        {/* Animated AVENTURE Text */}
        <div className="absolute bottom-10">
          <div>
            <div ref={triggerRef}>
              {text.split("").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    if (el) lettersRef.current[index] = el;
                  }}
                  className={`text-fluid text-white drop-shadow-lg transition-all duration-500 ease-out ${baunkFont.className}`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section2 */}
      <Section2 id="section2" />
    </>
  );
};

export default Hero;
