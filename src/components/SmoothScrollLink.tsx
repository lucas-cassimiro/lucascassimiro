"use client";

import { ReactNode, MouseEvent } from "react";

interface SmoothScrollLinkProps {
  to: string;
  children: ReactNode;
}

export default function SmoothScroolLink({
  to,
  children,
}: SmoothScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.querySelector(to);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return <a href={to} onClick={handleClick}>{children}</a>
}
