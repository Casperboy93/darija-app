"use client";

import React from 'react';

export default function CulturalTips() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Cultural Tips
      </h2>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-medium text-purple-700 mb-2">Time Flexibility</h3>
          <p className="text-gray-700">
            Moroccans often have a flexible approach to time. When making future plans, it's common to add 
            <strong> "inshallah"</strong> (God willing) to show respect for the uncertainty of the future.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-medium text-purple-700 mb-2">Social Expectations</h3>
          <p className="text-gray-700">
            When discussing future plans, Moroccans often include family and community considerations. 
            Plans are frequently made collectively rather than individually.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-medium text-purple-700 mb-2">Politeness in Planning</h3>
          <p className="text-gray-700">
            Use <strong>"ila bghiti"</strong> (if you want) when suggesting future activities to others. 
            This shows respect for their autonomy and preferences.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-md border border-purple-100">
          <h3 className="font-medium text-purple-700 mb-2">Common Expressions</h3>
          <div className="space-y-2">
            <div><strong>Inshallah gha nshufk ghedda</strong> - God willing, I'll see you tomorrow</div>
            <div><strong>Gha nshuf w ngul lik</strong> - I'll see and tell you (I'll let you know)</div>
            <div><strong>Ila kan Allah</strong> - If God wills (used for uncertain future events)</div>
          </div>
        </div>
      </div>
    </div>
  );
}