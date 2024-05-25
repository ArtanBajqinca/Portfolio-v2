import React from "react";
import Link from "next/link";

const Button = ({ text, bgColor = "bg-gray-600", link = "#" }) => {
  return (
    <Link href={link} passHref>
      <div
        className={`text-white py-1.5 px-3.5 ${bgColor} font-avenir-black tracking-[0.08rem] rounded-md hover:bg-green-800 transition-all duration-200 text-[10px] lg:text-[12px] cursor-pointer`}
      >
        {text.toUpperCase()}
      </div>
    </Link>
  );
};

export default Button;
