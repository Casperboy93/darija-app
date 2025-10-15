"use client";

import React from 'react';

export default function TouristServicesInformation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Tourist Services and Information
      </h2>
      
      <p className="text-gray-700 mb-6">Essential services and information resources for tourists visiting Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Maktab as-siyaha</p>
            <span className="text-2xl">i</span>
          </div>
          <p className="text-gray-600">Tourist Office</p>
          <p className="text-sm text-gray-500 mt-1">مكتب السياحة</p>
          <p className="text-xs text-yellow-600 mt-2">Information center</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Murshid siyahi</p>
            <span className="text-2xl">👨‍🏫</span>
          </div>
          <p className="text-gray-600">Tourist Guide</p>
          <p className="text-sm text-gray-500 mt-1">مرشد سياحي</p>
          <p className="text-xs text-yellow-600 mt-2">Professional guide</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Kharita</p>
            <span className="text-2xl">🗺️</span>
          </div>
          <p className="text-gray-600">Map</p>
          <p className="text-sm text-gray-500 mt-1">خريطة</p>
          <p className="text-xs text-yellow-600 mt-2">Navigation aid</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Dalil siyahi</p>
            <span className="text-2xl">📖</span>
          </div>
          <p className="text-gray-600">Travel Guide/Guidebook</p>
          <p className="text-sm text-gray-500 mt-1">دليل سياحي</p>
          <p className="text-xs text-yellow-600 mt-2">Reference book</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Maʿlumat</p>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-gray-600">Information</p>
          <p className="text-sm text-gray-500 mt-1">معلومات</p>
          <p className="text-xs text-yellow-600 mt-2">General info</p>
        </div>
        
        <div className="border border-yellow-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Jawla siyahiyya</p>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-gray-600">Tour</p>
          <p className="text-sm text-gray-500 mt-1">جولة سياحية</p>
          <p className="text-xs text-yellow-600 mt-2">Organized visit</p>
        </div>
      </div>
    </div>
  );
}