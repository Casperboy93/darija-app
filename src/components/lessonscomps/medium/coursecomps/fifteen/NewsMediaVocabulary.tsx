"use client";

import React from 'react';

export default function NewsMediaVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        News and Media Vocabulary
      </h2>
      
      <p className="text-gray-700 mb-6">Discuss current events and understand news media in Arabic.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Al-akhbār</p>
            <span className="text-2xl">📰</span>
          </div>
          <p className="text-gray-600">News</p>
          <p className="text-sm text-gray-500 mt-1">الأخبار</p>
          <p className="text-xs text-red-600 mt-2">Current events</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Aṣ-ṣaḥāfa</p>
            <span className="text-2xl">📄</span>
          </div>
          <p className="text-gray-600">Press/Journalism</p>
          <p className="text-sm text-gray-500 mt-1">الصحافة</p>
          <p className="text-xs text-red-600 mt-2">Media industry</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Al-idhāʿa</p>
            <span className="text-2xl">📻</span>
          </div>
          <p className="text-gray-600">Radio</p>
          <p className="text-sm text-gray-500 mt-1">الإذاعة</p>
          <p className="text-xs text-red-600 mt-2">Broadcasting</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">At-tilifizyūn</p>
            <span className="text-2xl">📺</span>
          </div>
          <p className="text-gray-600">Television</p>
          <p className="text-sm text-gray-500 mt-1">التلفزيون</p>
          <p className="text-xs text-red-600 mt-2">TV broadcasting</p>
        </div>
      </div>
    </div>
  );
}