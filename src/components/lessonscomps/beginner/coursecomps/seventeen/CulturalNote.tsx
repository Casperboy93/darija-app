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
            <h3 className="font-semibold text-amber-800 mb-2">Health and Traditional Medicine</h3>
            <p className="text-amber-700 mb-3">In Morocco, traditional remedies are still widely used alongside modern medicine. Many people use herbs, honey, and traditional treatments. It's common to ask about someone's health as a form of caring and showing concern.</p>
            <p className="text-amber-700">When visiting a doctor, it's respectful to be patient and describe your symptoms clearly. Family members often accompany patients to medical appointments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}