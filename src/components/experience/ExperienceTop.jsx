import React from "react";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceMiddle from "./ExperienceMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div
      id="experience"
      className=" flex md:flex-row max-md:flex-col gap-4 items-center justify-center "
    >
      <ExperienceTopLeft />
      <ExperienceMiddle />
      {/* <div className="w-full h-1 mt-4 bg-gray-600 md:block max-md:hidden"></div> */}
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;
