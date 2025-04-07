import React from "react";

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ color, ...props }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 17H40M8 31H40"
        stroke={color || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
