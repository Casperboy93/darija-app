"use client";

import React from 'react';

export default function ReligiousCulturalSensitivity() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Religious and Cultural Sensitivity
      </h2>
      
      <p className="text-gray-700 mb-6">Important considerations for religious and cultural respect.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Waqt aṣ-ṣalāh</p>
            <span className="text-2xl">🕌</span>
          </div>
          <p className="text-gray-600">Prayer time</p>
          <p className="text-sm text-gray-500 mt-1">وقت الصلاة</p>
          <p className="text-xs text-red-600 mt-2">Respect prayer times and spaces</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Shahr Ramaḍān</p>
            <span className="text-2xl">🌙</span>
          </div>
          <p className="text-gray-600">Month of Ramadan</p>
          <p className="text-sm text-gray-500 mt-1">شهر رمضان</p>
          <p className="text-xs text-red-600 mt-2">Be mindful during fasting</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Libās muḥtashim</p>
            <span className="text-2xl">👔</span>
          </div>
          <p className="text-gray-600">Modest dress</p>
          <p className="text-sm text-gray-500 mt-1">لباس محتشم</p>
          <p className="text-xs text-red-600 mt-2">Especially in religious areas</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Iḥtirām al-taqālīd</p>
            <span className="text-2xl">🤲</span>
          </div>
          <p className="text-gray-600">Respect traditions</p>
          <p className="text-sm text-gray-500 mt-1">احترام التقاليد</p>
          <p className="text-xs text-red-600 mt-2">Show appreciation for customs</p>
        </div>
      </div>
    </div>
  );
}