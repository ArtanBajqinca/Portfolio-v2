"use client";

import React, { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import Projects from "/data/projects.json";
import reactLogoAnimation from "/public/react_logo.json";
import javascriptLogoAnimation from "/public/javascript_logo.json";
import Lottie from "lottie-react";
import { LogoText } from "@/components/LogoText";

const ProjectSection = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  // Handle filter toggle
  const handleFilterClick = (filter) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 sm:pt-10 md:pt-20 lg:pt-20 xl:pt-[110px] 2xl:pt-[50px] ">
      <div className="text-white gap-6 text-center font-avenir-light text-[10px] lg:text-xl z-40 mb-4 tracking-wide">
        I SPECIALIZE IN<span className="font-avenir-black"> APP</span> AND
        <br />
        <span className="font-avenir-black">SOFTWARE </span>DEVELOPMENT USING:
      </div>
      <div className="flex flex-row items-center gap-8 justify-center">
        <LogoText
          text="React Native"
          alt="React Native Logo"
          logo={<Lottie animationData={reactLogoAnimation} />}
          color="#61DBFB"
        />
        <LogoText
          text="JavaScript"
          alt="JavaScript Logo"
          logo={<Lottie animationData={javascriptLogoAnimation} />}
          color="#f7E01D"
        />
        <LogoText
          text="PHP"
          alt="PHP Logo"
          logo={<img src={"/images/php_logo.gif"} alt="Logo" />}
          color="#6082BB"
        />
      </div>
      <div className="text-white font-avenir-heavy text-[30px] lg:text-[50px] mt-[10px] lg:mt-[100px] z-40">
        Explore My Projects!
      </div>
      <div className="flex items-center justify-center mt-[40px] lg:mt-[40px] flex-wrap mx-6">
        <div className="text-white font-avenir-medium text-[22px] mr-[-5px] mb-0 sm:mb-0">
          Quick filter:
        </div>
        <div className="flex gap-3 scale-[90%] mt-3 sm:mt-0">
          <FilterButton
            text="APP"
            isActive={activeFilters.includes("app")}
            onClick={() => handleFilterClick("app")}
          />
          <FilterButton
            text="SOFTWARE"
            isActive={activeFilters.includes("sw")}
            onClick={() => handleFilterClick("sw")}
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
          <FilterButton
            text="UI / UX"
            isActive={activeFilters.includes("ui")}
            onClick={() => handleFilterClick("ui")}
          />
        </div>
      </div>
      <div className="m-3 flex flex-row flex-wrap gap-5 justify-center items-center mt-10 mb-20 w-full px-[5vw]">
        {Projects.filter((project) =>
          activeFilters.length > 0 ? activeFilters.includes(project.type) : true
        ).map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            imageFileName={project.imageFileName}
            labels={project.labels}
            type={project.type}
          />
        ))}
      </div>
    </div>
  );
};

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

export default ProjectSection;
