"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const services = [
  {
    title: "Product Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlight: "",
    id: 1,
  },
  {
    title: "Web Solutions",
    description: "Mobile friendly custom design including UI-UX things.",
    highlight: "Mobile friendly custom design including UI-UX things.",
    id: 2,
  },
];
const services2 = [
  {
    title: "Mobile Applications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlight: "Android & IOS Devices",
    id: 3,
  },
  {
    title: "Tech Experts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    highlight: "",
    id: 4,
  },
];

function ServicesSection() {
  const [lettersRef, setlettersRef] = useArrayRef<HTMLSpanElement>();
  const [hoveredId, setHoveredId] = useState<number | null>(2);
  const [hovered2Id, setHovered2Id] = useState<number | null>(3);

  const triggerRef = useRef<HTMLDivElement | null>(null);

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
      duration: 1,
      stagger: 1,
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className="bg-black h-screen">
      <div className="h-[10vh]"></div>
      <div className="pl-[10%] pr-[5%]">
        <h2 className="text-base uppercase text-gray-300 tracking-wide">
          Services
        </h2>
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span
              className="text-5xl leading-20 font-bold text-black-500 drop-shadow-lg"
              key={index}
              ref={setlettersRef}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-black text-white p-10 pl-[10%] pr-[5%]">
        <div className="mt-8 flex gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(2)} // Reset to "Web Solutions" on mouse leave
              className={`
              relative transition-all duration-300 ease-in-out rounded-lg p-6 border border-white bg-white text-black flex flex-col justify-between
              ${
                hoveredId === service.id
                  ? "w-[60%]" // Expanded width for hovered card
                  : hoveredId !== null
                  ? "w-[20%]" // Shrunk width for non-hovered cards
                  : "w-[25%]" // Default width when no card is hovered
              }
            `}
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              {service.highlight && (
                <p className="font-bold mt-2">{service.highlight}</p>
              )}
              <p className="text-sm mt-2">{service.description}</p>
              <div className="absolute top-4 right-4 text-black border border-black rounded-full p-2 w-8 h-8 flex items-center justify-center">
                ↗
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-4">
          {services2.map((service2) => (
            <div
              key={service2.id}
              onMouseEnter={() => setHovered2Id(service2.id)}
              onMouseLeave={() => setHovered2Id(3)} // Reset to "Mobile Applications" on mouse leave
              className={`
              relative transition-all duration-300 ease-in-out rounded-lg p-6 border border-white bg-white text-black flex flex-col justify-between
              ${
                hovered2Id === service2.id
                  ? "w-[60%]" // Expanded width for hovered card
                  : hovered2Id !== null
                  ? "w-[20%]" // Shrunk width for non-hovered cards
                  : "w-[25%]" // Default width when no card is hovered
              }
            `}
            >
              <h3 className="text-lg font-semibold">{service2.title}</h3>
              {service2.highlight && (
                <p className="font-bold mt-2">{service2.highlight}</p>
              )}
              <p className="text-sm mt-2">{service2.description}</p>
              <div className="absolute top-4 right-4 text-black border border-black rounded-full p-2 w-8 h-8 flex items-center justify-center">
                ↗
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
