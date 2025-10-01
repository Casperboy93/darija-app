"use client";

import React from 'react';

export default function VocabularyVariations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Vocabulary Variations
      </h2>
      
      <p className="text-gray-700 mb-6">Different regions use different words for the same concepts:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Food & Drink</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Bread:</span>
              <span className="text-gray-600">khobz (Central) / khubz (Eastern)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Tea:</span>
              <span className="text-gray-600">atay (Most) / tay (Some regions)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Water:</span>
              <span className="text-gray-600">ma (Most) / lma (Some regions)</span>
            </div>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Common Objects</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Car:</span>
              <span className="text-gray-600">tomobil (Most) / karhba (Some)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Money:</span>
              <span className="text-gray-600">flus (Most) / drhem (Formal)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">House:</span>
              <span className="text-gray-600">dar (Most) / bit (Some regions)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}