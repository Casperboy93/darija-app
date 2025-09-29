"use client";

import React from 'react';

export default function BasicColors() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Basic Colors
      </h2>
      
      <p className="text-gray-700 mb-6">Colors are essential for describing clothing and expressing preferences.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Aḥmar</p>
            <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-gray-300"></div>
          </div>
          <p className="text-gray-600">Red</p>
          <p className="text-sm text-gray-500 mt-1">أحمر</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Azraq</p>
            <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-300"></div>
          </div>
          <p className="text-gray-600">Blue</p>
          <p className="text-sm text-gray-500 mt-1">أزرق</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Akhḍar</p>
            <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-gray-300"></div>
          </div>
          <p className="text-gray-600">Green</p>
          <p className="text-sm text-gray-500 mt-1">أخضر</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Aṣfar</p>
            <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-gray-300"></div>
          </div>
          <p className="text-gray-600">Yellow</p>
          <p className="text-sm text-gray-500 mt-1">أصفر</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Abyaḍ</p>
            <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></div>
          </div>
          <p className="text-gray-600">White</p>
          <p className="text-sm text-gray-500 mt-1">أبيض</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Aswad</p>
            <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></div>
          </div>
          <p className="text-gray-600">Black</p>
          <p className="text-sm text-gray-500 mt-1">أسود</p>
        </div>
      </div>
    </div>
  );
}