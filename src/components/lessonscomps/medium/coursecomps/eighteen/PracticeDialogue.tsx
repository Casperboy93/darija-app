"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
        <h3 className="font-semibold text-pink-800 mb-4">Discussing Environmental Issues</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Environmentalist:</p>
            <p className="text-gray-700">Mā raʾyuk fī mashrūʿ Noor Ouarzazate li-ṭ-ṭāqa ash-shamsiyya?</p>
            <p className="text-sm text-gray-600 mt-1">What's your opinion on the Noor Ouarzazate solar energy project?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Citizen:</p>
            <p className="text-gray-700">Aʿtaqid annahu mashrūʿ mumtāz li-muḥāraba taghyīr al-munākh.</p>
            <p className="text-sm text-gray-600 mt-1">I think it's an excellent project to combat climate change.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Environmentalist:</p>
            <p className="text-gray-700">Naʿam, wa yajib ʿalaynā ayḍan an nuqallil min istihlāk al-miyāh.</p>
            <p className="text-sm text-gray-600 mt-1">Yes, and we should also reduce our water consumption.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Citizen:</p>
            <p className="text-gray-700">Muṭlaqan. Wa yumkin an nustaʿmil al-naql al-ʿāmm akthar min as-sayyārāt.</p>
            <p className="text-sm text-gray-600 mt-1">Absolutely. And we can use public transport more than cars.</p>
          </div>
        </div>
      </div>
    </div>
  );
}