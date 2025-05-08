"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LuArrowUpRight } from "react-icons/lu";
import { useRouter } from "next/navigation";
import ArrowWithCircle from "../assets/svgs/ArrowWithCircle";

const services = [
  {
    title: "Product Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlight: "Android & IOS Devices",
    id: 1,
  },
  {
    title: "Web Solutions",
    description:
      "Mobile friendly custom design including UI-UX things.Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    highlight: "Mobile friendly custom design.",
    id: 2,
    isDefault: true, // Default hovered state
  },
];
const services2 = [
  {
    title: "Mobile Applications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlight: "Android & IOS Devices",
    id: 3,
    isDefault: true, // Default hovered state
  },
  {
    title: "Tech Experts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlight: "Android & IOS Devices",
    id: 4,
  },
];

function ServicesSection() {
  const [lettersRef, setlettersRef] = useArrayRef<HTMLSpanElement>();
  const [hoveredId, setHoveredId] = useState<number | null>(2);
  const [hovered2Id, setHovered2Id] = useState<number | null>(3);
  const [isMobile, setIsMobile] = useState(false);

  // Check if any row is hovered separately
  const isFirstRowHovered = hoveredId !== null;
  const isSecondRowHovered = hovered2Id !== null;

  const router = useRouter();

  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function useArrayRef<T>() {
    const lettersRef = useRef<T[]>([]);
    lettersRef.current = [];
    return [
      lettersRef,
      (ref: T | null) => {
        if (ref) lettersRef.current.push(ref);
      },
    ] as const;
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "We provide innovative, tailored IT solutions to help businesses thrive, specialising in software development, IT consulting, cloud solutions, cybersecurity, and managed services to enhance efficiency, security, and growth.";

  useEffect(() => {
    if (!triggerRef.current) return;

    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 93%",
        end: "bottom 85%",
      },
      color: "#ffffff",
      duration: 5,
      stagger: 5,
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section className="bg-black">
      <div className="h-[10vh]"></div>
      <div className="px-4 md:pl-20 md:pr-[7%]">
        <h2 className="text-base uppercase text-gray-300 tracking-wide">
          Capabilities
        </h2>
        <div ref={triggerRef} className="mt-3 w-full lg:w-3/4">
          {text.split("").map((letter, index) => (
            <span
              className="text-2xl md:text-4xl xl:text-[40px] leading-8 md:leading-12 font-extrabold text-black-500 drop-shadow-lg"
              key={index}
              ref={setlettersRef}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-black text-white p-4 md:p-14 md:px-10 lg:px-20">
        {/* First Row of Services */}
        <div className="mt-1 flex flex-col md:flex-row gap-4 md:gap-2">
          {services.map((service) => {
            const isHovered =
              isMobile ||
              hoveredId === service.id ||
              (!isFirstRowHovered && service.isDefault);

            return (
              <div
                key={service.id}
                onMouseEnter={() => !isMobile && setHoveredId(service.id)}
                onMouseLeave={() => !isMobile && setHoveredId(null)}
                onClick={() => router.push("/capabilities")}
                className={`relative transition-all duration-300 ease-in-out rounded-4xl p-12 border border-white bg-white text-black flex flex-col justify-between cursor-pointer
                         ${
                           isHovered
                             ? "w-full md:w-[60%] h-[280px]"
                             : "w-full md:w-[40%]"
                         }`}
              >
                <h3 className="text-sm lg:text-lg xl:text-4xl font-semibold">
                  {service.title}
                </h3>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "flex flex-col md:flex-row justify-between gap-3 md:gap-10"
                      : "flex flex-col"
                  }`}
                >
                  {isHovered && (
                    <p className="font-bold text-sm lg:text-lg xl:text-[24px]">
                      {service.highlight}
                    </p>
                  )}
                  <p className="text-sm xl:text-[16px]">
                    {service.description}
                  </p>
                </div>
                <div className="absolute top-9 right-9 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                  <ArrowWithCircle size={24} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row of Services */}
        <div className="mt-4 md:mt-2 flex flex-col md:flex-row gap-4 md:gap-2">
          {services2.map((service2) => {
            const isHovered =
              isMobile ||
              hovered2Id === service2.id ||
              (!isSecondRowHovered && service2.isDefault);

            return (
              <div
                key={service2.id}
                onMouseEnter={() => !isMobile && setHovered2Id(service2.id)}
                onMouseLeave={() => !isMobile && setHovered2Id(null)}
                onClick={() => router.push("/capabilities")}
                className={`relative transition-all duration-300 ease-in-out rounded-4xl p-12 border border-white bg-white text-black flex flex-col justify-between cursor-pointer
                         ${
                           isHovered
                             ? "w-full md:w-[60%] h-[280px]"
                             : "w-full md:w-[40%]"
                         }`}
              >
                <h3 className="text-sm lg:text-lg xl:text-4xl font-semibold">
                  {service2.title}
                </h3>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "flex flex-col md:flex-row justify-between gap-3 md:gap-10"
                      : "flex flex-col"
                  }`}
                >
                  {isHovered && (
                    <p className="font-bold text-sm lg:text-lg xl:text-[24px]">
                      {service2.highlight}
                    </p>
                  )}
                  <p className="text-sm xl:text-[16px]">
                    {service2.description}
                  </p>
                </div>
                <div className="absolute top-9 right-9 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                  <ArrowWithCircle size={24} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-[10vh]"></div>
    </section>
  );
}

export default ServicesSection;
