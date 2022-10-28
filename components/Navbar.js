import Image from "next/image";
import Link from "next/link";
import React, { useState , useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/Gi";
import {
  AiOutlineCloseCircle,
  AiOutlineMail,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/Ai";
import { FaLine } from "react-icons/Fa";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [shadow, setShadow] = useState(false);


  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      }else {
        setShadow(false)
      }
    } 
    window.addEventListener('scroll' , handleShadow )
  },[])



  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : " fixed w-full h-20  z-[100] "}>
      <div className="flex w-full h-full justify-between items-center px-2 2xl:16">
        <Image
          src="/../public/assets/bomLogo.png"
          alt=""
          width={80}
          height={80}
        />

        <div>
          <ul className="hidden md:flex space-x-5  ">
            <Link href="/">
              <li className="text-sm xl:text-2xl capitalize rouned-full hover:translate-y-[-20%] duration-500 hover:border-b hover:border-red-300 cursor-pointer p-2 ">
                {" "}
                Home{" "}
              </li>
            </Link>
            <Link href="/#about">
              <li className=" text-sm xl:text-2xl  capitalize hover:translate-y-[-20%] duration-500 hover:border-b hover:border-red-300 cursor-pointer p-2">
                {" "}
                About Me{" "}
              </li>
            </Link>
            <Link href="/#skills">
              <li className="text-sm xl:text-2xl capitalize hover:translate-y-[-20%] duration-500 hover:border-b hover:border-red-300 cursor-pointer p-2">
                {" "}
                Expericense{" "}
              </li>
            </Link>
            <Link href="/#projects">
              <li className="text-sm xl:text-2xl capitalize hover:translate-y-[-20%] duration-500 hover:border-b hover:border-red-300 cursor-pointer p-2">
                {" "}
                Portfolio{" "}
              </li>
            </Link>
            <Link href="/#contact">
              <li className="text-sm  xl:text-2xl capitalize hover:translate-y-[-20%] duration-500 hover:border-b hover:border-red-300 cursor-pointer p-2">
                {" "}
                Contact{" "}
              </li>
            </Link>
          </ul>
          <div onClick={handleToggle} className="md:hidden  ">
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          toggle
            ? "bg-white/50 fixed h-screen w-full left-0 top-0 md:hidden"
            : ""
        }
      >
        <div
          className={
            toggle
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[20%] bg-black h-screen p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[20%] bg-black h-screen p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/bomLogo.png "
              alt=""
              width={100}
              height={100}
            />

            <div
              onClick={handleToggle}
              className="shadow-gray-500 shadow-lg rounded-full  "
            >
              <AiOutlineCloseCircle size={40} />
            </div>
          </div>

          <div className="text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-3 border-b-gray-500 border-b capitalize">
            <p className=" w-[80%] md:w-[100%] py-3">
              Let me create your website
            </p>
          </div>

          <div className="py-2 flex flex-col  ">
            <ul>
              <Link href="/">
                <li className="tracking-wide  py-3"> Home </li>
              </Link>
              <Link href="/">
                <li className="tracking-wider py-3"> About Me </li>
              </Link>
              <Link href="/">
                <li className="tracking-wider py-3"> Expericense</li>
              </Link>
              <Link href="/">
                <li className="tracking-wider py-3"> Portfolio </li>
              </Link>
              <Link href="/">
                <li className="tracking-wider pt-3"> Contact </li>
              </Link>
            </ul>

            <div className=" text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  border-b-gray-500 border-b py-2 ">
              <p>Contact me at </p>
            </div>

            <div className="flex items-center justify-between mt-1 w-full sm:w-[80%]">
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
    </div>
  );
};

export default Navbar;
