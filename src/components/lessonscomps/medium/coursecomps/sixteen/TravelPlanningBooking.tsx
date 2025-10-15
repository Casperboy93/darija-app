"use client";

import React from 'react';

export default function TravelPlanningBooking() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Travel Planning and Booking
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for planning and booking your travels.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Rihla</p>
            <span className="text-2xl">✈️</span>
          </div>
          <p className="text-gray-600">Trip/Journey</p>
          <p className="text-sm text-gray-500 mt-1">رحلة</p>
          <p className="text-xs text-blue-600 mt-2">General travel term</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Hajz</p>
            <span className="text-2xl">📅</span>
          </div>
          <p className="text-gray-600">Booking/Reservation</p>
          <p className="text-sm text-gray-500 mt-1">حجز</p>
          <p className="text-xs text-blue-600 mt-2">Hotel, flight booking</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Jawaz as-safar</p>
            <span className="text-2xl">📘</span>
          </div>
          <p className="text-gray-600">Passport</p>
          <p className="text-sm text-gray-500 mt-1">جواز السفر</p>
          <p className="text-xs text-blue-600 mt-2">Travel document</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Taʾshirat ad-dukhul</p>
            <span className="text-2xl">🛂</span>
          </div>
          <p className="text-gray-600">Visa</p>
          <p className="text-sm text-gray-500 mt-1">تأشيرة الدخول</p>
          <p className="text-xs text-blue-600 mt-2">Entry permit</p>
        </div>
      </div>
    </div>
  );
}