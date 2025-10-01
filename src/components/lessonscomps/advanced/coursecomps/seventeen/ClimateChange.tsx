"use client";

import React from 'react';

export default function ClimateChange() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Climate Change and Global Warming
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for discussing climate change and its impacts.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Climate Phenomena</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Climate</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Taghyīr munākhī:</span> Climate change</p>
            <p className="text-sm"><span className="font-semibold">Iḥtibās ḥarārī:</span> Global warming</p>
            <p className="text-sm"><span className="font-semibold">Ghāzāt dafīʾa:</span> Greenhouse gases</p>
            <p className="text-sm"><span className="font-semibold">Ṭabaqa ūzūn:</span> Ozone layer</p>
            <p className="text-sm"><span className="font-semibold">Taṣaḥḥur:</span> Desertification</p>
          </div>
        </div>
        
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Environmental Impacts</p>
            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Effects</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Irtifāʿ mustawa al-biḥār:</span> Sea level rise</p>
            <p className="text-sm"><span className="font-semibold">Dhawabān jalīd:</span> Ice melting</p>
            <p className="text-sm"><span className="font-semibold">Ẓawāhir jawwiyya mutaṭarrifa:</span> Extreme weather</p>
            <p className="text-sm"><span className="font-semibold">Jafāf:</span> Drought</p>
            <p className="text-sm"><span className="font-semibold">Fayaḍānāt:</span> Floods</p>
          </div>
        </div>
      </div>
    </div>
  );
}