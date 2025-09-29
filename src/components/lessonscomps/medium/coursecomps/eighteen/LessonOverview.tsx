"use client";

import React from 'react';

export default function LessonOverview() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Lesson Overview
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 text-purple-800">Learning Goals</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-500 mr-2">•</span>
            Learn vocabulary related to environment and nature
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2">•</span>
            Understand climate and weather patterns in Morocco
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2">•</span>
            Discuss environmental issues and conservation
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2">•</span>
            Learn about Morocco's environmental initiatives
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-2">•</span>
            Practice environmental vocabulary in context
          </li>
        </ul>
      </div>
    </div>
  );
}