"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);

  const navigationItems = useMemo(() => ([
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/lessons', label: 'Lessons' },
    { href: '/translator', label: 'Translator' },
    { href: '/ebooks', label: 'E-Books' }
  ]), []);

  const isActivePage = useCallback((path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  }, [pathname]);

  const updateLinePosition = useCallback(() => {
    if (!navRef.current) return;
    
    const activeItem = navigationItems.find(item => isActivePage(item.href));
    if (!activeItem) {
      setLineStyle({ width: 0, left: 0 });
      return;
    }

    const activeIndex = navigationItems.indexOf(activeItem);
    const navItems = navRef.current.children;
    
    if (navItems[activeIndex]) {
      const activeElement = navItems[activeIndex] as HTMLElement;
      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();
      
      setLineStyle({
        width: activeRect.width,
        left: activeRect.left - navRect.left
      });
    }
  }, [isActivePage, navigationItems]);

  useEffect(() => {
    updateLinePosition();
    
    const handleResize = () => updateLinePosition();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname, updateLinePosition]);

  // Close mobile menu when navigating to a new route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
    const isActive = isActivePage(href);
    
    return (
      <Link 
        href={href}
        onClick={() => setIsMenuOpen(false)}
        className={`relative text-gray-700 hover:text-black font-medium transition-colors duration-300 px-4 py-2 ${className} ${
          isActive ? 'text-black font-semibold' : ''
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-black flex items-center justify-center text-white font-bold text-2xl mr-3 group-hover:shadow-lg transition-shadow duration-300">
                D
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">Darija App</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-black focus:outline-none transition-colors duration-300"
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
          <nav className="hidden md:block relative">
            <ul ref={navRef} className="flex space-x-2 relative">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
            
            {/* Sliding line indicator */}
            <div 
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-gray-800 to-black rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${lineStyle.width}px`,
                left: `${lineStyle.left}px`,
                transform: 'translateY(2px)'
              }}
            />
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <ul className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} className="block py-2">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;