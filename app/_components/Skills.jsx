import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiAppwrite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiPython } from "react-icons/di"; // Added for Python
import { SiBootstrap } from "react-icons/si"; // Added for Bootstrap
import { SiVisualstudiocode } from "react-icons/si"; // Added for VS Code
import { SiRedux } from "react-icons/si"; // Added for Redux
import { SiGithub } from "react-icons/si"; // GitHub icon
import { SiC } from "react-icons/si"; // Added for C language
import { SiGit } from "react-icons/si"; // Added for Git

import {Tooltip} from "@nextui-org/tooltip";

export default function Skills() {
  return (
    <div className="py-4 -mt-5 mb-10 px-5">
      <div className="py-20 -mb-12">
        <div className="text-center ">
          <h1 className="text-xl font-bold">
            Languages<span className="text-primary">.</span>
          </h1>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <FaHtml5 className="h-10 w-10" color="#dd4b24" />
        </div>
        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <IoLogoCss3 className="h-10 w-10" color="#2862e9" />
        </div>
        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <SiJavascript className="h-10 w-10" color="#ecda1d" />
        </div>

        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <SiC className="h-10 w-10" color="#A8B9CC" />
        </div>

        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <DiPython className="h-10 w-10" color="#3776AB" />
        </div>
      </div>

      <div className="py-16 -mb-12">
        <div className="text-center mb-1">
          <h1 className="text-xl font-bold">
            Libraries and Frameworks<span className="text-primary">.</span>
          </h1>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <SiBootstrap className="h-10 w-10" color="#7952B3" />
        </div>
        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <FaReact className="h-10 w-10" color="#5ed3f3" />
        </div>
      </div>

      <div className="py-16 -mb-12">
        <div className="text-center">
          <h1 className="text-xl font-bold">
            Tools & Services<span className="text-primary">.</span>
          </h1>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <SiVisualstudiocode className="h-10 w-10" color="#007ACC" />
        </div>

        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <SiGit className="h-10 w-10" color="#F05032" />
        </div>

        <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
          <SiGithub className="h-10 w-10" color="#211F1F" />
        </div>
      </div>
    </div>
  );
}
