"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-3 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        Final Review and Assessment
      </h2>
      <p className="text-gray-700 mb-4">
        Congratulations! You've completed the beginner Darija course. This final lesson will help you review everything you've learned and assess your progress.
      </p>
      
      <div className="mt-4 bg-white p-4 rounded-md border border-purple-100">
        <p className="font-medium text-purple-800 mb-2">What You'll Review:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
          <li>Essential vocabulary from all 24 lessons</li>
          <li>Key grammar patterns and sentence structures</li>
          <li>Common phrases for daily situations</li>
          <li>Cultural knowledge and etiquette</li>
          <li>Self-assessment exercises</li>
          <li>Next steps for continued learning</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-md border border-green-200">
        <p className="font-medium text-green-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Achievement Unlocked: Beginner Darija Complete!
        </p>
        <p className="text-sm text-gray-700 mt-1">
          You now have the foundation to communicate in basic Moroccan Darija situations.
        </p>
      </div>
    </div>
  );
}