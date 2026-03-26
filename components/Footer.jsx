import React from 'react';
import Logo from '@/components/assets/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ui-bg rounded-lg flex justify-center">
      <div className="w-full max-w-screen-xl mx-auto p-4 py-16 flex flex-col items-center">
        <a href="/" className="flex items-center mb-4 space-x-3 rtl:space-x-reverse text-ui-ink">
          <div className="w-[200px] mb-6">
            <Logo />
          </div>
        </a>
        <span className="block text-sm text-ui-ink-2 font-sfpro-light text-center font-[100]">
          © {currentYear} All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
