"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
        Diplomatic Excellence!
      </h2>
      <p className="text-lg">You've mastered the sophisticated language of diplomacy and formal communication! In Moroccan culture, formal language shows respect and education. These skills will serve you in professional, academic, and official settings throughout the Arab world.</p>
      <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
        <p className="text-sm">🎯 Remember: Diplomatic language emphasizes respect, patience, and finding common ground - values deeply rooted in Moroccan culture.</p>
      </div>
    </div>
  );
}