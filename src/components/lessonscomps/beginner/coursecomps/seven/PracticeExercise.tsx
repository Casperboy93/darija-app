"use client";

import React from 'react';

export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-green-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-800 mb-4">Navigation Challenge</h3>
        <p className="text-gray-700 mb-4">You're lost in Marrakech and need to get to Jamaa el-Fna square. Practice asking a local for help and understanding their directions.</p>
        
        <div className="bg-white p-4 rounded-md border border-green-100">
          <p className="font-medium text-green-800 mb-2">Key phrases to practice:</p>
          <ul className="list-disc ml-5 space-y-1 text-gray-700">
            <li>Fin kayn Jamaa el-Fna? (Where is Jamaa el-Fna?)</li>
        <li>Qrib mn hna? (Is it close to here?)</li>
        <li>Kifash nmshi l-tmma? (How do I go there?)</li>
        <li>Bghit taksi (I want a taxi)</li>
            <li>Wqf hna, afak (Stop here, please)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}