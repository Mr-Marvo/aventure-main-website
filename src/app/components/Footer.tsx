"use client";

import React, { useState } from "react";
// import AventureLogoBig from "../assets/AventureLogoBig";
import RotatingText from "./animations/RotatingText";
import LinkedInIcon from "../assets/svgs/LinkedInIcon";
import FacebookIcon from "../assets/svgs/FacebookIcon";
import InstaIcon from "../assets/svgs/InstaIcon";
import ArrowRight from "../assets/svgs/ArrowRight";
import ArrowAngleRightWhite from "../assets/svgs/ArrowAngleRightWhite";
import localFont from "next/font/local";

const baunkFont = localFont({
  src: "../font/Baunk.ttf",
});

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <footer className="bg-black text-white flex overflow-hidden py-16">
      <div className=" text-center md:text-left">
        <h2 className="text-4xl px-10 md:text-[50px] lg:text-[70px] xl:text-[120px] font-extralight">
          We’re always on the lookout <br />
          for next
          <span className="text-buttonGreen font-bold">
            {" "}
            →{" "}
            <RotatingText
              texts={[
                "success.",
                "project.",
                "idea.",
                "application.",
                "growth.",
              ]}
              mainClassName="text-buttonGreen inline-block ml-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />{" "}
          </span>
        </h2>

        <div className="flex flex-col px-10 md:flex-row justify-start gap-9 items-center mt-6 border-t border-gray-700 pt-6">
          <button
            className="flex items-center justify-center whitespace-nowrap text-lg border border-white py-2 px-4 rounded-full transition"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Let&apos;s Talk
            <span className="ml-2">
              {isHovered ? <ArrowRight /> : <ArrowAngleRightWhite />}
            </span>
          </button>
          <p className="text-gray-400 text-lg lg:text-2xl xl:text-[40px]">
            the impact you’d like to make and blow your business mind.
          </p>
        </div>

        <div className="grid grid-cols-1 px-10 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          <div>
            <h3 className="text-sm text-white font-bold uppercase">
              Join our socials
            </h3>

            <ul className="mt-3 space-y-2">
              <li className="flex items-center justify-center md:justify-start cursor-pointer group">
                <LinkedInIcon className="w-0 opacity-0 transform -translate-x-4 group-hover:w-auto group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mr-2" />
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:ml-2">
                  LinkedIn
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start cursor-pointer group">
                <FacebookIcon className="w-0 opacity-0 transform -translate-x-4 group-hover:w-auto group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mr-2" />
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:ml-2">
                  Facebook
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start cursor-pointer group">
                <InstaIcon className="w-0 opacity-0 transform -translate-x-4 group-hover:w-auto group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mr-2" />
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:ml-2">
                  Instagram
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-bold uppercase">
              Monday–Friday, 9AM–6PM
            </h3>
            <p className=" font-bold text-2xl text-white md:text-[26px] lg:text-[36px]">
              info@aventure.com
            </p>
            <h3 className="mt-5 text-sm font-bold text-white uppercase">
              WE RESPOND WITHIN A FEW HOURS
            </h3>
            <p className="text-2xl font-bold md:text-[26px] text-white lg:text-[36px]">
              +9411 234 5678
            </p>
            <p className="mt-5 text-sm font-bold text-white">
              3RD FLOOR, SOMANANDA RD, HORANA, SRI LANKA
            </p>
          </div>
        </div>

        <div
          className={`flex mt-5 justify-center md:justify-start sm:mt-10 md:mt-16 lg:mt-20 text-fluid text-buttonGreen ${baunkFont.className}`}
        >
          <span>AV</span>
          <span className="text-white">ENTURE</span>
        </div>
        <div className="mt-16 px-10 text-gray-500 text-sm border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mt-2">
            <span>
              <p className="text-white font-bold">AVENTURE © 2025</p>
            </span>
            <span className="cursor-pointer text-white font-bold">
              PRIVACY POLICY
            </span>
            <span className="cursor-pointer text-white font-bold">
              COOKIES POLICY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
