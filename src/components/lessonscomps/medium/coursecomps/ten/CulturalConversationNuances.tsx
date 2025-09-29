"use client";

import React from 'react';

export default function CulturalConversationNuances() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Cultural Conversation Nuances
      </h2>
      
      <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-teal-800 mb-2">Formal vs Informal</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Use "Ḥaḍritak" for very formal address</li>
              <li>• Switch to "nta/nti" with friends</li>
              <li>• Adjust vocabulary based on age/status</li>
              <li>• Use religious expressions appropriately</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-teal-800 mb-2">Regional Variations</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Northern Morocco: more Spanish influence</li>
              <li>• Casablanca: more French terms</li>
              <li>• Rural areas: more traditional expressions</li>
              <li>• Adapt to your conversation partner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}