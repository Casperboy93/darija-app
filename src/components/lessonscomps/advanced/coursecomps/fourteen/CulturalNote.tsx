"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        Media Mastery!
      </h2>
      <p className="text-lg">You've mastered media and journalism vocabulary in Darija! Morocco has a vibrant media landscape with newspapers like Al-Alam and L'Opinion, and TV channels like 2M and Al Aoula. This knowledge connects you to Morocco's dynamic media scene.</p>
      <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-md">
        <p className="text-sm">📺 Fun fact: Morocco was one of the first Arab countries to launch color television broadcasting in 1972!</p>
      </div>
    </div>
  );
}