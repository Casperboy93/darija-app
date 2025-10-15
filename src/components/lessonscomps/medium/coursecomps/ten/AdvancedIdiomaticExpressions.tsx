"use client";

import React from 'react';

export default function AdvancedIdiomaticExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Advanced Idiomatic Expressions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-3">Wisdom Sayings</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-orange-700">Sabr miftah l faraj</p>
              <p className="text-gray-600 text-sm">Patience is the key to relief</p>
            </div>
            <div>
              <p className="font-semibold text-orange-700">L 3ilm nur</p>
              <p className="text-gray-600 text-sm">Knowledge is light</p>
            </div>
            <div>
              <p className="font-semibold text-orange-700">Man sabar zafar</p>
              <p className="text-gray-600 text-sm">Who perseveres, wins</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-orange-800 mb-3">Conversational Idioms</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-orange-700">Daq l hal</p>
              <p className="text-gray-600 text-sm">The situation became difficult</p>
            </div>
            <div>
              <p className="font-semibold text-orange-700">Tah f balu</p>
              <p className="text-gray-600 text-sm">He lost his mind</p>
            </div>
            <div>
              <p className="font-semibold text-orange-700">Khraja 3la tariqu</p>
              <p className="text-gray-600 text-sm">He went off track</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}