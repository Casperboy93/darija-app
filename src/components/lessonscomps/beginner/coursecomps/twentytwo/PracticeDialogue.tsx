"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Practice Dialogue</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">At the Hotel Reception</h3>
        <div className="space-y-4">
          <div className="flex">
            <div className="w-20 font-semibold text-blue-600">Tourist:</div>
            <div className="flex-1">
              <div className="text-gray-800">Salam, bghit hajz ghorfa</div>
              <div className="text-sm text-gray-600">Hello, I want to book a room</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-green-600">Staff:</div>
            <div className="flex-1">
              <div className="text-gray-800">Ahlan wa sahlan! Kam min lila?</div>
              <div className="text-sm text-gray-600">Welcome! How many nights?</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-blue-600">Tourist:</div>
            <div className="flex-1">
              <div className="text-gray-800">Thalath lyali, min fadlik</div>
              <div className="text-sm text-gray-600">Three nights, please</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-green-600">Staff:</div>
            <div className="flex-1">
              <div className="text-gray-800">Mashi mushkil. Wash bghiti ghorfa b hammam?</div>
              <div className="text-sm text-gray-600">No problem. Do you want a room with bathroom?</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-blue-600">Tourist:</div>
            <div className="flex-1">
              <div className="text-gray-800">Aywa, w wash kayn ftar?</div>
              <div className="text-sm text-gray-600">Yes, and is there breakfast?</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-20 font-semibold text-green-600">Staff:</div>
            <div className="flex-1">
              <div className="text-gray-800">Na3am, ftar min sb3a l tis3a</div>
              <div className="text-sm text-gray-600">Yes, breakfast from seven to nine</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Phrases from the Dialogue</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div><span className="font-medium">kam min lila?</span> - how many nights?</div>
          <div><span className="font-medium">thalath lyali</span> - three nights</div>
          <div><span className="font-medium">mashi mushkil</span> - no problem</div>
          <div><span className="font-medium">min sb3a l tis3a</span> - from seven to nine</div>
        </div>
      </div>
    </div>
  );
}