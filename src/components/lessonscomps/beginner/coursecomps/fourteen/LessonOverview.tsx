"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
        <div className="h-10 w-2 bg-pink-500 rounded-full mr-4"></div>
        Lesson 14: Hobbies and Activities
      </h1>
      
      <div className="bg-pink-50 p-6 rounded-lg border border-pink-200 mb-8">
        <h2 className="text-xl font-semibold mb-3 text-pink-800">What You'll Learn</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-pink-500 mr-2">•</span>
            Common hobbies and activities vocabulary
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-2">•</span>
            Sports and physical activities
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-2">•</span>
            How to express likes and dislikes
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-2">•</span>
            Asking about someone's hobbies
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-2">•</span>
            Entertainment activities
          </li>
        </ul>
      </div>
    </div>
  );
}