"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <p className="text-gray-700 mb-6">A conversation about visiting a Moroccan family.</p>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-semibold text-yellow-800 mb-2">Sarah (Guest):</p>
            <p className="text-gray-800 mb-1">As-salāmu ʿalaykum. Kayf ṣaḥtak?</p>
            <p className="text-gray-600 text-sm">Peace be upon you. How is your health?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-semibold text-yellow-800 mb-2">Fatima (Host):</p>
            <p className="text-gray-800 mb-1">Wa ʿalaykum as-salām. Al-ḥamdu lillāh, bi-khayr. Tfaḍḍalī, udkhulī.</p>
            <p className="text-gray-600 text-sm">And upon you peace. Praise be to God, I'm well. Please, come in.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-semibold text-yellow-800 mb-2">Sarah:</p>
            <p className="text-gray-800 mb-1">Shukran. Jabayt laki ḥalwā min Fās.</p>
            <p className="text-gray-600 text-sm">Thank you. I brought you sweets from Fez.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-semibold text-yellow-800 mb-2">Fatima:</p>
            <p className="text-gray-800 mb-1">Bārak Allāhu fīki! Mā kān lāzim. Tfaḍḍalī, ijlisī. Sa-uḥaḍḍir laki atāy.</p>
            <p className="text-gray-600 text-sm">May God bless you! You shouldn't have. Please, sit down. I'll prepare tea for you.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-semibold text-yellow-800 mb-2">Sarah:</p>
            <p className="text-gray-800 mb-1">Shukran jazīlan. Kayf al-ʿāʾila?</p>
            <p className="text-gray-600 text-sm">Thank you very much. How is the family?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="font-semibold text-yellow-800 mb-2">Fatima:</p>
            <p className="text-gray-800 mb-1">Kulluhum bi-khayr, al-ḥamdu lillāh. Wa kayf ʿāʾilatuki?</p>
            <p className="text-gray-600 text-sm">They're all well, praise be to God. And how is your family?</p>
          </div>
        </div>
      </div>
    </div>
  );
}