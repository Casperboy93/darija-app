"use client";

import React from 'react';

export default function MoroccanTouristDestinations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Moroccan Tourist Destinations
      </h2>
      
      <p className="text-gray-700 mb-6">Discover Morocco's most famous tourist destinations and attractions.</p>
      
      <div className="space-y-6">
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-green-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Imperial Cities (Al-mudun al-malakiyya)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-green-100">
              <p className="font-bold text-gray-900">Marrakush</p>
              <p className="text-gray-600">Marrakech</p>
              <p className="text-sm text-gray-500">مراكش</p>
              <p className="text-xs text-green-600 mt-1">The Red City</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-green-100">
              <p className="font-bold text-gray-900">Fas</p>
              <p className="text-gray-600">Fez</p>
              <p className="text-sm text-gray-500">فاس</p>
              <p className="text-xs text-green-600 mt-1">Cultural capital</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-green-100">
              <p className="font-bold text-gray-900">Miknas</p>
              <p className="text-gray-600">Meknes</p>
              <p className="text-sm text-gray-500">مكناس</p>
              <p className="text-xs text-green-600 mt-1">Ismaili capital</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-green-100">
              <p className="font-bold text-gray-900">Ar-Ribat</p>
              <p className="text-gray-600">Rabat</p>
              <p className="text-sm text-gray-500">الرباط</p>
              <p className="text-xs text-green-600 mt-1">Current capital</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-green-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Natural Attractions (Al-manazir at-tabiʿiyya)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-md border border-green-100">
              <p className="font-bold text-gray-900">As-sahraʾ</p>
              <p className="text-gray-600">Desert</p>
              <p className="text-sm text-gray-500">الصحراء</p>
              <p className="text-xs text-green-600 mt-1">Sahara Desert</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-green-100">
              <p className="font-bold text-gray-900">Jibal al-Atlas</p>
              <p className="text-gray-600">Atlas Mountains</p>
              <p className="text-sm text-gray-500">جبال الأطلس</p>
              <p className="text-xs text-green-600 mt-1">Mountain range</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-green-100">
              <p className="font-bold text-gray-900">Ash-shatiʾ</p>
              <p className="text-gray-600">Beach</p>
              <p className="text-sm text-gray-500">الشاطئ</p>
              <p className="text-xs text-green-600 mt-1">Atlantic/Mediterranean</p>
            </div>
            <div className="bg-white p-4 rounded-md border border-green-100">
              <p className="font-bold text-gray-900">Al-wadi</p>
              <p className="text-gray-600">Valley</p>
              <p className="text-sm text-gray-500">الوادي</p>
              <p className="text-xs text-green-600 mt-1">River valley</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}