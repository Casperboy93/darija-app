"use client";

import React from 'react';

export default function SportsActivities() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Sports and Physical Activities
      </h2>
      
      <p className="text-gray-700 mb-6">Popular sports and physical activities in Morocco.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sibāḥa</p>
            <span className="text-2xl">🏊‍♂️</span>
          </div>
          <p className="text-gray-600">Swimming</p>
          <p className="text-sm text-gray-500 mt-1">سباحة</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Jary</p>
            <span className="text-2xl">🏃‍♂️</span>
          </div>
          <p className="text-gray-600">Running</p>
          <p className="text-sm text-gray-500 mt-1">جري</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Kūrat al-yad</p>
            <span className="text-2xl">🏀</span>
          </div>
          <p className="text-gray-600">Basketball</p>
          <p className="text-sm text-gray-500 mt-1">كورة اليد</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tenis</p>
            <span className="text-2xl">🎾</span>
          </div>
          <p className="text-gray-600">Tennis</p>
          <p className="text-sm text-gray-500 mt-1">تنس</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Mashī</p>
            <span className="text-2xl">🚶‍♂️</span>
          </div>
          <p className="text-gray-600">Walking</p>
          <p className="text-sm text-gray-500 mt-1">مشي</p>
        </div>
        
        <div className="border border-pink-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Yoga</p>
            <span className="text-2xl">🧘‍♀️</span>
          </div>
          <p className="text-gray-600">Yoga</p>
          <p className="text-sm text-gray-500 mt-1">يوغا</p>
        </div>
      </div>
    </div>
  );
}