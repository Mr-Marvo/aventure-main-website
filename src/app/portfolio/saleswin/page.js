import React from "react";
import Squares from "../../components/animations/Squares";
import Image from "next/image";
import Slider from "../../sections/Slider";


const Project2 = () => {
  const demo2Data = {
    hero: {
      title: "Saleswin",
      description:
      "Saleswin is a streamlined CRM built for small and mid-sized businesses, offering essential sales tools to boost efficiency and cut operational costs."
    },

    viewImage: {
      images: ["/saleswin1.png"],
    },
    about: {
      description:
      " Saleswin is a value-focused CRM tailored to meet the essential needs of small and medium sized businesses. It offers core sales tools like contact management, lead tracking, and reporting — all packaged into a streamlined, cost-effective platform that maximizes efficiency and minimizes costs.",
      images: ["/saleswin2.png", "/saleswin3.png", "/saleswin4.png"],
    },

    challenge: {
      description:
        "Many businesses were using bloated or overpriced CRM systems that overwhelmed users with unnecessary features. Others were stuck in manual tracking processes that slowed down their sales cycle and limited their ability to scale. ",
      images: ["/saleswin5.png"],
    },
    sollution: {
      description:
        "We developed Saleswin to be a focused, results-driven CRM that helps businesses stay organized and close deals faster. With an easy-to-navigate interface and essential tools for sales tracking and customer engagement, Saleswin has become the smart choice for growing businesses looking to boost sales without blowing their budgets. ",
      images: ["/saleswin6.png"],
    },
  };

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
          <p className="text-lg md:text-3xl lg:text-5xl xl:text-6xl font-extralight leading-normal">
            {demo2Data?.hero.description}
          </p>
          <div className="hidden md:block w-[70%]"></div>
        </div>
      </div>
    </section>

    {/* section 2 */}
    <div className="w-full min-h-[60vh] md:h-screen flex justify-center">
      <div className="relative w-full">
        <Image
          src={demo2Data?.viewImage.images[0]}
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
          {demo2Data?.about.description}
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
        <h2 className="text-lg font-semibold mb-5 md:mb-10">The Challenge</h2>
        <h2 className="text-xl md:text-2xl font-normal leading-relaxed">
          {demo2Data?.challenge.description}
        </h2>
      </div>
    </div>

    <div className="w-full min-h-[50vh] md:h-screen flex py-5 px-5 md:px-10 justify-center">
      <div className="relative w-full">
        <Image
          src={demo2Data?.about.images[0]}
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
          src={demo2Data?.challenge.images[0]}
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
          src={demo2Data?.sollution.images[0]}
          alt="Tech Image"
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <div className="w-full md:w-1/3 text-left mt-10 md:mt-0">
        <h2 className="text-xl md:text-xl xl:text-2xl font-semibold mb-5 md:mb-9">
          The Sollution
        </h2>
        <h2 className="text-lg md:text-xl xl:text-2xl font-normal leading-8 lg:leading-12">
          {demo2Data?.sollution.description}
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

export default Project2;
