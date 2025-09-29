"use client";

import React from 'react';

export default function HotelAccommodation() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Hotel and Accommodation
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for booking and staying in hotels and traditional accommodations.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Funduq</p>
            <span className="text-2xl">🏨</span>
          </div>
          <p className="text-gray-600">Hotel</p>
          <p className="text-sm text-gray-500 mt-1">فندق</p>
          <p className="text-xs text-red-600 mt-2">Modern accommodation</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Riyāḍ</p>
            <span className="text-2xl">🏛️</span>
          </div>
          <p className="text-gray-600">Riad</p>
          <p className="text-sm text-gray-500 mt-1">رياض</p>
          <p className="text-xs text-red-600 mt-2">Traditional guesthouse</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ghurfa</p>
            <span className="text-2xl">🛏️</span>
          </div>
          <p className="text-gray-600">Room</p>
          <p className="text-sm text-gray-500 mt-1">غرفة</p>
          <p className="text-xs text-red-600 mt-2">Accommodation unit</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Khadamāt</p>
            <span className="text-2xl">🛎️</span>
          </div>
          <p className="text-gray-600">Services</p>
          <p className="text-sm text-gray-500 mt-1">خدمات</p>
          <p className="text-xs text-red-600 mt-2">Hotel amenities</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Iṭlāla</p>
            <span className="text-2xl">🌅</span>
          </div>
          <p className="text-gray-600">View</p>
          <p className="text-sm text-gray-500 mt-1">إطلالة</p>
          <p className="text-xs text-red-600 mt-2">Room view</p>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Maṭʿam</p>
            <span className="text-2xl">🍽️</span>
          </div>
          <p className="text-gray-600">Restaurant</p>
          <p className="text-sm text-gray-500 mt-1">مطعم</p>
          <p className="text-xs text-red-600 mt-2">Dining facility</p>
        </div>
      </div>
    </div>
  );
}