"use client";

import React from 'react';

export default function GlobalIssues() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Global Issues and Challenges
      </h2>
      
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-red-800 mb-4">Contemporary Global Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">Security Issues</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Irhāb:</span> Terrorism</p>
              <p><span className="font-semibold">Asliḥa damār shāmil:</span> WMD</p>
              <p><span className="font-semibold">Ṣirāʿāt:</span> Conflicts</p>
              <p><span className="font-semibold">Lājīʾūn:</span> Refugees</p>
              <p><span className="font-semibold">Amn qawmī:</span> National security</p>
              <p><span className="font-semibold">Ḥifẓ salām:</span> Peacekeeping</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">Economic & Environmental</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Taghyīr munākhī:</span> Climate change</p>
              <p><span className="font-semibold">Faqr:</span> Poverty</p>
              <p><span className="font-semibold">Tanmiya mustadāma:</span> Sustainable development</p>
              <p><span className="font-semibold">Tijāra ʿālamiyya:</span> Global trade</p>
              <p><span className="font-semibold">Azma māliyya:</span> Financial crisis</p>
              <p><span className="font-semibold">Ḥuqūq insān:</span> Human rights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}