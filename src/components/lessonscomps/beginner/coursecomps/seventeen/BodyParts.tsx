"use client";

import React from 'react';

export default function BodyParts() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Body Parts
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for different parts of the body.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Rās</p>
            <span className="text-2xl">🧠</span>
          </div>
          <p className="text-gray-600">Head</p>
          <p className="text-sm text-gray-500 mt-1">راس</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">ʿAyn</p>
            <span className="text-2xl">👁️</span>
          </div>
          <p className="text-gray-600">Eye</p>
          <p className="text-sm text-gray-500 mt-1">عين</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ūdhn</p>
            <span className="text-2xl">👂</span>
          </div>
          <p className="text-gray-600">Ear</p>
          <p className="text-sm text-gray-500 mt-1">اذن</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Anf</p>
            <span className="text-2xl">👃</span>
          </div>
          <p className="text-gray-600">Nose</p>
          <p className="text-sm text-gray-500 mt-1">انف</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Fam</p>
            <span className="text-2xl">👄</span>
          </div>
          <p className="text-gray-600">Mouth</p>
          <p className="text-sm text-gray-500 mt-1">فم</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Yad</p>
            <span className="text-2xl">✋</span>
          </div>
          <p className="text-gray-600">Hand</p>
          <p className="text-sm text-gray-500 mt-1">يد</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Rijl</p>
            <span className="text-2xl">🦵</span>
          </div>
          <p className="text-gray-600">Leg/Foot</p>
          <p className="text-sm text-gray-500 mt-1">رجل</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṣadr</p>
            <span className="text-2xl">🫁</span>
          </div>
          <p className="text-gray-600">Chest</p>
          <p className="text-sm text-gray-500 mt-1">صدر</p>
        </div>
      </div>
    </div>
  );
}