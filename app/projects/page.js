'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProjectsDisplay from '@/components/ProjectsDisplay';
import Footer from '@/components/Footer';
import Projects from '/data/projects.json';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
  const [activeFilters, setActiveFilters] = useState([]);
  const router = useRouter();

  // Handle filter toggle
  const handleFilterClick = (filter) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  // Handle project click to navigate to project detail page
  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <main className="flex flex-col justify-center min-h-screen bg-ui-section">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12">
          <div className="lg:mt-10 mt-8">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <ProjectsDisplay
          activeFilters={activeFilters}
          handleFilterClick={handleFilterClick}
          projects={Projects}
          onProjectClick={handleProjectClick}
        />
      </div>
      <Footer />
    </main>
  );
}
