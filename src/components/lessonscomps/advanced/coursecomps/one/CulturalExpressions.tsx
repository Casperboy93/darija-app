"use client";

import React from 'react';

export default function CulturalExpressions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Cultural Expressions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">Inshallah</h3>
          <p className="text-gray-700 mb-2">God willing / If God wills</p>
          <p className="text-sm text-gray-600 italic">Used when talking about future plans or hopes</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">Hamdullah</h3>
          <p className="text-gray-700 mb-2">Thank God / Praise be to God</p>
          <p className="text-sm text-gray-600 italic">Expression of gratitude or relief</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">Tbarkellah 3lik</h3>
          <p className="text-gray-700 mb-2">Well done / Good job</p>
          <p className="text-sm text-gray-600 italic">Literally "God bless you" - used to praise someone</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">Bismillah</h3>
          <p className="text-gray-700 mb-2">In the name of God</p>
          <p className="text-sm text-gray-600 italic">Said before starting something important</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">Mabrook</h3>
          <p className="text-gray-700 mb-2">Congratulations</p>
          <p className="text-sm text-gray-600 italic">Used to celebrate achievements or good news</p>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">Allah y3tik saha</h3>
          <p className="text-gray-700 mb-2">May God give you health</p>
          <p className="text-sm text-gray-600 italic">Said to someone who is working or helping</p>
        </div>
      </div>
    </div>
  );
}