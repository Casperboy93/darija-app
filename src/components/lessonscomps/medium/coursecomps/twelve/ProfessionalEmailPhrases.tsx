"use client";

import React from 'react';

export default function ProfessionalEmailPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Professional Email Phrases
      </h2>
      
      <p className="text-gray-700 mb-6">Formal expressions for business correspondence.</p>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Opening</h3>
          <p className="text-gray-700 mb-2">Aḥtarim sayyidī / sayyidatī</p>
          <p className="text-sm text-gray-600">Dear Sir/Madam</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Purpose</h3>
          <p className="text-gray-700 mb-2">Aktub lak bāsh nuḍḥ lak</p>
          <p className="text-sm text-gray-600">I am writing to explain to you</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Request</h3>
          <p className="text-gray-700 mb-2">Urīd an aṭlub minkum</p>
          <p className="text-sm text-gray-600">I would like to request from you</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-2">Closing</h3>
          <p className="text-gray-700 mb-2">Maʿa fāʾiq al-iḥtirām</p>
          <p className="text-sm text-gray-600">With highest respect</p>
        </div>
      </div>
    </div>
  );
}