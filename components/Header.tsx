'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'JOIN', href: '#join' },
  { name: 'EBOARD', href: '#eboard' },
  { name: 'CALENDAR', href: '#calendar' },
  { name: 'CONTACT US', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
];

const Header: React.FC = () => {
  return (
    <header className="w-full bg-pink-50 min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="w-full flex justify-center items-center gap-3 md:gap-6 py-6 text-sm font-medium text-pink-800 tracking-wide">
        {navItems.map(({ name, href }) => (
            <Link
            key={name}
            href={href}
            className="px-3 py-1 rounded-md hover:bg-white transition-colors duration-200"
            >
            {name}
            </Link>
        ))}
        </nav>


      {/* Title + Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 md:px-16 gap-10 text-center md:text-left">
        {/* Title Block */}
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-8xl font-semibold text-pink-500 leading-tight tracking-tighter">
            Women In Pre-Law Society
          </h1>
          <h2 className="text-lg md:text-2xl mt-2 text-gray-700 font-light">
            at Northeastern University
          </h2>
          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0 text-base">
            Creating a welcoming and empowering space for women interested in law.
          </p>
        </div>

        {/* Image Block */}
        <div className="w-100 md:w-64 rounded-full overflow-hidden border-4 border-pink-300 shadow-md">
          <Image
            src="/neulawlogo.png"
            alt="WIPL Logo"
            width={700}
            height={700}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
