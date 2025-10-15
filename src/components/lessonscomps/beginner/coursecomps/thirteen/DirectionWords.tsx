"use client";

import React from 'react';

export default function DirectionWords() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Direction Words
      </h2>
      
      <p className="text-gray-700 mb-6">Essential words for giving and understanding directions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Yamin</p>
            <span className="text-2xl">➡️</span>
          </div>
          <p className="text-gray-600">Right</p>
          <p className="text-sm text-gray-500 mt-1">يمين</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Yasar</p>
            <span className="text-2xl">⬅️</span>
          </div>
          <p className="text-gray-600">Left</p>
          <p className="text-sm text-gray-500 mt-1">يسار</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Qiddam</p>
            <span className="text-2xl">⬆️</span>
          </div>
          <p className="text-gray-600">Straight/Forward</p>
          <p className="text-sm text-gray-500 mt-1">قدام</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Wara</p>
            <span className="text-2xl">⬇️</span>
          </div>
          <p className="text-gray-600">Behind/Back</p>
          <p className="text-sm text-gray-500 mt-1">ورا</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Qarib</p>
            <span className="text-2xl">📍</span>
          </div>
          <p className="text-gray-600">Near/Close</p>
          <p className="text-sm text-gray-500 mt-1">قريب</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-gray-900">B3id</p>
            <span className="text-2xl">🔭</span>
          </div>
          <p className="text-gray-600">Far</p>
          <p className="text-sm text-gray-500 mt-1">بعيد</p>
        </div>
      </div>
    </div>
  );
}