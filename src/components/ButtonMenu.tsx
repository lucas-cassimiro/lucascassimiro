"use client";

import Image from "next/image";
import React, { useState } from "react";

import menuImg from "../assets/menu.svg";

export default function ButtonMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      const triggerScrollPosition = 200;

      if (scrollPosition >= triggerScrollPosition) {
        closeSidebar();
      }
    });
  }

  function closeSidebar() {
    setMenuOpen(false);
  }

  return (
    <aside
      className={`${
        menuOpen ? "w-52" : ""
      } py-6 flex flex-col items-center h-screen w-20 overflow-hidden bg-[#4B0082] transition-all duration-700 ease-in-out fixed z-20 md:left-0 md:right-0 md:bottom-0 md:w-full md:h-20 md:overflow-y-auto p-0`}
    >
      <button
        className="bg-none border-none md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src={menuImg} alt="Ícone de menu" />
      </button>

      {children}
    </aside>
  );
}
