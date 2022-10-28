import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
Link

const ProjectItem = ({ title , backgroundImg , projectUrl }) => {
  return (
    

        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl  p-4 group hover:bg-gradient-to-r from-black to-blue-400">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={backgroundImg}
              alt="/"
            />

            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-xl tracking-wider text-center">
                {title}
              </h3>
              <p className="tracking-wider text-center">React JS</p>
              <Link href={projectUrl}>
                <p className="bg-red-400 text-center py-2 rounded-xl mt-2 cursor-pointer">
                  More Information
                </p>
              </Link>
            </div>
          </div>
        
     
  )
}

export default ProjectItem