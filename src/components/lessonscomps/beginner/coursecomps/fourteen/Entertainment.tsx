"use client";

import React from 'react';

export default function Entertainment() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Entertainment Activities
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sīnimā</p>
            <span className="text-2xl">🎬</span>
          </div>
          <p className="text-gray-600">Cinema/Movies</p>
          <p className="text-sm text-gray-500 mt-1">سينما</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tilifizyūn</p>
            <span className="text-2xl">📺</span>
          </div>
          <p className="text-gray-600">Television</p>
          <p className="text-sm text-gray-500 mt-1">تلفزيون</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Al'āb</p>
            <span className="text-2xl">🎮</span>
          </div>
          <p className="text-gray-600">Games</p>
          <p className="text-sm text-gray-500 mt-1">ألعاب</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Raqṣ</p>
            <span className="text-2xl">💃</span>
          </div>
          <p className="text-gray-600">Dancing</p>
          <p className="text-sm text-gray-500 mt-1">رقص</p>
        </div>
      </div>
    </div>
  );
}