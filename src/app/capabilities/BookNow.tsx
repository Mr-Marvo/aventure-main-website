"use client";
import React, { useEffect } from "react";
import ArrowAngleRight from "../assets/svgs/ArrowAngleRight";

// Extend the window interface for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const BookNow: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/aventureitsolution/30min",
      });
    } else {
      console.warn("Calendly is not loaded yet.");
    }
  };

  return (
    <button
      onClick={openCalendly}
      className="flex items-center gap-2 border border-gray-400 rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-100 transition"
    >
      <span>Book a Meeting</span>
      <ArrowAngleRight />
    </button>
  );
};

export default BookNow;
