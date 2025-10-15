"use client";

import React from 'react';

export default function ReligiousHolidays() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Religious Holidays
      </h2>
      
      <p className="text-gray-700 mb-6">Important Islamic holidays celebrated in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">3id l-Fitr</p>
            <span className="text-2xl">🌙</span>
          </div>
          <p className="text-gray-600">Eid al-Fitr (End of Ramadan)</p>
          <p className="text-sm text-gray-500 mt-1">عيد الفطر</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">3id l-Adha</p>
            <span className="text-2xl">🐑</span>
          </div>
          <p className="text-gray-600">Eid al-Adha (Festival of Sacrifice)</p>
          <p className="text-sm text-gray-500 mt-1">عيد الأضحى</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Ramadan</p>
            <span className="text-2xl">🌙</span>
          </div>
          <p className="text-gray-600">Ramadan (Holy Month)</p>
          <p className="text-sm text-gray-500 mt-1">رمضان</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Mawlid n-Nabi</p>
            <span className="text-2xl">🕌</span>
          </div>
          <p className="text-gray-600">Prophet's Birthday</p>
          <p className="text-sm text-gray-500 mt-1">مولد النبي</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Laylat l-Qadr</p>
            <span className="text-2xl">✨</span>
          </div>
          <p className="text-gray-600">Night of Power</p>
          <p className="text-sm text-gray-500 mt-1">ليلة القدر</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
        <p className="font-bold text-lg text-gray-900">Jum3a</p>
            <span className="text-2xl">🕌</span>
          </div>
          <p className="text-gray-600">Friday (Holy Day)</p>
          <p className="text-sm text-gray-500 mt-1">جمعة</p>
        </div>
      </div>
    </div>
  );
}