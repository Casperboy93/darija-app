"use client";

import React from 'react';

export default function AcademicTips() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Advanced Academic Communication Tips
      </h2>
      
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-yellow-800">Code-Switching Strategy</h3>
              <p className="text-gray-700">In academic contexts, skillfully alternate between Darija and Modern Standard Arabic to demonstrate linguistic sophistication and cultural awareness.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-yellow-800">Respectful Disagreement</h3>
              <p className="text-gray-700">Learn to disagree respectfully in academic discussions using phrases like "أحترم رأيك ولكن" (I respect your opinion, but) to maintain scholarly decorum.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-yellow-800">Building on Ideas</h3>
              <p className="text-gray-700">Use connecting phrases to build upon others' ideas and create collaborative intellectual discourse rather than competitive debate.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold text-yellow-800">Intellectual Humility</h3>
              <p className="text-gray-700">Express uncertainty appropriately with phrases like "قد يكون" (it might be) to show intellectual honesty and openness to new ideas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}