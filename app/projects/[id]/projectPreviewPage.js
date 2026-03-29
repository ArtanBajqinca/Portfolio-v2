'use client';

import Projects from '@/data/projects.json';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { LabelBig } from '@/components/LabelBig';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectDetails({ params }) {
  const { id } = params;
  const project = Projects.find((project) => project.id === Number(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-ui-ink text-2xl font-sfpro-medium font-sfpro-black">
          Project not found
        </div>
      </div>
    );
  }

  const [mediaType, setMediaType] = useState('image');
  const [mediaSrc, setMediaSrc] = useState(
    `/images/programming-projects/project-cover/${project?.imageFileName}`
  );

  useEffect(() => {
    // Check if project has video
    if (project?.videoFileName) {
      setMediaType('video');
      setMediaSrc(`/videos/${project.videoFileName}`);
    } else {
      setMediaType('image');
      setMediaSrc(
        `/images/programming-projects/project-cover/${project.imageFileName}`
      );
    }
  }, [project]);

  const handleImageError = () => {
    setMediaSrc('/images/dummy-image.png');
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-ui-section">
      {/* Full-Screen Cover Image */}
      <div className="relative w-full h-[110vw] md:h-[80vh] lg:h-screen sm:my-0">
        {mediaType === 'video' ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-contain sm:object-cover z-0"
          />
        ) : (
          <Image
            src={mediaSrc}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            className="z-0"
            onError={handleImageError}
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--ui-section)]"></div>
        {/* Navbar Section */}
        <div className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/60 via-black/20 to-transparent pb-16">
          <div className="px-6 lg:px-16 mt-8 lg:mt-10">
            <Navbar overlay />
          </div>
        </div>
      </div>
      {/* Project Content Section */}
      <div className="flex flex-col items-start text-left text-ui-ink max-w-screen-lg mx-4 lg:mx-auto -mt-[60px] lg:-mt-20 z-30 px-4">
        <h1 className="text-4xl lg:text-6xl font-sfpro-bold">
          {project.coverTitle}
        </h1>
        <h2 className="text-2xl lg:text-3xl mt-6 font-sfpro-light">
          {project.subtitle}
        </h2>
        <p className="mt-6 text-[16spx] lg:text-xl leading-relaxed font-sfpro-light max-w-3xl">
          {project.descriptionLong}
        </p>
        {/* Labels Section */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2 mb-3 justify-start">
            {project.labels.map((label, index) => (
              <LabelBig key={index} text={label} />
            ))}
          </div>
          {/* Links Section */}
          <div className="flex flex-wrap gap-2 justify-start">
            {project.AppStore && (
              <LabelBig
                text="App Store"
                icon="/images/appstore.svg"
                link={project.AppStoreLink}
                bgColor="bg-ui-card"
                textColor="text-ui-ink"
                fontSize="font-sfpro-bold"
              />
            )}
            {project.GooglePlay && (
              <LabelBig
                text="Google Play"
                icon="/images/googleplay.svg"
                link={project.GooglePlayLink}
                bgColor="bg-ui-card"
                textColor="text-ui-ink"
                fontSize="font-sfpro-bold"
              />
            )}
            {project.Repo && (
              <LabelBig
                text="GitHub Repository"
                icon={FaGithub}
                link={project.Repo}
                bgColor="bg-ui-raised"
                textColor="text-ui-ink"
              />
            )}
            {project.Figma && (
              <LabelBig
                text="Figma"
                icon="/images/figma.svg"
                link={project.Figma}
                bgColor="bg-ui-card"
                textColor="text-ui-ink"
                fontSize="font-sfpro-bold"
              />
            )}
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-[1px] opacity-40 bg-ui-ink my-12"></div>
      </div>
      {/* Project pictures */}
      <div className="mb-10">
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:mx-[10%]">
            {project.images.map((media, index) => (
              <div key={index} className="relative w-full flex justify-center">
                {media.endsWith('.mp4') ? (
                  <video
                    src={`/videos/${media}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-contain"
                  />
                ) : (
                  <img
                    src={`/images/project-preview-images/${media}`}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
