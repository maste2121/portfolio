import React from "react";
import { PiHexagonThin } from "react-icons/pi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FadeIn } from "../../components/Frameworkmotion/Fade";
const HeroPic = () => {
  return (
    <motion.div
      variants={FadeIn("left", 0.2)} // Apply FadeIn animation correctly here
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center md:me-20 "
    >
      <img
        src="/mast.jpg"
        alt="Mastewal kihnet"
        className="max-h-[450px] w-60 border border-amber-500 rounded-[150px] bg-transparent "
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="max-md:h-[120%] min-h-[500px] w-auto text-cyan-300 blur-md animate-[spin_20s_linear_infinite " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
