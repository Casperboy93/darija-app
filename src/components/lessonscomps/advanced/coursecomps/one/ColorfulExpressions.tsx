"use client";

import React from 'react';

export default function ColorfulExpressions() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Colorful Expressions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-2">Rah ghadi ndir majhud</h3>
          <p className="text-gray-700 mb-2">I'm going to make an effort</p>
          <p className="text-sm text-gray-600 italic">Shows determination and commitment</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-2">Kan shwiya s3ib</h3>
          <p className="text-gray-700 mb-2">It was a bit difficult</p>
          <p className="text-sm text-gray-600 italic">Modest way to describe challenges</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-2">Nmshiw nshurbu atay</h3>
          <p className="text-gray-700 mb-2">Let's go drink tea</p>
          <p className="text-sm text-gray-600 italic">Common social invitation</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-2">Bsh nehtaflu</h3>
          <p className="text-gray-700 mb-2">To celebrate</p>
          <p className="text-sm text-gray-600 italic">Used when suggesting celebration</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-2">L-café l-qdim</h3>
          <p className="text-gray-700 mb-2">The old café</p>
          <p className="text-sm text-gray-600 italic">Referring to a familiar place</p>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-2">Ghadi nmshiw</h3>
          <p className="text-gray-700 mb-2">We will go</p>
          <p className="text-sm text-gray-600 italic">Future tense expression</p>
        </div>
      </div>
    </div>
  );
}