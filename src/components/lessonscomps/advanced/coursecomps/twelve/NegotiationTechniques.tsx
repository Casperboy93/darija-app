"use client";

import React from 'react';

export default function NegotiationTechniques() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Negotiation Techniques
      </h2>
      
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-orange-800 mb-4">Advanced Negotiation Language</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Opening Positions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Presenting Your Position:</p>
                <p className="text-sm text-gray-600">Mawqifunā huwwa anna...</p>
                <p className="text-xs text-gray-500">Our position is that...</p>
              </div>
              <div>
                <p className="text-sm font-medium">Expressing Flexibility:</p>
                <p className="text-sm text-gray-600">Naḥnu mustāʿiddūn lil-munāqasha</p>
                <p className="text-xs text-gray-500">We are ready for discussion</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Finding Common Ground</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Nattafiq ʿalā anna:</span> We agree that</p>
              <p><span className="font-semibold">Hunāka nuqaṭ tashābuh:</span> There are points of similarity</p>
              <p><span className="font-semibold">Yumkinunā an najid ḥall:</span> We can find a solution</p>
              <p><span className="font-semibold">Hādhā fī maṣlaḥat al-jamīʿ:</span> This is in everyone's interest</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">Diplomatic Disagreement</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Maʿa kāmil al-iḥtirām:</span> With all due respect</p>
              <p><span className="font-semibold">Lā nattafiq tamāman:</span> We don't completely agree</p>
              <p><span className="font-semibold">Hunāka sūʾ fahm:</span> There's a misunderstanding</p>
              <p><span className="font-semibold">Naḥtāj ilā tawḍīḥ:</span> We need clarification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}