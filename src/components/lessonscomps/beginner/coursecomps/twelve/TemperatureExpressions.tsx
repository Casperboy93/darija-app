"use client";

import React from 'react';

export default function TemperatureExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-sky-500 rounded-full mr-3"></div>
        Temperature Expressions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Hot Weather</h3>
          <div className="bg-red-50 p-3 rounded border border-red-200">
            <p className="font-medium text-red-800">Harr bzaf</p>
            <p className="text-gray-700">Very hot</p>
          </div>
          <div className="bg-red-50 p-3 rounded border border-red-200">
            <p className="font-medium text-red-800">Dafi</p>
            <p className="text-gray-700">Warm</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Cold Weather</h3>
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <p className="font-medium text-blue-800">Barid bzaf</p>
            <p className="text-gray-700">Very cold</p>
          </div>
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <p className="font-medium text-blue-800">Barid shwayya</p>
            <p className="text-gray-700">A little cold</p>
          </div>
        </div>
      </div>
    </div>
  );
}