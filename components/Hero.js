import React from "react";
import {
    AiOutlineCloseCircle,
    AiOutlineMail,
    AiFillGithub,
    AiFillFacebook,
  } from "react-icons/Ai";
import { FaLine } from "react-icons/Fa";

const Hero = () => {
  return (
    <div className=" w-full h-screen text-center  ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest border-b-2 shadow-b py-5 text-gray-400 mt-32 md:mt-2 ">
            A Front-End Developer with a passion for learning and Creating.{" "}
          </p>
          <h1>
            {" "}
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Ratchasri Kidking{" "}
            </span>{" "}
          </h1>
          <p className="py-5 text-gray-400 max-w-[70%] m-auto ">
            {" "}
            I'am a self-tought and start my journey for coding just the begining
            of this year. Now I'm focusing on building responsive front-end web
            application while also learning back-end technologies.{" "}
          </p>

          <div className=" flex items-center justify-between max-w-[320px] mx-auto py-10 ">
            <div className="rounded-md shadow-xl shadow-gray-500 cursor-pointer hover:scale-125 duration-200">
              <AiOutlineMail size={40} />
            </div>
            <div className="rounded-md shadow-xl shadow-gray-500 cursor-pointer hover:scale-125 duration-200">
              <FaLine size={40} />
            </div>
            <div className="rounded-md shadow-xl shadow-gray-500 cursor-pointer hover:scale-125 duration-200">
              <AiFillFacebook size={40} />
            </div>
            <div className="rounded-full shadow-xl shadow-gray-500 cursor-pointer hover:scale-125 duration-200">
              <AiFillGithub size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
