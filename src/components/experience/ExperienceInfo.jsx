import React from "react";

const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan-300 mb-2">{number}</p>
      <p className="font-bold text-4xl text-gray-500 uppercase -mt-4">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
