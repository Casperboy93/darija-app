"use client";

import React from 'react';

export default function UsefulPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Useful Phrases
      </h2>
      
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <p className="font-semibold text-purple-800">Ash kāyn f-had l-maḥall?</p>
          <p className="text-gray-700">What do you have in this store?</p>
          <p className="text-sm text-gray-500 mt-1">أش كاين في هاد المحل؟</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <p className="font-semibold text-purple-800">Bghīt qamīṣ azraq</p>
          <p className="text-gray-700">I want a blue shirt</p>
          <p className="text-sm text-gray-500 mt-1">بغيت قميص أزرق</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <p className="font-semibold text-purple-800">Bshḥāl hāda?</p>
          <p className="text-gray-700">How much is this?</p>
          <p className="text-sm text-gray-500 mt-1">بشحال هادا؟</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <p className="font-semibold text-purple-800">Kāyn ḥajm akbar?</p>
          <p className="text-gray-700">Do you have a bigger size?</p>
          <p className="text-sm text-gray-500 mt-1">كاين حجم أكبر؟</p>
        </div>
      </div>
    </div>
  );
}