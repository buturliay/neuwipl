'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'JOIN', href: '#join' },
  { name: 'EBOARD', href: '#eboard' },
  { name: 'CALENDAR', href: '#calendar' },
  { name: 'FAQ', href: '#faq' },
  { name: 'CONTACT US', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white py-6 px-4">
      {/* Title + Mobile Menu Icon */}
      <div className="flex flex-col md:block items-center text-center">
        {/* Title */}
        <div className="text-pink-600 text-2xl md:text-4xl font-bold">
          Women In Pre-Law Society at Northeastern University
        </div>

        {/* Mobile Menu Icon - now below title */}
        <div className="mt-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-pink-600"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center flex-wrap gap-4 text-m font-medium text-pink-700 pt-6">
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

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 pt-6 md:hidden text-pink-700 text-base font-medium">
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
