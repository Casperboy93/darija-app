"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Learn essential vocabulary for clothing items and colors in Darija. Perfect for shopping, describing what you're wearing, and expressing preferences.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
        <p className="font-medium text-purple-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master clothing vocabulary for different items</li>
          <li>Learn all basic colors in Darija</li>
          <li>Practice describing what you're wearing</li>
          <li>Understand shopping phrases for clothes</li>
        </ul>
      </div>
    </div>
  );
}