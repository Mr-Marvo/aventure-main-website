"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const teamMembers = [
  {
    name: "Oleksandr Strukov",
    role: "CEO",
    image: "/Photo by Vasile Stancu.png",
    style:
      "md:top-0 md:left-50 lg:top-0 lg:left-70 xl:top-0 xl:left-110 top-[10%] left-[5%]",
  },
  {
    name: "Oleksandr Strukov",
    role: "UI/UX Lead",
    image: "/Photo by Hadi Yazdi Aznaveh.png",
    style: "md:top-40 md:right-30 lg:top-20 lg:right-1/4 top-[30%] right-[5%]",
  },
  {
    name: "Oleksandr Strukov",
    role: "QA Lead",
    image: "/Photo by Vasile Stancu (1).png",
    style:
      "xl:bottom-2/4 xl:left-80 xl:top-120 lg:top-80 lg:left-50 md:top-60 md:left-30 bottom-[30%] left-[5%]",
  },
  {
    name: "Oleksandr Strukov",
    role: "Backend Dev.",
    image: "/Image Placeholder.png",
    style:
      "xl:bottom-100 xl:right-130 xl:top-160 lg:top-120 lg:right-80 md:top-100 md:right-60 bottom-[10%] right-[5%]",
  },
];

const MeetTheTeam = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateY: 0 },
      {
        translateY: "-100vh",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 0 / 6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="relative w-full h-[1000px] md:h-[1250px] flex flex-col items-center justify-start">
      <div className="relative w-full h-[100vh]" ref={triggerRef}>
        {/* Fixed Section within the Section */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-white flex flex-col z-10 px-5 md:px-10 py-5 md:py-10 justify-start">
          <h2 className="text-sm md:text-lg text-gray-500 uppercase">
            Our Team
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[80px] md:leading-20 mt-2 text-left">
            Meet the people behind <br className="hidden sm:block" /> the magic
          </h1>
          <p className="text-gray-600 text-[24px] mt-4 pb-20 text-left">
            Together, our team combines expertise, creativity, and passion to
            deliver outstanding <br /> results for our clients.
          </p>
        </div>

        {/* Transparent Scrolling Section */}
        <div className="relative w-full h-[1000px] md:h-[1000px] pb-40 z-50 mt-10 pt-80 md:pt-96">
          <div
            ref={sectionRef}
            className="relative w-full h-[120vh] md:h-[150vh] flex flex-col items-center"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`absolute ${member.style} flex flex-col items-center text-center `}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="rounded-lg shadow-lg w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[200px] xl:h-[200px]"
                />
                <p className="font-semibold mt-2">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
