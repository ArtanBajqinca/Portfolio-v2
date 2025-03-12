'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaReact,
  FaApple,
  FaAndroid,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaArrowDown,
  FaGraduationCap,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiExpo,
  SiNextdotjs,
  SiStorybook,
  SiSwift,
  SiGraphql,
} from 'react-icons/si';
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

  const sections = {
    photo: useRef(null),
    text: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    connect: useRef(null),
  };

  useEffect(() => {
    const observers = [];
    const observerOptions = { threshold: 0.2, rootMargin: '0px' };

    Object.keys(sections).forEach((key) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [key]: true }));
          observer.disconnect();
        }
      }, observerOptions);

      if (sections[key].current) {
        observer.observe(sections[key].current);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-900">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12  max-w-screen-xl">
          <div className="lg:mt-10 mt-8">
            <Navbar />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-6 sm:mt-12 py-16 grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-center">
        <motion.div
          ref={sections.photo}
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible.photo ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Image
              src="/images/Portrait_3.png"
              alt="Artan Bajqinca"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          ref={sections.text}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.text ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            About <span className="text-green-400">Me</span>
          </h1>
          <div className="w-20 h-1 bg-green-700 mb-6"></div>
          <p className="text-lg leading-relaxed">
            Hi, I'm{' '}
            <span className="text-green-400 font-bold">Artan Bajqinca</span>, an
            App & System Developer at Verendus and a software engineering
            student at Jönköping University. I am passionate about mobile
            development, software security, and designing impactful
            applications.
          </p>
          <p className="mt-4">
            Currently, I am in my final year pursuing a Bachelor's degree in{' '}
            <Link
              href="https://ju.se/studera/valj-utbildning/program/program-pa-grundniva/datateknik--mjukvaruutveckling-och-mobila-plattformar-ht2025-52558.html"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Software Development for Mobile Platforms & Digital Systems
            </Link>{' '}
            at{' '}
            <Link
              href="https://ju.se/"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Jönköping University
            </Link>
            . My focus is on developing robust mobile applications using React
            Native, iOS & Android native development.
          </p>
          <p className="mt-4">
            I have launched multiple applications, including{' '}
            <Link
              href="http://wisewords.artanbajqinca.se/"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Wise Words
            </Link>
            , a motivational quotes app, and{' '}
            <Link
              href="https://www.islam.nu/morgonkvall"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Morning & Evening Supplications
            </Link>
            , available on both the App Store and Google Play.
          </p>
          <p className="mt-4">
            My ongoing thesis research, in collaboration with{' '}
            <Link
              href="https://verendus.se/"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Verendus
            </Link>
            , focuses on{' '}
            <Link
              href="https://www.linkedin.com/posts/artanbajqinca_thesisproject-graphql-security-activity-7298711886357753856-2BF4"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              "Optimizing GraphQL Security: Enhancing Data Protection and System
              Reliability."
            </Link>
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section
        ref={sections.skills}
        className="max-w-screen-xl mx-auto px-6 py-16 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-3">
          Technical <span className="text-green-400">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-green-700 mx-auto mb-10"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { text: 'React Native', icon: <FaReact /> },
            { text: 'iOS Development', icon: <FaApple /> },
            { text: 'Android Development', icon: <FaAndroid /> },
            { text: 'JavaScript', icon: <FaJs /> },
            { text: 'TypeScript', icon: <SiTypescript /> },
            { text: 'Expo', icon: <SiExpo /> },
            { text: 'React', icon: <FaReact /> },
            { text: 'NextJS', icon: <SiNextdotjs /> },
            { text: 'PHP', icon: <FaPhp /> },
            { text: 'StoryBook', icon: <SiStorybook /> },
            { text: 'GraphQL', icon: <SiGraphql /> },
            { text: 'Swift', icon: <SiSwift /> },
          ].map((skill, index) => (
            <Skill key={index} text={skill.text} icon={skill.icon} />
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        ref={sections.experience}
        className="max-w-screen-xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-3">
          Work <span className="text-green-400">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-green-700 mx-auto mb-10"></div>
        <div className="space-y-6">
          <ExperienceCard
            title="App Developer"
            company="Verendus"
            period="Sep 2024 - Present"
            description="Developing applications with React Native and TypeScript while working on my thesis project."
          />
          <ExperienceCard
            title="System Developer"
            company="Verendus"
            period="Jun 2024 - Aug 2024"
            description="Full-time role developing web applications and systems using PHP, JavaScript and other technologies."
          />
          <ExperienceCard
            title="Software Development Intern"
            company="Verendus"
            period="Apr 2024 - May 2024"
            description="Internship focusing on React.js and StoryBook for front-end development."
          />
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        ref={sections.education}
        className="max-w-screen-xl mx-auto px-6 py-16 text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-3">
          <span className="text-white">Education</span>
        </h2>
        <div className="w-20 h-1 bg-green-700 mx-auto mb-10"></div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <EducationCard
              title="Bachelor's Degree"
              subtitle="Software Development: Mobile Platforms & Digital Systems"
              school="Jönköping University - School of Engineering (JTH)"
              period="August 2022 - June 2025"
              description="This program focuses on app development for mobile platforms and web, combining theoretical knowledge with practical projects. I've gained expertise in programming, data structures, database management, and app & webb development through courses in Android, iOS, and web technologies.
"
            />
          </div>
          <div className="md:col-span-1">
            <EducationCard
              title="Technical Foundation Year"
              subtitle="Mathematics, Physics & Chemistry"
              school="Jönköping University - School of Engineering (JTH)"
              period="August 2021 - June 2022"
              description="Technical preparation year focusing on mathematics, physics, and chemistry."
            />
          </div>
          <div className="my-8"></div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}

const Skill = ({ text, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center bg-gray-800 p-4 rounded-lg gap-3 hover:bg-gray-700 transition-all duration-200 shadow-md"
  >
    <div className="text-2xl text-green-400">{icon}</div>
    <span className="text-white">{text}</span>
  </motion.div>
);

const ExperienceCard = ({ title, company, period, description }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    className="bg-gray-800 p-6 text-white border-l-4 border-green-700 shadow-lg hover:shadow-green-900/20 transition-all duration-300"
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-green-400">{company}</p>
    <p className="text-gray-400 text-sm">{period}</p>
    <p className="text-gray-300 mt-3">{description}</p>
  </motion.div>
);

const EducationCard = ({ title, subtitle, school, period, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 p-6 rounded-xl h-full  shadow-lg hover:shadow-green-900/20 transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-green-800/30 p-3 rounded-full">
        <FaGraduationCap className="text-green-400 text-2xl" />
      </div>
      <div>
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-green-400">{subtitle}</p>
      </div>
    </div>

    <p className="text-gray-300 mb-2">{school}</p>
    <p className="text-gray-400 text-sm">{period}</p>
    <p className="text-gray-300 mt-4">{description}</p>
  </motion.div>
);

const SocialLink = ({ href, icon, label }) => (
  <Link
    href={href}
    target="_blank"
    className="flex flex-col items-center text-white hover:text-green-400 transition group bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300"
  >
    <div className="text-3xl mb-3 group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <span className="font-medium">{label}</span>
  </Link>
);
