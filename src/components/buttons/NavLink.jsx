"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      className={`${isActive ? "text-primary" : ""} font-medium`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
