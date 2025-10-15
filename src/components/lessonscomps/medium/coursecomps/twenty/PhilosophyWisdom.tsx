"use client";

import React from 'react';

export default function PhilosophyWisdom() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Philosophy and Wisdom
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for discussing philosophical concepts and wisdom traditions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Falsafa</p>
            <span className="text-2xl">🤔</span>
          </div>
          <p className="text-gray-600">Philosophy</p>
          <p className="text-sm text-gray-500 mt-1">فلسفة</p>
          <p className="text-xs text-blue-600 mt-2">Love of wisdom</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hikma</p>
            <span className="text-2xl">💡</span>
          </div>
          <p className="text-gray-600">Wisdom</p>
          <p className="text-sm text-gray-500 mt-1">حكمة</p>
          <p className="text-xs text-blue-600 mt-2">Deep understanding</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Maʿrifa</p>
            <span className="text-2xl">🧠</span>
          </div>
          <p className="text-gray-600">Knowledge/Gnosis</p>
          <p className="text-sm text-gray-500 mt-1">معرفة</p>
          <p className="text-xs text-blue-600 mt-2">Spiritual knowledge</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tasawwuf</p>
            <span className="text-2xl">🕊️</span>
          </div>
          <p className="text-gray-600">Sufism</p>
          <p className="text-sm text-gray-500 mt-1">تصوف</p>
          <p className="text-xs text-blue-600 mt-2">Mystical path</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Akhlaq</p>
            <span className="text-2xl">⚖️</span>
          </div>
          <p className="text-gray-600">Ethics/Morality</p>
          <p className="text-sm text-gray-500 mt-1">أخلاق</p>
          <p className="text-xs text-blue-600 mt-2">Moral character</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Wujud</p>
            <span className="text-2xl">🌌</span>
          </div>
          <p className="text-gray-600">Existence/Being</p>
          <p className="text-sm text-gray-500 mt-1">وجود</p>
          <p className="text-xs text-blue-600 mt-2">Ontological reality</p>
        </div>
      </div>
    </div>
  );
}