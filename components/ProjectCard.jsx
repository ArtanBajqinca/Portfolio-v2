import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Label } from "@/components/Label";
import Link from "next/link";

// TODO: optimize mobile view (image has some wierd right green line)

export const ProjectCard = ({
  title = "Coinnect Four",
  description = "A multiplayer Connect Four game with a unique coin theme, developed for my Android course final project.",
  imageSrc = "/images/programming-projects/Dummy.png",
  labels = [],
  link = "#",
}) => {
  return (
    <Link href={link} passHref>
      <div className="flex flex-col lg:flex-row bg-gray-700 w-[350px] lg:w-[550px] rounded-[10px] group duration-200 transform transition-transform hover:scale-[102%] cursor-pointer">
        {" "}
        {/* Image */}
        <div className="bg-lime-700  lg:w-full m-3 rounded-[10px] flex">
          <img
            className="rounded-[10px] border-2 border-gray-600 object-cover w-full"
            src={imageSrc}
            alt={`${title} project screenshot`}
          />
        </div>
        <div className="w-full ml-3 lg:ml-1 mr-3 mb-3 lg:mt-3 lg:my-3 lg:mr-3">
          {/* Title and arrow */}
          <div className="w-full flex justify-between">
            <div className="text-white text-[20px] font-avenir-heavy">
              {title}
            </div>
            <div className="hidden lg:block group-hover:translate-x-[7.5px] group-hover:-translate-y-1 transition-transform duration-200">
              <MdArrowOutward
                className="text-white"
                size={20}
                aria-label={`Open project ${title}`}
              />
            </div>
          </div>
          {/* Description */}
          <div className="w-full flex items-end mt-2 mb-3 pr-4">
            <div className="text-white text-[14px] font-avenir-light leading-[16px]">
              {description}
            </div>
          </div>
          {/* Labels */}
          <div className="w-full h-[30%] pr-6 lg:pr-0">
            <div className="flex flex-wrap gap-1.5">
              {labels.map((label, index) => (
                <Label key={index} text={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
