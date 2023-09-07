"use client";

import { AiOutlineCloudDownload } from "react-icons/ai";

const pdf = "http://localhost:3000/curriculo.pdf";

export default function ButtonCV() {
  async function downloadFile(url: any){
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <button
      className="text-white fixed bg-[#4B0082] z-[5] right-6 bottom-2 p-3 hover:bg-purple-600 transition-all duration-200 ease-in rounded-lg md:hidden"
      onClick={() => downloadFile(pdf)}
    >
      <div className="flex items-center gap-2">
        Download CV
        <AiOutlineCloudDownload size="1.5rem" />
      </div>
    </button>
  );
}
