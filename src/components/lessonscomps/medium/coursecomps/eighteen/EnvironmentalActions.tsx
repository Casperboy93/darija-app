"use client";

import React from 'react';

export default function EnvironmentalActions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full mr-3"></div>
        Environmental Actions
      </h2>
      
      <p className="text-gray-700 mb-6">Actions individuals can take to protect the environment.</p>
      
      <div className="space-y-4">
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-indigo-800 mb-2">Daily Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Tawfir al-miyah</p>
              <p className="text-sm text-gray-600">Save water</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Tawfir at-taqa</p>
              <p className="text-sm text-gray-600">Save energy</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Qalil al-nufayat</p>
              <p className="text-sm text-gray-600">Reduce waste</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Naql ʿamm</p>
              <p className="text-sm text-gray-600">Public transport</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}