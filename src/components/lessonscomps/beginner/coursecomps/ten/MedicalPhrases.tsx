"use client";

import React from 'react';

export default function MedicalPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Medical Phrases
      </h2>
      
      <p className="text-gray-700 mb-6">Essential phrases for medical situations and emergencies.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
        <p className="font-bold text-lg text-gray-900">Bghit tabib</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Emergency</span>
          </div>
          <p className="text-gray-600">I need a doctor</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: bghit ta-beeb</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Medical emergency</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
        <p className="font-bold text-lg text-gray-900">Fin l-mustashfa?</p>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Emergency</span>
          </div>
          <p className="text-gray-600">Where is the hospital?</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: feen l-mus-tash-fa</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Finding medical help</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
        <p className="font-bold text-lg text-gray-900">Kaywaja3ni hna</p>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Symptom</span>
          </div>
          <p className="text-gray-600">It hurts here</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: kay-wa-ja-nee hna</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Pointing to pain location</p>
          </div>
        </div>

        <div className="border border-red-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <div className="flex justify-between">
        <p className="font-bold text-lg text-gray-900">Bghit dawa</p>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Treatment</span>
          </div>
          <p className="text-gray-600">I need medicine</p>
          <p className="text-sm italic mt-2 text-gray-500">Pronounced: bghit da-wa</p>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600"><strong>Context:</strong> Asking for medication</p>
          </div>
        </div>
      </div>
    </div>
  );
}