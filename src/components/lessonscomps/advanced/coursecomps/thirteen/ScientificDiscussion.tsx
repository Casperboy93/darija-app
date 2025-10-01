"use client";

import React from 'react';

export default function ScientificDiscussion() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Scientific Discussion and Debate
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Academic Discourse</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Presenting Evidence</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Al-adilla tushīr ilā:</span> Evidence points to</p>
              <p><span className="font-semibold">Wafqan lil-dirāsāt:</span> According to studies</p>
              <p><span className="font-semibold">Hādhā yuthbit anna:</span> This proves that</p>
              <p><span className="font-semibold">Lā yumkin inkār:</span> Cannot deny</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Questioning and Analysis</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Kayf yumkin tafsīr:</span> How can we interpret</p>
              <p><span className="font-semibold">Mā hiya al-asbāb:</span> What are the causes</p>
              <p><span className="font-semibold">Hal hunāka ʿalāqa:</span> Is there a relationship</p>
              <p><span className="font-semibold">Mā madā ṣiḥḥat:</span> How valid is</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}