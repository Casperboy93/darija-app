"use client";

import React from 'react';

export default function PracticeExercises() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Practice Exercises
      </h2>
      
      <div className="space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Exercise 1: Philosophical Debate</h3>
          <p className="text-gray-700">Engage in a philosophical discussion about the nature of knowledge and truth, using sophisticated vocabulary and logical arguments.</p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Exercise 2: Research Presentation</h3>
          <p className="text-gray-700">Present a research topic with proper academic structure: introduction, methodology, findings, and conclusions.</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">Exercise 3: Critical Analysis</h3>
          <p className="text-gray-700">Analyze a complex social issue using critical thinking skills and academic discourse patterns.</p>
        </div>
      </div>
    </div>
  );
}