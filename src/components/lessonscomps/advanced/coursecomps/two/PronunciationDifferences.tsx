"use client";

import React from 'react';

export default function PronunciationDifferences() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-purple-500 rounded-full mr-3"></div>
        Pronunciation Differences
      </h2>
      
      <p className="text-gray-700 mb-6">Key pronunciation variations you'll encounter across regions:</p>
      
      <div className="space-y-4">
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">The Letter "Q" (ق)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-medium text-purple-800">Northern</p>
              <p className="text-gray-700">"G" sound</p>
              <p className="text-sm italic text-gray-500">galb (heart)</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-purple-800">Central</p>
              <p className="text-gray-700">"G" or "Q" sound</p>
              <p className="text-sm italic text-gray-500">galb/qalb</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-purple-800">Southern</p>
              <p className="text-gray-700">"G" sound</p>
              <p className="text-sm italic text-gray-500">galb</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-gray-900 mb-3">Vowel Variations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-purple-800">Word: "Where" (أين)</p>
              <ul className="mt-2 space-y-1">
                <li><span className="font-medium">Northern:</span> fayn</li>
                <li><span className="font-medium">Central:</span> feen</li>
                <li><span className="font-medium">Eastern:</span> wayn</li>
                <li><span className="font-medium">Southern:</span> feen/manik</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-purple-800">Word: "Now" (الآن)</p>
              <ul className="mt-2 space-y-1">
                <li><span className="font-medium">Northern:</span> daba</li>
                <li><span className="font-medium">Central:</span> daba</li>
                <li><span className="font-medium">Eastern:</span> tawa</li>
                <li><span className="font-medium">Southern:</span> daba/tura</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}