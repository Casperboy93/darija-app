"use client";

import React from 'react';

export default function MaritalStatus() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Marital Status & Relationships
      </h2>
      
      <div className="bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4 text-green-800">Relationship Terms:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Rajel / Mra</p>
            <p className="text-gray-700 text-sm">Husband / Wife</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">3azeb / 3azba</p>
            <p className="text-gray-700 text-sm">Single (male / female)</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Mtzawej / Mtzawja</p>
            <p className="text-gray-700 text-sm">Married (male / female)</p>
          </div>
          <div className="p-3 bg-green-50 rounded-md">
            <p className="font-medium">Mtalaq / Mtalaqa</p>
            <p className="text-gray-700 text-sm">Divorced (male / female)</p>
          </div>
        </div>
      </div>
    </div>
  );
}