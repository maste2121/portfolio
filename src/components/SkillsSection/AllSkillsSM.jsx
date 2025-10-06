import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { FaFlutter } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
// import SingleSkill from "./SingleSkill";
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
const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 max-sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center ">
            <item.icon className="text-7xl text-orange-300" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
