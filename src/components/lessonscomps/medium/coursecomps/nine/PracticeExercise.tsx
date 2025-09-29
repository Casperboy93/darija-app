"use client";

import React from 'react';

export default function PracticeExercise() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-teal-500 rounded-full mr-3"></div>
        Practice Exercise
      </h2>
      
      <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-teal-800 mb-4">Cultural Presentation</h3>
        <p className="text-gray-700 mb-4">Prepare a presentation about a Moroccan tradition using these elements:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md border border-teal-100">
            <p className="font-medium text-teal-800 mb-2">Structure your presentation:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>1. Introduction: "Ghādi nḥkī 3la..." (I'm going to talk about...)</li>
              <li>2. History: "Hād t taqālīd jāt men..." (This tradition came from...)</li>
              <li>3. Practice: "Kanṭayybu u kandīru..." (We prepare and do...)</li>
              <li>4. Significance: "Hāda muhimm ḥīt..." (This is important because...)</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-md border border-teal-100">
            <p className="font-medium text-teal-800 mb-2">Choose a topic:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Tea ceremony (Atāy)</li>
              <li>• Wedding traditions (3urs)</li>
              <li>• Ramadan customs (Ramaḍān)</li>
              <li>• Traditional music (Mūsīqā)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}