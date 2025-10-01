"use client";

import React from 'react';

export default function InternationalOrganizations() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        International Organizations
      </h2>
      
      <p className="text-gray-700 mb-6">Essential vocabulary for major international organizations and institutions.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">United Nations System</p>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Global</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Al-Umam al-Muttaḥida:</span> United Nations</p>
            <p className="text-sm"><span className="font-semibold">Majlis al-Amn:</span> Security Council</p>
            <p className="text-sm"><span className="font-semibold">Al-Jamʿiyya al-ʿĀmma:</span> General Assembly</p>
            <p className="text-sm"><span className="font-semibold">Maḥkamat al-ʿAdl:</span> International Court of Justice</p>
            <p className="text-sm"><span className="font-semibold">Al-Amīn al-ʿĀmm:</span> Secretary-General</p>
          </div>
        </div>
        
        <div className="border border-blue-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-900">Regional Organizations</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Regional</span>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-sm"><span className="font-semibold">Jāmiʿat al-Duwal al-ʿArabiyya:</span> Arab League</p>
            <p className="text-sm"><span className="font-semibold">Al-Ittiḥād al-Ūrūbbī:</span> European Union</p>
            <p className="text-sm"><span className="font-semibold">Al-Ittiḥād al-Afrīqī:</span> African Union</p>
            <p className="text-sm"><span className="font-semibold">Ḥilf Shamāl al-Aṭlasī:</span> NATO</p>
            <p className="text-sm"><span className="font-semibold">Munẓẓamat al-Taʿāwun al-Islāmī:</span> OIC</p>
          </div>
        </div>
      </div>
    </div>
  );
}