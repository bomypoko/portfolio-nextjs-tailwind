import React from "react";

import {
  AiOutlineCloseCircle,
  AiOutlineMail,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/Ai";
import { FaLine, FaPray } from "react-icons/Fa";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto w-full px-2 py-16">
        <p className=" bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-800 bg-clip-text text-transparent">
          Contact{" "}
        </p>
        <h2 className="py-4"> Get in Touch </h2>

        <div className="grid lg:grid-cols-5 gap-8 ">
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-500 rounded-xl p-2">
            <div className="lg:p-1 h-full">
              <img
                src="https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
                alt=""
                className="rounded-xl "
              />
              <div>
                <h2 className="py-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ">
                  Ratchari Kidking{" "}
                </h2>
                <p>Front-End Deleloper</p>
                <p className="py-4">
                  I am available for a Junior Front-End Developer, Contact me
                  and Let Talk.
                </p>
              </div>

              <div>
                <p> Connect wih me </p>
                <div className="flex items-center justify-evenly py-4 ">
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

          <div className="col-span-3 w-full h-auto showdow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2"> Name </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {" "}
                      Phone Number{" "}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black "
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                      <lable className="uppercase text-sm py-2"> Email </lable>
                      <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="Email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                      <lable className="uppercase text-sm py-2"> Subject </lable>
                      <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="Email"
                    />
                  </div>
                  <div className="flex flex-col py-2 sm:col-span-2">
                      <lable className="uppercase text-sm py-2"> Message </lable>
                      <textarea className="border-2 rounded-lg p-3 border-gray-300 text-black" rows={10}></textarea>
                  </div>
                </div>

                    <button onClick={ () => alert('You have submited the form')} className=" hover:text-red-300 flex shadow-2xl bg-black rounded-xl justify-center items-center p-4 text-blue-400 mt-4   hover:scale-110 transition-all cursor-pointer"> Send Message </button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
