'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'JOIN', href: '#join' },
  { name: 'EBOARD', href: '#eboard' },
  { name: 'CALENDAR', href: '#calendar' },
  { name: 'CONTACT US', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 px-4">
      {/* Top Bar: Title + Menu Icon */}
      <div className="flex items-center justify-between md:block relative">
        {/* Title */}
        <div className="w-full text-center text-pink-600 text-2xl md:text-4xl mt-4 font-bold">
          Women In Pre-Law Society at Northeastern University
        </div>

        {/* Mobile Menu Icon (right side) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden text-pink-600"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center flex-wrap gap-4 text-m font-medium text-pink-700 pt-4">
        {navItems.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="px-3 py-1 rounded-md hover:bg-pink-50 transition-colors"
          >
            {name}
          </Link>
        ))}
      </nav>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 pt-4 md:hidden text-pink-700 text-base font-medium">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="px-4 py-2 hover:bg-pink-50 rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
