'use client';

import React, { useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import Projects from '/data/projects.json';
import { LogoText } from '@/components/LogoText';
import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Import animations
const reactLogoAnimation = require('/public/react_logo.json');
const javascriptLogoAnimation = require('/public/javascript_logo.json');

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
    <div className="flex flex-col items-center bg-gray-900 pt-10 sm:pt-10 md:pt-20 lg:pt-20 xl:pt-[110px] 2xl:pt-[50px] ">
      <div className="text-white leading-0 lg:leading-8 gap-6 text-center font-avenir-light text-[18px] lg:text-[26px] text-base z-40 mb-8 tracking-wide">
        I SPECIALIZE IN
        <span className="font-avenir-black"> CROSS-PLATTFORM</span>
        <br />
        <span className="">AND </span>
        <span className="font-avenir-black">NATIVE </span>
        APP DEVELOPMENT
      </div>

      {/* make 3x3 cols then 2x3 than 1x3 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-2 mt-4 lg:mt-0 xl:mt-0 justify-items-evenly">
        <LogoText
          text="iOS"
          alt="iOS Logo"
          logo={
            <img
              className="lg:max-w-[50px] max-w-[40px] lg:ml-0 ml-[0px]"
              src={'/images/ios.png'}
              alt="Logo"
            />
          }
          color="#FFFFFF"
        />
        <LogoText
          text="Android"
          className={'ml-[-10px]'}
          alt="Android Logo"
          logo={
            <img
              className="lg:max-w-[42px] max-w-[35px]"
              src={'/images/android.png'}
              alt="Logo"
            />
          }
          color="#3DDC84"
        />
        <LogoText
          text="React Native"
          classNameIcon={'ml-[-6px]'}
          alt="React Native Logo"
          logo={<Lottie animationData={reactLogoAnimation} />}
          color="#61DBFB"
        />
        <LogoText
          text="JavaScript"
          classNameIcon={'ml-[-8px]'}
          alt="JavaScript Logo"
          logo={<Lottie animationData={javascriptLogoAnimation} />}
          color="#f7E01D"
        />
        <LogoText
          text="TypeScript"
          alt="TypeScript Logo"
          className={'ml-[-10px]'}
          logo={
            <img
              className="max-w-[54px] max-h-[54px] lg:w-[54px] w-[42px] ml-[-3px]"
              src={'/images/typescript.gif'}
              alt="Logo"
            />
          }
          color="#FFFFFF"
        />

        <LogoText
          text="Expo"
          alt="Expo Logo"
          classNameIcon={'ml-[-12px]'}
          logo={
            <img
              className="lg:max-w-[46px] max-w-[42px] lg:ml-2 ml-[0px]"
              src={'/images/expo.png'}
              alt="Logo"
              style={{ filter: 'invert(100%)' }}
            />
          }
          color="#FFFFFF"
        />
      </div>

      <div className="text-white font-avenir-heavy text-[30px] lg:text-[50px] mt-[80px] lg:mt-[100px] z-40">
        Explore My Projects!
      </div>

      <div className="flex items-center justify-center mt-[20px] lg:mt-[40px] flex-wrap mx-6">
        <div className="flex gap-3 flex-wrap justify-center mt-3 sm:mt-0">
          <FilterButton
            text="APP"
            isActive={activeFilters.includes('app')}
            onClick={() => handleFilterClick('app')}
          />
          <FilterButton
            text="UI / UX"
            isActive={activeFilters.includes('ui')}
            onClick={() => handleFilterClick('ui')}
          />
          <FilterButton
            text="GRAPHIC DESIGN"
            isActive={activeFilters.includes('gd')}
            onClick={() => handleFilterClick('gd')}
          />
          <FilterButton
            text="WEBSITE"
            isActive={activeFilters.includes('web')}
            onClick={() => handleFilterClick('web')}
          />
          <FilterButton
            text="SYSTEM"
            isActive={activeFilters.includes('sw')}
            onClick={() => handleFilterClick('sw')}
          />
        </div>
      </div>
      <div className="m-3 flex flex-row flex-wrap gap-5 justify-center items-center mt-10 mb-20 w-full 4xl:px-[20vw] px-[5vw]">
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
            highlight={project.highlight}
            Repo={project.Repo}
            AppStore={project.AppStore}
            GooglePlay={project.GooglePlay}
          />
        ))}
      </div>
    </div>
  );
};

const FilterButton = ({ text, isActive, onClick }) => (
  <button
    className={`rounded-[100px] text-[13px] font-avenir-medium px-4 py-[6px] ${
      isActive ? 'bg-green-800 text-white' : 'bg-[#2D2D2D] text-gray-300'
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default ProjectSection;
