"use client";

import React from 'react';

export default function ArtificialIntelligence() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Artificial Intelligence and Machine Learning
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-blue-800 mb-4">AI Fundamentals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">Core AI Concepts</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Fundamentals</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Dhakāʾ iṣṭināʿī:</span> Artificial intelligence</p>
              <p className="text-sm"><span className="font-semibold">Taʿallum ālī:</span> Machine learning</p>
              <p className="text-sm"><span className="font-semibold">Taʿallum ʿamīq:</span> Deep learning</p>
              <p className="text-sm"><span className="font-semibold">Shabakāt ʿaṣabiyya:</span> Neural networks</p>
              <p className="text-sm"><span className="font-semibold">Khuwarizmiyyāt:</span> Algorithms</p>
            </div>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <p className="font-bold text-lg text-gray-900">ML Applications</p>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Applications</span>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-sm"><span className="font-semibold">Ruʾya ḥāsūbiyya:</span> Computer vision</p>
              <p className="text-sm"><span className="font-semibold">Maʿālajat lughawiyya:</span> Natural language processing</p>
              <p className="text-sm"><span className="font-semibold">Tanabbuʾ:</span> Prediction</p>
              <p className="text-sm"><span className="font-semibold">Taṣnīf:</span> Classification</p>
              <p className="text-sm"><span className="font-semibold">Tanqīb bayānāt:</span> Data mining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}