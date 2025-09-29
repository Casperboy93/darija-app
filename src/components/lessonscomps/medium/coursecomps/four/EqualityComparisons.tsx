"use client";

import React from 'react';

export default function EqualityComparisons() {
  const bhalExamples = [
    {
      darija: "Ana twil bhal khuya",
      english: "I am as tall as my brother",
      structure: "Subject + adjective + bhal + comparison"
    },
    {
      darija: "Hiya zwina bhal umha",
      english: "She is as beautiful as her mother",
      structure: "Subject + adjective + bhal + comparison"
    },
    {
      darija: "Tomobil dyali sari3a bhal tomobil dyalek",
      english: "My car is as fast as your car",
      structure: "Subject + adjective + bhal + comparison"
    }
  ];

  const nafsExamples = [
    {
      darija: "Huma nafs t-tul",
      english: "They are the same height",
      structure: "Subject + nafs + noun"
    },
    {
      darija: "3ndna nafs l-3umr",
      english: "We have the same age",
      structure: "Subject + nafs + noun"
    },
    {
      darija: "Kayshriw nafs l-haja",
      english: "They buy the same thing",
      structure: "Subject + nafs + noun"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Equality Comparisons
      </h2>
      
      <div className="space-y-6">
        {/* Using "bhal" */}
        <div className="bg-white p-5 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold mb-3 text-blue-600 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 text-sm font-mono">bhal</span>
            Using "bhal" (like/as)
          </h3>
          
          <div className="bg-blue-50 p-3 rounded-md mb-4 border-l-4 border-blue-400">
            <p className="text-blue-800 font-medium">Pattern: Subject + adjective + bhal + comparison</p>
            <p className="text-gray-600 text-sm mt-1">Shows that two things have equal qualities</p>
          </div>
          
          <div className="space-y-3">
            {bhalExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-md">
                <p className="font-semibold text-gray-800">{example.darija}</p>
                <p className="text-gray-600 italic text-sm mt-1">{example.english}</p>
                <p className="text-blue-600 text-xs mt-1 font-mono">{example.structure}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Using "nafs" */}
        <div className="bg-white p-5 rounded-lg border border-green-100">
          <h3 className="text-lg font-semibold mb-3 text-green-600 flex items-center">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-sm font-mono">nafs</span>
            Using "nafs" (same)
          </h3>
          
          <div className="bg-green-50 p-3 rounded-md mb-4 border-l-4 border-green-400">
            <p className="text-green-800 font-medium">Pattern: Subject + nafs + noun</p>
            <p className="text-gray-600 text-sm mt-1">Emphasizes that two things are exactly the same</p>
          </div>
          
          <div className="space-y-3">
            {nafsExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-md">
                <p className="font-semibold text-gray-800">{example.darija}</p>
                <p className="text-gray-600 italic text-sm mt-1">{example.english}</p>
                <p className="text-green-600 text-xs mt-1 font-mono">{example.structure}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-medium text-yellow-800">Key Difference:</p>
            <p className="text-gray-700">"Bhal" compares qualities (tall, beautiful, fast), while "nafs" compares identical things or characteristics (same height, same age, same item).</p>
          </div>
        </div>
      </div>
    </div>
  );
}