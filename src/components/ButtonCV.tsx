import { AiOutlineCloudDownload } from "react-icons/ai";

export default function ButtonCV() {
    return (
      <button className="text-white fixed bg-black z-50 right-6 bottom-2">
        <div className="flex items-center gap-2">
          Download CV
          <AiOutlineCloudDownload size="1.5rem" />
        </div>
      </button>
    );
}