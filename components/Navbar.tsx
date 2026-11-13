"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-primary">
            TEST Claude Photos
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg font-medium text-on-surface hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-lg font-medium text-on-surface hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/location" className="text-lg font-medium text-on-surface hover:text-primary transition-colors">
              Location
            </Link>
            <Link href="/reservation" className="text-lg font-medium text-on-surface hover:text-primary transition-colors">
              Reservation
            </Link>
            <Link href="/reservation" className="inline-block bg-primary text-white hover:bg-opacity-90 font-bold text-lg uppercase tracking-widest px-6 py-3 border border-primary transition-all duration-150 active:scale-95 text-center">
              Book a Table
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-b border-outline-variant">
          <div className="px-5 md:px-8 py-4 space-y-2">
            <Link href="/" className="block py-2 text-lg font-medium text-on-surface hover:text-primary transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/menu" className="block py-2 text-lg font-medium text-on-surface hover:text-primary transition-colors" onClick={toggleMenu}>
              Menu
            </Link>
            <Link href="/location" className="block py-2 text-lg font-medium text-on-surface hover:text-primary transition-colors" onClick={toggleMenu}>
              Location
            </Link>
            <Link href="/reservation" className="block py-2 text-lg font-medium text-on-surface hover:text-primary transition-colors" onClick={toggleMenu}>
              Reservation
            </Link>
            <Link href="/reservation" className="block w-full bg-primary text-white hover:bg-opacity-90 font-bold text-lg uppercase tracking-widest px-6 py-3 border border-primary transition-all duration-150 active:scale-95 text-center mt-4" onClick={toggleMenu}>
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
