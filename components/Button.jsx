import React from "react";
import Link from "next/link";

const Button = ({ text, bgColor = "bg-gray-600", link = "#" }) => {
  return (
    <Link href={link} passHref>
      <div
        className={`text-white py-2 px-4 ${bgColor} font-avenir-black tracking-wider rounded-md hover:bg-green-800 transition-all duration-200 hover:scale-105 text-xs cursor-pointer`}
      >
        {text.toUpperCase()}
      </div>
    </Link>
  );
};

export default Button;
