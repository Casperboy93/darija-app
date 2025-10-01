"use client";

import React, { useState } from 'react';

const ComprehensiveReview: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('grammar');

  const sections = {
    grammar: {
      title: '📚 Grammar Review',
      content: [
        {
          topic: 'Verb Conjugations',
          description: 'Present, past, and future tense patterns',
          examples: ['Ana kanqra (I read)', 'Qrit (I read - past)', 'Ghadi nqra (I will read)']
        },
        {
          topic: 'Pronouns and Possessives',
          description: 'Personal pronouns and possessive forms',
          examples: ['Ana (I)', 'Nta/Nti (You)', 'Dyali (Mine)', 'Dyalek (Yours)']
        },
        {
          topic: 'Question Formation',
          description: 'How to ask questions in Darija',
          examples: ['Ash kadir? (What are you doing?)', 'Fin ghadi? (Where are you going?)']
        }
      ]
    },
    vocabulary: {
      title: '🗣️ Essential Vocabulary',
      content: [
        {
          topic: 'Family & Relationships',
          description: 'Family members and social connections',
          examples: ['Baba (Father)', 'Mama (Mother)', 'Khu (Brother)', 'Ukht (Sister)']
        },
        {
          topic: 'Daily Activities',
          description: 'Common actions and routines',
          examples: ['Noud (Get up)', 'Kul (Eat)', 'Khdem (Work)', 'Nass (Sleep)']
        },
        {
          topic: 'Food & Dining',
          description: 'Meals, ingredients, and dining expressions',
          examples: ['Tajin (Tagine)', 'Khubz (Bread)', 'Atay (Tea)', 'Makla (Food)']
        }
      ]
    },
    culture: {
      title: '🏛️ Cultural Knowledge',
      content: [
        {
          topic: 'Greetings & Politeness',
          description: 'Proper ways to greet and show respect',
          examples: ['Salam aleikum', 'Labas (How are you?)', 'Bslama (Goodbye)']
        },
        {
          topic: 'Social Customs',
          description: 'Important cultural practices and etiquette',
          examples: ['Hospitality traditions', 'Religious considerations', 'Family values']
        },
        {
          topic: 'Moroccan Traditions',
          description: 'Festivals, celebrations, and customs',
          examples: ['Ramadan practices', 'Wedding traditions', 'Tea ceremony']
        }
      ]
    }
  };

  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-6 text-green-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Comprehensive Course Review
      </h2>

      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          Let's review all the essential concepts you've learned throughout this beginner course. 
          Click on each section to explore the key topics and refresh your knowledge.
        </p>
      </div>

      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeSection === key
                ? 'bg-green-500 text-white'
                : 'bg-white text-green-700 border border-green-300 hover:bg-green-100'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Active Section Content */}
      <div className="bg-white p-6 rounded-lg border border-green-100">
        <h3 className="text-xl font-semibold mb-4 text-green-800">
          {sections[activeSection as keyof typeof sections].title}
        </h3>
        
        <div className="space-y-6">
          {sections[activeSection as keyof typeof sections].content.map((item, index) => (
            <div key={index} className="border-l-4 border-green-400 pl-4">
              <h4 className="text-lg font-medium text-gray-800 mb-2">{item.topic}</h4>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <div className="bg-green-50 p-3 rounded-md">
                <h5 className="font-medium text-green-800 mb-2">Examples:</h5>
                <ul className="list-disc ml-5 space-y-1">
                  {item.examples.map((example, exIndex) => (
                    <li key={exIndex} className="text-green-700">{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mt-8 bg-white p-6 rounded-lg border border-green-100">
        <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Your Learning Journey
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">30</div>
            <div className="text-sm text-gray-600">Lessons Completed</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Words Learned</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Course Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveReview;