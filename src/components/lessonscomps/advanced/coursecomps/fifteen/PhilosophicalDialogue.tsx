"use client";

import React from 'react';

export default function PhilosophicalDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: Philosophical Discussion
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Talib:</p>
            <p className="text-gray-700">Ustadh, ma raʾyuka fi masʾalat al-hurriyya wa al-jabriyya?</p>
            <p className="text-sm text-gray-500 mt-1">Professor, what's your opinion on the question of free will versus determinism?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Ustadh:</p>
            <p className="text-gray-700">Hadhihi min akbar al-masaʾil fi at-tarikh al-falsafi. Hal taʿtaqid anna laka ikhtiyar haqiqi?</p>
            <p className="text-sm text-gray-500 mt-1">This is one of the greatest questions in philosophical history. Do you believe you have real choice?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Talib:</p>
            <p className="text-gray-700">Aʿtaqid anna al-insan yahmil masʾuliyyat afʿalihi, wa hadha yaʿni wujud al-hurriyya.</p>
            <p className="text-sm text-gray-500 mt-1">I believe humans bear responsibility for their actions, and this means freedom exists.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Ustadh:</p>
            <p className="text-gray-700">Hujja qawiyya, lakin kayf tufassir taʾthir al-biʾa wa al-wiratha ʿala sulukina?</p>
            <p className="text-sm text-gray-500 mt-1">A strong argument, but how do you explain the influence of environment and genetics on our behavior?</p>
          </div>
        </div>
      </div>
    </div>
  );
}