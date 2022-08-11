import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../public/projects/property.jpg";

const Projects = () => {
  return (
    <div className="border">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase">Project</p>
        <h2 className="py-4">What I have build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl  p-4 group hover:bg-gradient-to-r from-black to-blue-400">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={propertyImg}
              alt="/"
            />

            <div className="hidden group-hover:block  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-xl tracking-wider text-center">
                Property Finder
              </h3>
              <p className="tracking-wider text-center">React JS</p>
              <Link href="/">
                <p className="bg-red-400 text-center py-2 rounded-xl mt-2">
                  More Information
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
