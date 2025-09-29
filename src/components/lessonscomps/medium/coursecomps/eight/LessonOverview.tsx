"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-red-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Lesson Overview
      </h2>
      <p className="text-gray-700">Learn essential health and medical vocabulary in Darija. Master conversations about symptoms, medical appointments, and health-related situations you might encounter in Morocco.</p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-red-100">
        <p className="font-medium text-red-800">Learning Goals:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Master health and medical vocabulary</li>
          <li>Learn to describe symptoms and pain</li>
          <li>Understand medical appointment conversations</li>
          <li>Practice pharmacy and emergency situations</li>
        </ul>
      </div>
    </div>
  );
}