"use client";

import React from 'react';

export default function OfficialCorrespondence() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Official Correspondence
      </h2>
      
      <p className="text-gray-700 mb-6">Master the language of formal letters, memos, and official documents.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-3">Letter Openings</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-green-700">Sayyidi al-muhtaram</p>
              <p className="text-gray-600 text-sm">Dear Sir (formal)</p>
            </div>
            <div>
              <p className="font-semibold text-green-700">Sayyidati al-muhtarama</p>
              <p className="text-gray-600 text-sm">Dear Madam (formal)</p>
            </div>
            <div>
              <p className="font-semibold text-green-700">Ashab as-saʿada</p>
              <p className="text-gray-600 text-sm">Your Excellencies</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-green-800 mb-3">Letter Closings</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-green-700">Taqabbalu faʾiq al-ihtiram</p>
              <p className="text-gray-600 text-sm">Accept our highest respect</p>
            </div>
            <div>
              <p className="font-semibold text-green-700">Wa tafaddalu bi-qabul</p>
              <p className="text-gray-600 text-sm">Please accept</p>
            </div>
            <div>
              <p className="font-semibold text-green-700">Fi intizar radikum</p>
              <p className="text-gray-600 text-sm">Awaiting your response</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}