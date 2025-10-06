import React from "react";
// const links = [
//   { link: "About Me", section: "about" },
//   { link: "Skills", section: "skills" },
//   { link: "Exerience", section: "experience" },
//   { link: "Projects", section: "projects" },
//   { link: "Contact", section: "contact" },
// ];
const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-gray-500 mt-24"></div>
      <div className="md:flex max-md:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-6xl text-gray-600">Mastewal Kihnet</p>
        {/* <ul className="flex gap-4 text-gray-500 text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-gray-500">
        @ 2025 | Developed By mastewal | AllRight Reserved
      </p>
    </div>
  );
};

export default FooterMain;
