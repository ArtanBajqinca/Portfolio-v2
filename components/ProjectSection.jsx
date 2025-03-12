'use client';

import React, { useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import Projects from '/data/projects.json';
import { LogoText } from '@/components/LogoText';
import dynamic from 'next/dynamic';
import ProjectsDisplay from '@/components/ProjectsDisplay';

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
      <div className="text-white leading-0 lg:leading-8 gap-6 text-center font-avenir-book text-[18px] lg:text-[26px] text-base z-40 mb-8 tracking-wide">
        I SPECIALIZE IN
        <span className="font-avenir-black"> CROSS-PLATFORM</span>
        <br />
        <span className="">AND </span>
        <span className="font-avenir-black">NATIVE </span>
        APP DEVELOPMENT
      </div>

      {/* make 3x3 cols then 2x3 than 1x3 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-4 lg:gap-y-2 mt-0 lg:mt-0 xl:mt-0 justify-items-evenly">
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
          classNameIcon={'ml-[-6px]'}
          alt="JavaScript Logo"
          logo={<Lottie animationData={javascriptLogoAnimation} />}
          color="#f7E01D"
        />
        <LogoText
          text="TypeScript"
          alt="TypeScript Logo"
          className={'ml-[-6px]'}
          logo={
            <img
              className="lg:max-w-[45px] max-w-[35px]"
              src={'/images/typescript.png'}
              alt="Logo"
            />
          }
          color="#FFFFFF"
        />

        <LogoText
          text="Expo"
          alt="Expo Logo"
          classNameIcon={'ml-[-4px]'}
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

      <ProjectsDisplay
        activeFilters={activeFilters}
        handleFilterClick={handleFilterClick}
        projects={Projects}
      />
    </div>
  );
};

const FilterButton = ({ text, isActive, onClick }) => (
  <button
    className={`rounded-[100px] text-[13px] font-avenir-heavy px-4 py-[6px] hover:bg-green-800 hover:transition-colors transition-all duration-200 ${
      isActive ? 'bg-green-800 text-white' : 'bg-[#2D2D2D] text-gray-300'
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default ProjectSection;
