import React from "react";
import { ProjectCard } from "./ProjectCard";
import Button from "./Button";
import Logo from "@/components/assets/Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="flex mb-4 lg:mb-0 h-8 lg:h-10 lg:mr-10 w-[230px]">
        <Link href="/" passHref>
          <Logo />
        </Link>
      </div>
      <div className="bg-gray-500 p-2 rounded-md">
        <div className="flex flex-row gap-5">
          <Button text={"Projects"} />
          <Button text={"About"} />
          <Button text={"Contact"} link="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
