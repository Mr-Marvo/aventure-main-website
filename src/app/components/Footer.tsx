"use client";

import React from "react";
import AventureLogoBig from "../assets/AventureLogoBig";
import RotatingText from "./RotatingText";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-16 font-sans">
      <div className="mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-normal">
          We’re always on the lookout <br />
          for next
          <span className="text-[#73ba0d]">
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
              mainClassName="text-[#73ba0d] inline-block ml-2"
              // staggerFrom="last"
              // initial={{ y: "100%" }}
              // animate={{ y: 0 }}
              // exit={{ y: "-120%" }}
              // staggerDuration={0.025}
              // splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />{" "}
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-start gap-9 items-center mt-6 border-t border-gray-700 pt-6">
          <button className="border border-white py-2 px-5 rounded-full hover:bg-white hover:text-black transition">
            Let&apos;s Talk ↗
          </button>
          <p className="text-gray-400">
            the impact you’d like to make and blow your business mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          <div>
            <h3 className="text-sm text-gray-400 uppercase">
              Join our socials
            </h3>
            <ul className="mt-3 space-y-2">
              <li className="hover:text-[#73ba0d] cursor-pointer">LinkedIn</li>
              <li className="hover:text-[#73ba0d] cursor-pointer">Facebook</li>
              <li className="hover:text-[#73ba0d] cursor-pointer">Instagram</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-gray-400 uppercase">
              Monday–Friday, 9AM–6PM
            </h3>
            <p className="mt-3 font-bold text-lg">info@aventure.com</p>
            <p className="mt-2 text-lg">+9411 234 5678</p>
            <p className="mt-1 text-sm text-gray-400">
              3RD FLOOR, SOMANANDA RD, HORANA, SRI LANKA
            </p>
          </div>
        </div>

        <div className="mt-5 flex justify-center md:justify-start sm:mt-10 md:mt-16 lg:mt-20">
          <AventureLogoBig className="w-[250px] sm:w-[400px] md:w-[650px] lg:w-[900px] xl:w-[1280px]" />
        </div>
      </div>

      <div className="mt-16 text-gray-500 text-sm border-t border-gray-700 pt-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mt-2">
          <span>
            <p>AVENTURE © 2025</p>
          </span>
          <span className="cursor-pointer hover:text-white">
            PRIVACY POLICY
          </span>
          <span className="cursor-pointer hover:text-white">
            COOKIES POLICY
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
