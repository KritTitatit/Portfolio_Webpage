import React, { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";

//img
import petsitterImg from "../assets/images/Petsitter.png";
import touristattractionImg from "../assets/images/TouristAttraction.png";

// Icon
import reactIcon from "../assets/images/techstack/reactjs.svg";
import jsIcon from "../assets/images/techstack/js.svg";
import nextIcon from "../assets/images/techstack/next.svg";
import tailwindIcon from "../assets/images/techstack/tailwind.svg";
import nodeIcon from "../assets/images/techstack/node.svg";
import mongoIcon from "../assets/images/techstack/mongo.svg";
import postgresqlIcon from "../assets/images/techstack/postgresql.svg";
import gitIcon from "../assets/images/techstack/git.svg";
import supabaseIcon from "../assets/images/techstack/supabase.svg";
import expressIcon from "../assets/images/techstack/express.svg";
import githubLogo from "/portfolio website project/portfolio/src/assets/images/Github.svg";

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

function Projects() {
  const items = [
    {
      project: "Pet Sitter",
      detail:
        "Petsitter website is web services for pet sitting businesses website to connect pet owners with quality care.",
      techStack: [
        nextIcon,
        jsIcon,
        tailwindIcon,
        supabaseIcon,
        postgresqlIcon,
        gitIcon,
      ],
      img: petsitterImg,
      link: "https://github.com/scarecrow-404/pet-sitter",
    },
    {
      project: "Tourist Attraction",
      detail:
        "Tourist website use mock data in React with API.  This website can search tourist attraction as we type and link to website article.",
      techStack: [
        reactIcon,
        jsIcon,
        tailwindIcon,
        nodeIcon,
        expressIcon,
        gitIcon,
      ],
      img: touristattractionImg,
      link: "https://github.com/techupth/react-tourist-attraction-mini-project-KritTitatit",
    },
  ];

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-150px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="flex flex-col justify-center items-center mx-[20px] py-[220px]">
      <motion.div
        className="flex flex-col justify-center mb-[0px] md:w-[600px] lg:w-[700px]"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <div className="text-center text-[24px] font-[500] md:text-[48px] text-[#50bdf2]">
          PROJECTS
        </div>
        <div className="text-[16px] md:text-[20px] sm:text-center text-[#fbffff] my-[10px]">
          &emsp;This is my past few projects I have worked on.
        </div>
      </motion.div>

      {/* Project Work */}
      <div className="relative flex flex-col gap-[150px]" ref={ref}>
        <motion.div
          className="bg-[#15181E] sticky top-0 left-0 mt-[50px] text-center text-[#fbffff] text-[24px] md:text-[36px] font-[500] "
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <h1 className="text-shadow-sm">Latest Projects</h1>
          <motion.div
            className=" h-[10px] bg-[#50bdf2] "
            style={{ scaleX }}
          ></motion.div>
        </motion.div>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col my-[10px] lg:my-[80px] gap-[20px] max-w-[500px] lg:max-w-[1200px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex flex-col justify-center text-center text-[20px] lg:text-[24px] font-[500] text-[#50bdf2]">
              {item.project}
            </div>
            <div className="flex flex-col lg:flex-row gap-[20px]">
              <div className="lg:max-w-[500px] xl:max-w-[600px]">
                <img src={item.img} alt={item.img} />
              </div>
              <div className="flex flex-col justify-evenly gap-[30px]">
                <div className="flex flex-col justify-center text-[16px] lg:text-[20px] text-[#fbffff]">
                  &emsp;{item.detail}
                </div>
                <div className="flex flex-row justify-center gap-[15px]">
                  <div className="flex flex-col justify-center text-[16px] lg:text-[20px] font-[500] text-[#50bdf2]">
                    Tech Stack
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="h-[25px] border-r-2 border-white"></div>
                  </div>
                  <div className="grid grid-rows-2 sm:grid-rows-1 grid-flow-col gap-[10px] xl:gap-[20px]">
                    {item.techStack.map((icon, index) => (
                      <img key={index} src={icon} alt={`techIcon_${index}`} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-row justify-center gap-[15px] ">
                  <div className="flex justify-center ">
                    <img
                      className="w-[30px] h-[30px] "
                      src={githubLogo}
                      alt="github_logo"
                    />
                  </div>
                  <a
                    className="flex flex-col justify-center text-[16px] lg:text-[20px] font-[500] text-[#fbffff] hover:text-[#50bdf2] "
                    href={item.link}
                    target="_blank"
                  >
                    Click here to check this project
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
