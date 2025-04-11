"use client";

import React, { useEffect, useState } from "react";

// Extend the window interface for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  label?: string;
  url: string;
  primaryIcon: React.ReactNode;
  hoverIcon: React.ReactNode;
  className?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  label = "Let's Talk",
  url,
  primaryIcon,
  hoverIcon,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
      window.Calendly.initPopupWidget({ url });
    } else {
      console.warn("Calendly is not loaded yet.");
    }
  };

  return (
    <button
      onClick={openCalendly}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center justify-center whitespace-nowrap text-sm md:text-lg py-0.3 md:py-2 px-2 md:px-4 rounded-full transition ${className}`}
    >
      {label}
      <span className="">{isHovered ? hoverIcon : primaryIcon}</span>
    </button>
  );
};

export default CalendlyButton;
