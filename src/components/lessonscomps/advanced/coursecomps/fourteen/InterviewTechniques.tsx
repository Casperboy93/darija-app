"use client";

import React from 'react';

export default function InterviewTechniques() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Interview Techniques
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-green-800 mb-4">Professional Interviewing</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Opening Questions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Hal yumkinuka an tuhaddithuna ʿan...</p>
                <p className="text-xs text-gray-600">Can you tell us about...</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ma raʾyuka fi...</p>
                <p className="text-xs text-gray-600">What's your opinion on...</p>
              </div>
              <div>
                <p className="text-sm font-medium">Kayf tafassir...</p>
                <p className="text-xs text-gray-600">How do you explain...</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ma hiya khittatuka li...</p>
                <p className="text-xs text-gray-600">What's your plan for...</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">Follow-up Questions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-medium">Hal yumkinuka tawdih dhalik akthar?</p>
                <p className="text-xs text-gray-600">Can you clarify that more?</p>
              </div>
              <div>
                <p className="text-sm font-medium">Ma alladhi taqsuduhu bi...</p>
                <p className="text-xs text-gray-600">What do you mean by...</p>
              </div>
              <div>
                <p className="text-sm font-medium">Hal hunaka amthila ʿala dhalik?</p>
                <p className="text-xs text-gray-600">Are there examples of that?</p>
              </div>
              <div>
                <p className="text-sm font-medium">Kayf tataʿamal maʿa...</p>
                <p className="text-xs text-gray-600">How do you deal with...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}