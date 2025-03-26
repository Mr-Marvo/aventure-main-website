import React from "react";
import Squares from "../components/animations/Squares";

const ProjectPreview = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center bg-white overflow-hidden">
      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal"
        borderColor="#F4F4F4"
        hoverFillColor="#F2F2F2"
      />
      <div className="absolute z-10 text-black text-left p-10">
        <div className="flex justify-between w-full items-center">
          <p className="text-2xl md:text-5xl font-extralight leading-14">
            Modern saas products and Mobile/web application design effective
            solutions that deliver results.
          </p>
          <div className="w-[70%]"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;
