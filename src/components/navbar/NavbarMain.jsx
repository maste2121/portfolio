import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMainOpen] = useState(false);
  const toggleMain = () => {
    setMainOpen(!menuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400">
        <NavbarLogo />
        <div
          className={`${
            menuOpen ? "max-md:block" : "max-md:hidden"
          } md:block justify-center items-center me-80`}
        >
          <NavbarLinks />
        </div>
        {/* <NavbarBtn /> */}
        <div className="flex lg:hidden sm:block items-center justify-center rounded-full  ">
          <button
            className="text-2xl p-3 border border-orange-300 rounded-full text-white"
            onClick={toggleMain}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
