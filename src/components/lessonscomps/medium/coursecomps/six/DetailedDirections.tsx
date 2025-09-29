"use client";

import React from 'react';

export default function DetailedDirections() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Giving Detailed Directions
      </h2>
      
      <p className="text-gray-700 mb-6">Learn to give and understand complex directions with landmarks and specific instructions.</p>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-blue-800 mb-3">Direction Phrases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-blue-700">Sīr nīshan ḥtta tousel l...</p>
            <p className="text-gray-600">Go straight until you reach...</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700">Dūr 3la līmīn/līsār</p>
            <p className="text-gray-600">Turn right/left</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700">Ghādi tlqā... 3la yeddāk</p>
            <p className="text-gray-600">You'll find... on your right</p>
          </div>
          <div>
            <p className="font-semibold text-blue-700">Qdām l masjid mubāshara</p>
            <p className="text-gray-600">Right in front of the mosque</p>
          </div>
        </div>
      </div>
    </div>
  );
}