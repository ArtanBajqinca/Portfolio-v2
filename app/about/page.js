'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import {
  FaReact, FaApple, FaAndroid, FaJs, FaPhp,
  FaGithub, FaLinkedin, FaEnvelope,
} from 'react-icons/fa';
import {
  SiTypescript, SiExpo, SiNextdotjs, SiStorybook,
  SiSwift, SiGraphql, SiFirebase,
} from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const Divider = () => (
  <div className="max-w-screen-xl mx-auto w-full px-6 lg:px-16">
    <div className="h-px bg-ui-elevated" />
  </div>
);

export default function About() {
  return (
    <main className="flex flex-col min-h-screen bg-ui-section">
      <div className="flex flex-row flex-wrap justify-center">
        <div className="flex flex-col mx-12">
          <div className="lg:mt-10 mt-8"><Navbar /></div>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto w-full px-6 lg:px-16 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-16 items-end">

          {/* Left — text, always left-aligned */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-green-800 font-sfpro-medium text-[12px] tracking-[0.2em] uppercase mb-5">
              iOS Developer · Sweden
            </p>
            <h1 className="text-[62px] lg:text-[88px] font-sfpro-bold text-ui-ink leading-[0.95] tracking-tight mb-7">
              Artan<br />Bajqinca.
            </h1>
            <p className="text-ui-ink-2 font-sfpro text-[17px] leading-[1.75] max-w-[420px] mb-8">
              Building fast, scalable iOS apps with SwiftUI & Firebase. Driven by clean architecture, refined UX, and features that feel seamless.
            </p>
            <div className="flex gap-5">
              <Link href="https://github.com/artanbajqinca" target="_blank" className="text-ui-ink-2 hover:text-ui-ink transition-colors duration-200" aria-label="GitHub">
                <FaGithub size={20} />
              </Link>
              <Link href="https://linkedin.com/in/artanbajqinca" target="_blank" className="text-ui-ink-2 hover:text-ui-ink transition-colors duration-200" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </Link>
              <Link href="mailto:artan@awaio.com" className="text-ui-ink-2 hover:text-ui-ink transition-colors duration-200" aria-label="Email">
                <FaEnvelope size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Right — polaroid, right-edge aligned */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="flex lg:justify-end"
          >
            <div className="bg-white p-3 pb-10 shadow-[0_12px_48px_rgba(0,0,0,0.18)] rotate-[-3deg]">
              <div className="relative w-[240px] h-[300px] lg:w-[300px] lg:h-[360px] overflow-hidden">
                <Image src="/images/Portrait_about.png" alt="Artan Bajqinca" fill className="object-cover object-top" priority />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────── */}
      <div className="bg-ui-card border-y border-ui-elevated">
        <div className="max-w-screen-xl mx-auto w-full px-6 lg:px-16 py-10 grid grid-cols-3 gap-4">
          {[
            { number: '3',  label: 'Apps shipped',      icon: 'ph:rocket-launch-bold' },
            { number: '2+', label: 'Years in industry', icon: 'ph:briefcase-bold' },
            { number: '1',  label: 'Degree earned',     icon: 'ph:graduation-cap-bold' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
              className="flex flex-col items-center text-center gap-2"
            >
              <Icon icon={stat.icon} className="text-green-800 text-[28px]" />
              <p className="text-[36px] lg:text-[48px] font-sfpro-bold text-ui-ink leading-none">{stat.number}</p>
              <p className="text-ui-ink-3 font-sfpro text-[12px] uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto w-full px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-[0.18em] pt-1">
          About
        </motion.p>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          className="space-y-5 text-ui-ink-2 font-sfpro text-[16px] lg:text-[17px] leading-[1.8]">
          <p>
            I'm an iOS Developer at{' '}
            <Link href="https://awaio.com/" target="_blank" className="text-ui-ink font-sfpro-medium hover:text-green-800 transition-colors">Awaio</Link>
            , building fast, scalable real-time apps with Swift, SwiftUI, MVVM and Firebase. I care deeply about performance, clean architecture, and shipping features that feel polished.
          </p>
          <p>
            I recently graduated with a Bachelor's in Software Development from{' '}
            <Link href="https://ju.se/" target="_blank" className="text-ui-ink font-sfpro-medium hover:text-green-800 transition-colors">Jönköping University</Link>
            {' '}— four years of long nights, hands-on projects, and steady growth across mobile, web, and systems engineering. My thesis, completed with Verendus, explored{' '}
            <span className="text-ui-ink font-sfpro-medium">"Optimizing GraphQL Security: Enhancing Data Protection and System Reliability."</span>
          </p>
          <p>
            I've shipped{' '}
            <Link href="http://wisewords.artanbajqinca.se/" target="_blank" className="text-ui-ink font-sfpro-medium hover:text-green-800 transition-colors">Wise Words</Link>
            {' '}and{' '}
            <Link href="https://www.islam.nu/morgonkvall" target="_blank" className="text-ui-ink font-sfpro-medium hover:text-green-800 transition-colors">Morning & Evening Supplications</Link>
            {' '}— both live on the App Store and Google Play. There's something genuinely exciting about seeing strangers use something you built.
          </p>
        </motion.div>
      </section>

      <Divider />

      {/* ── Skills ───────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto w-full px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 items-start">
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-[0.18em] pt-1">
          Skills
        </motion.p>
        <div className="space-y-6">
          {[
            {
              category: 'Mobile',
              items: [
                { text: 'iOS',          icon: <FaApple /> },
                { text: 'Swift',        icon: <SiSwift /> },
                { text: 'SwiftUI',      icon: <FaApple /> },
                { text: 'Firebase',     icon: <SiFirebase /> },
                { text: 'Android',      icon: <FaAndroid /> },
                { text: 'React Native', icon: <FaReact /> },
                { text: 'Expo',         icon: <SiExpo /> },
              ],
            },
            {
              category: 'Web & Languages',
              items: [
                { text: 'TypeScript', icon: <SiTypescript /> },
                { text: 'JavaScript', icon: <FaJs /> },
                { text: 'React',      icon: <FaReact /> },
                { text: 'Next.js',    icon: <SiNextdotjs /> },
                { text: 'PHP',        icon: <FaPhp /> },
                { text: 'GraphQL',    icon: <SiGraphql /> },
                { text: 'Storybook',  icon: <SiStorybook /> },
              ],
            },
          ].map((group, gi) => (
            <motion.div key={gi} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={gi * 0.1}>
              <p className="text-[11px] font-sfpro-medium text-ui-ink-3 uppercase tracking-widest mb-3">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-ui-card rounded-full text-ui-ink font-sfpro text-[14px] border border-ui-elevated">
                    <span className="text-green-800 text-[14px]">{skill.icon}</span>
                    {skill.text}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Experience ───────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto w-full px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 items-start">
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-[0.18em] pt-1">
          Experience
        </motion.p>
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-ui-elevated" />
          {[
            {
              title: 'iOS App Developer', company: 'Awaio', period: 'Jun 2025 – Present', tag: 'Current',
              desc: "Building Awaio's iOS app with Swift, SwiftUI and MVVM. Implementing real-time data flows and Firebase integrations (Firestore, Auth, Functions) with Combine. Driving performance optimisation and scalable architecture in an agile, cross-functional team.",
            },
            {
              title: 'Thesis Project', company: 'Jönköping School of Engineering', period: 'Jan 2025 – Jun 2025',
              desc: 'Explored how to enhance GraphQL security by identifying risks, implementing safeguards, and optimising system performance — in collaboration with Verendus.',
            },
            {
              title: 'App & System Developer', company: 'Verendus', period: 'Sep 2024 – Mar 2025',
              desc: 'Web and mobile development on the RentingForce system. Focus on functionality, UI/UX, and migrating the app to Expo.',
            },
            {
              title: 'System Developer', company: 'Verendus', period: 'Jun 2024 – Aug 2024',
              desc: 'Bug fixes, UI/UX improvements and system optimisation. Worked with scalable architecture, containerisation, and databases.',
            },
            {
              title: 'Software Development Intern', company: 'Verendus', period: 'Apr 2024 – May 2024',
              desc: 'Built a UI component library using React and TypeScript, documented in Storybook.',
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.12}
              className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-[-4.5px] top-[7px] w-[9px] h-[9px] rounded-full bg-green-800 border-2 border-ui-section" />
              <div className="flex items-center gap-3 mb-1">
                <p className="text-ui-ink-3 font-sfpro text-[13px]">{item.period}</p>
                {item.tag && (
                  <span className="text-[11px] font-sfpro-medium text-green-800 bg-green-800/10 px-2 py-0.5 rounded-full">{item.tag}</span>
                )}
              </div>
              <h3 className="text-ui-ink font-sfpro-bold text-[19px] mb-0.5">{item.title}</h3>
              <p className="text-green-800 font-sfpro-medium text-[14px] mb-3">{item.company}</p>
              <p className="text-ui-ink-2 font-sfpro text-[15px] leading-[1.7]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Education ────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto w-full px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 items-start">
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-[12px] font-sfpro-medium text-ui-ink-3 uppercase tracking-[0.18em] pt-1">
          Education
        </motion.p>
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-ui-elevated" />
          {[
            {
              title: "Bachelor's Degree", subtitle: 'Software Development: Mobile Platforms & Digital Systems',
              school: 'Jönköping University – JTH', period: 'Aug 2022 – Jun 2025', tag: 'Completed',
              desc: 'Four years covering mobile and web app development, system architecture, cybersecurity, and databases — Android, iOS, and beyond.',
            },
            {
              title: 'Technical Foundation Year', subtitle: 'Mathematics, Physics & Chemistry',
              school: 'Jönköping University – JTH', period: 'Aug 2021 – Jun 2022',
              desc: 'Technical preparation year covering advanced mathematics, physics, and chemistry.',
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
              className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-[-4.5px] top-[7px] w-[9px] h-[9px] rounded-full bg-green-800 border-2 border-ui-section" />
              <div className="flex items-center gap-3 mb-1">
                <p className="text-ui-ink-3 font-sfpro text-[13px]">{item.period}</p>
                {item.tag && (
                  <span className="text-[11px] font-sfpro-medium text-green-800 bg-green-800/10 px-2 py-0.5 rounded-full">{item.tag}</span>
                )}
              </div>
              <h3 className="text-ui-ink font-sfpro-bold text-[19px] mb-0.5">{item.title}</h3>
              <p className="text-green-800 font-sfpro-medium text-[14px] mb-0.5">{item.subtitle}</p>
              <p className="text-ui-ink-3 font-sfpro text-[13px] mb-3">{item.school}</p>
              <p className="text-ui-ink-2 font-sfpro text-[15px] leading-[1.7]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
