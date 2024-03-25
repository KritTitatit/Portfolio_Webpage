import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yt1zozn", "template_3vpfqgp", form.current, {
        publicKey: "33RLzdK4lhPR0fHUM",
      })
      .then(
        () => {
          toast.success("Your form has been sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mb-[30px] mx-[20px] gap-[20px]">
      <div className="flex flex-col gap-[10px]">
        <div className="text-center text-[24px] font-[500] md:text-[48px] text-[#50bdf2]">
          CONTACT
        </div>
        <div className="text-[16px] md:text-[20px] text-center md:w-[700px] lg:w-[800px] text-[#fbffff] my-[10px]">
          &emsp;If you are interested to work with me. You can fill up form
          below.
        </div>
      </div>

      <form
        className="flex flex-col w-full md:w-[700px] lg:w-[800px] bg-[#f8f8f8] p-[20px] gap-[20px] rounded-md"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className=" flex flex-col mt-[10px] sm:mx-[20px] gap-[20px] ">
          <div>
            <div className="text-[14px] sm:text-[16px]">Name</div>
            <input
              className="text-[14px] sm:text-[16px] bg-[#f8f8f8] w-full mt-[4px] px-[16px] py-[12px] border-[1px] border-[#DCDFED] rounded-[1px] outline-[#50bdf2] focus:border-[#50bdf2] focus:ring-[#50bdf2]"
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <div className="text-[14px] sm:text-[16px]">Email</div>
            <input
              className="text-[14px] sm:text-[16px] bg-[#f8f8f8] w-full mt-[4px] px-[16px] py-[12px] border-[1px] border-[#DCDFED] rounded-[1px] outline-[#50bdf2] focus:border-[#50bdf2] focus:ring-[#50bdf2]"
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div>
            <div className="text-[14px] sm:text-[16px]">Message</div>
            <textarea
              className="text-[14px] sm:text-[16px] bg-[#f8f8f8] w-full mt-[4px] px-[16px] py-[12px] border-[1px] border-[#DCDFED] rounded-[1px] outline-[#50bdf2] focus:border-[#50bdf2] focus:ring-[#50bdf2]"
              cols="10"
              rows="10"
              name="message"
              placeholder="Enter Your Message"
            />
          </div>
        </div>
        <div className="mb-[10px] flex justify-center">
          <motion.button
            className="flex flex-row justify-center items-center w-full h-[40px] md:h-[50px] mt-[10px] mx-[40px] text-[16px] md:text-[22px] text-[#fbffff] border-2 bg-[#50bdf2] border-[#50bdf2] rounded-lg"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            type="submit"
            value="Send"
          >
            Submit
          </motion.button>
        </div>
      </form>
      <div className="text-[16px] md:text-[20px] text-center md:w-[700px] lg:w-[800px] text-[#fbffff] my-[10px]">
        I will get in touch with you as soon as possible.
      </div>
    </div>
  );
}

export default Contact;
