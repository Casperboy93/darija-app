"use client";

import React from 'react';

export default function FoodCulture() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Moroccan Food Culture
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.062 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">Dining Etiquette</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• Wash your hands before eating (often provided at restaurants)</li>
              <li>• Use your right hand for eating and drinking</li>
              <li>• Bread is often used as a utensil to scoop food</li>
              <li>• Mint tea is served throughout the day and after meals</li>
              <li>• Friday couscous is a traditional family meal</li>
              <li>• Tipping 10-15% is customary in restaurants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}