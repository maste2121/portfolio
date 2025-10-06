import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { FaFlutter } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import AllSkillsSM from "./AllSkillsSM";
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "Css",
    icon: FaCss3Alt,
  },
  {
    skill: "Javascript",
    icon: IoLogoJavascript,
  },
  { skill: "React", icon: IoLogoReact },
  {
    skill: "TailwindCss",
    icon: RiTailwindCssFill,
  },
  {
    skill: "mysql",
    icon: GrMysql,
  },
  {
    skill: "Flutter",
    icon: FaFlutter,
  },
  {
    skill: "Bootstrap",
    icon: BsBootstrapFill,
  },
];
const AllSkill = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <AllSkillsSM key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkill;
