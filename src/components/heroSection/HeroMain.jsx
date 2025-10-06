import React from "react";
import HeroPic from "./HeroPic";
import HeroText from "./HeroText";

const HeroMain = () => {
  return (
    <div id="home" className="pt-40 pb-6  ">
      <div className="flex md:flex-row max-sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <div>
          <HeroText />
        </div>
        <div className="md:right-4">
          <HeroPic />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
