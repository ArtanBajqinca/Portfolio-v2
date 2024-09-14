import Projects from "@/data/projects.json";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Label } from "@/components/Label";

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

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-900">
      {/* Full-Screen Cover Image */}
      <div className="relative w-full h-screen">
        <Image
          src={`/images/programming-projects/project-cover/${project.imageFileName}`}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
        {/* Navbar Section */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="flex justify-center mt-10">
            <div className="w-[928.75px]">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      {/* Project Content Section */}
      <div className="flex flex-col items-center text-center text-white pb-12 max-w-screen-lg mx-auto -mt-20 z-30">
        <h1 className="text-4xl lg:text-6xl font-bold">{project.title}</h1>
        <h2 className="text-2xl lg:text-3xl mt-2 font-semibold">
          {project.subtitle}
        </h2>
        <p className="mt-6 text-lg lg:text-xl leading-relaxed max-w-3xl">
          {project.descriptionLong}
        </p>

        {/* Labels Section */}
        <div className="mt-10 scale-150">
          <div className="flex flex-wrap gap-1.5 mb-4 lg:mb-0">
            {project.labels.map((label, index) => (
              <Label key={index} text={label} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
