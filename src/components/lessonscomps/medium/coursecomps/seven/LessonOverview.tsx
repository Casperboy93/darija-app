"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Master professional vocabulary and business communication in Darija. Learn to discuss work, careers, and business interactions confidently in Moroccan Arabic.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-blue-100">
        <p className="font-medium text-blue-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master professional and business vocabulary</li>
          <li>Learn workplace communication phrases</li>
          <li>Understand job interview conversations</li>
          <li>Practice business meeting discussions</li>
        </ul>
      </div>
    </div>
  );
}