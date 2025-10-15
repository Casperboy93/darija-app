"use client";

import React from 'react';

export default function AskingHobbies() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Asking About Hobbies
      </h2>
      
      <div className="space-y-4">
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <p className="font-semibold text-pink-800">Ash kat-habb tdir f waqt al-faragh?</p>
          <p className="text-gray-700">What do you like to do in your free time?</p>
          <p className="text-sm text-gray-500 mt-1">أش كتحب تدير في وقت الفراغ؟</p>
        </div>
        
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <p className="font-semibold text-pink-800">Wash kat-l'ab kura?</p>
          <p className="text-gray-700">Do you play football?</p>
          <p className="text-sm text-gray-500 mt-1">واش كتلعب كورة؟</p>
        </div>
        
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <p className="font-semibold text-pink-800">Ash hiya hiwaytak?</p>
          <p className="text-gray-700">What is your hobby?</p>
          <p className="text-sm text-gray-500 mt-1">أش هي هوايتك؟</p>
        </div>
        
        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <p className="font-semibold text-pink-800">Kat-sma' musiqa?</p>
          <p className="text-gray-700">Do you listen to music?</p>
          <p className="text-sm text-gray-500 mt-1">كتسمع موسيقى؟</p>
        </div>
      </div>
    </div>
  );
}