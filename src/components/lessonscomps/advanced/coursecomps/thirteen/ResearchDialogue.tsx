"use client";

import React from 'react';

export default function ResearchDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue: Research Conference
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Dr. Ahmad:</p>
            <p className="text-gray-700">Sa-uqaddim lakum nataʾij bahthina hawl taʾthir at-takhnulujiya ʿala at-taʿlim.</p>
            <p className="text-sm text-gray-500 mt-1">I will present to you the results of our research on the impact of technology on education.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Dr. Fatima:</p>
            <p className="text-gray-700">Ma hiya al-manhajiyya allati istaʿmaltumuha fi hadhihi ad-dirasa?</p>
            <p className="text-sm text-gray-500 mt-1">What methodology did you use in this study?</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-semibold text-blue-600">Dr. Ahmad:</p>
            <p className="text-gray-700">Istaʿmalna manhajan mukhtalitan: istibiyanat wa muqabalat maʿa 500 talib.</p>
            <p className="text-sm text-gray-500 mt-1">We used a mixed methodology: surveys and interviews with 500 students.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-semibold text-green-600">Dr. Fatima:</p>
            <p className="text-gray-700">Hadhihi nataʾij muhimma. Hal takhtalifu bakhtalaf al-marahil at-taʿlimiyya?</p>
            <p className="text-sm text-gray-500 mt-1">These are important results. Do they differ according to educational levels?</p>
          </div>
        </div>
      </div>
    </div>
  );
}