"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <p className="text-gray-700">
          <strong>Transportation in Morocco:</strong> Grand taxis (shared taxis) are common for intercity travel. 
          In cities, petit taxis are metered but you should agree on the price beforehand. Buses are affordable 
          but can be crowded. The train system connects major cities efficiently. Always be polite when asking 
          for directions - Moroccans are generally very helpful to visitors.
        </p>
      </div>
    </div>
  );
}