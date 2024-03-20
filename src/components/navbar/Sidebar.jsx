import React, { useState } from "react";
import { motion } from "framer-motion";

import closelogo from "/portfolio website project/portfolio/src/assets/images/Close.svg";
import burgerlogo from "/portfolio website project/portfolio/src/assets/images/Burger.svg";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const variants = {
    open: {
      clipPath: "circle(2000px at 50% 100%)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 18% 94%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      {/* sidebar */}
      <motion.div
        className="flex flex-col align-middle"
        animate={sidebarOpen ? "open" : "closed"}
      >
        {/* bg */}
        <motion.div
          className="z-[50] fixed top-[0px] left-[0px] bottom-[0px] w-[320px] bg-[#fbffff] "
          variants={variants}
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <div className="h-full flex flex-col justify-center items-center gap-[50px]">
            <motion.a
              className="text-[38px] font-[500] text-[black] hover:text-[#50bdf2] cursor-pointer"
              variants={variants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("Home")}
            >
              Home
            </motion.a>
            <motion.a
              className="text-[38px] font-[500] text-[black] hover:text-[#50bdf2] cursor-pointer"
              variants={variants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("About")}
            >
              About
            </motion.a>
            <motion.a
              className="text-[38px] font-[500] text-[black] hover:text-[#50bdf2] cursor-pointer"
              variants={variants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("Project")}
            >
              Projects
            </motion.a>
            <motion.a
              className="text-[38px] font-[500] text-[black] hover:text-[#50bdf2] cursor-pointer"
              variants={variants}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("Contact")}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
        {sidebarOpen ? (
          <motion.div
            className="fixed z-[100] top-[30px] left-[30px] cursor-pointer"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            <motion.img
              src={closelogo}
              alt="close_logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        ) : (
          <div className="m-auto p-auto fixed z-[100] bottom-[4.5%] left-[44px] cursor-pointer">
            <motion.img
              src={burgerlogo}
              alt="burger_logo"
              onClick={() => setSidebarOpen((prev) => !prev)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Sidebar;
