import React from "react";

const ArrowWithCircle = ({ ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="79" height="79" rx="39.5" stroke="#010202" />
      <path
        d="M30.5718 49.4282L49.428 30.572M49.428 30.572V44.7142M49.428 30.572H35.2859"
        stroke="#010202"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowWithCircle;
