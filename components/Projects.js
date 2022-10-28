import Image from "next/image";
import Link from "next/link";
import React from "react";

import propertyImg from "../public/projects/property.jpg"
import crytoImg from "../public/projects/crypto.jpg"
import netflexImg from "../public/projects/netflix.jpg"
import twitchImg from "../public/projects/twitch.jpg"

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className=" px-16">

      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className=" text-center text-2xl bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Project</p>
        <h2 className=" text-center py-4">What I have build</h2>

        <div className="grid md:grid-cols-2 gap-8">

                <ProjectItem
                  title="Property Fider"
                  backgroundImg={propertyImg}
                  projectUrl="property"
                />
              

              
                <ProjectItem
                  title="Crypto Application"
                  backgroundImg={crytoImg}
                  projectUrl="property"
                />
              

              
                <ProjectItem
                  title="Netflix"
                  backgroundImg={netflexImg}
                  projectUrl="property"
                />
              
                <ProjectItem
                  title="Twitch"
                  backgroundImg={twitchImg}
                  projectUrl="property"
                />
        </div>
      </div>
    </div>
  );
};

export default Projects;
