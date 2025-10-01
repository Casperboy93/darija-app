"use client";

import React from 'react';

export default function GrammaticalStructures() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Grammatical Structures
      </h2>
      
      <p className="text-gray-700 mb-6">Master the grammatical differences that distinguish formal from casual speech:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Verb Conjugations</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-purple-800">Present Tense (I write)</p>
              <p className="text-gray-600 text-sm">Darija: Ana kan-kteb</p>
              <p className="text-gray-800 text-sm font-medium">Fusha: Ana aktub</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Past Tense (I wrote)</p>
              <p className="text-gray-600 text-sm">Darija: Ana ktbt</p>
              <p className="text-gray-800 text-sm font-medium">Fusha: Ana katabtu</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Future Tense (I will write)</p>
              <p className="text-gray-600 text-sm">Darija: Ana ghadi n-kteb</p>
              <p className="text-gray-800 text-sm font-medium">Fusha: Ana sa-aktub</p>
            </div>
          </div>
        </div>
        
        <div className="border border-purple-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Sentence Structure</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-purple-800">Question Formation</p>
              <p className="text-gray-600 text-sm">Darija: Wash nta mzyan?</p>
              <p className="text-gray-800 text-sm font-medium">Fusha: Hal anta bi-khayr?</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Negation</p>
              <p className="text-gray-600 text-sm">Darija: Ma-kan-qrash</p>
              <p className="text-gray-800 text-sm font-medium">Fusha: La aqra2</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Possession</p>
              <p className="text-gray-600 text-sm">Darija: Dyali</p>
              <p className="text-gray-800 text-sm font-medium">Fusha: Li / Khassi bi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}