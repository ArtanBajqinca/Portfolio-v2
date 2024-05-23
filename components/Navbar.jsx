import React from "react";
import { ProjectCard } from "./ProjectCard";
import Button from "./Button";
import Logo from "@/components/assets/Logo";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="mr-12 h-10">
        {/* TODO: Make logo clickable */}
        <Logo />
      </div>
      <div className="bg-gray-500 p-4 rounded-md">
        <div className="flex flex-row gap-6">
          <Button text={"Projects"} />
          <Button text={"About"} />
          <Button text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
