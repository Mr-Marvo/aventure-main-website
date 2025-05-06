import React from "react";
import Squares from "../../components/animations/Squares";
import Image from "next/image";
import Slider from "../../sections/Slider";


const Project = () => {
  const demo1Data = {
    hero: {
      title: "KPI Score",
      description:
        "KPI Score boosts employee growth and success by aligning goals with business strategy, streamlining HR tasks through smart automation and real-time analytics.",
    },

    viewImage: {
      images: ["/kpiImg1.png"],
    },

    about: {
      description:
        " KPI Score is a powerful performance management platform created to inspire employee growth and drive measurable success across organizations. It offers a modern approach to performance tracking by aligning employee goals with strategic business objectives, while simplifying HR workflows through smart automation and real-time analytics. ",
      images: ["/kpiImg2.png", "/kpiImg3.png", "/kpiImg4.png"],
    },

    challenge: {
      description:
        "The client was struggling with manual performance review systems that lacked consistency and clarity. Performance data was scattered across spreadsheets and emails, making it difficult for HR teams to track progress, identify trends, and align goals across departments ",
      images: ["/kpiImg5.png"],
    },
    sollution: {
      description:
        " We developed KPI Score as a centralized, intuitive performance management platform that empowers businesses to monitor KPIs in real time. With features like goal setting, performance dashboards, and analytics tools, KPI Score now helps organizations foster a high-performance culture, improve transparency, and encourage employee accountability ",
      images: ["/kpiImg6.png"],
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
            {demo1Data?.hero.description}
          </p>
          <div className="hidden md:block w-[70%]"></div>
        </div>
      </div>
    </section>

    {/* section 2 */}
    <div className="w-full min-h-[60vh] md:h-screen flex justify-center">
      <div className="relative w-full">
        <Image
          src={demo1Data?.viewImage.images[0]}
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
          {demo1Data?.about.description}
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
          {demo1Data?.challenge.description}
        </h2>
      </div>
    </div>

    <div className="w-full min-h-[50vh] md:h-screen flex py-5 px-5 md:px-10 justify-center">
      <div className="relative w-full">
        <Image
          src={demo1Data?.about.images[0]}
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
          src={demo1Data?.challenge.images[0]}
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
          src={demo1Data?.sollution.images[0]}
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
          {demo1Data?.sollution.description}
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

export default Project;
