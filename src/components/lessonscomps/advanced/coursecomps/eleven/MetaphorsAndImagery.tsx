"use client";

import React from 'react';

export default function MetaphorsAndImagery() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Metaphors and Imagery
      </h2>
      
      <p className="text-gray-700 mb-6">Master the art of creating beautiful metaphors and vivid imagery in Darija.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-blue-800 mb-3">Nature Metaphors</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-blue-700">Qalbi bahr</p>
              <p className="text-gray-600 text-sm">My heart is an ocean (deep emotions)</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">ʿAynayk najmatayn</p>
              <p className="text-gray-600 text-sm">Your eyes are two stars (beauty)</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Kalamak ʿasal</p>
              <p className="text-gray-600 text-sm">Your words are honey (sweet speech)</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-blue-800 mb-3">Abstract Concepts</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-blue-700">Ahlam kaghad</p>
              <p className="text-gray-600 text-sm">Dreams are paper (fragile hopes)</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Waqt nahr</p>
              <p className="text-gray-600 text-sm">Time is a river (flowing, unstoppable)</p>
            </div>
            <div>
              <p className="font-semibold text-blue-700">Hubb nar</p>
              <p className="text-gray-600 text-sm">Love is fire (passionate, consuming)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}