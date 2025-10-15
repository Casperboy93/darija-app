"use client";

import React from 'react';

export default function CelebrationActivities() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Celebration Activities
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Hafla</span>
            <span className="text-gray-600">Party/Celebration</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Ta'am</span>
            <span className="text-gray-600">Food/Feast</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Musiqa</span>
            <span className="text-gray-600">Music</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Raqs</span>
            <span className="text-gray-600">Dancing</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Hadaya</span>
            <span className="text-gray-600">Gifts</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Ziyara</span>
            <span className="text-gray-600">Visiting</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Du3a</span>
            <span className="text-gray-600">Prayer/Blessing</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-lg">
        <span className="font-medium text-gray-800">Farah</span>
            <span className="text-gray-600">Joy/Happiness</span>
          </div>
        </div>
      </div>
    </div>
  );
}