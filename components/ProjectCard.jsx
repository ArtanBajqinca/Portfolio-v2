import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Label } from "@/components/Label";
import { LabelIcon } from "./LabelIcon";
import Link from "next/link";

export const ProjectCard = ({
  title = "Coinnect Four",
  description = "A multiplayer Connect Four game with a unique coin theme, developed for my Android course final project.",
  imageSrc = "/images/programming-projects/Dummy.png",
  labels = [],
  link = "#",
}) => {
  return (
    <Link href={link} passHref>
      <div className="flex flex-col lg:flex-row bg-gray-700 w-[300px] lg:w-[600px] max-w-[600px] rounded-[10px] group duration-200 transform transition-transform hover:scale-[102%] cursor-pointer">
        {/* Image */}
        <div className="m-3 rounded-[10px]">
          <img
            className="rounded-[10px] border-2 border-gray-600 w-[800px] object-cover"
            src={imageSrc}
            alt={`${title} project screenshot`}
          />
        </div>
        <div className="mx-4 lg:mr-5 lg:my-5 lg:ml-2 flex flex-col justify-between">
          {/* Title and arrow */}
          <div className=" flex justify-between">
            <div className="text-white text-[21px] lg:text-[23px] font-avenir-heavy w-full">
              {title}
            </div>
            <div className="lg:group-hover:translate-x-[8px] lg:group-hover:-translate-y-2 lg:transition-transform duration-200">
              <MdArrowOutward
                className="text-white"
                size={20}
                aria-label={`Open project ${title}`}
              />
            </div>
          </div>
          {/* Description */}
          <div className=" text-white text-[14px] mt-1 mb-3 lg:mt-1 lg:text-[15px] font-avenir-light leading-[18px] lg:mb-4">
            {description}
          </div>
          {/* Labels */}
          <div className="">
            <div className="flex flex-wrap gap-1.5 mb-4 lg:mb-0">
              {labels.map((label, index) => (
                <Label key={index} text={label} />
              ))}
              <LabelIcon />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
