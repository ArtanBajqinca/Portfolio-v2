'use client';
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Button from '@/components/Button';
import SwedenMap from '@/components/assets/SwedenMap';
import Divider from '@/components/assets/Divider';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ProjectSection from '@/components/ProjectSection';
import { Typewriter } from 'react-simple-typewriter';
import { PiReadCvLogoFill } from 'react-icons/pi';

// Import the scroll animation
const scrollDownAnimation = require('/public/scroll_down.json');

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const ScrollDownLottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  const startTimeRef = useRef();

  const handleImageLoad = () => {
    const loadTime = performance.now() - startTimeRef.current;
    console.log(`Image loaded in ${loadTime.toFixed(2)}ms`);
  };

  useEffect(() => {
    // Mark the time before image starts loading
    startTimeRef.current = performance.now();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      {/* Hero Section */}
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12">
          <div className="lg:mt-10 mt-8">
            <Navbar />
          </div>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-[10px] lg:mt-[10px]">
            {/* Left Section */}
            <div className="flex mt-6 lg:mt-0">
              <div className="mt-20 lg:mt-16 z-10">
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
              <div className="flex flex-col justify-end ml-[-90px] lg:ml-[-100px] z-100 w-[240px] lg:w-[350px] mb-[-5px] lg:mb-[-10px] xl:mb-[-40px]">
                <Image
                  priority={true}
                  src="/images/Portrait.png"
                  alt="Artan Bajqinca"
                  width={430}
                  height={0}
                  quality={100}
                  className="self-center"
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
            {/* Right Section */}
            <div className="flex flex-row px-0 lg:px-0 lg:pl-[30px] pt-8 lg:pt-0">
              <div className="flex flex-col justify-center h-full">
                <div className="text-white font-avenir-heavy text-[26px] lg:text-[38px] leading-[2.2rem] lg:leading-[2.5rem]">
                  iOS App Developer{' '}
                  <div
                    style={{
                      width: '100px',
                      display: 'inline-block',
                      color: '#6E8F6B',
                      fontSize: '1.8rem',
                      fontFamily: 'Avenir-Heavy',
                    }}
                  >
                    <Typewriter
                      words={['</>', '{ / }']}
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
                <div className="text-white font-avenir-book text-[15px] lg:text-[18px] my-6 leading-tight">
                  I design and develop Apps,
                  <br />
                  tailored to meet digital demands
                  <br />
                </div>
                <div className="flex gap-3">
                  <Button
                    text="Get in touch"
                    bgColor="bg-green-800"
                    className="text-[14px] lg:py-1.7 hover:bg-[#6E8F6B]"
                    link="/contact"
                  />
                  <Button
                    text="View CV"
                    bgColor="bg-gray-600"
                    className="text-[14px] lg:py-1.7 flex items-center"
                    icon={<PiReadCvLogoFill className="mr-1.5 text-lg" />}
                    link="/CV_2025_ENG.pdf"
                  />
                </div>
              </div>
              <div className="w-[100px] lg:w-[150px] flex flex-row ml-[-100px] lg:ml-[-140px]">
                <SwedenMap />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="">
        <div className="z-30 mb-[-10px] mt-[-5px] md:mt-[-15px] lg:mt-[-15px] xl:mt-[-7px] 2xl:mt-[-15px]">
          <Divider />
        </div>
      </div>
      <ProjectSection />
      {/* Footer Section */}
      <Footer />
      <div className="fixed bottom-4 right-4 z-50">
        <Lottie
          animationData={scrollDownAnimation}
          style={{ width: '70px', opacity: 0.3 }}
        />
      </div>
    </div>
  );
}

const NameComponent = ({ text, additionalStyles = '' }) => (
  <div
    className={`text-white font-avenir-black text-[50px] lg:text-[80px] ${additionalStyles}`}
  >
    {text}
  </div>
);
