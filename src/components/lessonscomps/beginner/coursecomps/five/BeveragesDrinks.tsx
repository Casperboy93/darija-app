"use client";

import React from 'react';

export default function BeveragesDrinks() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Beverages & Drinks
      </h2>
      
      <p className="text-gray-700 mb-6">Essential drinks you'll encounter in Moroccan cafes, restaurants, and homes.</p>
      
      <div className="space-y-4">
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-lg mb-2">Atay (أتاي)</p>
              <p className="text-gray-600 mb-1">Moroccan mint tea</p>
              <p className="text-sm italic text-gray-500">Pronounced: ah-tie</p>
            </div>
            <div>
              <p className="font-medium text-lg mb-2">Qahwa</p>
              <p className="text-gray-600 mb-1">Coffee</p>
              <p className="text-sm italic text-gray-500">Pronounced: qah-wa</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-lg mb-2">Ma</p>
              <p className="text-gray-600 mb-1">Water</p>
              <p className="text-sm italic text-gray-500">Pronounced: mah</p>
            </div>
            <div>
              <p className="font-medium text-lg mb-2">3asir</p>
              <p className="text-gray-600 mb-1">Fresh juice</p>
              <p className="text-sm italic text-gray-500">Pronounced: ah-seer</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-green-200 rounded-lg p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-lg mb-2">Lben</p>
              <p className="text-gray-600 mb-1">Buttermilk</p>
              <p className="text-sm italic text-gray-500">Pronounced: l-ben</p>
            </div>
            <div>
              <p className="font-medium text-lg mb-2">Coca</p>
              <p className="text-gray-600 mb-1">Coca-Cola / Soda</p>
              <p className="text-sm italic text-gray-500">Pronounced: ko-ka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}