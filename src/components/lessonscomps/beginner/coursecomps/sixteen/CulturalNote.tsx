"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-semibold text-amber-800 mb-2">Work Culture in Morocco</h3>
            <p className="text-amber-700 mb-3">In Morocco, asking about someone's work is a common way to get to know them. Family businesses are very common, and many people work in traditional crafts, agriculture, or tourism. Respect for all types of work is important in Moroccan culture.</p>
            <p className="text-amber-700">When meeting someone new, it's polite to ask about their work, but be respectful if someone prefers not to discuss it in detail.</p>
          </div>
        </div>
      </div>
    </div>
  );
}