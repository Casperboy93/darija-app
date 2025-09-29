"use client";

import React from 'react';

export default function GivingDirections() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Giving Directions
      </h2>
      
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="font-semibold text-orange-800">Sir qiddām</p>
          <p className="text-gray-700">Go straight</p>
          <p className="text-sm text-gray-500 mt-1">سير قدام</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="font-semibold text-orange-800">Dūr 'la yamīn</p>
          <p className="text-gray-700">Turn right</p>
          <p className="text-sm text-gray-500 mt-1">دور على يمين</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="font-semibold text-orange-800">Dūr 'la yasār</p>
          <p className="text-gray-700">Turn left</p>
          <p className="text-sm text-gray-500 mt-1">دور على يسار</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="font-semibold text-orange-800">Wqaf hna</p>
          <p className="text-gray-700">Stop here</p>
          <p className="text-sm text-gray-500 mt-1">وقف هنا</p>
        </div>
      </div>
    </div>
  );
}