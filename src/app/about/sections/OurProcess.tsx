"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PixelCard from "@/app/components/animations/PixelCard";

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
      <div ref={triggerRef} className="hidden md:block">
        <div
          ref={sectionRef}
          className="w-[1500] md:w-[2400px] h-[400px] md:h-[600px] py-2 md:py-20 flex flex-row relative"
        >
          {/** Section 1 */}
          <PixelCard variant="gray">
            <div className="absolute">
              <div className="h-[300px] lg:h-[500px] w-[400px] lg:w-[600px] border border-[#F4F4F4] flex justify-center items-center px-8">
                <div className="">
                  <p className="text-gray-500 text-sm md:text-[20px] mb-5">
                    (01)
                  </p>
                  <h2 className="text-lg md:text-[40px] font-bold mb-5">
                    STRUCTURE
                  </h2>
                  <p className="text-gray-700 text-sm md:text-[20px] mt-2">
                    Designing intuitive user journeys and seamless interactions,
                    grounded in research and user insights.
                  </p>
                </div>
              </div>
            </div>
          </PixelCard>

          {/** Section 2 */}
          <PixelCard variant="gray">
            <div className="absolute">
              <div className="h-[300px] lg:h-[500px] w-[400px] lg:w-[600px] border border-[#F4F4F4] flex justify-center items-center px-8">
                <div className="">
                  <p className="text-gray-500 text-sm md:text-[20px] mb-5">
                    (02)
                  </p>
                  <h2 className="text-lg md:text-[40px] font-bold mb-5">
                    STRATEGY
                  </h2>
                  <p className="text-gray-700 text-sm md:text-[20px] mt-2">
                    Crafting purposeful design strategies that align with
                    business goals and enhance user experiences.
                  </p>
                </div>
              </div>
            </div>
          </PixelCard>

          {/** Section 3 */}
          <PixelCard variant="gray">
            <div className="absolute">
              <div className="h-[300px] lg:h-[500px] w-[400px] lg:w-[600px] border border-[#F4F4F4]  flex justify-center items-center px-8">
                <div className="">
                  <p className="text-gray-500 text-sm md:text-[20px] mb-5">
                    (03)
                  </p>
                  <h2 className="text-lg md:text-[40px] font-bold mb-5">
                    DESIGN
                  </h2>
                  <p className="text-gray-700 text-sm md:text-[20px] mt-2">
                    Translating ideas into visually appealing and functional
                    interfaces that users love.
                  </p>
                </div>
              </div>
            </div>
          </PixelCard>

          {/** Section 4 */}
          <PixelCard variant="gray">
            <div className="absolute">
              <div className="h-[300px] lg:h-[500px] w-[400px] lg:w-[600px] border border-[#F4F4F4]  flex justify-center items-center px-8">
                <div className="">
                  <p className="text-gray-500 text-sm md:text-[20px] mb-5">
                    (04)
                  </p>
                  <h2 className="text-lg md:text-[40px] font-bold mb-5">
                    DEVELOPMENT
                  </h2>
                  <p className="text-gray-700 text-sm md:text-[20px] mt-2">
                    Implementing scalable and high-performance solutions using
                    the latest technologies.
                  </p>
                </div>
              </div>
            </div>
          </PixelCard>
        </div>
      </div>

      {/** Mobile Section 1 */}
      <div className="md:hidden mt-20 md:mt-0">
        <div className="w-full h-[300px] border border-[#F4F4F4] flex flex-col justify-center items-center py-5 px-5">
          <p className="text-gray-500 text-lg mb-5">(01)</p>
          <h2 className="text-xl font-bold mb-5">STRUCTURE</h2>
          <p className="text-gray-700 text-md text-center">
            Designing intuitive user journeys and seamless interactions,
            grounded in research and user insights.
          </p>
        </div>
      </div>

      {/** Mobile Section 2 */}
      <div className="md:hidden">
        <div className="w-full h-[300px] border border-[#F4F4F4] flex flex-col justify-center items-center py-5 px-5">
          <p className="text-gray-500 text-lg mb-5">(02)</p>
          <h2 className="text-xl font-bold mb-5">STRATEGY</h2>
          <p className="text-gray-700 text-md text-center">
            Crafting purposeful design strategies that align with business goals
            and enhance user experiences.
          </p>
        </div>
      </div>

      {/** Mobile Section 3 */}
      <div className="md:hidden">
        <div className="w-full h-[300px] border border-[#F4F4F4] flex flex-col justify-center items-center py-5 px-5">
          <p className="text-gray-500 text-lg mb-5">(03)</p>
          <h2 className="text-xl font-bold mb-5">DESIGN</h2>
          <p className="text-gray-700 text-md text-center">
            Translating ideas into visually appealing and functional interfaces
            that users love.
          </p>
        </div>
      </div>

      {/** Mobile Section 4 */}
      <div className="md:hidden">
        <div className="w-full h-[300px] border border-[#F4F4F4] flex flex-col justify-center items-center py-5 px-5">
          <p className="text-gray-500 text-lg mb-5">(04)</p>
          <h2 className="text-xl font-bold mb-5">DEVELOPMENT</h2>
          <p className="text-gray-700 text-md text-center">
            Implementing scalable and high-performance solutions using the
            latest technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
