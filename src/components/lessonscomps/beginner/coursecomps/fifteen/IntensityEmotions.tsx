"use client";

import React from 'react';

export default function IntensityEmotions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Intensity of Emotions
      </h2>
      
      <p className="text-gray-700 mb-6">Learn to express the intensity or degree of your emotions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-5 text-center">
          <div className="text-3xl mb-3">📏</div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Shwayya</h3>
          <p className="text-gray-600">A little</p>
          <p className="text-sm text-gray-500 mt-1">شوية</p>
          <div className="mt-3 text-sm text-gray-700">
        <p><em>Ana farhan shwayya</em></p>
            <p>I'm a little happy</p>
          </div>
        </div>
        
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-5 text-center">
          <div className="text-3xl mb-3">📊</div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">Wadih</h3>
          <p className="text-gray-600">Clearly/Obviously</p>
          <p className="text-sm text-gray-500 mt-1">واضح</p>
          <div className="mt-3 text-sm text-gray-700">
        <p><em>Ana ta'ban wadih</em></p>
            <p>I'm clearly tired</p>
          </div>
        </div>
        
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-5 text-center">
          <div className="text-3xl mb-3">📈</div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">Bzaf</h3>
          <p className="text-gray-600">Very much/A lot</p>
          <p className="text-sm text-gray-500 mt-1">بزاف</p>
          <div className="mt-3 text-sm text-gray-700">
        <p><em>Ana farhan bzaf</em></p>
            <p>I'm very happy</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5">
        <h4 className="font-semibold text-gray-800 mb-3">Usage Examples:</h4>
        <div className="space-y-2 text-sm">
        <p><strong>Ana hazin shwayya</strong> - I'm a little sad</p>
        <p><strong>Hiya ghadba bzaf</strong> - She's very angry</p>
        <p><strong>Huwa marid wadih</strong> - He's clearly sick</p>
        </div>
      </div>
    </div>
  );
}