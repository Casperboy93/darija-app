"use client";

import React from 'react';

export default function FormalVsInformal() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Formal vs Informal Contexts
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Formal Situations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Business/Official:</p>
              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                <li>• Use Standard Arabic mixed with Darija</li>
                <li>• Formal pronouns (ntuma, hadretkom)</li>
                <li>• Professional titles and courtesy</li>
                <li>• Avoid slang and casual expressions</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-purple-800">Religious/Cultural Events:</p>
              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                <li>• Increased religious expressions</li>
                <li>• Traditional greetings and blessings</li>
                <li>• Respectful tone and vocabulary</li>
                <li>• Cultural sensitivity required</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Informal Situations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Friends/Peers:</p>
              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                <li>• Casual pronouns (nta, nti)</li>
                <li>• Slang and colloquial expressions</li>
                <li>• Relaxed grammar and structure</li>
                <li>• Humor and playful language</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-purple-800">Family/Close Relations:</p>
              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                <li>• Intimate vocabulary and nicknames</li>
                <li>• Regional dialect variations</li>
                <li>• Emotional expressions</li>
                <li>• Family-specific terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}