"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-10">
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3 text-amber-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Cultural Note: Emotions in Moroccan Culture
        </h2>
        
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Expressing emotions</strong> in Moroccan culture involves both verbal and non-verbal communication. 
            Moroccans are generally expressive people who value emotional connections.
          </p>
          
          <div className="bg-white p-4 rounded-md border border-amber-100">
            <h4 className="font-semibold text-amber-800 mb-2">Key Cultural Points:</h4>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>Religious expressions:</strong> Many emotional responses include religious phrases like "Allah y'tik as-sahha" (May God give you health)</li>
              <li><strong>Community support:</strong> Showing concern for others' emotional well-being is highly valued</li>
              <li><strong>Gender considerations:</strong> Men and women may express emotions differently in public settings</li>
              <li><strong>Hospitality:</strong> Asking about someone's feelings shows care and builds relationships</li>
            </ul>
          </div>
          
          <p>
            Remember that emotional expression can vary between urban and rural areas, and among different social groups. 
            Always be respectful and considerate when discussing personal feelings.
          </p>
        </div>
      </div>
    </div>
  );
}