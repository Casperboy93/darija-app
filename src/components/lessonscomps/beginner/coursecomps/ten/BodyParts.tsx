"use client";

import React from 'react';

export default function BodyParts() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Body Parts
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for different parts of the body.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Ras</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Head</span>
          </div>
          <p className="text-gray-600">Head</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ras</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Kaywaja3ni rasi" (My head hurts)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">3ayn</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Face</span>
          </div>
          <p className="text-gray-600">Eye</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ayn</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "3ayni kaywaja3ni" (My eye hurts)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Yad</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Limb</span>
          </div>
          <p className="text-gray-600">Hand / Arm</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: yad</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Ksart yadi" (I broke my arm)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Rijl</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Limb</span>
          </div>
          <p className="text-gray-600">Leg / Foot</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: rijl</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Rijli kaywaja3ni" (My leg hurts)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Batn</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
          </div>
          <p className="text-gray-600">Stomach / Belly</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: batn</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Batni kaywaja3ni" (My stomach hurts)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Dahr</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
          </div>
          <p className="text-gray-600">Back</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: dahr</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Dahri kaywaja3ni" (My back hurts)</p>
          </div>
        </div>
      </div>
    </div>
  );
}