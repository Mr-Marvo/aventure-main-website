import React from "react";
import Squares from "../../components/animations/Squares";
import Image from "next/image";
import Slider from "../../sections/Slider";

const Project3 = () => {
  const demo3Data = {
    hero: {
      title: "Jobs Ninja",
      description:
        "Find trusted professionals or freelance opportunities—fast. Jobninja connects people with skilled talent for everything from quick fixes to big projects.",
    },

    viewImage: {
      images: ["/jobninjaImg1.png"],
    },
    about: {
      description:
        "Jobninja is an intuitive job marketplace that connects individuals with skilled professionals for everything from small fixes to major projects. Designed to be fast, reliable, and easy to use, the platform gives clients access to trusted workers, while empowering freelancers to showcase their skills and find consistent opportunities.",
      images: ["/jobninjaImg2.png", "/jobninjaImg3.png", "/jobninjaImg4.png"],
    },
    challenge: {
      description:
        "Clients often found it difficult to connect with dependable service providers quickly. Meanwhile, skilled professionals lacked a dedicated space to promote their services and build trust with potential clients. Most platforms were either too broad or lacked user-friendliness.",
      images: ["/jobninjaImg5.png"],
    },
    sollution: {
      description:
        "We created Jobninja as a job platform that eliminates barriers for both clients and service providers. The site features real-time chat, secure hiring processes, and a transparent review system to ensure trust and accountability. It now serves as a go-to solution for getting work done faster, smarter, and more securely",
      images: ["/jobninjaImg6.png"],
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
              {demo3Data?.hero.description}
            </p>
            <div className="hidden md:block w-[70%]"></div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <div className="w-full min-h-[60vh] md:h-screen flex justify-center">
        <div className="relative w-full">
          <Image
            src={demo3Data?.viewImage.images[0]}
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
            {demo3Data?.about.description}
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
            {demo3Data?.challenge.description}
          </h2>
        </div>
      </div>

      <div className="w-full min-h-[50vh] md:h-screen flex py-5 px-5 md:px-10 justify-center">
        <div className="relative w-full">
          <Image
            src={demo3Data?.about.images[0]}
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
            src={demo3Data?.challenge.images[0]}
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
            src={demo3Data?.sollution.images[0]}
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
            {demo3Data?.sollution.description}
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

export default Project3;
