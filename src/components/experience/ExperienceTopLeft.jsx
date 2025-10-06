import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px] ml-10">
      <p className="text-orange-300 font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4 ">
        <ExperienceInfo number="1" text="years" />
        <p
          className="font-bold text-xl 
         text-gray-500 "
        >
          -
        </p>
        <ExperienceInfo number="3" text="Projects" />
      </div>
      <p className="text-center text-white ">
        I have worked on several personal and academic projects that showcase my
        skills in HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and
        MySQL.
      </p>
      {/* <ExperienceInfo number="$100birr" text="max-budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
