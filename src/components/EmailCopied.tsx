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
        className="absolute w-full opacity-0 hover:opacity-100 hover:bg-slate-300 transition-all ease-linear text-[#fff7df]"
        onClick={copyTextToClipboard}
      >
        {!copied ? "Click to copy!" : "Copied!"}
      </button>
      <div className="flex items-center gap-2 text-[#fff7df]">
        <MdEmail size="1.5rem" />
        <span ref={textRef}>
          <a className="no-underline mobile:text-[12px]">
            lucascassimiro545@hotmail.com
          </a>
        </span>
      </div>
    </>
  );
}
