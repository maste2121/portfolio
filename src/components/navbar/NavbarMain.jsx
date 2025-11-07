import React, { useState, useEffect, useRef } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMainOpen] = useState(false);
  const menuRef = useRef(null); // Reference for menu
  const buttonRef = useRef(null); // Reference for hamburger button

  const toggleMain = () => {
    setMainOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // if click is outside both menu and button, close it
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMainOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400">
        <NavbarLogo />

        {/* Menu links container */}
        <div
          ref={menuRef}
          className={`${
            menuOpen ? "max-md:block" : "max-md:hidden"
          } md:block justify-center items-center me-80`}
        >
          <NavbarLinks />
        </div>

        {/* Hamburger Button */}
        <div className="flex lg:hidden sm:block items-center justify-center rounded-full">
          <button
            ref={buttonRef}
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
