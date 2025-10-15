"use client";

import React from 'react';

export default function CreativeWritingExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Creative Writing Exercise
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Write Your Own Poem</h3>
        <div className="bg-white p-4 rounded-lg border border-green-200">
          <p className="text-gray-700 mb-4">Try writing a short poem using these prompts:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Theme Options:</h4>
              <ul className="text-sm space-y-1">
                <li>• Homesickness (al-hanin lil-watan)</li>
                <li>• Childhood memories (dhikrayat at-tufula)</li>
                <li>• The beauty of Morocco (jamal al-Maghrib)</li>
                <li>• Friendship (as-sadaqa)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Structure Tips:</h4>
              <ul className="text-sm space-y-1">
                <li>• Start with a strong image</li>
                <li>• Use metaphors from nature</li>
                <li>• Include emotional vocabulary</li>
                <li>• End with a memorable line</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}