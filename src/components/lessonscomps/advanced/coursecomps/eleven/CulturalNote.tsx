"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Literary Master!
      </h2>
      <p className="text-lg">
        You've explored the beautiful world of Moroccan literary expression! Poetry and literature are deeply valued 
        in Moroccan culture, from classical Arabic traditions to modern Darija expressions. This knowledge connects 
        you to centuries of artistic heritage.
      </p>
      <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
        <p className="text-sm">💡 Tip: Try attending poetry readings or "ams shiʿriyya" (poetry evenings) to experience this art form live!</p>
      </div>
    </div>
  );
}