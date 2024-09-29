import React from "react";

export const LabelBig = ({ text }) => {
  return (
    <div className="inline-flex px-3 py-1 bg-green-900 text-green-600 font-avenir-medium rounded-full text-[14px] justify-center items-center">
      {text}
    </div>
  );
};
