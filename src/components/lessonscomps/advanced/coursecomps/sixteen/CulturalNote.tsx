"use client";

import React from 'react';

export default function CulturalNote() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Cultural Note
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Morocco's Diplomatic Tradition</h3>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Morocco has a rich diplomatic tradition dating back centuries. The kingdom has historically served as a bridge between Africa, Europe, and the Arab world, maintaining diplomatic relations with diverse nations and cultures.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Today, Morocco continues this tradition through active participation in international organizations, hosting major diplomatic events, and serving as a mediator in regional conflicts.
          </p>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200 mt-4">
            <h4 className="font-semibold text-purple-700 mb-2">🌟 Fun Fact</h4>
            <p className="text-gray-600 text-sm">
              Morocco was one of the first countries to recognize the independence of the United States in 1777, and the Moroccan-American Treaty of Friendship signed in 1786 is still in effect today, making it one of the longest-standing treaties in U.S. history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}