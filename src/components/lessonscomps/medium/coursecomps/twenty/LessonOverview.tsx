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
        <h3 className="text-xl font-semibold mb-4 text-purple-800">Advanced Cultural and Philosophical Vocabulary</h3>
        <p className="text-gray-700 mb-4">
          This final intermediate lesson explores sophisticated cultural concepts, philosophical terms, and advanced 
          vocabulary for discussing Morocco's rich intellectual and artistic heritage.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Learning Goals</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Master advanced cultural and philosophical vocabulary</li>
              <li>• Discuss complex social and cultural phenomena</li>
              <li>• Understand traditional and modern cultural dynamics</li>
              <li>• Explore Morocco's intellectual traditions</li>
              <li>• Analyze cultural concepts with sophistication</li>
              <li>• Engage in high-level cultural discussions</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Topics Covered</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Philosophy and wisdom concepts</li>
              <li>• Traditional arts and crafts</li>
              <li>• Literature and poetry</li>
              <li>• Architecture and urban planning</li>
              <li>• Social dynamics and relationships</li>
              <li>• Spiritual and religious concepts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}