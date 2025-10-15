"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="mb-10">
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
          Culture and Traditions - Lesson Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Explore the rich cultural heritage and traditions of Morocco through Darija. Learn about festivals, customs, 
          traditional practices, and cultural expressions that define Moroccan identity. This lesson covers major celebrations, 
          traditional arts, customs, and the cultural values that shape Moroccan society.
        </p>
        <div className="mt-4 p-4 bg-white rounded-md border border-purple-100">
          <h3 className="font-semibold text-purple-700 mb-2">Learning Goals:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>- Master cultural and traditional vocabulary</li>
            <li>- Learn about Moroccan festivals and celebrations</li>
            <li>- Understand traditional customs and practices</li>
            <li>- Practice discussing cultural topics and heritage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}