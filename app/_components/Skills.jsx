import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiC } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { SiBootstrap } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";

import { Tooltip } from "@nextui-org/tooltip";

export default function Skills() {
  const languages = [
    { Icon: FaHtml5, color: "#dd4b24", name: "HTML" },
    { Icon: IoLogoCss3, color: "#2862e9", name: "CSS" },
    { Icon: SiJavascript, color: "#ecda1d", name: "JavaScript" },
    { Icon: SiC, color: "#A8B9CC", name: "C" },
    { Icon: DiPython, color: "#3776AB", name: "Python" },
  ];

  const frameworks = [
    { Icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },
    { Icon: FaReact, color: "#5ed3f3", name: "React" },
  ];

  const tools = [
    { Icon: SiVisualstudiocode, color: "#007ACC", name: "VS Code" },
    { Icon: SiGit, color: "#F05032", name: "Git" },
    { Icon: SiGithub, color: "#211F1F", name: "GitHub" },
  ];

  return (
    <div className="py-4 -mt-5 mb-10 px-5">
      {/* Languages Section */}
      <div className="py-20 -mb-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold ">
            Languages<span className="text-primary">.</span>
          </h1>
        </div>
      </div>

      <div className="flex gap-6 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
        {languages.map((skill, index) => (
          <Tooltip
            key={index}
            placement="top"
            showArrow
            content={
              <div className="flex items-center space-x-2">
                <skill.Icon className="h-6 w-6" color={skill.color} />
                <span>{skill.name}</span>
              </div>
            }
            classNames={{
              base: ["before:bg-gray-600 dark:before:bg-gray-300"],
              content: [
                "flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg",
                "font-medium text-sm",
              ],
            }}
          >
            <div className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
              <skill.Icon
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-14 lg:w-14"
                color={skill.color}
              />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
                {skill.name}
              </span>
            </div>
          </Tooltip>
        ))}
      </div>

      {/* Libraries and Frameworks Section */}
      <div className="py-16 -mb-12">
        <div className="text-center mb-1">
          <h1 className="text-2xl font-bold">
            Libraries and Frameworks<span className="text-primary">.</span>
          </h1>
        </div>
      </div>

      <div className="flex gap-6 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
        {frameworks.map((skill, index) => (
          <Tooltip
            key={index}
            placement="top"
            showArrow
            content={
              <div className="flex items-center space-x-2">
                <skill.Icon className="h-6 w-6" color={skill.color} />
                <span>{skill.name}</span>
              </div>
            }
            classNames={{
              base: ["before:bg-gray-600 dark:before:bg-gray-300"],
              content: [
                "flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg",
                "font-medium text-sm",
              ],
            }}
          >
            <div className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
              <skill.Icon
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-14 lg:w-14"
                color={skill.color}
              />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
                {skill.name}
              </span>
            </div>
          </Tooltip>
        ))}
      </div>

      {/* Tools & Services Section */}
      <div className="py-16 -mb-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Tools & Services<span className="text-primary">.</span>
          </h1>
        </div>
      </div>

      <div className="flex gap-6 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
        {tools.map((skill, index) => (
          <Tooltip
            key={index}
            placement="top"
            showArrow
            content={
              <div className="flex items-center space-x-2">
                <skill.Icon className="h-6 w-6" color={skill.color} />
                <span>{skill.name}</span>
              </div>
            }
            classNames={{
              base: ["before:bg-gray-600 dark:before:bg-gray-300"],
              content: [
                "flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg",
                "font-medium text-sm",
              ],
            }}
          >
            <div className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95">
              <skill.Icon
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-14 lg:w-14"
                color={skill.color}
              />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100">
                {skill.name}
              </span>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
