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
        <span className="font-medium text-gray-800">Mabruk!</span>
            <span className="text-gray-600">Congratulations!</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">Bsaha u raha</span>
            <span className="text-gray-600">With health and comfort</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">Allah y3tik s-saha</span>
            <span className="text-gray-600">May Allah give you health</span>
          </div>
        </div>
        <div className="bg-white p-4 border border-blue-200 rounded-lg">
          <div className="flex justify-between items-center">
        <span className="font-medium text-gray-800">Farahna bik</span>
            <span className="text-gray-600">We're happy with you</span>
          </div>
        </div>
      </div>
    </div>
  );
}