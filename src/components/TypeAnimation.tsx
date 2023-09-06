"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationn() {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        1000,
        "Next.JS Developer",
        1000,
        "React Developer",
        1000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
      className="text-end text-[4.5rem] 4xl:text-[3.5rem] text-white mobilinho:text-[2.5rem] mobilemax:text-[1.5rem]"
    />
  );
}
