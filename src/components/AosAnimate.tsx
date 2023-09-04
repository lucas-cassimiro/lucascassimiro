"use client";

import Aos from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

export default function AosAnimate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>{children}</>;
}
