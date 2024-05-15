import React from "react";

export const ProjectCard = () => {
  return (
    <div className="flex bg-gray-700 w-[550px] h-[170px] rounded-[10px]">
      <div className="bg-lime-700 w-full m-4 rounded-[10px]"></div>
      <div className="bg-red-600 w-full my-4 mr-4">
        <div className="bg-lime-700 w-full h-[20%] flex justify-end">
          <div className="bg-lime-600 w-7 h-full"></div>
        </div>
        <div className="bg-lime-800 w-full h-[50%]"></div>
        <div className="bg-lime-900 w-full h-[30%]"></div>
      </div>
    </div>
  );
};
