"use client";

import React from 'react';

export default function PressConferenceDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: Press Conference
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Sahafi:</p>
            <p className="text-gray-700">Sayyid al-wazir, ma taʿliqukum ʿala al-qararat al-jadida?</p>
            <p className="text-sm text-gray-500 mt-1">Mr. Minister, what's your comment on the new decisions?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Al-Wazir:</p>
            <p className="text-gray-700">Hadhihi al-qararat satakun laha taʾthir ijabi ʿala al-iqtisad al-watani.</p>
            <p className="text-sm text-gray-500 mt-1">These decisions will have a positive impact on the national economy.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Sahafi:</p>
            <p className="text-gray-700">Hal yumkinukum iʿtaʾ tafasil akthar hawl al-jadwal az-zamani?</p>
            <p className="text-sm text-gray-500 mt-1">Can you give more details about the timeline?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Al-Wazir:</p>
            <p className="text-gray-700">Sa-nabdaʾ bi-tanfidh al-marhala al-ula khilal al-shahr al-qadim.</p>
            <p className="text-sm text-gray-500 mt-1">We will begin implementing the first phase during the next month.</p>
          </div>
        </div>
      </div>
    </div>
  );
}