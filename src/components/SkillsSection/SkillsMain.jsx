import React from "react";
import SkillsText from "./SkillsText";
import AllSkill from "./AllSkill";
import AllSkillsSM from "./AllSkillsSM";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FadeIn } from "../../components/Frameworkmotion/Fade";
const SkillsMain = () => {
  return (
    <div id="skills">
      <motion.div
        variants={FadeIn("up", 0.2)} // Apply FadeIn animation correctly here
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="max-w-[1200px] px-4 mx-auto min-h-[500px] relative overflow-hidden"
      >
        <SkillsText />
        <div className="bottom-[50px]   left-[50%] translate-x-[10%] md:hidden max-md:hidden">
          <AllSkill />
        </div>
        <div className="md:block max-md:block">
          <AllSkillsSM />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsMain;
