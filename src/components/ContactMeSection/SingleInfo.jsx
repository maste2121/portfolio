import React from "react";

// eslint-disable-next-line no-unused-vars
const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start ">
      <Image className="text-3xl " />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
