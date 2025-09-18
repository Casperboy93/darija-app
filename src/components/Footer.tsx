import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* App Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-black flex items-center justify-center text-white font-bold text-2xl mr-3">
                D
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                Darija App
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Learn Moroccan Arabic (Darija) with interactive lessons, translations, and e-books. 
              Master the language through engaging content and practical exercises.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/lessons" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline"
                >
                  Lessons
                </Link>
              </li>
              <li>
                <Link 
                  href="/translator" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline"
                >
                  Translator
                </Link>
              </li>
              <li>
                <Link 
                  href="/ebooks" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium hover:underline"
                >
                  E-Books
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Connect</h4>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                Join our community of Darija learners and start your journey today.
              </p>
              <div className="flex space-x-3">
                <button className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                  <span className="text-xs font-bold">f</span>
                </button>
                <button className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                  <span className="text-xs font-bold">t</span>
                </button>
                <button className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                  <span className="text-xs font-bold">i</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Darija App. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy" 
                className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;