"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-pink-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
        <h3 className="font-semibold text-pink-800 mb-4">Discussing Current Events</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Citizen A:</p>
            <p className="text-gray-700">Mā raʾyuk fī al-intikhābāt al-akhīra?</p>
            <p className="text-sm text-gray-600 mt-1">What's your opinion on the recent elections?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Citizen B:</p>
            <p className="text-gray-700">Aʿtaqid annahā kānat munāfasa ʿādila bayn al-aḥzāb al-mukhtalifia.</p>
            <p className="text-sm text-gray-600 mt-1">I believe it was fair competition between different parties.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Citizen A:</p>
            <p className="text-gray-700">Naʿam, wa al-muhimm anna an-nās shārakū bi-kathāfa fī at-taṣwīt.</p>
            <p className="text-sm text-gray-600 mt-1">Yes, and importantly people participated heavily in voting.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Citizen B:</p>
            <p className="text-gray-700">Hādhā yuʿakkid anna ad-dīmuqrāṭiyya tataqaddam fī biladnā.</p>
            <p className="text-sm text-gray-600 mt-1">This confirms that democracy is advancing in our country.</p>
          </div>
        </div>
      </div>
    </div>
  );
}