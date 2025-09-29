"use client";

import React from 'react';

export default function PhysicalStates() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Physical States
      </h2>
      
      <p className="text-gray-700 mb-6">Vocabulary for describing physical conditions and states.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Jū'ān</p>
            <span className="text-2xl">🍽️</span>
          </div>
          <p className="text-gray-600">Hungry</p>
          <p className="text-sm text-gray-500 mt-1">جوعان</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">'Aṭshān</p>
            <span className="text-2xl">🥤</span>
          </div>
          <p className="text-gray-600">Thirsty</p>
          <p className="text-sm text-gray-500 mt-1">عطشان</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Marīḍ</p>
            <span className="text-2xl">🤒</span>
          </div>
          <p className="text-gray-600">Sick</p>
          <p className="text-sm text-gray-500 mt-1">مريض</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṣaḥḥ</p>
            <span className="text-2xl">💪</span>
          </div>
          <p className="text-gray-600">Healthy/Well</p>
          <p className="text-sm text-gray-500 mt-1">صح</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Nā'as</p>
            <span className="text-2xl">😴</span>
          </div>
          <p className="text-gray-600">Sleepy</p>
          <p className="text-sm text-gray-500 mt-1">ناعس</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Nashīṭ</p>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-gray-600">Energetic/Active</p>
          <p className="text-sm text-gray-500 mt-1">نشيط</p>
        </div>
      </div>
    </div>
  );
}