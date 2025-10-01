"use client";

import React from 'react';

export default function StorytellingTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Master Storytelling Tips
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-yellow-800">Voice and Rhythm</h3>
            <p className="text-gray-700">Vary your voice tone and pace to match the story's mood. Use dramatic pauses to build suspense and emphasize key moments.</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800">Cultural Authenticity</h3>
            <p className="text-gray-700">Incorporate authentic Moroccan elements like traditional foods, customs, and familiar locations to make stories relatable and engaging.</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800">Emotional Connection</h3>
            <p className="text-gray-700">Create emotional depth by developing characters' feelings and motivations. Use descriptive language to help listeners visualize and feel the story.</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800">Practice and Performance</h3>
            <p className="text-gray-700">Regular practice improves fluency and confidence. Record yourself telling stories to identify areas for improvement in pronunciation and delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}