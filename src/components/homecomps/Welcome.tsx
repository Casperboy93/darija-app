import React from 'react';
import Link from 'next/link';

const Welcome: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold mb-2">مرحبا بكم في تطبيق الدارجة</h1>
        <h2 className="text-3xl font-bold text-primary mb-4">Welcome to Darija App</h2>
        <p className="text-lg text-gray-600 mb-8">Learn Moroccan Arabic with our interactive lessons and tools</p>
        <div className="flex justify-center space-x-4">
          <Link href="/lessons" className="bg-primary text-black px-6 py-2 rounded-md hover:bg-opacity-90">
            Start Learning
          </Link>
          <Link href="/translator" className="bg-white text-primary border border-primary px-6 py-2 rounded-md hover:bg-gray-50">
            Try Translator
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;