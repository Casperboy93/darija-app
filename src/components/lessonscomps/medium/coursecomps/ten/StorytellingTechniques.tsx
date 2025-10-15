"use client";

import React from 'react';

export default function StorytellingTechniques() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Storytelling Techniques
      </h2>
      
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
        <h3 className="font-bold text-lg text-green-800 mb-4">Narrative Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md border border-green-100">
            <h4 className="font-semibold text-green-700 mb-2">Opening</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Kan ya ma kan:</span> Once upon a time</p>
              <p><span className="font-semibold">F wahid l waqt:</span> At one time</p>
              <p><span className="font-semibold">Qadiman:</span> Long ago</p>
              <p><span className="font-semibold">Hkaya tawila:</span> A long story</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md border border-green-100">
            <h4 className="font-semibold text-green-700 mb-2">Development</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">U ba3d hakka:</span> And after that</p>
              <p><span className="font-semibold">Faj'a:</span> Suddenly</p>
              <p><span className="font-semibold">F nafs l waqt:</span> At the same time</p>
              <p><span className="font-semibold">Lakin:</span> But</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md border border-green-100">
            <h4 className="font-semibold text-green-700 mb-2">Conclusion</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">F l akhir:</span> In the end</p>
              <p><span className="font-semibold">U hakka:</span> And so</p>
              <p><span className="font-semibold">Khalas l hkaya:</span> End of story</p>
              <p><span className="font-semibold">U 3ashu bi khayr:</span> And they lived happily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}