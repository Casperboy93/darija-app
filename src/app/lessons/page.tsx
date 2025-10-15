"use client";

import React, { useState } from 'react';
import BeginnerSection from '@/components/lessonscomps/common/BeginnerSection';
import MediumSection from '@/components/lessonscomps/common/MediumSection';
import AdvancedSection from '@/components/lessonscomps/common/AdvancedSection';

export default function LessonsPage() {
  const [activeTab, setActiveTab] = useState<'beginner' | 'medium' | 'advanced'>('beginner');
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-b-lg shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
              Darija Lessons
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our comprehensive collection of Moroccan Arabic lessons, 
              from beginner basics to advanced conversations.
            </p>
          </div>
        </div>
        
        {/* Section Tabs */}
        <div className="px-4 sm:px-6 lg:px-8 mt-8 flex justify-center">
          <div role="tablist" aria-label="Lessons sections" className="inline-flex rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'beginner'}
              className={`${activeTab === 'beginner' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-2 text-sm font-medium focus:outline-none transition-colors`}
              onClick={() => setActiveTab('beginner')}
            >
              Beginner
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'medium'}
              className={`${activeTab === 'medium' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-2 text-sm font-medium focus:outline-none transition-colors border-l border-gray-200`}
              onClick={() => setActiveTab('medium')}
            >
              Medium
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'advanced'}
              className={`${activeTab === 'advanced' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-2 text-sm font-medium focus:outline-none transition-colors border-l border-gray-200`}
              onClick={() => setActiveTab('advanced')}
            >
              Advanced
            </button>
          </div>
        </div>

        {/* Lessons Sections */}
        <section className="mt-8">
          {activeTab === 'beginner' && <BeginnerSection />}
          {activeTab === 'medium' && <MediumSection />}
          {activeTab === 'advanced' && <AdvancedSection />}
        </section>
        
        {/* Additional Resources Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg my-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Practice?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Complement your lessons with our other learning resources to accelerate your Darija journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
              <a href="/translator" className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:shadow-lg transition-all">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Translator Tool</h3>
                <p className="text-gray-600">Translate between English and Darija instantly</p>
              </a>
              <a href="/ebooks" className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:shadow-lg transition-all">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">E-Books</h3>
                <p className="text-gray-600">Download comprehensive Darija guides</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}