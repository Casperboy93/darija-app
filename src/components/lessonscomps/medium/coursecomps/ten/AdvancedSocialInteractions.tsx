"use client";

import React from 'react';

export default function AdvancedSocialInteractions() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-blue-500 rounded-full mr-3"></div>
        Advanced Social Interactions
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-blue-800 mb-4">Sophisticated Social Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Giving Compliments</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Mashkūr 3la...</span> Thank you for...</p>
              <p><span className="font-semibold">3ajbatnī ṭarīqtak f...</span> I liked your way of...</p>
              <p><span className="font-semibold">Nta/Nti māhir/māhra f...</span> You're skilled at...</p>
              <p><span className="font-semibold">Hāda 3amal rāʾi3</span> This is excellent work</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Handling Criticism</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Shukran 3la n naṣīḥa</span> Thanks for the advice</p>
              <p><span className="font-semibold">Ghādi nākhud hāda bi 3ayn l i3tibār</span> I'll take this into consideration</p>
              <p><span className="font-semibold">3andak ḥaqq f ba3ḍ n nuqaṭ</span> You're right about some points</p>
              <p><span className="font-semibold">Hāda yusā3idnī nataḥassan</span> This helps me improve</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}