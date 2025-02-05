import React from "react";
import Image from "next/image";

export const LabelIcon = ({ icon: Icon, label, bgColor, textColor }) => {
  return (
    <div
      className={`inline-flex px-2 py-[2px] max-h-[18px] font-avenir-heavy ${bgColor} ${textColor} rounded-full text-[10px] justify-center items-center`}
    >
      {typeof Icon === "function" ? (
        <Icon className="mr-1" size={13} />
      ) : (
        <div className="mr-1">
          <Image src={Icon} alt={label} width={13} height={13} />
        </div>
      )}
      {label}
    </div>
  );
};
