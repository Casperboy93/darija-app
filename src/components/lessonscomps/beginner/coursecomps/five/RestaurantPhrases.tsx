"use client";

import React from 'react';

export default function RestaurantPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Restaurant Phrases
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Bghit nshuf l-menu (I want to see the menu)</p>
          <p className="text-gray-600 mb-1">Asking for the menu</p>
          <p className="text-sm italic text-gray-500">Pronounced: bghit n-shoof l-me-noo</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Ash katnsah? (What do you recommend?)</p>
          <p className="text-gray-600 mb-1">Asking for recommendations</p>
          <p className="text-sm italic text-gray-500">Pronounced: ash kat-n-sah</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Bghit tajine djaj (I want chicken tajine)</p>
          <p className="text-gray-600 mb-1">Ordering a specific dish</p>
          <p className="text-sm italic text-gray-500">Pronounced: bghit ta-jeen d-jaj</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">Bla harr, afak (Not spicy, please)</p>
          <p className="text-gray-600 mb-1">Requesting no spice</p>
          <p className="text-sm italic text-gray-500">Pronounced: bla har, ah-fak</p>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <p className="font-medium text-lg mb-2">L-7sab, afak (The bill, please)</p>
          <p className="text-gray-600 mb-1">Asking for the check</p>
          <p className="text-sm italic text-gray-500">Pronounced: l-h-sab, ah-fak</p>
        </div>
      </div>
    </div>
  );
}