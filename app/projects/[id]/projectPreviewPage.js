"use client";

import Projects from "@/data/projects.json";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { LabelBig } from "@/components/LabelBig";
import { BurgerMenu } from "@/components/BurgerMenu";
import Logo from "@/components/assets/Logo";
import { useState } from "react";

export default function ProjectDetails({ params }) {
  const { id } = params;
  const project = Projects.find((project) => project.id === Number(id));

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-2xl font-bold">Project not found</div>
      </div>
    );
  }

  const [imageSrc, setImageSrc] = useState(
    `/images/programming-projects/project-cover/${project?.imageFileName}`
  );

  const handleImageError = () => {
    setImageSrc("/images/programming-projects/project-cover/dummy-image.png");
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-900">
      {/* Full-Screen Cover Image */}
      <div className="relative w-full h-[55vh] md:h-[80vh] lg:h-screen">
        {" "}
        {/* Responsive height */}
        <Image
          src={imageSrc}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
          onError={handleImageError}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
        {/* Navbar Section */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="flex justify-center mt-10">
            <div className="w-[928.75px]">
              {/* Full Navbar for larger screens */}
              <div className="hidden md:block">
                <Navbar />
              </div>
              {/* Sticky Logo and Burger Menu for mobile screens */}
              <div className="md:hidden flex items-center justify-between px-4">
                {/* Centered Logo */}
                <div className="fixed left-1/2 transform -translate-x-1/2 top-7 z-30 w-[190px] py-4">
                  <Link href="/" passHref>
                    <Logo />
                  </Link>
                </div>
                {/* Right-aligned Burger Menu */}
                <div className="fixed top-4 right-8 z-30 py-4">
                  <BurgerMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Content Section */}
      <div className="flex flex-col items-start text-left text-white pb-12 max-w-screen-lg mx-4 lg:mx-auto -mt-[60px] lg:-mt-20 z-30 px-4">
        <h1 className="text-4xl lg:text-6xl font-avenir-heavy">
          {project.coverTitle}
        </h1>
        <h2 className="text-2xl lg:text-3xl mt-6 font-avenir-light">
          {project.subtitle}
        </h2>
        <p className="mt-6 text-lg lg:text-xl leading-relaxed font-avenir-light max-w-3xl">
          {project.descriptionLong}
        </p>
        {/* Labels Section */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2 mb-6 justify-start">
            {project.labels.map((label, index) => (
              <LabelBig key={index} text={label} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
