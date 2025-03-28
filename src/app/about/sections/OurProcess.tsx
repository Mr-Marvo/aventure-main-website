"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function OurProcess() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-850px", // Stops at the last section
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=1800", // Stop scrolling after 4 sections
          scrub: 0.6,
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
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="w-[2400px] h-[600px] py-20 flex flex-row relative"
        >
          {/** Section 1 */}

          <div className="h-[500px] w-[600px] border border-[#F4F4F4] flex justify-center items-center px-8">
            <div className="max-w-md">
              <p className="text-gray-500 text-lg mb-5">(01)</p>
              <h2 className="text-4xl font-bold mb-5">STRUCTURE</h2>
              <p className="text-gray-700 text-lg mt-2">
                Designing intuitive user journeys and seamless interactions,
                grounded in research and user insights.
              </p>
            </div>
          </div>

          {/** Section 2 */}
          <div className="h-[500px] w-[600px] border border-[#F4F4F4]  flex justify-center items-center px-8">
            <div className="max-w-md">
              <p className="text-gray-500 text-lg mb-5">(02)</p>
              <h2 className="text-4xl font-bold mb-5">STRATEGY</h2>
              <p className="text-gray-700 text-lg mt-2">
                Crafting purposeful design strategies that align with business
                goals and enhance user experiences.
              </p>
            </div>
          </div>

          {/** Section 3 */}
          <div className="h-[500px] w-[600px] border border-[#F4F4F4]  flex justify-center items-center px-8">
            <div className="max-w-md">
              <p className="text-gray-500 text-lg mb-5">(03)</p>
              <h2 className="text-4xl font-bold mb-5">DESIGN</h2>
              <p className="text-gray-700 text-lg mt-2">
                Translating ideas into visually appealing and functional
                interfaces that users love.
              </p>
            </div>
          </div>

          {/** Section 4 */}
          <div className="h-[500px] w-[600px] border border-[#F4F4F4]  flex justify-center items-center px-8">
            <div className="max-w-md">
              <p className="text-gray-500 text-lg mb-5">(04)</p>
              <h2 className="text-4xl font-bold mb-5">DEVELOPMENT</h2>
              <p className="text-gray-700 text-lg mt-2">
                Implementing scalable and high-performance solutions using the
                latest technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
