import React from "react";
import Squares from "../components/animations/Squares";
import Image from "next/image";
import Slider from "../sections/Slider";

const ProjectPreview = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* hero */}
      <section className="relative w-full h-[80vh] flex items-center bg-white overflow-hidden">
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal"
          borderColor="#F0F0F0"
          hoverFillColor="#F1F1F1"
        />
        <div className="absolute z-10 text-black text-left p-5 md:p-10">
          <div className="flex flex-col md:flex-row justify-between w-full items-center">
            <p className="text-lg md:text-3xl lg:text-5xl font-extralight leading-normal">
              Modern saas products and Mobile/web application design effective
              solutions that deliver results.
            </p>
            <div className="hidden md:block w-[70%]"></div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <div className="w-full min-h-[60vh] md:h-screen flex justify-center">
        <div className="relative w-full">
          <Image
            src="/image 8.png"
            alt="Tech Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col md:flex-row justify-between text-left py-20 px-5 md:px-10">
        <div className="w-full">
          <h2 className="text-lg md:text-xl mb-5 md:mb-10">PROJECT OVERVIEW</h2>
          <h2 className="text-base md:text-xl font-normal leading-relaxed">
            Frontier Incubators is a capacity building program for incubators
            and accelerators with an impact focus working in South Asia,
            Southeast Asia, and the Pacific. Your Creative is working alongside
            global innovation consultancy SecondMuse and International
            Development not-for-profit YGap to create the digital component of
            the program.
          </h2>
        </div>

        <div className="w-full flex justify-end text-right mt-10 md:mt-28">
          <h2 className="text-lg md:text-xl">
            UI/UX <br /> Product Design <br /> Web Development
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-start text-left py-10 px-5 md:px-10">
        <div className="w-full">
          <h2 className="text-lg font-semibold mb-5 md:mb-10">
            Frontier Incubators Toolkit
          </h2>
          <h2 className="text-2xl md:text-4xl font-normal leading-relaxed">
            Global user groups rapidly <br /> prototyping designs and optimising{" "}
            <br /> as per participants&#39; feedback
          </h2>
        </div>
      </div>

      <div className="w-full min-h-[50vh] md:h-screen flex py-5 px-5 md:px-10 justify-center">
        <div className="relative w-full">
          <Image
            src="/image 14.png"
            alt="Tech Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="w-full min-h-[50vh] md:h-screen flex py-5 px-5 md:px-10 justify-center">
        <div className="relative w-full">
          <Image
            src="/image 11.png"
            alt="Tech Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between h-auto md:h-[600px] gap-5 text-left py-5 px-5 md:px-10">
        <div className="relative w-full md:w-2/3 h-[300px] md:h-full">
          <Image
            src="/image 15.png"
            alt="Tech Image"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/3 text-left mt-10 md:mt-0">
          <h2 className="text-xl md:text-xl xl:text-2xl font-semibold mb-5 md:mb-9">
            Frontier Incubators Toolkit
          </h2>
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-normal leading-12 lg:leading-18">
            Global user <br /> groups rapidly <br /> prototyping <br /> designs
            and <br /> optimising as <br /> per participants&#39; <br />
            feedback
          </h2>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className=" w-full">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
