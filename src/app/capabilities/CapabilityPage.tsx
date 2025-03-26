import React from "react";
import Squares from "../components/animations/Squares";

const CapabilityPage = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center bg-white overflow-hidden">
      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal"
        borderColor="#F4F4F4"
        hoverFillColor="#F2F2F2"
      />
      <div className="absolute z-10 text-black ">
        <div className="flex justify-center w-full items-center text-center bg-amber-200">
          <p className="text-2xl md:text-5xl font-extralight leading-14">
            <span className="text-center">We provide innovative, tailored IT </span>
            <br />
           <span className="text-left">solutions to enhance efficiency,
           security, and growth.</span> 
          </p>
          {/* <div className="w-[70%]"></div> */}
        </div>
      </div>
    </section>
  );
};

export default CapabilityPage;
