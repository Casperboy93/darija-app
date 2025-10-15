"use client";

import React from 'react';

export default function CulturalTourismHeritage() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Cultural Tourism and Heritage
      </h2>
      
      <p className="text-gray-700 mb-6">Explore Morocco's rich cultural heritage and historical sites.</p>
      
      <div className="space-y-6">
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-orange-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Historical Sites (Al-mawaqiʿ at-tarikhiyya)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-orange-100">
              <p className="font-bold text-gray-900">Qasr</p>
              <p className="text-gray-600">Palace</p>
              <p className="text-sm text-gray-500">قصر</p>
              <p className="text-xs text-orange-600 mt-1">Royal residence</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-orange-100">
              <p className="font-bold text-gray-900">Jamiʿ</p>
              <p className="text-gray-600">Mosque</p>
              <p className="text-sm text-gray-500">جامع</p>
              <p className="text-xs text-orange-600 mt-1">Place of worship</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-orange-100">
              <p className="font-bold text-gray-900">Madina qadima</p>
              <p className="text-gray-600">Old City/Medina</p>
              <p className="text-sm text-gray-500">مدينة قديمة</p>
              <p className="text-xs text-orange-600 mt-1">Historic quarter</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-orange-100">
              <p className="font-bold text-gray-900">Qalʿa</p>
              <p className="text-gray-600">Fortress/Kasbah</p>
              <p className="text-sm text-gray-500">قلعة</p>
              <p className="text-xs text-orange-600 mt-1">Fortified structure</p>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-orange-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
            </svg>
            Cultural Activities (Al-anshita ath-thaqafiyya)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-orange-100">
              <p className="font-bold text-gray-900">Suq</p>
              <p className="text-gray-600">Market/Souk</p>
              <p className="text-sm text-gray-500">سوق</p>
              <p className="text-xs text-orange-600 mt-1">Traditional marketplace</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-orange-100">
              <p className="font-bold text-gray-900">Hirfa</p>
              <p className="text-gray-600">Craft/Handicraft</p>
              <p className="text-sm text-gray-500">حرفة</p>
              <p className="text-xs text-orange-600 mt-1">Traditional art</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-orange-100">
              <p className="font-bold text-gray-900">Musiqa</p>
              <p className="text-gray-600">Music</p>
              <p className="text-sm text-gray-500">موسيقى</p>
              <p className="text-xs text-orange-600 mt-1">Traditional performances</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-orange-100">
              <p className="font-bold text-gray-900">Raqs</p>
              <p className="text-gray-600">Dance</p>
              <p className="text-sm text-gray-500">رقص</p>
              <p className="text-xs text-orange-600 mt-1">Folk dancing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}