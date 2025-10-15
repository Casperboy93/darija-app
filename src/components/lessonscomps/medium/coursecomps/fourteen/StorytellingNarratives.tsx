"use client";

import React from 'react';

export default function StorytellingNarratives() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Storytelling and Narratives
      </h2>
      
      <p className="text-gray-700 mb-6">Learn to tell engaging stories and share experiences effectively.</p>
      
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Story Beginnings</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Kan ya ma kan</span>
              <span className="text-gray-600">Once upon a time</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Fi yawm min al-ayyam</span>
              <span className="text-gray-600">One day</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Hadatha anna</span>
              <span className="text-gray-600">It happened that</span>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3">Narrative Transitions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Ba'd dhalik</span>
              <span className="text-gray-600">After that</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Faj'atan</span>
              <span className="text-gray-600">Suddenly</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white border border-green-200 rounded-lg">
              <span className="font-medium text-gray-800">Fi al-nihaya</span>
              <span className="text-gray-600">In the end</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}