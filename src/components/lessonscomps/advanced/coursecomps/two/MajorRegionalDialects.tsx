"use client";

import React from 'react';

export default function MajorRegionalDialects() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Major Regional Dialects
      </h2>
      
      <p className="text-gray-700 mb-6">Morocco's diverse geography and history have created distinct regional variations of Darija:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Northern Dialect</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Tetouan, Tangier</span>
          </div>
          <p className="text-gray-600">Heavily influenced by Spanish and Andalusian Arabic</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronunciation: fayn (where) instead of feen</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Fayn ghadi?" (Where are you going?)</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Central Dialect</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Casablanca, Rabat</span>
          </div>
          <p className="text-gray-600">Considered the standard Darija, most widely understood</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronunciation: Standard forms like "daba" (now)</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Daba ghadi nmshi." (Now I'm going to leave.)</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Eastern Dialect</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Oujda, Fez</span>
          </div>
          <p className="text-gray-600">Influenced by Algerian Arabic and classical Arabic</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronunciation: "khubz" instead of "khobz" (bread)</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Bghit khubz." (I want bread.)</p>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Southern Dialect</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Marrakech, Agadir</span>
          </div>
          <p className="text-gray-600">Influenced by Amazigh (Berber) languages</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronunciation: "nekki" instead of "ana" (I)</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><span className="font-medium">Example:</span> "Nekki men Marrakech." (I'm from Marrakech.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}