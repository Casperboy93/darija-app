"use client";

import React from 'react';

export default function Seasons() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-sky-500 rounded-full mr-3"></div>
        The Four Seasons
      </h2>
      
      <p className="text-gray-700 mb-6">Learn the names of the four seasons and their characteristics in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-sky-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Rabī'</p>
            <span className="text-2xl">🌸</span>
          </div>
          <p className="text-gray-600">Spring</p>
          <p className="text-sm text-gray-500 mt-1">ربيع</p>
          <p className="text-xs text-gray-400 mt-2">March - May</p>
        </div>
        
        <div className="border border-sky-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṣayf</p>
            <span className="text-2xl">☀️</span>
          </div>
          <p className="text-gray-600">Summer</p>
          <p className="text-sm text-gray-500 mt-1">صيف</p>
          <p className="text-xs text-gray-400 mt-2">June - August</p>
        </div>
        
        <div className="border border-sky-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Kharīf</p>
            <span className="text-2xl">🍂</span>
          </div>
          <p className="text-gray-600">Autumn/Fall</p>
          <p className="text-sm text-gray-500 mt-1">خريف</p>
          <p className="text-xs text-gray-400 mt-2">September - November</p>
        </div>
        
        <div className="border border-sky-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Shitā'</p>
            <span className="text-2xl">❄️</span>
          </div>
          <p className="text-gray-600">Winter</p>
          <p className="text-sm text-gray-500 mt-1">شتاء</p>
          <p className="text-xs text-gray-400 mt-2">December - February</p>
        </div>
      </div>
    </div>
  );
}