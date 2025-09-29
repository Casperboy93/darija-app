"use client";

import React from 'react';

export default function TechnologyDigitalDevices() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Technology and Digital Devices
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for modern technology and digital devices.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Al-ḥāsūb</p>
            <span className="text-2xl">💻</span>
          </div>
          <p className="text-gray-600">Computer</p>
          <p className="text-sm text-gray-500 mt-1">الحاسوب</p>
          <p className="text-xs text-blue-600 mt-2">Also: al-kumbiyūtar</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Al-hātif adh-dhakī</p>
            <span className="text-2xl">📱</span>
          </div>
          <p className="text-gray-600">Smartphone</p>
          <p className="text-sm text-gray-500 mt-1">الهاتف الذكي</p>
          <p className="text-xs text-blue-600 mt-2">Modern technology term</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Al-internet</p>
            <span className="text-2xl">🌐</span>
          </div>
          <p className="text-gray-600">Internet</p>
          <p className="text-sm text-gray-500 mt-1">الإنترنت</p>
          <p className="text-xs text-blue-600 mt-2">Also: ash-shabaka</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">At-taṭbīq</p>
            <span className="text-2xl">📲</span>
          </div>
          <p className="text-gray-600">Application/App</p>
          <p className="text-sm text-gray-500 mt-1">التطبيق</p>
          <p className="text-xs text-blue-600 mt-2">Mobile applications</p>
        </div>
      </div>
    </div>
  );
}