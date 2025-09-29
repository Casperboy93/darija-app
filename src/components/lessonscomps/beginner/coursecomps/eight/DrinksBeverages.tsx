"use client";

import React from 'react';

export default function DrinksBeverages() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Drinks and Beverages
      </h2>
      
      <p className="text-gray-700 mb-6">Common drinks and how to order them in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Atāy</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Hot Drink</span>
          </div>
          <p className="text-gray-600">Mint tea</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: a-tay</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Kās atāy, afak" (A glass of tea, please)</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Qahwa</p>
            <span className="bg-brown-100 text-brown-800 text-xs px-2 py-1 rounded-full">Hot Drink</span>
          </div>
          <p className="text-gray-600">Coffee</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: qah-wa</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Qahwa b-ḥlīb" (Coffee with milk)</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Māʾ</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Cold Drink</span>
          </div>
          <p className="text-gray-600">Water</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ma</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Māʾ bārid" (Cold water)</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">ʿAṣīr</p>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Cold Drink</span>
          </div>
          <p className="text-gray-600">Juice</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: a-seer</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "ʿAṣīr burtuqāl" (Orange juice)</p>
          </div>
        </div>
      </div>
    </div>
  );
}