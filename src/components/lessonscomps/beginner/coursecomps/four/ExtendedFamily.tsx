"use client";

import React from 'react';

export default function ExtendedFamily() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Extended Family
      </h2>
      
      <p className="text-gray-700 mb-6">Important family members in Moroccan culture, where extended family plays a significant role.</p>
      
      <div className="space-y-4">
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-lg mb-2">Jedd / Jedda</p>
              <p className="text-gray-600 mb-1">Grandfather / Grandmother</p>
              <p className="text-sm italic text-gray-500">Pronounced: jed / jed-da</p>
            </div>
            <div>
              <p className="font-medium text-lg mb-2">3amm / 3amma</p>
              <p className="text-gray-600 mb-1">Uncle / Aunt (father's side)</p>
              <p className="text-sm italic text-gray-500">Pronounced: amm / am-ma</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-lg mb-2">Khal / Khala</p>
              <p className="text-gray-600 mb-1">Uncle / Aunt (mother's side)</p>
              <p className="text-sm italic text-gray-500">Pronounced: khal / kha-la</p>
            </div>
            <div>
              <p className="font-medium text-lg mb-2">Weld 3amm / Bent 3amm</p>
              <p className="text-gray-600 mb-1">Male / Female cousin (father's side)</p>
              <p className="text-sm italic text-gray-500">Pronounced: weld amm / bent amm</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-lg mb-2">Weld khal / Bent khal</p>
              <p className="text-gray-600 mb-1">Male / Female cousin (mother's side)</p>
              <p className="text-sm italic text-gray-500">Pronounced: weld khal / bent khal</p>
            </div>
            <div>
              <p className="font-medium text-lg mb-2">7ma / 7mo</p>
              <p className="text-gray-600 mb-1">Father-in-law / Mother-in-law</p>
              <p className="text-sm italic text-gray-500">Pronounced: hma / hmo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}