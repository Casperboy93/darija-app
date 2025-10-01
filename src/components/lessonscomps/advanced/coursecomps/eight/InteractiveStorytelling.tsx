"use client";

import React from 'react';

export default function InteractiveStorytelling() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Interactive Storytelling Elements
      </h2>
      
      <p className="text-gray-700 mb-6">Learn to engage your audience with interactive elements:</p>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-purple-800">Audience Engagement</h3>
            <p className="text-gray-700">Use phrases like "واش كتعرفو شنو وقع بعد؟" (Do you know what happened next?) to involve listeners.</p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-800">Moral Lessons</h3>
            <p className="text-gray-700">Traditional Moroccan stories often end with "والحكمة من الحكاية" (And the wisdom from the story) followed by a life lesson.</p>
          </div>
          <div>
            <h3 className="font-semibold text-purple-800">Cultural References</h3>
            <p className="text-gray-700">Incorporate Moroccan proverbs, cultural practices, and familiar settings to make stories more relatable and authentic.</p>
          </div>
        </div>
      </div>
    </div>
  );
}