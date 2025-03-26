"use client";

import { usePathname } from "next/navigation";
import HomeNavbar from "./HomeNavbar";
import MainNavbar from "./MainNavbar";
import MainNavbar2 from "./MainNavbar2";

const Navbar = () => {
  const pathname = usePathname();

  return pathname === "/" ? (
    <HomeNavbar />
  ) : pathname === "/portfolio" ? (
    <MainNavbar />
  ) : (
    <MainNavbar2 />
  );
};

export default Navbar;
