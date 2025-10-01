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
              <p><span className="font-semibold">Daʿūnā nataʿāmal bi-hudūʾ:</span> Let's handle this calmly</p>
              <p><span className="font-semibold">Kull ṭaraf lahu wujhat naẓar:</span> Each side has a viewpoint</p>
              <p><span className="font-semibold">Al-ḥiwār huwa al-ḥall:</span> Dialogue is the solution</p>
              <p><span className="font-semibold">Lā dāʿī lil-tawattur:</span> There's no need for tension</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">Finding Solutions</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">Yumkinunā an najid ṭarīq:</span> We can find a way</p>
              <p><span className="font-semibold">Hunāka ḥulūl mutaʿaddida:</span> There are multiple solutions</p>
              <p><span className="font-semibold">Naḥnu fī nafs al-qārib:</span> We're in the same boat</p>
              <p><span className="font-semibold">Al-maṣlaḥa al-mushtaraka:</span> Common interest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}