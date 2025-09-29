"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
        <h3 className="font-semibold text-teal-800 mb-4">Complex Discussion - Planning a Project</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-teal-400">
            <p className="font-medium text-gray-800">Ahmed:</p>
            <p className="text-gray-700">Al-mashrūʿ lli khāṣṣna ndiruū lāzim ykūn kāmil qbal nihāyat ash-shahr.</p>
            <p className="text-sm text-gray-600 mt-1">The project that we need to do must be complete before the end of the month.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Fatima:</p>
            <p className="text-gray-700">Īwa, khāṣṣna nṭlbu min al-farīq lli ʿandū al-khibra yāʿawnūna.</p>
            <p className="text-sm text-gray-600 mt-1">Yes, we need to ask the team that has experience to help us.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-teal-400">
            <p className="font-medium text-gray-800">Ahmed:</p>
            <p className="text-gray-700">Lū kān ʿandna waqt aktar, kān yimkin ndiruū ḥāja aḥsan.</p>
            <p className="text-sm text-gray-600 mt-1">If we had more time, we could do something better.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Fatima:</p>
            <p className="text-gray-700">Wālū kān ṣaʿb, lāzim nḥāwlu ndiruū aḥsan mā yimkin.</p>
            <p className="text-sm text-gray-600 mt-1">Even though it's difficult, we must try to do the best we can.</p>
          </div>
        </div>
      </div>
    </div>
  );
}