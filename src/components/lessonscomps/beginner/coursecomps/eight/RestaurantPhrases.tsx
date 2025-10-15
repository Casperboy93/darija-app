"use client";

import React from 'react';

export default function RestaurantPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Restaurant Phrases
      </h2>
      
      <p className="text-gray-700 mb-6">Essential phrases for dining out and ordering food.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Bghit nakul</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Request</span>
          </div>
          <p className="text-gray-600">I want to eat</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: bghit na-kul</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Starting a meal request</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Shnu 3andkum?</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">What do you have?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: shnu and-kum</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Asking about menu options</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Bshhal hada?</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Question</span>
          </div>
          <p className="text-gray-600">How much is this?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: b-shhal ha-da</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Asking about price</p>
          </div>
        </div>

        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">L-hisab, afak</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Request</span>
          </div>
          <p className="text-gray-600">The bill, please</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: l-hi-sab a-fak</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Asking for the check</p>
          </div>
        </div>
      </div>
    </div>
  );
}