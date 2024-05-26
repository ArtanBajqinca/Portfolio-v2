import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import programmingProjects from "/data/programming-projecs.json";
import Navbar from "@/components/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/Button";
import SwedenMap from "@/components/assets/SwedenMap";

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
      <div className="mx-20 bg-red-100 ">
        {/* Navbar Section */}
        <div className="w-full flex justify-center mt-10">
          <div className="w-full">
            <Navbar />
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-row flex-wrap bg-red-200 ">
          {/* Left Section */}
          <div className="h-[500px] flex bg-red-300 max-w-[50%]">
            <div className="mt-16 z-10">
              <NameComponent text="Artan" />
              <NameComponent
                text="Bajqinca."
                additionalStyles="mt-[-40px] ml-[-4px]"
              />
              <div className="w-[60px] h-[8px] bg-green-800"></div>
              {/* Linkedin Github icons */}
              <div className="flex flex-row gap-4 mt-16 ml-[-1.5px]">
                <FaLinkedin color="white" size={26} />
                <FaGithub color="white" size={26} />
              </div>
            </div>
            {/* Portrait */}
            <div className="flex flex-col justify-end ml-[-200px] z-0">
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
          <div className="flex flex-row bg-red-400">
            {/* Right Section */}
            <div className="flex flex-col justify-center h-full  ml-20 bg-red-500">
              <div className="text-white font-avenir-heavy text-[38px] leading-[2.5rem]">
                Programmer and
                <br />
                Graphic designer
                <br />
                based in Sweden
              </div>
              <div className="text-white font-avenir-book text-[18px] my-6 leading-tight">
                Designing by day, coding by night.
                <br />
                Let's bring ideas to life.
              </div>
              <div className="flex">
                <Button
                  text="GET IN TOUCH"
                  bgColor="bg-green-800"
                  className="lg:text-[13px] lg:py-2 "
                />
              </div>
            </div>
            <div className=" flex w-[150px] ml-[-90px]">
              <SwedenMap />
            </div>
          </div>
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
