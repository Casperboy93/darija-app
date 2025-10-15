"use client";

import React from 'react';

export default function ClothingItems() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Clothing Items
      </h2>
      
      <p className="text-gray-700 mb-6">Essential clothing vocabulary for everyday conversations.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <p className="font-bold text-lg text-gray-900">Qamis</p>
          <p className="text-gray-600">Shirt</p>
          <p className="text-sm text-gray-500 mt-1">قميص</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <p className="font-bold text-lg text-gray-900">Bantalon</p>
          <p className="text-gray-600">Pants/Trousers</p>
          <p className="text-sm text-gray-500 mt-1">بنطلون</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <p className="font-bold text-lg text-gray-900">Jallaba</p>
          <p className="text-gray-600">Traditional Moroccan robe</p>
          <p className="text-sm text-gray-500 mt-1">جلابة</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <p className="font-bold text-lg text-gray-900">Hidha'</p>
          <p className="text-gray-600">Shoes</p>
          <p className="text-sm text-gray-500 mt-1">حذاء</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <p className="font-bold text-lg text-gray-900">Kufiyya</p>
          <p className="text-gray-600">Hat/Cap</p>
          <p className="text-sm text-gray-500 mt-1">كوفية</p>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <p className="font-bold text-lg text-gray-900">Sandal</p>
          <p className="text-gray-600">Sandals</p>
          <p className="text-sm text-gray-500 mt-1">صندل</p>
        </div>
      </div>
    </div>
  );
}