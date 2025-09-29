"use client";

import React from 'react';

export default function PharmacyVocabulary() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Pharmacy Vocabulary
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-50 border border-purple-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-3">Medications</h3>
          <div className="space-y-2">
            <p className="text-sm"><span className="font-semibold">Dawā:</span> Medicine</p>
            <p className="text-sm"><span className="font-semibold">Ḥabba:</span> Pill/Tablet</p>
            <p className="text-sm"><span className="font-semibold">Sharāb:</span> Syrup</p>
            <p className="text-sm"><span className="font-semibold">Marham:</span> Ointment</p>
            <p className="text-sm"><span className="font-semibold">Ḥuqna:</span> Injection</p>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-purple-800 mb-3">Instructions</h3>
          <div className="space-y-2">
            <p className="text-sm"><span className="font-semibold">Qbal l makla:</span> Before meals</p>
            <p className="text-sm"><span className="font-semibold">Ba3d l makla:</span> After meals</p>
            <p className="text-sm"><span className="font-semibold">Marra f nhar:</span> Once a day</p>
            <p className="text-sm"><span className="font-semibold">Thalāth marrāt:</span> Three times</p>
            <p className="text-sm"><span className="font-semibold">Kull 8 sā3āt:</span> Every 8 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}