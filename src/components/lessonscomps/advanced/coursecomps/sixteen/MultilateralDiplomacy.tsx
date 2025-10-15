"use client";

import React from 'react';

export default function MultilateralDiplomacy() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Multilateral Diplomacy
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-3">Summit Meetings</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-teal-700">Qimma</p>
              <p className="text-gray-600 text-sm">Summit</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Muʾtamar</p>
              <p className="text-gray-600 text-sm">Conference</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Jalsa ʿamma</p>
              <p className="text-gray-600 text-sm">Plenary session</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Lajan farʿiyya</p>
              <p className="text-gray-600 text-sm">Working committees</p>
            </div>
          </div>
        </div>
        
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg">
          <h3 className="font-bold text-lg text-teal-800 mb-3">Voting and Decisions</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-teal-700">Taswit</p>
              <p className="text-gray-600 text-sm">Voting</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Ijmaʿ</p>
              <p className="text-gray-600 text-sm">Consensus</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Aghalbiyya</p>
              <p className="text-gray-600 text-sm">Majority</p>
            </div>
            <div>
              <p className="font-semibold text-teal-700">Haqq naqd</p>
              <p className="text-gray-600 text-sm">Veto power</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}