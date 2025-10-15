"use client";

import React from 'react';

export default function ClimateWeatherPatterns() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Climate and Weather Patterns
      </h2>
      
      <p className="text-gray-700 mb-6">Morocco's diverse climate zones and weather patterns.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Munakh mutawassiti</p>
            <span className="text-2xl">🌊</span>
          </div>
          <p className="text-gray-600">Mediterranean climate</p>
          <p className="text-sm text-gray-500 mt-1">مناخ متوسطي</p>
          <p className="text-xs text-red-600 mt-2">Coastal regions</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Munakh sahrawi</p>
            <span className="text-2xl">☀️</span>
          </div>
          <p className="text-gray-600">Desert climate</p>
          <p className="text-sm text-gray-500 mt-1">مناخ صحراوي</p>
          <p className="text-xs text-red-600 mt-2">Southern regions</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Munakh jabali</p>
            <span className="text-2xl">🏔️</span>
          </div>
          <p className="text-gray-600">Mountain climate</p>
          <p className="text-sm text-gray-500 mt-1">مناخ جبلي</p>
          <p className="text-xs text-red-600 mt-2">Atlas Mountains</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Riyah sharqiyya</p>
            <span className="text-2xl">💨</span>
          </div>
          <p className="text-gray-600">Sirocco winds</p>
          <p className="text-sm text-gray-500 mt-1">رياح شرقية</p>
          <p className="text-xs text-red-600 mt-2">Hot, dry winds from Sahara</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h3 className="font-semibold text-red-800 mb-3">Weather Vocabulary</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Harr</p>
              <p className="text-sm text-gray-600">Hot</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Barid</p>
              <p className="text-sm text-gray-600">Cold</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Matar</p>
              <p className="text-sm text-gray-600">Rain</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Thalj</p>
              <p className="text-sm text-gray-600">Snow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}