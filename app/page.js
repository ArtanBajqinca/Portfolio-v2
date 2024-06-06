"use client";

import React, { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import Projects from "/data/projects.json";
import Navbar from "@/components/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/Button";
import SwedenMap from "@/components/assets/SwedenMap";
import Divider from "@/components/assets/Divider";
import Link from "next/link";

export default function Home() {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (filter) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <div className="flex flex-col justify-center">
      {/* Navbar Section */}
      {/* Hero Section */}
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12">
          <div className="mt-10">
            <Navbar />
          </div>
          <div className="flex flex-row flex-wrap-reverse justify-center">
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
                <div className="flex flex-row gap-4 mt-8 lg:mt-16 ml-[-1.5px]">
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
                  className="self-center"
                />
              </div>
            </div>
            {/* Right Section */}
            <div className="flex flex-row px-0 lg:px-0 lg:pl-[80px] pt-16 lg:pt-0">
              <div className="flex flex-col justify-center h-full">
                <div className="text-white font-avenir-heavy text-[30px] lg:text-[38px] leading-[2.2rem] lg:leading-[2.5rem]">
                  Developer and
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
                    className="text-[12px] lg:py-1.7 hover:bg-[#6E8F6B]"
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
      <div className="mt-[-2vh] lg:mt-[-4vh] z-30">
        <Divider />
      </div>
      <div className="flex flex-col items-center bg-gray-900 pt-4">
        <div className="text-white font-avenir-black text-[30px] lg:text-[50px] mt-[10px] lg:mt-[-30px] z-40">
          See my projects!
        </div>
        <div className="flex items-center justify-center mt-[40px] lg:mt-[80px] flex-wrap mx-6">
          <div className="text-white font-avenir-medium text-[22px] mr-[-5px]">
            Quick filter:
          </div>
          <div className="flex gap-3 scale-[90%]">
            <FilterButton
              text="APP"
              isActive={activeFilters.includes("app")}
              onClick={() => handleFilterClick("app")}
            />
            <FilterButton
              text="WEBSITE"
              isActive={activeFilters.includes("web")}
              onClick={() => handleFilterClick("web")}
            />
            <FilterButton
              text="GRAPHIC DESIGN"
              isActive={activeFilters.includes("gd")}
              onClick={() => handleFilterClick("gd")}
            />
          </div>
        </div>
        <div className="m-3 flex flex-row flex-wrap gap-5 justify-center items-center mt-10 mb-20 w-full px-[5vw]">
          {Projects.filter((project) =>
            activeFilters.length > 0
              ? activeFilters.includes(project.type)
              : true
          ).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              labels={project.labels}
              link={project.link}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const NameComponent = ({ text, additionalStyles = "" }) => (
  <div
    className={`text-white font-avenir-black text-[50px] lg:text-[80px] ${additionalStyles}`}
  >
    {text}
  </div>
);

const FilterButton = ({ text, isActive, onClick }) => (
  <button
    className={`rounded-[100px] text-[13px] font-avenir-heavy px-4 py-2 ${
      isActive ? "bg-green-800 text-white" : "bg-gray-700 text-gray-300"
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);
