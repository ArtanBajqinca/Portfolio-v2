'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaAppStore,
  FaGraduationCap,
  FaReact,
  FaApple,
  FaAndroid,
  FaJs,
  FaNodeJs,
  FaPhp,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiExpo,
  SiNextdotjs,
  SiStorybook,
  SiSwift,
  // Change from SiReactnative to the correct icon name
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiGraphql,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState({
    photo: false,
    text: false,
    skills: false,
    experience: false,
    education: false,
    connect: false,
  });

  const photoRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const connectRef = useRef(null);

  useEffect(() => {
    const observers = [];
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px',
    };

    const createObserver = (ref, key) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [key]: true }));
          observer.disconnect();
        }
      }, observerOptions);

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(photoRef, 'photo');
    createObserver(textRef, 'text');
    createObserver(skillsRef, 'skills');
    createObserver(experienceRef, 'experience');
    createObserver(educationRef, 'education');
    createObserver(connectRef, 'connect');

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-900">
      {/* Navigation */}
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12 ">
          <div className="lg:mt-10 mt-8">
            <Navbar />
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-6 py-16 gap-12">
        {/* Profile Image */}
        <motion.div
          ref={photoRef}
          className="md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible.photo ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-64 h-80 md:w-80 md:h-[400px] overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-lg shadow-green-700 transition-transform duration-500">
            <Image
              src="/images/Portrait_3.png"
              alt="Artan Bajqinca"
              fill
              objectFit="cover"
              priority
              className="object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-gray-900/10 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white"></div>
          </div>
        </motion.div>

        {/* About Text */}
        <div className="md:w-2/3 text-white">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.text ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-avenir-heavy mb-6">
              About Me
            </h1>
            <div className="w-20 h-1 bg-green-700 mb-8"></div>

            <div className="space-y-6 font-avenir-book text-lg leading-relaxed">
              <p>
                Hi, I'm{' '}
                <span className="font-avenir-heavy text-green-400">
                  Artan Bajqinca
                </span>
                , an app developer and software engineer based in Jönköping,
                Sweden. I'm passionate about creating beautiful and functional
                digital experiences that make a difference.
              </p>

              <p>
                Currently in my third and last year at{' '}
                <Link
                  href="https://ju.se/"
                  target="_blank"
                  className="text-green-400 hover:underline font-avenir-medium transition-all"
                >
                  Jönköping University
                </Link>{' '}
                studying{' '}
                <Link
                  href="https://ju.se/studera/valj-utbildning/program/program-pa-grundniva/datateknik--mjukvaruutveckling-och-mobila-plattformar-ht2025-52558.html"
                  target="_blank"
                  className="text-green-400 hover:underline font-avenir-medium transition-all"
                >
                  Software Development for Mobile Platforms & Digital Systems
                </Link>
                . I specialize in cross-platform and native app development,
                working with React Native, iOS, and Android. My goal is to build
                applications that are not only visually appealing but also
                provide exceptional user experiences.
              </p>

              <p>
                I'm proud to have launched two apps to the App Store, including{' '}
                <Link
                  href="http://wisewords.artanbajqinca.se/"
                  target="_blank"
                  className="text-green-400 hover:underline font-avenir-medium transition-all"
                >
                  Wise Words
                </Link>{' '}
                - a quotes app featuring categorized inspirational sayings. I'm
                currently working at{' '}
                <Link
                  href="https://verendus.se/"
                  target="_blank"
                  className="text-green-400 hover:underline font-avenir-medium transition-all"
                >
                  Verendus
                </Link>{' '}
                as an App & System Developer while completing my thesis on{' '}
                <Link
                  href="https://www.linkedin.com/posts/artanbajqinca_thesisproject-graphql-security-activity-7298711886357753856-2BF4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACJUEBIBFbXXWiPuPc4u8y4-Bfqkz1xgK8U"
                  target="_blank"
                  className="text-green-400 hover:underline font-avenir-medium transition-all"
                >
                  "Optimizing GraphQL Security: Enhancing Data Protection and
                  System Reliability."
                </Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={skillsRef}
            className="py-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.skills ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-2xl font-avenir-medium mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              <Skill
                text="React Native"
                icon={<FaReact className="text-[#61DAFB] w-5 h-5" />}
              />
              <Skill
                text="iOS Development"
                icon={<FaApple className="text-white w-5 h-5" />}
              />
              <Skill
                text="Android Development"
                icon={<FaAndroid className="text-[#3DDC84] w-5 h-5" />}
              />
              <Skill
                text="JavaScript"
                icon={<FaJs className="text-[#F7DF1E] w-5 h-5" />}
              />
              <Skill
                text="TypeScript"
                icon={<SiTypescript className="text-[#3178C6] w-5 h-5" />}
              />
              <Skill
                text="Expo"
                icon={<SiExpo className="text-white w-5 h-5" />}
              />
              <Skill
                text="React"
                icon={<FaReact className="text-[#61DAFB] w-5 h-5" />}
              />
              <Skill
                text="NextJS"
                icon={<SiNextdotjs className="text-white w-5 h-5" />}
              />
              <Skill
                text="PHP"
                icon={<FaPhp className="text-[#777BB4] w-5 h-5" />}
              />
              <Skill
                text="StoryBook"
                icon={<SiStorybook className="text-[#FF4785] w-5 h-5" />}
              />
              <Skill
                text="GraphQL"
                icon={<SiGraphql className="text-[#E535AB] w-5 h-5" />}
              />
              <Skill
                text="Swift"
                icon={<SiSwift className="text-[#F05138] w-5 h-5" />}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of your component remains unchanged */}

      {/* Experience Section */}
      <motion.div
        ref={experienceRef}
        className="max-w-screen-xl mx-auto px-6 pb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible.experience ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-avenir-heavy text-white mb-12 text-center">
          Work Experience
        </h2>

        {/* Modern Experience Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-700/50"></div>

          {/* Experience Item 1 */}
          <div className="mb-0 md:mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-700 shadow-lg hover:shadow-green-900/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-avenir-heavy text-white">
                    App & System Developer
                  </h3>
                  <p className="text-green-400 font-avenir-medium">Verendus</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Sep 2024 - Present
                  </p>
                  <p className="text-gray-300 mt-3 font-avenir-book">
                    Developing applications with React Native and TypeScript
                    while working on my thesis project.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                    <span className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
                      React Native
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
                      TypeScript
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
                      GraphQL
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="md:w-4 h-4 bg-green-600 rounded-full mx-auto mb-4 md:mb-0 md:mx-8 z-10 order-1 md:order-2 flex-shrink-0"></div>

              <div className="md:w-1/2 md:pl-12 order-3 md:invisible">
                {/* Empty space for layout */}
              </div>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="mb-0 md:mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:invisible order-2 md:order-1">
                {/* Empty space for layout */}
              </div>

              {/* Timeline dot */}
              <div className="md:w-4 h-4 bg-green-600 rounded-full mx-auto mb-4 md:mb-0 md:mx-8 z-10 order-1 md:order-2 flex-shrink-0"></div>

              <div className="md:w-1/2 md:pl-12 order-3 md:order-3">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-700 shadow-lg hover:shadow-green-900/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-avenir-heavy text-white">
                    System Developer
                  </h3>
                  <p className="text-green-400 font-avenir-medium">Verendus</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Jun 2024 - Aug 2024
                  </p>
                  <p className="text-gray-300 mt-3 font-avenir-book">
                    Full-time role developing web applications and systems using
                    PHP, JavaScript and other technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
                      PHP
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
                      JavaScript
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
                      Web Development
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="mb-0 md:mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-800 p-6 rounded-lg border-l-4 md:border-r-4 md:border-l-0 border-green-700 shadow-lg hover:shadow-green-900/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-avenir-heavy text-white">
                    Software Development Intern
                  </h3>
                  <p className="text-green-400 font-avenir-medium">Verendus</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Apr 2024 - May 2024
                  </p>
                  <p className="text-gray-300 mt-3 font-avenir-book">
                    Internship focusing on React.js and StoryBook for front-end
                    development.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                    <span className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
                      React.js
                    </span>
                    <span className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded">
                      StoryBook
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="md:w-4 h-4 bg-green-600 rounded-full mx-auto mb-4 md:mb-0 md:mx-8 z-10 order-1 md:order-2 flex-shrink-0"></div>

              <div className="md:w-1/2 md:pl-12 order-3 md:invisible">
                {/* Empty space for layout */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        ref={educationRef}
        className="max-w-screen-xl mx-auto px-6 pb-16 bg-gray-800/30 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible.education ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Education content */}
        <h2 className="text-3xl font-avenir-heavy text-white mb-8 text-center">
          Education
        </h2>

        {/* Education cards */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {/* Education cards content */}
          {/* Bachelor's degree */}
          <div className="bg-gray-800 p-6 rounded-xl w-full md:w-2/3 lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-800/30 p-3 rounded-full">
                <FaGraduationCap className="text-green-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-xl font-avenir-heavy">
                  Bachelor's Degree
                </h3>
                <p className="text-green-400 font-avenir-medium">
                  Software Development: Mobile Platforms & Digital Systems
                </p>
              </div>
            </div>
            <p className="text-gray-300 font-avenir-book mb-2">
              Jönköping University - School of Engineering (JTH)
            </p>
            <p className="text-gray-400 text-sm">August 2022 - June 2025</p>
            <ul className="mt-4 text-gray-300 text-sm space-y-2 pl-5 list-disc">
              <li>Focus on cross-platform and native mobile development</li>
              <li>
                Currently working on thesis project with Verendus on GraphQL
                Security
              </li>
              <li>
                Developed multiple applications including apps published to App
                Store
              </li>
            </ul>
          </div>

          {/* Technical foundation */}
          <div className="bg-gray-800 p-6 rounded-xl w-full md:w-1/3">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-800/30 p-3 rounded-full">
                <FaGraduationCap className="text-green-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-white text-xl font-avenir-heavy">
                  Technical Foundation Year
                </h3>
                <p className="text-green-400 font-avenir-medium">
                  Mathematics, Physics & Chemistry
                </p>
              </div>
            </div>
            <p className="text-gray-300 font-avenir-book mb-2">
              Jönköping University - School of Engineering (JTH)
            </p>
            <p className="text-gray-400 text-sm">August 2021 - June 2022</p>
          </div>
        </div>
      </motion.div>

      {/* Connect Section */}
      <motion.div
        ref={connectRef}
        className="max-w-screen-xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible.connect ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {/* Connect content */}
        <h2 className="text-3xl font-avenir-heavy text-white mb-8">
          Let's Connect
        </h2>
        <p className="text-gray-300 font-avenir-book max-w-2xl mx-auto mb-8">
          I'm always interested in new projects and opportunities. Whether you
          want to discuss a potential collaboration, have questions about my
          projects, or just want to say hello, feel free to reach out!
        </p>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/artanbajqinca/"
            target="_blank"
            className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 flex flex-col items-center"
          >
            <div className="p-4 bg-blue-900/20 rounded-full group-hover:bg-blue-900/30 transition-all duration-300 mb-4">
              <FaLinkedin
                color="#0077b5"
                size={28}
                className="group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <span className="block text-white font-avenir-medium">
              LinkedIn
            </span>
            <span className="text-gray-400 text-sm font-avenir-light">
              @artanbajqinca
            </span>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/ArtanBajqinca"
            target="_blank"
            className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 flex flex-col items-center"
          >
            <div className="p-4 bg-gray-500/50 rounded-full group-hover:bg-gray-900/70 transition-all duration-300 mb-4">
              <FaGithub
                color="white"
                size={28}
                className="group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <span className="block text-white font-avenir-medium">GitHub</span>
            <span className="text-gray-400 text-sm font-avenir-light">
              @ArtanBajqinca
            </span>
          </Link>

          {/* Email */}
          <Link
            href="mailto:artan.bajqinca@gmail.com"
            className="group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 flex flex-col items-center"
          >
            <div className="p-4 bg-green-900/20 rounded-full group-hover:bg-green-900/30 transition-all duration-300 mb-4">
              <FaEnvelope
                color="#4ade80"
                size={28}
                className="group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <span className="block text-white font-avenir-medium">Email</span>
            <span className="text-gray-400 text-sm font-avenir-light">
              artan.bajqinca@gmail.com
            </span>
          </Link>
        </div>
      </motion.div>

      <Footer />
    </main>
  );
}

// Skill component for displaying individual skills with icons
const Skill = ({ text, icon }) => (
  <div className="bg-gray-800 py-2 px-4 rounded-lg text-md font-avenir-medium flex items-center gap-3 hover:bg-gray-700 hover:scale-105 transition-all duration-200 cursor-default">
    <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
    <span>{text}</span>
  </div>
);

// Experience Card component
const ExperienceCard = ({
  title,
  company,
  period,
  description,
  skills = [],
}) => (
  <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300">
    <h3 className="text-xl font-avenir-heavy text-white">{title}</h3>
    <p className="text-green-400 font-avenir-medium">{company}</p>
    <p className="text-gray-400 text-sm mt-1">{period}</p>
    <p className="text-gray-300 mt-3 font-avenir-book">{description}</p>

    {skills.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-700 text-gray-300 text-xs py-1 px-2 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
);
