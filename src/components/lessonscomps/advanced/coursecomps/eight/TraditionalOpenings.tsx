"use client";

import React from 'react';

export default function TraditionalOpenings() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Traditional Story Openings
      </h2>
      
      <p className="text-gray-700 mb-6">Learn classic Moroccan storytelling formulas and opening phrases:</p>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-2">Classic Openings</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium text-lg">كان ياما كان في قديم الزمان</p>
              <p className="text-gray-600 text-sm">Kan yama kan fi qadim az-zaman</p>
              <p className="text-gray-700 italic">Once upon a time, long ago</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium text-lg">حكايتي حكاية، وما فيها كذبة</p>
              <p className="text-gray-600 text-sm">Hikayti hikaya, wa ma fiha kidhba</p>
              <p className="text-gray-700 italic">My story is a story, and there's no lie in it</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-medium text-lg">في بلاد بعيدة، وراء الجبال السبعة</p>
              <p className="text-gray-600 text-sm">Fi bilad ba3ida, wara2 al-jibal as-sab3a</p>
              <p className="text-gray-700 italic">In distant lands, beyond the seven mountains</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}