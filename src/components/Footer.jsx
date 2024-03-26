import React from "react";

import githubLogo from "/portfolio website project/portfolio/src/assets/images/Github.svg";
import linkedinLogo from "/portfolio website project/portfolio/src/assets/images/LinkedIn.svg";
import messageLogo from "/portfolio website project/portfolio/src/assets/images/Message.svg";
import telLogo from "/portfolio website project/portfolio/src/assets/images/Phone.svg";

function Footer() {
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <hr className="w-[280px]" />
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly mt-[20px] pb-[50px] gap-[10px]">
        {/* <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            Created By Titatit 
          </div>
        </div> */}

        <div className="flex flex-col justify-center gap-[10px]">
          <div className="flex justify-center sm:justify-start gap-[10px]">
            <img src={messageLogo} alt="message_logo" />
            titatit.akkh@gmail.com
          </div>
          <div className="flex justify-center sm:justify-start gap-[10px]">
            <img src={telLogo} alt="tel_logo" />
            088-687-8555
          </div>
        </div>

        <div className="flex flex-col mx-auto sm:mx-[0] gap-[10px]">
          <div className="flex gap-[20px]">Follow me</div>
          <div className="flex gap-[20px] mx-auto">
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
                className="bg-[#fbffff] rounded-[4px] w-[24px] h-[24px]"
                src={linkedinLogo}
                alt="linkedin_logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
