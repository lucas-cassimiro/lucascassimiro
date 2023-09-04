"use client";

import Image from "next/image";
import React, { useState } from "react";

import menuImg from "../assets/menu.svg";

export default function ButtonMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside
      className={`${
        menuOpen ? "w-52" : ""
      } py-6 flex flex-col items-center h-screen w-20 overflow-hidden bg-[#4B0082] transition-all duration-700 ease-in-out fixed z-20 `}
    >
      <button
        className="bg-none border-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src={menuImg} alt="Ícone de menu" />
      </button>

      {children}
    </aside>
  );
}
