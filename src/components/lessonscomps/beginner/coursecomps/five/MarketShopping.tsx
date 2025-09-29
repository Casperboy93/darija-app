"use client";

import React from 'react';

export default function MarketShopping() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Market Shopping
      </h2>
      
      <div className="bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-green-800">Essential Market Phrases:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Bsh7al hada?</p>
            <p className="text-gray-700 text-sm">How much is this?</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Ghali bzaf</p>
            <p className="text-gray-700 text-sm">Too expensive</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">3tini kilo</p>
            <p className="text-gray-700 text-sm">Give me a kilo</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Wash 3andek...?</p>
            <p className="text-gray-700 text-sm">Do you have...?</p>
          </div>
        </div>
      </div>
    </div>
  );
}