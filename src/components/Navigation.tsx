"use client";

import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import SmoothScrollLink from "./SmoothScrollLink";
import { FaTools, FaUserAlt } from "react-icons/fa";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;

      const triggerScrollPosition = 200;

      if (scrollPosition >= triggerScrollPosition) {
        closeSidebar();
      }
    });

    function closeSidebar() {
      setMenuOpen(false);
    }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="hidden 2xl:flex text-[#fff7df] z-50 opacity-100"
      >
        <FiMenu size="2rem" />
      </button>
      <div
        className={`gap-9 3xl:flex ${
          menuOpen
            ? "flex flex-col w-[250px] h-screen top-0 right-0 fixed bg-[#4B0082] z-[9999] opacity-[100] p-6"
            : "hidden"
        }`}
      >
        <button
          className={`${menuOpen ? "text-white self-end" : "hidden"}`}
          onClick={toggleMenu}
        >
          <AiOutlineClose size="2rem" />
        </button>
        <div
          className={`${
            menuOpen
              ? "flex flex-col my-auto items-center h-40 justify-between"
              : "flex gap-10"
          }`}
        >
          <SmoothScrollLink to="#section1">
            <div className="flex gap-2 text-[#fff7df]">
              <FaUserAlt size="1.5rem" />
              <p onClick={() => setMenuOpen(false)}>Resume</p>
            </div>
          </SmoothScrollLink>
          <SmoothScrollLink to="#section2">
            <div className="flex gap-2 text-[#fff7df]">
              <BsFillFileEarmarkSpreadsheetFill size="1.5rem" />
              <p onClick={() => setMenuOpen(false)}>Works</p>
            </div>
          </SmoothScrollLink>
          <SmoothScrollLink to="#section3">
            <div className="flex gap-2 text-[#fff7df]">
              <FaTools size="1.5rem" />
              <p onClick={() => setMenuOpen(false)}>Skills</p>
            </div>
          </SmoothScrollLink>
        </div>
      </div>
    </>
  );
}
