"use client";

import React, { useEffect, useRef, useState } from "react";
import Squares from "../components/animations/Squares";
import ArrowAngleRight from "../assets/svgs/ArrowAngleRight";
import ArrowRight from "../assets/svgs/ArrowRight";
import Slider from "../sections/Slider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PixelCard from "../components/animations/PixelCard";

const CapabilityPage = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [lettersRef, setlettersRef] = useArrayRef<HTMLSpanElement>();
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const capabilities = [
    {
      id: "1",
      title: "Enterprise-Level Application Development",
      description:
        "Harness the power of advanced, AI-driven enterprise applications crafted with cutting-edge technology. Our solutions are scalable, secure, and designed to foster competitive business advantages.",
    },
    {
      id: "2",
      title: "Cross-Platform Mobile Application Development",
      description:
        "Engage users seamlessly across devices with high-performance, cross-platform mobile applications. Security-rich, cloud-powered apps ensuring smooth experiences tailored to users' needs.",
    },
    {
      id: "3",
      title: "Rapid, Budget-Friendly High-Impact MVPs",
      description:
        "Accelerate your launch with lean, powerful MVPs designed for maximum reach and adaptability. Our agile teams build solutions that grow alongside your product’s evolution.",
    },
    {
      id: "4",
      title: "Strategic Consultation & Team Augmentation",
      description:
        "Empower your project with expert guidance and specialized talent. Our advisory services provide strategic insights, streamline processes, and drive your product’s success.",
    },
  ];

  const items = [
    {
      icon: "🚀",
      title: "Expertise & Experience",
      description:
        "With [X] years of industry experience, our team of certified professionals excels in delivering cutting-edge IT solutions across diverse sectors.",
    },
    {
      icon: "🔒",
      title: "Robust Security & Compliance",
      description:
        "We prfioritize data protection, cybersecurity, and regulatory compliance, ensuring your business stays secure from evolving threats.",
    },
    {
      icon: "⚙️",
      title: "Customised IT Solutions",
      description:
        "We don’t believe in one-size-fits-all. Our tailored IT strategies align with your unique business goals, enhancing efficiency and productivity.",
    },
    {
      icon: "💡",
      title: "Innovative Technology Stack",
      description:
        "From AI, cloud computing, and DevOps to IoT and blockchain, we harness the latest technologies to drive digital transformation.",
    },
    {
      icon: "⌛",
      title: "24/7 Support & Reliability",
      description:
        "Our dedicated support team is available round the clock, ensuring minimal downtime and maximum operational efficiency.",
    },
    {
      icon: "🤝",
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We believe in transparent communication, agile methodologies, and long-term partnerships that drive growth.",
    },
  ];

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
    "At Aventure, we don’t just provide IT solutions—we deliver innovation, security, and scalability tailored to your business needs. Here’s why businesses trust us,";

  useEffect(() => {
    if (!triggerRef.current) return;

    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 93%",
        end: "bottom 85%",
      },
      color: "#000000",
      duration: 1,
      stagger: 1,
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <>
      {/* 1st sec */}
      <section className="relative w-full h-screen flex items-center bg-white overflow-hidden">
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal"
          borderColor="#F0F0F0"
          hoverFillColor="#F1F1F1"
        />

        <div className="absolute z-10 text-black text-left p-2 md:p-10 w-full flex items-center justify-center">
          <div className="md:max-w-6xl w-full">
            <p className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extralight leading-normal text-end ">
              We provide innovative, tailored IT
            </p>
            <p className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extralight leading-normal">
              solutions to enhance efficiency, security, and
            </p>
            <p className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extralight leading-normal">
              growth.
            </p>
          </div>
        </div>

        {/* Positioned RoundImage at bottom-left */}
        <div className="absolute bottom-20 md:bottom-10 right-2 lg:right-0  ">
          <button className="flex items-center gap-2 border border-gray-400 rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-100 transition">
            <span>Book a Meeting</span>
            <ArrowAngleRight />
          </button>
        </div>
      </section>

      {/* 2nd sec capability */}
      <section className="w-full bg-white relative">
        <div className="w-full mx-auto">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="flex flex-col lg:flex-row items-center justify-between hover:bg-black hover:text-white p-10 md:h-[411px]"
              onMouseEnter={() => setHoveredId(capability.id)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* ID Section */}
              <div className="w-1/3 text-5xl relative hidden lg:block">
                {capability.id}-
                {hoveredId === capability.id && (
                  <div
                    className="absolute right-0 bottom-0 top-20"
                    style={{
                      top: cursorPos.y - 310,
                      left: cursorPos.x - 50,
                    }}
                  >
                    <button className="bg-[#73BA0D] text-white  px-5 py-2 rounded-full text-sm flex items-center gap-2 transition duration-300 z-10 whitespace-nowrap">
                      View Portfolio
                      <ArrowRight />
                    </button>
                  </div>
                )}
              </div>

              <div className="w-full lg:w-1/4 text-4xl md:text-5xl font-medium hover:text-white">
                {capability.title}
              </div>

              <div className="w-full lg:w-1/4  font-extralight text-base hover:text-white">
                {capability.description}
              </div>

              <div className=" block lg:hidden mt-4 w-full">
                <div className="flex justify-start">
                  <button className="bg-[#73BA0D] text-white  px-5 py-2 rounded-full text-sm flex items-center  gap-2 transition duration-300 z-10">
                    View Portfolio
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* text */}
      <section className="w-full bg-white px-4 py-5 lg:h-[591px] flex items-center justify-start">
        <div className=" items-center">
          <p className="text-gray-500 text-base">WHY WE</p>
          <div className="w-full md:max-w-5xl mt-2 pl-5">
            {/* old text without animation */}
            {/* <p className="text-4xl lg:text-6xl pl-4">
              At aventure, we don’t just provide IT <br /> solutions—we deliver
              innovation, security, <br /> and scalability tailored to your
              business <br />
              needs. Here’s why businesses trust us,
            </p>  */}

            <div ref={triggerRef}>
              {text.split("").map((letter, index) => (
                <span
                  className="text-4xl md:text-6xl leading-12 md:leading-20  text-white drop-shadow-lg"
                  key={`${letter}-${index}`}
                  ref={setlettersRef}
                >
                  {letter}
                </span>
              ))} 
            </div>
          </div>
        </div>
      </section>

      {/* grid */}
      <section className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6">
          {items.map((item, index) => (
            <PixelCard variant="gray" key={index}>
              <div key={index} className="absolute">
                <div className="text-start px-20">
                  <div className="text-sm mb-5">{item.icon}</div>
                  <h3 className="text-4xl font-bold mb-5">{item.title}</h3>
                  <p className="text-gray-600 text-xl">{item.description}</p>
                </div>
              </div>
            </PixelCard>
          ))}
        </div>
      </section>

      <section>
        <Slider />
      </section>
    </>
  );
};

export default CapabilityPage;
