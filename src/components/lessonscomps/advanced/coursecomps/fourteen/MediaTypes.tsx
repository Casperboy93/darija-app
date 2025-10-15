"use client";

import React from 'react';

export default function MediaTypes() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Media Types and Platforms
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for different media platforms and formats.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Traditional Media</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Classic</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Jarida:</span> Newspaper</p>
            <p className="text-sm"><span className="font-semibold">Majalla:</span> Magazine</p>
            <p className="text-sm"><span className="font-semibold">Idhaʿa:</span> Radio</p>
            <p className="text-sm"><span className="font-semibold">Tilifizyun:</span> Television</p>
            <p className="text-sm"><span className="font-semibold">Sahafa:</span> Press/Journalism</p>
          </div>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Digital Media</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Modern</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Mawqiʿ iliktroni:</span> Website</p>
            <p className="text-sm"><span className="font-semibold">Shabakat ijtimaʿiyya:</span> Social media</p>
            <p className="text-sm"><span className="font-semibold">Mudawwana:</span> Blog</p>
            <p className="text-sm"><span className="font-semibold">Budkast:</span> Podcast</p>
            <p className="text-sm"><span className="font-semibold">Fidyu:</span> Video content</p>
          </div>
        </div>
      </div>
    </div>
  );
}