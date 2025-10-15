"use client";

import React from 'react';

export default function PublicHealth() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Public Health and Epidemiology
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Disease Prevention and Control</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Disease Prevention</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Wiqaya awwaliyya:</span> Primary prevention</p>
              <p><span className="font-semibold">Wiqaya thanawiyya:</span> Secondary prevention</p>
              <p><span className="font-semibold">Wiqaya thalitha:</span> Tertiary prevention</p>
              <p><span className="font-semibold">Tatʿim:</span> Vaccination</p>
              <p><span className="font-semibold">Fahs duri:</span> Screening</p>
              <p><span className="font-semibold">Tathqif sihhi:</span> Health education</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Epidemiology</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">ʿIlm al-awbiʾa:</span> Epidemiology</p>
              <p><span className="font-semibold">Intishar marad:</span> Disease outbreak</p>
              <p><span className="font-semibold">Jaʾiha:</span> Pandemic</p>
              <p><span className="font-semibold">Muʿaddal intisar:</span> Transmission rate</p>
              <p><span className="font-semibold">Muraqaba sihhiyya:</span> Health surveillance</p>
              <p><span className="font-semibold">Tahlil mukhatar:</span> Risk analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}