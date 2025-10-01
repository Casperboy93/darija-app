"use client";

import React from 'react';

export default function NarrativeVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Narrative Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for rich storytelling and narrative construction:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Story Elements</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Essential</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Story</span>
              <span className="font-medium">حكاية - Hikaya</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Character</span>
              <span className="font-medium">شخصية - Shakhsiyya</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Plot</span>
              <span className="font-medium">حبكة - Habka</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Beginning</span>
              <span className="font-medium">بداية - Bidaya</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Ending</span>
              <span className="font-medium">نهاية - Nihaya</span>
            </div>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg text-gray-900">Emotions & Descriptions</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Important</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Beautiful</span>
              <span className="font-medium">زوين - Zwin</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mysterious</span>
              <span className="font-medium">غامض - Ghamid</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Exciting</span>
              <span className="font-medium">مثير - Muthir</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sad</span>
              <span className="font-medium">حزين - Hazin</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Magical</span>
              <span className="font-medium">سحري - Sihri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}