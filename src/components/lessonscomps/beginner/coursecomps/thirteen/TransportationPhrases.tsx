"use client";

import React from 'react';

export default function TransportationPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Transportation Phrases
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Taking a Taxi</h3>
          <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
        <p className="font-medium text-yellow-800">Bghit nimshi l...</p>
            <p className="text-gray-700">I want to go to...</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
        <p className="font-medium text-yellow-800">Bshhal?</p>
            <p className="text-gray-700">How much?</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Taking the Bus</h3>
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
        <p className="font-medium text-blue-800">Fin mahattat al-tubis?</p>
            <p className="text-gray-700">Where is the bus station?</p>
          </div>
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
        <p className="font-medium text-blue-800">Ayy tubis l...?</p>
            <p className="text-gray-700">Which bus to...?</p>
          </div>
        </div>
      </div>
    </div>
  );
}