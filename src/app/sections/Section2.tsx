"use client";

import Image from "next/image";
import RoundImage from "../assets/Section2/RoundImage";

const Section2 = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center pt-10 md:pt-20 px-4 md:pl-20 text-black"
    >
      {/* Background Image or Video */}
      <div className="absolute inset-0 top-20 md:top-44 left-0 md:left-[600px]">
        <div className="relative w-full h-full">
          <Image
            src="/Glass.png"
            width={900}
            height={500}
            alt="Glass background"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] xl:text-[110px] font-normal mb-6 md:mb-8">
          Empowering enterprises
          <br />
          with cutting-edge
          <br />
          solutions
        </h1>

        {/* Subheading */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-44 pt-6 md:pt-12">
          {/* Round Image */}
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
            <RoundImage />
          </div>

          {/* Text */}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-right text-gray-400 mb-6 md:mb-12 px-4 md:px-11">
            AI-driven innovation, and transformative technology to enhance
            efficiency, drive growth, optimise operations, and unlock new
            opportunities in the ever-evolving digital landscape.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Section2;
