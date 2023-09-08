"use client";

import { useState, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="flex relative xl:block"
    >
      {children}
      {isVisible && (
        <div className="absolute translate-x-[-50%] bg-black p-3 z-10 min-w-[20rem] rounded-[0.25rem] top-[calc(-100%-50px)] tablet:hidden">
          <span className="text-white">{text}</span>
        </div>
      )}
    </div>
  );
}
