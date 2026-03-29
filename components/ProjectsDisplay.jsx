import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';

const FILTERS = [
  { label: 'All',     value: null  },
  { label: 'App',     value: 'app' },
  { label: 'UI / UX', value: 'ui'  },
  { label: 'Website', value: 'web' },
  { label: 'System',  value: 'sw'  },
];

const ProjectsDisplay = ({ activeFilters, handleFilterClick, projects }) => {
  const filtered = projects.filter((p) =>
    activeFilters.length > 0 ? activeFilters.includes(p.type) : true
  );

  const allActive = activeFilters.length === 0;

  const handleAll = () => {
    // Clear all filters
    activeFilters.forEach((f) => handleFilterClick(f));
  };

  return (
    <>
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="pt-16 lg:pt-24 pb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-green-800 font-sfpro-medium text-[12px] tracking-[0.2em] uppercase mb-3">
              Work
            </p>
            <h1 className="text-[40px] lg:text-[64px] font-sfpro-bold text-ui-ink leading-[0.95] tracking-tight">
              My Projects.
            </h1>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <button
              onClick={handleAll}
              className={`rounded-full text-[13px] font-sfpro-medium px-4 py-1.5 transition-all duration-200 border ${
                allActive
                  ? 'bg-green-800 text-white border-green-800'
                  : 'bg-ui-raised text-ui-ink-2 border-transparent hover:border-ui-elevated'
              }`}
            >
              All
            </button>
            {FILTERS.slice(1).map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilterClick(f.value)}
                className={`rounded-full text-[13px] font-sfpro-medium px-4 py-1.5 transition-all duration-200 border ${
                  activeFilters.includes(f.value)
                    ? 'bg-green-800 text-white border-green-800'
                    : 'bg-ui-raised text-ui-ink-2 border-transparent hover:border-ui-elevated'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Result count ───────────────────────────────────── */}
        <div className="pb-6 border-b border-ui-elevated">
          <p className="text-ui-ink-3 font-sfpro text-[13px]">
            {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            {activeFilters.length > 0 && ' found'}
          </p>
        </div>
      </div>

      {/* ── Grid ───────────────────────────────────────────── */}
      <motion.div
        layout
        className="flex flex-row flex-wrap gap-8 lg:gap-10 justify-center items-start content-start mt-8 mb-40 w-full px-4 min-h-[900px] max-w-[1280px] mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                imageFileName={project.imageFileName}
                labels={project.labels}
                type={project.type}
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

export default ProjectsDisplay;
