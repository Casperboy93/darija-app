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
            <p className="font-semibold text-blue-600">As-Safir al-Maghribi:</p>
            <p className="text-gray-700">Yashrafuni an uʿbir ʿan taqdir hukumati lil-juhud al-mubadhula fi hall hadhihi al-azma.</p>
            <p className="text-sm text-gray-500 mt-1">I have the honor to express my government's appreciation for the efforts made in resolving this crisis.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">As-Safir al-Faransi:</p>
            <p className="text-gray-700">Nahnu muqtaniʿun bi-anna al-hall yajibu an yakun ʿan tariq al-tafawud wa al-hiwar.</p>
            <p className="text-sm text-gray-500 mt-1">We are convinced that the solution must come through negotiation and dialogue.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">As-Safir al-Maghribi:</p>
            <p className="text-gray-700">Nahnu mustaʿiddun lil-musharaka fi ayy mubadara tadʿam al-istiqrar fi al-mintaqa.</p>
            <p className="text-sm text-gray-500 mt-1">We are ready to participate in any initiative that supports stability in the region.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">As-Safir al-Faransi:</p>
            <p className="text-gray-700">Hadha yatatallab tansiq wathiq bayna jamiʿ al-atraf al-muʿniyya.</p>
            <p className="text-sm text-gray-500 mt-1">This requires close coordination between all concerned parties.</p>
          </div>
        </div>
      </div>
    </div>
  );
}