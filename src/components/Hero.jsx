import React from "react";
import { motion } from "framer-motion";

import profile from "/portfolio website project/portfolio/src/assets/images/Profile.png";

function hero() {
  const scroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen flex flex-row items-center mx-[20px] ">
      <div className="flex flex-col lg:flex-row mx-auto items-center gap-[0px] lg:gap-[94px]">
        <motion.div
          className="flex flex-col max-w-[600px] md:max-w-full m-[5px] p-[5px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="md:flex my-[10px]">
            <div className="md:text-justify text-[38px] md:text-[58px] text-[#fbffff] font-[500]">
              Hello,
            </div>
            <div className="md:text-justify text-[30px] md:text-[58px] text-[#fbffff] font-[500]">
              My name is KRIT
            </div>
          </div>
          <div className="text-[14px] md:text-[18px] text-[#50bdf2]">
            I'm a Junior Developer
          </div>
          <p className="text-[16px] md:text-[26px] text-[#50bdf2] md:w-[600px]  my-[10px]">
            &emsp;I want to create an amazing web experience. To achieve my
            goal. I keep practice coding and learning everyday.
          </p>
          <div className="w-[50px] my-[10px] border-b-[1px]"></div>
          <button onClick={() => scroll("Contact")}>
            <motion.div
              className="flex flex-col justify-center items-center w-[100px] md:w-[140px] h-[40px] md:h-[50px] mt-[10px] text-[16px] md:text-[22px] text-white border-2 border-[#50bdf2] rounded-lg"
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact me
            </motion.div>
          </button>
        </motion.div>
        {/* <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={profile} alt="krit" className=" w-[250px] h-[300px]" />
        </motion.div> */}
      </div>
    </div>
  );
}

export default hero;
