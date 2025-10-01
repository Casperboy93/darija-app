"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Scientific Excellence!
      </h2>
      <p className="text-lg">You've mastered scientific and technical discourse in Darija! Morocco has a rich tradition of scientific achievement, from medieval scholars like Ibn Battuta to modern researchers. This vocabulary connects you to the global scientific community while honoring Arabic scientific heritage.</p>
      <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
        <p className="text-sm">🔬 Fun fact: Many scientific terms in Arabic were adopted into European languages during the Islamic Golden Age!</p>
      </div>
    </div>
  );
}