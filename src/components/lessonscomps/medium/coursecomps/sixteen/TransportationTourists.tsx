"use client";

import React from 'react';

export default function TransportationTourists() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Transportation for Tourists
      </h2>
      
      <p className="text-gray-700 mb-6">Learn about different transportation options available for tourists in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Qiṭār</p>
            <span className="text-2xl">🚂</span>
          </div>
          <p className="text-gray-600">Train</p>
          <p className="text-sm text-gray-500 mt-1">قطار</p>
          <p className="text-xs text-teal-600 mt-2">ONCF railway system</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ḥāfila</p>
            <span className="text-2xl">🚌</span>
          </div>
          <p className="text-gray-600">Bus</p>
          <p className="text-sm text-gray-500 mt-1">حافلة</p>
          <p className="text-xs text-teal-600 mt-2">CTM and other companies</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tāksī</p>
            <span className="text-2xl">🚕</span>
          </div>
          <p className="text-gray-600">Taxi</p>
          <p className="text-sm text-gray-500 mt-1">تاكسي</p>
          <p className="text-xs text-teal-600 mt-2">Petit/Grand taxi</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Takrīʾ sayyāra</p>
            <span className="text-2xl">🚗</span>
          </div>
          <p className="text-gray-600">Car Rental</p>
          <p className="text-sm text-gray-500 mt-1">تكريء سيارة</p>
          <p className="text-xs text-teal-600 mt-2">Self-drive option</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṭayyāra</p>
            <span className="text-2xl">✈️</span>
          </div>
          <p className="text-gray-600">Airplane</p>
          <p className="text-sm text-gray-500 mt-1">طيارة</p>
          <p className="text-xs text-teal-600 mt-2">Domestic flights</p>
        </div>
        
        <div className="border border-teal-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Markab</p>
            <span className="text-2xl">⛵</span>
          </div>
          <p className="text-gray-600">Boat</p>
          <p className="text-sm text-gray-500 mt-1">مركب</p>
          <p className="text-xs text-teal-600 mt-2">Ferry to Spain</p>
        </div>
      </div>
    </div>
  );
}