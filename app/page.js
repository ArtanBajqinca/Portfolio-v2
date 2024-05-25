import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import programmingProjects from "/data/programming-projecs.json";
import Navbar from "@/components/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

// move to file?
const NameComponent = ({ text, additionalStyles = "" }) => (
  <div
    className={`text-white font-avenir-black text-[80px] ${additionalStyles}`}
  >
    {text}
  </div>
);

export default function Home() {
  return (
    <div>
      <div className="mx-20">
        {/* Navbar Section */}
        <div className="w-full flex justify-center mt-10">
          <div className="w-full mx-20">
            <Navbar />
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className=" w-full h-[500px] flex">
            <div className=" ml-20 mt-16 z-10">
              <NameComponent text="Artan" />
              <NameComponent
                text="Bajqinca."
                additionalStyles="mt-[-40px] ml-[-4px]"
              />
              <div className="w-[60px] h-[8px] bg-green-800"></div>
              <div className="flex flex-row gap-4 mt-16 ml-[-1.5px]">
                <FaLinkedin color="white" size={26} />
                <FaGithub color="white" size={26} />
              </div>
            </div>
            <div className="flex flex-col justify-end w-[500px] ml-[-220px] z-0">
              <Image
                src="/_next/static/media/Portrait.png"
                alt="Artan Bajqinca"
                width={430}
                height={0}
                objectFit="contain"
                className="self-center"
              />
            </div>
          </div>
          {/* Right Section */}
          <div className=" w-full h-[500px]"></div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="w-screen h-screen flex justify-center items-center bg-gray-900"></div>
    </div>
  );
}

{
  /* <div className="w-screen h-screen flex justify-center items-center"> */
}
{
  /* <div className="w-full m-3 flex flex-wrap gap-5 justify-center items-center"> */
}
{
  /* {programmingProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              labels={project.labels}
              link={project.link}
            />
          ))} */
}
{
  /* </div> */
}
