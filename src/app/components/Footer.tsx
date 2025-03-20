"use client";

import React from "react";
// import AventureLogoBig from "../assets/AventureLogoBig";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-16 font-sans">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold">
          let&apos;s discuss your <br />
          next <span className="text-green-500">→ success.</span>
        </h2>

        <div className="flex justify-start gap-9 items-center mt-6 border-t border-gray-700 pt-6">
          <button className="border border-white py-2 px-5 rounded-full hover:bg-white hover:text-black transition">
            Let&apos;s Talk ↗
          </button>
          <p className="text-gray-400 mt-4">
            the impact you’d like to make and blow your business mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          <div>
            <h3 className="text-sm text-gray-400 uppercase">
              Join our socials
            </h3>
            <ul className="mt-3 space-y-2">
              <li className="hover:text-green-500 cursor-pointer">LinkedIn</li>
              <li className="hover:text-green-500 cursor-pointer">Facebook</li>
              <li className="hover:text-green-500 cursor-pointer">Instagram</li>
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
        {/* <div className="mt-20">
          {" "}
          <AventureLogoBig />
        </div> */}
      </div>

      <div className="mt-16 text-gray-500 text-sm border-t border-gray-700 pt-4">
        <div className="flex justify-between items-end gap-4 mt-2">
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
