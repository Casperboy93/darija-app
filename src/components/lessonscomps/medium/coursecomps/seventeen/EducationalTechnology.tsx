"use client";

import React from 'react';

export default function EducationalTechnology() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Educational Technology
      </h2>
      
      <p className="text-gray-700 mb-6">Modern technology used in education and learning.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hasub</p>
            <span className="text-2xl">💻</span>
          </div>
          <p className="text-gray-600">Computer</p>
          <p className="text-sm text-gray-500 mt-1">حاسوب</p>
          <p className="text-xs text-yellow-600 mt-2">Digital learning tool</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Internet</p>
            <span className="text-2xl">🌐</span>
          </div>
          <p className="text-gray-600">Internet</p>
          <p className="text-sm text-gray-500 mt-1">إنترنت</p>
          <p className="text-xs text-yellow-600 mt-2">Online resources</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Taʿallum ʿan buʿd</p>
            <span className="text-2xl">📱</span>
          </div>
          <p className="text-gray-600">Distance learning</p>
          <p className="text-sm text-gray-500 mt-1">تعلم عن بعد</p>
          <p className="text-xs text-yellow-600 mt-2">Online education</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Maktaba raqamiyya</p>
            <span className="text-2xl">📚</span>
          </div>
          <p className="text-gray-600">Digital library</p>
          <p className="text-sm text-gray-500 mt-1">مكتبة رقمية</p>
          <p className="text-xs text-yellow-600 mt-2">Online resources</p>
        </div>
      </div>
    </div>
  );
}