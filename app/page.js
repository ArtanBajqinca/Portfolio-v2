import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import programmingProjects from "/data/programming-projecs.json";
import Navbar from "@/components/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/Button";
import SwedenMap from "@/components/assets/SwedenMap";
import Link from "next/link";

// move to file?
const NameComponent = ({ text, additionalStyles = "" }) => (
  <div
    className={`text-white font-avenir-black text-[50px] lg:text-[80px] ${additionalStyles}`}
  >
    {text}
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col justify-center ">
      {/* Navbar Section */}
      {/* Hero Section */}
      <div className="flex flex-row flex-wrap justify-center ">
        <div className="flex flex-col mx-12">
          <div className="mt-10">
            <Navbar />
          </div>
          <div className=" flex flex-row flex-wrap-reverse justify-center">
            {/* Left Section */}
            <div className="flex pt-10">
              <div className="mt-10 lg:mt-16 z-10">
                <NameComponent text="Artan" />
                <NameComponent
                  text="Bajqinca."
                  additionalStyles="mt-[-25px] lg:mt-[-40px] ml-[-4px]"
                />
                <div className="w-[60px] h-[8px] bg-green-800"></div>
                {/* Linkedin Github icons */}
                <div className="flex flex-row gap-4 mt-10 lg:mt-16 ml-[-1.5px]">
                  <Link href="https://www.linkedin.com/in/artanbajqinca/">
                    <FaLinkedin
                      color="white"
                      size={26}
                      className="size-5 lg:size-7 hover:scale-[113%] transition-transform duration-300 ease-in-out"
                    />
                  </Link>
                  <Link href="https://github.com/ArtanBajqinca">
                    <FaGithub
                      color="white"
                      size={26}
                      className="size-5 lg:size-7 hover:scale-[113%] transition-transform duration-300 ease-in-out"
                    />
                  </Link>
                </div>
              </div>
              {/* Portrait */}
              <div className="flex flex-col justify-end ml-[-120px] lg:ml-[-200px] z-0 w-[240px] lg:w-[430px]">
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
            <div className="flex flex-row px-0 lg:px-0 lg:pl-[80px] pt-16 lg:pt-0">
              <div className="flex flex-col justify-center h-full ">
                <div className="text-white font-avenir-heavy text-[30px] lg:text-[38px] leading-[2.2rem] lg:leading-[2.5rem]">
                  Programmer and
                  <br />
                  Graphic designer
                  <br />
                  based in Sweden
                </div>
                <div className="text-white font-avenir-book text-[16px] lg:text-[18px] my-6 leading-tight">
                  Designing by day, coding by night.
                  <br />
                  Let's bring ideas to life.
                </div>
                <div className="flex">
                  <Button
                    text="GET IN TOUCH"
                    bgColor="bg-green-800"
                    className="text-[12px] lg:py-1.7 "
                  />
                </div>
              </div>
              <div className="w-[100px] lg:w-[150px] flex flex-row ml-[-40px] lg:ml-[-90px]">
                <SwedenMap />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="w-screen h-screen flex justify-center bg-gray-900">
        <div className="text-white font-avenir-black text-[50px] lg:text-20 mt-20 ">
          See my projects!
        </div>
      </div>
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
