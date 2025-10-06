import React from "react";

const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-lg bg-cyan-300 opacity-10 shadow-cyan-500/50 absolute top-0 right-[400px] -z-10 animate-pulse p-20 blur-3xl"></div>
      <div className="shadow-lg bg-orange-300 opacity-10 shadow-orange-500/50 absolute top-0 right-0 -z-10 animate-pulse p-20 blur-3xl"></div>
      <div className="shadow-lg bg-cyan-300 opacity-10 shadow-cyan-500/50 absolute top-[250px] left-0 -z-10 animate-pulse p-20 blur-3xl opacity-50%"></div>
      <div className="shadow-lg bg-orange-300 opacity-10 shadow-orange-500/50 absolute top-[400px] left-0 -z-10 animate-pulse p-20 blur-3xl opacity-50%"></div>
    </div>
  );
};

export default HeroGradient;
