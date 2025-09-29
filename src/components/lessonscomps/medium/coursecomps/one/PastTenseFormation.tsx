"use client";

import React from 'react';

export default function PastTenseFormation() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Past Tense Formation
      </h2>
      
      <div className="bg-white p-5 rounded-lg border border-blue-100 mb-4">
        <p className="mb-4">In Darija, the past tense is formed by adding specific endings to the verb stem. The endings change based on the subject pronoun.</p>
        
        <div className="text-sm bg-blue-50 p-3 rounded-md mb-4 border-l-4 border-blue-400">
          <p className="font-medium text-blue-800">Pronunciation Tip:</p>
          <p>Pay attention to the stress in past tense verbs. The stress typically falls on the last syllable of the verb stem.</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Subject</th>
              <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Ending</th>
              <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Example (kla - to eat)</th>
              <th className="py-3 px-4 border-b border-blue-100 text-blue-800">Pronunciation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="py-2 px-4 border-b">Ana (I)</td>
              <td className="py-2 px-4 border-b font-mono">-it</td>
              <td className="py-2 px-4 border-b">klit (I ate)</td>
              <td className="py-2 px-4 border-b text-gray-600 italic">kleet</td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="py-2 px-4 border-b">Nta (You - masc.)</td>
              <td className="py-2 px-4 border-b font-mono">-iti</td>
              <td className="py-2 px-4 border-b">kliti (You ate)</td>
              <td className="py-2 px-4 border-b text-gray-600 italic">klee-tee</td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="py-2 px-4 border-b">Nti (You - fem.)</td>
              <td className="py-2 px-4 border-b font-mono">-iti</td>
              <td className="py-2 px-4 border-b">kliti (You ate)</td>
              <td className="py-2 px-4 border-b text-gray-600 italic">klee-tee</td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="py-2 px-4 border-b">Huwa (He)</td>
              <td className="py-2 px-4 border-b font-mono">-a</td>
              <td className="py-2 px-4 border-b">kla (He ate)</td>
              <td className="py-2 px-4 border-b text-gray-600 italic">klah</td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="py-2 px-4 border-b">Hiya (She)</td>
              <td className="py-2 px-4 border-b font-mono">-at</td>
              <td className="py-2 px-4 border-b">klat (She ate)</td>
              <td className="py-2 px-4 border-b text-gray-600 italic">klat</td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="py-2 px-4 border-b">Hna (We)</td>
              <td className="py-2 px-4 border-b font-mono">-ina</td>
              <td className="py-2 px-4 border-b">klina (We ate)</td>
              <td className="py-2 px-4 border-b text-gray-600 italic">klee-nah</td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="py-2 px-4 border-b">Ntuma (You - plural)</td>
              <td className="py-2 px-4 border-b font-mono">-itu</td>
              <td className="py-2 px-4 border-b">klitu (You all ate)</td>
              <td className="py-2 px-4 border-b text-gray-600 italic">klee-too</td>
            </tr>
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="py-2 px-4 border-b">Huma (They)</td>
              <td className="py-2 px-4 border-b font-mono">-aw</td>
              <td className="py-2 px-4 border-b">klaw (They ate)</td>
              <td className="py-2 px-4 border-b text-gray-600 italic">klaw</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}