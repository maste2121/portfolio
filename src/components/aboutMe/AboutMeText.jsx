import React from "react";
import { MdPreview } from "react-icons/md";
// import { IoMdDownload } from "react-icons/io";
const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start max-md:items-center md:text-left max-md:text-center">
      <h2 className="text-cyan-300 text-6xl mb-10">About Me</h2>
      <p className="text-white md:ml-14 md:pe-32">
        I'm a passionate web developer studying Software Engineering at Bahir
        Dar University. I specialize in building responsive and user-friendly
        websites using HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap,
        and MySQL. I have hands-on experience working on real-world projects and
        enjoy turning ideas into functional, visually appealing web
        applications.
      </p>
      <div className="  md:hidden shadow-xl bg-orange-200 opacity-4 shadow-cyan-500/50 absolute top-[980px] right-[500px] -z-10 animate-pulse p-10 blur-3xl max-md:left-40 flex"></div>
      {/* <a
        href="/Mastewal-KIhnet-resume.pdf"
        download="Mastewal-KIhnet-resume.pdf"
        className="border border-amber-300 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange-300 transition-all duration-500 cursor-pointer md:self-start max-md:self-center text-white hover:text-cyan-300 md:ml-17"
      >
        Download resume
        <IoMdDownload className="font-bold text-2xl text-cyan-500 ml-2" />
      </a> */}
      <a
        href="/Mastewal-KIhnet-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-amber-300 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange-300 transition-all duration-500 cursor-pointer md:self-start max-md:self-center text-white hover:text-cyan-300 md:ml-17"
      >
        View Resume
        <MdPreview className="font-bold text-2xl text-cyan-500 ml-2" />
      </a>
    </div>
  );
};

export default AboutMeText;
