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
            <p className="font-semibold text-blue-600">Aḥmad:</p>
            <p className="text-gray-700">Qrīt qasīda jadīda lil-shāʿir Muḥammad al-Maghribī. Kānat rāʾiʿa!</p>
            <p className="text-sm text-gray-500 mt-1">I read a new poem by the poet Muhammad al-Maghribi. It was wonderful!</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-semibold text-pink-600">Fāṭima:</p>
            <p className="text-gray-700">Ayy mawḍūʿ kānat tuʿālij? Ana uḥibb ash-shiʿr alladhī yataḥaddath ʿan al-ḥubb wa al-ṭabīʿa.</p>
            <p className="text-sm text-gray-500 mt-1">What subject did it address? I love poetry that talks about love and nature.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Aḥmad:</p>
            <p className="text-gray-700">Kānat ʿan al-hanīn lil-waṭan. Istaʿmal ṣuwar jamīla min aṭ-ṭabīʿa al-Maghribiyya.</p>
            <p className="text-sm text-gray-500 mt-1">It was about homesickness. He used beautiful images from Moroccan nature.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-semibold text-pink-600">Fāṭima:</p>
            <p className="text-gray-700">Hādhā yudhakirunī bi-shiʿr al-malhūn. Fīhi basāṭa wa ṣidq fī al-taʿbīr.</p>
            <p className="text-sm text-gray-500 mt-1">This reminds me of malhun poetry. It has simplicity and sincerity in expression.</p>
          </div>
        </div>
      </div>
    </div>
  );
}