"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/Button";
import SwedenMap from "@/components/assets/SwedenMap";
import Divider from "@/components/assets/Divider";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import { Typewriter } from "react-simple-typewriter";
import { LogoText } from "@/components/LogoText";
import reactLogoAnimation from "/public/react_logo.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      {/* Navbar Section */}
      {/* Hero Section */}
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12">
          <div className="mt-10">
            <Navbar />
          </div>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-[10px] lg:mt-[10px]">
            {/* Left Section */}
            <div className="flex">
              <div className="mt-10 lg:mt-16 z-10">
                <NameComponent text="Artan" />
                <NameComponent
                  text="Bajqinca."
                  additionalStyles="mt-[-25px] lg:mt-[-40px] ml-[-4px]"
                />
                <div className="w-[60px] h-[8px] bg-green-800"></div>
                {/* LinkedIn and GitHub icons */}
                <div className="flex flex-row gap-4 mt-8 lg:mt-16 ml-[-1.5px]">
                  <Link href="https://www.linkedin.com/in/artanbajqinca/">
                    <FaLinkedin
                      color="white"
                      size={26}
                      className="size-5 lg:size-7 hover:scale-[113%] transition-transform duration-300 ease-in-out"
                    />
                  </Link>
                  <Link href="https://github.com/ArtanBajqinca">
                    <FaGithub
                      color="white"
                      size={26}
                      className="size-5 lg:size-7 hover:scale-[113%] transition-transform duration-300 ease-in-out"
                    />
                  </Link>
                </div>
              </div>
              {/* Portrait */}
              <div className="flex flex-col justify-end ml-[-120px] lg:ml-[-200px] z-0 w-[240px] lg:w-[350px] mb-[-5px] lg:mb-[-15px]">
                <Image
                  src="/images/Portrait.png"
                  alt="Artan Bajqinca"
                  width={430}
                  height={0}
                  className="self-center"
                />
              </div>
            </div>
            {/* Right Section */}
            <div className="flex flex-row px-0 lg:px-0 lg:pl-[80px] pt-16 lg:pt-0">
              <div className="flex flex-col justify-center h-full">
                <div className="text-white font-avenir-heavy text-[30px] lg:text-[38px] leading-[2.2rem] lg:leading-[2.5rem]">
                  App & System <br />
                  Developer{" "}
                  <div
                    style={{
                      width: "100px",
                      display: "inline-block",
                      color: "#6E8F6B",
                      fontSize: "1.8rem",
                      fontFamily: "Avenir-Heavy",
                    }}
                  >
                    <Typewriter
                      words={["</>", "{ / }"]}
                      loop={false}
                      cursor
                      cursorStyle="_"
                      typeSpeed={150}
                      deleteSpeed={300}
                      delaySpeed={4000}
                    />
                  </div>
                  <br />
                  based in Sweden
                </div>
                <div className="text-white font-avenir-book text-[16px] lg:text-[18px] my-6 leading-tight">
                  Graphic designer by day
                  <br />
                  and developer by night
                  <br />
                </div>
                <div className="flex">
                  <Button
                    text="GET IN TOUCH"
                    bgColor="bg-green-800"
                    className="text-[14px] lg:py-1.7 hover:bg-[#6E8F6B]"
                  />
                </div>
              </div>
              <div className="w-[100px] lg:w-[150px] flex flex-row ml-[-40px] lg:ml-[-60px]">
                <SwedenMap />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="z-30 mb-[-10px] mt-[-15px] lg:mt-[-15px] xl:mt-[-25px]">
        <Divider />
      </div>
      <ProjectSection />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

const NameComponent = ({ text, additionalStyles = "" }) => (
  <div
    className={`text-white font-avenir-black text-[50px] lg:text-[80px] ${additionalStyles}`}
  >
    {text}
  </div>
);
