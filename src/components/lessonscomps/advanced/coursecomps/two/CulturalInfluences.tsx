"use client";

import React from 'react';

export default function CulturalInfluences() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Cultural Influences
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-2">Spanish Influence (North)</h3>
          <p className="text-gray-600 mb-3">Due to historical Spanish presence in northern Morocco:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Spanish Loanwords:</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>• mesa (table) → misa</li>
                <li>• ventana (window) → bentana</li>
                <li>• cuchara (spoon) → kuchara</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Pronunciation:</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>• Softer consonants</li>
                <li>• Different intonation patterns</li>
                <li>• Some Spanish phonemes</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-2">Amazigh Influence (South & Atlas)</h3>
          <p className="text-gray-600 mb-3">Berber languages have significantly influenced southern dialects:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Amazigh Loanwords:</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>• azref (house) influences</li>
                <li>• aman (water) → ma</li>
                <li>• agadir (fortress) → city name</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Grammar Features:</p>
              <ul className="mt-1 space-y-1 text-sm">
                <li>• Different pronoun systems</li>
                <li>• Unique verb conjugations</li>
                <li>• Distinct word order patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}