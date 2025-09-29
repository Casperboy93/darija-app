"use client";

import React from 'react';

export default function HealthTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Health Tips for Morocco
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
            Pharmacy Availability
          </h3>
          <p className="text-blue-800 text-sm">
            Pharmacies (ṣaydalīya) are widely available in cities. Look for the green cross sign. 
            Many pharmacists speak French or Arabic.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <h3 className="font-semibold text-green-900 mb-3 flex items-center">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
            Language
          </h3>
          <p className="text-green-800 text-sm">
            In hospitals, doctors often speak French. Learning basic health vocabulary in Darija 
            will help with nurses and local staff.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
            <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
            Private Clinics
          </h3>
          <p className="text-purple-800 text-sm">
            Private clinics (ʿiyāda khāṣṣa) offer faster service. Public hospitals (mustashfā ʿumūmī) 
            are free but may have longer waits.
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <h3 className="font-semibold text-orange-900 mb-3 flex items-center">
            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">4</span>
            Travel Insurance
          </h3>
          <p className="text-orange-800 text-sm">
            Always have travel insurance. Keep emergency numbers handy: Police (19), 
            Fire/Ambulance (15), Tourist Police (0537 70 26 26).
          </p>
        </div>
      </div>
    </div>
  );
}