"use client";

import React from 'react';

export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <h3 className="font-semibold text-orange-800 mb-4">Restaurant Role Play</h3>
        <p className="text-gray-700 mb-4">Practice ordering a complete meal at a Moroccan restaurant. Include appetizer, main course, drink, and asking for the bill.</p>
        
        <div className="bg-white p-4 rounded-md border border-orange-100">
          <p className="font-medium text-orange-800 mb-2">Vocabulary to use:</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>Bghit nakul (I want to eat)</li>
            <li>Shnu 3andkum? (What do you have?)</li>
            <li>Tajin djaj (Chicken tagine)</li>
            <li>Kas atay (Glass of tea)</li>
            <li>Bshhal hada? (How much is this?)</li>
            <li>L-hisab, afak (The bill, please)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}