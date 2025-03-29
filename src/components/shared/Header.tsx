'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-light/90 backdrop-blur-sm shadow-sm dark:bg-neutral-dark/90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-heading text-lg font-bold">
          Kenny Snyder&apos;s Story
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="#introduction" className="hover:text-primary-blue transition">
                Introduction
              </Link>
            </li>
            <li>
              <Link href="#sweden-experience" className="hover:text-primary-blue transition">
                Journey
              </Link>
            </li>
            <li>
              <Link href="#connections" className="hover:text-primary-blue transition">
                Connections
              </Link>
            </li>
            <li>
              <Link href="#transition" className="hover:text-primary-blue transition">
                Transition
              </Link>
            </li>
            <li>
              <Link href="#reflection" className="hover:text-primary-blue transition">
                Reflection
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 