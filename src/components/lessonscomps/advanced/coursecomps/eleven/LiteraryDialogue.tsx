"use client";

import React from 'react';

export default function LiteraryDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: Literary Discussion
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Ahmad:</p>
            <p className="text-gray-700">Qrit qasida jadida lil-shaʿir Muhammad al-Maghribi. Kanat raʾiʿa!</p>
            <p className="text-sm text-gray-500 mt-1">I read a new poem by the poet Muhammad al-Maghribi. It was wonderful!</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-semibold text-pink-600">Fatima:</p>
            <p className="text-gray-700">Ayy mawduʿ kanat tuʿalij? Ana uhibb ash-shiʿr alladhi yatahaddath ʿan al-hubb wa al-tabiʿa.</p>
            <p className="text-sm text-gray-500 mt-1">What subject did it address? I love poetry that talks about love and nature.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Ahmad:</p>
            <p className="text-gray-700">Kanat ʿan al-hanin lil-watan. Istaʿmal suwar jamila min at-tabiʿa al-Maghribiyya.</p>
            <p className="text-sm text-gray-500 mt-1">It was about homesickness. He used beautiful images from Moroccan nature.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-semibold text-pink-600">Fatima:</p>
            <p className="text-gray-700">Hadha yudhakiruni bi-shiʿr al-malhun. Fihi basata wa sidq fi al-taʿbir.</p>
            <p className="text-sm text-gray-500 mt-1">This reminds me of malhun poetry. It has simplicity and sincerity in expression.</p>
          </div>
        </div>
      </div>
    </div>
  );
}