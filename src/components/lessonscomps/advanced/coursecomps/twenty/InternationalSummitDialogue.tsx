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
            <p className="text-gray-700">Al-Maghrib yataṭallaʿu ilā tawsīʿ sharākātih al-iqtiṣādiyya maʿ jamīʿ al-qārāt.</p>
            <p className="text-sm text-gray-500 mt-1">Morocco looks forward to expanding its economic partnerships with all continents.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Minister Johnson:</p>
            <p className="text-gray-700">Naḥnu muʿjabūn bi-ruʾyat al-Maghrib li-t-tanmiya al-mustadāma wa al-ibtikār.</p>
            <p className="text-sm text-gray-500 mt-1">We are impressed by Morocco's vision for sustainable development and innovation.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Ambassador Fatima:</p>
            <p className="text-gray-700">Al-tanawwuʿ ath-thaqāfī wa al-tafāhum al-mutabādal asās najāḥ ayy sharāka.</p>
            <p className="text-sm text-gray-500 mt-1">Cultural diversity and mutual understanding are the foundation of any successful partnership.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Minister Johnson:</p>
            <p className="text-gray-700">Naḥnu mutafāʾilūn bi-shaʾn al-khuṭuwāt at-tāliya fī hādhihi al-sharāka al-istirātījiyya.</p>
            <p className="text-sm text-gray-500 mt-1">We are optimistic about the next steps in this strategic partnership.</p>
          </div>
        </div>
      </div>
    </div>
  );
}