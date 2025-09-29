"use client";

import React from 'react';

export default function CommonProfessions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Common Professions
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for different jobs and professions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṭabīb</p>
            <span className="text-2xl">👨‍⚕️</span>
          </div>
          <p className="text-gray-600">Doctor</p>
          <p className="text-sm text-gray-500 mt-1">طبيب</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Muʿallim</p>
            <span className="text-2xl">👨‍🏫</span>
          </div>
          <p className="text-gray-600">Teacher</p>
          <p className="text-sm text-gray-500 mt-1">معلم</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Muhandis</p>
            <span className="text-2xl">👨‍💻</span>
          </div>
          <p className="text-gray-600">Engineer</p>
          <p className="text-sm text-gray-500 mt-1">مهندس</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ṭabbākh</p>
            <span className="text-2xl">👨‍🍳</span>
          </div>
          <p className="text-gray-600">Cook/Chef</p>
          <p className="text-sm text-gray-500 mt-1">طباخ</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Sāʾiq</p>
            <span className="text-2xl">🚗</span>
          </div>
          <p className="text-gray-600">Driver</p>
          <p className="text-sm text-gray-500 mt-1">سائق</p>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Khadāma</p>
            <span className="text-2xl">🏠</span>
          </div>
          <p className="text-gray-600">Housekeeper</p>
          <p className="text-sm text-gray-500 mt-1">خدامة</p>
        </div>
      </div>
    </div>
  );
}