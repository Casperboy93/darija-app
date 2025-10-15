"use client";

import React from 'react';

export default function CurrentEventsNews() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Current Events and News
      </h2>
      
      <p className="text-gray-700 mb-6">Vocabulary for discussing news, media, and current affairs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Akhbar</p>
            <span className="text-2xl">📰</span>
          </div>
          <p className="text-gray-600">News</p>
          <p className="text-sm text-gray-500 mt-1">أخبار</p>
          <p className="text-xs text-red-600 mt-2">Current information</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sahafa</p>
            <span className="text-2xl">📺</span>
          </div>
          <p className="text-gray-600">Press/Journalism</p>
          <p className="text-sm text-gray-500 mt-1">صحافة</p>
          <p className="text-xs text-red-600 mt-2">Media industry</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sahafi</p>
            <span className="text-2xl">🎤</span>
          </div>
          <p className="text-gray-600">Journalist</p>
          <p className="text-sm text-gray-500 mt-1">صحفي</p>
          <p className="text-xs text-red-600 mt-2">News reporter</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Taqrir</p>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-gray-600">Report</p>
          <p className="text-sm text-gray-500 mt-1">تقرير</p>
          <p className="text-xs text-red-600 mt-2">News story</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Muqabala</p>
            <span className="text-2xl">🎙️</span>
          </div>
          <p className="text-gray-600">Interview</p>
          <p className="text-sm text-gray-500 mt-1">مقابلة</p>
          <p className="text-xs text-red-600 mt-2">Q&A session</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ahdath jariya</p>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-gray-600">Current events</p>
          <p className="text-sm text-gray-500 mt-1">أحداث جارية</p>
          <p className="text-xs text-red-600 mt-2">Recent happenings</p>
        </div>
      </div>
    </div>
  );
}