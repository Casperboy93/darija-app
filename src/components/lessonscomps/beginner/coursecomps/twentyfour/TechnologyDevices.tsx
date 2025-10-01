"use client";

import React from 'react';

export default function TechnologyDevices() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Devices - الأجهزة التكنولوجية</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">téléphone</div>
          <div className="text-sm text-gray-500">هاتف</div>
          <div className="text-sm text-gray-700">phone</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">portable</div>
          <div className="text-sm text-gray-500">محمول</div>
          <div className="text-sm text-gray-700">mobile phone</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">ordinateur</div>
          <div className="text-sm text-gray-500">حاسوب</div>
          <div className="text-sm text-gray-700">computer</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">tablette</div>
          <div className="text-sm text-gray-500">لوحة</div>
          <div className="text-sm text-gray-700">tablet</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">télévision</div>
          <div className="text-sm text-gray-500">تلفزيون</div>
          <div className="text-sm text-gray-700">television</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">radio</div>
          <div className="text-sm text-gray-500">راديو</div>
          <div className="text-sm text-gray-700">radio</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">appareil photo</div>
          <div className="text-sm text-gray-500">كاميرا</div>
          <div className="text-sm text-gray-700">camera</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">écouteurs</div>
          <div className="text-sm text-gray-500">سماعات</div>
          <div className="text-sm text-gray-700">headphones</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="text-lg font-semibold text-blue-600">chargeur</div>
          <div className="text-sm text-gray-500">شاحن</div>
          <div className="text-sm text-gray-700">charger</div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Useful Phrases</h3>
        <div className="space-y-2">
          <div><span className="font-medium">fin portable dyali?</span> - where is my phone?</div>
          <div><span className="font-medium">bghit n-chargi téléphone</span> - I want to charge my phone</div>
          <div><span className="font-medium">ordinateur ma khadamsh</span> - the computer doesn't work</div>
          <div><span className="font-medium">3andi mushkila m3a l-wifi</span> - I have a problem with wifi</div>
        </div>
      </div>
    </div>
  );
}