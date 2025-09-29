"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 text-amber-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Cultural Note
      </h2>
      <p className="text-gray-700">
        This lesson represents the culmination of intermediate Darija learning, focusing on sophisticated cultural 
        concepts that require deep understanding of Moroccan and Arab civilization. The vocabulary and concepts 
        covered here are essential for engaging in intellectual discussions about culture, philosophy, and society. 
        Morocco's unique position as a bridge between Africa, the Arab world, and Europe creates a rich cultural 
        synthesis that is reflected in its language, arts, and social structures. Understanding these advanced 
        cultural topics allows learners to appreciate the depth and complexity of Moroccan society and engage 
        meaningfully with its intellectual and artistic traditions. Congratulations on completing the intermediate 
        level of Darija!
      </p>
    </div>
  );
}