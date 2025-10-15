"use client";

import React from 'react';

export default function MediationSkills() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-red-500 rounded-full mr-3"></div>
        Mediation and Conflict Resolution
      </h2>
      
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-red-800 mb-4">Mediation Language</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">De-escalation</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Daʿuna nataʿamal bi-huduʾ:</span> Let's handle this calmly</p>
              <p><span className="font-semibold">Kull taraf lahu wujhat nazar:</span> Each side has a viewpoint</p>
              <p><span className="font-semibold">Al-hiwar huwa al-hall:</span> Dialogue is the solution</p>
              <p><span className="font-semibold">La daʿi lil-tawattur:</span> There's no need for tension</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">Finding Solutions</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Yumkinuna an najid tariq:</span> We can find a way</p>
              <p><span className="font-semibold">Hunaka hulul mutaʿaddida:</span> There are multiple solutions</p>
              <p><span className="font-semibold">Nahnu fi nafs al-qarib:</span> We're in the same boat</p>
              <p><span className="font-semibold">Al-maslaha al-mushtaraka:</span> Common interest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}