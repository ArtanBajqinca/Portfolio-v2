import React from "react";
import { FaGithub } from "react-icons/fa";

export const LabelIcon = () => {
  return (
    <div className="inline-flex px-2 py-0.5 bg-gray-600 text-white rounded-full text-[10px] justify-center items-center">
      <FaGithub className="mr-1" size={13} />
      Repository
    </div>
  );
};
