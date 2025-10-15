"use client";

import React from 'react';

export default function CommonHobbies() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Common Hobbies
      </h2>
      
      <p className="text-gray-700 mb-6">Essential hobby vocabulary in Darija.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Qira'a</p>
            <span className="text-2xl">📚</span>
          </div>
          <p className="text-gray-600">Reading</p>
          <p className="text-sm text-gray-500 mt-1">قراءة</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Kura</p>
            <span className="text-2xl">⚽</span>
          </div>
          <p className="text-gray-600">Football/Soccer</p>
          <p className="text-sm text-gray-500 mt-1">كورة</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Musiqa</p>
            <span className="text-2xl">🎵</span>
          </div>
          <p className="text-gray-600">Music</p>
          <p className="text-sm text-gray-500 mt-1">موسيقى</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tabkh</p>
            <span className="text-2xl">👨‍🍳</span>
          </div>
          <p className="text-gray-600">Cooking</p>
          <p className="text-sm text-gray-500 mt-1">طبخ</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Siyaha</p>
            <span className="text-2xl">✈️</span>
          </div>
          <p className="text-gray-600">Travel</p>
          <p className="text-sm text-gray-500 mt-1">سياحة</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Rasm</p>
            <span className="text-2xl">🎨</span>
          </div>
          <p className="text-gray-600">Drawing/Painting</p>
          <p className="text-sm text-gray-500 mt-1">رسم</p>
        </div>
      </div>
    </div>
  );
}