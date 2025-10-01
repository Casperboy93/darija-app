"use client";

import React from 'react';

export default function EnvironmentalDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: Environmental Conference
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Dr. Zaynab:</p>
            <p className="text-gray-700">Al-Maghrib yaqūm bi-istithmārāt kabīra fī majāl aṭ-ṭāqa ash-shamsiyya wa ar-riyāḥ.</p>
            <p className="text-sm text-gray-500 mt-1">Morocco is making large investments in solar and wind energy.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Dr. Yūsuf:</p>
            <p className="text-gray-700">Hādhā muhimm jiddan li-taḥqīq ahdāf at-tanmiya al-mustadāma wa taqlīl al-anbiʿāthāt.</p>
            <p className="text-sm text-gray-500 mt-1">This is very important for achieving sustainable development goals and reducing emissions.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Dr. Zaynab:</p>
            <p className="text-gray-700">Naʿam, wa lākin yajibu an nuʿṭī ahamiyya akthar li-ḥimāyat at-tanawwuʿ al-ḥayawī ayḍan.</p>
            <p className="text-sm text-gray-500 mt-1">Yes, but we must also give more importance to protecting biodiversity.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Dr. Yūsuf:</p>
            <p className="text-gray-700">Muṭlaqan. Al-ḥulūl yajibu an takūn shāmila wa tataḍamman jamīʿ jawānib al-bīʾa.</p>
            <p className="text-sm text-gray-500 mt-1">Absolutely. Solutions must be comprehensive and include all environmental aspects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}