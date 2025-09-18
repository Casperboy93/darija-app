"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl mr-2">
                D
              </div>
              <span className="text-xl font-bold text-primary">Darija App</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-primary font-medium">About</Link></li>
              <li><Link href="/lessons" className="text-gray-700 hover:text-primary font-medium">Lessons</Link></li>
              <li><Link href="/translator" className="text-gray-700 hover:text-primary font-medium">Translator</Link></li>
              <li><Link href="/ebooks" className="text-gray-700 hover:text-primary font-medium">E-Books</Link></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-3">
              <li><Link href="/" className="block text-gray-700 hover:text-primary font-medium py-1">Home</Link></li>
              <li><Link href="/about" className="block text-gray-700 hover:text-primary font-medium py-1">About</Link></li>
              <li><Link href="/lessons" className="block text-gray-700 hover:text-primary font-medium py-1">Lessons</Link></li>
              <li><Link href="/translator" className="block text-gray-700 hover:text-primary font-medium py-1">Translator</Link></li>
              <li><Link href="/ebooks" className="block text-gray-700 hover:text-primary font-medium py-1">E-Books</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;