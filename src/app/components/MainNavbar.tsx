"use client";
import React, { useState } from "react";
import AventureLogo from "../assets/AventureLogo";
import Link from "next/link";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative p-5 px-10 items-center flex justify-between z-50">
      {/* <h1 className="text-white text-[80px]">Aventure</h1> */}
      <Link href="/">
        {" "}
        <AventureLogo />{" "}
      </Link>
      <button
        className="w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-14 right-5 w-40 bg-white shadow-lg rounded-lg">
          <ul className="py-2 text-black">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              <Link href="/">Services</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
