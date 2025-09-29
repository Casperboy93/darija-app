"use client";

import React from 'react';

export default function AdvancedPracticeScenarios() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Advanced Practice Scenarios
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-yellow-800 mb-4">Complex Conversation Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <p className="font-medium text-yellow-800 mb-2">Scenario 1: Job Interview</p>
            <p className="text-sm text-gray-700 mb-2">You're interviewing for a management position. Discuss your leadership philosophy and vision for the company.</p>
            <p className="text-xs text-gray-500">Use: persuasion, complex opinions, future plans</p>
          </div>
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <p className="font-medium text-yellow-800 mb-2">Scenario 2: Family Discussion</p>
            <p className="text-sm text-gray-700 mb-2">Discuss a major family decision like moving to another city or changing careers.</p>
            <p className="text-xs text-gray-500">Use: emotions, pros/cons, family dynamics</p>
          </div>
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <p className="font-medium text-yellow-800 mb-2">Scenario 3: Academic Debate</p>
            <p className="text-sm text-gray-700 mb-2">Participate in a university debate about social media's impact on society.</p>
            <p className="text-xs text-gray-500">Use: evidence, counterarguments, formal language</p>
          </div>
          <div className="bg-white p-4 rounded-md border border-yellow-100">
            <p className="font-medium text-yellow-800 mb-2">Scenario 4: Storytelling Evening</p>
            <p className="text-sm text-gray-700 mb-2">Tell a captivating story about a life-changing experience to friends.</p>
            <p className="text-xs text-gray-500">Use: narrative techniques, emotions, descriptive language</p>
          </div>
        </div>
      </div>
    </div>
  );
}