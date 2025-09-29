"use client";

import React from 'react';

export default function TraditionalArtsCrafts() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Traditional Arts and Crafts
      </h2>
      
      <p className="text-gray-700 mb-6">Specialized vocabulary for Morocco's rich artisanal traditions and craftsmanship.</p>
      
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-2">Decorative Arts</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-green-50 rounded">
              <p className="font-medium">Zellīj</p>
              <p className="text-sm text-gray-600">Mosaic tilework</p>
            </div>
            <div className="text-center p-2 bg-green-50 rounded">
              <p className="font-medium">Taqṭīʿ</p>
              <p className="text-sm text-gray-600">Geometric cutting</p>
            </div>
            <div className="text-center p-2 bg-green-50 rounded">
              <p className="font-medium">Naqqāsh</p>
              <p className="text-sm text-gray-600">Engraver/Decorator</p>
            </div>
            <div className="text-center p-2 bg-green-50 rounded">
              <p className="font-medium">Kharrāṭ</p>
              <p className="text-sm text-gray-600">Wood turner</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-2">Textiles and Fashion</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-green-50 rounded">
              <p className="font-medium">Ḥarīr</p>
              <p className="text-sm text-gray-600">Silk</p>
            </div>
            <div className="text-center p-2 bg-green-50 rounded">
              <p className="font-medium">Zajal</p>
              <p className="text-sm text-gray-600">Traditional poetry/song</p>
            </div>
            <div className="text-center p-2 bg-green-50 rounded">
              <p className="font-medium">Qafṭān</p>
              <p className="text-sm text-gray-600">Traditional robe</p>
            </div>
            <div className="text-center p-2 bg-green-50 rounded">
              <p className="font-medium">Takchīṭa</p>
              <p className="text-sm text-gray-600">Formal dress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}