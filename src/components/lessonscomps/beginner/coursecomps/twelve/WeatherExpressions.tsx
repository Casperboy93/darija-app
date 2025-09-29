"use client";

import React from 'react';

export default function WeatherExpressions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-sky-500 rounded-full mr-3"></div>
        Weather Expressions
      </h2>
      
      <div className="space-y-4">
        <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
          <p className="font-semibold text-sky-800">Kīf al-jaww al-yawm?</p>
          <p className="text-gray-700">How's the weather today?</p>
          <p className="text-sm text-gray-500 mt-1">كيف الجو اليوم؟</p>
        </div>
        
        <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
          <p className="font-semibold text-sky-800">Al-jaww ḥarr bzāf</p>
          <p className="text-gray-700">The weather is very hot</p>
          <p className="text-sm text-gray-500 mt-1">الجو حار بزاف</p>
        </div>
        
        <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
          <p className="font-semibold text-sky-800">Ghādi tshatti</p>
          <p className="text-gray-700">It's going to rain</p>
          <p className="text-sm text-gray-500 mt-1">غادي تشتي</p>
        </div>
        
        <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
          <p className="font-semibold text-sky-800">Al-jaww bārid al-yawm</p>
          <p className="text-gray-700">The weather is cold today</p>
          <p className="text-sm text-gray-500 mt-1">الجو بارد اليوم</p>
        </div>
        
        <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
          <p className="font-semibold text-sky-800">Fīh rīḥ qawiyya</p>
          <p className="text-gray-700">There's strong wind</p>
          <p className="text-sm text-gray-500 mt-1">فيه ريح قوية</p>
        </div>
      </div>
    </div>
  );
}