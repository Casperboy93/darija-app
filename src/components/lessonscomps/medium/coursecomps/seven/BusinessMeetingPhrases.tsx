"use client";

import React from 'react';

export default function BusinessMeetingPhrases() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Business Meeting Phrases
      </h2>
      
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">Essential Meeting Vocabulary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-purple-700">Ijtima3</p>
            <p className="text-gray-600">Meeting</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Jadwal a3māl</p>
            <p className="text-gray-600">Agenda</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Mashru3</p>
            <p className="text-gray-600">Project</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Taqrir</p>
            <p className="text-gray-600">Report</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Qarar</p>
            <p className="text-gray-600">Decision</p>
          </div>
          <div>
            <p className="font-semibold text-purple-700">Mizaniyya</p>
            <p className="text-gray-600">Budget</p>
          </div>
        </div>
      </div>
    </div>
  );
}