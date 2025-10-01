"use client";

import React from 'react';

export default function EmergencyPhrases() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Emergency Phrases - عبارات الطوارئ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-700 mb-3">🚨 Emergency Situations</h3>
          <div className="space-y-2">
            <div><span className="font-medium">3awni!</span> - Help me!</div>
            <div><span className="font-medium">hadi urgence!</span> - This is an emergency!</div>
            <div><span className="font-medium">yt3ib bzaf</span> - He/she is very sick</div>
            <div><span className="font-medium">ghadi ymut</span> - He/she is dying</div>
            <div><span className="font-medium">3ytu l-is3af</span> - Call an ambulance</div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-lg font-semibold text-orange-700 mb-3">⚠️ Describing Pain</h3>
          <div className="space-y-2">
            <div><span className="font-medium">kay waj3ni bzaf</span> - It hurts me a lot</div>
            <div><span className="font-medium">waj3 qawi</span> - Strong/severe pain</div>
            <div><span className="font-medium">waj3 khfif</span> - Light/mild pain</div>
            <div><span className="font-medium">ma qadrtsh n-tharrak</span> - I can't move</div>
            <div><span className="font-medium">ma qadrtsh n-tanafas</span> - I can't breathe</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">📞 Important Numbers in Morocco</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-white rounded border">
            <div className="text-2xl font-bold text-red-600">15</div>
            <div className="text-sm text-gray-600">SAMU (Medical Emergency)</div>
          </div>
          <div className="text-center p-3 bg-white rounded border">
            <div className="text-2xl font-bold text-red-600">19</div>
            <div className="text-sm text-gray-600">Civil Protection</div>
          </div>
          <div className="text-center p-3 bg-white rounded border">
            <div className="text-2xl font-bold text-blue-600">190</div>
            <div className="text-sm text-gray-600">Police</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">💡 Medical History Questions</h3>
        <div className="space-y-2">
          <div><span className="font-medium">3andak shi mard?</span> - Do you have any illness?</div>
          <div><span className="font-medium">katakhud shi dwa?</span> - Are you taking any medicine?</div>
          <div><span className="font-medium">3andak hassasiya mn shi haja?</span> - Are you allergic to anything?</div>
          <div><span className="font-medium">mn imta w nta haka?</span> - Since when have you been like this?</div>
        </div>
      </div>
    </div>
  );
}