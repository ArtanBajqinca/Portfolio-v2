import React from "react";
import Logo from "@/components/assets/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 rounded-lg flex justify-center">
      <div className="w-full max-w-screen-xl mx-auto p-4 py-16 flex flex-col items-center">
        <a
          href="#"
          className="flex items-center mb-4 space-x-3 rtl:space-x-reverse"
        >
          <div className="w-[200px] mb-6">
            <Logo />
          </div>
        </a>
        <span className="block text-sm text-white dark:text-gray-400 text-center font-[100]">
          © {currentYear}{" "}
          <a href="https://flowbite.com/" className="hover:underline"></a>
          All rights reserved
        </span>
        {/* You can add GitHub & LinkedIn icons below if needed */}
      </div>
    </footer>
  );
};

export default Footer;
