"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationn() {
  return (
    <TypeAnimation
      sequence={[
        "Full-stack Developer",
        1000,
        "Backend Developer",
        1000,
        "Frontend Developer",
        1000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
      className="text-end text-[4.5rem] 4xl:text-[3.5rem] text-white mobilinho:text-[2.5rem] mobilemax:text-[1.5rem]"
    />
  );
}
