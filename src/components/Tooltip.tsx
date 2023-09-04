"use client";

import { useState, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="flex relative"
    >
      {children}
      {isVisible && (
        <div className="absolute translate-x-[-50%] bg-black p-3 z-10 min-w-[20rem] rounded-[0.25rem] top-[calc(-100%-50px)]">
          <span className="text-white">{text}</span>
        </div>
      )}
    </div>
  );
}
