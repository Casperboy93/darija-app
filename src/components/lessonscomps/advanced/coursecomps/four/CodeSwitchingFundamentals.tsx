"use client";

import React from 'react';

export default function CodeSwitchingFundamentals() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Code-Switching Fundamentals
      </h2>
      
      <p className="text-gray-700 mb-6">Code-switching between Darija and Fusha is a sophisticated linguistic skill that demonstrates education and cultural awareness:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">When to Use Fusha</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-gray-600">• Formal speeches and presentations</p>
            <p className="text-gray-600">• Academic and educational contexts</p>
            <p className="text-gray-600">• News broadcasting and media</p>
            <p className="text-gray-600">• Religious and ceremonial occasions</p>
            <p className="text-gray-600">• Legal and governmental settings</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Code-Switching Strategies</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Advanced</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-gray-600">• Start with Fusha, transition to Darija</p>
            <p className="text-gray-600">• Use Fusha for key concepts</p>
            <p className="text-gray-600">• Maintain Darija for personal anecdotes</p>
            <p className="text-gray-600">• Adjust based on audience reaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}