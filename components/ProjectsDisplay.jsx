import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';

const ProjectsDisplay = ({ activeFilters, handleFilterClick, projects }) => {
  return (
    <>
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
        {projects
          .filter((project) =>
            activeFilters.length > 0
              ? activeFilters.includes(project.type)
              : true
          )
          .map((project, index) => (
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
    </>
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

export default ProjectsDisplay;
