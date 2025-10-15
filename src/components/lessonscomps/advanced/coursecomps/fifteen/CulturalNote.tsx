"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Philosophical Wisdom!
      </h2>
      <p className="text-lg">You've mastered philosophical and ethical discourse in Darija! Morocco has a rich philosophical tradition, from medieval Islamic philosophers like Ibn Rushd to modern thinkers. This vocabulary connects you to centuries of wisdom and intellectual tradition.</p>
      <div className="mt-4 p-4 bg-white text-black bg-opacity-20 rounded-md">
        <p className="text-sm">🤔 Fun fact: Cordoba-born Ibn Rushd (Averroes) was known as "The Commentator" for his influential works on Aristotle!</p>
      </div>
    </div>
  );
}