"use client";

import React from 'react';

export default function PracticeDialogue() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        <div className="h-8 w-1.5 bg-yellow-500 rounded-full mr-3"></div>
        Practice Dialogue
      </h2>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h3 className="font-semibold text-yellow-800 mb-4">Debate: Traditional vs. Modern Education</h3>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-gray-800">Ahmed:</p>
            <p className="text-gray-700">Ana muqtani' bi-anna al-ta'lim al-taqlidi afdal min al-ta'lim al-hadith.</p>
            <p className="text-sm text-gray-600 mt-1">I am convinced that traditional education is better than modern education.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Fatima:</p>
            <p className="text-gray-700">La yumkinuni an uwafiq. Al-ta'lim al-hadith yu'ti al-tullab fursan akthar.</p>
            <p className="text-sm text-gray-600 mt-1">I cannot agree. Modern education gives students more opportunities.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
            <p className="font-medium text-gray-800">Ahmed:</p>
            <p className="text-gray-700">Lakin al-ta'lim al-taqlidi yu'allim al-ihtiram wa al-indibat.</p>
            <p className="text-sm text-gray-600 mt-1">But traditional education teaches respect and discipline.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
            <p className="font-medium text-gray-800">Fatima:</p>
            <p className="text-gray-700">Hadha sahih, lakin al-ta'lim al-hadith yu'allim al-ibda' wa al-tafkir al-naqdi.</p>
            <p className="text-sm text-gray-600 mt-1">That's true, but modern education teaches creativity and critical thinking.</p>
          </div>
        </div>
      </div>
    </div>
  );
}