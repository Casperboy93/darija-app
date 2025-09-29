"use client";

import React from 'react';

export default function BusinessVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Business Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Essential business terms and professional vocabulary.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sharika</p>
            <span className="text-2xl">🏢</span>
          </div>
          <p className="text-gray-600">Company</p>
          <p className="text-sm text-gray-500 mt-1">شركة</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Mashrūʿ</p>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-gray-600">Project</p>
          <p className="text-sm text-gray-500 mt-1">مشروع</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ijtimāʿ</p>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-gray-600">Meeting</p>
          <p className="text-sm text-gray-500 mt-1">اجتماع</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">ʿAqd</p>
            <span className="text-2xl">📄</span>
          </div>
          <p className="text-gray-600">Contract</p>
          <p className="text-sm text-gray-500 mt-1">عقد</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Mīzāniyya</p>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-gray-600">Budget</p>
          <p className="text-sm text-gray-500 mt-1">ميزانية</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sūq</p>
            <span className="text-2xl">📈</span>
          </div>
          <p className="text-gray-600">Market</p>
          <p className="text-sm text-gray-500 mt-1">سوق</p>
        </div>
      </div>
    </div>
  );
}