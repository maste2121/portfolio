import React from "react";
import { IoLinkSharp } from "react-icons/io5";
const ExperienceMiddle = () => {
  return (
    <div className="flex max-md:justify-center items-center flex-col gap-3 ">
      <div className="md:w-[85%] max-md:w-[100%] xl:w-[80%] rounded-[70px]">
        <a href="#">
          <img
            src="../../public/img.jpg"
            alt=""
            className="rounded-[70px] max-md:justify-center items-center"
          />
        </a>
      </div>
      <div className="text-4xl hover:bg-orange-300 text-cyan-600 rounded-3xl">
        <a href="#" className="font-bold  text-blue-600 flex ">
          Links
          <IoLinkSharp className="mt-2 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ExperienceMiddle;
