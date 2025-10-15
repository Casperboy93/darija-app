"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-sky-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Weather Conversation</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-sky-500">
            <p className="font-medium text-sky-700">Ahmed:</p>
            <p className="text-gray-800">"Kif al-jaww al-yawm?"</p>
            <p className="text-gray-600 text-sm">"How's the weather today?"</p>
          </div>
          
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <p className="font-medium text-green-700">Fatima:</p>
            <p className="text-gray-800">"Al-jaww harr bzaf, u fih shams qawiyya"</p>
            <p className="text-gray-600 text-sm">"The weather is very hot, and there's strong sun"</p>
          </div>
          
          <div className="bg-white p-4 rounded border-l-4 border-sky-500">
            <p className="font-medium text-sky-700">Ahmed:</p>
            <p className="text-gray-800">"Iwa, al-sayf f-l-Maghrib harr dayman"</p>
            <p className="text-gray-600 text-sm">"Yes, summer in Morocco is always hot"</p>
          </div>
        </div>
      </div>
    </div>
  );
}