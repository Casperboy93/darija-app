"use client";

import React from 'react';

export default function BodyPartsHealth() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Body Parts and Health
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for describing body parts and health conditions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Rās</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
          </div>
          <p className="text-gray-600">Head</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ras</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Rāsī kaywalja3nī" (My head hurts)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Qalb</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
          </div>
          <p className="text-gray-600">Heart</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: qalb</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Qalbī kayḍrab bezzāf" (My heart is beating fast)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Baṭn</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
          </div>
          <p className="text-gray-600">Stomach/Belly</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: batn</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Baṭnī kaywalja3nī men l makla" (My stomach hurts from the food)</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Rigl</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Body</span>
          </div>
          <p className="text-gray-600">Leg/Foot</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: rigl</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">Example: "Riglī mkassra" (My leg is broken)</p>
          </div>
        </div>
      </div>
    </div>
  );
}