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
        <h3 className="font-semibold text-pink-800 mb-4">Discussing University Studies</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Student A:</p>
            <p className="text-gray-700">Mādhā tadrus fī al-jāmiʿa?</p>
            <p className="text-sm text-gray-600 mt-1">What do you study at university?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-gray-800">Student B:</p>
            <p className="text-gray-700">Adrus al-handasat al-ḥāsūbiyya. Wa anta?</p>
            <p className="text-sm text-gray-600 mt-1">I study computer engineering. And you?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Student A:</p>
            <p className="text-gray-700">Adrus al-ādāb al-ʿarabiyya. Kayf tajid dirāsatak?</p>
            <p className="text-sm text-gray-600 mt-1">I study Arabic literature. How do you find your studies?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-gray-800">Student B:</p>
            <p className="text-gray-700">Ṣaʿba jiddan, lākin mumaṭṭiʿa. Hal ʿindak imtiḥānāt hādhihi al-usbūʿ?</p>
            <p className="text-sm text-gray-600 mt-1">Very difficult, but interesting. Do you have exams this week?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-pink-400">
            <p className="font-medium text-gray-800">Student A:</p>
            <p className="text-gray-700">Naʿam, ʿindī imtiḥān fī at-tārīkh wa ākhar fī al-lughāt.</p>
            <p className="text-sm text-gray-600 mt-1">Yes, I have an exam in history and another in languages.</p>
          </div>
        </div>
      </div>
    </div>
  );
}