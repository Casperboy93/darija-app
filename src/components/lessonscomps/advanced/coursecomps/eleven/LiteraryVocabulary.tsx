"use client";

import React from 'react';

export default function LiteraryVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Literary Vocabulary
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Poetic Terms and Expressions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Emotions & Feelings</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Hanin:</span> Longing, nostalgia</p>
              <p><span className="font-semibold">Gharam:</span> Passionate love</p>
              <p><span className="font-semibold">Huzn:</span> Deep sadness</p>
              <p><span className="font-semibold">Farah:</span> Joy, happiness</p>
              <p><span className="font-semibold">Shawq:</span> Yearning</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Nature & Beauty</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Jamal:</span> Beauty</p>
              <p><span className="font-semibold">Bahaʾ:</span> Splendor</p>
              <p><span className="font-semibold">Nur:</span> Light, radiance</p>
              <p><span className="font-semibold">Zahr:</span> Flowers, bloom</p>
              <p><span className="font-semibold">Najm:</span> Star</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Time & Memory</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Dhikra:</span> Memory</p>
              <p><span className="font-semibold">Madi:</span> Past</p>
              <p><span className="font-semibold">Hadir:</span> Present</p>
              <p><span className="font-semibold">Mustaqbal:</span> Future</p>
              <p><span className="font-semibold">Zaman:</span> Time, era</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}