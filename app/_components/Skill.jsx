import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiBootstrap } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { Icon: FaHtml5, color: "#dd4b24", name: "HTML" },
    { Icon: IoLogoCss3, color: "#2862e9", name: "CSS" },
    { Icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },
    { Icon: SiJavascript, color: "#ecda1d", name: "JavaScript" },
    { Icon: FaReact, color: "#5ed3f3", name: "React" },
  ];

  return (
    <div className="py-6 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
          >
            <skill.Icon
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
              color={skill.color}
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 dark:text-gray-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
