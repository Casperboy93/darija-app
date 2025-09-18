import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-400 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary">Darija App</h3>
            <p className="mt-2 text-sm text-gray-600">Learn Moroccan Arabic</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary">About</Link></li>
              <li><Link href="/lessons" className="text-sm text-gray-600 hover:text-primary">Lessons</Link></li>
              <li><Link href="/translator" className="text-sm text-gray-600 hover:text-primary">Translator</Link></li>
              <li><Link href="/ebooks" className="text-sm text-gray-600 hover:text-primary">E-Books</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Darija App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;