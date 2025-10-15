"use client";

import React from 'react';

export default function MoroccanFoods() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Popular Moroccan Foods
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for traditional Moroccan dishes and ingredients.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Tajin</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Main Dish</span>
          </div>
          <p className="text-gray-600">Tagine (traditional stew)</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ta-jeen</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Bghit tajin djaj" (I want chicken tagjine)</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Kuskus</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Main Dish</span>
          </div>
          <p className="text-gray-600">Couscous</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kus-kus</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Example:</strong> "Kuskus b-khudra" (Couscous with vegetables)</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Pastila</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Pastry</span>
          </div>
          <p className="text-gray-600">Pastilla (sweet and savory pie)</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: pas-tee-la</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Traditional Moroccan delicacy</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Harira</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Soup</span>
          </div>
          <p className="text-gray-600">Harira (traditional soup)</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: ha-ree-ra</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Popular during Ramadan</p>
          </div>
        </div>
      </div>
    </div>
  );
}