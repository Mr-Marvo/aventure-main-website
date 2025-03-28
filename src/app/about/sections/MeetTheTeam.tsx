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
    style: "top-0 left-130",
  },
  {
    name: "Oleksandr Strukov",
    role: "UI/UX Lead",
    image: "/Photo by Hadi Yazdi Aznaveh.png",
    style: "top-20 right-1/4",
  },
  {
    name: "Oleksandr Strukov",
    role: "QA Lead",
    image: "/Photo by Vasile Stancu (1).png",
    style: "bottom-2/4 left-1/4",
  },
  {
    name: "Oleksandr Strukov",
    role: "Backend Dev.",
    image: "/Image Placeholder.png",
    style: "bottom-100 right-150",
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
    <div className="relative w-full h-[1000px] flex flex-col items-center justify-start">
      <div className="relative w-full h-[100vh]" ref={triggerRef}>
        {/* Fixed Section within the Section */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-white flex flex-col z-10 px-10 py-10 justify-start">
          <h2 className="text-lg text-gray-500 uppercase">Our Team</h2>
          <h1 className="text-5xl mt-2 text-left">
            Meet the people behind <br /> the magic
          </h1>
          <p className="text-gray-600 text-xl mt-4 pb-20 text-left">
            Together, our team combines expertise, creativity, and passion to
            deliver outstanding <br /> results for our clients.
          </p>
        </div>

        {/* Transparent Scrolling Section */}
        <div className="relative w-full h-[1000px] pb-96 z-50 mt-10 pt-56">
          <div
            ref={sectionRef}
            className="relative w-full h-[150vh] flex flex-col items-center"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`absolute ${member.style} flex flex-col items-center text-center`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-lg shadow-lg"
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
