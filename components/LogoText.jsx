import React from "react";

export const LogoText = ({ text, logo, color }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-16">{logo}</div>
      <div
        className="font-avenir-heavy text-2xl ml-2 tracking-wide"
        style={{ color }}
      >
        {text}
      </div>
    </div>
  );
};
