"use client";

import React, { useState, useRef } from "react";
import { MdEmail } from "react-icons/md";

export default function EmailCopied() {
  const textRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyTextToClipboard = () => {
    const text: string | null = textRef.current?.textContent || null;
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
    }

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <button
        className="absolute w-full opacity-0 hover:opacity-100 hover:bg-slate-300 transition-all ease-linear text-black"
        onClick={copyTextToClipboard}
      >
        {!copied ? "Click to copy!" : "Copied!"}
      </button>
      <MdEmail size="1.5rem" />
      <span ref={textRef}>lucascassimiro545@hotmail.com</span>
    </>
  );
}
