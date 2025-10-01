"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-indigo-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Explore philosophical and ethical concepts in Darija. Learn to discuss moral principles, philosophical schools of thought, and ethical dilemmas with depth and nuance.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-indigo-100">
        <p className="font-medium text-indigo-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master philosophical terminology</li>
          <li>Learn ethical vocabulary and concepts</li>
          <li>Practice moral reasoning language</li>
          <li>Understand Islamic and Western philosophical traditions</li>
        </ul>
      </div>
    </div>
  );
}