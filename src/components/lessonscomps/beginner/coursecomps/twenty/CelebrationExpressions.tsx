"use client";

import React from 'react';

export default function CelebrationExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Celebration Expressions
      </h2>
      
      <div className="space-y-3">
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Mabrūk!</span>
            <span className="text-gray-600">Congratulations!</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Bṣaḥa u rāḥa</span>
            <span className="text-gray-600">With health and comfort</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Allāh yʿṭīk ṣ-ṣaḥa</span>
            <span className="text-gray-600">May Allah give you health</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-800">Faraḥnā bīk</span>
            <span className="text-gray-600">We're happy with you</span>
          </div>
        </div>
      </div>
    </div>
  );
}