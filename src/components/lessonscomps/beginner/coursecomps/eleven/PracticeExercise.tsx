"use client";

import React from 'react';

export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Describe Your Outfit</h3>
        <p className="text-gray-700 mb-4">Practice describing what you're wearing using the vocabulary you've learned:</p>
        
        <div className="space-y-3">
          <div className="bg-white p-3 rounded border">
            <p className="font-medium">Example:</p>
            <p className="text-purple-700">"Ana labes qamis abyad u bantalon azraq"</p>
            <p className="text-gray-600">"I'm wearing a white shirt and blue pants"</p>
          </div>
          
          <div className="bg-white p-3 rounded border">
            <p className="font-medium">Your turn:</p>
            <p className="text-gray-600">Try describing your current outfit in Darija!</p>
          </div>
        </div>
      </div>
    </div>
  );
}