"use client";

import React from 'react';

export default function DiplomaticDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: Diplomatic Meeting
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Ambassador:</p>
            <p className="text-gray-700">Ahlan wa sahlan bikum fi sifaratina. Tasharrafna bi ziyaratikum al-karima.</p>
            <p className="text-sm text-gray-500 mt-1">Welcome to our embassy. We are honored by your kind visit.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Minister:</p>
            <p className="text-gray-700">Shukran lakum. Jiʾna li-munaqashat masaʾil muhimma tataʿallaq bil-taʿawun bayn buldayna.</p>
            <p className="text-sm text-gray-500 mt-1">Thank you. We came to discuss important matters regarding cooperation between our countries.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Ambassador:</p>
            <p className="text-gray-700">Bi kull ta'kid. Nahnu mustaʿiddun lil-hiwar al-bunaʾ wa najid hulul takhdum al-jamiʿ.</p>
            <p className="text-sm text-gray-500 mt-1">Certainly. We are ready for constructive dialogue and to find solutions that serve everyone.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Minister:</p>
            <p className="text-gray-700">Hadha ma nasbu ilayh. Al-sharaka bayn buldayna laha tarikh tawil wa mustaqbal waʿid.</p>
            <p className="text-sm text-gray-500 mt-1">This is what we aspire to. The partnership between our countries has a long history and a promising future.</p>
          </div>
        </div>
      </div>
    </div>
  );
}