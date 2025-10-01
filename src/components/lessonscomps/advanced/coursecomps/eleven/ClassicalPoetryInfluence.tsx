"use client";

import React from 'react';

export default function ClassicalPoetryInfluence() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Classical Poetry Influence
      </h2>
      
      <p className="text-gray-700 mb-6">
        Darija poetry draws heavily from classical Arabic traditions while maintaining its unique Moroccan character.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Qasida Tradition</p>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Classical</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Baḥr:</span> Poetic meter</p>
            <p className="text-sm"><span className="font-semibold">Qāfiya:</span> Rhyme scheme</p>
            <p className="text-sm"><span className="font-semibold">Maṭla':</span> Opening couplet</p>
            <p className="text-sm"><span className="font-semibold">Khatm:</span> Closing verse</p>
          </div>
        </div>
        
        <div className="border border-indigo-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Modern Adaptations</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Contemporary</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Shi'r ḥurr:</span> Free verse</p>
            <p className="text-sm"><span className="font-semibold">Zajal:</span> Folk poetry</p>
            <p className="text-sm"><span className="font-semibold">Malhūn:</span> Colloquial poetry</p>
            <p className="text-sm"><span className="font-semibold">Ghināʾ:</span> Song poetry</p>
          </div>
        </div>
      </div>
    </div>
  );
}