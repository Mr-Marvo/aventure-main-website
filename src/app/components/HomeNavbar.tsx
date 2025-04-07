"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "../assets/svgs/MenuIcon";

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative p-5 flex justify-end z-50 shadow-md">
      {/* Mobile Menu Button */}
      <button
        className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white hover:bg-white/70 rounded-full text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : <MenuIcon />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-14 w-48 bg-white shadow-lg rounded-lg">
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

export default HomeNavbar;
