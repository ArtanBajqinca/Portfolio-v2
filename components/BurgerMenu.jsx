import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Logo from "@/components/assets/Logo";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Burger Icon */}
      <div
        className="cursor-pointer flex flex-col justify-between w-12 h-12 bg-gray-500 rounded p-[14px]"
        onClick={toggleMenu}
      >
        <div className="h-[3px] bg-white rounded-lg"></div>
        <div className="h-[3px] bg-white rounded-lg"></div>
        <div className="h-[3px] bg-white rounded-lg"></div>
      </div>

      {/* Menu Items */}
      <nav
        className={`absolute top-[65px] right-0 bg-gray-500 rounded-lg shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="">
          <div className="flex flex-col items-start space-y-4 mx-4">
            <Link href="/" passHref></Link>
            <Button text="Projects" className="font-avenir-heavy" />
            <Button text="About" className="font-avenir-heavy" />
            <Button text="Contact" className="font-avenir-heavy mb-4" />
          </div>
        </div>
      </nav>
    </div>
  );
};
