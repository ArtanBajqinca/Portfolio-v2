'use client';

import React, { useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import Projects from '/data/projects.json';
import { LogoText } from '@/components/LogoText';
import dynamic from 'next/dynamic';
import ProjectsDisplay from '@/components/ProjectsDisplay';
import { useTheme } from '@/components/ThemeProvider';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const reactLogoAnimation = require('/public/react_logo.json');
const javascriptLogoAnimation = require('/public/javascript_logo.json');

const ProjectSection = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const { theme } = useTheme();
  const whiteText = theme === 'light' ? '#1D1D1F' : '#FFFFFF';

  const handleFilterClick = (filter) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <div className="flex flex-col items-center bg-ui-section pt-10 sm:pt-10 md:pt-20 lg:pt-20 xl:pt-[110px] 2xl:pt-[50px]">
      <div className="text-ui-ink leading-0 lg:leading-8 gap-6 text-center font-sfpro-medium text-[18px] lg:text-[26px] text-base z-40 mb-8 tracking-wide">
        I SPECIALIZE IN
        <span className="font-sfpro-bold"> CROSS-PLATFORM</span>
        <br />
        <span>AND </span>
        <span className="font-sfpro-bold">NATIVE </span>
        APP DEVELOPMENT
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-4 lg:gap-y-2 mt-0 lg:mt-0 xl:mt-0 justify-items-evenly">
        <LogoText
          text="iOS"
          alt="iOS Logo"
          logo={
            <img className="lg:max-w-[50px] max-w-[40px] lg:ml-0 ml-[0px] drop-shadow-md" src="/images/ios.png" alt="Logo" />
          }
          color={whiteText}
        />
        <LogoText
          text="Android"
          className="ml-[-10px]"
          alt="Android Logo"
          logo={
            <img className="lg:max-w-[42px] max-w-[35px]" src="/images/android.png" alt="Logo" />
          }
          color="#3DDC84"
        />
        <LogoText
          text="React Native"
          classNameIcon="ml-[-6px]"
          alt="React Native Logo"
          logo={<Lottie animationData={reactLogoAnimation} />}
          color="#61DBFB"
        />
        <LogoText
          text="JavaScript"
          classNameIcon="ml-[-6px]"
          alt="JavaScript Logo"
          logo={<Lottie animationData={javascriptLogoAnimation} />}
          color="#f7E01D"
        />
        <LogoText
          text="TypeScript"
          alt="TypeScript Logo"
          className="ml-[-6px]"
          logo={
            <img className="lg:max-w-[45px] max-w-[35px]" src="/images/typescript.png" alt="Logo" />
          }
          color={whiteText}
        />
        <LogoText
          text="Expo"
          alt="Expo Logo"
          classNameIcon="ml-[-4px]"
          logo={
            <img
              className="lg:max-w-[46px] max-w-[42px] lg:ml-2 ml-[0px]"
              src="/images/expo.png"
              alt="Logo"
              style={{ filter: theme === 'light' ? 'none' : 'invert(100%)' }}
            />
          }
          color={whiteText}
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

export default ProjectSection;
