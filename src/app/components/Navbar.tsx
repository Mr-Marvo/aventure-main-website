"use client";

import { usePathname } from "next/navigation";
import HomeNavbar from "./HomeNavbar";
import MainNavbar from "./MainNavbar";

const Navbar = () => {
  const pathname = usePathname();

  return pathname === "/" ? <HomeNavbar /> : <MainNavbar />;
};

export default Navbar;
