"use client";

import React from 'react';

export default function TraditionalPoetryForms() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Traditional Moroccan Poetry Forms
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Malhūn - The People's Poetry</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Example Verse</h4>
            <div className="text-center p-4 bg-orange-50 rounded-md">
              <p className="font-semibold text-lg text-orange-800 mb-2">Yā ṭāʾir ghannī li ḥabībī</p>
              <p className="text-gray-600 mb-2">Qūl lū anna qalbī ḥazīn</p>
              <p className="text-sm text-gray-500">O bird, sing to my beloved / Tell them that my heart is sad</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Characteristics</h4>
              <ul className="text-sm space-y-1">
                <li>• Uses colloquial Darija</li>
                <li>• Simple, accessible themes</li>
                <li>• Often sung or chanted</li>
                <li>• Reflects daily life</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-700 mb-2">Common Themes</h4>
              <ul className="text-sm space-y-1">
                <li>• Love and separation</li>
                <li>• Social commentary</li>
                <li>• Religious devotion</li>
                <li>• Nature and seasons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}