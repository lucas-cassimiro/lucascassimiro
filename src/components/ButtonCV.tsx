"use client";

import { AiOutlineCloudDownload } from "react-icons/ai";

const pdf = "http://localhost:3000/curriculo.pdf";

export default function ButtonCV() {
  const downloadFile = (url: string) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));

        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName!);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <button
      className="text-white fixed bg-black z-[5] right-6 bottom-2"
      onClick={() => downloadFile(pdf)}
    >
      <div className="flex items-center gap-2">
        Download CV
        <AiOutlineCloudDownload size="1.5rem" />
      </div>
    </button>
  );
}
