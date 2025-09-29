"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-sky-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <p className="text-gray-700">
          <strong>Morocco's Climate:</strong> Morocco has diverse climate zones. The coast has a Mediterranean climate, 
          the interior has hot summers and mild winters, and the Atlas Mountains can be quite cold with snow in winter. 
          The Sahara region is extremely hot and dry. Weather is a common conversation starter, especially during 
          extreme temperatures or the rainy season.
        </p>
      </div>
    </div>
  );
}