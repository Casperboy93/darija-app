"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="font-semibold text-yellow-800 mb-4">Discussing Technology Issues</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-medium text-gray-800 mb-2">Ahmed:</p>
            <p className="text-gray-700 mb-1">Al-ḥāsūb lā yaʿmal. Mā al-mushkila?</p>
            <p className="text-sm text-gray-600">The computer doesn't work. What's the problem?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-medium text-gray-800 mb-2">Fatima:</p>
            <p className="text-gray-700 mb-1">Rubbamā inqaṭaʿa al-ittiṣāl bi-al-internet.</p>
            <p className="text-sm text-gray-600">Maybe the internet connection is lost.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-medium text-gray-800 mb-2">Ahmed:</p>
            <p className="text-gray-700 mb-1">Kayfa yumkinunī faḥṣ al-ittiṣāl?</p>
            <p className="text-sm text-gray-600">How can I check the connection?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-medium text-gray-800 mb-2">Fatima:</p>
            <p className="text-gray-700 mb-1">Jarrib iʿādat tashghīl al-rāwtar, thumma ḥāwil marra ukhrā.</p>
            <p className="text-sm text-gray-600">Try restarting the router, then try again.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-medium text-gray-800 mb-2">Ahmed:</p>
            <p className="text-gray-700 mb-1">Shukran! Sayaʿmal al-ān. Hal yuḥtāj ilā taḥdīth?</p>
            <p className="text-sm text-gray-600">Thank you! It will work now. Does it need an update?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-medium text-gray-800 mb-2">Fatima:</p>
            <p className="text-gray-700 mb-1">Naʿam, min al-afḍal taḥdīth al-barnāmij li-ḥimāya afḍal.</p>
            <p className="text-sm text-gray-600">Yes, it's better to update the software for better protection.</p>
          </div>
        </div>
      </div>
    </div>
  );
}