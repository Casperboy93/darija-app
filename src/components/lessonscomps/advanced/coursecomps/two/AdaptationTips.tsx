"use client";

import React from 'react';

export default function AdaptationTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Adaptation Tips
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-2">🎯 Learning Strategy</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Start with Central Moroccan dialect as your base - it's widely understood</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Learn key regional variations for areas you'll visit most</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Focus on pronunciation differences first, then vocabulary</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-2">🗣️ Communication Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Don't worry about perfect regional accuracy - people will understand</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Ask locals about their preferred terms: "Kifash katgulu...?" (How do you say...?)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Listen actively and adapt your speech to match your conversation partner</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-2">📚 Practice Approach</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Watch regional TV shows and YouTube channels</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Practice with native speakers from different regions</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Keep a regional variation notebook for reference</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}