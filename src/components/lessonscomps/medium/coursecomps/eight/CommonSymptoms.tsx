"use client";

import React from 'react';

export default function CommonSymptoms() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-orange-500 rounded-full mr-3"></div>
        Common Symptoms
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-3">Pain and Discomfort</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Waja3:</span> Pain</p>
            <p><span className="font-semibold">Ṣudā3:</span> Headache</p>
            <p><span className="font-semibold">Ḥumma:</span> Fever</p>
            <p><span className="font-semibold">Su3la:</span> Cough</p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-3">Digestive Issues</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Ghathayān:</span> Nausea</p>
            <p><span className="font-semibold">Ishāl:</span> Diarrhea</p>
            <p><span className="font-semibold">Imsāk:</span> Constipation</p>
            <p><span className="font-semibold">Ḥurqa:</span> Heartburn</p>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <h3 className="font-bold text-orange-800 mb-3">General Symptoms</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Ta3ab:</span> Fatigue</p>
            <p><span className="font-semibold">Duwār:</span> Dizziness</p>
            <p><span className="font-semibold">Ḥakka:</span> Itching</p>
            <p><span className="font-semibold">Waram:</span> Swelling</p>
          </div>
        </div>
      </div>
    </div>
  );
}