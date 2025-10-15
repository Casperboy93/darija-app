"use client";

import React from 'react';

export default function InternationalSummitDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: International Summit
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Ambassador Fatima:</p>
            <p className="text-gray-700">Al-Maghrib yatatallaʿu ila tawsiʿ sharakatih al-iqtisadiyya maʿ jamiʿ al-qarat.</p>
            <p className="text-sm text-gray-500 mt-1">Morocco looks forward to expanding its economic partnerships with all continents.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Minister Johnson:</p>
            <p className="text-gray-700">Nahnu muʿjabun bi-ruʾyat al-Maghrib li-t-tanmiya al-mustadama wa al-ibtikar.</p>
            <p className="text-sm text-gray-500 mt-1">We are impressed by Morocco's vision for sustainable development and innovation.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Ambassador Fatima:</p>
            <p className="text-gray-700">Al-tanawwuʿ ath-thaqafi wa al-tafahum al-mutabadal asas najah ayy sharaka.</p>
            <p className="text-sm text-gray-500 mt-1">Cultural diversity and mutual understanding are the foundation of any successful partnership.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Minister Johnson:</p>
            <p className="text-gray-700">Nahnu mutafaʾilun bi-shaʾn al-khutuwat at-taliya fi hadhihi al-sharaka al-istiratijiyya.</p>
            <p className="text-sm text-gray-500 mt-1">We are optimistic about the next steps in this strategic partnership.</p>
          </div>
        </div>
      </div>
    </div>
  );
}