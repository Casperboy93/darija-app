"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Asking for Directions</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-orange-500">
            <p className="font-medium text-orange-700">Tourist:</p>
        <p className="text-gray-800">"Afak, fin kayn al-masjid al-kabir?"</p>
            <p className="text-gray-600 text-sm">"Excuse me, where is the big mosque?"</p>
          </div>
          
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="font-medium text-green-700">Local:</p>
        <p className="text-gray-800">"Sir qiddam, thumma dur 'la yamin. Qarib bzaf"</p>
            <p className="text-gray-600 text-sm">"Go straight, then turn right. Very close"</p>
          </div>
          
          <div className="bg-white p-4 rounded border-l-4 border-orange-500">
            <p className="font-medium text-orange-700">Tourist:</p>
        <p className="text-gray-800">"Shukran bzaf!"</p>
            <p className="text-gray-600 text-sm">"Thank you very much!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}