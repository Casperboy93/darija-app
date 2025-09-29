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
        <h3 className="font-semibold text-pink-800 mb-4">Discussing Cultural Heritage</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Cultural Scholar A:</p>
            <p className="text-gray-700">Kayf tarā al-ʿalāqa bayn at-turāth wa al-ḥadātha fī al-Maghrib?</p>
            <p className="text-sm text-gray-600 mt-1">How do you see the relationship between heritage and modernity in Morocco?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Cultural Scholar B:</p>
            <p className="text-gray-700">Hādhihi ẓāhira thaqāfiyya muʿaqqada. Al-Maghrib yanjaḥ fī al-muḥāfaẓa ʿalā hawiyyatihi maʿa al-tanmiya.</p>
            <p className="text-sm text-gray-600 mt-1">This is a complex cultural phenomenon. Morocco succeeds in preserving its identity while developing.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Cultural Scholar A:</p>
            <p className="text-gray-700">Naʿam, wa hādhā yaẓhar fī al-miʿmār wa al-funūn at-taqlīdiyya allatī mā zālat ḥayya.</p>
            <p className="text-sm text-gray-600 mt-1">Yes, and this appears in architecture and traditional arts that remain alive.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Cultural Scholar B:</p>
            <p className="text-gray-700">Bi-l-fiʿl, al-ḥirfiyyūn al-Maghāriba yaḥmilūn amāna thaqāfiyya ʿaẓīma.</p>
            <p className="text-sm text-gray-600 mt-1">Indeed, Moroccan artisans carry a great cultural trust.</p>
          </div>
        </div>
      </div>
    </div>
  );
}