import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import reactIcon from "../assets/images/techstack/reactjs.svg";
import jsIcon from "../assets/images/techstack/js.svg";
import nextIcon from "../assets/images/techstack/next.svg";
import tailwindIcon from "../assets/images/techstack/tailwind.svg";
import nodeIcon from "../assets/images/techstack/node.svg";
import mongoIcon from "../assets/images/techstack/mongo.svg";
import postgresqlIcon from "../assets/images/techstack/postgresql.svg";
import gitIcon from "../assets/images/techstack/git.svg";
import supabaseIcon from "../assets/images/techstack/supabase.svg";

import profile from "/portfolio website project/portfolio/src/assets/images/Profile.png";

const variants = {
  initial: { x: 0, y: 0, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function About() {
  // const items = [
  //   jsIcon,
  //   reactIcon,
  //   nextIcon,
  //   tailwindIcon,
  //   nodeIcon,
  //   mongoIcon,
  //   postgresqlIcon,
  //   supabaseIcon,
  //   gitIcon,
  // ];
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-150px" });

  return (
    <>
      <div className="mb-[100px] lg:h-screen flex lg:justify-center flex-col items-center gap-[30px] lg:flex-row-reverse mx-[20px] ">
        <motion.div
          className="flex justify-center"
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <div className="flex flex-col justify-center m-[5px] p-[5px] max-w-[600px] md:w-[600px] lg:w-[500px]">
            <div className="text-center text-[24px] font-[500] md:text-[48px] text-[#50bdf2]">
              ABOUT ME
            </div>
            <p className="text-[16px] md:text-[20px] text-[#fbffff] my-[10px]">
              &emsp;I'm Titatit Akkhranatpraphin, a junior web developer based
              in Bangkok, Thailand.
            </p>
            <p className="text-[16px] md:text-[20px] text-[#fbffff] my-[10px]">
              &emsp;Passionate about Web Development and Technology. I have been
              studying how to code for a year.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center ">
          <div className="flex flex-col justify-end h-[400px] sm:h-[500px]">
            <div className="flex flex-row justify-end h-[300px] w-[300px] sm:h-[400px] sm:w-[420px] rounded-full bg-white "></div>
            <div className="absolute bg-[#15181E] w-[300px] h-[100px] sm:w-[400px] sm:h-[100px]"></div>
          </div>
          <img
            className="absolute h-[300px] w-[250px] sm:h-[400px] sm:w-[300px] "
            src={profile}
            alt="profile"
          />
        </div>
      </div>

      {/* Tech Stack */}
      {/* <div className="max-w-[600px] mx-auto flex flex-wrap justify-center gap-[30px] lg:gap-[20px] mt-[50px] ">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center text-center text-[20px] lg:text-[24px] font-[500] text-[#50bdf2]">
            <p>Tech Stack</p>
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 grid-row-2 gap-[20px] lg:gap-[40px] ">
          {items.map((item, index) => (
            <motion.div className="flex" key={index}>
              <img src={item} alt={index} />
            </motion.div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default About;
