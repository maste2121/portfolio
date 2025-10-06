import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
const NavbarBtn = () => {
  return (
    <button className="text-white px-2 rounded-full text-xl font-bold bg-gradients-180 from-teal-500 to-orange-500 border flex items-center gap-1 bg-gradient-to-r from-#15d1e9-500 to-#fb9718-500 hover:scale-110 transition-all duration-500 hover:drop-shadow-[0px_0px_20px_0px_rgab(94,206,220,0.5]">
      hire Me
      <div className="max-sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
