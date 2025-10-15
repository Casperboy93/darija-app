"use client";

import React from 'react';

export default function FinalMasteryChallenge() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Final Mastery Challenge
      </h2>
      
      <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-pink-800 mb-4">The Ultimate Conversation Test</h3>
        <p className="text-gray-700 mb-4">Choose one topic and prepare a 10-minute presentation that includes:</p>
        <div className="bg-white p-4 rounded-md border border-pink-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-pink-800 mb-2">Required Elements:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- Personal story or anecdote</li>
                <li>- Complex opinion with reasoning</li>
                <li>- Cultural reference or comparison</li>
                <li>- Interactive Q&A session</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-pink-800 mb-2">Suggested Topics:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>- "The Future of Morocco"</li>
                <li>- "Technology and Tradition"</li>
                <li>- "My Life Philosophy"</li>
                <li>- "Education and Society"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}