'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PiSun, PiMoon } from 'react-icons/pi';
import Button from './Button';
import Logo from '@/components/assets/Logo';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Navbar = ({ overlay = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  const logoColor = overlay ? 'text-white' : 'text-ui-ink';
  const pillBg = overlay ? 'bg-white/15 backdrop-blur-md' : 'bg-ui-raised';
  const btnBg = overlay ? 'bg-white/20' : 'bg-ui-elevated';
  const btnText = overlay ? 'text-white' : 'text-ui-ink';
  const toggleBg = overlay ? 'bg-white/15 backdrop-blur-md hover:bg-white/25' : 'bg-ui-raised hover:bg-ui-elevated';
  const iconColor = overlay ? 'text-white text-[20px]' : 'text-ui-ink text-[20px]';

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className={`flex mb-6 lg:mb-0 h-8 lg:h-10 lg:mr-10 w-[230px] ${logoColor}`}>
        <Link href="/" passHref>
          <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <div className={`${pillBg} p-2 rounded-[6px]`}>
          <div className="flex flex-row gap-4">
            <Button
              text={'Projects'}
              className="font-sfpro-black lg:font-sfpro-bold"
              link="/projects"
              bgColor={btnBg}
              textColor={btnText}
            />
            <Button
              text={'About'}
              className="font-sfpro-black lg:font-sfpro-bold"
              link="/about"
              bgColor={btnBg}
              textColor={btnText}
            />
            <Button
              text={'Contact'}
              className="font-sfpro-black lg:font-sfpro-bold"
              link="/contact"
              bgColor={btnBg}
              textColor={btnText}
            />
          </div>
        </div>

        <button
          onClick={toggleTheme}
          className={`relative w-10 h-10 flex items-center justify-center rounded-full ${toggleBg} transition-colors duration-200 cursor-pointer overflow-hidden`}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isLight ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <PiMoon className={iconColor} />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: 30, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -30, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                <PiSun className={iconColor} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
