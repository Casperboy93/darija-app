"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Learn to express emotions and feelings in Darija. Essential for deeper conversations and connecting with people on an emotional level.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
        <p className="font-medium text-indigo-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master vocabulary for different emotions and feelings</li>
          <li>Learn to ask about someone's emotional state</li>
          <li>Practice expressing your own feelings</li>
          <li>Understand emotional expressions in Moroccan culture</li>
        </ul>
      </div>
    </div>
  );
}