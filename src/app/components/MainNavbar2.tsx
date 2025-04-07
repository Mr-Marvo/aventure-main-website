"use client";
import React, { useState } from "react";
import Link from "next/link";
import AventureLogoWhite from "../assets/AventureLogoWhite";
import MenuIcon from "../assets/svgs/MenuIcon";

const MainNavbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative p-5 px-8 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <AventureLogoWhite />
      </Link>

      <button
        className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-black hover:bg-black/70 rounded-full text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : <MenuIcon color="white" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 right-5 w-48 bg-white shadow-lg rounded-lg">
          <ul className="py-2 text-black">
            <Link href="/portfolio" onClick={() => setIsOpen(false)}>
              <li className="px-4 py-3 font-semibold hover:bg-gray-200">
                Portfolio
              </li>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <li className="px-4 py-3 font-semibold hover:bg-gray-200">
                About
              </li>
            </Link>
            <Link href="/capabilities" onClick={() => setIsOpen(false)}>
              <li className="px-4 py-3 font-semibold hover:bg-gray-200">
                Services
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar2;
