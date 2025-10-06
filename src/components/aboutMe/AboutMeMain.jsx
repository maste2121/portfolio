import React from "react";
import AboutMeText from "./AboutMeText";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FadeIn } from "../../components/Frameworkmotion/Fade";
const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row max-md:flex-col gap-12 px-4 max-w-[1200%] mx-auto mt-[100px] justify-between"
    >
      <motion.div
        variants={FadeIn("right", 0.2)} // Apply FadeIn animation correctly here
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={FadeIn("left", 0.2)} // Apply FadeIn animation correctly here
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      ></motion.div>
    </div>
  );
};

export default AboutMeMain;
