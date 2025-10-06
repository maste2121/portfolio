import React from "react";

// eslint-disable-next-line no-unused-vars
const SingleContactSocial = ({ Icon, Link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange-300 text-orange-300 rounded-full p-3 flex items-center justify-center">
      <a href={Link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
