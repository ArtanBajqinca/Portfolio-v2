import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';

const ProjectsDisplay = ({ activeFilters, handleFilterClick, projects }) => {
  return (
    <>
      <div className="text-ui-ink font-sfpro-bold text-[30px] lg:text-[50px] mt-[80px] lg:mt-[100px] z-40">
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
      <motion.div layout className="m-3 flex flex-row flex-wrap gap-5 justify-center items-start content-start mt-10 mb-20 w-full 4xl:px-[20vw] px-[5vw] min-h-[900px]">
        <AnimatePresence mode="popLayout">
          {projects
            .filter((project) =>
              activeFilters.length > 0
                ? activeFilters.includes(project.type)
                : true
            )
            .map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard
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
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const FilterButton = ({ text, isActive, onClick }) => (
  <button
    className={`rounded-[100px] text-[13px] font-sfpro-bold px-4 py-[6px] hover:bg-green-800 hover:text-white hover:transition-colors transition-all duration-200 ${
      isActive ? 'bg-green-800 text-white' : 'bg-ui-raised text-ui-ink-2'
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default ProjectsDisplay;
