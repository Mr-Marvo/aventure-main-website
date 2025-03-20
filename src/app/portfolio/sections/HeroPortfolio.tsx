import Squares from "@/app/components/Squares";
import React from "react";

const HeroPortfolio: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center bg-black overflow-hidden">
      <Squares
        speed={0.3}
        squareSize={40}
        direction="diagonal"
        borderColor="#333333"
        hoverFillColor="#222"
      />
      <div className="absolute z-10 text-white text-left p-10">
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

export default HeroPortfolio;
