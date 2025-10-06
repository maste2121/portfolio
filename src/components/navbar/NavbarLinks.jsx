import React from "react";
import { Link } from "react-scroll";
const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Exerience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-white font-bold text-center py-4 md:flex-row max-md:flex-col  md:relative max-md:absolute max-sm:top-[120%] left-[50%] -translate-x-[50%] md:text-md max-sm:text-xl max-md:bg-cyan-700 backdrop-blur-lg  md:bg-black-200 max-md:w-full ">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={link.section}
              Smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer text-white hover:text-cyan-300 transition-all duration-500 "
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan-300 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
