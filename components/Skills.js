import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full h-full p-2 py-16     ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center  ">
        <p className=" text-2xl py-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</p>
        <h1> Tech Stack </h1>
      </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in transition">
            <div className="grid grid-cols-2 gap-4 justity-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> HTML </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in transition">
            <div className="grid grid-cols-2 gap-4 justity-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> CSS </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in transition">
            <div className="grid grid-cols-2 gap-4 justity-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> JAVASCRIPT </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in transition">
            <div className="grid grid-cols-2 gap-4 justity-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> REACTJS </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in transition">
            <div className="grid grid-cols-2 gap-4 justity-center items-center ">
              <div className="m-auto bg-slate-50">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> NEXTJS </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in transition">
            <div className="grid grid-cols-2 gap-4 justity-center items-center ">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> TAILWINDCSS </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in transition">
            <div className="grid grid-cols-2 gap-4 justity-center items-center ">
              <div className="m-auto ">
                <Image
                  src="/../public/assets/skills/node.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> NODEJS </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in transition">
            <div className="grid grid-cols-2 gap-4 justity-center items-center ">
              <div className="m-auto bg-slate-50">
                <Image
                  src="/../public/assets/skills/github1.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3> GITHUB </h3>
              </div>
            </div>
          </div>
          
        </div>
        
      
    </div>
  );
};

export default Skills;
