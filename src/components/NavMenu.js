"use client";

import Link from "next/link";
import React from "react";
import LoginActionInfo from "./auth/LoginActionInfo";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 text-sm text-gray-500">
      <li className={`py-2 ${pathname === "/" && "active"}`}>
        <Link href="/">Home</Link>
      </li>

      <li className={`py-2 ${pathname === "/recipes" && "active"}`}>
        <Link href="/recipes">Recipes</Link>
      </li>

      <li className={`py-2 ${pathname === "/about-us" && "active"}`}>
        <Link href="/about-us">About us</Link>
      </li>

      <LoginActionInfo />
    </ul>
  );
};

export default NavMenu;
