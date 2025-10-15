"use client";

import React from 'react';

export default function GovernmentPoliticalSystem() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Government and Political System
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for understanding Morocco's government structure.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hukuma</p>
            <span className="text-2xl">🏛️</span>
          </div>
          <p className="text-gray-600">Government</p>
          <p className="text-sm text-gray-500 mt-1">حكومة</p>
          <p className="text-xs text-blue-600 mt-2">Executive branch</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Malik</p>
            <span className="text-2xl">👑</span>
          </div>
          <p className="text-gray-600">King</p>
          <p className="text-sm text-gray-500 mt-1">ملك</p>
          <p className="text-xs text-blue-600 mt-2">Head of state</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Raʾis al-Hukuma</p>
            <span className="text-2xl">🤵</span>
          </div>
          <p className="text-gray-600">Prime Minister</p>
          <p className="text-sm text-gray-500 mt-1">رئيس الحكومة</p>
          <p className="text-xs text-blue-600 mt-2">Head of government</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Barlman</p>
            <span className="text-2xl">🏢</span>
          </div>
          <p className="text-gray-600">Parliament</p>
          <p className="text-sm text-gray-500 mt-1">برلمان</p>
          <p className="text-xs text-blue-600 mt-2">Legislative branch</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Dustur</p>
            <span className="text-2xl">📜</span>
          </div>
          <p className="text-gray-600">Constitution</p>
          <p className="text-sm text-gray-500 mt-1">دستور</p>
          <p className="text-xs text-blue-600 mt-2">Supreme law</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Qanun</p>
            <span className="text-2xl">⚖️</span>
          </div>
          <p className="text-gray-600">Law</p>
          <p className="text-sm text-gray-500 mt-1">قانون</p>
          <p className="text-xs text-blue-600 mt-2">Legal framework</p>
        </div>
      </div>
    </div>
  );
}