"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="font-semibold text-yellow-800 mb-4">Business Meeting - Project Discussion</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Mr. Hassan (Manager):</p>
            <p className="text-gray-700">Yallāh nabdāw al-ijtimāʿ. Al-yawm ghādi nnaqqshu al-mashrūʿ al-jadīd.</p>
            <p className="text-sm text-gray-600 mt-1">Let's start the meeting. Today we're going to discuss the new project.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-gray-800">Amina (Team Lead):</p>
            <p className="text-gray-700">Fī raʾyī, al-mashrūʿ yiḥtāj mīzāniyya akbar min lli ḥaddadnā.</p>
            <p className="text-sm text-gray-600 mt-1">In my opinion, the project needs a bigger budget than what we determined.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Mr. Hassan:</p>
            <p className="text-gray-700">Ash raʾyak yā Youssef? Hal yimkin nzīdu al-mīzāniyya?</p>
            <p className="text-sm text-gray-600 mt-1">What do you think, Youssef? Can we increase the budget?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
            <p className="font-medium text-gray-800">Youssef (Finance):</p>
            <p className="text-gray-700">Khāṣṣna nfakkru fī hādhā. Lākin yimkin nwāfqu ʿalā ziyāda ṣaghīra.</p>
            <p className="text-sm text-gray-600 mt-1">We need to think about this. But we can agree on a small increase.</p>
          </div>
        </div>
      </div>
    </div>
  );
}