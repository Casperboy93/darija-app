"use client";

import React from 'react';

export default function NegativeForm() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
        Negative Form
      </h2>
      
      <div className="bg-white p-5 rounded-lg border border-blue-100 mb-4">
        <p className="mb-3">To form the negative in the past tense, add <span className="font-medium">ma</span> before the verb and <span className="font-medium">sh</span> after it.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-medium text-blue-800">Affirmative:</p>
            <p className="text-gray-700">Ana mshit l-suq.</p>
            <p className="text-gray-600 italic">(I went to the market.)</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-medium text-blue-800">Negative:</p>
            <p className="text-gray-700">Ana ma mshit-sh l-suq.</p>
            <p className="text-gray-600 italic">(I did not go to the market.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}