import * as React from "react";
import { motion } from "framer-motion";

import githubLogo from "/portfolio website project/portfolio/src/assets/images/Github.svg";
import linkedinLogo from "/portfolio website project/portfolio/src/assets/images/LinkedIn.svg";

const Navbar = () => {
  const scroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="p-[16px] flex items-center mx-[10px] sm:mx-[20px] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto flex items-center gap-[20px]">
          {/* Logo */}
          <div className="m-0 py-[5px] flex flex-row items-center gap-[5px]">
            {/* <a href="/" className="bg-white h-[24px] w-[24px]"></a> */}
            <span className="text-[#50bdf2] text-[16px] font-[500]">
              Titatit Akkh.
            </span>
          </div>
          {/* Navigation Links for Large Screens */}
          <div className="hidden sm:flex space-x-4">
            <a
              className="px-[10px] py-[5px] text-[16px] text-[#fbffff] hover:text-[#50bdf2] cursor-pointer"
              onClick={() => scroll("Home")}
            >
              Home
            </a>
            <a
              className="px-[10px] py-[5px] text-[16px] text-[#fbffff] hover:text-[#50bdf2] cursor-pointer"
              onClick={() => scroll("About")}
            >
              About
            </a>
            <a
              className="px-[10px] py-[5px] text-[16px] text-[#fbffff] hover:text-[#50bdf2] cursor-pointer"
              onClick={() => scroll("Project")}
            >
              Projects
            </a>
            <a
              className="px-[10px] py-[5px] text-[16px] text-[#fbffff] hover:text-[#50bdf2] cursor-pointer"
              onClick={() => scroll("Contact")}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="w-[90px] flex gap-[20px]">
          <a href="https://github.com/KritTitatit" target="_blank">
            <img
              className="w-[24px] h-[24px]"
              src={githubLogo}
              alt="github_logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/titatit-akkhranatpraphin-51a18b2bb/"
            target="_blank"
          >
            <img
              className="absolute rounded-[4px] w-[24px] h-[24px]"
              src={linkedinLogo}
              alt="linkedin_logo"
            />
            <div className="bg-[#fbffff] w-[24px] h-[24px] rounded-lg"></div>
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
