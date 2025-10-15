"use client";

import React from 'react';

export default function NationalHolidays() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        National Holidays
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-red-50 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">3id l-Istiqlal</p>
            <span className="text-2xl">🇲🇦</span>
          </div>
          <p className="text-gray-600">Independence Day</p>
          <p className="text-sm text-gray-500 mt-1">عيد الاستقلال</p>
        </div>
        
        <div className="border border-green-200 rounded-lg p-5 bg-green-50 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">3id l-3arsh</p>
            <span className="text-2xl">👑</span>
          </div>
          <p className="text-gray-600">Throne Day</p>
          <p className="text-sm text-gray-500 mt-1">عيد العرش</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-blue-50 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">3id sh-Shabab</p>
            <span className="text-2xl">🎉</span>
          </div>
          <p className="text-gray-600">Youth Day</p>
          <p className="text-sm text-gray-500 mt-1">عيد الشباب</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-yellow-50 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ras s-Sana</p>
            <span className="text-2xl">🎊</span>
          </div>
          <p className="text-gray-600">New Year</p>
          <p className="text-sm text-gray-500 mt-1">راس السنة</p>
        </div>
      </div>
    </div>
  );
}