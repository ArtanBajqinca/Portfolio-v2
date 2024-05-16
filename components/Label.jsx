import React from "react";

export const Label = ({ text }) => {
  return (
    <div className="inline-flex px-2 py-0.5 bg-green-900 text-green-600 rounded-full text-[10px] justify-center items-center">
      {text}
    </div>
  );
};
