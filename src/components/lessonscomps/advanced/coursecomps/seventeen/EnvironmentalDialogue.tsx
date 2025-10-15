"use client";

import React from 'react';

export default function EnvironmentalDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: Environmental Conference
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Dr. Zaynab:</p>
            <p className="text-gray-700">Al-Maghrib yaqum bi-istithmarat kabira fi majal at-taqa ash-shamsiyya wa ar-riyah.</p>
            <p className="text-sm text-gray-500 mt-1">Morocco is making large investments in solar and wind energy.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Dr. Yusuf:</p>
            <p className="text-gray-700">Hadha muhimm jiddan li-tahqiq ahdaf at-tanmiya al-mustadama wa taqlil al-anbiʿathat.</p>
            <p className="text-sm text-gray-500 mt-1">This is very important for achieving sustainable development goals and reducing emissions.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Dr. Zaynab:</p>
            <p className="text-gray-700">Naʿam, wa lakin yajibu an nuʿti ahamiyya akthar li-himayat at-tanawwuʿ al-hayawi aydan.</p>
            <p className="text-sm text-gray-500 mt-1">Yes, but we must also give more importance to protecting biodiversity.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Dr. Yusuf:</p>
            <p className="text-gray-700">Mutlaqan. Al-hulul yajibu an takun shamila wa tatadamman jamiʿ jawanib al-biʾa.</p>
            <p className="text-sm text-gray-500 mt-1">Absolutely. Solutions must be comprehensive and include all environmental aspects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}