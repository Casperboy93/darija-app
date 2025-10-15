"use client";

import React from 'react';

export default function EnvironmentalIssues() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Environmental Issues
      </h2>
      
      <p className="text-gray-700 mb-6">Current environmental challenges facing Morocco and the world.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Taghyir al-munakh</p>
            <span className="text-2xl">🌡️</span>
          </div>
          <p className="text-gray-600">Climate change</p>
          <p className="text-sm text-gray-500 mt-1">تغير المناخ</p>
          <p className="text-xs text-orange-600 mt-2">Global warming effects</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Ihtibas harari</p>
            <span className="text-2xl">🔥</span>
          </div>
          <p className="text-gray-600">Global warming</p>
          <p className="text-sm text-gray-500 mt-1">احتباس حراري</p>
          <p className="text-xs text-orange-600 mt-2">Rising temperatures</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Jafaf</p>
            <span className="text-2xl">🏜️</span>
          </div>
          <p className="text-gray-600">Drought</p>
          <p className="text-sm text-gray-500 mt-1">جفاف</p>
          <p className="text-xs text-orange-600 mt-2">Water scarcity</p>
        </div>
        
        <div className="border border-orange-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-gray-900">Tasahhur</p>
            <span className="text-2xl">🏜️</span>
          </div>
          <p className="text-gray-600">Desertification</p>
          <p className="text-sm text-gray-500 mt-1">تصحر</p>
          <p className="text-xs text-orange-600 mt-2">Land degradation</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-3">Pollution Types</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Talawwuth al-hawaʾ</p>
              <p className="text-sm text-gray-600">Air pollution</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Talawwuth al-miyah</p>
              <p className="text-sm text-gray-600">Water pollution</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Nufayat</p>
              <p className="text-sm text-gray-600">Waste</p>
            </div>
            <div className="text-center p-2 bg-white rounded">
              <p className="font-medium">Talawwuth bilastiki</p>
              <p className="text-sm text-gray-600">Plastic pollution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}