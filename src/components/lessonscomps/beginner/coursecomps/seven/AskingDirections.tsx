"use client";

import React from 'react';

export default function AskingDirections() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Asking for Directions
      </h2>
      
      <p className="text-gray-700 mb-6">Essential phrases for asking and understanding directions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Fin kayn...?</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">Where is...?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: feen kayn</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Fin kayn l-maḥaṭṭa?" (Where is the station?)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Kīfāsh nmshī l...?</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">How do I go to...?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kee-fash n-mshee l</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Kīfāsh nmshī l-Jamaa el-Fna?" (How do I go to Jamaa el-Fna?)</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Qrīb mn hna?</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">Is it close to here?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: qreeb mn hna</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Ask if a place is nearby</p>
          </div>
        </div>

        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Bʿīd shwīya</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Distance</span>
          </div>
          <p className="text-gray-600">A bit far</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: b-eed shwee-ya</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Describing distance</p>
          </div>
        </div>
      </div>
    </div>
  );
}