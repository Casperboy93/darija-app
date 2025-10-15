"use client";

import React from 'react';

export default function Transportation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Transportation
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for different modes of transportation in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Tubis</p>
            <span className="text-2xl">🚌</span>
          </div>
          <p className="text-gray-600">Bus</p>
          <p className="text-sm text-gray-500 mt-1">طوبيس</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Taksi</p>
            <span className="text-2xl">🚕</span>
          </div>
          <p className="text-gray-600">Taxi</p>
          <p className="text-sm text-gray-500 mt-1">طاكسي</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Qitar</p>
            <span className="text-2xl">🚂</span>
          </div>
          <p className="text-gray-600">Train</p>
          <p className="text-sm text-gray-500 mt-1">قطار</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Sayyara</p>
            <span className="text-2xl">🚗</span>
          </div>
          <p className="text-gray-600">Car</p>
          <p className="text-sm text-gray-500 mt-1">سيارة</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Darraja</p>
            <span className="text-2xl">🚲</span>
          </div>
          <p className="text-gray-600">Bicycle</p>
          <p className="text-sm text-gray-500 mt-1">دراجة</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Tayyara</p>
            <span className="text-2xl">✈️</span>
          </div>
          <p className="text-gray-600">Airplane</p>
          <p className="text-sm text-gray-500 mt-1">طيارة</p>
        </div>
      </div>
    </div>
  );
}