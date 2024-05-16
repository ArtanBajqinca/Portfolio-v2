import React from "react";
import { Md10K, MdArrowOutward } from "react-icons/md";
import { Label } from "@/components/Label";

export const ProjectCard = () => {
  return (
    <div className="flex bg-gray-700 w-[550px] h-[170px] rounded-[10px] group duration-200 transform transition-transform hover:scale-[102%]">
      {/* Image */}
      <div className="bg-lime-700 w-full m-4 rounded-[10px]">
        <img
          className="rounded-[10px]"
          src="/images/programming-projects/Dummy.png"
          alt="dummy image"
        />
      </div>
      <div className="w-full my-4 mr-4">
        {/* Title and arrow */}
        <div className="w-full flex justify-between">
          <div className="text-white text-[20px] font-avenir-heavy">
            Coinnect Four
          </div>
          <div className="group-hover:translate-x-[7.5px] group-hover:-translate-y-1 transition-transform duration-200">
            <MdArrowOutward className="text-white" size={20} />
          </div>
        </div>
        {/* Description */}
        <div className="w-full flex items-end mt-1 mb-3">
          <div className="text-white text-[14px] font-avenir-light leading-[16px]">
            A multiplayer Connect Four game with a unique coin theme, developed
            for my Android course final project.
          </div>
        </div>
        {/* Labels */}
        <div className="w-full h-[30%]">
          <div className="flex flex-wrap gap-1.5">
            <Label text="Android" />
            <Label text="Kotlin" />
            <Label text="Jetpack Compose" />
            <Label text="Firebase" />
            <Label text="Multiplayer" />
            <Label text="App development" />
          </div>
        </div>
      </div>
    </div>
  );
};
