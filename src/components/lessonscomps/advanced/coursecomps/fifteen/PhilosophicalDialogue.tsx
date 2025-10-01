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
            <p className="font-semibold text-blue-600">Ṭālib:</p>
            <p className="text-gray-700">Ustādh, mā raʾyuka fī masʾalat al-ḥurriyya wa al-jabriyya?</p>
            <p className="text-sm text-gray-500 mt-1">Professor, what's your opinion on the question of free will versus determinism?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Ustādh:</p>
            <p className="text-gray-700">Hādhihi min akbar al-masāʾil fī at-tārīkh al-falsafī. Hal taʿtaqid anna laka ikhtiyār ḥaqīqī?</p>
            <p className="text-sm text-gray-500 mt-1">This is one of the greatest questions in philosophical history. Do you believe you have real choice?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Ṭālib:</p>
            <p className="text-gray-700">Aʿtaqid anna al-insān yaḥmil masʾūliyyat afʿālihi, wa hādhā yaʿnī wujūd al-ḥurriyya.</p>
            <p className="text-sm text-gray-500 mt-1">I believe humans bear responsibility for their actions, and this means freedom exists.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Ustādh:</p>
            <p className="text-gray-700">Ḥujja qawiyya, lākin kayf tufassir taʾthīr al-bīʾa wa al-wirātha ʿalā sulūkinā?</p>
            <p className="text-sm text-gray-500 mt-1">A strong argument, but how do you explain the influence of environment and genetics on our behavior?</p>
          </div>
        </div>
      </div>
    </div>
  );
}