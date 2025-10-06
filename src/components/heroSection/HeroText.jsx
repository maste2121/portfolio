import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FadeIn } from "../../components/Frameworkmotion/Fade";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left max-sm:text-center md:ml-20">
      <motion.h2
        variants={FadeIn("down", 0.2)} // Apply FadeIn animation correctly here
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl max-md:text-xl uppercase text-cyan-300"
      >
        front-end web developer
      </motion.h2>
      <motion.h1
        variants={FadeIn("right", 0.4)} // Apply FadeIn animation correctly here
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-text-6xl max-sm:text-4xl font-bold font-special text-orange-300"
      >
        Hello<br></br> I'm Mastewal kihnet
      </motion.h1>
      <motion.p
        variants={FadeIn("up", 0.6)} // Apply FadeIn animation correctly here
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        A passionate web and mobile app developer. <br />I am a student in Bahir
        Dar University.
      </motion.p>
    </div>
  );
};

export default HeroText;
